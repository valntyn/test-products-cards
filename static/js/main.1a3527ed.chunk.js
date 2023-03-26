(this["webpackJsonptest-products-cards"]=this["webpackJsonptest-products-cards"]||[]).push([[0],{66:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){},71:function(e,t,n){},72:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){},75:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},78:function(e,t,n){},79:function(e,t,n){"use strict";n.r(t);var r=n(32),c=n.n(r),a=n(26),o=n(8),s=n(18),i=n(5),d=n(14),u="https://dummyjson.com";function l(e){var t,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r={method:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET"};return n&&(r.body=JSON.stringify(n),r.headers={"Content-Type":"application/json; charset=UTF-8"}),(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(u+e,r)})).then((function(e){if(!e.ok)throw new Error;return e.json()}))}var b=function(e){return l(e)},j=Object(s.b)("products/load",Object(d.a)(Object(i.a)().mark((function e(){return Object(i.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",b("/products/?limit=0"));case 1:case"end":return e.stop()}}),e)})))),m=Object(s.c)({name:"products",initialState:{products:[],isLoad:!1},reducers:{addProduct:function(e,t){e.products.push(t.payload)},removeProduct:function(e,t){e.products=e.products.filter((function(e){return e.id!==t.payload}))}},extraReducers:function(e){e.addCase(j.pending,(function(e){e.isLoad=!0})).addCase(j.fulfilled,(function(e,t){e.products=t.payload.products,e.isLoad=!1}))}}),p=m.actions,h=p.addProduct,O=p.removeProduct,f=m.reducer,x=Object(s.c)({name:"appliedQuery",initialState:{appliedQuery:""},reducers:{setQuery:function(e,t){e.appliedQuery=t.payload}}}),_=x.actions.setQuery,g=x.reducer,v=Object(s.c)({name:"visibleProducts",initialState:{visibleProducts:[]},reducers:{setVisibleProducts:function(e,t){e.visibleProducts=t.payload}}}),N=v.actions.setVisibleProducts,y=v.reducer,P=function(e){return e.None="None",e.Alphabetically="Alphabetically",e.Price="Price",e.Stock="Stock",e.Rating="Rating",e.Brand="Brand",e}({}),w=P.None,k=Object(s.c)({name:"filters",initialState:w,reducers:{changeFilter:function(e,t){return t.payload}}}),C=k.actions.changeFilter,S=k.reducer,L=Object(s.a)({reducer:{products:f,visibleProducts:y,appliedQuery:g,filters:S}}),E=n(3),q=n(30),A=n.n(q),T=n(0),R=n.n(T),F=n(19),Q="1",B=F.b().shape({title:F.c().min(2,"Too Short!").max(50,"Too Long!").matches(/^[0-9a-zA-Z_\-/.]+$/,"Forbidden symbols").required("Required"),author:F.c().min(2,"Too Short!").max(50,"Too Long!").matches(/^[0-9a-zA-Z_\-/.]+$/,"Forbidden symbols").required("Required"),year:F.a().min(1900,"Too Old!").required("Required"),rating:F.a().max(5,"Too Much! enter from 1 to 5").required("Required"),price:F.a().min(0,"Too Less!").max(1e5,"Too much").required("Required"),discountPercentage:F.a().max(1,"Too Much! should be from 0.01-1.00").required("Required"),brand:F.c().min(2,"Too Short!").max(50,"Too Long!").matches(/^[0-9a-zA-Z_\-/.]+$/,"Forbidden symbols").required("Required"),stock:F.a().required("Required"),thumbnail:F.c().required("Required")}),$=(n(66),n(1)),G=R.a.memo((function(){return Object($.jsxs)("header",{className:"header header__dimensions",children:[Object($.jsxs)("div",{className:"header__right-box",children:[Object($.jsx)(o.c,{to:"/",className:function(e){var t=e.isActive;return A()("header__box-item",{"header__box-item--active":t})},children:Object($.jsx)("p",{children:"HOME PAGE"})}),Object($.jsx)(o.c,{to:"/test-page-not-found",className:function(e){var t=e.isActive;return A()("header__box-item",{"header__box-item--active":t})},children:Object($.jsx)("p",{children:"TEST PAGE"})})]}),Object($.jsxs)("div",{className:"header__left-box",children:[Object($.jsx)("p",{className:"header__box-item",children:"test-task for SheepFish"}),Object($.jsx)(o.b,{to:"https://github.com/valntyn",className:"header__box-item",rel:"noreferrer",target:"_blank",children:"Link to my GITHUB"})]})]})})),M=(n(68),function(){return Object($.jsxs)("main",{className:"pageNotFound__wrap",children:[Object($.jsx)("p",{className:"pageNotFound__text",children:"Page not found, please return back"}),Object($.jsx)("div",{className:"pageNotFound__img"})]})}),z=n(4),D=function(){return Object(a.b)()},I=a.c,J=n(33),U=Object(J.a)([function(e){return e.products.products},function(e){return e.appliedQuery.appliedQuery}],(function(e,t){return t?e.filter((function(e){var n=e.title,r=e.description,c=e.brand;return n.toLowerCase().trim().includes(t)||(null===r||void 0===r?void 0:r.toLowerCase().trim().includes(t))||c.toLowerCase().trim().includes(t)})):e})),V=Object(J.a)([U,function(e){return e.filters}],(function(e,t){switch(t){case P.None:return e;case P.Price:return e.slice().sort((function(e,t){return t.price-e.price}));case P.Alphabetically:return e.slice().sort((function(e,t){return e.title.localeCompare(t.title)}));case P.Brand:return e.slice().sort((function(e,t){return e.brand.localeCompare(t.brand)}));case P.Rating:return e.slice().sort((function(e,t){return t.rating-e.rating}));case P.Stock:return e.slice().sort((function(e,t){return t.stock-e.stock}));default:return e}})),Z=R.a.memo((function(){return Object($.jsx)("div",{className:"homepage__banner-box",children:Object($.jsx)(o.b,{to:"/home",children:Object($.jsx)("img",{className:"homepage__banner",src:"./assets/banner.png",alt:"products-banner"})})})})),H=n(52);function K(e,t){var n=new URLSearchParams(e.toString());return Object.entries(t).forEach((function(e){var t=Object(z.a)(e,2),r=t[0],c=t[1];null===c?n.delete(r):Array.isArray(c)?(n.delete(r),c.forEach((function(e){n.append(r,e)}))):n.set(r,c)})),n.toString()}n(69);var W=Object(T.memo)((function(){var e=Object(o.d)(),t=Object(z.a)(e,2),n=t[0],r=t[1],c=D(),a=n.get("query")||"",s=Object(T.useState)(a),i=Object(z.a)(s,2),d=i[0],u=i[1],l=Object(H.a)((function(e){c(_(e.target.value))}),500);return Object(T.useEffect)((function(){c(_(a))}),[]),Object($.jsx)("div",{className:"filter",children:Object($.jsxs)("label",{className:"filter__box-input",htmlFor:"input",children:[Object($.jsx)("button",{type:"button",className:"filter__input-button",children:Object($.jsx)("div",{className:"filter__input-img"})}),Object($.jsx)("input",{id:"input",type:"text",className:"filter__input",placeholder:"Search in catalogue...",value:d,onChange:function(e){var t;u((t=e).target.value),r(K(n,{query:t.target.value||null,page:"1"})),l(e)},autoComplete:"off"})]})})})),X=function(e){return e.visibleProducts.visibleProducts},Y=(n(70),function(e){var t=e.product,n=t.price,r=t.discountPercentage,c=t.title,a=t.stock,s=t.thumbnail,i=t.rating,d=t.brand,u=t.id,l=D(),b=(n-n/100*r).toFixed();return Object($.jsxs)("li",{className:"card",children:[Object($.jsx)("button",{type:"button",className:"card__button-delete",onClick:function(e){return function(e,t){e.stopPropagation(),l(O(t))}(e,u)},children:Object($.jsx)("div",{className:"card__cross"})}),Object($.jsx)(o.b,{to:"/".concat(u),children:Object($.jsx)("div",{className:"card__img-box",children:Object($.jsx)("img",{src:s,alt:"product-card",className:"card__img"})})}),Object($.jsxs)("div",{className:"card__wrapper",children:[Object($.jsx)("div",{className:"card__information",children:Object($.jsx)("h6",{className:"card__name",children:c})}),Object($.jsxs)("div",{className:"card__price",children:[Object($.jsx)("h2",{className:"card__price-amount",children:"$".concat(b)}),Object($.jsx)("p",{className:"card__price-amount--old",children:"$".concat(n)})]}),Object($.jsxs)("div",{className:"card__desc",children:[Object($.jsxs)("div",{className:"card__box-left",children:[Object($.jsx)("p",{className:"card__desc-title",children:"Brand"}),Object($.jsx)("p",{className:"card__desc-title",children:"Rating"}),Object($.jsx)("p",{className:"card__desc-title",children:"Stock"})]}),Object($.jsxs)("div",{className:"card__box-right",children:[Object($.jsx)("p",{className:"card__desc-char",children:d}),Object($.jsx)("p",{className:"card__desc-char",children:i}),Object($.jsx)("p",{className:"card__desc-char",children:a})]})]})]})]})}),ee=(n(71),function(){var e=I(X);return Object($.jsx)("ul",{className:"productList",children:e.map((function(e){return Object($.jsx)(Y,{product:e},e.id)}))})}),te=function(){return Object($.jsxs)("div",{className:"cataloge",children:[Object($.jsx)(W,{}),Object($.jsx)(ee,{})]})},ne=(n(72),function(e){var t,n=e.value,r=e.quantity,c=Object(o.d)(),a=Object(z.a)(c,1)[0],s="All"===n;return Object($.jsx)(o.b,{className:"paginate",to:{search:(t=n,K(a,s?{page:Q,perPage:"".concat(r)}:t&&!s?{page:Q,perPage:t}:{perPage:null}))},children:n})}),re=function(e){var t,n=e.title,r=e.sort,c=Object(o.d)(),a=Object(z.a)(c,1)[0],s=D();return Object($.jsx)(o.b,{className:"paginate",to:{search:function(e){var t=e.toLowerCase();return K(a,{page:Q,sort:t})}(r)},onClick:(t=r,function(){s(C(t))}),children:n})},ce=(n(73),Object(T.memo)((function(e){var t=e.itemsPerPage,n=e.total,r=Object(T.useState)(!1),c=Object(z.a)(r,2),a=c[0],o=c[1],s=Object(T.useState)(!1),i=Object(z.a)(s,2),d=i[0],u=i[1];return Object(T.useEffect)((function(){if(a||d){var e=function(){o(!1),u(!1)};return document.addEventListener("click",e),function(){document.removeEventListener("click",e)}}}),[a,d]),Object($.jsxs)("div",{className:"dropdown__sort-buttons",children:[Object($.jsx)("div",{className:"dropdown__sort-right",children:Object($.jsxs)("div",{className:"dropdown__dropdown-trigger",children:[Object($.jsxs)("button",{type:"button",className:" dropdown__button-dropdown dropdown__button-dropdown--right ",onClick:function(){o((function(e){return!e}))},children:[Object($.jsx)("span",{className:"dropdown__button-text",children:t}),Object($.jsx)("span",{className:"dropdown__button-text",children:"Items on page"}),Object($.jsx)("img",{src:"./assets/arr-down.svg",alt:"dropdown",className:"dropdown__drop-icon"})]}),a&&Object($.jsx)("ul",{className:"dropdown__dropdown-content",children:["6","12","20","All"].map((function(e){return Object($.jsx)("li",{children:Object($.jsx)(ne,{value:e,quantity:n},e)})}))})]})}),Object($.jsx)("div",{className:"dropdown__sort-right",children:Object($.jsxs)("div",{className:"dropdown__dropdown-trigger",children:[Object($.jsxs)("button",{type:"button",className:" dropdown__button-dropdown dropdown__button-dropdown--right ",onClick:function(){u((function(e){return!e}))},children:[Object($.jsx)("span",{className:"dropdown__button-text",children:"Sort by"}),Object($.jsx)("img",{src:"./assets/arr-down.svg",alt:"dropdown",className:"dropdown__drop-icon"})]}),d&&Object($.jsx)("ul",{className:"dropdown__dropdown-content",children:["Price","Stock","Alphabetically","Rating","Brand"].map((function(e){return Object($.jsx)("li",{children:Object($.jsx)(re,{sort:e,title:e},e)})}))})]})})]})}))),ae=n(47),oe=function(e){var t=e.error,n=e.touched,r=e.values,c=e.handleChange,a=e.type,o=e.placeholder,s=e.name,i=e.min,d=e.max,u=e.step;return Object($.jsxs)("div",{className:"form__field",children:[Object($.jsx)("input",{className:"form__inp",type:a,name:s,onChange:c,value:r,placeholder:o,min:i,max:d,step:u,autoComplete:"off"}),t&&Object($.jsx)("p",{className:"form__error",children:t&&n&&t})]})},se=(n(74),n(75),function(e){var t=e.active,n=e.setActive,r=e.children;return Object($.jsx)("button",{type:"button",className:A()("modal",{"modal--active":t}),onClick:function(){return n(!1)},children:Object($.jsx)("button",{type:"button",className:"modal__content",onClick:function(e){return e.stopPropagation()},children:r})})}),ie=Object(T.memo)((function(){var e=Object(T.useState)(!1),t=Object(z.a)(e,2),n=t[0],r=t[1],c=Object(T.useState)(!1),a=Object(z.a)(c,2),o=a[0],s=a[1],i=D();return Object($.jsxs)("div",{className:"form form__dimension",children:[Object($.jsx)("button",{type:"button",className:"form__button",onClick:function(){return r(!n)},children:Object($.jsx)("p",{className:"form__button-title",children:"Open form to add new product"})}),n&&Object($.jsx)(ae.b,{initialValues:{title:"",author:"TestName",year:"2023",rating:"4.22",price:"",discountPercentage:"0.32",brand:"Samsung",stock:"",thumbnail:"https://i.dummyjson.com/data/products/5/thumbnail.jpg"},validationSchema:B,onSubmit:function(e){var t=e.thumbnail,n=e.stock,r=e.brand,c=e.discountPercentage,a=e.price,o=e.rating,d=e.author,u=e.title,l={id:+new Date,thumbnail:t,title:u,author:d,rating:+o,price:+a,discountPercentage:+c,brand:r,stock:+n};i(h(l)),s(!0)},children:function(e){var t=e.values,n=e.errors,r=e.touched,c=e.handleChange;return Object($.jsxs)(ae.a,{className:"form__form",children:[Object($.jsx)(oe,{placeholder:"Enter the title of a product",error:n.title,touched:r.title,values:t.title,handleChange:c,type:"text",name:"title"}),Object($.jsx)(oe,{placeholder:"Enter your name",error:n.author,touched:r.author,values:t.author,handleChange:c,type:"text",name:"author"}),Object($.jsx)(oe,{placeholder:"Enter the year of product creation",error:n.year,touched:r.year,values:t.year,handleChange:c,min:"1900",max:"2023",type:"number",name:"year"}),Object($.jsx)(oe,{placeholder:"Enter the product's rating ",error:n.rating,touched:r.rating,values:t.rating,handleChange:c,type:"number",min:"0",step:"0.01",name:"rating"}),Object($.jsx)(oe,{placeholder:"Enter the price in dollars",error:n.price,touched:r.price,values:t.price,handleChange:c,type:"number",min:"0",name:"price"}),Object($.jsx)(oe,{placeholder:"Enter the discount",error:n.discountPercentage,touched:r.discountPercentage,values:t.discountPercentage,handleChange:c,type:"number",step:"0.01",min:"0",name:"discountPercentage"}),Object($.jsx)(oe,{placeholder:"Enter the name of the brand",error:n.brand,touched:r.brand,values:t.brand,handleChange:c,type:"text",name:"brand"}),Object($.jsx)(oe,{placeholder:"Enter quantity",error:n.stock,touched:r.stock,values:t.stock,handleChange:c,type:"number",min:"0",name:"stock"}),Object($.jsx)(oe,{placeholder:"Enter url of product",error:n.thumbnail,touched:r.thumbnail,values:t.thumbnail,handleChange:c,type:"text",name:"thumbnail"}),Object($.jsx)("button",{className:"form__button form__button--submit",type:"submit",children:"Add the new product to the list"})]})}}),Object($.jsx)(se,{setActive:s,active:o,children:"Product was successfully created"})]})})),de=n(55),ue=n.n(de),le=function(e){var t=e.currentPage,n=e.value,r=Object(o.d)(),c=Object(z.a)(r,1)[0];return Object($.jsx)(o.b,{to:{search:function(e){switch(e){case">":return K(c,{page:"".concat(t+1)});case"<":return K(c,{page:"".concat(t-1)});default:return K(c,{page:"".concat(t)})}}(n)},children:n})},be=(n(76),function(e){var t=e.total,n=e.currentPage,r=Object(o.d)(),c=Object(z.a)(r,2),a=c[0],s=c[1];return Object($.jsx)(ue.a,{containerClassName:"pagination pagination__position",previousLinkClassName:"pagination__item",nextLinkClassName:"pagination__item",pageLinkClassName:"pagination__item",breakLinkClassName:"pagination__item",activeLinkClassName:"pagination__item--active",disabledClassName:"pagination__item--disabled",marginPagesDisplayed:1,forcePage:+n-1,pageRangeDisplayed:6,previousLabel:Object($.jsx)(le,{currentPage:n,value:"<"}),nextLabel:Object($.jsx)(le,{currentPage:n,value:">"}),onPageChange:function(e){return t=e.selected+1,void s(K(a,{page:"".concat(t)||null}));var t},breakLabel:"...",pageCount:t})}),je=(n(77),function(){return Object($.jsx)("div",{className:"spinner"})}),me=(n(78),function(){var e=D();Object(T.useEffect)((function(){e(j())}),[]);var t=Object(o.d)(),n=Object(z.a)(t,1)[0],r=I((function(e){return e.products})).isLoad,c=Object(a.c)(V),s=c.length,i=+(n.get("page")||Q),d=+(n.get("perPage")||"6"),u=Math.ceil(s/d),l=i*d,b=l-d,m=c.slice(b,l);return Object(T.useEffect)((function(){e(N(m))}),[s,i,c,d]),r?Object($.jsx)("main",{className:"homepage homepage__container",children:Object($.jsx)(je,{})}):Object($.jsxs)("main",{className:"homepage homepage__container",children:[Object($.jsx)(Z,{}),Object($.jsxs)("div",{className:"homepage__grid",children:[Object($.jsx)(be,{currentPage:i,total:u}),Object($.jsx)(ce,{total:s,itemsPerPage:d}),Object($.jsx)(te,{}),Object($.jsx)(ie,{})]})]})}),pe=function(){return Object($.jsxs)($.Fragment,{children:[Object($.jsx)(G,{}),Object($.jsx)("div",{className:"App App__container",children:Object($.jsxs)(E.d,{children:[Object($.jsx)(E.b,{path:"*",element:Object($.jsx)(M,{})}),Object($.jsx)(E.b,{path:"/",element:Object($.jsx)(me,{})}),Object($.jsx)(E.b,{path:"/home",element:Object($.jsx)(E.a,{to:"/",replace:!0})}),Object($.jsx)(E.b,{path:":id",element:Object($.jsx)(me,{})})]})})]})};c.a.render(Object($.jsx)(a.a,{store:L,children:Object($.jsx)(o.a,{children:Object($.jsx)(pe,{})})}),document.getElementById("root"))}},[[79,1,2]]]);
//# sourceMappingURL=main.1a3527ed.chunk.js.map