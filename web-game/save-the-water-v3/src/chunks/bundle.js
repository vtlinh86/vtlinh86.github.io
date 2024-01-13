System.register([], function(_export, _context) { return { execute: function () {
System.register("chunks:///_virtual/Character2.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var i,e,r,a,n,o,l,s,p,h,u,c,g,b;return{setters:[function(t){i=t.applyDecoratedDescriptor,e=t.inheritsLoose,r=t.initializerDefineProperty,a=t.assertThisInitialized},function(t){n=t._decorator,o=t.Sprite,l=t.Label,s=t.Vec3,p=t.tween,h=t.Color,u=t.resources,c=t.SpriteFrame,g=t.UITransform,b=t.Component}],execute:function(){var d,f,m,y,k,C,H,w,S,v,D,z,A,P,I,L=n.ccclass,M=n.property;t("Character",(d=L("Character"),f=M(o),m=M(l),y=M(l),k=M(l),C=M(o),H=M(l),d((v=i((S=function(t){function i(){for(var i,e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];return i=t.call.apply(t,[this].concat(n))||this,r(i,"spriteChar",v,a(i)),r(i,"labelCharName",D,a(i)),i.originalHp=0,i.hp=0,r(i,"labelHp",z,a(i)),i.originalAtk=0,i.atk=0,r(i,"labelAtk",A,a(i)),r(i,"spriteHit",P,a(i)),r(i,"labelHitDmg",I,a(i)),i.dirMultiplier=-1,i}e(i,t);var n=i.prototype;return n.start=function(){},n.update=function(t){},n.updateDisplay=function(){this.labelHp.string=this.hp.toString(),this.labelAtk.string=this.atk.toString()},n.animateAttack=function(t,i,e){var r=this;this.node.setSiblingIndex(1);var a=this.node.getPosition(),n=this.node.getPosition().add(new s(300*this.dirMultiplier,0,0));p(this.node).to(.6,{position:n},{easing:"backIn"}).call((function(){t.takeDamage(r.atk)})).to(.8,{position:a}).delay(1.6).call((function(){e.apply(i)})).start()},n.takeDamage=function(t){this.hp-=t,this.updateDisplay(),this.spriteHit.node.position=this.node.getPosition(),this.labelHitDmg.string="-"+t.toString();var i=this.node.getPosition(),e=this.node.getPosition().add(new s(20*-this.dirMultiplier,0,0));p(this.node).to(.2,{position:e},{easing:"backOut"}).to(.2,{position:i}).start();var r=this.spriteHit,a=new h(255,255,255,255);r.color=a,p(a).delay(.5).to(1,{r:255,g:255,b:255,a:0},{onUpdate:function(t){r.color=t}}).start()},n.resetStats=function(){this.hp=this.originalHp,this.atk=this.originalAtk,this.updateDisplay()},n.setCharSprite=function(t){var i=this,e="enemySprites/Boss_Lv"+t.toString()+"/spriteFrame";u.load(e,c,(function(t,e){i.spriteChar.getComponent(g).setContentSize(e.width/4,e.height/4),i.spriteChar.spriteFrame=e}))},n.setUpChar=function(t,i,e){this.labelCharName.string=t,this.originalHp=i,this.originalAtk=e},i}(b)).prototype,"spriteChar",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),D=i(S.prototype,"labelCharName",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=i(S.prototype,"labelHp",[y],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),A=i(S.prototype,"labelAtk",[k],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),P=i(S.prototype,"spriteHit",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),I=i(S.prototype,"labelHitDmg",[H],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),w=S))||w))}}}));

System.register("chunks:///_virtual/MainCharacter2.ts",["./rollupPluginModLoBabelHelpers.js","cc","./Character2.ts"],(function(e){var t,i,r,a,o,n,l;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,r=e.initializerDefineProperty,a=e.assertThisInitialized},function(e){o=e._decorator,n=e.Node},function(e){l=e.Character}],execute:function(){var s,c,h,u,d,p=o.ccclass,f=o.property;e("MainCharacter",(s=p("MainCharacter"),c=f(n),s((d=t((u=function(e){function t(){for(var t,i=arguments.length,o=new Array(i),n=0;n<i;n++)o[n]=arguments[n];return(t=e.call.apply(e,[this].concat(o))||this).dirMultiplier=1,r(t,"shieldNode",d,a(t)),t.hasShield=void 0,t}i(t,e);var o=t.prototype;return o.toggleShield=function(e){this.hasShield=e,this.shieldNode.active=e},o.takeDamage=function(t){this.hasShield?this.toggleShield(!1):e.prototype.takeDamage.call(this,t)},o.resetStats=function(){e.prototype.resetStats.call(this),this.toggleShield(!1)},t}(l)).prototype,"shieldNode",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),h=u))||h))}}}));

System.register("chunks:///_virtual/Popup2.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var n,e,i,o,r,l,a,u,s;return{setters:[function(t){n=t.applyDecoratedDescriptor,e=t.inheritsLoose,i=t.initializerDefineProperty,o=t.assertThisInitialized},function(t){r=t._decorator,l=t.Label,a=t.Node,u=t.Button,s=t.Component}],execute:function(){var h,p,b,c,f,C,g,d,v,y,L,m,z,P=r.ccclass,B=r.property;t("Popup",(h=P("Popup"),p=B(l),b=B(a),c=B(a),f=B(u),C=B(u),h((v=n((d=function(t){function n(){for(var n,e=arguments.length,r=new Array(e),l=0;l<e;l++)r[l]=arguments[l];return n=t.call.apply(t,[this].concat(r))||this,i(n,"labelContent",v,o(n)),i(n,"backContainer",y,o(n)),i(n,"loseContainer",L,o(n)),i(n,"buttonLeft",m,o(n)),i(n,"buttonRight",z,o(n)),n.leftCb=void 0,n.rightCb=void 0,n.quizManager=void 0,n}e(n,t);var r=n.prototype;return r.start=function(){},r.onEnable=function(){var t,n;null==(t=this.buttonLeft)||t.node.on(u.EventType.CLICK,this.onButtonLeft,this),null==(n=this.buttonRight)||n.node.on(u.EventType.CLICK,this.onButtonRight,this)},r.onDisable=function(){var t,n;null==(t=this.buttonLeft)||t.node.off(u.EventType.CLICK,this.onButtonLeft,this),null==(n=this.buttonRight)||n.node.off(u.EventType.CLICK,this.onButtonRight,this)},r.update=function(t){},r.showPopupBack=function(t,n,e,i,o){this.labelContent.string=t,this.buttonLeft.getComponentInChildren(l).string=n,this.buttonRight.getComponentInChildren(l).string=e,this.leftCb=i,this.rightCb=o,this.node.active=!0,this.backContainer.active=!0,this.loseContainer.active=!1},r.showPopupLose=function(t,n,e,i){this.buttonLeft.getComponentInChildren(l).string=t,this.buttonRight.getComponentInChildren(l).string=n,this.leftCb=e,this.rightCb=i,this.node.active=!0,this.backContainer.active=!1,this.loseContainer.active=!0},r.hidePopup=function(){this.node.active=!1},r.onButtonLeft=function(){var t;null==(t=this.leftCb)||t.apply(this.quizManager),this.hidePopup()},r.onButtonRight=function(){var t;null==(t=this.rightCb)||t.apply(this.quizManager),this.hidePopup()},n}(s)).prototype,"labelContent",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),y=n(d.prototype,"backContainer",[b],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),L=n(d.prototype,"loseContainer",[c],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=n(d.prototype,"buttonLeft",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),z=n(d.prototype,"buttonRight",[C],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),g=d))||g))}}}));

System.register("chunks:///_virtual/rollupPluginModLoBabelHelpers.js",[],(function(e){return{execute:function(){function r(e,r){for(var t=0;t<r.length;t++){var i=r[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,n(i.key),i)}}function t(r,i){return(t=e("setPrototypeOf",Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,r){return e.__proto__=r,e}))(r,i)}function i(e,r){if("object"!=typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var i=t.call(e,r||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}function n(e){var r=i(e,"string");return"symbol"==typeof r?r:String(r)}e({applyDecoratedDescriptor:function(e,r,t,i,n){var o={};Object.keys(i).forEach((function(e){o[e]=i[e]})),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0);o=t.slice().reverse().reduce((function(t,i){return i(e,r,t)||t}),o),n&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(n):void 0,o.initializer=void 0);void 0===o.initializer&&(Object.defineProperty(e,r,o),o=null);return o},assertThisInitialized:function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e},createClass:function(e,t,i){t&&r(e.prototype,t);i&&r(e,i);return Object.defineProperty(e,"prototype",{writable:!1}),e},inheritsLoose:function(e,r){e.prototype=Object.create(r.prototype),e.prototype.constructor=e,t(e,r)},initializerDefineProperty:function(e,r,t,i){if(!t)return;Object.defineProperty(e,r,{enumerable:t.enumerable,configurable:t.configurable,writable:t.writable,value:t.initializer?t.initializer.call(i):void 0})},setPrototypeOf:t,toPrimitive:i,toPropertyKey:n})}}}));

} }; });