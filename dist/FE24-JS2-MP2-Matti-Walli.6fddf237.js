class t{constructor(t){this._title=t.title,this._imageUrl=t.thumbnail,this._stock=t.stock,this._price=t.price,this._discountPercentage=t.discountPercentage,this._category=t.category,this._rating=t.rating}get title(){return this._title}get imageUrl(){return this._imageUrl}get stock(){return this._stock}get price(){return this._price}get discountPercentage(){return this._discountPercentage}get category(){return this._category}get rating(){return this._rating}getDiscountedPrice(){return parseFloat((this._price*(1-this._discountPercentage/100)).toFixed(2))}updateStock(t){t<0&&Math.abs(t)>this._stock?this._stock=0:(this._stock+=t,this._stock<0&&(this._stock=0))}}async function e(){let e=await fetch("https://dummyjson.com/products");return(await e.json()).products.map(e=>new t(e))}function r(t){let e=document.getElementById("product-container");e&&(e.innerHTML="",t.forEach(t=>{let r=function(t){let e=document.getElementById("product-card-template");if(!e)throw Error("Product card template not found");let r=e.content.cloneNode(!0).firstElementChild,c=r.querySelector(".product-title");c&&(c.textContent=t.title);let i=r.querySelector(".product-image");i&&(i.src=t.imageUrl,i.alt=t.title);let n=r.querySelector(".product-stock");n&&(n.textContent=`Lagersaldo: ${t.stock}`);let o=r.querySelector(".product-discounted-price");o&&(o.textContent=`Rabatterat pris: $${t.getDiscountedPrice()}`);let s=r.querySelector(".add-to-cart");return s&&s.addEventListener("click",()=>{t.updateStock(-1),n&&(n.textContent=`Lagersaldo: ${t.stock}`)}),r}(t);e.appendChild(r)}))}let c=[];async function i(){try{c=await e(),r(c)}catch(t){console.error("Error fetching products:",t)}}function n(){let t=[...c],e=document.getElementById("category-filter").value,i=parseFloat(document.getElementById("max-price-filter").value),n=document.getElementById("sort-filter").value;switch(e&&(t=t.filter(t=>t.category===e)),!isNaN(i)&&(t=t.filter(t=>t.price<=i)),n){case"price-asc":t=t.slice().sort((t,e)=>t.price-e.price);break;case"price-desc":t=t.slice().sort((t,e)=>e.price-t.price);break;case"rating-asc":t=t.slice().sort((t,e)=>t.rating-e.rating);break;case"rating-desc":t=t.slice().sort((t,e)=>e.rating-t.rating)}r(t)}document.addEventListener("DOMContentLoaded",()=>{document.getElementById("apply-filters")?.addEventListener("click",n)}),i();
//# sourceMappingURL=FE24-JS2-MP2-Matti-Walli.6fddf237.js.map
