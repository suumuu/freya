import{a as _e}from"./chunk-FJPTCACC.js";import{a as ge}from"./chunk-WW7GWAMZ.js";import{a as de}from"./chunk-DRW73UVK.js";import{a as pe,c as me}from"./chunk-PIH2IZGE.js";import{a as be}from"./chunk-FVBDSXJ7.js";import{e as he,g as fe}from"./chunk-WPF24WGD.js";import{Da as ce,K as se,va as le,wa as G}from"./chunk-U7ZBBLWD.js";import{i as ie,k as re,n as oe,o as ue,t as ae}from"./chunk-WLQFZU5C.js";import{$ as p,Bb as ee,Cb as M,Db as F,Fb as N,Jb as S,Lb as a,Lc as V,Mc as $,Na as f,Ob as U,Pb as te,Q,Qb as R,R as q,Rb as L,S as W,Ta as X,W as H,Yb as I,Za as z,_a as Y,aa as m,ba as B,bb as O,da as Z,db as g,fb as k,fc as ne,ma as J,na as A,pb as b,vb as d,wb as D,xb as E,yb as v}from"./chunk-TDJGN2RG.js";import{a as P,b as j}from"./chunk-GAL4ENT6.js";var Ve=["data-p-icon","angle-up"],xe=(()=>{class i extends fe{static \u0275fac=(()=>{let e;return function(t){return(e||(e=A(i)))(t||i)}})();static \u0275cmp=z({type:i,selectors:[["","data-p-icon","angle-up"]],features:[O],attrs:Ve,decls:1,vars:0,consts:[["d","M10.4134 9.49931C10.3148 9.49977 10.2172 9.48055 10.1262 9.44278C10.0352 9.405 9.95263 9.34942 9.88338 9.27931L6.88338 6.27931L3.88338 9.27931C3.73811 9.34946 3.57409 9.3709 3.41567 9.34044C3.25724 9.30999 3.11286 9.22926 3.00395 9.11025C2.89504 8.99124 2.82741 8.84028 2.8111 8.67978C2.79478 8.51928 2.83065 8.35781 2.91338 8.21931L6.41338 4.71931C6.55401 4.57886 6.74463 4.49997 6.94338 4.49997C7.14213 4.49997 7.33276 4.57886 7.47338 4.71931L10.9734 8.21931C11.1138 8.35994 11.1927 8.55056 11.1927 8.74931C11.1927 8.94806 11.1138 9.13868 10.9734 9.27931C10.9007 9.35315 10.8132 9.41089 10.7168 9.44879C10.6203 9.48669 10.5169 9.5039 10.4134 9.49931Z","fill","currentColor"]],template:function(n,t){n&1&&(B(),ee(0,"path",0))},encapsulation:2})}return i})();var ye=`
    .p-inputnumber {
        display: inline-flex;
        position: relative;
    }

    .p-inputnumber-button {
        display: flex;
        align-items: center;
        justify-content: center;
        flex: 0 0 auto;
        cursor: pointer;
        background: dt('inputnumber.button.background');
        color: dt('inputnumber.button.color');
        width: dt('inputnumber.button.width');
        transition:
            background dt('inputnumber.transition.duration'),
            color dt('inputnumber.transition.duration'),
            border-color dt('inputnumber.transition.duration'),
            outline-color dt('inputnumber.transition.duration');
    }

    .p-inputnumber-button:disabled {
        cursor: auto;
    }

    .p-inputnumber-button:not(:disabled):hover {
        background: dt('inputnumber.button.hover.background');
        color: dt('inputnumber.button.hover.color');
    }

    .p-inputnumber-button:not(:disabled):active {
        background: dt('inputnumber.button.active.background');
        color: dt('inputnumber.button.active.color');
    }

    .p-inputnumber-stacked .p-inputnumber-button {
        position: relative;
        flex: 1 1 auto;
        border: 0 none;
    }

    .p-inputnumber-stacked .p-inputnumber-button-group {
        display: flex;
        flex-direction: column;
        position: absolute;
        inset-block-start: 1px;
        inset-inline-end: 1px;
        height: calc(100% - 2px);
        z-index: 1;
    }

    .p-inputnumber-stacked .p-inputnumber-increment-button {
        padding: 0;
        border-start-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-decrement-button {
        padding: 0;
        border-end-end-radius: calc(dt('inputnumber.button.border.radius') - 1px);
    }

    .p-inputnumber-stacked .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-horizontal .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-horizontal .p-inputnumber-increment-button {
        order: 3;
        border-start-end-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        border-inline-start: 0 none;
    }

    .p-inputnumber-horizontal .p-inputnumber-input {
        order: 2;
        border-radius: 0;
    }

    .p-inputnumber-horizontal .p-inputnumber-decrement-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-inline-end: 0 none;
    }

    .p-floatlabel:has(.p-inputnumber-horizontal) label {
        margin-inline-start: dt('inputnumber.button.width');
    }

    .p-inputnumber-vertical {
        flex-direction: column;
    }

    .p-inputnumber-vertical .p-inputnumber-button {
        border: 1px solid dt('inputnumber.button.border.color');
        padding: dt('inputnumber.button.vertical.padding');
    }

    .p-inputnumber-vertical .p-inputnumber-button:hover {
        border-color: dt('inputnumber.button.hover.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-button:active {
        border-color: dt('inputnumber.button.active.border.color');
    }

    .p-inputnumber-vertical .p-inputnumber-increment-button {
        order: 1;
        border-start-start-radius: dt('inputnumber.button.border.radius');
        border-start-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-end: 0 none;
    }

    .p-inputnumber-vertical .p-inputnumber-input {
        order: 2;
        border-radius: 0;
        text-align: center;
    }

    .p-inputnumber-vertical .p-inputnumber-decrement-button {
        order: 3;
        border-end-start-radius: dt('inputnumber.button.border.radius');
        border-end-end-radius: dt('inputnumber.button.border.radius');
        width: 100%;
        border-block-start: 0 none;
    }

    .p-inputnumber-input {
        flex: 1 1 auto;
    }

    .p-inputnumber-fluid {
        width: 100%;
    }

    .p-inputnumber-fluid .p-inputnumber-input {
        width: 1%;
    }

    .p-inputnumber-fluid.p-inputnumber-vertical .p-inputnumber-input {
        width: 100%;
    }

    .p-inputnumber:has(.p-inputtext-sm) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.sm.font.size');
        width: dt('form.field.sm.font.size');
        height: dt('form.field.sm.font.size');
    }

    .p-inputnumber:has(.p-inputtext-lg) .p-inputnumber-button .p-icon {
        font-size: dt('form.field.lg.font.size');
        width: dt('form.field.lg.font.size');
        height: dt('form.field.lg.font.size');
    }

    .p-inputnumber-clear-icon {
        position: absolute;
        top: 50%;
        margin-top: -0.5rem;
        cursor: pointer;
        inset-inline-end: dt('form.field.padding.x');
        color: dt('form.field.icon.color');
    }

    .p-inputnumber:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc((dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-stacked .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }

    .p-inputnumber-stacked:has(.p-inputnumber-clear-icon) .p-inputnumber-input {
        padding-inline-end: calc(dt('inputnumber.button.width') + (dt('form.field.padding.x') * 2) + dt('icon.size'));
    }

    .p-inputnumber-horizontal .p-inputnumber-clear-icon {
        inset-inline-end: calc(dt('inputnumber.button.width') + dt('form.field.padding.x'));
    }
`;var Te=["clearicon"],Be=["incrementbuttonicon"],De=["decrementbuttonicon"],Ee=["input"];function Se(i,h){if(i&1){let e=N();B(),D(0,"svg",7),S("click",function(){p(e);let t=a(2);return m(t.clear())}),E()}if(i&2){let e=a(2);I(e.cx("clearIcon")),b("data-pc-section","clearIcon")}}function Ne(i,h){}function ke(i,h){i&1&&g(0,Ne,0,0,"ng-template")}function Me(i,h){if(i&1){let e=N();D(0,"span",8),S("click",function(){p(e);let t=a(2);return m(t.clear())}),g(1,ke,1,0,null,9),E()}if(i&2){let e=a(2);I(e.cx("clearIcon")),b("data-pc-section","clearIcon"),f(),d("ngTemplateOutlet",e.clearIconTemplate||e._clearIconTemplate)}}function Fe(i,h){if(i&1&&(M(0),g(1,Se,1,3,"svg",5)(2,Me,2,4,"span",6),F()),i&2){let e=a();f(),d("ngIf",!e.clearIconTemplate&&!e._clearIconTemplate),f(),d("ngIf",e.clearIconTemplate||e._clearIconTemplate)}}function Re(i,h){if(i&1&&v(0,"span",12),i&2){let e=a(2);d("ngClass",e.incrementButtonIcon),b("data-pc-section","incrementbuttonicon")}}function Le(i,h){i&1&&(B(),v(0,"svg",14)),i&2&&b("data-pc-section","incrementbuttonicon")}function Ue(i,h){}function Ae(i,h){i&1&&g(0,Ue,0,0,"ng-template")}function ze(i,h){if(i&1&&(M(0),g(1,Le,1,1,"svg",13)(2,Ae,1,0,null,9),F()),i&2){let e=a(2);f(),d("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),f(),d("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Oe(i,h){if(i&1&&v(0,"span",12),i&2){let e=a(2);d("ngClass",e.decrementButtonIcon),b("data-pc-section","decrementbuttonicon")}}function $e(i,h){i&1&&(B(),v(0,"svg",16)),i&2&&b("data-pc-section","decrementbuttonicon")}function Ge(i,h){}function Ke(i,h){i&1&&g(0,Ge,0,0,"ng-template")}function Pe(i,h){if(i&1&&(M(0),g(1,$e,1,1,"svg",15)(2,Ke,1,0,null,9),F()),i&2){let e=a(2);f(),d("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),f(),d("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function je(i,h){if(i&1){let e=N();D(0,"span")(1,"button",10),S("mousedown",function(t){p(e);let r=a();return m(r.onUpButtonMouseDown(t))})("mouseup",function(){p(e);let t=a();return m(t.onUpButtonMouseUp())})("mouseleave",function(){p(e);let t=a();return m(t.onUpButtonMouseLeave())})("keydown",function(t){p(e);let r=a();return m(r.onUpButtonKeyDown(t))})("keyup",function(){p(e);let t=a();return m(t.onUpButtonKeyUp())}),g(2,Re,1,2,"span",11)(3,ze,3,2,"ng-container",2),E(),D(4,"button",10),S("mousedown",function(t){p(e);let r=a();return m(r.onDownButtonMouseDown(t))})("mouseup",function(){p(e);let t=a();return m(t.onDownButtonMouseUp())})("mouseleave",function(){p(e);let t=a();return m(t.onDownButtonMouseLeave())})("keydown",function(t){p(e);let r=a();return m(r.onDownButtonKeyDown(t))})("keyup",function(){p(e);let t=a();return m(t.onDownButtonKeyUp())}),g(5,Oe,1,2,"span",11)(6,Pe,3,2,"ng-container",2),E()()}if(i&2){let e=a();I(e.cx("buttonGroup")),b("data-pc-section","buttonGroup"),f(),I(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),b("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),f(),d("ngIf",e.incrementButtonIcon),f(),d("ngIf",!e.incrementButtonIcon),f(),I(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),b("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),f(),d("ngIf",e.decrementButtonIcon),f(),d("ngIf",!e.decrementButtonIcon)}}function Qe(i,h){if(i&1&&v(0,"span",12),i&2){let e=a(2);d("ngClass",e.incrementButtonIcon),b("data-pc-section","incrementbuttonicon")}}function qe(i,h){i&1&&(B(),v(0,"svg",14)),i&2&&b("data-pc-section","incrementbuttonicon")}function We(i,h){}function He(i,h){i&1&&g(0,We,0,0,"ng-template")}function Ze(i,h){if(i&1&&(M(0),g(1,qe,1,1,"svg",13)(2,He,1,0,null,9),F()),i&2){let e=a(2);f(),d("ngIf",!e.incrementButtonIconTemplate&&!e._incrementButtonIconTemplate),f(),d("ngTemplateOutlet",e.incrementButtonIconTemplate||e._incrementButtonIconTemplate)}}function Je(i,h){if(i&1){let e=N();D(0,"button",10),S("mousedown",function(t){p(e);let r=a();return m(r.onUpButtonMouseDown(t))})("mouseup",function(){p(e);let t=a();return m(t.onUpButtonMouseUp())})("mouseleave",function(){p(e);let t=a();return m(t.onUpButtonMouseLeave())})("keydown",function(t){p(e);let r=a();return m(r.onUpButtonKeyDown(t))})("keyup",function(){p(e);let t=a();return m(t.onUpButtonKeyUp())}),g(1,Qe,1,2,"span",11)(2,Ze,3,2,"ng-container",2),E()}if(i&2){let e=a();I(e.cn(e.cx("incrementButton"),e.incrementButtonClass)),b("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","incrementbutton"),f(),d("ngIf",e.incrementButtonIcon),f(),d("ngIf",!e.incrementButtonIcon)}}function Xe(i,h){if(i&1&&v(0,"span",12),i&2){let e=a(2);d("ngClass",e.decrementButtonIcon),b("data-pc-section","decrementbuttonicon")}}function Ye(i,h){i&1&&(B(),v(0,"svg",16)),i&2&&b("data-pc-section","decrementbuttonicon")}function et(i,h){}function tt(i,h){i&1&&g(0,et,0,0,"ng-template")}function nt(i,h){if(i&1&&(M(0),g(1,Ye,1,1,"svg",15)(2,tt,1,0,null,9),F()),i&2){let e=a(2);f(),d("ngIf",!e.decrementButtonIconTemplate&&!e._decrementButtonIconTemplate),f(),d("ngTemplateOutlet",e.decrementButtonIconTemplate||e._decrementButtonIconTemplate)}}function it(i,h){if(i&1){let e=N();D(0,"button",10),S("mousedown",function(t){p(e);let r=a();return m(r.onDownButtonMouseDown(t))})("mouseup",function(){p(e);let t=a();return m(t.onDownButtonMouseUp())})("mouseleave",function(){p(e);let t=a();return m(t.onDownButtonMouseLeave())})("keydown",function(t){p(e);let r=a();return m(r.onDownButtonKeyDown(t))})("keyup",function(){p(e);let t=a();return m(t.onDownButtonKeyUp())}),g(1,Xe,1,2,"span",11)(2,nt,3,2,"ng-container",2),E()}if(i&2){let e=a();I(e.cn(e.cx("decrementButton"),e.decrementButtonClass)),b("disabled",e.$disabled()?"":void 0)("aria-hidden",!0)("data-pc-section","decrementbutton"),f(),d("ngIf",e.decrementButtonIcon),f(),d("ngIf",!e.decrementButtonIcon)}}var rt=`
    ${ye}

    /* For PrimeNG */
    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext {
        border-color: dt('inputtext.invalid.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext:enabled:focus,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext:enabled:focus {
        border-color: dt('inputtext.focus.border.color');
    }

    p-inputNumber.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-input-number.ng-invalid.ng-dirty > .p-inputtext::placeholder,
    p-inputnumber.ng-invalid.ng-dirty > .p-inputtext::placeholder {
        color: dt('inputtext.invalid.placeholder.color');
    }
`,ot={root:({instance:i})=>["p-inputnumber p-component p-inputwrapper",{"p-inputwrapper-filled":i.$filled()||i.allowEmpty===!1,"p-inputwrapper-focus":i.focused,"p-inputnumber-stacked":i.showButtons&&i.buttonLayout==="stacked","p-inputnumber-horizontal":i.showButtons&&i.buttonLayout==="horizontal","p-inputnumber-vertical":i.showButtons&&i.buttonLayout==="vertical","p-inputnumber-fluid":i.hasFluid,"p-invalid":i.invalid()}],pcInputText:"p-inputnumber-input",buttonGroup:"p-inputnumber-button-group",incrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-increment-button",{"p-disabled":i.showButtons&&i.max()!=null&&i.maxlength()}],decrementButton:({instance:i})=>["p-inputnumber-button p-inputnumber-decrement-button",{"p-disabled":i.showButtons&&i.min()!=null&&i.minlength()}],clearIcon:"p-inputnumber-clear-icon"},Ie=(()=>{class i extends ce{name="inputnumber";theme=rt;classes=ot;static \u0275fac=(()=>{let e;return function(t){return(e||(e=A(i)))(t||i)}})();static \u0275prov=q({token:i,factory:i.\u0275fac})}return i})();var ut={provide:pe,useExisting:Q(()=>we),multi:!0},we=(()=>{class i extends ge{injector;showButtons=!1;format=!0;buttonLayout="stacked";inputId;styleClass;placeholder;tabindex;title;ariaLabelledBy;ariaDescribedBy;ariaLabel;ariaRequired;autocomplete;incrementButtonClass;decrementButtonClass;incrementButtonIcon;decrementButtonIcon;readonly;allowEmpty=!0;locale;localeMatcher;mode="decimal";currency;currencyDisplay;useGrouping=!0;minFractionDigits;maxFractionDigits;prefix;suffix;inputStyle;inputStyleClass;showClear=!1;autofocus;onInput=new k;onFocus=new k;onBlur=new k;onKeyDown=new k;onClear=new k;clearIconTemplate;incrementButtonIconTemplate;decrementButtonIconTemplate;templates;input;_clearIconTemplate;_incrementButtonIconTemplate;_decrementButtonIconTemplate;value;focused;initialized;groupChar="";prefixChar="";suffixChar="";isSpecialChar;timer;lastValue;_numeral;numberFormat;_decimal;_decimalChar="";_group;_minusSign;_currency;_prefix;_suffix;_index;_componentStyle=H(Ie);ngControl=null;constructor(e){super(),this.injector=e}ngOnChanges(e){super.ngOnChanges(e),["locale","localeMatcher","mode","currency","currencyDisplay","useGrouping","minFractionDigits","maxFractionDigits","prefix","suffix"].some(t=>!!e[t])&&this.updateConstructParser()}ngOnInit(){super.ngOnInit(),this.ngControl=this.injector.get(me,null,{optional:!0}),this.constructParser(),this.initialized=!0}ngAfterContentInit(){this.templates.forEach(e=>{switch(e.getType()){case"clearicon":this._clearIconTemplate=e.template;break;case"incrementbuttonicon":this._incrementButtonIconTemplate=e.template;break;case"decrementbuttonicon":this._decrementButtonIconTemplate=e.template;break}})}getOptions(){let e=(o,u,s)=>{if(!(o==null||isNaN(o)||!isFinite(o)))return Math.max(u,Math.min(s,Math.floor(o)))},n=e(this.minFractionDigits,0,20),t=e(this.maxFractionDigits,0,100),r=n!=null&&t!=null&&n>t?t:n;return{localeMatcher:this.localeMatcher,style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:this.useGrouping,minimumFractionDigits:r,maximumFractionDigits:t}}constructParser(){let e=this.getOptions(),n=Object.fromEntries(Object.entries(e).filter(([o,u])=>u!==void 0));this.numberFormat=new Intl.NumberFormat(this.locale,n);let t=[...new Intl.NumberFormat(this.locale,{useGrouping:!1}).format(9876543210)].reverse(),r=new Map(t.map((o,u)=>[o,u]));this._numeral=new RegExp(`[${t.join("")}]`,"g"),this._group=this.getGroupingExpression(),this._minusSign=this.getMinusSignExpression(),this._currency=this.getCurrencyExpression(),this._decimal=this.getDecimalExpression(),this._decimalChar=this.getDecimalChar(),this._suffix=this.getSuffixExpression(),this._prefix=this.getPrefixExpression(),this._index=o=>r.get(o)}updateConstructParser(){this.initialized&&this.constructParser()}escapeRegExp(e){return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&")}getDecimalExpression(){let e=this.getDecimalChar();return new RegExp(`[${e}]`,"g")}getDecimalChar(){return new Intl.NumberFormat(this.locale,j(P({},this.getOptions()),{useGrouping:!1})).format(1.1).replace(this._currency,"").trim().replace(this._numeral,"")}getGroupingExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!0});return this.groupChar=e.format(1e6).trim().replace(this._numeral,"").charAt(0),new RegExp(`[${this.groupChar}]`,"g")}getMinusSignExpression(){let e=new Intl.NumberFormat(this.locale,{useGrouping:!1});return new RegExp(`[${e.format(-1).trim().replace(this._numeral,"")}]`,"g")}getCurrencyExpression(){if(this.currency){let e=new Intl.NumberFormat(this.locale,{style:"currency",currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});return new RegExp(`[${e.format(1).replace(/\s/g,"").replace(this._numeral,"").replace(this._group,"")}]`,"g")}return new RegExp("[]","g")}getPrefixExpression(){if(this.prefix)this.prefixChar=this.prefix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay});this.prefixChar=e.format(1).split("1")[0]}return new RegExp(`${this.escapeRegExp(this.prefixChar||"")}`,"g")}getSuffixExpression(){if(this.suffix)this.suffixChar=this.suffix;else{let e=new Intl.NumberFormat(this.locale,{style:this.mode,currency:this.currency,currencyDisplay:this.currencyDisplay,minimumFractionDigits:0,maximumFractionDigits:0});this.suffixChar=e.format(1).split("1")[1]}return new RegExp(`${this.escapeRegExp(this.suffixChar||"")}`,"g")}formatValue(e){if(e!=null){if(e==="-")return e;if(this.format){let t=new Intl.NumberFormat(this.locale,this.getOptions()).format(e);return this.prefix&&e!=this.prefix&&(t=this.prefix+t),this.suffix&&e!=this.suffix&&(t=t+this.suffix),t}return e.toString()}return""}parseValue(e){let n=this._suffix?new RegExp(this._suffix,""):/(?:)/,t=this._prefix?new RegExp(this._prefix,""):/(?:)/,r=this._currency?new RegExp(this._currency,""):/(?:)/,o=e.replace(n,"").replace(t,"").trim().replace(/\s/g,"").replace(r,"").replace(this._group,"").replace(this._minusSign,"-").replace(this._decimal,".").replace(this._numeral,this._index);if(o){if(o==="-")return o;let u=+o;return isNaN(u)?null:u}return null}repeat(e,n,t){if(this.readonly)return;let r=n||500;this.clearTimer(),this.timer=setTimeout(()=>{this.repeat(e,40,t)},r),this.spin(e,t)}spin(e,n){let t=(this.step()??1)*n,r=this.parseValue(this.input?.nativeElement.value)||0,o=this.validateValue(r+t),u=this.maxlength();u&&u<this.formatValue(o).length||(this.updateInput(o,null,"spin",null),this.updateModel(e,o),this.handleOnInput(e,r,o))}clear(){this.value=null,this.onModelChange(this.value),this.onClear.emit()}onUpButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,1),e.preventDefault())}onUpButtonMouseUp(){this.$disabled()||this.clearTimer()}onUpButtonMouseLeave(){this.$disabled()||this.clearTimer()}onUpButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,1)}onUpButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseDown(e){if(e.button===2){this.clearTimer();return}this.$disabled()||(this.input?.nativeElement.focus(),this.repeat(e,null,-1),e.preventDefault())}onDownButtonMouseUp(){this.$disabled()||this.clearTimer()}onDownButtonMouseLeave(){this.$disabled()||this.clearTimer()}onDownButtonKeyUp(){this.$disabled()||this.clearTimer()}onDownButtonKeyDown(e){(e.keyCode===32||e.keyCode===13)&&this.repeat(e,null,-1)}onUserInput(e){this.readonly||(this.isSpecialChar&&(e.target.value=this.lastValue),this.isSpecialChar=!1)}onInputKeyDown(e){if(this.readonly)return;if(this.lastValue=e.target.value,e.shiftKey||e.altKey){this.isSpecialChar=!0;return}let n=e.target.selectionStart,t=e.target.selectionEnd,r=e.target.value,o=null;switch(e.altKey&&e.preventDefault(),e.key){case"ArrowUp":this.spin(e,1),e.preventDefault();break;case"ArrowDown":this.spin(e,-1),e.preventDefault();break;case"ArrowLeft":for(let u=n;u<=r.length;u++){let s=u===0?0:u-1;if(this.isNumeralChar(r.charAt(s))){this.input.nativeElement.setSelectionRange(u,u);break}}break;case"ArrowRight":for(let u=t;u>=0;u--)if(this.isNumeralChar(r.charAt(u))){this.input.nativeElement.setSelectionRange(u,u);break}break;case"Tab":case"Enter":o=this.validateValue(this.parseValue(this.input.nativeElement.value)),this.input.nativeElement.value=this.formatValue(o),this.input.nativeElement.setAttribute("aria-valuenow",o),this.updateModel(e,o);break;case"Backspace":{if(e.preventDefault(),n===t){if(n==1&&this.prefix||n==r.length&&this.suffix)break;let u=r.charAt(n-1),{decimalCharIndex:s,decimalCharIndexWithoutPrefix:c}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(u)){let l=this.getDecimalLength(r);if(this._group.test(u))this._group.lastIndex=0,o=r.slice(0,n-2)+r.slice(n-1);else if(this._decimal.test(u))this._decimal.lastIndex=0,l?this.input?.nativeElement.setSelectionRange(n-1,n-1):o=r.slice(0,n-1)+r.slice(n);else if(s>0&&n>s){let x=this.isDecimalMode()&&(this.minFractionDigits||0)<l?"":"0";o=r.slice(0,n-1)+x+r.slice(n)}else c===1?(o=r.slice(0,n-1)+"0"+r.slice(n),o=this.parseValue(o)>0?o:""):o=r.slice(0,n-1)+r.slice(n)}else this.mode==="currency"&&this._currency&&u.search(this._currency)!=-1&&(o=r.slice(1));this.updateValue(e,o,null,"delete-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break}case"Delete":if(e.preventDefault(),n===t){if(n==0&&this.prefix||n==r.length-1&&this.suffix)break;let u=r.charAt(n),{decimalCharIndex:s,decimalCharIndexWithoutPrefix:c}=this.getDecimalCharIndexes(r);if(this.isNumeralChar(u)){let l=this.getDecimalLength(r);if(this._group.test(u))this._group.lastIndex=0,o=r.slice(0,n)+r.slice(n+2);else if(this._decimal.test(u))this._decimal.lastIndex=0,l?this.input?.nativeElement.setSelectionRange(n+1,n+1):o=r.slice(0,n)+r.slice(n+1);else if(s>0&&n>s){let x=this.isDecimalMode()&&(this.minFractionDigits||0)<l?"":"0";o=r.slice(0,n)+x+r.slice(n+1)}else c===1?(o=r.slice(0,n)+"0"+r.slice(n+1),o=this.parseValue(o)>0?o:""):o=r.slice(0,n)+r.slice(n+1)}this.updateValue(e,o,null,"delete-back-single")}else o=this.deleteRange(r,n,t),this.updateValue(e,o,null,"delete-range");break;case"Home":this.min()&&(this.updateModel(e,this.min()),e.preventDefault());break;case"End":this.max()&&(this.updateModel(e,this.max()),e.preventDefault());break;default:break}this.onKeyDown.emit(e)}onInputKeyPress(e){if(this.readonly)return;let n=e.which||e.keyCode,t=String.fromCharCode(n),r=this.isDecimalSign(t),o=this.isMinusSign(t);n!=13&&e.preventDefault(),!r&&e.code==="NumpadDecimal"&&(r=!0,t=this._decimalChar,n=t.charCodeAt(0));let{value:u,selectionStart:s,selectionEnd:c}=this.input.nativeElement,l=this.parseValue(u+t),x=l!=null?l.toString():"",T=u.substring(s,c),_=this.parseValue(T),w=_!=null?_.toString():"";if(s!==c&&w.length>0){this.insert(e,t,{isDecimalSign:r,isMinusSign:o});return}let y=this.maxlength();y&&x.length>y||(48<=n&&n<=57||o||r)&&this.insert(e,t,{isDecimalSign:r,isMinusSign:o})}onPaste(e){if(!this.$disabled()&&!this.readonly){e.preventDefault();let n=(e.clipboardData||this.document.defaultView.clipboardData).getData("Text");if(this.inputId==="integeronly"&&/[^\d-]/.test(n))return;if(n){this.maxlength()&&(n=n.toString().substring(0,this.maxlength()));let t=this.parseValue(n);t!=null&&this.insert(e,t.toString())}}}allowMinusSign(){let e=this.min();return e==null||e<0}isMinusSign(e){return this._minusSign.test(e)||e==="-"?(this._minusSign.lastIndex=0,!0):!1}isDecimalSign(e){return this._decimal.test(e)?(this._decimal.lastIndex=0,!0):!1}isDecimalMode(){return this.mode==="decimal"}getDecimalCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let r=e.replace(this._prefix,"").trim().replace(/\s/g,"").replace(this._currency,"").search(this._decimal);return this._decimal.lastIndex=0,{decimalCharIndex:n,decimalCharIndexWithoutPrefix:r}}getCharIndexes(e){let n=e.search(this._decimal);this._decimal.lastIndex=0;let t=e.search(this._minusSign);this._minusSign.lastIndex=0;let r=e.search(this._suffix);this._suffix.lastIndex=0;let o=e.search(this._currency);return this._currency.lastIndex=0,{decimalCharIndex:n,minusCharIndex:t,suffixCharIndex:r,currencyCharIndex:o}}insert(e,n,t={isDecimalSign:!1,isMinusSign:!1}){let r=n.search(this._minusSign);if(this._minusSign.lastIndex=0,!this.allowMinusSign()&&r!==-1)return;let o=this.input?.nativeElement.selectionStart,u=this.input?.nativeElement.selectionEnd,s=this.input?.nativeElement.value.trim(),{decimalCharIndex:c,minusCharIndex:l,suffixCharIndex:x,currencyCharIndex:T}=this.getCharIndexes(s),_;if(t.isMinusSign)o===0&&(_=s,(l===-1||u!==0)&&(_=this.insertText(s,n,0,u)),this.updateValue(e,_,n,"insert"));else if(t.isDecimalSign)c>0&&o===c?this.updateValue(e,s,n,"insert"):c>o&&c<u?(_=this.insertText(s,n,o,u),this.updateValue(e,_,n,"insert")):c===-1&&this.maxFractionDigits&&(_=this.insertText(s,n,o,u),this.updateValue(e,_,n,"insert"));else{let w=this.numberFormat.resolvedOptions().maximumFractionDigits,y=o!==u?"range-insert":"insert";if(c>0&&o>c){if(o+n.length-(c+1)<=w){let C=T>=o?T-1:x>=o?x:s.length;_=s.slice(0,o)+n+s.slice(o+n.length,C)+s.slice(C),this.updateValue(e,_,n,y)}}else _=this.insertText(s,n,o,u),this.updateValue(e,_,n,y)}}insertText(e,n,t,r){if((n==="."?n:n.split(".")).length===2){let u=e.slice(t,r).search(this._decimal);return this._decimal.lastIndex=0,u>0?e.slice(0,t)+this.formatValue(n)+e.slice(r):e||this.formatValue(n)}else return r-t===e.length?this.formatValue(n):t===0?n+e.slice(r):r===e.length?e.slice(0,t)+n:e.slice(0,t)+n+e.slice(r)}deleteRange(e,n,t){let r;return t-n===e.length?r="":n===0?r=e.slice(t):t===e.length?r=e.slice(0,n):r=e.slice(0,n)+e.slice(t),r}initCursor(){let e=this.input?.nativeElement.selectionStart,n=this.input?.nativeElement.selectionEnd,t=this.input?.nativeElement.value,r=t.length,o=null,u=(this.prefixChar||"").length;t=t.replace(this._prefix,""),(e===n||e!==0||n<u)&&(e-=u);let s=t.charAt(e);if(this.isNumeralChar(s))return e+u;let c=e-1;for(;c>=0;)if(s=t.charAt(c),this.isNumeralChar(s)){o=c+u;break}else c--;if(o!==null)this.input?.nativeElement.setSelectionRange(o+1,o+1);else{for(c=e;c<r;)if(s=t.charAt(c),this.isNumeralChar(s)){o=c+u;break}else c++;o!==null&&this.input?.nativeElement.setSelectionRange(o,o)}return o||0}onInputClick(){let e=this.input?.nativeElement.value;!this.readonly&&e!==se()&&this.initCursor()}isNumeralChar(e){return e.length===1&&(this._numeral.test(e)||this._decimal.test(e)||this._group.test(e)||this._minusSign.test(e))?(this.resetRegex(),!0):!1}resetRegex(){this._numeral.lastIndex=0,this._decimal.lastIndex=0,this._group.lastIndex=0,this._minusSign.lastIndex=0}updateValue(e,n,t,r){let o=this.input?.nativeElement.value,u=null;n!=null&&(u=this.parseValue(n),u=!u&&!this.allowEmpty?0:u,this.updateInput(u,t,r,n),this.handleOnInput(e,o,u))}handleOnInput(e,n,t){this.isValueChanged(n,t)&&(this.input.nativeElement.value=this.formatValue(t),this.input?.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,t),this.onInput.emit({originalEvent:e,value:t,formattedValue:n}))}isValueChanged(e,n){if(n===null&&e!==null)return!0;if(n!=null){let t=typeof e=="string"?this.parseValue(e):e;return n!==t}return!1}validateValue(e){if(e==="-"||e==null)return null;let n=this.min(),t=this.max();return n!=null&&e<n?this.min():t!=null&&e>t?t:e}updateInput(e,n,t,r){n=n||"";let o=this.input?.nativeElement.value,u=this.formatValue(e),s=o.length;if(u!==r&&(u=this.concatValues(u,r)),s===0){this.input.nativeElement.value=u,this.input.nativeElement.setSelectionRange(0,0);let l=this.initCursor()+n.length;this.input.nativeElement.setSelectionRange(l,l)}else{let c=this.input.nativeElement.selectionStart,l=this.input.nativeElement.selectionEnd,x=this.maxlength();if(x&&u.length>x&&(u=u.slice(0,x),c=Math.min(c,x),l=Math.min(l,x)),x&&x<u.length)return;this.input.nativeElement.value=u;let T=u.length;if(t==="range-insert"){let _=this.parseValue((o||"").slice(0,c)),y=(_!==null?_.toString():"").split("").join(`(${this.groupChar})?`),C=new RegExp(y,"g");C.test(u);let Ce=n.split("").join(`(${this.groupChar})?`),K=new RegExp(Ce,"g");K.test(u.slice(C.lastIndex)),l=C.lastIndex+K.lastIndex,this.input.nativeElement.setSelectionRange(l,l)}else if(T===s)t==="insert"||t==="delete-back-single"?this.input.nativeElement.setSelectionRange(l+1,l+1):t==="delete-single"?this.input.nativeElement.setSelectionRange(l-1,l-1):(t==="delete-range"||t==="spin")&&this.input.nativeElement.setSelectionRange(l,l);else if(t==="delete-back-single"){let _=o.charAt(l-1),w=o.charAt(l),y=s-T,C=this._group.test(w);C&&y===1?l+=1:!C&&this.isNumeralChar(_)&&(l+=-1*y+1),this._group.lastIndex=0,this.input.nativeElement.setSelectionRange(l,l)}else if(o==="-"&&t==="insert"){this.input.nativeElement.setSelectionRange(0,0);let w=this.initCursor()+n.length+1;this.input.nativeElement.setSelectionRange(w,w)}else l=l+(T-s),this.input.nativeElement.setSelectionRange(l,l)}this.input.nativeElement.setAttribute("aria-valuenow",e)}concatValues(e,n){if(e&&n){let t=n.search(this._decimal);return this._decimal.lastIndex=0,this.suffixChar?t!==-1?e.replace(this.suffixChar,"").split(this._decimal)[0]+n.replace(this.suffixChar,"").slice(t)+this.suffixChar:e:t!==-1?e.split(this._decimal)[0]+n.slice(t):e}return e}getDecimalLength(e){if(e){let n=e.split(this._decimal);if(n.length===2)return n[1].replace(this._suffix,"").trim().replace(/\s/g,"").replace(this._currency,"").length}return 0}onInputFocus(e){this.focused=!0,this.onFocus.emit(e)}onInputBlur(e){this.focused=!1;let n=this.validateValue(this.parseValue(this.input.nativeElement.value)),t=n?.toString();this.input.nativeElement.value=this.formatValue(t),this.input.nativeElement.setAttribute("aria-valuenow",t),this.updateModel(e,n),this.onModelTouched(),this.onBlur.emit(e)}formattedValue(){let e=!this.value&&!this.allowEmpty?0:this.value;return this.formatValue(e)}updateModel(e,n){let t=this.ngControl?.control?.updateOn==="blur";this.value!==n?(this.value=n,t&&this.focused||this.onModelChange(n)):t&&this.onModelChange(n)}writeControlValue(e,n){this.value=e&&Number(e),n(e),this.cd.markForCheck()}clearTimer(){this.timer&&clearInterval(this.timer)}static \u0275fac=function(n){return new(n||i)(X(Z))};static \u0275cmp=z({type:i,selectors:[["p-inputNumber"],["p-inputnumber"],["p-input-number"]],contentQueries:function(n,t,r){if(n&1&&(U(r,Te,4),U(r,Be,4),U(r,De,4),U(r,le,4)),n&2){let o;R(o=L())&&(t.clearIconTemplate=o.first),R(o=L())&&(t.incrementButtonIconTemplate=o.first),R(o=L())&&(t.decrementButtonIconTemplate=o.first),R(o=L())&&(t.templates=o)}},viewQuery:function(n,t){if(n&1&&te(Ee,5),n&2){let r;R(r=L())&&(t.input=r.first)}},hostVars:4,hostBindings:function(n,t){n&2&&(b("data-pc-name","inputnumber")("data-pc-section","root"),I(t.cn(t.cx("root"),t.styleClass)))},inputs:{showButtons:[2,"showButtons","showButtons",V],format:[2,"format","format",V],buttonLayout:"buttonLayout",inputId:"inputId",styleClass:"styleClass",placeholder:"placeholder",tabindex:[2,"tabindex","tabindex",$],title:"title",ariaLabelledBy:"ariaLabelledBy",ariaDescribedBy:"ariaDescribedBy",ariaLabel:"ariaLabel",ariaRequired:[2,"ariaRequired","ariaRequired",V],autocomplete:"autocomplete",incrementButtonClass:"incrementButtonClass",decrementButtonClass:"decrementButtonClass",incrementButtonIcon:"incrementButtonIcon",decrementButtonIcon:"decrementButtonIcon",readonly:[2,"readonly","readonly",V],allowEmpty:[2,"allowEmpty","allowEmpty",V],locale:"locale",localeMatcher:"localeMatcher",mode:"mode",currency:"currency",currencyDisplay:"currencyDisplay",useGrouping:[2,"useGrouping","useGrouping",V],minFractionDigits:[2,"minFractionDigits","minFractionDigits",e=>$(e,void 0)],maxFractionDigits:[2,"maxFractionDigits","maxFractionDigits",e=>$(e,void 0)],prefix:"prefix",suffix:"suffix",inputStyle:"inputStyle",inputStyleClass:"inputStyleClass",showClear:[2,"showClear","showClear",V],autofocus:[2,"autofocus","autofocus",V]},outputs:{onInput:"onInput",onFocus:"onFocus",onBlur:"onBlur",onKeyDown:"onKeyDown",onClear:"onClear"},features:[ne([ut,Ie]),O,J],decls:6,vars:36,consts:[["input",""],["pInputText","","role","spinbutton","inputmode","decimal",3,"input","keydown","keypress","paste","click","focus","blur","value","ngStyle","variant","invalid","pSize","pAutoFocus","fluid"],[4,"ngIf"],[3,"class",4,"ngIf"],["type","button","tabindex","-1",3,"class","mousedown","mouseup","mouseleave","keydown","keyup",4,"ngIf"],["data-p-icon","times",3,"class","click",4,"ngIf"],[3,"class","click",4,"ngIf"],["data-p-icon","times",3,"click"],[3,"click"],[4,"ngTemplateOutlet"],["type","button","tabindex","-1",3,"mousedown","mouseup","mouseleave","keydown","keyup"],[3,"ngClass",4,"ngIf"],[3,"ngClass"],["data-p-icon","angle-up",4,"ngIf"],["data-p-icon","angle-up"],["data-p-icon","angle-down",4,"ngIf"],["data-p-icon","angle-down"]],template:function(n,t){if(n&1){let r=N();D(0,"input",1,0),S("input",function(u){return p(r),m(t.onUserInput(u))})("keydown",function(u){return p(r),m(t.onInputKeyDown(u))})("keypress",function(u){return p(r),m(t.onInputKeyPress(u))})("paste",function(u){return p(r),m(t.onPaste(u))})("click",function(){return p(r),m(t.onInputClick())})("focus",function(u){return p(r),m(t.onInputFocus(u))})("blur",function(u){return p(r),m(t.onInputBlur(u))}),E(),g(2,Fe,3,2,"ng-container",2)(3,je,7,17,"span",3)(4,Je,3,7,"button",4)(5,it,3,7,"button",4)}n&2&&(I(t.cn(t.cx("pcInputText"),t.inputStyleClass)),d("value",t.formattedValue())("ngStyle",t.inputStyle)("variant",t.$variant())("invalid",t.invalid())("pSize",t.size())("pAutoFocus",t.autofocus)("fluid",t.hasFluid),b("id",t.inputId)("aria-valuemin",t.min())("aria-valuemax",t.max())("aria-valuenow",t.value)("placeholder",t.placeholder)("aria-label",t.ariaLabel)("aria-labelledby",t.ariaLabelledBy)("aria-describedby",t.ariaDescribedBy)("title",t.title)("size",t.inputSize())("name",t.name())("autocomplete",t.autocomplete)("maxlength",t.maxlength())("minlength",t.minlength())("tabindex",t.tabindex)("aria-required",t.ariaRequired)("min",t.min())("max",t.max())("step",t.step()??1)("required",t.required()?"":void 0)("readonly",t.readonly?"":void 0)("disabled",t.$disabled()?"":void 0)("data-pc-section","input"),f(2),d("ngIf",t.buttonLayout!="vertical"&&t.showClear&&t.value),f(),d("ngIf",t.showButtons&&t.buttonLayout==="stacked"),f(),d("ngIf",t.showButtons&&t.buttonLayout!=="stacked"),f(),d("ngIf",t.showButtons&&t.buttonLayout!=="stacked"))},dependencies:[ae,ie,re,ue,oe,de,he,be,xe,_e,G],encapsulation:2,changeDetection:0})}return i})(),kt=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=Y({type:i});static \u0275inj=W({imports:[we,G,G]})}return i})();export{xe as a,we as b,kt as c};
