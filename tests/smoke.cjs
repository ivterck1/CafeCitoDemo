const {chromium}=require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const fs=require('node:fs');
const assert=require('node:assert/strict');
(async()=>{
 const browser=await chromium.launch({headless:true,channel:"chrome"});
 const results=[];
 fs.mkdirSync('docs/verification',{recursive:true});
 try {
 for(const width of [1440,390,375]) {
  const page=await browser.newPage({viewport:{width,height:900}});
  const errors=[];
  await page.addInitScript(()=>{window.open=url=>{window.testOrderUrl=url;};});
  page.on('pageerror',e=>errors.push(e.message));
  page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
  page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});
  await page.goto('http://127.0.0.1:8017');
  await page.waitForSelector('.menu-card');
  assert.equal(await page.locator('[data-category]').count(),5);
  const strips = await page.evaluate(() => {
   const featured = document.querySelector('.specialties-grid');
   const cards = [...featured.children];
   const categories = document.querySelector('.category-list');
   const buttons = [...categories.children];
   const box = featured.getBoundingClientRect();
   return {
    featuredOverflow: featured.scrollWidth > featured.clientWidth,
    nextPeek: cards[1].getBoundingClientRect().left < box.right && cards[1].getBoundingClientRect().right > box.right,
    snap: getComputedStyle(featured).scrollSnapType,
    singleCategoryRow: buttons.every(b => b.offsetTop === buttons[0].offsetTop),
    categoryOverflow: categories.scrollWidth > categories.clientWidth,
   };
  });
  assert.equal(strips.singleCategoryRow,true);
  if(width<720) {
   assert.equal(strips.featuredOverflow,true);
   assert.equal(strips.nextPeek,true);
   assert.equal(strips.categoryOverflow,true);
   assert.equal(strips.snap,'x mandatory');
   await page.locator('.specialties-grid').evaluate(e=>e.scrollTo({left:e.scrollWidth}));
   await page.waitForTimeout(200);
   assert.ok(await page.locator('.specialties-grid').evaluate(e=>e.scrollLeft>0));
   await page.locator('.specialties-grid').evaluate(e=>e.scrollTo({left:0}));
  } else assert.equal(strips.featuredOverflow,false);
  for(const category of ['Café caliente','Café frío','Desayunos','Panadería','Postres']) {
   await page.locator(`[data-category="${category}"]`).click();
   assert.ok(await page.locator('.menu-card').count()>=3);
   assert.equal(await page.locator(`[data-category="${category}"]`).getAttribute('aria-pressed'),'true');
   for(const label of await page.locator('.dish-category').allTextContents()) assert.equal(label,category);
   const imageFile={'Café caliente':'cafe-caliente','Café frío':'cafe-frio','Desayunos':'desayunos','Panadería':'panaderia','Postres':'postres'}[category];
   for(const img of await page.locator('.dish-image img').all()) {
    assert.ok((await img.getAttribute('src')).endsWith(imageFile+'.webp'));
    await img.evaluate(e=>e.decode());
   }
   for(const button of await page.locator('.menu-card button').all()) await button.click();
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
  }
  await page.evaluate(()=>{cartItems.splice(0);saveCartToStorage();renderCart();});
  await page.locator('[data-category="Café caliente"]').click();
  await page.locator('.menu-card button').first().click();
  if(width<768)await page.locator('#mobile-order-toggle').click();
  await page.locator('[data-action="increase"]').click();
  assert.equal(await page.evaluate(()=>calculateCartSubtotal()),136);
  await page.locator('[data-action="decrease"]').click();
  assert.equal(await page.evaluate(()=>calculateCartSubtotal()),68);
  assert.equal(await page.locator('#cart-total').innerText(),await page.locator('#cart-subtotal').innerText());
  await page.reload();
  assert.equal(await page.locator('#header-cart-count').innerText(),'1');
  await page.locator('.cart-item-image').evaluate(async img=>{await img.decode();if(!img.currentSrc.endsWith('/cafe-caliente.webp'))throw Error('Miniatura incorrecta');});
  if(width<768)await page.locator('#mobile-order-toggle').click();
  await page.screenshot({path:`docs/verification/cart-${width}.png`});
  await page.locator('.whatsapp-button').click();
  assert.match(await page.locator('#order-message').innerText(),/nombre/);
  await page.locator('#customer-name').fill('Ana Prueba');
  await page.locator('.whatsapp-button').click();
  assert.match(await page.locator('#order-message').innerText(),/entrega/);
  await page.locator('[value="domicilio"]').check();
  await page.locator('.whatsapp-button').click();
  assert.match(await page.locator('#order-message').innerText(),/dirección/);
  await page.locator('#customer-address').fill('Calle de prueba 123');
  await page.locator('#order-notes').fill('Sin ingrediente de ejemplo');
  await page.evaluate(()=>{siteConfig.whatsapp.enabled=false;});
  await page.locator('.whatsapp-button').click();
  assert.match(await page.locator('#order-message').innerText(),/Configura/);
  // Se intercepta la apertura: no se envía un pedido externo.
  await page.evaluate(()=>{siteConfig.whatsapp.enabled=true;window.open=url=>{window.testOrderUrl=url;};});
  await page.locator('.whatsapp-button').click();
  const url=await page.evaluate(()=>window.testOrderUrl);
  assert.equal(new URL(url).pathname,await page.evaluate(()=>'/'+siteConfig.whatsapp.number));
  assert.equal(new URL(url).origin,'https://wa.me');
  const message=new URL(url).searchParams.get('text');
  for(const text of ['Café Cito','Ana Prueba','Calle de prueba 123','Sin ingrediente','Total:'])assert.ok(message.includes(text));
  await page.locator('[value="recoger"]').check();
  await page.locator('.whatsapp-button').click();
  assert.ok(!decodeURIComponent(await page.evaluate(()=>window.testOrderUrl)).includes('Dirección:'));
  if(width<768){
   await page.locator('#mobile-order-close').click();
   assert.equal(await page.locator('body').evaluate(e=>e.classList.contains('order-panel-open')),false);
   await page.locator('.header-cart').click();
   assert.equal(await page.locator('body').evaluate(e=>e.classList.contains('order-panel-open')),true);
  }
  await page.locator('[data-action="remove"]').click();
  assert.equal(await page.evaluate(()=>calculateCartSubtotal()),0);
  assert.ok(await page.locator('.whatsapp-button').isDisabled());
  await page.locator('.hero-actions a[href="#menu"]').click();
  await page.waitForTimeout(300);
  assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true);
  await page.evaluate(()=>localStorage.setItem(siteConfig.order.storageKey,'invalid json'));
  await page.reload();
  assert.equal(await page.locator('#header-cart-count').innerText(),'0');
  await page.evaluate(()=>{menuItems.push({id:'new',nombre:'Nuevo',descripcion:'Demo',precio:20,categoria:'Nueva categoría',imagen:siteConfig.images.productPlaceholder,disponible:true});renderCategories();});
  await page.locator('[data-category="Nueva categoría"]').click();
  assert.match(await page.locator('#menu-grid').innerText(),/Nuevo/i);
  await page.reload();
  await page.waitForSelector('.menu-card');
  await page.locator('img').evaluateAll(async images=>{for(const img of images){await img.decode();if(!img.naturalWidth)throw Error('Imagen sin cargar');if(img.currentSrc.includes('placeholder'))throw Error('Placeholder visible');}});
  await page.evaluate(()=>window.scrollTo(0,0));
  await page.screenshot({path:`docs/verification/assets-${width}.png`,fullPage:true});
  assert.deepEqual(errors,[]);
  results.push({width,status:'passed',consoleErrors:errors,horizontalOverflow:false});
  await page.close();
 }
 }finally{await browser.close();fs.writeFileSync('docs/test-results.json',JSON.stringify({date:'2026-10-22',results},null,2));}
})();
