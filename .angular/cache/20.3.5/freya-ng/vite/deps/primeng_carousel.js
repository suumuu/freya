import {
  Button,
  ButtonModule
} from "./chunk-XYHC3BRH.js";
import "./chunk-7UJ6UPW4.js";
import "./chunk-ONQFUGA2.js";
import "./chunk-QQ7HCBDO.js";
import "./chunk-VUXHBR7Y.js";
import "./chunk-PSFGPXRF.js";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronUpIcon
} from "./chunk-RIG3C35J.js";
import "./chunk-ZN64Z63N.js";
import {
  BaseComponent
} from "./chunk-3X7R6USB.js";
import {
  BaseStyle
} from "./chunk-AY5DPW7U.js";
import {
  Footer,
  Header,
  PrimeTemplate,
  SharedModule
} from "./chunk-VY6QECRP.js";
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
  Component,
  ContentChild,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  NgZone,
  Output,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵviewQuery
} from "./chunk-GWCN73BT.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-MARUHEWW.js";
import "./chunk-UKZYY4TH.js";
import {
  Kt,
  Q2 as Q,
  Y2 as Y,
  s3 as s,
  z2 as z
} from "./chunk-RK2QIU6W.js";
import "./chunk-4MWRP73S.js";

// node_modules/@primeuix/styles/dist/carousel/index.mjs
var style = "\n    .p-carousel {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .p-carousel-content-container {\n        display: flex;\n        flex-direction: column;\n        overflow: auto;\n    }\n\n    .p-carousel-content {\n        display: flex;\n        flex-direction: row;\n        gap: dt('carousel.content.gap');\n    }\n\n    .p-carousel-content:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-carousel-viewport {\n        overflow: hidden;\n        width: 100%;\n    }\n\n    .p-carousel-item-list {\n        display: flex;\n        flex-direction: row;\n    }\n\n    .p-carousel-item-list:dir(rtl) {\n        flex-direction: row-reverse;\n    }\n\n    .p-carousel-prev-button,\n    .p-carousel-next-button {\n        align-self: center;\n        flex-shrink: 0;\n    }\n\n    .p-carousel-indicator-list {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        flex-wrap: wrap;\n        padding: dt('carousel.indicator.list.padding');\n        gap: dt('carousel.indicator.list.gap');\n        margin: 0;\n        list-style: none;\n    }\n\n    .p-carousel-indicator-button {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        background: dt('carousel.indicator.background');\n        width: dt('carousel.indicator.width');\n        height: dt('carousel.indicator.height');\n        border: 0 none;\n        transition:\n            background dt('carousel.transition.duration'),\n            color dt('carousel.transition.duration'),\n            outline-color dt('carousel.transition.duration'),\n            box-shadow dt('carousel.transition.duration');\n        outline-color: transparent;\n        border-radius: dt('carousel.indicator.border.radius');\n        padding: 0;\n        margin: 0;\n        user-select: none;\n        cursor: pointer;\n    }\n\n    .p-carousel-indicator-button:focus-visible {\n        box-shadow: dt('carousel.indicator.focus.ring.shadow');\n        outline: dt('carousel.indicator.focus.ring.width') dt('carousel.indicator.focus.ring.style') dt('carousel.indicator.focus.ring.color');\n        outline-offset: dt('carousel.indicator.focus.ring.offset');\n    }\n\n    .p-carousel-indicator-button:hover {\n        background: dt('carousel.indicator.hover.background');\n    }\n\n    .p-carousel-indicator-active .p-carousel-indicator-button {\n        background: dt('carousel.indicator.active.background');\n    }\n\n    .p-carousel-vertical .p-carousel-content {\n        flex-direction: column;\n    }\n\n    .p-carousel-vertical .p-carousel-item-list {\n        flex-direction: column;\n        height: 100%;\n    }\n\n    .p-items-hidden .p-carousel-item {\n        visibility: hidden;\n    }\n\n    .p-items-hidden .p-carousel-item.p-carousel-item-active {\n        visibility: visible;\n    }\n";

