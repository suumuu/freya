import {
  FocusTrap
} from "./chunk-N5TED737.js";
import {
  blockBodyScroll,
  unblockBodyScroll
} from "./chunk-VUXHBR7Y.js";
import {
  zindexutils
} from "./chunk-BB55NINM.js";
import {
  Ripple
} from "./chunk-Q4FSS6CY.js";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon,
  TimesIcon
} from "./chunk-XXK42OM5.js";
import "./chunk-2GRDWJRG.js";
import {
  BaseComponent
} from "./chunk-YIJ652GS.js";
import {
  BaseStyle
} from "./chunk-H6WPFNKP.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-7JQS7UJ5.js";
import "./chunk-RDLP67JE.js";
import {
  animate,
  style,
  transition,
  trigger
} from "./chunk-P5OQKAHD.js";
import "./chunk-UKZYY4TH.js";
import {
  Kt,
  O,
  Q2 as Q,
  W,
  Y2 as Y,
  bt,
  s3 as s,
  z2 as z
} from "./chunk-RK2QIU6W.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-QIB4AD5R.js";
import "./chunk-W2WIUP6R.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Input,
  KeyValueDiffers,
  NgModule,
  Output,
  PLATFORM_ID,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-GWCN73BT.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-MARUHEWW.js";
import "./chunk-4MWRP73S.js";

// node_modules/@primeuix/styles/dist/galleria/index.mjs
var style2 = "\n    .p-galleria {\n        overflow: hidden;\n        border-style: solid;\n        border-width: dt('galleria.border.width');\n        border-color: dt('galleria.border.color');\n        border-radius: dt('galleria.border.radius');\n    }\n\n    .p-galleria-content {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-galleria-items-container {\n        display: flex;\n        flex-direction: column;\n        position: relative;\n    }\n\n    .p-galleria-items {\n        position: relative;\n        display: flex;\n        height: 100%;\n    }\n\n    .p-galleria-nav-button {\n        position: absolute !important;\n        top: 50%;\n        display: inline-flex;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        background: dt('galleria.nav.button.background');\n        color: dt('galleria.nav.button.color');\n        width: dt('galleria.nav.button.size');\n        height: dt('galleria.nav.button.size');\n        transition:\n            background dt('galleria.transition.duration'),\n            color dt('galleria.transition.duration'),\n            outline-color dt('galleria.transition.duration'),\n            box-shadow dt('galleria.transition.duration');\n        margin: calc(-1 * calc(dt('galleria.nav.button.size')) / 2) dt('galleria.nav.button.gutter') 0 dt('galleria.nav.button.gutter');\n        padding: 0;\n        user-select: none;\n        border: 0 none;\n        cursor: pointer;\n        outline-color: transparent;\n    }\n\n    .p-galleria-nav-button:not(.p-disabled):hover {\n        background: dt('galleria.nav.button.hover.background');\n        color: dt('galleria.nav.button.hover.color');\n    }\n\n    .p-galleria-nav-button:not(.p-disabled):focus-visible {\n        box-shadow: dt('galleria.nav.button.focus.ring.shadow');\n        outline: dt('galleria.nav.button.focus.ring.width') dt('galleria.nav.button.focus.ring.style') dt('galleria.nav.button.focus.ring.color');\n        outline-offset: dt('galleria.nav.button.focus.ring.offset');\n    }\n\n    .p-galleria-next-icon,\n    .p-galleria-prev-icon {\n        font-size: dt('galleria.nav.icon.size');\n        width: dt('galleria.nav.icon.size');\n        height: dt('galleria.nav.icon.size');\n    }\n\n    .p-galleria-prev-button {\n        border-radius: dt('galleria.nav.button.prev.border.radius');\n        left: 0;\n    }\n\n    .p-galleria-next-button {\n        border-radius: dt('galleria.nav.button.next.border.radius');\n        right: 0;\n    }\n\n    .p-galleria-prev-button:dir(rtl) {\n        left: auto;\n        right: 0;\n        transform: rotate(180deg);\n    }\n\n    .p-galleria-next-button:dir(rtl) {\n        right: auto;\n        left: 0;\n        transform: rotate(180deg);\n    }\n\n    .p-galleria-item {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        height: 100%;\n        width: 100%;\n    }\n\n    .p-galleria-hover-navigators .p-galleria-nav-button {\n        pointer-events: none;\n        opacity: 0;\n        transition: opacity dt('galleria.transition.duration') ease-in-out;\n    }\n\n    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button {\n        pointer-events: all;\n        opacity: 1;\n    }\n\n    .p-galleria-hover-navigators .p-galleria-items-container:hover .p-galleria-nav-button.p-disabled {\n        pointer-events: none;\n    }\n\n    .p-galleria-caption {\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        background: dt('galleria.caption.background');\n        color: dt('galleria.caption.color');\n        padding: dt('galleria.caption.padding');\n    }\n\n    .p-galleria-thumbnails {\n        display: flex;\n        flex-direction: column;\n        overflow: auto;\n        flex-shrink: 0;\n    }\n\n    .p-galleria-thumbnail-nav-button {\n        align-self: center;\n        flex: 0 0 auto;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        position: relative;\n        margin: 0 dt('galleria.thumbnail.nav.button.gutter');\n        padding: 0;\n        border: none;\n        user-select: none;\n        cursor: pointer;\n        background: transparent;\n        color: dt('galleria.thumbnail.nav.button.color');\n        width: dt('galleria.thumbnail.nav.button.size');\n        height: dt('galleria.thumbnail.nav.button.size');\n        transition:\n            background dt('galleria.transition.duration'),\n            color dt('galleria.transition.duration'),\n            outline-color dt('galleria.transition.duration');\n        outline-color: transparent;\n        border-radius: dt('galleria.thumbnail.nav.button.border.radius');\n    }\n\n    .p-galleria-thumbnail-nav-button:hover {\n        background: dt('galleria.thumbnail.nav.button.hover.background');\n        color: dt('galleria.thumbnail.nav.button.hover.color');\n    }\n\n    .p-galleria-thumbnail-nav-button:focus-visible {\n        box-shadow: dt('galleria.thumbnail.nav.button.focus.ring.shadow');\n        outline: dt('galleria.thumbnail.nav.button.focus.ring.width') dt('galleria.thumbnail.nav.button.focus.ring.style') dt('galleria.thumbnail.nav.button.focus.ring.color');\n        outline-offset: dt('galleria.thumbnail.nav.button.focus.ring.offset');\n    }\n\n    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-next-icon,\n    .p-galleria-thumbnail-nav-button .p-galleria-thumbnail-prev-icon {\n        font-size: dt('galleria.thumbnail.nav.button.icon.size');\n        width: dt('galleria.thumbnail.nav.button.icon.size');\n        height: dt('galleria.thumbnail.nav.button.icon.size');\n    }\n\n    .p-galleria-thumbnails-content {\n        display: flex;\n        flex-direction: row;\n        background: dt('galleria.thumbnails.content.background');\n        padding: dt('galleria.thumbnails.content.padding');\n    }\n\n    .p-galleria-thumbnails-viewport {\n        overflow: hidden;\n        width: 100%;\n    }\n\n    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-prev-button:dir(rtl),\n    .p-galleria:not(.p-galleria-thumbnails-right):not(.p-galleria-thumbnails-left) .p-galleria-thumbnail-next-button:dir(rtl) {\n        transform: rotate(180deg);\n    }\n\n    .p-galleria-thumbnail-items {\n        display: flex;\n    }\n\n    .p-galleria-thumbnail-items:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-galleria-thumbnail-item {\n        overflow: auto;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        cursor: pointer;\n        opacity: 0.5;\n    }\n\n    .p-galleria-thumbnail {\n        outline-color: transparent;\n    }\n\n    .p-galleria-thumbnail-item:hover {\n        opacity: 1;\n        transition: opacity 0.3s;\n    }\n\n    .p-galleria-thumbnail-item-current {\n        opacity: 1;\n    }\n\n    .p-galleria-thumbnails-left .p-galleria-content,\n    .p-galleria-thumbnails-right .p-galleria-content {\n        flex-direction: row;\n    }\n\n    .p-galleria-thumbnails-left .p-galleria-items-container,\n    .p-galleria-thumbnails-right .p-galleria-items-container {\n        flex-direction: row;\n    }\n\n    .p-galleria-thumbnails-left .p-galleria-items-container,\n    .p-galleria-thumbnails-top .p-galleria-items-container {\n        order: 2;\n    }\n\n    .p-galleria-thumbnails-left .p-galleria-thumbnails,\n    .p-galleria-thumbnails-top .p-galleria-thumbnails {\n        order: 1;\n    }\n\n    .p-galleria-thumbnails-left .p-galleria-thumbnails-content,\n    .p-galleria-thumbnails-right .p-galleria-thumbnails-content {\n        flex-direction: column;\n        flex-grow: 1;\n    }\n\n    .p-galleria-thumbnails-left .p-galleria-thumbnail-items,\n    .p-galleria-thumbnails-right .p-galleria-thumbnail-items {\n        flex-direction: column;\n        height: 100%;\n    }\n\n    .p-galleria-indicator-list {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        padding: dt('galleria.indicator.list.padding');\n        gap: dt('galleria.indicator.list.gap');\n        margin: 0;\n        list-style: none;\n    }\n\n    .p-galleria-indicator-button {\n        display: inline-flex;\n        align-items: center;\n        background: dt('galleria.indicator.button.background');\n        width: dt('galleria.indicator.button.width');\n        height: dt('galleria.indicator.button.height');\n        transition:\n            background dt('galleria.transition.duration'),\n            color dt('galleria.transition.duration'),\n            outline-color dt('galleria.transition.duration'),\n            box-shadow dt('galleria.transition.duration');\n        outline-color: transparent;\n        border-radius: dt('galleria.indicator.button.border.radius');\n        margin: 0;\n        padding: 0;\n        border: none;\n        user-select: none;\n        cursor: pointer;\n    }\n\n    .p-galleria-indicator-button:hover {\n        background: dt('galleria.indicator.button.hover.background');\n    }\n\n    .p-galleria-indicator-button:focus-visible {\n        box-shadow: dt('galleria.indicator.button.focus.ring.shadow');\n        outline: dt('galleria.indicator.button.focus.ring.width') dt('galleria.indicator.button.focus.ring.style') dt('galleria.indicator.button.focus.ring.color');\n        outline-offset: dt('galleria.indicator.button.focus.ring.offset');\n    }\n\n    .p-galleria-indicator-active .p-galleria-indicator-button {\n        background: dt('galleria.indicator.button.active.background');\n    }\n\n    .p-galleria-indicators-left .p-galleria-items-container,\n    .p-galleria-indicators-right .p-galleria-items-container {\n        flex-direction: row;\n        align-items: center;\n    }\n\n    .p-galleria-indicators-left .p-galleria-items,\n    .p-galleria-indicators-top .p-galleria-items {\n        order: 2;\n    }\n\n    .p-galleria-indicators-left .p-galleria-indicator-list,\n    .p-galleria-indicators-top .p-galleria-indicator-list {\n        order: 1;\n    }\n\n    .p-galleria-indicators-left .p-galleria-indicator-list,\n    .p-galleria-indicators-right .p-galleria-indicator-list {\n        flex-direction: column;\n    }\n\n    .p-galleria-inset-indicators .p-galleria-indicator-list {\n        position: absolute;\n        display: flex;\n        z-index: 1;\n        background: dt('galleria.inset.indicator.list.background');\n    }\n\n    .p-galleria-inset-indicators .p-galleria-indicator-button {\n        background: dt('galleria.inset.indicator.button.background');\n    }\n\n    .p-galleria-inset-indicators .p-galleria-indicator-button:hover {\n        background: dt('galleria.inset.indicator.button.hover.background');\n    }\n\n    .p-galleria-inset-indicators .p-galleria-indicator-active .p-galleria-indicator-button {\n        background: dt('galleria.inset.indicator.button.active.background');\n    }\n\n    .p-galleria-inset-indicators.p-galleria-indicators-top .p-galleria-indicator-list {\n        top: 0;\n        left: 0;\n        width: 100%;\n        align-items: flex-start;\n    }\n\n    .p-galleria-inset-indicators.p-galleria-indicators-right .p-galleria-indicator-list {\n        right: 0;\n        top: 0;\n        height: 100%;\n        align-items: flex-end;\n    }\n\n    .p-galleria-inset-indicators.p-galleria-indicators-bottom .p-galleria-indicator-list {\n        bottom: 0;\n        left: 0;\n        width: 100%;\n        align-items: flex-end;\n    }\n\n    .p-galleria-inset-indicators.p-galleria-indicators-left .p-galleria-indicator-list {\n        left: 0;\n        top: 0;\n        height: 100%;\n        align-items: flex-start;\n    }\n\n    .p-galleria-mask {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n    }\n\n    .p-galleria-close-button {\n        position: absolute !important;\n        top: 0;\n        right: 0;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        overflow: hidden;\n        margin: dt('galleria.close.button.gutter');\n        background: dt('galleria.close.button.background');\n        color: dt('galleria.close.button.color');\n        width: dt('galleria.close.button.size');\n        height: dt('galleria.close.button.size');\n        padding: 0;\n        border: none;\n        user-select: none;\n        cursor: pointer;\n        border-radius: dt('galleria.close.button.border.radius');\n        outline-color: transparent;\n        transition:\n            background dt('galleria.transition.duration'),\n            color dt('galleria.transition.duration'),\n            outline-color dt('galleria.transition.duration');\n    }\n\n    .p-galleria-close-icon {\n        font-size: dt('galleria.close.button.icon.size');\n        width: dt('galleria.close.button.icon.size');\n        height: dt('galleria.close.button.icon.size');\n    }\n\n    .p-galleria-close-button:hover {\n        background: dt('galleria.close.button.hover.background');\n        color: dt('galleria.close.button.hover.color');\n    }\n\n    .p-galleria-close-button:focus-visible {\n        box-shadow: dt('galleria.close.button.focus.ring.shadow');\n        outline: dt('galleria.close.button.focus.ring.width') dt('galleria.close.button.focus.ring.style') dt('galleria.close.button.focus.ring.color');\n        outline-offset: dt('galleria.close.button.focus.ring.offset');\n    }\n\n    .p-galleria-mask .p-galleria-nav-button {\n        position: fixed;\n        top: 50%;\n    }\n\n    .p-galleria-enter-active {\n        transition: all 150ms cubic-bezier(0, 0, 0.2, 1);\n    }\n\n    .p-galleria-leave-active {\n        transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);\n    }\n\n    .p-galleria-enter-from,\n    .p-galleria-leave-to {\n        opacity: 0;\n        transform: scale(0.7);\n    }\n\n    .p-galleria-enter-active .p-galleria-nav-button {\n        opacity: 0;\n    }\n\n    .p-items-hidden .p-galleria-thumbnail-item {\n        visibility: hidden;\n    }\n\n    .p-items-hidden .p-galleria-thumbnail-item.p-galleria-thumbnail-item-active {\n        visibility: visible;\n    }\n";

