!function(){function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function n(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}(self.webpackChunkboubaa=self.webpackChunkboubaa||[]).push([[78],{96078:function(e,r,o){"use strict";o.r(r),o.d(r,{CartModule:function(){return w}});var i=o(38583),a=o(8165),c=o(55855),s=o(10639),d=o(83583),u=o(52344),g=o(12320),l=o(92340),p=o(91841),f=function(){var e=function(){function e(n){t(this,e),this.myHttp=n}return n(e,[{key:"sumbitOrder",value:function(t){return this.myHttp.post("".concat(l.N.protocol,"://").concat(l.N.host,":").concat(l.N.port,"/order"),t,{headers:{"Content-Type":"Application/JSON"}})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.LFG(p.eN))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e}(),h=o(90665);function m(t,e){1&t&&(s.TgZ(0,"p",23),s._uU(1," Name is required "),s.qZA())}function Z(t,e){1&t&&(s.TgZ(0,"p",23),s._uU(1," Mobile is required "),s.qZA())}function v(t,e){1&t&&(s.TgZ(0,"p",23),s._uU(1," Mobile is must be 11 numbers "),s.qZA())}function M(t,e){1&t&&(s.TgZ(0,"p",23),s._uU(1," Region is required "),s.qZA())}function x(t,e){1&t&&(s.TgZ(0,"p",23),s._uU(1," Street is required "),s.qZA())}function C(t,e){1&t&&(s.TgZ(0,"p",23),s._uU(1," Floor is required "),s.qZA())}function A(t,e){1&t&&(s.TgZ(0,"p",23),s._uU(1," Appartment is required "),s.qZA())}function b(t,e){1&t&&(s.TgZ(0,"p",24),s._uU(1," Order Placed Successfully "),s.qZA())}function q(t,e){if(1&t){var n=s.EpF();s.TgZ(0,"div",1),s.TgZ(1,"div",2),s.TgZ(2,"h2"),s._uU(3,"Order Info"),s.qZA(),s.TgZ(4,"div",3),s.TgZ(5,"label",4),s._uU(6,"Name"),s.qZA(),s.TgZ(7,"input",5,6),s.NdJ("ngModelChange",function(t){return s.CHM(n),s.oxw().username=t}),s.qZA(),s.YNc(9,m,2,0,"p",7),s.qZA(),s.TgZ(10,"div",3),s.TgZ(11,"label",8),s._uU(12,"Mobile"),s.qZA(),s.TgZ(13,"input",9,10),s.NdJ("ngModelChange",function(t){return s.CHM(n),s.oxw().mobile=t}),s.qZA(),s.YNc(15,Z,2,0,"p",7),s.YNc(16,v,2,0,"p",7),s.qZA(),s.TgZ(17,"div",3),s.TgZ(18,"label",11),s._uU(19,"Address"),s.qZA(),s.TgZ(20,"input",12,13),s.NdJ("ngModelChange",function(t){return s.CHM(n),s.oxw().region=t}),s.qZA(),s.YNc(22,M,2,0,"p",7),s.TgZ(23,"input",14,15),s.NdJ("ngModelChange",function(t){return s.CHM(n),s.oxw().street=t}),s.qZA(),s.YNc(25,x,2,0,"p",7),s.TgZ(26,"input",16,17),s.NdJ("ngModelChange",function(t){return s.CHM(n),s.oxw().floor=t}),s.qZA(),s.YNc(28,C,2,0,"p",7),s.TgZ(29,"input",18,19),s.NdJ("ngModelChange",function(t){return s.CHM(n),s.oxw().appartment=t}),s.qZA(),s.YNc(31,A,2,0,"p",7),s.YNc(32,b,2,0,"p",20),s.TgZ(33,"div"),s.TgZ(34,"button",21),s.NdJ("click",function(){return s.CHM(n),s.oxw().handleSumbitOrder()}),s._uU(35," Place Order "),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s._UZ(36,"div",22),s.qZA()}if(2&t){var r=s.MAs(8),o=s.MAs(14),i=s.MAs(21),a=s.MAs(24),c=s.MAs(27),d=s.MAs(30),u=s.oxw();s.xp6(7),s.Q6J("ngModel",u.username),s.xp6(2),s.Q6J("ngIf",r.invalid&&(r.dirty||r.touched)),s.xp6(4),s.Q6J("ngModel",u.mobile),s.xp6(2),s.Q6J("ngIf",o.invalid&&(o.dirty||o.touched)),s.xp6(1),s.Q6J("ngIf",(null==o.errors?null:o.errors.minlength)&&(o.dirty||o.touched)),s.xp6(4),s.Q6J("ngModel",u.region),s.xp6(2),s.Q6J("ngIf",i.invalid&&(i.dirty||i.touched)),s.xp6(1),s.Q6J("ngModel",u.street),s.xp6(2),s.Q6J("ngIf",a.invalid&&(a.dirty||a.touched)),s.xp6(1),s.Q6J("ngModel",u.floor),s.xp6(2),s.Q6J("ngIf",c.invalid&&(c.dirty||c.touched)),s.xp6(1),s.Q6J("ngModel",u.appartment),s.xp6(2),s.Q6J("ngIf",d.invalid&&(d.dirty||d.touched)),s.xp6(1),s.Q6J("ngIf",!!u.responseMessage),s.xp6(2),s.Q6J("disabled",r.invalid||a.invalid||o.invalid||d.invalid||c.invalid||i.invalid)}}var _=function(){var e=function(){function e(n,r,o){t(this,e),this.cartBackendCalls=n,this.cookieService=r,this.myNavigation=o,this.cartProducts=[],this.mobile="",this.username="",this.street="",this.floor="",this.appartment="",this.region="",this.total=0,this.responseMessage="",this.getCookies("cart")}return n(e,[{key:"ngOnInit",value:function(){}},{key:"getCartProductsTotal",value:function(){var t=this;this.cartProducts.forEach(function(e){t.total+=parseInt(e.price)})}},{key:"handleSumbitOrder",value:function(){var t=this;this.getCartProductsTotal();var e=this.username,n=this.region,r=this.street,o=this.floor,i=this.appartment,a=this.mobile,c=this.cartProducts,s=this.total;this.cartBackendCalls.sumbitOrder({username:e,address:{region:n,street:r,floor:o,appartment:i},mobile:a,products:c,total:s}).subscribe(function(e){"Success"===e.message&&(t.responseMessage="Order Successfully",t.cookieService.delete("cart"),setTimeout(function(){t.myNavigation.navigateByURL("/")},2e3))})}},{key:"getAddress",value:function(t){this.region=t.region,this.street=t.address}},{key:"getCookies",value:function(t){this.cookieService.check(t)&&(this.cartProducts=JSON.parse(this.cookieService.get(t)))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(s.Y36(f),s.Y36(d.N),s.Y36(u.f))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-order-page"]],decls:1,vars:1,consts:[["class","row",4,"ngIf"],[1,"row"],[1,"col-md-4","order-info"],[1,"form-group"],["for","Username"],["type","text","id","Username","required","",1,"form-control",3,"ngModel","ngModelChange"],["usernameVar","ngModel"],["class","error",4,"ngIf"],["for","Mobile"],["type","text","id","Mobile","required","","minlength","11",1,"form-control",3,"ngModel","ngModelChange"],["mobileVar","ngModel"],["for","Address"],["type","text","id","Region","required","","placeholder","Region Ex:Giza",1,"form-control",3,"ngModel","ngModelChange"],["regionVar","ngModel"],["type","text","id","Street","required","","placeholder","Street Ex:dokki St",1,"form-control",3,"ngModel","ngModelChange"],["streetVar","ngModel"],["type","text","id","Floor","required","","placeholder","Floor Ex:3",1,"form-control",3,"ngModel","ngModelChange"],["floorVar","ngModel"],["type","text","id","Appartment","required","","placeholder","Appartment Ex:10",1,"form-control",3,"ngModel","ngModelChange"],["appartmentVar","ngModel"],["class","sucess",4,"ngIf"],[1,"btn","btn-primary","form-group",3,"disabled","click"],[1,"col-md-8"],[1,"error"],[1,"sucess"]],template:function(t,e){1&t&&s.YNc(0,q,37,15,"div",0),2&t&&s.Q6J("ngIf",0!==e.cartProducts.length)},directives:[i.O5,h.Fj,h.Q7,h.JJ,h.On,h.wO],styles:["h2[_ngcontent-%COMP%]{color:#ffa07a}label[_ngcontent-%COMP%]{margin:5px 0;color:blue}input[_ngcontent-%COMP%]{margin:10px 0}.sucess[_ngcontent-%COMP%]{color:green;font-weight:700;font-size:20px;margin:20px 0}.error[_ngcontent-%COMP%]{color:red;font-size:12px}"]}),e}();function T(t,e){1&t&&(s.TgZ(0,"p",5),s._uU(1," There is no items in the cart yet! "),s.qZA())}function y(t,e){if(1&t){var n=s.EpF();s.TgZ(0,"div",10),s.TgZ(1,"div",11),s._UZ(2,"img",12),s.qZA(),s.TgZ(3,"div",13),s._uU(4),s.qZA(),s.TgZ(5,"div",13),s._uU(6),s.qZA(),s.TgZ(7,"div",13),s.TgZ(8,"button",14),s.NdJ("click",function(){var t=s.CHM(n).$implicit;return s.oxw(2).removeItemFromCart(t.name)}),s._uU(9," X "),s.qZA(),s.qZA(),s._UZ(10,"hr"),s.qZA()}if(2&t){var r=e.$implicit;s.xp6(2),s.Q6J("src",r.image,s.LSH),s.xp6(2),s.Oqu(r.price),s.xp6(2),s.Oqu(r.desc)}}function P(t,e){if(1&t&&(s.TgZ(0,"div",6),s.TgZ(1,"div",7),s.TgZ(2,"div",8),s._uU(3,"IMAGE"),s.qZA(),s.TgZ(4,"div",8),s._uU(5,"PRICE"),s.qZA(),s.TgZ(6,"div",8),s._uU(7,"TOTAL"),s.qZA(),s._UZ(8,"div",8),s.qZA(),s._UZ(9,"hr"),s.YNc(10,y,11,3,"div",9),s.qZA()),2&t){var n=s.oxw();s.xp6(10),s.Q6J("ngForOf",n.cartProducts)}}function O(t,e){if(1&t&&(s.TgZ(0,"div",15),s.TgZ(1,"h3"),s._uU(2,"Order Summary"),s.qZA(),s.TgZ(3,"p"),s.TgZ(4,"strong"),s._uU(5,"Items"),s.qZA(),s._uU(6),s.qZA(),s.TgZ(7,"p"),s.TgZ(8,"strong"),s._uU(9,"Total"),s.qZA(),s._uU(10),s._UZ(11,"br"),s._uU(12,"+"),s._UZ(13,"br"),s._uU(14,"Shipping Fees"),s.qZA(),s.qZA()),2&t){var n=s.oxw();s.xp6(6),s.hij(" : ",n.cartProducts.length,""),s.xp6(4),s.hij(" : ",n.total," ")}}var k,U,N=[{path:"",component:(k=function(){function e(n,r){t(this,e),this.cookieService=n,this.myNaviagtion=r,this.cartProducts=[],this.total=0,this.cartCookies=[],this.getCookies("cart"),this.getCartTotal()}return n(e,[{key:"ngOnInit",value:function(){}},{key:"removeItemFromCart",value:function(t){for(var e=0;e<this.cartProducts.length;e++)if(this.cartProducts[e].name===t)return this.cartProducts.splice(e,1),this.setCookies("cart",JSON.stringify(this.cartProducts)),this.cartProducts.length&&(this.total-=this.cartProducts[e].price),void this.myNaviagtion.refreshPage("cart")}},{key:"getCartTotal",value:function(){var t=this;this.cartProducts.forEach(function(e){t.total+=parseInt(e.price)})}},{key:"getCookies",value:function(t){this.cookieService.check(t)&&(this.cartProducts=JSON.parse(this.cookieService.get(t)))}},{key:"setCookies",value:function(t,e){this.cookieService.set(t,e)}}]),e}(),k.\u0275fac=function(t){return new(t||k)(s.Y36(d.N),s.Y36(u.f))},k.\u0275cmp=s.Xpm({type:k,selectors:[["app-cart-page"]],decls:7,vars:3,consts:[[1,"container"],[1,"row"],["class","cart-message",4,"ngIf"],["class","col-md-9",4,"ngIf"],["class","col-md-3 order-summary",4,"ngIf"],[1,"cart-message"],[1,"col-md-9"],["id","table-header",1,"row","table-head"],[1,"col-md-3","table-head-info"],["class","row table-data",4,"ngFor","ngForOf"],[1,"row","table-data"],[1,"col-md-3","product-img"],["alt","",1,"img-thumbnail",3,"src"],[1,"col-md-3","product-info"],[1,"btn","btn-primary",3,"click"],[1,"col-md-3","order-summary"]],template:function(t,e){1&t&&(s._UZ(0,"app-header"),s.TgZ(1,"div",0),s.TgZ(2,"div",1),s.YNc(3,T,2,0,"p",2),s.YNc(4,P,11,1,"div",3),s.YNc(5,O,15,2,"div",4),s.qZA(),s._UZ(6,"app-order-page"),s.qZA()),2&t&&(s.xp6(3),s.Q6J("ngIf",0===e.cartProducts.length),s.xp6(1),s.Q6J("ngIf",0!==e.cartProducts.length),s.xp6(1),s.Q6J("ngIf",0!==e.cartProducts.length))},directives:[g.G,i.O5,_,i.sg],styles:["img[_ngcontent-%COMP%]{width:200px}.table-head[_ngcontent-%COMP%]{margin-top:20px}.product-info[_ngcontent-%COMP%], .table-head-info[_ngcontent-%COMP%]{text-align:center}.product-info[_ngcontent-%COMP%]{padding-top:60px;font-size:20px;font-weight:700}.product-img[_ngcontent-%COMP%]{text-align:center}.table-data[_ngcontent-%COMP%]{margin-top:10px}.order-summary[_ngcontent-%COMP%]{align-items:center;border:1px solid #d3d3d3;border-radius:2px;background-color:#f7f7f7;margin-top:62px;height:200px}.order-summary[_ngcontent-%COMP%], input[_ngcontent-%COMP%]{text-align:center}.form-group[_ngcontent-%COMP%]{margin:20px 0}label[_ngcontent-%COMP%]{margin:10px 0;color:#000}h3[_ngcontent-%COMP%]{padding:10px;color:#ffa07a}hr[_ngcontent-%COMP%]{margin:20px 0}.cart-message[_ngcontent-%COMP%]{padding-top:20px;text-align:center}@media(max-width:762px){#table-header[_ngcontent-%COMP%]{display:none}}"]}),k)}],J=function(){var e=function e(){t(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[c.Bz.forChild(N)]]}),e}(),w=((U=function e(){t(this,e)}).\u0275fac=function(t){return new(t||U)},U.\u0275mod=s.oAB({type:U}),U.\u0275inj=s.cJS({providers:[d.N],imports:[[i.ez,h.u5,J,a.CoreModule]]}),U)}}])}();