// node_modules/primeng/fesm2022/primeng-carousel.mjs
var _c0 = ["item"];
var _c1 = ["header"];
var _c2 = ["footer"];
var _c3 = ["previousicon"];
var _c4 = ["nexticon"];
var _c5 = ["itemsContainer"];
var _c6 = ["indicatorContent"];
var _c7 = [[["p-header"]], [["p-footer"]]];
var _c8 = ["p-header", "p-footer"];
var _c9 = (a0) => ({
  height: a0
});
var _c10 = (a0) => ({
  index: a0
});
var _c11 = (a0) => ({
  $implicit: a0
});
function Carousel_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Carousel_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵprojection(1);
    ɵɵtemplate(2, Carousel_div_0_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("header"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate);
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 16);
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 17);
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Carousel_p_button_3_ng_template_1_ng_container_0__svg_svg_1_Template, 1, 0, "svg", 14)(2, Carousel_p_button_3_ng_template_1_ng_container_0__svg_svg_2_Template, 1, 0, "svg", 15);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.isVertical());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isVertical());
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_1_1_ng_template_0_Template(rf, ctx) {
}
function Carousel_p_button_3_ng_template_1_ng_container_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Carousel_p_button_3_ng_template_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_p_button_3_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Carousel_p_button_3_ng_template_1_ng_container_1_1_Template, 1, 0, null, 11);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.previousIconTemplate || ctx_r1._previousIconTemplate);
  }
}
function Carousel_p_button_3_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Carousel_p_button_3_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 13)(1, Carousel_p_button_3_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r1.previousIconTemplate && !ctx_r1._previousIconTemplate && !(ctx_r1.prevButtonProps == null ? null : ctx_r1.prevButtonProps.icon));
    ɵɵadvance();
    ɵɵproperty("ngIf", (ctx_r1.previousIconTemplate || ctx_r1._previousIconTemplate) && !(ctx_r1.prevButtonProps == null ? null : ctx_r1.prevButtonProps.icon));
  }
}
function Carousel_p_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 12);
    ɵɵlistener("click", function Carousel_p_button_3_Template_p_button_click_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navBackward($event));
    });
    ɵɵtemplate(1, Carousel_p_button_3_ng_template_1_Template, 2, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("pcPrevButton"));
    ɵɵproperty("text", true)("buttonProps", ctx_r1.prevButtonProps);
    ɵɵattribute("aria-label", ctx_r1.ariaPrevButtonLabel());
  }
}
function Carousel_div_7_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Carousel_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, Carousel_div_7_ng_container_1_Template, 1, 0, "ng-container", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    const index_r5 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("itemClone", ɵɵpureFunction1(7, _c10, index_r5)));
    ɵɵattribute("aria-hidden", !(ctx_r1.totalShiftedItems * -1 === ctx_r1.value.length))("aria-label", ctx_r1.ariaSlideNumber(index_r5))("aria-roledescription", ctx_r1.ariaSlideLabel());
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c11, item_r4));
  }
}
function Carousel_div_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Carousel_div_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, Carousel_div_8_ng_container_1_Template, 1, 0, "ng-container", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const index_r7 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("item", ɵɵpureFunction1(7, _c10, index_r7)));
    ɵɵattribute("aria-hidden", !(ctx_r1.firstIndex() <= index_r7 && ctx_r1.lastIndex() >= index_r7))("aria-label", ctx_r1.ariaSlideNumber(index_r7))("aria-roledescription", ctx_r1.ariaSlideLabel());
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(9, _c11, item_r6));
  }
}
function Carousel_div_9_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Carousel_div_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, Carousel_div_9_ng_container_1_Template, 1, 0, "ng-container", 18);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    const index_r9 = ctx.index;
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("itemClone", ɵɵpureFunction1(4, _c10, index_r9)));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.itemTemplate || ctx_r1._itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(6, _c11, item_r8));
  }
}
function Carousel_p_button_10_ng_template_1_ng_container_0__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 22);
  }
}
function Carousel_p_button_10_ng_template_1_ng_container_0__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 23);
  }
}
function Carousel_p_button_10_ng_template_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Carousel_p_button_10_ng_template_1_ng_container_0__svg_svg_1_Template, 1, 0, "svg", 20)(2, Carousel_p_button_10_ng_template_1_ng_container_0__svg_svg_2_Template, 1, 0, "svg", 21);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.isVertical());
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isVertical());
  }
}
function Carousel_p_button_10_ng_template_1_span_1_1_ng_template_0_Template(rf, ctx) {
}
function Carousel_p_button_10_ng_template_1_span_1_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Carousel_p_button_10_ng_template_1_span_1_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function Carousel_p_button_10_ng_template_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, Carousel_p_button_10_ng_template_1_span_1_1_Template, 1, 0, null, 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate);
  }
}
function Carousel_p_button_10_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Carousel_p_button_10_ng_template_1_ng_container_0_Template, 3, 2, "ng-container", 13)(1, Carousel_p_button_10_ng_template_1_span_1_Template, 2, 1, "span", 13);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", !ctx_r1.nextIconTemplate && !ctx_r1._nextIconTemplate && !(ctx_r1.nextButtonProps == null ? null : ctx_r1.nextButtonProps.icon));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.nextIconTemplate || ctx_r1._nextIconTemplate && !(ctx_r1.nextButtonProps == null ? null : ctx_r1.nextButtonProps.icon));
  }
}
function Carousel_p_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 19);
    ɵɵlistener("click", function Carousel_p_button_10_Template_p_button_click_0_listener($event) {
      ɵɵrestoreView(_r10);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.navForward($event));
    });
    ɵɵtemplate(1, Carousel_p_button_10_ng_template_1_Template, 2, 2, "ng-template", null, 1, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("pcNextButton"));
    ɵɵproperty("buttonProps", ctx_r1.nextButtonProps)("text", true);
    ɵɵattribute("aria-label", ctx_r1.ariaNextButtonLabel());
  }
}
function Carousel_ul_11_li_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li")(1, "button", 25);
    ɵɵlistener("click", function Carousel_ul_11_li_2_Template_button_click_1_listener($event) {
      const i_r13 = ɵɵrestoreView(_r12).index;
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onDotClick($event, i_r13));
    });
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("indicator", ɵɵpureFunction1(9, _c10, i_r13)));
    ɵɵattribute("data-pc-section", "indicator");
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("indicatorButton"));
    ɵɵproperty("ngStyle", ctx_r1.indicatorStyle)("tabindex", ctx_r1._page === i_r13 ? 0 : -1);
    ɵɵattribute("aria-label", ctx_r1.ariaPageLabel(i_r13 + 1))("aria-current", ctx_r1._page === i_r13 ? "page" : void 0);
  }
}
function Carousel_ul_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "ul", 24, 2);
    ɵɵlistener("keydown", function Carousel_ul_11_Template_ul_keydown_0_listener($event) {
      ɵɵrestoreView(_r11);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onIndicatorKeydown($event));
    });
    ɵɵtemplate(2, Carousel_ul_11_li_2_Template, 2, 11, "li", 8);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("indicatorList"));
    ɵɵproperty("ngStyle", ctx_r1.indicatorsContentStyle);
    ɵɵadvance(2);
    ɵɵproperty("ngForOf", ctx_r1.totalDotsArray());
  }
}
function Carousel_div_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Carousel_div_12_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵprojection(1, 1);
    ɵɵtemplate(2, Carousel_div_12_ng_container_2_Template, 1, 0, "ng-container", 11);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("footer"));
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.footerTemplate || ctx_r1._footerTemplate);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-carousel p-component", {
    "p-carousel-vertical": instance.isVertical(),
    "p-carousel-horizontal": !instance.isVertical()
  }],
  header: "p-carousel-header",
  contentContainer: "p-carousel-content-container",
  content: "p-carousel-content",
  pcPrevButton: ({
    instance
  }) => ["p-carousel-prev-button", {
    "p-disabled": instance.isBackwardNavDisabled()
  }],
  viewport: "p-carousel-viewport",
  itemList: "p-carousel-item-list",
  itemClone: ({
    instance,
    index
  }) => ["p-carousel-item p-carousel-item-clone", {
    "p-carousel-item-active": instance.totalShiftedItems * -1 === instance.value.length,
    "p-carousel-item-start": 0 === index,
    "p-carousel-item-end": instance.clonedItemsForStarting.length - 1 === index
  }],
  item: ({
    instance,
    index
  }) => ["p-carousel-item", {
    "p-carousel-item-active": instance.firstIndex() <= index && instance.lastIndex() >= index,
    "p-carousel-item-start": instance.firstIndex() === index,
    "p-carousel-item-end": instance.lastIndex() === index
  }],
  pcNextButton: ({
    instance
  }) => ["p-carousel-next-button", {
    "p-disabled": instance.isForwardNavDisabled()
  }],
  indicatorList: ({
    instance
  }) => ["p-carousel-indicator-list", instance.indicatorsContentClass],
  indicator: ({
    instance,
    index
  }) => ["p-carousel-indicator", {
    "p-carousel-indicator-active": instance._page === index
  }],
  indicatorButton: ({
    instance
  }) => ["p-carousel-indicator-button", instance.indicatorStyleClass],
  footer: "p-carousel-footer"
};
var CarouselStyle = class _CarouselStyle extends BaseStyle {
  name = "carousel";
  theme = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵCarouselStyle_BaseFactory;
    return function CarouselStyle_Factory(__ngFactoryType__) {
      return (ɵCarouselStyle_BaseFactory || (ɵCarouselStyle_BaseFactory = ɵɵgetInheritedFactory(_CarouselStyle)))(__ngFactoryType__ || _CarouselStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _CarouselStyle,
    factory: _CarouselStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselStyle, [{
    type: Injectable
  }], null, null);
})();
var CarouselClasses;
(function(CarouselClasses2) {
  CarouselClasses2["root"] = "p-carousel";
  CarouselClasses2["header"] = "p-carousel-header";
  CarouselClasses2["contentContainer"] = "p-carousel-content-container";
  CarouselClasses2["content"] = "p-carousel-content";
  CarouselClasses2["pcPrevButton"] = "p-carousel-prev-button";
  CarouselClasses2["viewport"] = "p-carousel-viewport";
  CarouselClasses2["itemList"] = "p-carousel-item-list";
  CarouselClasses2["itemClone"] = "p-carousel-item-clone";
  CarouselClasses2["item"] = "p-carousel-item";
  CarouselClasses2["pcNextButton"] = "p-carousel-next-button";
  CarouselClasses2["indicatorList"] = "p-carousel-indicator-list";
  CarouselClasses2["indicator"] = "p-carousel-indicator";
  CarouselClasses2["indicatorButton"] = "p-carousel-indicator-button";
  CarouselClasses2["footer"] = "p-carousel-footer";
})(CarouselClasses || (CarouselClasses = {}));
var Carousel = class _Carousel extends BaseComponent {
  el;
  zone;
  /**
   * Index of the first item.
   * @defaultValue 0
   * @group Props
   */
  get page() {
    return this._page;
  }
  set page(val) {
    if (this.isCreated && val !== this._page) {
      if (this.autoplayInterval) {
        this.stopAutoplay();
      }
      if (val > this._page && val <= this.totalDots() - 1) {
        this.step(-1, val);
      } else if (val < this._page) {
        this.step(1, val);
      }
    }
    this._page = val;
  }
  /**
   * Number of items per page.
   * @defaultValue 1
   * @group Props
   */
  get numVisible() {
    return this._numVisible;
  }
  set numVisible(val) {
    this._numVisible = val;
  }
  /**
   * Number of items to scroll.
   * @defaultValue 1
   * @group Props
   */
  get numScroll() {
    return this._numVisible;
  }
  set numScroll(val) {
    this._numScroll = val;
  }
  /**
   * An array of options for responsive design.
   * @see {CarouselResponsiveOptions}
   * @group Props
   */
  responsiveOptions;
  /**
   * Specifies the layout of the component.
   * @group Props
   */
  orientation = "horizontal";
  /**
   * Height of the viewport in vertical layout.
   * @group Props
   */
  verticalViewPortHeight = "300px";
  /**
   * Style class of main content.
   * @group Props
   */
  contentClass = "";
  /**
   * Style class of the indicator items.
   * @group Props
   */
  indicatorsContentClass = "";
  /**
   * Inline style of the indicator items.
   * @group Props
   */
  indicatorsContentStyle;
  /**
   * Style class of the indicators.
   * @group Props
   */
  indicatorStyleClass = "";
  /**
   * Style of the indicators.
   * @group Props
   */
  indicatorStyle;
  /**
   * An array of objects to display.
   * @defaultValue null
   * @group Props
   */
  get value() {
    return this._value;
  }
  set value(val) {
    this._value = val;
  }
  /**
   * Defines if scrolling would be infinite.
   * @group Props
   */
  circular = false;
  /**
   * Whether to display indicator container.
   * @group Props
   */
  showIndicators = true;
  /**
   * Whether to display navigation buttons in container.
   * @group Props
   */
  showNavigators = true;
  /**
   * Time in milliseconds to scroll items automatically.
   * @group Props
   */
  autoplayInterval = 0;
  /**
   * Style class of the viewport container.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  prevButtonProps = {
    severity: "secondary",
    text: true,
    rounded: true
  };
  /**
   * Used to pass all properties of the ButtonProps to the Button component.
   * @group Props
   */
  nextButtonProps = {
    severity: "secondary",
    text: true,
    rounded: true
  };
  /**
   * Callback to invoke after scroll.
   * @param {CarouselPageEvent} event - Custom page event.
   * @group Emits
   */
  onPage = new EventEmitter();
  itemsContainer;
  indicatorContent;
  headerFacet;
  footerFacet;
  _numVisible = 1;
  _numScroll = 1;
  _oldNumScroll = 0;
  prevState = {
    numScroll: 0,
    numVisible: 0,
    value: []
  };
  defaultNumScroll = 1;
  defaultNumVisible = 1;
  _page = 0;
  _value;
  carouselStyle;
  id;
  totalShiftedItems;
  isRemainingItemsAdded = false;
  animationTimeout;
  translateTimeout;
  remainingItems = 0;
  _items;
  startPos;
  documentResizeListener;
  clonedItemsForStarting;
  clonedItemsForFinishing;
  allowAutoplay;
  interval;
  isCreated;
  swipeThreshold = 20;
  /**
   * Template for carousel items.
   * @group Templates
   */
  itemTemplate;
  /**
   * Template for the carousel header.
   * @group Templates
   */
  headerTemplate;
  /**
   * Template for the carousel footer.
   * @group Templates
   */
  footerTemplate;
  /**
   * Template for the previous button icon.
   * @group Templates
   */
  previousIconTemplate;
  /**
   * Template for the next button icon.
   * @group Templates
   */
  nextIconTemplate;
  _itemTemplate;
  _headerTemplate;
  _footerTemplate;
  _previousIconTemplate;
  _nextIconTemplate;
  window;
  _componentStyle = inject(CarouselStyle);
  constructor(el, zone) {
    super();
    this.el = el;
    this.zone = zone;
    this.totalShiftedItems = this.page * this.numScroll * -1;
    this.window = this.document.defaultView;
  }
  ngOnChanges(simpleChange) {
    if (isPlatformBrowser(this.platformId)) {
      if (simpleChange.value) {
        if (this.circular && this._value) {
          this.setCloneItems();
        }
      }
      if (this.isCreated) {
        if (simpleChange.numVisible) {
          if (this.responsiveOptions) {
            this.defaultNumVisible = this.numVisible;
          }
          if (this.isCircular()) {
            this.setCloneItems();
          }
          this.createStyle();
          this.calculatePosition();
        }
        if (simpleChange.numScroll) {
          if (this.responsiveOptions) {
            this.defaultNumScroll = this.numScroll;
          }
        }
      }
    }
    this.cd.markForCheck();
  }
  templates;
  ngAfterContentInit() {
    this.id = s("pn_id_");
    if (isPlatformBrowser(this.platformId)) {
      this.allowAutoplay = !!this.autoplayInterval;
      if (this.circular) {
        this.setCloneItems();
      }
      if (this.responsiveOptions) {
        this.defaultNumScroll = this._numScroll;
        this.defaultNumVisible = this._numVisible;
      }
      this.createStyle();
      this.calculatePosition();
      if (this.responsiveOptions) {
        this.bindDocumentListeners();
      }
    }
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
        case "header":
          this._headerTemplate = item.template;
          break;
        case "footer":
          this._footerTemplate = item.template;
          break;
        case "previousicon":
          this._previousIconTemplate = item.template;
          break;
        case "nexticon":
          this._nextIconTemplate = item.template;
          break;
        default:
          this._itemTemplate = item.template;
          break;
      }
    });
    this.cd.detectChanges();
  }
  ngAfterContentChecked() {
    if (isPlatformBrowser(this.platformId)) {
      const isCircular = this.isCircular();
      let totalShiftedItems = this.totalShiftedItems;
      if (this.value && this.itemsContainer && (this.prevState.numScroll !== this._numScroll || this.prevState.numVisible !== this._numVisible || this.prevState.value.length !== this.value.length)) {
        if (this.autoplayInterval) {
          this.stopAutoplay(false);
        }
        this.remainingItems = (this.value.length - this._numVisible) % this._numScroll;
        let page = this._page;
        if (this.totalDots() !== 0 && page >= this.totalDots()) {
          page = this.totalDots() - 1;
          this._page = page;
          this.onPage.emit({
            page: this.page
          });
        }
        totalShiftedItems = page * this._numScroll * -1;
        if (isCircular) {
          totalShiftedItems -= this._numVisible;
        }
        if (page === this.totalDots() - 1 && this.remainingItems > 0) {
          totalShiftedItems += -1 * this.remainingItems + this._numScroll;
          this.isRemainingItemsAdded = true;
        } else {
          this.isRemainingItemsAdded = false;
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
        }
        this._oldNumScroll = this._numScroll;
        this.prevState.numScroll = this._numScroll;
        this.prevState.numVisible = this._numVisible;
        this.prevState.value = [...this._value];
        if (this.totalDots() > 0 && this.itemsContainer.nativeElement) {
          this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
        }
        this.isCreated = true;
        if (this.autoplayInterval && this.isAutoplay()) {
          this.startAutoplay();
        }
      }
      if (isCircular) {
        if (this.page === 0) {
          totalShiftedItems = -1 * this._numVisible;
        } else if (totalShiftedItems === 0) {
          totalShiftedItems = -1 * this.value.length;
          if (this.remainingItems > 0) {
            this.isRemainingItemsAdded = true;
          }
        }
        if (totalShiftedItems !== this.totalShiftedItems) {
          this.totalShiftedItems = totalShiftedItems;
        }
      }
    }
  }
  createStyle() {
    if (!this.carouselStyle) {
      this.carouselStyle = this.renderer.createElement("style");
      this.carouselStyle.type = "text/css";
      Kt(this.carouselStyle, "nonce", this.config?.csp()?.nonce);
      this.renderer.appendChild(this.document.head, this.carouselStyle);
      Kt(this.carouselStyle, "nonce", this.config?.csp()?.nonce);
    }
    let innerHTML = `
            #${this.id} .p-carousel-item {
				flex: 1 0 ${100 / this.numVisible}%
			}
        `;
    if (this.responsiveOptions) {
      this.responsiveOptions.sort((data1, data2) => {
        const value1 = data1.breakpoint;
        const value2 = data2.breakpoint;
        let result = null;
        if (value1 == null && value2 != null) result = -1;
        else if (value1 != null && value2 == null) result = 1;
        else if (value1 == null && value2 == null) result = 0;
        else if (typeof value1 === "string" && typeof value2 === "string") result = value1.localeCompare(value2, void 0, {
          numeric: true
        });
        else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
        return -1 * result;
      });
      for (let i = 0; i < this.responsiveOptions.length; i++) {
        let res = this.responsiveOptions[i];
        innerHTML += `
                    @media screen and (max-width: ${res.breakpoint}) {
                        #${this.id} .p-carousel-item {
                            flex: 1 0 ${100 / res.numVisible}%
                        }
                    }
                `;
      }
    }
    this.carouselStyle.innerHTML = innerHTML;
  }
  calculatePosition() {
    if (this.responsiveOptions) {
      let matchedResponsiveData = {
        numVisible: this.defaultNumVisible,
        numScroll: this.defaultNumScroll
      };
      if (typeof window !== "undefined") {
        let windowWidth = window.innerWidth;
        for (let i = 0; i < this.responsiveOptions.length; i++) {
          let res = this.responsiveOptions[i];
          if (parseInt(res.breakpoint, 10) >= windowWidth) {
            matchedResponsiveData = res;
          }
        }
      }
      if (this._numScroll !== matchedResponsiveData.numScroll) {
        let page = this._page;
        page = Math.floor(page * this._numScroll / matchedResponsiveData.numScroll);
        let totalShiftedItems = matchedResponsiveData.numScroll * this.page * -1;
        if (this.isCircular()) {
          totalShiftedItems -= matchedResponsiveData.numVisible;
        }
        this.totalShiftedItems = totalShiftedItems;
        this._numScroll = matchedResponsiveData.numScroll;
        this._page = page;
        this.onPage.emit({
          page: this.page
        });
      }
      if (this._numVisible !== matchedResponsiveData.numVisible) {
        this._numVisible = matchedResponsiveData.numVisible;
        this.setCloneItems();
      }
      this.cd.markForCheck();
    }
  }
  setCloneItems() {
    this.clonedItemsForStarting = [];
    this.clonedItemsForFinishing = [];
    if (this.isCircular()) {
      this.clonedItemsForStarting.push(...this.value.slice(-1 * this._numVisible));
      this.clonedItemsForFinishing.push(...this.value.slice(0, this._numVisible));
    }
  }
  firstIndex() {
    return this.isCircular() ? -1 * (this.totalShiftedItems + this.numVisible) : this.totalShiftedItems * -1;
  }
  lastIndex() {
    return this.firstIndex() + this.numVisible - 1;
  }
  totalDots() {
    return this.value?.length ? Math.ceil((this.value.length - this._numVisible) / this._numScroll) + 1 : 0;
  }
  totalDotsArray() {
    const totalDots = this.totalDots();
    return totalDots <= 0 ? [] : Array(totalDots).fill(0);
  }
  isVertical() {
    return this.orientation === "vertical";
  }
  isCircular() {
    return this.circular && this.value && this.value.length >= this.numVisible;
  }
  isAutoplay() {
    return this.autoplayInterval && this.allowAutoplay;
  }
  isForwardNavDisabled() {
    return this.isEmpty() || this._page >= this.totalDots() - 1 && !this.isCircular();
  }
  isBackwardNavDisabled() {
    return this.isEmpty() || this._page <= 0 && !this.isCircular();
  }
  isEmpty() {
    return !this.value || this.value.length === 0;
  }
  navForward(e, index) {
    if (this.isCircular() || this._page < this.totalDots() - 1) {
      this.step(-1, index);
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  navBackward(e, index) {
    if (this.isCircular() || this._page !== 0) {
      this.step(1, index);
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (e && e.cancelable) {
      e.preventDefault();
    }
  }
  onDotClick(e, index) {
    let page = this._page;
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
    if (index > page) {
      this.navForward(e, index);
    } else if (index < page) {
      this.navBackward(e, index);
    }
  }
  onIndicatorKeydown(event) {
    switch (event.code) {
      case "ArrowRight":
        this.onRightKey();
        break;
      case "ArrowLeft":
        this.onLeftKey();
        break;
    }
  }
  onRightKey() {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
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
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]r')];
    const activeIndex = this.findFocusedIndicatorIndex();
    this.changedFocusedIndicator(activeIndex, indicators.length - 1);
  }
  onTabKey() {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    const highlightedIndex = indicators.findIndex((ind) => Q(ind, "data-p-highlight") === true);
    const activeIndicator = z(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
    const activeIndex = indicators.findIndex((ind) => ind === activeIndicator.parentElement);
    indicators[activeIndex].children[0].tabIndex = "-1";
    indicators[highlightedIndex].children[0].tabIndex = "0";
  }
  findFocusedIndicatorIndex() {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    const activeIndicator = z(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"] > button[tabindex="0"]');
    return indicators.findIndex((ind) => ind === activeIndicator?.parentElement);
  }
  changedFocusedIndicator(prevInd, nextInd) {
    const indicators = [...Y(this.indicatorContent?.nativeElement, '[data-pc-section="indicator"]')];
    indicators[prevInd].children[0].tabIndex = "-1";
    indicators[nextInd].children[0].tabIndex = "0";
    indicators[nextInd].children[0].focus();
  }
  step(dir, page) {
    let totalShiftedItems = this.totalShiftedItems;
    const isCircular = this.isCircular();
    if (page != null) {
      totalShiftedItems = this._numScroll * page * -1;
      if (isCircular) {
        totalShiftedItems -= this._numVisible;
      }
      this.isRemainingItemsAdded = false;
    } else {
      totalShiftedItems += this._numScroll * dir;
      if (this.isRemainingItemsAdded) {
        totalShiftedItems += this.remainingItems - this._numScroll * dir;
        this.isRemainingItemsAdded = false;
      }
      let originalShiftedItems = isCircular ? totalShiftedItems + this._numVisible : totalShiftedItems;
      page = Math.abs(Math.floor(originalShiftedItems / this._numScroll));
    }
    if (isCircular && this.page === this.totalDots() - 1 && dir === -1) {
      totalShiftedItems = -1 * (this.value.length + this._numVisible);
      page = 0;
    } else if (isCircular && this.page === 0 && dir === 1) {
      totalShiftedItems = 0;
      page = this.totalDots() - 1;
    } else if (page === this.totalDots() - 1 && this.remainingItems > 0) {
      totalShiftedItems += this.remainingItems * -1 - this._numScroll * dir;
      this.isRemainingItemsAdded = true;
    }
    if (this.itemsContainer) {
      this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
      this.itemsContainer.nativeElement.style.transition = "transform 500ms ease 0s";
    }
    this.totalShiftedItems = totalShiftedItems;
    this._page = page;
    this.onPage.emit({
      page: this.page
    });
    this.cd.markForCheck();
  }
  startAutoplay() {
    this.interval = setInterval(() => {
      if (this.totalDots() > 0) {
        if (this.page === this.totalDots() - 1) {
          this.step(-1, 0);
        } else {
          this.step(-1, this.page + 1);
        }
      }
    }, this.autoplayInterval);
    this.allowAutoplay = true;
    this.cd.markForCheck();
  }
  stopAutoplay(changeAllow = true) {
    if (this.interval) {
      clearInterval(this.interval);
      this.interval = void 0;
      if (changeAllow) {
        this.allowAutoplay = false;
      }
    }
    this.cd.markForCheck();
  }
  isPlaying() {
    return !!this.interval;
  }
  onTransitionEnd() {
    if (this.itemsContainer) {
      this.itemsContainer.nativeElement.style.transition = "";
      if ((this.page === 0 || this.page === this.totalDots() - 1) && this.isCircular()) {
        this.itemsContainer.nativeElement.style.transform = this.isVertical() ? `translate3d(0, ${this.totalShiftedItems * (100 / this._numVisible)}%, 0)` : `translate3d(${this.totalShiftedItems * (100 / this._numVisible)}%, 0, 0)`;
      }
    }
  }
  onTouchStart(e) {
    let touchobj = e.changedTouches[0];
    this.startPos = {
      x: touchobj.pageX,
      y: touchobj.pageY
    };
  }
  onTouchMove(e) {
    if (e.cancelable) {
      e.preventDefault();
    }
  }
  onTouchEnd(e) {
    let touchobj = e.changedTouches[0];
    if (this.isVertical()) {
      this.changePageOnTouch(e, touchobj.pageY - this.startPos.y);
    } else {
      this.changePageOnTouch(e, touchobj.pageX - this.startPos.x);
    }
  }
  changePageOnTouch(e, diff) {
    if (Math.abs(diff) > this.swipeThreshold) {
      if (diff < 0) {
        this.navForward(e);
      } else {
        this.navBackward(e);
      }
    }
  }
  ariaPrevButtonLabel() {
    return this.config.translation.aria ? this.config.translation.aria?.prevPageLabel : void 0;
  }
  ariaSlideLabel() {
    return this.config.translation.aria ? this.config.translation.aria?.slide : void 0;
  }
  ariaNextButtonLabel() {
    return this.config.translation.aria ? this.config.translation.aria?.nextPageLabel : void 0;
  }
  ariaSlideNumber(value) {
    return this.config.translation.aria ? this.config.translation.aria?.slideNumber?.replace(/{slideNumber}/g, value) : void 0;
  }
  ariaPageLabel(value) {
    return this.config.translation.aria ? this.config.translation.aria?.pageLabel?.replace(/{page}/g, value) : void 0;
  }
  bindDocumentListeners() {
    if (isPlatformBrowser(this.platformId)) {
      if (!this.documentResizeListener) {
        this.documentResizeListener = this.renderer.listen(this.window, "resize", (event) => {
          this.calculatePosition();
        });
      }
    }
  }
  unbindDocumentListeners() {
    if (isPlatformBrowser(this.platformId)) {
      if (this.documentResizeListener) {
        this.documentResizeListener();
        this.documentResizeListener = null;
      }
    }
  }
  ngOnDestroy() {
    if (this.responsiveOptions) {
      this.unbindDocumentListeners();
    }
    if (this.autoplayInterval) {
      this.stopAutoplay();
    }
  }
  static ɵfac = function Carousel_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Carousel)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Carousel,
    selectors: [["p-carousel"]],
    contentQueries: function Carousel_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, Header, 5);
        ɵɵcontentQuery(dirIndex, Footer, 5);
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, _c2, 4);
        ɵɵcontentQuery(dirIndex, _c3, 4);
        ɵɵcontentQuery(dirIndex, _c4, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerFacet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerFacet = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.footerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.previousIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nextIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Carousel_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c5, 5);
        ɵɵviewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.itemsContainer = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.indicatorContent = _t.first);
      }
    },
    hostVars: 4,
    hostBindings: function Carousel_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("id", ctx.id)("role", "region");
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      page: "page",
      numVisible: "numVisible",
      numScroll: "numScroll",
      responsiveOptions: "responsiveOptions",
      orientation: "orientation",
      verticalViewPortHeight: "verticalViewPortHeight",
      contentClass: "contentClass",
      indicatorsContentClass: "indicatorsContentClass",
      indicatorsContentStyle: "indicatorsContentStyle",
      indicatorStyleClass: "indicatorStyleClass",
      indicatorStyle: "indicatorStyle",
      value: "value",
      circular: [2, "circular", "circular", booleanAttribute],
      showIndicators: [2, "showIndicators", "showIndicators", booleanAttribute],
      showNavigators: [2, "showNavigators", "showNavigators", booleanAttribute],
      autoplayInterval: [2, "autoplayInterval", "autoplayInterval", numberAttribute],
      styleClass: "styleClass",
      prevButtonProps: "prevButtonProps",
      nextButtonProps: "nextButtonProps"
    },
    outputs: {
      onPage: "onPage"
    },
    features: [ɵɵProvidersFeature([CarouselStyle]), ɵɵInheritDefinitionFeature, ɵɵNgOnChangesFeature],
    ngContentSelectors: _c8,
    decls: 13,
    vars: 21,
    consts: [["itemsContainer", ""], ["icon", ""], ["indicatorContent", ""], [3, "class", 4, "ngIf"], [3, "ngClass"], [3, "class", "text", "buttonProps", "click", 4, "ngIf"], [3, "touchend", "touchstart", "touchmove", "ngStyle"], [3, "transitionend"], [3, "class", 4, "ngFor", "ngForOf"], ["type", "button", 3, "class", "buttonProps", "text", "click", 4, "ngIf"], [3, "class", "ngStyle", "keydown", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "click", "text", "buttonProps"], [4, "ngIf"], ["data-p-icon", "chevron-left", 4, "ngIf"], ["data-p-icon", "chevron-up", 4, "ngIf"], ["data-p-icon", "chevron-left"], ["data-p-icon", "chevron-up"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["type", "button", 3, "click", "buttonProps", "text"], ["data-p-icon", "chevron-right", 4, "ngIf"], ["data-p-icon", "chevron-down", 4, "ngIf"], ["data-p-icon", "chevron-right"], ["data-p-icon", "chevron-down"], [3, "keydown", "ngStyle"], ["type", "button", 3, "click", "ngStyle", "tabindex"]],
    template: function Carousel_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef(_c7);
        ɵɵtemplate(0, Carousel_div_0_Template, 3, 3, "div", 3);
        ɵɵelementStart(1, "div", 4)(2, "div");
        ɵɵtemplate(3, Carousel_p_button_3_Template, 3, 5, "p-button", 5);
        ɵɵelementStart(4, "div", 6);
        ɵɵlistener("touchend", function Carousel_Template_div_touchend_4_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onTouchEnd($event));
        })("touchstart", function Carousel_Template_div_touchstart_4_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onTouchStart($event));
        })("touchmove", function Carousel_Template_div_touchmove_4_listener($event) {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onTouchMove($event));
        });
        ɵɵelementStart(5, "div", 7, 0);
        ɵɵlistener("transitionend", function Carousel_Template_div_transitionend_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onTransitionEnd());
        });
        ɵɵtemplate(7, Carousel_div_7_Template, 2, 11, "div", 8)(8, Carousel_div_8_Template, 2, 11, "div", 8)(9, Carousel_div_9_Template, 2, 8, "div", 8);
        ɵɵelementEnd()();
        ɵɵtemplate(10, Carousel_p_button_10_Template, 3, 5, "p-button", 9);
        ɵɵelementEnd();
        ɵɵtemplate(11, Carousel_ul_11_Template, 3, 4, "ul", 10);
        ɵɵelementEnd();
        ɵɵtemplate(12, Carousel_div_12_Template, 3, 3, "div", 3);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.headerFacet || ctx.headerTemplate);
        ɵɵadvance();
        ɵɵclassMap(ctx.contentClass);
        ɵɵproperty("ngClass", ctx.cx("contentContainer"));
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("content"));
        ɵɵattribute("aria-live", ctx.allowAutoplay ? "polite" : "off");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showNavigators);
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("viewport"));
        ɵɵproperty("ngStyle", ɵɵpureFunction1(19, _c9, ctx.isVertical() ? ctx.verticalViewPortHeight : "auto"));
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("itemList"));
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.clonedItemsForStarting);
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.value);
        ɵɵadvance();
        ɵɵproperty("ngForOf", ctx.clonedItemsForFinishing);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showNavigators);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.showIndicators);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.footerFacet || ctx.footerTemplate || ctx._footerTemplate);
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, ChevronRightIcon, ButtonModule, Button, ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Carousel, [{
    type: Component,
    args: [{
      selector: "p-carousel",
      standalone: true,
      imports: [CommonModule, ChevronRightIcon, ButtonModule, ChevronLeftIcon, ChevronDownIcon, ChevronUpIcon, SharedModule],
      template: `
        <div [class]="cx('header')" *ngIf="headerFacet || headerTemplate">
            <ng-content select="p-header"></ng-content>
            <ng-container *ngTemplateOutlet="headerTemplate"></ng-container>
        </div>
        <div [class]="contentClass" [ngClass]="cx('contentContainer')">
            <div [class]="cx('content')" [attr.aria-live]="allowAutoplay ? 'polite' : 'off'">
                <p-button *ngIf="showNavigators" [class]="cx('pcPrevButton')" [attr.aria-label]="ariaPrevButtonLabel()" (click)="navBackward($event)" [text]="true" [buttonProps]="prevButtonProps">
                    <ng-template #icon>
                        <ng-container *ngIf="!previousIconTemplate && !_previousIconTemplate && !prevButtonProps?.icon">
                            <svg data-p-icon="chevron-left" *ngIf="!isVertical()" />
                            <svg data-p-icon="chevron-up" *ngIf="isVertical()" />
                        </ng-container>
                        <ng-container *ngIf="(previousIconTemplate || _previousIconTemplate) && !prevButtonProps?.icon">
                            <ng-template *ngTemplateOutlet="previousIconTemplate || _previousIconTemplate"></ng-template>
                        </ng-container>
                    </ng-template>
                </p-button>
                <div [class]="cx('viewport')" [ngStyle]="{ height: isVertical() ? verticalViewPortHeight : 'auto' }" (touchend)="onTouchEnd($event)" (touchstart)="onTouchStart($event)" (touchmove)="onTouchMove($event)">
                    <div #itemsContainer [class]="cx('itemList')" (transitionend)="onTransitionEnd()">
                        <div
                            *ngFor="let item of clonedItemsForStarting; let index = index"
                            [class]="cx('itemClone', { index })"
                            [attr.aria-hidden]="!(totalShiftedItems * -1 === value.length)"
                            [attr.aria-label]="ariaSlideNumber(index)"
                            [attr.aria-roledescription]="ariaSlideLabel()"
                        >
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item }"></ng-container>
                        </div>
                        <div
                            *ngFor="let item of value; let index = index"
                            [class]="cx('item', { index })"
                            [attr.aria-hidden]="!(firstIndex() <= index && lastIndex() >= index)"
                            [attr.aria-label]="ariaSlideNumber(index)"
                            [attr.aria-roledescription]="ariaSlideLabel()"
                        >
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item }"></ng-container>
                        </div>
                        <div *ngFor="let item of clonedItemsForFinishing; let index = index" [class]="cx('itemClone', { index })">
                            <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: item }"></ng-container>
                        </div>
                    </div>
                </div>
                <p-button type="button" *ngIf="showNavigators" [class]="cx('pcNextButton')" (click)="navForward($event)" [attr.aria-label]="ariaNextButtonLabel()" [buttonProps]="nextButtonProps" [text]="true">
                    <ng-template #icon>
                        <ng-container *ngIf="!nextIconTemplate && !_nextIconTemplate && !nextButtonProps?.icon">
                            <svg data-p-icon="chevron-right" *ngIf="!isVertical()" />
                            <svg data-p-icon="chevron-down" *ngIf="isVertical()" />
                        </ng-container>
                        <span *ngIf="nextIconTemplate || (_nextIconTemplate && !nextButtonProps?.icon)">
                            <ng-template *ngTemplateOutlet="nextIconTemplate || _nextIconTemplate"></ng-template>
                        </span>
                    </ng-template>
                </p-button>
            </div>
            <ul #indicatorContent [class]="cx('indicatorList')" [ngStyle]="indicatorsContentStyle" *ngIf="showIndicators" (keydown)="onIndicatorKeydown($event)">
                <li *ngFor="let totalDot of totalDotsArray(); let i = index" [class]="cx('indicator', { index: i })" [attr.data-pc-section]="'indicator'">
                    <button
                        type="button"
                        [class]="cx('indicatorButton')"
                        (click)="onDotClick($event, i)"
                        [ngStyle]="indicatorStyle"
                        [attr.aria-label]="ariaPageLabel(i + 1)"
                        [attr.aria-current]="_page === i ? 'page' : undefined"
                        [tabindex]="_page === i ? 0 : -1"
                    ></button>
                </li>
            </ul>
        </div>
        <div [class]="cx('footer')" *ngIf="footerFacet || footerTemplate || _footerTemplate">
            <ng-content select="p-footer"></ng-content>
            <ng-container *ngTemplateOutlet="footerTemplate || _footerTemplate"></ng-container>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [CarouselStyle],
      host: {
        "[attr.id]": "id",
        "[attr.role]": "'region'",
        "[class]": "cn(cx('root'), styleClass)"
      }
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: NgZone
  }], {
    page: [{
      type: Input
    }],
    numVisible: [{
      type: Input
    }],
    numScroll: [{
      type: Input
    }],
    responsiveOptions: [{
      type: Input
    }],
    orientation: [{
      type: Input
    }],
    verticalViewPortHeight: [{
      type: Input
    }],
    contentClass: [{
      type: Input
    }],
    indicatorsContentClass: [{
      type: Input
    }],
    indicatorsContentStyle: [{
      type: Input
    }],
    indicatorStyleClass: [{
      type: Input
    }],
    indicatorStyle: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    circular: [{
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
    showNavigators: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoplayInterval: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    prevButtonProps: [{
      type: Input
    }],
    nextButtonProps: [{
      type: Input
    }],
    onPage: [{
      type: Output
    }],
    itemsContainer: [{
      type: ViewChild,
      args: ["itemsContainer"]
    }],
    indicatorContent: [{
      type: ViewChild,
      args: ["indicatorContent"]
    }],
    headerFacet: [{
      type: ContentChild,
      args: [Header]
    }],
    footerFacet: [{
      type: ContentChild,
      args: [Footer]
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
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
        descendants: false
      }]
    }],
    previousIconTemplate: [{
      type: ContentChild,
      args: ["previousicon", {
        descendants: false
      }]
    }],
    nextIconTemplate: [{
      type: ContentChild,
      args: ["nexticon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CarouselModule = class _CarouselModule {
  static ɵfac = function CarouselModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CarouselModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _CarouselModule,
    imports: [Carousel, SharedModule],
    exports: [Carousel, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Carousel, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CarouselModule, [{
    type: NgModule,
    args: [{
      imports: [Carousel, SharedModule],
      exports: [Carousel, SharedModule]
    }]
  }], null, null);
})();
export {
  Carousel,
  CarouselClasses,
  CarouselModule,
  CarouselStyle
};
//# sourceMappingURL=primeng_carousel.js.map
