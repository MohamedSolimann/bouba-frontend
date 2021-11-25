!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var o=0;o<e.length;o++){var n=e[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function o(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}(self.webpackChunkboubaa=self.webpackChunkboubaa||[]).push([[804],{5804:function(e,n,c){"use strict";c.r(n),c.d(n,{ProductModule:function(){return k}});var r=c(8583),i=c(8165),s=c(5855),u=c(639),a=c(2340),d=c(1841),g=function(){var e=function(){function e(o){t(this,e),this.myHttp=o}return o(e,[{key:"getAllProducts",value:function(){return this.myHttp.get("http://".concat(a.N.host,":8080/products"),{headers:{"Content-Type":"Application/Json"}})}},{key:"getProductByCategory",value:function(t,e,o){return this.myHttp.get("http://".concat(a.N.host,":8080/products/category/").concat(t,"/").concat(e,"/").concat(o),{headers:{"Content-Type":"Application/Json"}})}},{key:"updateProduct",value:function(t,e){return this.myHttp.put("http://".concat(a.N.host,":8080/products/").concat(t),e,{headers:{"Content-Type":"Application/Json"}})}},{key:"removeProduct",value:function(t){return this.myHttp.delete("http://".concat(a.N.host,":8080/products/").concat(t))}},{key:"addProduct",value:function(t){return this.myHttp.post("http://".concat(a.N.host,":8080/products"),t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.LFG(d.eN))},e.\u0275prov=u.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),p=c(3583),l=c(2344),h=c(2320),f=c(665);function y(t,e){if(1&t){var o=u.EpF();u.TgZ(0,"button",26),u.NdJ("click",function(){u.CHM(o);var t=u.oxw().$implicit;return u.oxw().getProductid(t)}),u._uU(1," Get Product Id "),u.qZA()}}function m(t,e){if(1&t){var o=u.EpF();u.TgZ(0,"div",22),u._UZ(1,"img",23),u.TgZ(2,"p",24),u._uU(3),u.qZA(),u.TgZ(4,"p",25),u._uU(5),u.qZA(),u.TgZ(6,"button",26),u.NdJ("click",function(){var t=u.CHM(o).$implicit;return u.oxw().addToCart(t)}),u._uU(7," Addt To Cart "),u.qZA(),u.YNc(8,y,2,0,"button",27),u.qZA()}if(2&t){var n=e.$implicit,c=u.oxw();u.xp6(1),u.Q6J("src",n.image,u.LSH),u.xp6(2),u.hij("",n.price,".0EGP"),u.xp6(2),u.Oqu(n.desc),u.xp6(3),u.Q6J("ngIf",c.token)}}var Z,v=function(){var e=function(){function e(o,n,c,r){t(this,e),this.productBackendCalls=o,this.myActivedRouter=n,this.cookieService=c,this.myNavigation=r,this.products=[],this.category="",this.price="",this.desc="",this.stock="",this.status="",this.productId="",this.code="",this.productImage="",this.productCategory="",this.responseMessage="",this.product={},this.token=!1,this.page=1,this.limit=5,this.responseMessageAlert="",this.category=n.snapshot.params.category,this.handleGetProductsByCategory(this.page,this.limit),this.userAuthentication()}return o(e,[{key:"onScroll",value:function(t){document.documentElement.offsetHeight-document.documentElement.scrollTop==949&&(this.responseMessageAlert||this.handleGetProductsByCategory(this.page,this.limit))}},{key:"handleGetProductsByCategory",value:function(t,e){var o=this;this.productBackendCalls.getProductByCategory(this.category,t,e).subscribe(function(t){"Success"===t.message?o.products=o.products.concat(t.data):"No More"===t.message&&(o.products=o.products.concat(t.data),o.responseMessageAlert=t.message)}),this.page++}},{key:"addToCart",value:function(t){if(this.checkProductInCart(t))this.myNavigation.navigateByURL("cart");else{var e=this.cookieService.get("cart");if(e){var o=JSON.parse(e);o.push(t),this.cookieService.set("cart",JSON.stringify(o))}else this.cookieService.set("cart",JSON.stringify([t]));this.myNavigation.navigateByURL("cart")}}},{key:"checkProductInCart",value:function(t){var e=this.cookieService.get("cart");if(e)for(var o=JSON.parse(e),n=0;n<o.length;n++)if(o[n]._id===t._id)return!0;return!1}},{key:"getProductid",value:function(t){this.productId=t._id,this.product=t}},{key:"handleUpdateProduct",value:function(){var t=this,e=this.productId,o=this.price,n=this.stock,c=this.status,r=this.desc,i=this.productCategory,s=this.code,u=this.productImage;this.productBackendCalls.updateProduct(e,{price:o,stock:n,status:c,desc:r,category:i,code:s,image:u}).subscribe(function(e){"Updated Successfuly"===e.message&&(t.responseMessage=e.message,setTimeout(function(){t.myNavigation.refreshPage("/product/".concat(t.product.category))},1e3))})}},{key:"handleRemoveProduct",value:function(){var t=this;this.productBackendCalls.removeProduct(this.productId).subscribe(function(e){"Deleted Successfuly"===e.message&&(t.responseMessage=e.message,t.myNavigation.refreshPage("/product/".concat(t.product.category)))})}},{key:"handleAddProduct",value:function(){var t=this,e=this.price,o=this.stock,n=this.status,c=this.desc,r=this.productCategory,i=this.code,s=this.productImage;this.productBackendCalls.addProduct({price:e,stock:o,status:n,desc:c,category:r,code:i,image:s}).subscribe(function(e){"Created Successfuly"===e.message&&(t.responseMessage=e.message,setTimeout(function(){t.myNavigation.refreshPage("/product/".concat(t.category))},1e3))})}},{key:"userAuthentication",value:function(){this.token=this.cookieService.check("token")}}]),e}();return e.\u0275fac=function(t){return new(t||e)(u.Y36(g),u.Y36(s.gz),u.Y36(p.N),u.Y36(l.f))},e.\u0275cmp=u.Xpm({type:e,selectors:[["app-product-page"]],hostBindings:function(t,e){1&t&&u.NdJ("scroll",function(t){return e.onScroll(t)},!1,u.Jf7)},decls:50,vars:10,consts:[[3,"scroll"],["id","body",1,"container"],[1,"row"],["class","col-lg-4 product",4,"ngFor","ngForOf"],["for","productId"],["type","text","id","productId",3,"ngModel","ngModelChange"],["for","price"],["type","text","id","price",3,"ngModel","ngModelChange"],["for","desc"],["type","text","id","desc",3,"ngModel","ngModelChange"],["for","stock"],["type","text","id","stock",3,"ngModel","ngModelChange"],["for","productCategory"],["type","text","id","productCategory",3,"ngModel","ngModelChange"],["for","status"],["type","text","id","status",3,"ngModel","ngModelChange"],["for","code"],["type","text","id","code",3,"ngModel","ngModelChange"],["for","product-image"],["type","text","id","product-image",3,"ngModel","ngModelChange"],[1,"responseMessage"],[1,"btn","btn-success","admin-button",3,"click"],[1,"col-lg-4","product"],["alt","",1,"img-thumbnail","product-image",3,"src"],[1,"product-price"],[1,"product-desc"],[1,"btn","btn-primary",3,"click"],["class","btn btn-primary",3,"click",4,"ngIf"]],template:function(t,e){1&t&&(u.TgZ(0,"body",0),u.NdJ("scroll",function(t){return e.onScroll(t)}),u._UZ(1,"app-header"),u.TgZ(2,"div",1),u.TgZ(3,"div",2),u.YNc(4,m,9,4,"div",3),u.qZA(),u.TgZ(5,"div"),u.TgZ(6,"h3"),u._uU(7,"Admin Panel"),u.qZA(),u.TgZ(8,"div"),u.TgZ(9,"label",4),u._uU(10,"Product-Id : "),u.qZA(),u.TgZ(11,"input",5),u.NdJ("ngModelChange",function(t){return e.productId=t}),u.qZA(),u.TgZ(12,"p"),u._uU(13,"Product id used for update and remove products only"),u.qZA(),u.qZA(),u.TgZ(14,"div"),u.TgZ(15,"label",6),u._uU(16,"Price : "),u.qZA(),u.TgZ(17,"input",7),u.NdJ("ngModelChange",function(t){return e.price=t}),u.qZA(),u.qZA(),u.TgZ(18,"div"),u.TgZ(19,"label",8),u._uU(20,"Desc : "),u.qZA(),u.TgZ(21,"input",9),u.NdJ("ngModelChange",function(t){return e.desc=t}),u.qZA(),u.qZA(),u.TgZ(22,"div"),u.TgZ(23,"label",10),u._uU(24,"Stock : "),u.qZA(),u.TgZ(25,"input",11),u.NdJ("ngModelChange",function(t){return e.stock=t}),u.qZA(),u.qZA(),u.TgZ(26,"div"),u.TgZ(27,"label",12),u._uU(28,"Product Category : "),u.qZA(),u.TgZ(29,"input",13),u.NdJ("ngModelChange",function(t){return e.productCategory=t}),u.qZA(),u.qZA(),u.TgZ(30,"div"),u.TgZ(31,"label",14),u._uU(32,"Status : "),u.qZA(),u.TgZ(33,"input",15),u.NdJ("ngModelChange",function(t){return e.status=t}),u.qZA(),u.qZA(),u.TgZ(34,"div"),u.TgZ(35,"label",16),u._uU(36,"Code : "),u.qZA(),u.TgZ(37,"input",17),u.NdJ("ngModelChange",function(t){return e.code=t}),u.qZA(),u.qZA(),u.TgZ(38,"div"),u.TgZ(39,"label",18),u._uU(40,"Product Image : "),u.qZA(),u.TgZ(41,"input",19),u.NdJ("ngModelChange",function(t){return e.productImage=t}),u.qZA(),u.qZA(),u.TgZ(42,"p",20),u._uU(43),u.qZA(),u.TgZ(44,"button",21),u.NdJ("click",function(){return e.handleAddProduct()}),u._uU(45," Add Product "),u.qZA(),u.TgZ(46,"button",21),u.NdJ("click",function(){return e.handleRemoveProduct()}),u._uU(47," Remove Porduct "),u.qZA(),u.TgZ(48,"button",21),u.NdJ("click",function(){return e.handleUpdateProduct()}),u._uU(49," Update Porduct "),u.qZA(),u.qZA(),u.qZA(),u.qZA()),2&t&&(u.xp6(4),u.Q6J("ngForOf",e.products),u.xp6(7),u.Q6J("ngModel",e.productId),u.xp6(6),u.Q6J("ngModel",e.price),u.xp6(4),u.Q6J("ngModel",e.desc),u.xp6(4),u.Q6J("ngModel",e.stock),u.xp6(4),u.Q6J("ngModel",e.productCategory),u.xp6(4),u.Q6J("ngModel",e.status),u.xp6(4),u.Q6J("ngModel",e.code),u.xp6(4),u.Q6J("ngModel",e.productImage),u.xp6(2),u.Oqu(e.responseMessage))},directives:[h.G,r.sg,f.Fj,f.JJ,f.On,r.O5],styles:[".product[_ngcontent-%COMP%]{margin-top:20px;text-align:center}.product-image[_ngcontent-%COMP%]{height:400px}.product-name[_ngcontent-%COMP%]{margin-top:20px;font-size:20px}.product-price[_ngcontent-%COMP%]{font-weight:700;font-size:20px;padding-top:5px}.container[_ngcontent-%COMP%]{margin-top:20px}body[_ngcontent-%COMP%]{font-family:sans-serif}.addToCart[_ngcontent-%COMP%]{color:brown}.admin-button[_ngcontent-%COMP%]{margin:10px}.responseMessage[_ngcontent-%COMP%]{color:red}button[_ngcontent-%COMP%]{margin:10px}.img-thumbnail[_ngcontent-%COMP%]{border:none}"]}),e}(),C=[{path:"",component:v},{path:":category",component:v}],M=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=u.oAB({type:e}),e.\u0275inj=u.cJS({imports:[[s.Bz.forChild(C)],s.Bz]}),e}(),k=((Z=function e(){t(this,e)}).\u0275fac=function(t){return new(t||Z)},Z.\u0275mod=u.oAB({type:Z}),Z.\u0275inj=u.cJS({providers:[p.N],imports:[[r.ez,f.u5,M,i.CoreModule]]}),Z)}}])}();