// node_modules/primeng/fesm2022/primeng-galleria.mjs
var _c0 = ["header"];
var _c1 = ["footer"];
var _c2 = ["indicator"];
var _c3 = ["caption"];
var _c4 = ["closeicon"];
var _c5 = ["previousthumbnailicon"];
var _c6 = ["nextthumbnailicon"];
var _c7 = ["itempreviousicon"];
var _c8 = ["itemnexticon"];
var _c9 = ["item"];
var _c10 = ["thumbnail"];
var _c11 = ["mask"];
var _c12 = ["container"];
var _c13 = (a0, a1) => ({
  showTransitionParams: a0,
  hideTransitionParams: a1
});
var _c14 = (a0) => ({
  value: "visible",
  params: a0
});
function Galleria_div_0_div_2_p_galleriaContent_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-galleriaContent", 7);
    ɵɵlistener("@animation.start", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_animation_animation_start_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onAnimationStart($event));
    })("@animation.done", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_animation_animation_done_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onAnimationEnd($event));
    })("maskHide", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_maskHide_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onMaskHide());
    })("activeItemChange", function Galleria_div_0_div_2_p_galleriaContent_2_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.onActiveItemChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("@animation", ɵɵpureFunction1(9, _c14, ɵɵpureFunction2(6, _c13, ctx_r1.showTransitionOptions, ctx_r1.hideTransitionOptions)))("value", ctx_r1.value)("activeIndex", ctx_r1.activeIndex)("numVisible", ctx_r1.numVisibleLimit || ctx_r1.numVisible)("ngStyle", ctx_r1.containerStyle)("fullScreen", ctx_r1.fullScreen);
  }
}
function Galleria_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 5, 2);
    ɵɵlistener("click", function Galleria_div_0_div_2_Template_div_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onMaskHide($event));
    });
    ɵɵtemplate(2, Galleria_div_0_div_2_p_galleriaContent_2_Template, 1, 11, "p-galleriaContent", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.maskClass);
    ɵɵproperty("ngClass", ctx_r1.cx("mask"));
    ɵɵattribute("role", ctx_r1.fullScreen ? "dialog" : "region")("aria-modal", ctx_r1.fullScreen ? "true" : void 0);
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.visible);
  }
}
function Galleria_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", null, 1);
    ɵɵtemplate(2, Galleria_div_0_div_2_Template, 3, 6, "div", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance(2);
    ɵɵproperty("ngIf", ctx_r1.maskVisible);
  }
}
function Galleria_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-galleriaContent", 8);
    ɵɵlistener("activeItemChange", function Galleria_ng_template_1_Template_p_galleriaContent_activeItemChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onActiveItemChange($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("value", ctx_r1.value)("activeIndex", ctx_r1.activeIndex)("numVisible", ctx_r1.numVisibleLimit || ctx_r1.numVisible);
  }
}
var _c15 = ["closeButton"];
var _c16 = () => ({});
function GalleriaContent_div_0_button_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 9);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cx("closeIcon"));
  }
}
function GalleriaContent_div_0_button_1_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaContent_div_0_button_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleriaContent_div_0_button_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaContent_div_0_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 6);
    ɵɵlistener("click", function GalleriaContent_div_0_button_1_Template_button_click_0_listener() {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.maskHide.emit());
    });
    ɵɵtemplate(1, GalleriaContent_div_0_button_1__svg_svg_1_Template, 1, 2, "svg", 7)(2, GalleriaContent_div_0_button_1_2_Template, 1, 0, null, 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cx("closeButton"));
    ɵɵattribute("aria-label", ctx_r2.closeAriaLabel())("data-pc-section", "closebutton");
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.galleria.closeIconTemplate && !ctx_r2.galleria._closeIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.galleria.closeIconTemplate || ctx_r2.galleria._closeIconTemplate);
  }
}
function GalleriaContent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "p-galleriaItemSlot", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cx("header"));
    ɵɵadvance();
    ɵɵproperty("templates", ctx_r2.galleria.templates);
  }
}
function GalleriaContent_div_0_p_galleriaThumbnails_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-galleriaThumbnails", 11);
    ɵɵlistener("onActiveIndexChange", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_onActiveIndexChange_0_listener($event) {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.onActiveIndexChange($event));
    })("stopSlideShow", function GalleriaContent_div_0_p_galleriaThumbnails_5_Template_p_galleriaThumbnails_stopSlideShow_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r2 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r2.stopSlideShow());
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵproperty("containerId", ctx_r2.id)("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex)("templates", ctx_r2.galleria.templates)("numVisible", ctx_r2.numVisible)("responsiveOptions", ctx_r2.galleria.responsiveOptions)("circular", ctx_r2.galleria.circular)("isVertical", ctx_r2.isVertical())("contentHeight", ctx_r2.galleria.verticalThumbnailViewPortHeight)("showThumbnailNavigators", ctx_r2.galleria.showThumbnailNavigators)("slideShowActive", ctx_r2.slideShowActive);
  }
}
function GalleriaContent_div_0_div_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "p-galleriaItemSlot", 12);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r2.cx("footer"));
    ɵɵadvance();
    ɵɵproperty("templates", ctx_r2.galleria.templates);
  }
}
function GalleriaContent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 1);
    ɵɵtemplate(1, GalleriaContent_div_0_button_1_Template, 3, 6, "button", 2)(2, GalleriaContent_div_0_div_2_Template, 2, 3, "div", 3);
    ɵɵelementStart(3, "div")(4, "p-galleriaItem", 4);
    ɵɵlistener("onActiveIndexChange", function GalleriaContent_div_0_Template_p_galleriaItem_onActiveIndexChange_4_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onActiveIndexChange($event));
    })("startSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_startSlideShow_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.startSlideShow());
    })("stopSlideShow", function GalleriaContent_div_0_Template_p_galleriaItem_stopSlideShow_4_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.stopSlideShow());
    });
    ɵɵelementEnd();
    ɵɵtemplate(5, GalleriaContent_div_0_p_galleriaThumbnails_5_Template, 1, 11, "p-galleriaThumbnails", 5);
    ɵɵelementEnd();
    ɵɵtemplate(6, GalleriaContent_div_0_div_6_Template, 2, 3, "div", 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cn(ctx_r2.cx("root"), ctx_r2.galleria.containerClass));
    ɵɵproperty("ngStyle", !ctx_r2.galleria.fullScreen ? ctx_r2.galleria.containerStyle : ɵɵpureFunction0(25, _c16))("pFocusTrapDisabled", !ctx_r2.fullScreen);
    ɵɵattribute("id", ctx_r2.id)("role", "region");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.galleria.fullScreen);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.galleria.templates && (ctx_r2.galleria.headerFacet || ctx_r2.galleria.headerTemplate));
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("content"));
    ɵɵattribute("aria-live", ctx_r2.galleria.autoPlay ? "polite" : "off");
    ɵɵadvance();
    ɵɵproperty("id", ctx_r2.id)("value", ctx_r2.value)("activeIndex", ctx_r2.activeIndex)("circular", ctx_r2.galleria.circular)("templates", ctx_r2.galleria.templates)("showIndicators", ctx_r2.galleria.showIndicators)("changeItemOnIndicatorHover", ctx_r2.galleria.changeItemOnIndicatorHover)("indicatorFacet", ctx_r2.galleria.indicatorFacet)("captionFacet", ctx_r2.galleria.captionFacet)("showItemNavigators", ctx_r2.galleria.showItemNavigators)("autoPlay", ctx_r2.galleria.autoPlay)("slideShowActive", ctx_r2.slideShowActive);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.galleria.showThumbnails);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.shouldRenderFooter());
  }
}
function GalleriaItemSlot_ng_container_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function GalleriaItemSlot_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GalleriaItemSlot_ng_container_0_ng_container_1_Template, 1, 0, "ng-container", 1);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r0.contentTemplate)("ngTemplateOutletContext", ctx_r0.context);
  }
}
var _c17 = (a0) => ({
  index: a0
});
function GalleriaItem_button_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 7);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("prevIcon"));
  }
}
function GalleriaItem_button_1_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaItem_button_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleriaItem_button_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaItem_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function GalleriaItem_button_1_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navBackward($event));
    })("focus", function GalleriaItem_button_1_Template_button_focus_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onButtonFocus("left"));
    })("blur", function GalleriaItem_button_1_Template_button_blur_0_listener() {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onButtonBlur("left"));
    });
    ɵɵtemplate(1, GalleriaItem_button_1__svg_svg_1_Template, 1, 2, "svg", 5)(2, GalleriaItem_button_1_2_Template, 1, 0, null, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("prevButton"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.galleria.itemPreviousIconTemplate && !ctx_r1.galleria._itemPreviousIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.galleria.itemPreviousIconTemplate || ctx_r1.galleria._itemPreviousIconTemplate);
  }
}
function GalleriaItem_button_4__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("nextIcon"));
  }
}
function GalleriaItem_button_4_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaItem_button_4_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleriaItem_button_4_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaItem_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 4);
    ɵɵlistener("click", function GalleriaItem_button_4_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navForward($event));
    })("focus", function GalleriaItem_button_4_Template_button_focus_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onButtonFocus("right"));
    })("blur", function GalleriaItem_button_4_Template_button_blur_0_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onButtonBlur("right"));
    });
    ɵɵtemplate(1, GalleriaItem_button_4__svg_svg_1_Template, 1, 2, "svg", 8)(2, GalleriaItem_button_4_2_Template, 1, 0, null, 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("nextButton"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.galleria.itemNextIconTemplate && !ctx_r1.galleria._itemNextIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.galleria.itemNextIconTemplate || ctx_r1.galleria._itemNextIconTemplate);
  }
}
function GalleriaItem_div_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "p-galleriaItemSlot", 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("caption"));
    ɵɵadvance();
    ɵɵproperty("item", ctx_r1.activeItem)("templates", ctx_r1.templates);
  }
}
function GalleriaItem_ul_6_li_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "button", 15);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("indicatorButton"));
  }
}
function GalleriaItem_ul_6_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 12);
    ɵɵlistener("click", function GalleriaItem_ul_6_li_1_Template_li_click_0_listener() {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onIndicatorClick(index_r5));
    })("mouseenter", function GalleriaItem_ul_6_li_1_Template_li_mouseenter_0_listener() {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onIndicatorMouseEnter(index_r5));
    })("keydown", function GalleriaItem_ul_6_li_1_Template_li_keydown_0_listener($event) {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onIndicatorKeyDown($event, index_r5));
    });
    ɵɵtemplate(1, GalleriaItem_ul_6_li_1_button_1_Template, 1, 2, "button", 13);
    ɵɵelement(2, "p-galleriaItemSlot", 14);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const index_r5 = ctx.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("indicator", ɵɵpureFunction1(8, _c17, index_r5)));
    ɵɵattribute("aria-label", ctx_r1.ariaPageLabel(index_r5 + 1))("aria-selected", ctx_r1.activeIndex === index_r5)("aria-controls", ctx_r1.id + "_item_" + index_r5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.indicatorFacet && !ctx_r1.galleria.indicatorTemplate);
    ɵɵadvance();
    ɵɵproperty("index", index_r5)("templates", ctx_r1.templates);
  }
}
function GalleriaItem_ul_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "ul");
    ɵɵtemplate(1, GalleriaItem_ul_6_li_1_Template, 3, 10, "li", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("indicatorList"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.value);
  }
}
var _c18 = ["itemsContainer"];
var _c19 = (a0) => ({
  height: a0
});
var _c20 = (a0, a1) => ({
  index: a0,
  activeIndex: a1
});
function GalleriaThumbnails_button_2_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cx("thumbnailPrevIcon"));
  }
}
function GalleriaThumbnails_button_2_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cx("thumbnailPrevIcon"));
  }
}
function GalleriaThumbnails_button_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GalleriaThumbnails_button_2_ng_container_1__svg_svg_1_Template, 1, 2, "svg", 8)(2, GalleriaThumbnails_button_2_ng_container_1__svg_svg_2_Template, 1, 2, "svg", 9);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isVertical);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isVertical);
  }
}
function GalleriaThumbnails_button_2_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaThumbnails_button_2_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleriaThumbnails_button_2_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaThumbnails_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("click", function GalleriaThumbnails_button_2_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navBackward($event));
    });
    ɵɵtemplate(1, GalleriaThumbnails_button_2_ng_container_1_Template, 3, 2, "ng-container", 6)(2, GalleriaThumbnails_button_2_2_Template, 1, 0, null, 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("thumbnailPrevButton"));
    ɵɵattribute("aria-label", ctx_r2.ariaPrevButtonLabel());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.galleria.previousThumbnailIconTemplate && !ctx_r2.galleria._previousThumbnailIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.galleria.previousThumbnailIconTemplate || ctx_r2.galleria._previousThumbnailIconTemplate);
  }
}
function GalleriaThumbnails_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 12);
    ɵɵlistener("keydown", function GalleriaThumbnails_div_6_Template_div_keydown_0_listener($event) {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onThumbnailKeydown($event, index_r5));
    });
    ɵɵelementStart(1, "div", 13);
    ɵɵlistener("click", function GalleriaThumbnails_div_6_Template_div_click_1_listener() {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick(index_r5));
    })("touchend", function GalleriaThumbnails_div_6_Template_div_touchend_1_listener() {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick(index_r5));
    })("keydown.enter", function GalleriaThumbnails_div_6_Template_div_keydown_enter_1_listener() {
      const index_r5 = ɵɵrestoreView(_r4).index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onItemClick(index_r5));
    });
    ɵɵelement(2, "p-galleriaItemSlot", 14);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("thumbnailItem", ɵɵpureFunction2(13, _c20, index_r5, ctx_r2.activeIndex)));
    ɵɵattribute("aria-selected", ctx_r2.activeIndex === index_r5)("aria-controls", ctx_r2.containerId + "_item_" + index_r5)("data-pc-section", "thumbnailitem")("data-p-active", ctx_r2.activeIndex === index_r5);
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("thumbnail"));
    ɵɵattribute("tabindex", ctx_r2.activeIndex === index_r5 ? 0 : -1)("aria-current", ctx_r2.activeIndex === index_r5 ? "page" : void 0)("aria-label", ctx_r2.ariaPageLabel(index_r5 + 1));
    ɵɵadvance();
    ɵɵproperty("item", item_r6)("templates", ctx_r2.templates);
  }
}
function GalleriaThumbnails_button_7_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 17);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cx("thumbnailNextIcon"));
  }
}
function GalleriaThumbnails_button_7_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 18);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cx("thumbnailNextIcon"));
  }
}
function GalleriaThumbnails_button_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, GalleriaThumbnails_button_7_ng_container_1__svg_svg_1_Template, 1, 2, "svg", 15)(2, GalleriaThumbnails_button_7_ng_container_1__svg_svg_2_Template, 1, 2, "svg", 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.isVertical);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.isVertical);
  }
}
function GalleriaThumbnails_button_7_2_ng_template_0_Template(rf, ctx) {
}
function GalleriaThumbnails_button_7_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, GalleriaThumbnails_button_7_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function GalleriaThumbnails_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 5);
    ɵɵlistener("click", function GalleriaThumbnails_button_7_Template_button_click_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.navForward($event));
    });
    ɵɵtemplate(1, GalleriaThumbnails_button_7_ng_container_1_Template, 3, 2, "ng-container", 6)(2, GalleriaThumbnails_button_7_2_Template, 1, 0, null, 7);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("thumbnailNextButton"));
    ɵɵattribute("aria-label", ctx_r2.ariaNextButtonLabel());
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.galleria.nextThumbnailIconTemplate && !ctx_r2.galleria._nextThumbnailIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.galleria.nextThumbnailIconTemplate || ctx_r2.galleria._nextThumbnailIconTemplate);
  }
}
var classes = {
  mask: "p-galleria-mask p-overlay-mask p-overlay-mask-enter",
  root: ({
    instance
  }) => {
    const thumbnailsPosClass = instance.galleria.showThumbnails && instance.getPositionClass("p-galleria-thumbnails", instance.galleria.thumbnailsPosition);
    const indicatorPosClass = instance.galleria.showIndicators && instance.getPositionClass("p-galleria-indicators", instance.galleria.indicatorsPosition);
    return ["p-galleria p-component", {
      "p-galleria-fullscreen": instance.galleria.fullScreen,
      "p-galleria-inset-indicators": instance.galleria.showIndicatorsOnItem,
      "p-galleria-hover-navigators": instance.galleria.showItemNavigatorsOnHover && !instance.galleria.fullScreen
    }, thumbnailsPosClass, indicatorPosClass];
  },
  closeButton: "p-galleria-close-button",
  closeIcon: "p-galleria-close-icon",
  header: "p-galleria-header",
  content: "p-galleria-content",
  footer: "p-galleria-footer",
  itemsContainer: "p-galleria-items-container",
  items: "p-galleria-items",
  prevButton: ({
    instance
  }) => ["p-galleria-prev-button p-galleria-nav-button", {
    "p-disabled": instance.isNavBackwardDisabled()
  }],
  prevIcon: "p-galleria-prev-icon",
  item: "p-galleria-item",
  nextButton: ({
    instance
  }) => ["p-galleria-next-button p-galleria-nav-button", {
    "p-disabled": instance.isNavForwardDisabled()
  }],
  nextIcon: "p-galleria-next-icon",
  caption: "p-galleria-caption",
  indicatorList: "p-galleria-indicator-list",
  indicator: ({
    instance,
    index
  }) => ["p-galleria-indicator", {
    "p-galleria-indicator-active": instance.isIndicatorItemActive(index)
  }],
  indicatorButton: "p-galleria-indicator-button",
  thumbnails: "p-galleria-thumbnails",
  thumbnailContent: "p-galleria-thumbnails-content",
  thumbnailPrevButton: ({
    instance
  }) => ["p-galleria-thumbnail-prev-button p-galleria-thumbnail-nav-button", {
    "p-disabled": instance.isNavBackwardDisabled()
  }],
  thumbnailPrevIcon: "p-galleria-thumbnail-prev-icon",
  thumbnailsViewport: "p-galleria-thumbnails-viewport",
  thumbnailItems: "p-galleria-thumbnail-items",
  thumbnailItem: ({
    instance,
    index,
    activeIndex
  }) => ["p-galleria-thumbnail-item", {
    "p-galleria-thumbnail-item-current": activeIndex === index,
    "p-galleria-thumbnail-item-active": instance.isItemActive(index),
    "p-galleria-thumbnail-item-start": instance.firstItemAciveIndex() === index,
    "p-galleria-thumbnail-item-end": instance.lastItemActiveIndex() === index
  }],
  thumbnail: "p-galleria-thumbnail",
  thumbnailNextButton: ({
    instance
  }) => ["p-galleria-thumbnail-next-button  p-galleria-thumbnail-nav-button", {
    "p-disabled": instance.isNavForwardDisabled()
  }],
  thumbnailNextIcon: "p-galleria-thumbnail-next-icon"
};
var GalleriaStyle = class _GalleriaStyle extends BaseStyle {
  name = "galleria";
  theme = style2;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵGalleriaStyle_BaseFactory;
    return function GalleriaStyle_Factory(__ngFactoryType__) {
      return (ɵGalleriaStyle_BaseFactory || (ɵGalleriaStyle_BaseFactory = ɵɵgetInheritedFactory(_GalleriaStyle)))(__ngFactoryType__ || _GalleriaStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _GalleriaStyle,
    factory: _GalleriaStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaStyle, [{
    type: Injectable
  }], null, null);
})();
var GalleriaClasses;
(function(GalleriaClasses2) {
  GalleriaClasses2["mask"] = "p-galleria-mask";
  GalleriaClasses2["root"] = "p-galleria";
  GalleriaClasses2["closeButton"] = "p-galleria-close-button";
  GalleriaClasses2["closeIcon"] = "p-galleria-close-icon";
  GalleriaClasses2["header"] = "p-galleria-header";
  GalleriaClasses2["content"] = "p-galleria-content";
  GalleriaClasses2["footer"] = "p-galleria-footer";
  GalleriaClasses2["itemsContainer"] = "p-galleria-items-container";
  GalleriaClasses2["items"] = "p-galleria-items";
  GalleriaClasses2["prevButton"] = "p-galleria-prev-button";
  GalleriaClasses2["prevIcon"] = "p-galleria-prev-icon";
  GalleriaClasses2["item"] = "p-galleria-item";
  GalleriaClasses2["nextButton"] = "p-galleria-next-button";
  GalleriaClasses2["nextIcon"] = "p-galleria-next-icon";
  GalleriaClasses2["caption"] = "p-galleria-caption";
  GalleriaClasses2["indicatorList"] = "p-galleria-indicator-list";
  GalleriaClasses2["indicator"] = "p-galleria-indicator";
  GalleriaClasses2["indicatorButton"] = "p-galleria-indicator-button";
  GalleriaClasses2["thumbnails"] = "p-galleria-thumbnails";
  GalleriaClasses2["thumbnailContent"] = "p-galleria-thumbnails-content";
  GalleriaClasses2["previousThumbnailButton"] = "p-galleria-thumbnail-prev-button";
  GalleriaClasses2["previousThumbnailIcon"] = "p-galleria-thumbnail-prev-icon";
  GalleriaClasses2["thumbnailsViewport"] = "p-galleria-thumbnails-viewport";
  GalleriaClasses2["thumbnailItems"] = "p-galleria-thumbnail-items";
  GalleriaClasses2["thumbnailItem"] = "p-galleria-thumbnail-item";
  GalleriaClasses2["thumbnail"] = "p-galleria-thumbnail";
  GalleriaClasses2["nextThumbnailButton"] = "p-galleria-thumbnail-next-button";
  GalleriaClasses2["nextThumbnailIcon"] = "p-galleria-thumbnail-next-icon";
})(GalleriaClasses || (GalleriaClasses = {}));
var Galleria = class _Galleria extends BaseComponent {
  platformId;
  element;
  cd;
  /**
   * Index of the first item.
   * @group Props
   */
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }
  /**
   * Whether to display the component on fullscreen.
   * @group Props
   */
  fullScreen = false;
  /**
   * Unique identifier of the element.
   * @group Props
   */
  id;
  /**
   * An array of objects to display.
   * @group Props
   */
  value;
  /**
   * Number of items per page.
   * @group Props
   */
  numVisible = 3;
  /**
   * An array of options for responsive design.
   * @see {GalleriaResponsiveOptions}
   * @group Props
   */
  responsiveOptions;
  /**
   * Whether to display navigation buttons in item section.
   * @group Props
   */
  showItemNavigators = false;
  /**
   * Whether to display navigation buttons in thumbnail container.
   * @group Props
   */
  showThumbnailNavigators = true;
  /**
   * Whether to display navigation buttons on item hover.
   * @group Props
   */
  showItemNavigatorsOnHover = false;
  /**
   * When enabled, item is changed on indicator hover.
   * @group Props
   */
  changeItemOnIndicatorHover = false;
  /**
   * Defines if scrolling would be infinite.
   * @group Props
   */
  circular = false;
  /**
   * Items are displayed with a slideshow in autoPlay mode.
   * @group Props
   */
  autoPlay = false;
  /**
   * When enabled, autorun should stop by click.
   * @group Props
   */
  shouldStopAutoplayByClick = true;
  /**
   * Time in milliseconds to scroll items.
   * @group Props
   */
  transitionInterval = 4e3;
  /**
   * Whether to display thumbnail container.
   * @group Props
   */
  showThumbnails = true;
  /**
   * Position of thumbnails.
   * @group Props
   */
  thumbnailsPosition = "bottom";
  /**
   * Height of the viewport in vertical thumbnail.
   * @group Props
   */
  verticalThumbnailViewPortHeight = "300px";
  /**
   * Whether to display indicator container.
   * @group Props
   */
  showIndicators = false;
  /**
   * When enabled, indicator container is displayed on item container.
   * @group Props
   */
  showIndicatorsOnItem = false;
  /**
   * Position of indicators.
   * @group Props
   */
  indicatorsPosition = "bottom";
  /**
   * Base zIndex value to use in layering.
   * @group Props
   */
  baseZIndex = 0;
  /**
   * Style class of the mask on fullscreen mode.
   * @group Props
   */
  maskClass;
  /**
   * Style class of the component on fullscreen mode. Otherwise, the 'class' property can be used.
   * @group Props
   */
  containerClass;
  /**
   * Inline style of the component on fullscreen mode. Otherwise, the 'style' property can be used.
   * @group Props
   */
  containerStyle;
  /**
   * Transition options of the show animation.
   * @group Props
   */
  showTransitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Transition options of the hide animation.
   * @group Props
   */
  hideTransitionOptions = "150ms cubic-bezier(0, 0, 0.2, 1)";
  /**
   * Specifies the visibility of the mask on fullscreen mode.
   * @group Props
   */
  get visible() {
    return this._visible;
  }
  set visible(visible) {
    this._visible = visible;
    if (this._visible && !this.maskVisible) {
      this.maskVisible = true;
    }
  }
  /**
   * Callback to invoke on active index change.
   * @param {number} number - Active index.
   * @group Emits
   */
  activeIndexChange = new EventEmitter();
  /**
   * Callback to invoke on visiblity change.
   * @param {boolean} boolean - Visible value.
   * @group Emits
   */
  visibleChange = new EventEmitter();
  mask;
  container;
  _visible = false;
  _activeIndex = 0;
  headerTemplate;
  headerFacet;
  footerTemplate;
  footerFacet;
  indicatorTemplate;
  indicatorFacet;
  captionTemplate;
  captionFacet;
  _closeIconTemplate;
  closeIconTemplate;
  _previousThumbnailIconTemplate;
  previousThumbnailIconTemplate;
  _nextThumbnailIconTemplate;
  nextThumbnailIconTemplate;
  _itemPreviousIconTemplate;
  itemPreviousIconTemplate;
  _itemNextIconTemplate;
  itemNextIconTemplate;
  _itemTemplate;
  itemTemplate;
  _thumbnailTemplate;
  thumbnailTemplate;
  maskVisible = false;
  numVisibleLimit = 0;
  _componentStyle = inject(GalleriaStyle);
  constructor(platformId, element, cd) {
    super();
    this.platformId = platformId;
    this.element = element;
    this.cd = cd;
  }
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this.headerFacet = item.template;
          break;
        case "footer":
          this.footerFacet = item.template;
          break;
        case "indicator":
          this.indicatorFacet = item.template;
          break;
        case "closeicon":
          this.closeIconTemplate = item.template;
          break;
        case "itemnexticon":
          this.itemNextIconTemplate = item.template;
          break;
        case "itempreviousicon":
          this.itemPreviousIconTemplate = item.template;
          break;
        case "previousthumbnailicon":
          this.previousThumbnailIconTemplate = item.template;
          break;
        case "nextthumbnailicon":
          this.nextThumbnailIconTemplate = item.template;
          break;
        case "caption":
          this.captionFacet = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
        case "thumbnail":
          this.thumbnailTemplate = item.template;
          break;
      }
    });
  }
  ngOnChanges(simpleChanges) {
    super.ngOnChanges(simpleChanges);
    if (simpleChanges.value && simpleChanges.value.currentValue?.length < this.numVisible) {
      this.numVisibleLimit = simpleChanges.value.currentValue.length;
    } else {
      this.numVisibleLimit = 0;
    }
  }
  onMaskHide(event) {
    if (!event || event.target === event.currentTarget) {
      this.visible = false;
      this.visibleChange.emit(false);
    }
  }
  onActiveItemChange(index) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.activeIndexChange.emit(index);
    }
  }
  onAnimationStart(event) {
    switch (event.toState) {
      case "visible":
        this.enableModality();
        setTimeout(() => {
          const focusTarget = z(this.container?.nativeElement, '[data-pc-section="closebutton"]');
          if (focusTarget) bt(focusTarget);
        }, 25);
        break;
      case "void":
        W(this.mask?.nativeElement, "p-overlay-mask-leave");
        break;
    }
  }
  onAnimationEnd(event) {
    switch (event.toState) {
      case "void":
        this.disableModality();
        break;
    }
  }
  enableModality() {
    blockBodyScroll();
    this.cd.markForCheck();
    if (this.mask) {
      zindexutils.set("modal", this.mask.nativeElement, this.baseZIndex || this.config.zIndex.modal);
    }
  }
  disableModality() {
    unblockBodyScroll();
    this.maskVisible = false;
    this.cd.markForCheck();
    if (this.mask) {
      zindexutils.clear(this.mask.nativeElement);
    }
  }
  ngOnDestroy() {
    if (this.fullScreen) {
      O(this.document.body, "p-overflow-hidden");
    }
    if (this.mask) {
      this.disableModality();
    }
  }
  static ɵfac = function Galleria_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Galleria)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Galleria,
    selectors: [["p-galleria"]],
    contentQueries: function Galleria_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, _c2, 4);
        ɵɵcontentQuery(dirIndex, _c3, 4);
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, _c5, 4);
        ɵɵcontentQuery(dirIndex, _c6, 4);
        ɵɵcontentQuery(dirIndex, _c7, 4);
        ɵɵcontentQuery(dirIndex, _c8, 4);
        ɵɵcontentQuery(dirIndex, _c9, 4);
        ɵɵcontentQuery(dirIndex, _c10, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.indicatorTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.captionTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._closeIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._previousThumbnailIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._nextThumbnailIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._itemPreviousIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._itemNextIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._thumbnailTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Galleria_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c11, 5);
        ɵɵviewQuery(_c12, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.mask = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.container = _t.first);
      }
    },
    inputs: {
      activeIndex: "activeIndex",
      fullScreen: [2, "fullScreen", "fullScreen", booleanAttribute],
      id: "id",
      value: "value",
      numVisible: [2, "numVisible", "numVisible", numberAttribute],
      responsiveOptions: "responsiveOptions",
      showItemNavigators: [2, "showItemNavigators", "showItemNavigators", booleanAttribute],
      showThumbnailNavigators: [2, "showThumbnailNavigators", "showThumbnailNavigators", booleanAttribute],
      showItemNavigatorsOnHover: [2, "showItemNavigatorsOnHover", "showItemNavigatorsOnHover", booleanAttribute],
      changeItemOnIndicatorHover: [2, "changeItemOnIndicatorHover", "changeItemOnIndicatorHover", booleanAttribute],
      circular: [2, "circular", "circular", booleanAttribute],
      autoPlay: [2, "autoPlay", "autoPlay", booleanAttribute],
      shouldStopAutoplayByClick: [2, "shouldStopAutoplayByClick", "shouldStopAutoplayByClick", booleanAttribute],
      transitionInterval: [2, "transitionInterval", "transitionInterval", numberAttribute],
      showThumbnails: [2, "showThumbnails", "showThumbnails", booleanAttribute],
      thumbnailsPosition: "thumbnailsPosition",
      verticalThumbnailViewPortHeight: "verticalThumbnailViewPortHeight",
      showIndicators: [2, "showIndicators", "showIndicators", booleanAttribute],
      showIndicatorsOnItem: [2, "showIndicatorsOnItem", "showIndicatorsOnItem", booleanAttribute],
      indicatorsPosition: "indicatorsPosition",
      baseZIndex: [2, "baseZIndex", "baseZIndex", numberAttribute],
      maskClass: "maskClass",
      containerClass: "containerClass",
      containerStyle: "containerStyle",
      showTransitionOptions: "showTransitionOptions",
      hideTransitionOptions: "hideTransitionOptions",
      visible: "visible"
    },
    outputs: {
      activeIndexChange: "activeIndexChange",
      visibleChange: "visibleChange"
    },
    standalone: false,
    features: [ɵɵProvidersFeature([GalleriaStyle]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
    decls: 3,
    vars: 2,
    consts: [["windowed", ""], ["container", ""], ["mask", ""], [4, "ngIf", "ngIfElse"], [3, "ngClass", "class", "click", 4, "ngIf"], [3, "click", "ngClass"], [3, "value", "activeIndex", "numVisible", "ngStyle", "fullScreen", "maskHide", "activeItemChange", 4, "ngIf"], [3, "maskHide", "activeItemChange", "value", "activeIndex", "numVisible", "ngStyle", "fullScreen"], [3, "activeItemChange", "value", "activeIndex", "numVisible"]],
    template: function Galleria_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Galleria_div_0_Template, 3, 1, "div", 3)(1, Galleria_ng_template_1_Template, 1, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const windowed_r5 = ɵɵreference(2);
        ɵɵproperty("ngIf", ctx.fullScreen)("ngIfElse", windowed_r5);
      }
    },
    dependencies: () => [NgClass, NgIf, NgStyle, GalleriaContent],
    encapsulation: 2,
    data: {
      animation: [trigger("animation", [transition("void => visible", [style({
        transform: "scale(0.7)",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        transform: "scale(0.7)",
        opacity: 0
      }))])])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Galleria, [{
    type: Component,
    args: [{
      selector: "p-galleria",
      standalone: false,
      template: `
        <div *ngIf="fullScreen; else windowed" #container>
            <div *ngIf="maskVisible" #mask [ngClass]="cx('mask')" [class]="maskClass" [attr.role]="fullScreen ? 'dialog' : 'region'" [attr.aria-modal]="fullScreen ? 'true' : undefined" (click)="onMaskHide($event)">
                <p-galleriaContent
                    *ngIf="visible"
                    [@animation]="{
                        value: 'visible',
                        params: { showTransitionParams: showTransitionOptions, hideTransitionParams: hideTransitionOptions }
                    }"
                    (@animation.start)="onAnimationStart($event)"
                    (@animation.done)="onAnimationEnd($event)"
                    [value]="value"
                    [activeIndex]="activeIndex"
                    [numVisible]="numVisibleLimit || numVisible"
                    (maskHide)="onMaskHide()"
                    (activeItemChange)="onActiveItemChange($event)"
                    [ngStyle]="containerStyle"
                    [fullScreen]="fullScreen"
                ></p-galleriaContent>
            </div>
        </div>

        <ng-template #windowed>
            <p-galleriaContent [value]="value" [activeIndex]="activeIndex" [numVisible]="numVisibleLimit || numVisible" (activeItemChange)="onActiveItemChange($event)"></p-galleriaContent>
        </ng-template>
    `,
      animations: [trigger("animation", [transition("void => visible", [style({
        transform: "scale(0.7)",
        opacity: 0
      }), animate("{{showTransitionParams}}")]), transition("visible => void", [animate("{{hideTransitionParams}}", style({
        transform: "scale(0.7)",
        opacity: 0
      }))])])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [GalleriaStyle]
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    activeIndex: [{
      type: Input
    }],
    fullScreen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    id: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    numVisible: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    responsiveOptions: [{
      type: Input
    }],
    showItemNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showThumbnailNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showItemNavigatorsOnHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    changeItemOnIndicatorHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    circular: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoPlay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    shouldStopAutoplayByClick: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    transitionInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    showThumbnails: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    thumbnailsPosition: [{
      type: Input
    }],
    verticalThumbnailViewPortHeight: [{
      type: Input
    }],
    showIndicators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIndicatorsOnItem: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    indicatorsPosition: [{
      type: Input
    }],
    baseZIndex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    maskClass: [{
      type: Input
    }],
    containerClass: [{
      type: Input
    }],
    containerStyle: [{
      type: Input
    }],
    showTransitionOptions: [{
      type: Input
    }],
    hideTransitionOptions: [{
      type: Input
    }],
    visible: [{
      type: Input
    }],
    activeIndexChange: [{
      type: Output
    }],
    visibleChange: [{
      type: Output
    }],
    mask: [{
      type: ViewChild,
      args: ["mask"]
    }],
    container: [{
      type: ViewChild,
      args: ["container"]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    footerTemplate: [{
      type: ContentChild,
      args: ["footer", {
        descendants: false,
        static: false
      }]
    }],
    indicatorTemplate: [{
      type: ContentChild,
      args: ["indicator", {
        descendants: false
      }]
    }],
    captionTemplate: [{
      type: ContentChild,
      args: ["caption", {
        descendants: false
      }]
    }],
    _closeIconTemplate: [{
      type: ContentChild,
      args: ["closeicon", {
        descendants: false
      }]
    }],
    _previousThumbnailIconTemplate: [{
      type: ContentChild,
      args: ["previousthumbnailicon", {
        descendants: false
      }]
    }],
    _nextThumbnailIconTemplate: [{
      type: ContentChild,
      args: ["nextthumbnailicon", {
        descendants: false
      }]
    }],
    _itemPreviousIconTemplate: [{
      type: ContentChild,
      args: ["itempreviousicon", {
        descendants: false
      }]
    }],
    _itemNextIconTemplate: [{
      type: ContentChild,
      args: ["itemnexticon", {
        descendants: false
      }]
    }],
    _itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    _thumbnailTemplate: [{
      type: ContentChild,
      args: ["thumbnail", {
        descendants: false,
        static: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var GalleriaContent = class _GalleriaContent extends BaseComponent {
  galleria;
  cd;
  differs;
  elementRef;
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }
  value = [];
  numVisible;
  fullScreen;
  maskHide = new EventEmitter();
  activeItemChange = new EventEmitter();
  closeButton;
  _componentStyle = inject(GalleriaStyle);
  id;
  _activeIndex = 0;
  slideShowActive = true;
  interval;
  styleClass;
  differ;
  constructor(galleria, cd, differs, elementRef) {
    super();
    this.galleria = galleria;
    this.cd = cd;
    this.differs = differs;
    this.elementRef = elementRef;
    this.id = this.galleria.id || s("pn_id_");
    this.differ = this.differs.find(this.galleria).create();
  }
  // For custom fullscreen
  handleFullscreenChange(event) {
    if (document?.fullscreenElement === this.elementRef.nativeElement?.children[0]) {
      this.fullScreen = true;
    } else {
      this.fullScreen = false;
    }
  }
  ngDoCheck() {
    if (isPlatformBrowser(this.galleria.platformId)) {
      const changes = this.differ.diff(this.galleria);
      if (changes && changes.forEachItem.length > 0) {
        this.cd.markForCheck();
      }
    }
  }
  shouldRenderFooter() {
    return this.galleria.footerFacet && this.galleria.templates && this.galleria.templates.toArray().length > 0 || this.galleria.footerTemplate;
  }
  startSlideShow() {
    if (isPlatformBrowser(this.galleria.platformId)) {
      this.interval = setInterval(() => {
        let activeIndex = this.galleria.circular && this.value.length - 1 === this.activeIndex ? 0 : this.activeIndex + 1;
        this.onActiveIndexChange(activeIndex);
        this.activeIndex = activeIndex;
      }, this.galleria.transitionInterval);
      this.slideShowActive = true;
    }
  }
  stopSlideShow() {
    if (this.galleria.autoPlay && !this.galleria.shouldStopAutoplayByClick) {
      return;
    }
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.slideShowActive = false;
  }
  getPositionClass(preClassName, position) {
    const positions = ["top", "left", "bottom", "right"];
    const pos = positions.find((item) => item === position);
    return pos ? `${preClassName}-${pos}` : "";
  }
  isVertical() {
    return this.galleria.thumbnailsPosition === "left" || this.galleria.thumbnailsPosition === "right";
  }
  onActiveIndexChange(index) {
    if (this.activeIndex !== index) {
      this.activeIndex = index;
      this.activeItemChange.emit(this.activeIndex);
    }
  }
  closeAriaLabel() {
    return this.config.translation.aria ? this.config.translation.aria.close : void 0;
  }
  static ɵfac = function GalleriaContent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleriaContent)(ɵɵdirectiveInject(Galleria), ɵɵdirectiveInject(ChangeDetectorRef), ɵɵdirectiveInject(KeyValueDiffers), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _GalleriaContent,
    selectors: [["p-galleriaContent"]],
    viewQuery: function GalleriaContent_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c15, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.closeButton = _t.first);
      }
    },
    hostBindings: function GalleriaContent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("fullscreenchange", function GalleriaContent_fullscreenchange_HostBindingHandler($event) {
          return ctx.handleFullscreenChange($event);
        }, ɵɵresolveDocument);
      }
    },
    inputs: {
      activeIndex: "activeIndex",
      value: "value",
      numVisible: [2, "numVisible", "numVisible", numberAttribute],
      fullScreen: [2, "fullScreen", "fullScreen", booleanAttribute]
    },
    outputs: {
      maskHide: "maskHide",
      activeItemChange: "activeItemChange"
    },
    standalone: false,
    features: [ɵɵProvidersFeature([GalleriaStyle]), ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["pFocusTrap", "", 3, "class", "ngStyle", "pFocusTrapDisabled", 4, "ngIf"], ["pFocusTrap", "", 3, "ngStyle", "pFocusTrapDisabled"], ["type", "button", 3, "class", "click", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "onActiveIndexChange", "startSlideShow", "stopSlideShow", "id", "value", "activeIndex", "circular", "templates", "showIndicators", "changeItemOnIndicatorHover", "indicatorFacet", "captionFacet", "showItemNavigators", "autoPlay", "slideShowActive"], [3, "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive", "onActiveIndexChange", "stopSlideShow", 4, "ngIf"], ["type", "button", 3, "click"], ["data-p-icon", "times", 3, "class", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "times"], ["type", "header", 3, "templates"], [3, "onActiveIndexChange", "stopSlideShow", "containerId", "value", "activeIndex", "templates", "numVisible", "responsiveOptions", "circular", "isVertical", "contentHeight", "showThumbnailNavigators", "slideShowActive"], ["type", "footer", 3, "templates"]],
    template: function GalleriaContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, GalleriaContent_div_0_Template, 7, 26, "div", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.value && ctx.value.length > 0);
      }
    },
    dependencies: () => [NgIf, NgTemplateOutlet, NgStyle, TimesIcon, FocusTrap, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaContent, [{
    type: Component,
    args: [{
      selector: "p-galleriaContent",
      standalone: false,
      template: `
        <div [attr.id]="id" [attr.role]="'region'" *ngIf="value && value.length > 0" [class]="cn(cx('root'), galleria.containerClass)" [ngStyle]="!galleria.fullScreen ? galleria.containerStyle : {}" pFocusTrap [pFocusTrapDisabled]="!fullScreen">
            <button *ngIf="galleria.fullScreen" type="button" [class]="cx('closeButton')" (click)="maskHide.emit()" [attr.aria-label]="closeAriaLabel()" [attr.data-pc-section]="'closebutton'">
                <svg data-p-icon="times" *ngIf="!galleria.closeIconTemplate && !galleria._closeIconTemplate" [class]="cx('closeIcon')" />
                <ng-template *ngTemplateOutlet="galleria.closeIconTemplate || galleria._closeIconTemplate"></ng-template>
            </button>
            <div *ngIf="galleria.templates && (galleria.headerFacet || galleria.headerTemplate)" [class]="cx('header')">
                <p-galleriaItemSlot type="header" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
            <div [class]="cx('content')" [attr.aria-live]="galleria.autoPlay ? 'polite' : 'off'">
                <p-galleriaItem
                    [id]="id"
                    [value]="value"
                    [activeIndex]="activeIndex"
                    [circular]="galleria.circular"
                    [templates]="galleria.templates"
                    (onActiveIndexChange)="onActiveIndexChange($event)"
                    [showIndicators]="galleria.showIndicators"
                    [changeItemOnIndicatorHover]="galleria.changeItemOnIndicatorHover"
                    [indicatorFacet]="galleria.indicatorFacet"
                    [captionFacet]="galleria.captionFacet"
                    [showItemNavigators]="galleria.showItemNavigators"
                    [autoPlay]="galleria.autoPlay"
                    [slideShowActive]="slideShowActive"
                    (startSlideShow)="startSlideShow()"
                    (stopSlideShow)="stopSlideShow()"
                ></p-galleriaItem>

                <p-galleriaThumbnails
                    *ngIf="galleria.showThumbnails"
                    [containerId]="id"
                    [value]="value"
                    (onActiveIndexChange)="onActiveIndexChange($event)"
                    [activeIndex]="activeIndex"
                    [templates]="galleria.templates"
                    [numVisible]="numVisible"
                    [responsiveOptions]="galleria.responsiveOptions"
                    [circular]="galleria.circular"
                    [isVertical]="isVertical()"
                    [contentHeight]="galleria.verticalThumbnailViewPortHeight"
                    [showThumbnailNavigators]="galleria.showThumbnailNavigators"
                    [slideShowActive]="slideShowActive"
                    (stopSlideShow)="stopSlideShow()"
                ></p-galleriaThumbnails>
            </div>
            <div *ngIf="shouldRenderFooter()" [class]="cx('footer')">
                <p-galleriaItemSlot type="footer" [templates]="galleria.templates"></p-galleriaItemSlot>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [GalleriaStyle]
    }]
  }], () => [{
    type: Galleria
  }, {
    type: ChangeDetectorRef
  }, {
    type: KeyValueDiffers
  }, {
    type: ElementRef
  }], {
    activeIndex: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    numVisible: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    fullScreen: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maskHide: [{
      type: Output
    }],
    activeItemChange: [{
      type: Output
    }],
    closeButton: [{
      type: ViewChild,
      args: ["closeButton"]
    }],
    handleFullscreenChange: [{
      type: HostListener,
      args: ["document:fullscreenchange", ["$event"]]
    }]
  });
})();
var GalleriaItemSlot = class _GalleriaItemSlot {
  templates;
  index;
  get item() {
    return this._item;
  }
  shouldRender() {
    return this.contentTemplate || this.galleria._itemTemplate || this.galleria.itemTemplate || this.galleria.captionTemplate || this.galleria.captionTemplate || this.galleria.captionFacet || this.galleria.thumbnailTemplate || this.galleria._thumbnailTemplate || this.galleria.footerTemplate;
  }
  galleria = inject(Galleria);
  set item(item) {
    this._item = item;
    if (this.templates && this.templates?.toArray().length > 0) {
      this.templates.forEach((item2) => {
        if (item2.getType() === this.type) {
          switch (this.type) {
            case "item":
            case "caption":
            case "thumbnail":
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item2.template;
              break;
            case "footer":
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item2.template;
              break;
          }
        }
      });
    } else {
      this.getContentTemplate();
    }
  }
  getContentTemplate() {
    switch (this.type) {
      case "item":
        this.context = {
          $implicit: this.item
        };
        this.contentTemplate = this.galleria._itemTemplate || this.galleria.itemTemplate;
        break;
      case "caption":
        this.context = {
          $implicit: this.item
        };
        this.contentTemplate = this.galleria.captionTemplate || this.galleria.captionFacet;
        break;
      case "thumbnail":
        this.context = {
          $implicit: this.item
        };
        this.contentTemplate = this.galleria.thumbnailTemplate || this.galleria._thumbnailTemplate;
        break;
      case "indicator":
        this.context = {
          $implicit: this.index
        };
        this.contentTemplate = this.galleria.indicatorTemplate || this.galleria.indicatorFacet;
        break;
      case "footer":
        this.context = {
          $implicit: this.item
        };
        this.contentTemplate = this.galleria.footerTemplate || this.galleria.footerFacet;
        break;
      default:
        this.context = {
          $implicit: this.item
        };
        this.contentTemplate = this.galleria._itemTemplate || this.galleria.itemTemplate;
    }
  }
  type;
  contentTemplate;
  context;
  _item;
  ngAfterContentInit() {
    if (this.templates && this.templates.toArray().length > 0) {
      this.templates?.forEach((item) => {
        if (item.getType() === this.type) {
          switch (this.type) {
            case "item":
            case "caption":
            case "thumbnail":
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item.template;
              break;
            case "indicator":
              this.context = {
                $implicit: this.index
              };
              this.contentTemplate = item.template;
              break;
            case "footer":
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item.template;
              break;
            default:
              this.context = {
                $implicit: this.item
              };
              this.contentTemplate = item.template;
              break;
          }
        }
      });
    } else {
      this.getContentTemplate();
    }
  }
  static ɵfac = function GalleriaItemSlot_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleriaItemSlot)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _GalleriaItemSlot,
    selectors: [["p-galleriaItemSlot"]],
    inputs: {
      templates: "templates",
      index: [2, "index", "index", numberAttribute],
      item: "item",
      type: "type"
    },
    standalone: false,
    decls: 1,
    vars: 1,
    consts: [[4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function GalleriaItemSlot_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, GalleriaItemSlot_ng_container_0_Template, 2, 2, "ng-container", 0);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.shouldRender());
      }
    },
    dependencies: [NgIf, NgTemplateOutlet],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaItemSlot, [{
    type: Component,
    args: [{
      selector: "p-galleriaItemSlot",
      standalone: false,
      template: `
        <ng-container *ngIf="shouldRender()">
            <ng-container *ngTemplateOutlet="contentTemplate; context: context"></ng-container>
        </ng-container>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    templates: [{
      type: Input
    }],
    index: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    item: [{
      type: Input
    }],
    type: [{
      type: Input
    }]
  });
})();
var GalleriaItem = class _GalleriaItem extends BaseComponent {
  galleria;
  id;
  circular = false;
  value;
  showItemNavigators = false;
  showIndicators = true;
  slideShowActive = true;
  changeItemOnIndicatorHover = true;
  autoPlay = false;
  templates;
  indicatorFacet;
  captionFacet;
  startSlideShow = new EventEmitter();
  stopSlideShow = new EventEmitter();
  onActiveIndexChange = new EventEmitter();
  _componentStyle = inject(GalleriaStyle);
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._activeIndex = activeIndex;
  }
  get activeItem() {
    return this.value && this.value[this._activeIndex];
  }
  _activeIndex = 0;
  leftButtonFocused = false;
  rightButtonFocused = false;
  constructor(galleria) {
    super();
    this.galleria = galleria;
  }
  ngOnChanges({
    autoPlay
  }) {
    super.ngOnChanges({
      autoPlay
    });
    if (autoPlay?.currentValue) {
      this.startSlideShow.emit();
    }
    if (autoPlay && autoPlay.currentValue === false) {
      this.stopTheSlideShow();
    }
  }
  next() {
    let nextItemIndex = this.activeIndex + 1;
    let activeIndex = this.circular && this.value.length - 1 === this.activeIndex ? 0 : nextItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
  }
  prev() {
    let prevItemIndex = this.activeIndex !== 0 ? this.activeIndex - 1 : 0;
    let activeIndex = this.circular && this.activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
  }
  onButtonFocus(pos) {
    if (pos === "left") {
      this.leftButtonFocused = true;
    } else this.rightButtonFocused = true;
  }
  onButtonBlur(pos) {
    if (pos === "left") {
      this.leftButtonFocused = false;
    } else this.rightButtonFocused = false;
  }
  stopTheSlideShow() {
    if (this.slideShowActive && this.stopSlideShow) {
      this.stopSlideShow.emit();
    }
  }
  navForward(e) {
    this.stopTheSlideShow();
    this.next();
    if (e && e.cancelable) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  navBackward(e) {
    this.stopTheSlideShow();
    this.prev();
    if (e && e.cancelable) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  onIndicatorClick(index) {
    this.stopTheSlideShow();
    this.onActiveIndexChange.emit(index);
  }
  onIndicatorMouseEnter(index) {
    if (this.changeItemOnIndicatorHover) {
      this.stopTheSlideShow();
      this.onActiveIndexChange.emit(index);
    }
  }
  onIndicatorKeyDown(event, index) {
    switch (event.code) {
      case "Enter":
      case "Space":
        this.stopTheSlideShow();
        this.onActiveIndexChange.emit(index);
        event.preventDefault();
        break;
      case "ArrowDown":
      case "ArrowUp":
        event.preventDefault();
        break;
      default:
        break;
    }
  }
  isNavForwardDisabled() {
    return !this.circular && this.activeIndex === this.value.length - 1;
  }
  isNavBackwardDisabled() {
    return !this.circular && this.activeIndex === 0;
  }
  isIndicatorItemActive(index) {
    return this.activeIndex === index;
  }
  ariaSlideLabel() {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.slide : void 0;
  }
  ariaSlideNumber(value) {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.slideNumber?.replace(/{slideNumber}/g, value) : void 0;
  }
  ariaPageLabel(value) {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.pageLabel?.replace(/{page}/g, value) : void 0;
  }
  static ɵfac = function GalleriaItem_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleriaItem)(ɵɵdirectiveInject(Galleria));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _GalleriaItem,
    selectors: [["p-galleriaItem"]],
    hostVars: 2,
    hostBindings: function GalleriaItem_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("itemsContainer"));
      }
    },
    inputs: {
      id: "id",
      circular: [2, "circular", "circular", booleanAttribute],
      value: "value",
      showItemNavigators: [2, "showItemNavigators", "showItemNavigators", booleanAttribute],
      showIndicators: [2, "showIndicators", "showIndicators", booleanAttribute],
      slideShowActive: [2, "slideShowActive", "slideShowActive", booleanAttribute],
      changeItemOnIndicatorHover: [2, "changeItemOnIndicatorHover", "changeItemOnIndicatorHover", booleanAttribute],
      autoPlay: [2, "autoPlay", "autoPlay", booleanAttribute],
      templates: "templates",
      indicatorFacet: "indicatorFacet",
      captionFacet: "captionFacet",
      activeIndex: "activeIndex"
    },
    outputs: {
      startSlideShow: "startSlideShow",
      stopSlideShow: "stopSlideShow",
      onActiveIndexChange: "onActiveIndexChange"
    },
    standalone: false,
    features: [ɵɵProvidersFeature([GalleriaStyle]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
    decls: 7,
    vars: 15,
    consts: [["type", "button", "role", "navigation", 3, "class", "click", "focus", "blur", 4, "ngIf"], ["role", "group", 3, "id"], ["type", "item", 3, "item", "templates"], [3, "class", 4, "ngIf"], ["type", "button", "role", "navigation", 3, "click", "focus", "blur"], ["data-p-icon", "chevron-left", 3, "class", 4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "chevron-left"], ["data-p-icon", "chevron-right", 3, "class", 4, "ngIf"], ["data-p-icon", "chevron-right"], ["type", "caption", 3, "item", "templates"], ["tabindex", "0", 3, "class", "click", "mouseenter", "keydown", 4, "ngFor", "ngForOf"], ["tabindex", "0", 3, "click", "mouseenter", "keydown"], ["type", "button", "tabIndex", "-1", 3, "class", 4, "ngIf"], ["type", "indicator", 3, "index", "templates"], ["type", "button", "tabIndex", "-1"]],
    template: function GalleriaItem_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div");
        ɵɵtemplate(1, GalleriaItem_button_1_Template, 3, 4, "button", 0);
        ɵɵelementStart(2, "div", 1);
        ɵɵelement(3, "p-galleriaItemSlot", 2);
        ɵɵelementEnd();
        ɵɵtemplate(4, GalleriaItem_button_4_Template, 3, 4, "button", 0)(5, GalleriaItem_div_5_Template, 2, 4, "div", 3);
        ɵɵelementEnd();
        ɵɵtemplate(6, GalleriaItem_ul_6_Template, 2, 3, "ul", 3);
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("items"));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showItemNavigators);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("item"));
        ɵɵproperty("id", ctx.id + "_item_" + ctx.activeIndex);
        ɵɵattribute("aria-label", ctx.ariaSlideNumber(ctx.activeIndex + 1))("aria-roledescription", ctx.ariaSlideLabel());
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("item"));
        ɵɵproperty("item", ctx.activeItem)("templates", ctx.templates);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showItemNavigators);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.captionFacet || ctx.galleria.captionTemplate);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showIndicators);
      }
    },
    dependencies: () => [NgForOf, NgIf, NgTemplateOutlet, ChevronRightIcon, ChevronLeftIcon, GalleriaItemSlot],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaItem, [{
    type: Component,
    args: [{
      selector: "p-galleriaItem",
      standalone: false,
      template: `
        <div [class]="cx('items')">
            <button *ngIf="showItemNavigators" type="button" role="navigation" [class]="cx('prevButton')" (click)="navBackward($event)" (focus)="onButtonFocus('left')" (blur)="onButtonBlur('left')">
                <svg data-p-icon="chevron-left" *ngIf="!galleria.itemPreviousIconTemplate && !galleria._itemPreviousIconTemplate" [class]="cx('prevIcon')" />
                <ng-template *ngTemplateOutlet="galleria.itemPreviousIconTemplate || galleria._itemPreviousIconTemplate"></ng-template>
            </button>
            <div [id]="id + '_item_' + activeIndex" role="group" [class]="cx('item')" [attr.aria-label]="ariaSlideNumber(activeIndex + 1)" [attr.aria-roledescription]="ariaSlideLabel()">
                <p-galleriaItemSlot type="item" [item]="activeItem" [templates]="templates" [class]="cx('item')"></p-galleriaItemSlot>
            </div>
            <button *ngIf="showItemNavigators" type="button" [class]="cx('nextButton')" (click)="navForward($event)" role="navigation" (focus)="onButtonFocus('right')" (blur)="onButtonBlur('right')">
                <svg data-p-icon="chevron-right" *ngIf="!galleria.itemNextIconTemplate && !galleria._itemNextIconTemplate" [class]="cx('nextIcon')" />
                <ng-template *ngTemplateOutlet="galleria.itemNextIconTemplate || galleria._itemNextIconTemplate"></ng-template>
            </button>
            <div [class]="cx('caption')" *ngIf="captionFacet || galleria.captionTemplate">
                <p-galleriaItemSlot type="caption" [item]="activeItem" [templates]="templates"></p-galleriaItemSlot>
            </div>
        </div>
        <ul *ngIf="showIndicators" [class]="cx('indicatorList')">
            <li
                *ngFor="let item of value; let index = index"
                tabindex="0"
                (click)="onIndicatorClick(index)"
                (mouseenter)="onIndicatorMouseEnter(index)"
                (keydown)="onIndicatorKeyDown($event, index)"
                [class]="cx('indicator', { index })"
                [attr.aria-label]="ariaPageLabel(index + 1)"
                [attr.aria-selected]="activeIndex === index"
                [attr.aria-controls]="id + '_item_' + index"
            >
                <button type="button" tabIndex="-1" [class]="cx('indicatorButton')" *ngIf="!indicatorFacet && !galleria.indicatorTemplate"></button>
                <p-galleriaItemSlot type="indicator" [index]="index" [templates]="templates"></p-galleriaItemSlot>
            </li>
        </ul>
    `,
      host: {
        "[class]": "cx('itemsContainer')"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [GalleriaStyle]
    }]
  }], () => [{
    type: Galleria
  }], {
    id: [{
      type: Input
    }],
    circular: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    value: [{
      type: Input
    }],
    showItemNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showIndicators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    slideShowActive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    changeItemOnIndicatorHover: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoPlay: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    templates: [{
      type: Input
    }],
    indicatorFacet: [{
      type: Input
    }],
    captionFacet: [{
      type: Input
    }],
    startSlideShow: [{
      type: Output
    }],
    stopSlideShow: [{
      type: Output
    }],
    onActiveIndexChange: [{
      type: Output
    }],
    activeIndex: [{
      type: Input
    }]
  });
})();
var GalleriaThumbnails = class _GalleriaThumbnails extends BaseComponent {
  galleria;
  containerId;
  value;
  isVertical = false;
  slideShowActive = false;
  circular = false;
  responsiveOptions;
  contentHeight = "300px";
  showThumbnailNavigators = true;
  templates;
  onActiveIndexChange = new EventEmitter();
  stopSlideShow = new EventEmitter();
  itemsContainer;
  get numVisible() {
    return this._numVisible;
  }
  set numVisible(numVisible) {
    this._numVisible = numVisible;
    this._oldNumVisible = this.d_numVisible;
    this.d_numVisible = numVisible;
  }
  get activeIndex() {
    return this._activeIndex;
  }
  set activeIndex(activeIndex) {
    this._oldactiveIndex = this._activeIndex;
    this._activeIndex = activeIndex;
  }
  index;
  startPos = null;
  thumbnailsStyle = null;
  sortedResponsiveOptions = null;
  totalShiftedItems = 0;
  page = 0;
  documentResizeListener;
  _numVisible = 0;
  d_numVisible = 0;
  _oldNumVisible = 0;
  _activeIndex = 0;
  _oldactiveIndex = 0;
  _componentStyle = inject(GalleriaStyle);
  constructor(galleria) {
    super();
    this.galleria = galleria;
  }
  ngOnInit() {
    super.ngOnInit();
    if (isPlatformBrowser(this.platformId)) {
      this.createStyle();
      if (this.responsiveOptions) {
        this.bindDocumentListeners();
      }
    }
  }
  ngAfterContentChecked() {
    let totalShiftedItems = this.totalShiftedItems;
    if ((this._oldNumVisible !== this.d_numVisible || this._oldactiveIndex !== this._activeIndex) && this.itemsContainer) {
      if (this._activeIndex <= this.getMedianItemIndex()) {
        totalShiftedItems = 0;
      } else if (this.value.length - this.d_numVisible + this.getMedianItemIndex() < this._activeIndex) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      } else if (this.value.length - this.d_numVisible < this._activeIndex && this.d_numVisible % 2 === 0) {
        totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex() + 1;
      } else {
        totalShiftedItems = this._activeIndex * -1 + this.getMedianItemIndex();
      }
      if (totalShiftedItems !== this.totalShiftedItems) {
        this.totalShiftedItems = totalShiftedItems;
      }
      if (this.itemsContainer && this.itemsContainer.nativeElement) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
      }
      if (this._oldactiveIndex !== this._activeIndex) {
        O(this.itemsContainer.nativeElement, "p-items-hidden");
        this.itemsContainer.nativeElement.style.transition = "transform 500ms ease 0s";
      }
      this._oldactiveIndex = this._activeIndex;
      this._oldNumVisible = this.d_numVisible;
    }
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (isPlatformBrowser(this.platformId)) {
      this.calculatePosition();
    }
  }
  createStyle() {
    if (!this.thumbnailsStyle) {
      this.thumbnailsStyle = this.document.createElement("style");
      Kt(this.thumbnailsStyle, "nonce", this.galleria.config?.csp()?.nonce);
      this.document.body.appendChild(this.thumbnailsStyle);
    }
    let innerHTML = `
            #${this.containerId} .p-galleria-thumbnail-item {
                flex: 1 0 ${100 / this.d_numVisible}%
            }
        `;
    if (this.responsiveOptions) {
      this.sortedResponsiveOptions = [...this.responsiveOptions];
      this.sortedResponsiveOptions.sort((data1, data2) => {
        const value1 = data1.breakpoint;
        const value2 = data2.breakpoint;
        let result;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2, void 0, {
          numeric: true
        });
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return -1 * result;
      });
      for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
        let res = this.sortedResponsiveOptions[i];
        innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.containerId} .p-galleria-thumbnail-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
      }
    }
    this.thumbnailsStyle.innerHTML = innerHTML;
    Kt(this.thumbnailsStyle, "nonce", this.galleria.config?.csp()?.nonce);
  }
  calculatePosition() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.itemsContainer && this.sortedResponsiveOptions) {
        let windowWidth = window.innerWidth;
        let matchedResponsiveData = {
          numVisible: this._numVisible
        };
        for (let i = 0; i < this.sortedResponsiveOptions.length; i++) {
          let res = this.sortedResponsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }
        if (this.d_numVisible !== matchedResponsiveData.numVisible) {
          this.d_numVisible = matchedResponsiveData.numVisible;
          this.cd.markForCheck();
        }
      }
    }
  }
  getTabIndex(index) {
    return this.isItemActive(index) ? 0 : null;
  }
  navForward(e) {
    this.stopTheSlideShow();
    let nextItemIndex = this._activeIndex + 1;
    if (nextItemIndex + this.totalShiftedItems > this.getMedianItemIndex() && (-1 * this.totalShiftedItems < this.getTotalPageNumber() - 1 || this.circular)) {
      this.step(-1);
    }
    let activeIndex = this.circular && this.value.length - 1 === this._activeIndex ? 0 : nextItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  navBackward(e) {
    this.stopTheSlideShow();
    let prevItemIndex = this._activeIndex !== 0 ? this._activeIndex - 1 : 0;
    let diff = prevItemIndex + this.totalShiftedItems;
    if (this.d_numVisible - diff - 1 > this.getMedianItemIndex() && (-1 * this.totalShiftedItems !== 0 || this.circular)) {
      this.step(1);
    }
    let activeIndex = this.circular && this._activeIndex === 0 ? this.value.length - 1 : prevItemIndex;
    this.onActiveIndexChange.emit(activeIndex);
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onItemClick(index) {
    this.stopTheSlideShow();
    let selectedItemIndex = index;
    if (selectedItemIndex !== this._activeIndex) {
      const diff = selectedItemIndex + this.totalShiftedItems;
      let dir = 0;
      if (selectedItemIndex < this._activeIndex) {
        dir = this.d_numVisible - diff - 1 - this.getMedianItemIndex();
        if (dir > 0 && -1 * this.totalShiftedItems !== 0) {
          this.step(dir);
        }
      } else {
        dir = this.getMedianItemIndex() - diff;
        if (dir < 0 && -1 * this.totalShiftedItems < this.getTotalPageNumber() - 1) {
          this.step(dir);
        }
      }
      this.activeIndex = selectedItemIndex;
      this.onActiveIndexChange.emit(this.activeIndex);
    }
  }
  onThumbnailKeydown(event, index) {
    if (event.code === "Enter" || event.code === "Space") {
      this.onItemClick(index);
      event.preventDefault();
    }
    switch (event.code) {
      case "ArrowRight":
        this.onRightKey();
        break;
      case "ArrowLeft":
        this.onLeftKey();
        break;
      case "Home":
        this.onHomeKey();
        event.preventDefault();
        break;
      case "End":
        this.onEndKey();
        event.preventDefault();
        break;
      case "ArrowUp":
      case "ArrowDown":
        event.preventDefault();
        break;
      case "Tab":
        this.onTabKey();
        break;
      default:
        break;
    }
  }
  onRightKey() {
    const indicators = Y(this.itemsContainer?.nativeElement, '[data-pc-section="thumbnailitem"]');
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, activeIndex + 1 === indicators.length ? indicators.length - 1 : activeIndex + 1);
  }
  onLeftKey() {
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, activeIndex - 1 <= 0 ? 0 : activeIndex - 1);
  }
  onHomeKey() {
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, 0);
  }
  onEndKey() {
    const indicators = Y(this.itemsContainer?.nativeElement, '[data-pc-section="thumbnailitem"]');
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, indicators.length - 1);
  }
  onTabKey() {
    const indicators = [...Y(this.itemsContainer?.nativeElement, '[data-pc-section="thumbnailitem"]')];
    const highlightedIndex = indicators.findIndex((ind) => Q(ind, "data-p-active") === true);
    const activeIndicator = z(this.itemsContainer?.nativeElement, '[tabindex="0"]');
    const activeIndex = indicators.findIndex((ind) => ind === activeIndicator?.parentElement);
    indicators[activeIndex].children[0].tabIndex = "-1";
    indicators[highlightedIndex].children[0].tabIndex = "0";
  }
  findFocusedIndicatorIndex() {
    const indicators = [...Y(this.itemsContainer?.nativeElement, '[data-pc-section="thumbnailitem"]')];
    const activeIndicator = z(this.itemsContainer?.nativeElement, '[data-pc-section="thumbnailitem"] > [tabindex="0"]');
    return indicators.findIndex((ind) => ind === activeIndicator?.parentElement);
  }
  changedFocusedIndicator(prevInd, nextInd) {
    const indicators = Y(this.itemsContainer?.nativeElement, '[data-pc-section="thumbnailitem"]');
    indicators[prevInd].children[0].tabIndex = "-1";
    indicators[nextInd].children[0].tabIndex = "0";
    indicators[nextInd].children[0].focus();
  }
  step(dir) {
    let totalShiftedItems = this.totalShiftedItems + dir;
    if (dir < 0 && -1 * totalShiftedItems + this.d_numVisible > this.value.length - 1) {
      totalShiftedItems = this.d_numVisible - this.value.length;
    } else if (dir > 0 && totalShiftedItems > 0) {
      totalShiftedItems = 0;
    }
    if (this.circular) {
      if (dir < 0 && this.value.length - 1 === this._activeIndex) {
        totalShiftedItems = 0;
      } else if (dir > 0 && this._activeIndex === 0) {
        totalShiftedItems = this.d_numVisible - this.value.length;
      }
    }
    if (this.itemsContainer) {
      O(this.itemsContainer.nativeElement, "p-items-hidden");
      this.itemsContainer.nativeElement.style.transform = this.isVertical ? `translate3d(0, ${totalShiftedItems * (100 / this.d_numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this.d_numVisible)}%, 0, 0)`;
      this.itemsContainer.nativeElement.style.transition = "transform 500ms ease 0s";
    }
    this.totalShiftedItems = totalShiftedItems;
  }
  stopTheSlideShow() {
    if (this.slideShowActive && this.stopSlideShow) {
      this.stopSlideShow.emit();
    }
  }
  changePageOnTouch(e, diff) {
    if (diff < 0) {
      this.navForward(e);
    } else {
      this.navBackward(e);
    }
  }
  getTotalPageNumber() {
    return this.value.length > this.d_numVisible ? this.value.length - this.d_numVisible + 1 : 0;
  }
  getMedianItemIndex() {
    let index = Math.floor(this.d_numVisible / 2);
    return this.d_numVisible % 2 ? index : index - 1;
  }
  onTransitionEnd() {
    if (this.itemsContainer && this.itemsContainer.nativeElement) {
      W(this.itemsContainer.nativeElement, "p-items-hidden");
      this.itemsContainer.nativeElement.style.transition = "";
    }
  }
  onTouchEnd(e) {
    let touchobj = e.changedTouches[0];
    if (this.isVertical) {
      this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
    }
  }
  onTouchMove(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onTouchStart(e) {
    let touchobj = e.changedTouches[0];
    this.startPos = {
      x: touchobj.pageX,
      y: touchobj.pageY
    };
  }
  isNavBackwardDisabled() {
    return !this.circular && this._activeIndex === 0 || this.value.length <= this.d_numVisible;
  }
  isNavForwardDisabled() {
    return !this.circular && this._activeIndex === this.value.length - 1 || this.value.length <= this.d_numVisible;
  }
  firstItemAciveIndex() {
    return this.totalShiftedItems * -1;
  }
  lastItemActiveIndex() {
    return this.firstItemAciveIndex() + this.d_numVisible - 1;
  }
  isItemActive(index) {
    return this.firstItemAciveIndex() <= index && this.lastItemActiveIndex() >= index;
  }
  bindDocumentListeners() {
    if (isPlatformBrowser(this.platformId)) {
      const window2 = this.document.defaultView || "window";
      this.documentResizeListener = this.renderer.listen(window2, "resize", () => {
        this.calculatePosition();
      });
    }
  }
  unbindDocumentListeners() {
    if (this.documentResizeListener) {
      this.documentResizeListener();
      this.documentResizeListener = null;
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.thumbnailsStyle) {
      this.thumbnailsStyle.parentNode?.removeChild(this.thumbnailsStyle);
    }
  }
  ariaPrevButtonLabel() {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.prevPageLabel : void 0;
  }
  ariaNextButtonLabel() {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.nextPageLabel : void 0;
  }
  ariaPageLabel(value) {
    return this.galleria.config.translation.aria ? this.galleria.config.translation.aria.pageLabel?.replace(/{page}/g, value) : void 0;
  }
  static ɵfac = function GalleriaThumbnails_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleriaThumbnails)(ɵɵdirectiveInject(Galleria));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _GalleriaThumbnails,
    selectors: [["p-galleriaThumbnails"]],
    viewQuery: function GalleriaThumbnails_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c18, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemsContainer = _t.first);
      }
    },
    inputs: {
      containerId: "containerId",
      value: "value",
      isVertical: [2, "isVertical", "isVertical", booleanAttribute],
      slideShowActive: [2, "slideShowActive", "slideShowActive", booleanAttribute],
      circular: [2, "circular", "circular", booleanAttribute],
      responsiveOptions: "responsiveOptions",
      contentHeight: "contentHeight",
      showThumbnailNavigators: "showThumbnailNavigators",
      templates: "templates",
      numVisible: "numVisible",
      activeIndex: "activeIndex"
    },
    outputs: {
      onActiveIndexChange: "onActiveIndexChange",
      stopSlideShow: "stopSlideShow"
    },
    standalone: false,
    features: [ɵɵProvidersFeature([GalleriaStyle]), ɵɵInheritDefinitionFeature],
    decls: 8,
    vars: 14,
    consts: [["itemsContainer", ""], ["type", "button", "pRipple", "", 3, "class", "click", 4, "ngIf"], [3, "ngStyle"], ["role", "tablist", 3, "transitionend", "touchstart", "touchmove"], [3, "class", "keydown", 4, "ngFor", "ngForOf"], ["type", "button", "pRipple", "", 3, "click"], [4, "ngIf"], [4, "ngTemplateOutlet"], ["data-p-icon", "chevron-left", 3, "class", 4, "ngIf"], ["data-p-icon", "chevron-up", 3, "class", 4, "ngIf"], ["data-p-icon", "chevron-left"], ["data-p-icon", "chevron-up"], [3, "keydown"], [3, "click", "touchend", "keydown.enter"], ["type", "thumbnail", 3, "item", "templates"], ["data-p-icon", "chevron-right", 3, "class", 4, "ngIf"], ["data-p-icon", "chevron-down", 3, "class", 4, "ngIf"], ["data-p-icon", "chevron-right"], ["data-p-icon", "chevron-down"]],
    template: function GalleriaThumbnails_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "div")(1, "div");
        ɵɵtemplate(2, GalleriaThumbnails_button_2_Template, 3, 5, "button", 1);
        ɵɵelementStart(3, "div", 2)(4, "div", 3, 0);
        ɵɵlistener("transitionend", function GalleriaThumbnails_Template_div_transitionend_4_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onTransitionEnd());
        })("touchstart", function GalleriaThumbnails_Template_div_touchstart_4_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onTouchStart($event));
        })("touchmove", function GalleriaThumbnails_Template_div_touchmove_4_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onTouchMove($event));
        });
        ɵɵtemplate(6, GalleriaThumbnails_div_6_Template, 3, 16, "div", 4);
        ɵɵelementEnd()();
        ɵɵtemplate(7, GalleriaThumbnails_button_7_Template, 3, 5, "button", 1);
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("thumbnails"));
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("thumbnailContent"));
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showThumbnailNavigators);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("thumbnailsViewport"));
        ɵɵproperty("ngStyle", ɵɵpureFunction1(12, _c19, ctx.isVertical ? ctx.contentHeight : ""));
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("thumbnailItems"));
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.value);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showThumbnailNavigators);
      }
    },
    dependencies: () => [NgForOf, NgIf, NgTemplateOutlet, NgStyle, Ripple, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, GalleriaItemSlot],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaThumbnails, [{
    type: Component,
    args: [{
      selector: "p-galleriaThumbnails",
      standalone: false,
      template: `
        <div [class]="cx('thumbnails')">
            <div [class]="cx('thumbnailContent')">
                <button *ngIf="showThumbnailNavigators" type="button" [class]="cx('thumbnailPrevButton')" (click)="navBackward($event)" pRipple [attr.aria-label]="ariaPrevButtonLabel()">
                    <ng-container *ngIf="!galleria.previousThumbnailIconTemplate && !galleria._previousThumbnailIconTemplate">
                        <svg data-p-icon="chevron-left" *ngIf="!isVertical" [class]="cx('thumbnailPrevIcon')" />
                        <svg data-p-icon="chevron-up" *ngIf="isVertical" [class]="cx('thumbnailPrevIcon')" />
                    </ng-container>
                    <ng-template *ngTemplateOutlet="galleria.previousThumbnailIconTemplate || galleria._previousThumbnailIconTemplate"></ng-template>
                </button>
                <div [class]="cx('thumbnailsViewport')" [ngStyle]="{ height: isVertical ? contentHeight : '' }">
                    <div #itemsContainer [class]="cx('thumbnailItems')" (transitionend)="onTransitionEnd()" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)" role="tablist">
                        <div
                            *ngFor="let item of value; let index = index"
                            [class]="cx('thumbnailItem', { index, activeIndex })"
                            [attr.aria-selected]="activeIndex === index"
                            [attr.aria-controls]="containerId + '_item_' + index"
                            [attr.data-pc-section]="'thumbnailitem'"
                            [attr.data-p-active]="activeIndex === index"
                            (keydown)="onThumbnailKeydown($event, index)"
                        >
                            <div
                                [class]="cx('thumbnail')"
                                [attr.tabindex]="activeIndex === index ? 0 : -1"
                                [attr.aria-current]="activeIndex === index ? 'page' : undefined"
                                [attr.aria-label]="ariaPageLabel(index + 1)"
                                (click)="onItemClick(index)"
                                (touchend)="onItemClick(index)"
                                (keydown.enter)="onItemClick(index)"
                            >
                                <p-galleriaItemSlot type="thumbnail" [item]="item" [templates]="templates"></p-galleriaItemSlot>
                            </div>
                        </div>
                    </div>
                </div>
                <button *ngIf="showThumbnailNavigators" type="button" [class]="cx('thumbnailNextButton')" (click)="navForward($event)" pRipple [attr.aria-label]="ariaNextButtonLabel()">
                    <ng-container *ngIf="!galleria.nextThumbnailIconTemplate && !galleria._nextThumbnailIconTemplate">
                        <svg data-p-icon="chevron-right" *ngIf="!isVertical" [class]="cx('thumbnailNextIcon')" />
                        <svg data-p-icon="chevron-down" *ngIf="isVertical" [class]="cx('thumbnailNextIcon')" />
                    </ng-container>
                    <ng-template *ngTemplateOutlet="galleria.nextThumbnailIconTemplate || galleria._nextThumbnailIconTemplate"></ng-template>
                </button>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [GalleriaStyle]
    }]
  }], () => [{
    type: Galleria
  }], {
    containerId: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    isVertical: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    slideShowActive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    circular: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    responsiveOptions: [{
      type: Input
    }],
    contentHeight: [{
      type: Input
    }],
    showThumbnailNavigators: [{
      type: Input
    }],
    templates: [{
      type: Input
    }],
    onActiveIndexChange: [{
      type: Output
    }],
    stopSlideShow: [{
      type: Output
    }],
    itemsContainer: [{
      type: ViewChild,
      args: ["itemsContainer"]
    }],
    numVisible: [{
      type: Input
    }],
    activeIndex: [{
      type: Input
    }]
  });
})();
var GalleriaModule = class _GalleriaModule {
  static ɵfac = function GalleriaModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GalleriaModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _GalleriaModule,
    declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails],
    imports: [CommonModule, SharedModule, Ripple, TimesIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, FocusTrap],
    exports: [CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, SharedModule, TimesIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, CommonModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GalleriaModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, SharedModule, Ripple, TimesIcon, ChevronRightIcon, ChevronUpIcon, ChevronDownIcon, ChevronLeftIcon, FocusTrap],
      exports: [CommonModule, Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails, SharedModule],
      declarations: [Galleria, GalleriaContent, GalleriaItemSlot, GalleriaItem, GalleriaThumbnails]
    }]
  }], null, null);
})();
export {
  Galleria,
  GalleriaClasses,
  GalleriaContent,
  GalleriaItem,
  GalleriaItemSlot,
  GalleriaModule,
  GalleriaStyle,
  GalleriaThumbnails
};
//# sourceMappingURL=primeng_galleria.js.map
