(this["webpackJsonptest-products-cards"]=this["webpackJsonptest-products-cards"]||[]).push([[0],{66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(32),c=n.n(r),a=n(26),o=n(8),s=n(18),i=n(5),d=n(14),u="https://dummyjson.com";function l(e){var t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return n&&(r.body=JSON.stringify(n),r.headers={"Content-Type":"application/json; charset=UTF-8"}),(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(u+e,r)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var b=function(e){return l(e)},j=Object(s.b)("products/load",Object(d.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b("/products/?limit=0"));case 1:case"end":return e.stop()}}),e)})))),m=Object(s.c)({name:"products",initialState:{products:[],isLoad:!1},reducers:{addProduct:function(e,t){e.products.push(t.payload)},removeProduct:function(e,t){e.products=e.products.filter((function(e){return e.id!==t.payload}))}},extraReducers:function(e){e.addCase(j.pending,(function(e){e.isLoad=!0})).addCase(j.fulfilled,(function(e,t){e.products=t.payload.products,e.isLoad=!1}))}}),p=m.actions,h=p.addProduct,O=p.removeProduct,f=m.reducer,x=Object(s.c)({name:"appliedQuery",initialState:{appliedQuery:""},reducers:{setQuery:function(e,t){e.appliedQuery=t.payload}}}),_=x.actions.setQuery,g=x.reducer,v=Object(s.c)({name:"visibleProducts",initialState:{visibleProducts:[]},reducers:{setVisibleProducts:function(e,t){e.visibleProducts=t.payload}}}),N=v.actions.setVisibleProducts,y=v.reducer,P=function(e){return e.None="None",e.Alphabetically="Alphabetically",e.Price="Price",e.Stock="Stock",e.Rating="Rating",e.Brand="Brand",e}({}),w=P.None,k=Object(s.c)({name:"filters",initialState:w,reducers:{changeFilter:function(e,t){return t.payload}}}),C=k.actions.changeFilter,S=k.reducer,L=Object(s.a)({reducer:{products:f,visibleProducts:y,appliedQuery:g,filters:S}}),E=n(3),q=n(30),A=n.n(q),T=n(0),R=n.n(T),F=n(19),Q=F.b().shape({title:F.c().min(2,"Too Short!").max(50,"Too Long!").matches(/^[0-9a-zA-Z_\-/.]+$/,"Forbidden symbols").required("Required"),author:F.c().min(2,"Too Short!").max(50,"Too Long!").matches(/^[0-9a-zA-Z_\-/.]+$/,"Forbidden symbols").required("Required"),year:F.a().min(1900,"Too Old!").required("Required"),rating:F.a().max(5,"Too Much! enter from 1 to 5").required("Required"),price:F.a().min(0,"Too Less!").max(1e5,"Too much").required("Required"),discountPercentage:F.a().max(1,"Too Much! should be from 0.01-1.00").required("Required"),brand:F.c().min(2,"Too Short!").max(50,"Too Long!").matches(/^[0-9a-zA-Z_\-/.]+$/,"Forbidden symbols").required("Required"),stock:F.a().required("Required"),thumbnail:F.c().required("Required")}),B=(n(66),n(1)),$=R.a.memo((function(){return Object(B.jsxs)("header",{className:"header header__dimensions",children:[Object(B.jsxs)("div",{className:"header__right-box",children:[Object(B.jsx)(o.c,{to:"/",className:function(e){var t=e.isActive;return A()("header__box-item",{"header__box-item--active":t})},children:Object(B.jsx)("p",{children:"HOME PAGE"})}),Object(B.jsx)(o.c,{to:"/test-page-not-found",className:function(e){var t=e.isActive;return A()("header__box-item",{"header__box-item--active":t})},children:Object(B.jsx)("p",{children:"TEST PAGE"})})]}),Object(B.jsxs)("div",{className:"header__left-box",children:[Object(B.jsx)("p",{className:"header__box-item",children:"test-task for SheepFish"}),Object(B.jsx)(o.b,{to:"https://github.com/valntyn",className:"header__box-item",rel:"noreferrer",target:"_blank",children:"Link to my GITHUB"})]})]})})),G=(n(68),function(){return Object(B.jsxs)("main",{className:"pageNotFound__wrap",children:[Object(B.jsx)("p",{className:"pageNotFound__text",children:"Page not found, please return back"}),Object(B.jsx)("div",{className:"pageNotFound__img"})]})}),M=n(4),z=function(){return Object(a.b)()},D=a.c,I=n(33),J=Object(I.a)([function(e){return e.products.products},function(e){return e.appliedQuery.appliedQuery}],(function(e,t){return t?e.filter((function(e){var n=e.title,r=e.description,c=e.brand;return n.toLowerCase().trim().includes(t)||(null===r||void 0===r?void 0:r.toLowerCase().trim().includes(t))||c.toLowerCase().trim().includes(t)})):e})),U=Object(I.a)([J,function(e){return e.filters}],(function(e,t){switch(t){case P.None:return e;case P.Price:return e.slice().sort((function(e,t){return t.price-e.price}));case P.Alphabetically:return e.slice().sort((function(e,t){return e.title.localeCompare(t.title)}));case P.Brand:return e.slice().sort((function(e,t){return e.brand.localeCompare(t.brand)}));case P.Rating:return e.slice().sort((function(e,t){return t.rating-e.rating}));case P.Stock:return e.slice().sort((function(e,t){return t.stock-e.stock}));default:return e}})),V=R.a.memo((function(){return Object(B.jsx)("div",{className:"homepage__banner-box",children:Object(B.jsx)(o.b,{to:"/home",children:Object(B.jsx)("img",{className:"homepage__banner",src:"./assets/banner.png",alt:"products-banner"})})})})),Z=n(52);function H(e,t){var n=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(M.a)(e,2),r=t[0],c=t[1];null===c?n.delete(r):Array.isArray(c)?(n.delete(r),c.forEach((function(e){n.append(r,e)}))):n.set(r,c)})),n.toString()}n(69);var K=Object(T.memo)((function(){var e=Object(o.d)(),t=Object(M.a)(e,2),n=t[0],r=t[1],c=n.get("query")||"",a=Object(T.useState)(c),s=Object(M.a)(a,2),i=s[0],d=s[1],u=z(),l=Object(Z.a)((function(e){u(_(e.target.value))}),500);return Object(T.useEffect)((function(){u(_(c))}),[]),Object(B.jsx)("div",{className:"filter",children:Object(B.jsxs)("label",{className:"filter__box-input",htmlFor:"input",children:[Object(B.jsx)("button",{type:"button",className:"filter__input-button",children:Object(B.jsx)("div",{className:"filter__input-img"})}),Object(B.jsx)("input",{id:"input",type:"text",className:"filter__input",placeholder:"Search in catalogue...",value:i,onChange:function(e){var t;d((t=e).target.value),r(H(n,{query:t.target.value||null,page:"1"})),l(e)},autoComplete:"off"})]})})})),W=function(e){return e.visibleProducts.visibleProducts},X=(n(70),function(e){var t=e.product,n=t.price,r=t.discountPercentage,c=t.title,a=t.stock,s=t.thumbnail,i=t.rating,d=t.brand,u=t.id,l=z(),b=(n-n/100*r).toFixed();return Object(B.jsxs)("li",{className:"card",children:[Object(B.jsx)("button",{type:"button",className:"card__button-delete",onClick:function(e){return function(e,t){e.stopPropagation(),l(O(t))}(e,u)},children:Object(B.jsx)("div",{className:"card__cross"})}),Object(B.jsx)(o.b,{to:"/".concat(u),children:Object(B.jsx)("div",{className:"card__img-box",children:Object(B.jsx)("img",{src:s,alt:"product-card",className:"card__img"})})}),Object(B.jsxs)("div",{className:"card__wrapper",children:[Object(B.jsx)("div",{className:"card__information",children:Object(B.jsx)("h6",{className:"card__name",children:c})}),Object(B.jsxs)("div",{className:"card__price",children:[Object(B.jsx)("h2",{className:"card__price-amount",children:"$".concat(b)}),Object(B.jsx)("p",{className:"card__price-amount--old",children:"$".concat(n)})]}),Object(B.jsxs)("div",{className:"card__desc",children:[Object(B.jsxs)("div",{className:"card__box-left",children:[Object(B.jsx)("p",{className:"card__desc-title",children:"Brand"}),Object(B.jsx)("p",{className:"card__desc-title",children:"Rating"}),Object(B.jsx)("p",{className:"card__desc-title",children:"Stock"})]}),Object(B.jsxs)("div",{className:"card__box-right",children:[Object(B.jsx)("p",{className:"card__desc-char",children:d}),Object(B.jsx)("p",{className:"card__desc-char",children:i}),Object(B.jsx)("p",{className:"card__desc-char",children:a})]})]})]})]})}),Y=(n(71),function(){var e=D(W);return Object(B.jsx)("ul",{className:"productList",children:e.map((function(e){return Object(B.jsx)(X,{product:e},e.id)}))})}),ee=function(){return Object(B.jsxs)("div",{className:"cataloge",children:[Object(B.jsx)(K,{}),Object(B.jsx)(Y,{})]})},te=(n(72),function(e){var t,n=e.value,r=e.defaultPage,c=e.quantity,a=Object(o.d)(),s=Object(M.a)(a,1)[0],i="All"===n;return Object(B.jsx)(o.b,{className:"paginate",to:{search:(t=n,H(s,i?{page:r,perPage:"".concat(c)}:t&&!i?{page:r,perPage:t}:{perPage:null}))},children:n})}),ne=function(e){var t,n=e.title,r=e.sort,c=Object(o.d)(),a=Object(M.a)(c,1)[0],s=z();return Object(B.jsx)(o.b,{className:"paginate",to:{search:function(e){var t=e.toLowerCase();return H(a,{page:"1",sort:t})}(r)},onClick:(t=r,function(){s(C(t))}),children:n})},re=(n(73),Object(T.memo)((function(e){var t=e.itemsPerPage,n=e.total,r=e.defaultPage,c=Object(T.useState)(!1),a=Object(M.a)(c,2),o=a[0],s=a[1],i=Object(T.useState)(!1),d=Object(M.a)(i,2),u=d[0],l=d[1];return Object(T.useEffect)((function(){if(o||u){var e=function(){s(!1),l(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}}),[o,u]),Object(B.jsxs)("div",{className:"dropdown__sort-buttons",children:[Object(B.jsx)("div",{className:"dropdown__sort-right",children:Object(B.jsxs)("div",{className:"dropdown__dropdown-trigger",children:[Object(B.jsxs)("button",{type:"button",className:" dropdown__button-dropdown dropdown__button-dropdown--right ",onClick:function(){s((function(e){return!e}))},children:[Object(B.jsx)("span",{className:"dropdown__button-text",children:t}),Object(B.jsx)("span",{className:"dropdown__button-text",children:"Items on page"}),Object(B.jsx)("img",{src:"./assets/arr-down.svg",alt:"dropdown",className:"dropdown__drop-icon"})]}),o&&Object(B.jsx)("ul",{className:"dropdown__dropdown-content",children:["6","12","20","All"].map((function(e){return Object(B.jsx)("li",{children:Object(B.jsx)(te,{value:e,quantity:n,defaultPage:r},e)})}))})]})}),Object(B.jsx)("div",{className:"dropdown__sort-right",children:Object(B.jsxs)("div",{className:"dropdown__dropdown-trigger",children:[Object(B.jsxs)("button",{type:"button",className:" dropdown__button-dropdown dropdown__button-dropdown--right ",onClick:function(){l((function(e){return!e}))},children:[Object(B.jsx)("span",{className:"dropdown__button-text",children:"Sort by"}),Object(B.jsx)("img",{src:"./assets/arr-down.svg",alt:"dropdown",className:"dropdown__drop-icon"})]}),u&&Object(B.jsx)("ul",{className:"dropdown__dropdown-content",children:["Price","Stock","Alphabetically","Rating","Brand"].map((function(e){return Object(B.jsx)("li",{children:Object(B.jsx)(ne,{sort:e,title:e},e)})}))})]})})]})}))),ce=n(47),ae=function(e){var t=e.error,n=e.touched,r=e.values,c=e.handleChange,a=e.type,o=e.placeholder,s=e.name,i=e.min,d=e.max,u=e.step;return Object(B.jsxs)("div",{className:"form__field",children:[Object(B.jsx)("input",{className:"form__inp",type:a,name:s,onChange:c,value:r,placeholder:o,min:i,max:d,step:u,autoComplete:"off"}),t&&Object(B.jsx)("p",{className:"form__error",children:t&&n&&t})]})},oe=(n(74),n(75),function(e){var t=e.active,n=e.setActive,r=e.children;return Object(B.jsx)("button",{type:"button",className:A()("modal",{"modal--active":t}),onClick:function(){return n(!1)},children:Object(B.jsx)("button",{type:"button",className:"modal__content",onClick:function(e){return e.stopPropagation()},children:r})})}),se=Object(T.memo)((function(){var e=Object(T.useState)(!1),t=Object(M.a)(e,2),n=t[0],r=t[1],c=Object(T.useState)(!1),a=Object(M.a)(c,2),o=a[0],s=a[1],i=z();return Object(B.jsxs)("div",{className:"form form__dimension",children:[Object(B.jsx)("button",{type:"button",className:"form__button",onClick:function(){return r(!n)},children:Object(B.jsx)("p",{className:"form__button-title",children:"Open form to add new product"})}),n&&Object(B.jsx)(ce.b,{initialValues:{title:"",author:"TestName",year:"2023",rating:"4.22",price:"",discountPercentage:"0.32",brand:"Samsung",stock:"",thumbnail:"https://i.dummyjson.com/data/products/5/thumbnail.jpg"},validationSchema:Q,onSubmit:function(e){var t=e.thumbnail,n=e.stock,r=e.brand,c=e.discountPercentage,a=e.price,o=e.rating,d=e.author,u=e.title,l={id:+new Date,thumbnail:t,title:u,author:d,rating:+o,price:+a,discountPercentage:+c,brand:r,stock:+n};i(h(l)),s(!0)},children:function(e){var t=e.values,n=e.errors,r=e.touched,c=e.handleChange;return Object(B.jsxs)(ce.a,{className:"form__form",children:[Object(B.jsx)(ae,{placeholder:"Enter the title of a product",error:n.title,touched:r.title,values:t.title,handleChange:c,type:"text",name:"title"}),Object(B.jsx)(ae,{placeholder:"Enter your name",error:n.author,touched:r.author,values:t.author,handleChange:c,type:"text",name:"author"}),Object(B.jsx)(ae,{placeholder:"Enter the year of product creation",error:n.year,touched:r.year,values:t.year,handleChange:c,min:"1900",max:"2023",type:"number",name:"year"}),Object(B.jsx)(ae,{placeholder:"Enter the product's rating ",error:n.rating,touched:r.rating,values:t.rating,handleChange:c,type:"number",min:"0",step:"0.01",name:"rating"}),Object(B.jsx)(ae,{placeholder:"Enter the price in dollars",error:n.price,touched:r.price,values:t.price,handleChange:c,type:"number",min:"0",name:"price"}),Object(B.jsx)(ae,{placeholder:"Enter the discount",error:n.discountPercentage,touched:r.discountPercentage,values:t.discountPercentage,handleChange:c,type:"number",step:"0.01",min:"0",name:"discountPercentage"}),Object(B.jsx)(ae,{placeholder:"Enter the name of the brand",error:n.brand,touched:r.brand,values:t.brand,handleChange:c,type:"text",name:"brand"}),Object(B.jsx)(ae,{placeholder:"Enter quantity",error:n.stock,touched:r.stock,values:t.stock,handleChange:c,type:"number",min:"0",name:"stock"}),Object(B.jsx)(ae,{placeholder:"Enter url of product",error:n.thumbnail,touched:r.thumbnail,values:t.thumbnail,handleChange:c,type:"text",name:"thumbnail"}),Object(B.jsx)("button",{className:"form__button form__button--submit",type:"submit",children:"Add the new product to the list"})]})}}),Object(B.jsx)(oe,{setActive:s,active:o,children:"Product was successfully created"})]})})),ie=n(55),de=n.n(ie),ue=function(e){var t=e.currentPage,n=e.value,r=Object(o.d)(),c=Object(M.a)(r,1)[0];return Object(B.jsx)(o.b,{to:{search:function(e){switch(e){case">":return H(c,{page:"".concat(t+1)});case"<":return H(c,{page:"".concat(t-1)});default:return H(c,{page:"".concat(t)})}}(n)},children:n})},le=(n(76),function(e){var t=e.total,n=e.currentPage,r=Object(o.d)(),c=Object(M.a)(r,2),a=c[0],s=c[1];return Object(B.jsx)(de.a,{containerClassName:"pagination pagination__position",previousLinkClassName:"pagination__item",nextLinkClassName:"pagination__item",pageLinkClassName:"pagination__item",breakLinkClassName:"pagination__item",activeLinkClassName:"pagination__item--active",disabledClassName:"pagination__item--disabled",marginPagesDisplayed:1,forcePage:+n-1,pageRangeDisplayed:6,previousLabel:Object(B.jsx)(ue,{currentPage:n,value:"<"}),nextLabel:Object(B.jsx)(ue,{currentPage:n,value:">"}),onPageChange:function(e){return t=e.selected+1,void s(H(a,{page:"".concat(t)||null}));var t},breakLabel:"...",pageCount:t})}),be=(n(77),function(){return Object(B.jsx)("div",{className:"spinner"})}),je=(n(78),function(){var e=z();Object(T.useEffect)((function(){e(j())}),[]);var t=Object(o.d)(),n=Object(M.a)(t,1)[0],r=D((function(e){return e.products})).isLoad,c=Object(a.c)(U),s=c.length,i=+(n.get("page")||"1"),d=+(n.get("perPage")||"6"),u=Math.ceil(s/d),l=i*d,b=l-d,m=c.slice(b,l);return Object(T.useEffect)((function(){e(N(m))}),[s,i,c]),r?Object(B.jsx)("main",{className:"homepage homepage__container",children:Object(B.jsx)(be,{})}):Object(B.jsxs)("main",{className:"homepage homepage__container",children:[Object(B.jsx)(V,{}),Object(B.jsxs)("div",{className:"homepage__grid",children:[Object(B.jsx)(le,{currentPage:i,total:u}),Object(B.jsx)(re,{total:s,defaultPage:"1",itemsPerPage:d}),Object(B.jsx)(ee,{}),Object(B.jsx)(se,{})]})]})}),me=function(){return Object(B.jsxs)(B.Fragment,{children:[Object(B.jsx)($,{}),Object(B.jsx)("div",{className:"App App__container",children:Object(B.jsxs)(E.d,{children:[Object(B.jsx)(E.b,{path:"*",element:Object(B.jsx)(G,{})}),Object(B.jsx)(E.b,{path:"/",element:Object(B.jsx)(je,{})}),Object(B.jsx)(E.b,{path:"/home",element:Object(B.jsx)(E.a,{to:"/",replace:!0})}),Object(B.jsx)(E.b,{path:":id",element:Object(B.jsx)(je,{})})]})})]})};c.a.render(Object(B.jsx)(a.a,{store:L,children:Object(B.jsx)(o.a,{children:Object(B.jsx)(me,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.7b75c9b9.chunk.js.map