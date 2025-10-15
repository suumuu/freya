import{a as Re,b as Xe}from"./chunk-UNOCOBI6.js";import{a as Ae,b as qe}from"./chunk-DZ42XHJ4.js";import{a as Pe,b as Oe}from"./chunk-6SH65H3O.js";import{a as De,b as Le}from"./chunk-CAX77YGW.js";import{a as ke,b as Ee}from"./chunk-S3EHWWPZ.js";import{a as Ve,b as Fe}from"./chunk-KQTMGJHV.js";import"./chunk-YAHPY4L6.js";import{a as Ie,b as ze}from"./chunk-DWUVJCDK.js";import"./chunk-U6W4ZOZQ.js";import"./chunk-BODZH67C.js";import"./chunk-7UZYWCAJ.js";import{c as Se,d as Be}from"./chunk-MRXEPQQC.js";import{a as xe,b as Ce}from"./chunk-YSV4FEGF.js";import"./chunk-WPF24WGD.js";import"./chunk-4O3FVBGX.js";import"./chunk-5IEWOUYS.js";import{D as we,Da as q,Ga as V,J as Me,c as L,e as A,la as Te,va as $,wa as b}from"./chunk-U7ZBBLWD.js";import{i as ye,j as ne,k as re,n as ae,o as N,t as B,x as _e}from"./chunk-WLQFZU5C.js";import{$ as y,Cb as j,Db as H,Eb as S,Fb as ue,Jb as U,Lb as g,Mb as de,Mc as be,Na as o,Nb as he,Ob as M,Pb as W,Q as ce,Qb as f,R as F,Rb as v,S as I,W as E,Xb as P,Yb as h,Za as x,Zb as u,_a as z,aa as _,ac as ge,bb as D,db as w,fc as O,gb as me,gc as Q,hc as ie,ic as fe,jc as Y,mc as ve,na as T,pb as C,qb as X,rb as G,vb as s,wb as r,xb as a,yb as c}from"./chunk-TDJGN2RG.js";import{a as ee,b as te}from"./chunk-GAL4ENT6.js";var Ge=`
    .p-scrollpanel-content-container {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: relative;
        z-index: 1;
        float: left;
    }

    .p-scrollpanel-content {
        height: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        width: calc(100% + calc(2 * dt('scrollpanel.bar.size')));
        padding-inline: 0 calc(2 * dt('scrollpanel.bar.size'));
        padding-block: 0 calc(2 * dt('scrollpanel.bar.size'));
        position: relative;
        overflow: auto;
        box-sizing: border-box;
        scrollbar-width: none;
    }

    .p-scrollpanel-content::-webkit-scrollbar {
        display: none;
    }

    .p-scrollpanel-bar {
        position: relative;
        border-radius: dt('scrollpanel.bar.border.radius');
        z-index: 2;
        cursor: pointer;
        opacity: 0;
        outline-color: transparent;
        background: dt('scrollpanel.bar.background');
        border: 0 none;
        transition:
            outline-color dt('scrollpanel.transition.duration'),
            opacity dt('scrollpanel.transition.duration');
    }

    .p-scrollpanel-bar:focus-visible {
        box-shadow: dt('scrollpanel.bar.focus.ring.shadow');
        outline: dt('scrollpanel.barfocus.ring.width') dt('scrollpanel.bar.focus.ring.style') dt('scrollpanel.bar.focus.ring.color');
        outline-offset: dt('scrollpanel.barfocus.ring.offset');
    }

    .p-scrollpanel-bar-y {
        width: dt('scrollpanel.bar.size');
        inset-block-start: 0;
    }

    .p-scrollpanel-bar-x {
        height: dt('scrollpanel.bar.size');
        inset-block-end: 0;
    }

    .p-scrollpanel-hidden {
        visibility: hidden;
    }

    .p-scrollpanel:hover .p-scrollpanel-bar,
    .p-scrollpanel:active .p-scrollpanel-bar {
        opacity: 1;
    }

    .p-scrollpanel-grabbed {
        user-select: none;
    }
`;var Qe=["content"],it=["xBar"],nt=["yBar"],rt=["*"];function at(t,m){t&1&&he(0)}function ot(t,m){t&1&&S(0)}var lt=`
    ${Ge}

    .p-scrollpanel {
        display: block;
    }
`,st={root:"p-scrollpanel p-component",contentContainer:"p-scrollpanel-content-container",content:"p-scrollpanel-content",barX:"p-scrollpanel-bar p-scrollpanel-bar-x",barY:"p-scrollpanel-bar p-scrollpanel-bar-y"},Ye=(()=>{class t extends q{name="scrollpanel";theme=lt;classes=st;static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var pt=(()=>{class t extends V{styleClass;step=5;contentViewChild;xBarViewChild;yBarViewChild;contentTemplate;templates;_contentTemplate;scrollYRatio;scrollXRatio;timeoutFrame=e=>setTimeout(e,0);initialized=!1;lastPageY;lastPageX;isXBarClicked=!1;isYBarClicked=!1;lastScrollLeft=0;lastScrollTop=0;orientation="vertical";timer;contentId;windowResizeListener;contentScrollListener;mouseEnterListener;xBarMouseDownListener;yBarMouseDownListener;documentMouseMoveListener;documentMouseUpListener;_componentStyle=E(Ye);zone=E(me);ngOnInit(){super.ngOnInit(),this.contentId=Te("pn_id_")+"_content"}ngAfterViewInit(){super.ngAfterViewInit(),_e(this.platformId)&&this.zone.runOutsideAngular(()=>{this.moveBar(),this.moveBar=this.moveBar.bind(this),this.onXBarMouseDown=this.onXBarMouseDown.bind(this),this.onYBarMouseDown=this.onYBarMouseDown.bind(this),this.onDocumentMouseMove=this.onDocumentMouseMove.bind(this),this.onDocumentMouseUp=this.onDocumentMouseUp.bind(this),this.windowResizeListener=this.renderer.listen(window,"resize",this.moveBar),this.contentScrollListener=this.renderer.listen(this.contentViewChild.nativeElement,"scroll",this.moveBar),this.mouseEnterListener=this.renderer.listen(this.contentViewChild.nativeElement,"mouseenter",this.moveBar),this.xBarMouseDownListener=this.renderer.listen(this.xBarViewChild.nativeElement,"mousedown",this.onXBarMouseDown),this.yBarMouseDownListener=this.renderer.listen(this.yBarViewChild.nativeElement,"mousedown",this.onYBarMouseDown),this.calculateContainerHeight(),this.initialized=!0})}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"content":this._contentTemplate=e.template;break;default:this._contentTemplate=e.template;break}})}calculateContainerHeight(){let e=this.el.nativeElement,n=this.contentViewChild.nativeElement,i=this.xBarViewChild.nativeElement,p=this.document.defaultView,l=p.getComputedStyle(e),d=p.getComputedStyle(i),k=we(e)-parseInt(d.height,10);l["max-height"]!="none"&&k==0&&(n.offsetHeight+parseInt(d.height,10)>parseInt(l["max-height"],10)?e.style.height=l["max-height"]:e.style.height=n.offsetHeight+parseFloat(l.paddingTop)+parseFloat(l.paddingBottom)+parseFloat(l.borderTopWidth)+parseFloat(l.borderBottomWidth)+"px")}moveBar(){let e=this.el.nativeElement,n=this.contentViewChild.nativeElement,i=this.xBarViewChild.nativeElement,p=n.scrollWidth,l=n.clientWidth,d=(e.clientHeight-i.clientHeight)*-1;this.scrollXRatio=l/p;let k=this.yBarViewChild.nativeElement,se=n.scrollHeight,pe=n.clientHeight,et=(e.clientWidth-k.clientWidth)*-1;this.scrollYRatio=pe/se,this.requestAnimationFrame(()=>{if(this.scrollXRatio>=1)i.setAttribute("data-p-scrollpanel-hidden","true"),L(i,"p-scrollpanel-hidden");else{i.setAttribute("data-p-scrollpanel-hidden","false"),A(i,"p-scrollpanel-hidden");let R=Math.max(this.scrollXRatio*100,10),Z=Math.abs(n.scrollLeft*(100-R)/(p-l));i.style.cssText="width:"+R+"%; inset-inline-start:"+Z+"%;bottom:"+d+"px;"}if(this.scrollYRatio>=1)k.setAttribute("data-p-scrollpanel-hidden","true"),L(k,"p-scrollpanel-hidden");else{k.setAttribute("data-p-scrollpanel-hidden","false"),A(k,"p-scrollpanel-hidden");let R=Math.max(this.scrollYRatio*100,10),Z=n.scrollTop*(100-R)/(se-pe);k.style.cssText="height:"+R+"%; top: calc("+Z+"% - "+i.clientHeight+"px); inset-inline-end:"+et+"px;"}}),this.cd.markForCheck()}onScroll(e){this.lastScrollLeft!==e.target.scrollLeft?(this.lastScrollLeft=e.target.scrollLeft,this.orientation="horizontal"):this.lastScrollTop!==e.target.scrollTop&&(this.lastScrollTop=e.target.scrollTop,this.orientation="vertical"),this.moveBar()}onKeyDown(e){if(this.orientation==="vertical")switch(e.code){case"ArrowDown":{this.setTimer("scrollTop",this.step),e.preventDefault();break}case"ArrowUp":{this.setTimer("scrollTop",this.step*-1),e.preventDefault();break}case"ArrowLeft":case"ArrowRight":{e.preventDefault();break}default:break}else if(this.orientation==="horizontal")switch(e.code){case"ArrowRight":{this.setTimer("scrollLeft",this.step),e.preventDefault();break}case"ArrowLeft":{this.setTimer("scrollLeft",this.step*-1),e.preventDefault();break}case"ArrowDown":case"ArrowUp":{e.preventDefault();break}default:break}}onKeyUp(){this.clearTimer()}repeat(e,n){this.contentViewChild?.nativeElement&&(this.contentViewChild.nativeElement[e]+=n),this.moveBar()}setTimer(e,n){this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,n)},40)}clearTimer(){this.timer&&clearTimeout(this.timer)}bindDocumentMouseListeners(){this.documentMouseMoveListener||(this.documentMouseMoveListener=e=>{this.onDocumentMouseMove(e)},this.document.addEventListener("mousemove",this.documentMouseMoveListener)),this.documentMouseUpListener||(this.documentMouseUpListener=e=>{this.onDocumentMouseUp(e)},this.document.addEventListener("mouseup",this.documentMouseUpListener))}unbindDocumentMouseListeners(){this.documentMouseMoveListener&&(this.document.removeEventListener("mousemove",this.documentMouseMoveListener),this.documentMouseMoveListener=null),this.documentMouseUpListener&&(document.removeEventListener("mouseup",this.documentMouseUpListener),this.documentMouseUpListener=null)}onYBarMouseDown(e){this.isYBarClicked=!0,this.yBarViewChild?.nativeElement?.focus(),this.lastPageY=e.pageY,this.yBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed","true"),L(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","true"),L(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()}onXBarMouseDown(e){this.isXBarClicked=!0,this.xBarViewChild?.nativeElement?.focus(),this.lastPageX=e.pageX,this.xBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed","false"),L(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","false"),L(this.document.body,"p-scrollpanel-grabbed"),this.bindDocumentMouseListeners(),e.preventDefault()}onDocumentMouseMove(e){this.isXBarClicked?this.onMouseMoveForXBar(e):this.isYBarClicked?this.onMouseMoveForYBar(e):(this.onMouseMoveForXBar(e),this.onMouseMoveForYBar(e))}onMouseMoveForXBar(e){let n=e.pageX-this.lastPageX;this.lastPageX=e.pageX,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollLeft+=n/this.scrollXRatio})}onMouseMoveForYBar(e){let n=e.pageY-this.lastPageY;this.lastPageY=e.pageY,this.requestAnimationFrame(()=>{this.contentViewChild.nativeElement.scrollTop+=n/this.scrollYRatio})}scrollTop(e){let n=this.contentViewChild.nativeElement.scrollHeight-this.contentViewChild.nativeElement.clientHeight;e=e>n?n:e>0?e:0,this.contentViewChild.nativeElement.scrollTop=e}onFocus(e){this.xBarViewChild?.nativeElement?.isSameNode(e.target)?this.orientation="horizontal":this.yBarViewChild?.nativeElement?.isSameNode(e.target)&&(this.orientation="vertical")}onBlur(){this.orientation==="horizontal"&&(this.orientation="vertical")}onDocumentMouseUp(e){this.yBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed","false"),A(this.yBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.xBarViewChild?.nativeElement?.setAttribute("data-p-scrollpanel-grabbed","false"),A(this.xBarViewChild.nativeElement,"p-scrollpanel-grabbed"),this.document.body.setAttribute("data-p-scrollpanel-grabbed","false"),A(this.document.body,"p-scrollpanel-grabbed"),this.unbindDocumentMouseListeners(),this.isXBarClicked=!1,this.isYBarClicked=!1}requestAnimationFrame(e){(window.requestAnimationFrame||this.timeoutFrame)(e)}unbindListeners(){this.windowResizeListener&&(this.windowResizeListener(),this.windowResizeListener=null),this.contentScrollListener&&(this.contentScrollListener(),this.contentScrollListener=null),this.mouseEnterListener&&(this.mouseEnterListener(),this.mouseEnterListener=null),this.xBarMouseDownListener&&(this.xBarMouseDownListener(),this.xBarMouseDownListener=null),this.yBarMouseDownListener&&(this.yBarMouseDownListener(),this.yBarMouseDownListener=null)}ngOnDestroy(){this.initialized&&this.unbindListeners()}refresh(){this.moveBar()}static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["p-scroll-panel"],["p-scrollPanel"],["p-scrollpanel"]],contentQueries:function(n,i,p){if(n&1&&(M(p,Qe,4),M(p,$,4)),n&2){let l;f(l=v())&&(i.contentTemplate=l.first),f(l=v())&&(i.templates=l)}},viewQuery:function(n,i){if(n&1&&(W(Qe,5),W(it,5),W(nt,5)),n&2){let p;f(p=v())&&(i.contentViewChild=p.first),f(p=v())&&(i.xBarViewChild=p.first),f(p=v())&&(i.yBarViewChild=p.first)}},hostAttrs:["data-pc-name","scrollpanel"],hostVars:2,hostBindings:function(n,i){n&2&&h(i.cn(i.cx("root"),i.styleClass))},inputs:{styleClass:"styleClass",step:[2,"step","step",be]},features:[O([Ye]),D],ngContentSelectors:rt,decls:9,vars:20,consts:[["content",""],["xBar",""],["yBar",""],[3,"mouseenter","scroll"],[4,"ngTemplateOutlet"],["tabindex","0","role","scrollbar",3,"mousedown","keydown","keyup","focus","blur"],["tabindex","0","role","scrollbar",3,"mousedown","keydown","keyup","focus"]],template:function(n,i){if(n&1){let p=ue();de(),r(0,"div")(1,"div",3,0),U("mouseenter",function(){return y(p),_(i.moveBar())})("scroll",function(d){return y(p),_(i.onScroll(d))}),X(3,at,1,0),w(4,ot,1,0,"ng-container",4),a()(),r(5,"div",5,1),U("mousedown",function(d){return y(p),_(i.onXBarMouseDown(d))})("keydown",function(d){return y(p),_(i.onKeyDown(d))})("keyup",function(){return y(p),_(i.onKeyUp())})("focus",function(d){return y(p),_(i.onFocus(d))})("blur",function(){return y(p),_(i.onBlur())}),a(),r(7,"div",6,2),U("mousedown",function(d){return y(p),_(i.onYBarMouseDown(d))})("keydown",function(d){return y(p),_(i.onKeyDown(d))})("keyup",function(){return y(p),_(i.onKeyUp())})("focus",function(d){return y(p),_(i.onFocus(d))}),a()}n&2&&(h(i.cx("contentContainer")),C("data-pc-section","wrapper"),o(),h(i.cx("content")),C("data-pc-section","content"),o(2),G(!i.contentTemplate&&!i._contentTemplate?3:-1),o(),s("ngTemplateOutlet",i.contentTemplate||i._contentTemplate),o(),h(i.cx("barX")),C("aria-orientation","horizontal")("aria-valuenow",i.lastScrollLeft)("data-pc-section","barx")("aria-controls",i.contentId),o(2),h(i.cx("barY")),C("aria-orientation","vertical")("aria-valuenow",i.lastScrollTop)("data-pc-section","bary")("aria-controls",i.contentId))},dependencies:[B,N,b],encapsulation:2,changeDetection:0})}return t})(),Ne=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=I({imports:[pt,b,b]})}return t})();var je=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`;var ct={root:{position:"relative"}},mt={root:({instance:t})=>["p-skeleton p-component",{"p-skeleton-circle":t.shape==="circle","p-skeleton-animation-none":t.animation==="none"}]},He=(()=>{class t extends q{name="skeleton";theme=je;classes=mt;inlineStyles=ct;static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var le=(()=>{class t extends V{styleClass;shape="rectangle";animation="wave";borderRadius;size;width="100%";height="1rem";_componentStyle=E(He);get containerStyle(){let e=this._componentStyle?.inlineStyles.root,n;return this.size?n=te(ee({},e),{width:this.size,height:this.size,borderRadius:this.borderRadius}):n=te(ee({},e),{width:this.width,height:this.height,borderRadius:this.borderRadius}),n}static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["p-skeleton"]],hostVars:7,hostBindings:function(n,i){n&2&&(C("aria-hidden",!0)("data-pc-name","skeleton")("data-pc-section","root"),P(i.containerStyle),h(i.cn(i.cx("root"),i.styleClass)))},inputs:{styleClass:"styleClass",shape:"shape",animation:"animation",borderRadius:"borderRadius",size:"size",width:"width",height:"height"},features:[O([He]),D],decls:0,vars:0,template:function(n,i){},dependencies:[B,b],encapsulation:2,changeDetection:0})}return t})(),Ue=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=I({imports:[le,b,b]})}return t})();var We=`
    .p-metergroup {
        display: flex;
        gap: dt('metergroup.gap');
    }

    .p-metergroup-meters {
        display: flex;
        background: dt('metergroup.meters.background');
        border-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-label-list {
        display: flex;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
        list-style-type: none;
    }

    .p-metergroup-label {
        display: inline-flex;
        align-items: center;
        gap: dt('metergroup.label.gap');
    }

    .p-metergroup-label-marker {
        display: inline-flex;
        width: dt('metergroup.label.marker.size');
        height: dt('metergroup.label.marker.size');
        border-radius: 100%;
    }

    .p-metergroup-label-icon {
        font-size: dt('metergroup.label.icon.size');
        width: dt('metergroup.label.icon.size');
        height: dt('metergroup.label.icon.size');
    }

    .p-metergroup-horizontal {
        flex-direction: column;
    }

    .p-metergroup-label-list-horizontal {
        gap: dt('metergroup.label.list.horizontal.gap');
    }

    .p-metergroup-horizontal .p-metergroup-meters {
        height: dt('metergroup.meters.size');
    }

    .p-metergroup-horizontal .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-end-start-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-horizontal .p-metergroup-meter:last-of-type {
        border-start-end-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical {
        flex-direction: row;
    }

    .p-metergroup-label-list-vertical {
        flex-direction: column;
        gap: dt('metergroup.label.list.vertical.gap');
    }

    .p-metergroup-vertical .p-metergroup-meters {
        flex-direction: column;
        width: dt('metergroup.meters.size');
        height: 100%;
    }

    .p-metergroup-vertical .p-metergroup-label-list {
        align-items: flex-start;
    }

    .p-metergroup-vertical .p-metergroup-meter:first-of-type {
        border-start-start-radius: dt('metergroup.border.radius');
        border-start-end-radius: dt('metergroup.border.radius');
    }

    .p-metergroup-vertical .p-metergroup-meter:last-of-type {
        border-end-start-radius: dt('metergroup.border.radius');
        border-end-end-radius: dt('metergroup.border.radius');
    }
`;var dt=(t,m)=>({$implicit:t,icon:m}),ht=t=>({color:t}),gt=t=>({backgroundColor:t});function ft(t,m){if(t&1&&c(0,"i",5),t&2){let e=g(2).$implicit,n=g();h(e.icon),s("ngClass",n.cx("labelIcon"))("ngStyle",ie(4,ht,e.color))}}function vt(t,m){if(t&1&&c(0,"span",6),t&2){let e=g(2).$implicit,n=g();h(n.cx("labelMarker")),s("ngStyle",ie(3,gt,e.color))}}function bt(t,m){if(t&1&&(j(0),w(1,ft,1,6,"i",3)(2,vt,1,5,"span",4),H()),t&2){let e=g().$implicit;o(),s("ngIf",e.icon),o(),s("ngIf",!e.icon)}}function yt(t,m){t&1&&S(0)}function _t(t,m){if(t&1&&(r(0,"li"),w(1,bt,3,2,"ng-container",1)(2,yt,1,0,"ng-container",2),r(3,"span"),u(4),a()()),t&2){let e=m.$implicit,n=g();h(n.cx("label")),o(),s("ngIf",!n.iconTemplate),o(),s("ngTemplateOutlet",n.iconTemplate)("ngTemplateOutletContext",fe(9,dt,e,e.icon)),o(),h(n.cx("labelText")),o(),ge("",e.label," (",n.parentInstance.percentValue(e.value),")")}}var wt=["label"],Mt=["meter"],Tt=["end"],xt=["start"],Ct=["icon"],K=(t,m,e)=>({$implicit:t,totalPercent:m,percentages:e}),St=(t,m,e,n,i,p)=>({$implicit:t,index:m,orientation:e,class:n,size:i,totalPercent:p});function Bt(t,m){if(t&1&&c(0,"p-meterGroupLabel",3),t&2){let e=g(2);s("value",e.value)("labelPosition",e.labelPosition)("labelOrientation",e.labelOrientation)("min",e.min)("max",e.max)("iconTemplate",e.iconTemplate||e._iconTemplate)}}function kt(t,m){t&1&&S(0)}function Et(t,m){if(t&1&&w(0,Bt,1,6,"p-meterGroupLabel",2)(1,kt,1,0,"ng-container",0),t&2){let e=g();s("ngIf",!e.labelTemplate&&!e._labelTemplate),o(),s("ngTemplateOutlet",e.labelTemplate||e.labelTemplate)("ngTemplateOutletContext",Y(3,K,e.value,e.totalPercent(),e.percentages()))}}function Dt(t,m){t&1&&S(0)}function Lt(t,m){t&1&&S(0)}function Vt(t,m){if(t&1&&(j(0),c(1,"span",5),H()),t&2){let e=g().$implicit,n=g();o(),h(n.cx("meter")),s("ngStyle",n.meterStyle(e))}}function Ft(t,m){if(t&1&&(j(0),w(1,Lt,1,0,"ng-container",0)(2,Vt,2,3,"ng-container",4),H()),t&2){let e=m.$implicit,n=m.index,i=g();o(),s("ngTemplateOutlet",i.meterTemplate||i._meterTemplate)("ngTemplateOutletContext",ve(3,St,e,n,i.orientation,i.cx("meter"),i.percentValue(e.value),i.totalPercent())),o(),s("ngIf",!i.meterTemplate&&!i._meterTemplate&&e.value>0)}}function It(t,m){t&1&&S(0)}function zt(t,m){if(t&1&&c(0,"p-meterGroupLabel",3),t&2){let e=g(2);s("value",e.value)("labelPosition",e.labelPosition)("labelOrientation",e.labelOrientation)("min",e.min)("max",e.max)("iconTemplate",e.iconTemplate||e._iconTemplate)}}function Pt(t,m){t&1&&S(0)}function Ot(t,m){if(t&1&&w(0,zt,1,6,"p-meterGroupLabel",2)(1,Pt,1,0,"ng-container",0),t&2){let e=g();s("ngIf",!e.labelTemplate&&!e._labelTemplate),o(),s("ngTemplateOutlet",e.labelTemplate||e._labelTemplate)("ngTemplateOutletContext",Y(3,K,e.value,e.totalPercent(),e.percentages()))}}var At={root:({instance:t})=>["p-metergroup p-component",{"p-metergroup-horizontal":t.orientation==="horizontal","p-metergroup-vertical":t.orientation==="vertical"}],meters:"p-metergroup-meters",meter:"p-metergroup-meter",labelList:({instance:t})=>["p-metergroup-label-list",{"p-metergroup-label-list-vertical":t.labelOrientation==="vertical","p-metergroup-label-list-horizontal":t.labelOrientation==="horizontal"}],label:"p-metergroup-label",labelIcon:"p-metergroup-label-icon",labelMarker:"p-metergroup-label-marker",labelText:"p-metergroup-label-text"},$e=(()=>{class t extends q{name="metergroup";theme=We;classes=At;static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275prov=F({token:t,factory:t.\u0275fac})}return t})();var qt=(()=>{class t extends V{value=[];labelPosition="end";labelOrientation="horizontal";min;max;iconTemplate;parentInstance=E(ce(()=>J));static \u0275fac=(()=>{let e;return function(i){return(e||(e=T(t)))(i||t)}})();static \u0275cmp=x({type:t,selectors:[["p-meterGroupLabel"],["p-metergrouplabel"]],inputs:{value:"value",labelPosition:"labelPosition",labelOrientation:"labelOrientation",min:"min",max:"max",iconTemplate:"iconTemplate"},features:[D],decls:2,vars:4,consts:[[3,"class",4,"ngFor","ngForOf","ngForTrackBy"],[4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],[3,"class","ngClass","ngStyle",4,"ngIf"],[3,"class","ngStyle",4,"ngIf"],[3,"ngClass","ngStyle"],[3,"ngStyle"]],template:function(n,i){n&1&&(r(0,"ol"),w(1,_t,5,12,"li",0),a()),n&2&&(h(i.cx("labelList")),o(),s("ngForOf",i.value)("ngForTrackBy",i.parentInstance.trackByFn))},dependencies:[B,ye,ne,re,N,ae,b],encapsulation:2})}return t})(),J=(()=>{class t extends V{value;min=0;max=100;orientation="horizontal";labelPosition="end";labelOrientation="horizontal";styleClass;get vertical(){return this.orientation==="vertical"}labelTemplate;meterTemplate;endTemplate;startTemplate;iconTemplate;templates;_labelTemplate;_meterTemplate;_endTemplate;_startTemplate;_iconTemplate;_componentStyle=E($e);constructor(){super()}ngAfterViewInit(){super.ngAfterViewInit();let e=this.el.nativeElement,n=Me(e);this.vertical&&(e.style.height=n+"px")}ngAfterContentInit(){this.templates?.forEach(e=>{switch(e.getType()){case"label":this._labelTemplate=e.template;break;case"meter":this._meterTemplate=e.template;break;case"icon":this._iconTemplate=e.template;break;case"start":this._startTemplate=e.template;break;case"end":this._endTemplate=e.template;break}})}percent(e=0){if(this.max===this.min)return 100;let n=(e-this.min)/(this.max-this.min)*100;return Math.round(Math.max(0,Math.min(100,n)))}percentValue(e){return this.percent(e)+"%"}meterStyle(e){return{backgroundColor:e.color,width:this.orientation==="horizontal"&&this.percentValue(e.value||0),height:this.orientation==="vertical"&&this.percentValue(e.value||0)}}totalPercent(){return this.value?this.percent(this.value.reduce((e,n)=>e+(n.value||0),0)):0}percentages(){if(!this.value)return[];let e=0,n=[];return this.value.forEach(i=>{e+=i.value||0,n.push(e)}),n}trackByFn(e){return e}static \u0275fac=function(n){return new(n||t)};static \u0275cmp=x({type:t,selectors:[["p-meterGroup"],["p-metergroup"],["p-meter-group"]],contentQueries:function(n,i,p){if(n&1&&(M(p,wt,4),M(p,Mt,4),M(p,Tt,4),M(p,xt,4),M(p,Ct,4),M(p,$,4)),n&2){let l;f(l=v())&&(i.labelTemplate=l.first),f(l=v())&&(i.meterTemplate=l.first),f(l=v())&&(i.endTemplate=l.first),f(l=v())&&(i.startTemplate=l.first),f(l=v())&&(i.iconTemplate=l.first),f(l=v())&&(i.templates=l)}},hostVars:6,hostBindings:function(n,i){n&2&&(C("aria-valuemin",i.min)("role","meter")("aria-valuemax",i.max)("aria-valuenow",i.totalPercent()),h(i.cn(i.cx("root"),i.styleClass)))},inputs:{value:"value",min:"min",max:"max",orientation:"orientation",labelPosition:"labelPosition",labelOrientation:"labelOrientation",styleClass:"styleClass"},features:[O([$e]),D],decls:6,vars:18,consts:[[4,"ngTemplateOutlet","ngTemplateOutletContext"],[4,"ngFor","ngForOf","ngForTrackBy"],[3,"value","labelPosition","labelOrientation","min","max","iconTemplate",4,"ngIf"],[3,"value","labelPosition","labelOrientation","min","max","iconTemplate"],[4,"ngIf"],[3,"ngStyle"]],template:function(n,i){n&1&&(X(0,Et,2,7),w(1,Dt,1,0,"ng-container",0),r(2,"div"),w(3,Ft,3,10,"ng-container",1),a(),w(4,It,1,0,"ng-container",0),X(5,Ot,2,7)),n&2&&(G(i.labelPosition==="start"?0:-1),o(),s("ngTemplateOutlet",i.startTemplate||i._startTemplate)("ngTemplateOutletContext",Y(10,K,i.value,i.totalPercent(),i.percentages())),o(),h(i.cx("meters")),o(),s("ngForOf",i.value)("ngForTrackBy",i.trackByFn),o(),s("ngTemplateOutlet",i.endTemplate||i._endTemplate)("ngTemplateOutletContext",Y(14,K,i.value,i.totalPercent(),i.percentages())),o(),G(i.labelPosition==="end"?5:-1))},dependencies:[B,ne,re,N,ae,qt,b],encapsulation:2,changeDetection:0})}return t})(),Ke=(()=>{class t{static \u0275fac=function(n){return new(n||t)};static \u0275mod=z({type:t});static \u0275inj=I({imports:[J,b,b]})}return t})();var Je=()=>({"background-color":"#9c27b0",color:"#ffffff"}),Xt=()=>({"background-color":"#2196F3",color:"#ffffff"}),Gt=()=>({severity:"contrast",raised:!0,rounded:!0}),Ze=class t{value=0;interval;meterGroupValue=[{label:"Apps",color:"#34d399",value:16},{label:"Messages",color:"#fbbf24",value:8},{label:"Media",color:"#60a5fa",value:24},{label:"System",color:"#c084fc",value:10}];ngOnInit(){this.interval=setInterval(()=>{this.value=this.value+Math.floor(Math.random()*10)+1,this.value>=100&&(this.value=100,clearInterval(this.interval))},2e3)}ngOnDestroy(){clearInterval(this.interval)}static \u0275fac=function(e){return new(e||t)};static \u0275cmp=x({type:t,selectors:[["app-misc-demo"]],decls:141,vars:28,consts:[[1,"card"],[1,"font-semibold","text-xl","mb-4"],[1,"flex","flex-col","md:flex-row","gap-4"],[1,"md:w-1/2"],[3,"value","showValue"],[1,"flex","flex-col","md:flex-row","gap-8"],[1,"flex","gap-2"],["value","2"],["value","8","severity","success"],["value","4","severity","info"],["value","12","severity","warn"],["value","3","severity","danger"],[1,"font-semibold","my-4"],[1,"flex","gap-6"],[1,"pi","pi-bell",2,"font-size","2rem"],["value","4","severity","danger"],[1,"pi","pi-calendar",2,"font-size","2rem"],["severity","danger"],[1,"pi","pi-envelope",2,"font-size","2rem"],["label","Emails","badge","8"],["label","Messages","icon","pi pi-users","severity","warn","badge","8","badgeSeverity","danger"],[1,"flex","items-start","gap-2"],[3,"value"],["badgeSize","large","severity","warn",3,"value"],["badgeSize","xlarge","severity","success",3,"value"],[1,"font-semibold","mb-4"],[1,"mb-4"],["image","/demo/images/avatar/amyelsner.png","size","large","shape","circle"],["image","/demo/images/avatar/asiyajavayant.png","size","large","shape","circle"],["image","/demo/images/avatar/onyamalimba.png","size","large","shape","circle"],["image","/demo/images/avatar/ionibowcher.png","size","large","shape","circle"],["image","/demo/images/avatar/xuxuefeng.png","size","large","shape","circle"],["label","+2","shape","circle","size","large"],["label","P","size","xlarge","shape","circle",1,"mr-2"],["label","V","size","large","shape","circle",1,"mr-2"],["label","U","shape","circle",1,"mr-2"],["value","4","severity","danger",1,"inline-flex"],["label","U","size","xlarge"],[2,"height","200px","overflow","auto"],["target","parent","icon","pi pi-arrow-up",3,"threshold","buttonProps"],["value","Primary"],["severity","success","value","Success"],["severity","info","value","Info"],["severity","warn","value","Warning"],["severity","danger","value","Danger"],["value","Primary",3,"rounded"],["severity","success","value","Success",3,"rounded"],["severity","info","value","Info",3,"rounded"],["severity","warn","value","Warning",3,"rounded"],["severity","danger","value","Danger",3,"rounded"],["icon","pi pi-user","value","Primary"],["icon","pi pi-check","severity","success","value","Success"],["icon","pi pi-info-circle","severity","info","value","Info"],["icon","pi pi-exclamation-triangle","severity","warn","value","Warning"],["icon","pi pi-times","severity","danger","value","Danger"],[1,"flex","items-center","flex-col","sm:flex-row","gap-2"],["label","Action"],["label","Comedy"],["label","Mystery"],["label","Thriller",3,"removable"],["label","Apple","icon","pi pi-apple"],["label","Facebook","icon","pi pi-facebook"],["label","Google","icon","pi pi-google"],["label","Microsoft","icon","pi pi-microsoft",3,"removable"],["label","Amy Elsner"],["src","/demo/images/avatar/amyelsner.png","alt","avatar",1,"w-8","h-8"],["label","Asiya Javayant"],["src","/demo/images/avatar/asiyajavayant.png","alt","avatar",1,"w-8","h-8"],["label","Onyama Limba"],["src","/demo/images/avatar/onyamalimba.png","alt","avatar",1,"w-8","h-8"],["label","Xuxue Feng",3,"removable"],["src","/demo/images/avatar/xuxuefeng.png","alt","avatar",1,"w-8","h-8"],[1,"rounded-border","border","border-surface","p-12"],[1,"flex","mb-4"],["shape","circle","size","4rem","styleClass","mr-2"],["width","10rem","styleClass","mb-2"],["width","5rem","styleClass","mb-2"],["height",".5rem"],["width","100%","height","150px"],[1,"flex","justify-between","mt-6"],["width","4rem","height","2rem"]],template:function(e,n){e&1&&(r(0,"div",0)(1,"div",1),u(2,"ProgressBar"),a(),r(3,"div",2)(4,"div",3),c(5,"p-progressbar",4),a(),r(6,"div",3),c(7,"p-progressbar",4),a()()(),r(8,"div",5)(9,"div",3)(10,"div",0)(11,"div",1),u(12,"Badge"),a(),r(13,"div",6),c(14,"p-badge",7)(15,"p-badge",8)(16,"p-badge",9)(17,"p-badge",10)(18,"p-badge",11),a(),r(19,"div",12),u(20,"Overlay"),a(),r(21,"div",13)(22,"p-overlaybadge",7),c(23,"i",14),a(),r(24,"p-overlaybadge",15),c(25,"i",16),a(),r(26,"p-overlaybadge",17),c(27,"i",18),a()(),r(28,"div",12),u(29,"Button"),a(),r(30,"div",6),c(31,"p-button",19)(32,"p-button",20),a(),r(33,"div",12),u(34,"Sizes"),a(),r(35,"div",21),c(36,"p-badge",22)(37,"p-badge",23)(38,"p-badge",24),a()(),r(39,"div",0)(40,"div",1),u(41,"Avatar"),a(),r(42,"div",25),u(43,"Group"),a(),r(44,"p-avatar-group",26),c(45,"p-avatar",27)(46,"p-avatar",28)(47,"p-avatar",29)(48,"p-avatar",30)(49,"p-avatar",31)(50,"p-avatar",32),a(),r(51,"div",12),u(52,"Label - Circle"),a(),c(53,"p-avatar",33)(54,"p-avatar",34)(55,"p-avatar",35),r(56,"div",12),u(57,"Icon - Badge"),a(),r(58,"p-overlaybadge",36),c(59,"p-avatar",37),a()(),r(60,"div",0)(61,"div",1),u(62,"ScrollTop"),a(),r(63,"div",38)(64,"p"),u(65," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae et leo duis ut diam. Ultricies mi quis hendrerit dolor magna eget est lorem. Amet consectetur adipiscing elit ut. Nam libero justo laoreet sit amet. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Est ultricies integer quis auctor elit sed vulputate. Consequat ac felis donec et. Tellus orci ac auctor augue mauris. Semper feugiat nibh sed pulvinar proin gravida hendrerit lectus a. Tincidunt arcu non sodales neque sodales. Metus aliquam eleifend mi in nulla posuere sollicitudin aliquam ultrices. Sodales ut etiam sit amet nisl purus. Cursus sit amet dictum sit amet. Tristique senectus et netus et malesuada fames ac turpis egestas. Et tortor consequat id porta nibh venenatis cras sed. Diam maecenas ultricies mi eget mauris. Eget egestas purus viverra accumsan in nisl nisi. Suscipit adipiscing bibendum est ultricies integer. Mattis aliquam faucibus purus in massa tempor nec. "),a(),c(66,"p-scrolltop",39),a()(),r(67,"div",0)(68,"div",1),u(69,"MeterGroup"),a(),c(70,"p-metergroup",22),a()(),r(71,"div",3)(72,"div",0)(73,"div",1),u(74,"Tag"),a(),r(75,"div",25),u(76,"Default"),a(),r(77,"div",6),c(78,"p-tag",40)(79,"p-tag",41)(80,"p-tag",42)(81,"p-tag",43)(82,"p-tag",44),a(),r(83,"div",12),u(84,"Pills"),a(),r(85,"div",6),c(86,"p-tag",45)(87,"p-tag",46)(88,"p-tag",47)(89,"p-tag",48)(90,"p-tag",49),a(),r(91,"div",12),u(92,"Icons"),a(),r(93,"div",6),c(94,"p-tag",50)(95,"p-tag",51)(96,"p-tag",52)(97,"p-tag",53)(98,"p-tag",54),a()(),r(99,"div",0)(100,"div",1),u(101,"Chip"),a(),r(102,"div",25),u(103,"Basic"),a(),r(104,"div",55),c(105,"p-chip",56)(106,"p-chip",57)(107,"p-chip",58)(108,"p-chip",59),a(),r(109,"div",12),u(110,"Icon"),a(),r(111,"div",55),c(112,"p-chip",60)(113,"p-chip",61)(114,"p-chip",62)(115,"p-chip",63),a(),r(116,"div",12),u(117,"Image"),a(),r(118,"div",55)(119,"p-chip",64),c(120,"img",65),a(),r(121,"p-chip",66),c(122,"img",67),a(),r(123,"p-chip",68),c(124,"img",69),a(),r(125,"p-chip",70),c(126,"img",71),a()()(),r(127,"div",0)(128,"div",1),u(129,"Skeleton"),a(),r(130,"div",72)(131,"div",73),c(132,"p-skeleton",74),r(133,"div"),c(134,"p-skeleton",75)(135,"p-skeleton",76)(136,"p-skeleton",77),a()(),c(137,"p-skeleton",78),r(138,"div",79),c(139,"p-skeleton",80)(140,"p-skeleton",80),a()()()()()),e&2&&(o(5),s("value",n.value)("showValue",!0),o(2),s("value",50)("showValue",!1),o(29),s("value",2),o(),s("value",4),o(),s("value",6),o(12),P(Q(24,Je)),o(4),P(Q(25,Xt)),o(),P(Q(26,Je)),o(11),s("threshold",100)("buttonProps",Q(27,Gt)),o(4),s("value",n.meterGroupValue),o(16),s("rounded",!0),o(),s("rounded",!0),o(),s("rounded",!0),o(),s("rounded",!0),o(),s("rounded",!0),o(18),s("removable",!0),o(7),s("removable",!0),o(10),s("removable",!0))},dependencies:[B,ze,Ie,Ce,xe,Oe,Pe,Ne,Ee,ke,Fe,Ve,Be,Se,Ue,le,qe,Ae,Xe,Re,Le,De,Ke,J],encapsulation:2})};export{Ze as MiscDemo};
