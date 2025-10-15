import{a as it}from"./chunk-5ZQA5WDF.js";import{a as Z}from"./chunk-M3ICSFPT.js";import{a as nt,b as ot}from"./chunk-PADEYSER.js";import{b as et}from"./chunk-MRXEPQQC.js";import{e as Y,i as tt}from"./chunk-WPF24WGD.js";import{Da as W,Ga as X,la as $,va as J,wa as v}from"./chunk-U7ZBBLWD.js";import{k as K,o as G,t as U}from"./chunk-WLQFZU5C.js";import{$ as u,Cb as x,Db as k,Eb as H,Fb as B,Jb as g,Lb as c,Lc as s,Mc as N,Na as p,Ob as C,Pb as P,Qb as m,R as M,Rb as f,S as O,Ub as R,W as V,Xb as L,Yb as _,Za as A,_a as F,aa as d,ba as E,bb as Q,db as b,fb as w,fc as j,ia as z,na as D,pb as T,uc as q,vb as r,wb as y,xb as h,yb as I}from"./chunk-TDJGN2RG.js";var rt=`
    .p-splitbutton {
        display: inline-flex;
        position: relative;
        border-radius: dt('splitbutton.border.radius');
    }

    .p-splitbutton-button.p-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
        border-inline-end: 0 none;
    }

    .p-splitbutton-button.p-button:focus-visible,
    .p-splitbutton-dropdown.p-button:focus-visible {
        z-index: 1;
    }

    .p-splitbutton-button.p-button:not(:disabled):hover,
    .p-splitbutton-button.p-button:not(:disabled):active {
        border-inline-end: 0 none;
    }

    .p-splitbutton-dropdown.p-button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-splitbutton .p-menu {
        min-width: 100%;
    }

    .p-splitbutton-fluid {
        display: flex;
    }

    .p-splitbutton-rounded .p-splitbutton-dropdown.p-button {
        border-start-end-radius: dt('splitbutton.rounded.border.radius');
        border-end-end-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-rounded .p-splitbutton-button.p-button {
        border-start-start-radius: dt('splitbutton.rounded.border.radius');
        border-end-start-radius: dt('splitbutton.rounded.border.radius');
    }

    .p-splitbutton-raised {
        box-shadow: dt('splitbutton.raised.shadow');
    }
`;var st=["content"],pt=["dropdownicon"],at=["defaultbtn"],ut=["menu"];function dt(n,a){n&1&&H(0)}function ct(n,a){if(n&1){let t=B();x(0),y(1,"button",8),g("click",function(e){u(t);let o=c();return d(o.onDefaultButtonClick(e))}),b(2,dt,1,0,"ng-container",9),h(),k()}if(n&2){let t=c();p(),_(t.cx("pcButton")),r("severity",t.severity)("text",t.text)("outlined",t.outlined)("size",t.size)("icon",t.icon)("iconPos",t.iconPos)("disabled",t.disabled)("pAutoFocus",t.autofocus)("pTooltip",t.tooltip)("tooltipOptions",t.tooltipOptions),T("tabindex",t.tabindex)("aria-label",(t.buttonProps==null?null:t.buttonProps.ariaLabel)||t.label),p(),r("ngTemplateOutlet",t.contentTemplate||t._contentTemplate)}}function bt(n,a){if(n&1){let t=B();y(0,"button",10,2),g("click",function(e){u(t);let o=c();return d(o.onDefaultButtonClick(e))}),h()}if(n&2){let t=c();_(t.cx("pcButton")),r("severity",t.severity)("text",t.text)("outlined",t.outlined)("size",t.size)("icon",t.icon)("iconPos",t.iconPos)("label",t.label)("disabled",t.buttonDisabled)("pAutoFocus",t.autofocus)("pTooltip",t.tooltip)("tooltipOptions",t.tooltipOptions),T("tabindex",t.tabindex)("aria-label",t.buttonProps==null?null:t.buttonProps.ariaLabel)}}function mt(n,a){if(n&1&&I(0,"span"),n&2){let t=c();_(t.dropdownIcon)}}function ft(n,a){n&1&&(E(),I(0,"svg",12))}function _t(n,a){}function wt(n,a){n&1&&b(0,_t,0,0,"ng-template")}function yt(n,a){if(n&1&&(x(0),b(1,ft,1,0,"svg",11)(2,wt,1,0,null,9),k()),n&2){let t=c();p(),r("ngIf",!t.dropdownIconTemplate&&!t._dropdownIconTemplate),p(),r("ngTemplateOutlet",t.dropdownIconTemplate||t._dropdownIconTemplate)}}var ht={root:({instance:n})=>["p-splitbutton p-component",{"p-splitbutton-raised":n.raised,"p-splitbutton-rounded":n.rounded,"p-splitbutton-outlined":n.outlined,"p-splitbutton-text":n.text,[`p-splitbutton-${n.size==="small"?"sm":"lg"}`]:n.size}],pcButton:"p-splitbutton-button",pcDropdown:"p-splitbutton-dropdown p-button-icon-only"},lt=(()=>{class n extends W{name="splitbutton";theme=rt;classes=ht;static \u0275fac=(()=>{let t;return function(e){return(t||(t=D(n)))(e||n)}})();static \u0275prov=M({token:n,factory:n.\u0275fac})}return n})();var gt=(()=>{class n extends X{model;severity;raised=!1;rounded=!1;text=!1;outlined=!1;size=null;plain=!1;icon;iconPos="left";label;tooltip;tooltipOptions;styleClass;menuStyle;menuStyleClass;dropdownIcon;appendTo="body";dir;expandAriaLabel;showTransitionOptions=".12s cubic-bezier(0, 0, 0.2, 1)";hideTransitionOptions=".1s linear";buttonProps;menuButtonProps;autofocus;set disabled(t){this._disabled=t??!1,this.buttonDisabled=t??!1,this.menuButtonDisabled=t??!1}get disabled(){return this._disabled}tabindex;menuButtonDisabled=!1;buttonDisabled=!1;onClick=new w;onMenuHide=new w;onMenuShow=new w;onDropdownClick=new w;buttonViewChild;menu;contentTemplate;dropdownIconTemplate;templates;ariaId;isExpanded=z(!1);_disabled;_componentStyle=V(lt);_contentTemplate;_dropdownIconTemplate;ngOnInit(){super.ngOnInit(),this.ariaId=$("pn_id_")}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"content":this._contentTemplate=t.template;break;case"dropdownicon":this._dropdownIconTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}onDefaultButtonClick(t){this.onClick?.emit(t),this.menu?.hide()}onDropdownButtonClick(t){this.onDropdownClick.emit(t),this.menu?.toggle({currentTarget:this.el?.nativeElement,relativeAlign:this.appendTo==null})}onDropdownButtonKeydown(t){(t.code==="ArrowDown"||t.code==="ArrowUp")&&(this.onDropdownButtonClick(),t.preventDefault())}onHide(){this.isExpanded.set(!1),this.onMenuHide.emit()}onShow(){this.isExpanded.set(!0),this.onMenuShow.emit()}static \u0275fac=(()=>{let t;return function(e){return(t||(t=D(n)))(e||n)}})();static \u0275cmp=A({type:n,selectors:[["p-splitbutton"],["p-splitButton"],["p-split-button"]],contentQueries:function(i,e,o){if(i&1&&(C(o,st,4),C(o,pt,4),C(o,J,4)),i&2){let l;m(l=f())&&(e.contentTemplate=l.first),m(l=f())&&(e.dropdownIconTemplate=l.first),m(l=f())&&(e.templates=l)}},viewQuery:function(i,e){if(i&1&&(P(at,5),P(ut,5)),i&2){let o;m(o=f())&&(e.buttonViewChild=o.first),m(o=f())&&(e.menu=o.first)}},hostVars:2,hostBindings:function(i,e){i&2&&_(e.cn(e.cx("root"),e.styleClass))},inputs:{model:"model",severity:"severity",raised:[2,"raised","raised",s],rounded:[2,"rounded","rounded",s],text:[2,"text","text",s],outlined:[2,"outlined","outlined",s],size:"size",plain:[2,"plain","plain",s],icon:"icon",iconPos:"iconPos",label:"label",tooltip:"tooltip",tooltipOptions:"tooltipOptions",styleClass:"styleClass",menuStyle:"menuStyle",menuStyleClass:"menuStyleClass",dropdownIcon:"dropdownIcon",appendTo:"appendTo",dir:"dir",expandAriaLabel:"expandAriaLabel",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",buttonProps:"buttonProps",menuButtonProps:"menuButtonProps",autofocus:[2,"autofocus","autofocus",s],disabled:[2,"disabled","disabled",s],tabindex:[2,"tabindex","tabindex",N],menuButtonDisabled:[2,"menuButtonDisabled","menuButtonDisabled",s],buttonDisabled:[2,"buttonDisabled","buttonDisabled",s]},outputs:{onClick:"onClick",onMenuHide:"onMenuHide",onMenuShow:"onMenuShow",onDropdownClick:"onDropdownClick"},features:[j([lt]),Q],decls:8,vars:24,consts:[["defaultButton",""],["menu",""],["defaultbtn",""],[4,"ngIf","ngIfElse"],["type","button","pButton","","pRipple","",3,"click","keydown","size","severity","text","outlined","disabled"],[3,"class",4,"ngIf"],[4,"ngIf"],[3,"onHide","onShow","id","popup","model","styleClass","appendTo","showTransitionOptions","hideTransitionOptions"],["type","button","pButton","","pRipple","",3,"click","severity","text","outlined","size","icon","iconPos","disabled","pAutoFocus","pTooltip","tooltipOptions"],[4,"ngTemplateOutlet"],["type","button","pButton","","pRipple","",3,"click","severity","text","outlined","size","icon","iconPos","label","disabled","pAutoFocus","pTooltip","tooltipOptions"],["data-p-icon","chevron-down",4,"ngIf"],["data-p-icon","chevron-down"]],template:function(i,e){if(i&1){let o=B();b(0,ct,3,15,"ng-container",3)(1,bt,2,15,"ng-template",null,0,q),y(3,"button",4),g("click",function(S){return u(o),d(e.onDropdownButtonClick(S))})("keydown",function(S){return u(o),d(e.onDropdownButtonKeydown(S))}),b(4,mt,1,2,"span",5)(5,yt,3,2,"ng-container",6),h(),y(6,"p-tieredmenu",7,1),g("onHide",function(){return u(o),d(e.onHide())})("onShow",function(){return u(o),d(e.onShow())}),h()}if(i&2){let o=R(2);r("ngIf",e.contentTemplate||e._contentTemplate)("ngIfElse",o),p(3),_(e.cx("pcDropdown")),r("size",e.size)("severity",e.severity)("text",e.text)("outlined",e.outlined)("disabled",e.menuButtonDisabled),T("aria-label",(e.menuButtonProps==null?null:e.menuButtonProps.ariaLabel)||e.expandAriaLabel)("aria-haspopup",(e.menuButtonProps==null?null:e.menuButtonProps.ariaHasPopup)||!0)("aria-expanded",(e.menuButtonProps==null?null:e.menuButtonProps.ariaExpanded)||e.isExpanded())("aria-controls",(e.menuButtonProps==null?null:e.menuButtonProps.ariaControls)||e.ariaId),p(),r("ngIf",e.dropdownIcon),p(),r("ngIf",!e.dropdownIcon),p(),L(e.menuStyle),r("id",e.ariaId)("popup",!0)("model",e.model)("styleClass",e.menuStyleClass)("appendTo",e.appendTo)("showTransitionOptions",e.showTransitionOptions)("hideTransitionOptions",e.hideTransitionOptions)}},dependencies:[U,K,G,et,it,Y,Z,tt,ot,nt,v],encapsulation:2,changeDetection:0})}return n})(),$t=(()=>{class n{static \u0275fac=function(i){return new(i||n)};static \u0275mod=F({type:n});static \u0275inj=O({imports:[gt,v,v]})}return n})();export{gt as a,$t as b};
