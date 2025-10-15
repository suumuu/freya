import {
  PlusIcon
} from "./chunk-XXK42OM5.js";
import {
  MinusIcon
} from "./chunk-2GRDWJRG.js";
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
  state,
  style,
  transition,
  trigger
} from "./chunk-P5OQKAHD.js";
import "./chunk-UKZYY4TH.js";
import {
  s3 as s
} from "./chunk-RK2QIU6W.js";
import {
  CommonModule,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-QIB4AD5R.js";
import "./chunk-W2WIUP6R.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  booleanAttribute,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GWCN73BT.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-MARUHEWW.js";
import "./chunk-4MWRP73S.js";

// node_modules/@primeuix/styles/dist/fieldset/index.mjs
var style2 = "\n    .p-fieldset {\n        background: dt('fieldset.background');\n        border: 1px solid dt('fieldset.border.color');\n        border-radius: dt('fieldset.border.radius');\n        color: dt('fieldset.color');\n        padding: dt('fieldset.padding');\n        margin: 0;\n    }\n\n    .p-fieldset-legend {\n        background: dt('fieldset.legend.background');\n        border-radius: dt('fieldset.legend.border.radius');\n        border-width: dt('fieldset.legend.border.width');\n        border-style: solid;\n        border-color: dt('fieldset.legend.border.color');\n        padding: dt('fieldset.legend.padding');\n        transition:\n            background dt('fieldset.transition.duration'),\n            color dt('fieldset.transition.duration'),\n            outline-color dt('fieldset.transition.duration'),\n            box-shadow dt('fieldset.transition.duration');\n    }\n\n    .p-fieldset-toggleable > .p-fieldset-legend {\n        padding: 0;\n    }\n\n    .p-fieldset-toggle-button {\n        cursor: pointer;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        text-decoration: none;\n        display: flex;\n        gap: dt('fieldset.legend.gap');\n        align-items: center;\n        justify-content: center;\n        padding: dt('fieldset.legend.padding');\n        background: transparent;\n        border: 0 none;\n        border-radius: dt('fieldset.legend.border.radius');\n        transition:\n            background dt('fieldset.transition.duration'),\n            color dt('fieldset.transition.duration'),\n            outline-color dt('fieldset.transition.duration'),\n            box-shadow dt('fieldset.transition.duration');\n        outline-color: transparent;\n    }\n\n    .p-fieldset-legend-label {\n        font-weight: dt('fieldset.legend.font.weight');\n    }\n\n    .p-fieldset-toggle-button:focus-visible {\n        box-shadow: dt('fieldset.legend.focus.ring.shadow');\n        outline: dt('fieldset.legend.focus.ring.width') dt('fieldset.legend.focus.ring.style') dt('fieldset.legend.focus.ring.color');\n        outline-offset: dt('fieldset.legend.focus.ring.offset');\n    }\n\n    .p-fieldset-toggleable > .p-fieldset-legend:hover {\n        color: dt('fieldset.legend.hover.color');\n        background: dt('fieldset.legend.hover.background');\n    }\n\n    .p-fieldset-toggle-icon {\n        color: dt('fieldset.toggle.icon.color');\n        transition: color dt('fieldset.transition.duration');\n    }\n\n    .p-fieldset-toggleable > .p-fieldset-legend:hover .p-fieldset-toggle-icon {\n        color: dt('fieldset.toggle.icon.hover.color');\n    }\n\n    .p-fieldset .p-fieldset-content {\n        padding: dt('fieldset.content.padding');\n    }\n";

// node_modules/primeng/fesm2022/primeng-fieldset.mjs
var _c0 = ["header"];
var _c1 = ["expandicon"];
var _c2 = ["collapseicon"];
var _c3 = ["content"];
var _c4 = ["*", [["p-header"]]];
var _c5 = ["*", "p-header"];
var _c6 = (a0) => ({
  transitionParams: a0,
  height: "0"
});
var _c7 = (a0) => ({
  value: "hidden",
  params: a0
});
var _c8 = (a0) => ({
  transitionParams: a0,
  height: "*"
});
var _c9 = (a0) => ({
  value: "visible",
  params: a0
});
function Fieldset_ng_container_2_ng_container_2__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 9);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cx("toggleIcon"));
    ɵɵattribute("data-pc-section", "togglericon");
  }
}
function Fieldset_ng_container_2_ng_container_2_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Fieldset_ng_container_2_ng_container_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, Fieldset_ng_container_2_ng_container_2_span_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cx("toggleIcon"));
    ɵɵattribute("data-pc-section", "togglericon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.expandIconTemplate || ctx_r2._expandIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Fieldset_ng_container_2_ng_container_2__svg_svg_1_Template, 1, 3, "svg", 7)(2, Fieldset_ng_container_2_ng_container_2_span_2_Template, 2, 4, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.expandIconTemplate && !ctx_r2._expandIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.expandIconTemplate || ctx_r2._expandIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_3__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 11);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cx("toggleIcon"));
    ɵɵattribute("aria-hidden", true)("data-pc-section", "togglericon");
  }
}
function Fieldset_ng_container_2_ng_container_3_span_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Fieldset_ng_container_2_ng_container_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, Fieldset_ng_container_2_ng_container_3_span_2_ng_container_1_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r2.cx("toggleIcon"));
    ɵɵattribute("data-pc-section", "togglericon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.collapseIconTemplate || ctx_r2._collapseIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Fieldset_ng_container_2_ng_container_3__svg_svg_1_Template, 1, 4, "svg", 10)(2, Fieldset_ng_container_2_ng_container_3_span_2_Template, 2, 4, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.collapseIconTemplate && !ctx_r2._collapseIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.collapseIconTemplate || ctx_r2._collapseIconTemplate);
  }
}
function Fieldset_ng_container_2_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Fieldset_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "button", 5);
    ɵɵlistener("click", function Fieldset_ng_container_2_Template_button_click_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.toggle($event));
    })("keydown", function Fieldset_ng_container_2_Template_button_keydown_1_listener($event) {
      ɵɵrestoreView(_r2);
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onKeyDown($event));
    });
    ɵɵtemplate(2, Fieldset_ng_container_2_ng_container_2_Template, 3, 2, "ng-container", 6)(3, Fieldset_ng_container_2_ng_container_3_Template, 3, 2, "ng-container", 6)(4, Fieldset_ng_container_2_ng_container_4_Template, 1, 0, "ng-container", 4);
    ɵɵelementEnd();
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    const legendContent_r4 = ɵɵreference(4);
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("toggleButton"));
    ɵɵattribute("id", ctx_r2.id + "_header")("aria-controls", ctx_r2.id + "_content")("aria-expanded", !ctx_r2.collapsed)("aria-label", ctx_r2.buttonAriaLabel);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r2.collapsed);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r2.collapsed);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", legendContent_r4);
  }
}
function Fieldset_ng_template_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Fieldset_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
    ɵɵprojection(2, 1);
    ɵɵtemplate(3, Fieldset_ng_template_3_ng_container_3_Template, 1, 0, "ng-container", 4);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("legendLabel"));
    ɵɵattribute("data-pc-section", "legendtitle");
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.legend);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.headerTemplate || ctx_r2._headerTemplate);
  }
}
function Fieldset_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
var theme = (
  /*css*/
  `
    ${style2}

    /* For PrimeNG */
    .p-fieldset-collapsed > .p-fieldset-content-container,
    .p-fieldset-content-container.ng-animating {
        overflow: hidden;
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-fieldset p-component", {
    "p-fieldset-toggleable": instance.toggleable,
    "p-fieldset-collapsed": instance.collapsed && instance.toggleable
  }],
  legend: "p-fieldset-legend",
  legendLabel: "p-fieldset-legend-label",
  toggleButton: "p-fieldset-toggle-button",
  toggleIcon: "p-fieldset-toggle-icon",
  contentContainer: "p-fieldset-content-container",
  content: "p-fieldset-content"
};
var FieldsetStyle = class _FieldsetStyle extends BaseStyle {
  name = "fieldset";
  theme = theme;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵFieldsetStyle_BaseFactory;
    return function FieldsetStyle_Factory(__ngFactoryType__) {
      return (ɵFieldsetStyle_BaseFactory || (ɵFieldsetStyle_BaseFactory = ɵɵgetInheritedFactory(_FieldsetStyle)))(__ngFactoryType__ || _FieldsetStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _FieldsetStyle,
    factory: _FieldsetStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldsetStyle, [{
    type: Injectable
  }], null, null);
})();
var FieldsetClasses;
(function(FieldsetClasses2) {
  FieldsetClasses2["root"] = "p-fieldset";
  FieldsetClasses2["legend"] = "p-fieldset-legend";
  FieldsetClasses2["legendLabel"] = "p-fieldset-legend-label";
  FieldsetClasses2["toggleIcon"] = "p-fieldset-toggle-icon";
  FieldsetClasses2["contentContainer"] = "p-fieldset-content-container";
  FieldsetClasses2["content"] = "p-fieldset-content";
})(FieldsetClasses || (FieldsetClasses = {}));
var Fieldset = class _Fieldset extends BaseComponent {
  /**
   * Header text of the fieldset.
   * @group Props
   */
  legend;
  /**
   * When specified, content can toggled by clicking the legend.
   * @group Props
   * @defaultValue false
   */
  toggleable;
  /**
   * Defines the default visibility state of the content.
   * * @group Props
   */
  collapsed = false;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Transition options of the panel animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Emits when the collapsed state changes.
   * @param {boolean} value - New value.
   * @group Emits
   */
  collapsedChange = new EventEmitter();
  /**
   * Callback to invoke before panel toggle.
   * @param {PanelBeforeToggleEvent} event - Custom toggle event
   * @group Emits
   */
  onBeforeToggle = new EventEmitter();
  /**
   * Callback to invoke after panel toggle.
   * @param {PanelAfterToggleEvent} event - Custom toggle event
   * @group Emits
   */
  onAfterToggle = new EventEmitter();
  _id = s("pn_id_");
  get id() {
    return this._id;
  }
  get buttonAriaLabel() {
    return this.legend;
  }
  animating;
  _componentStyle = inject(FieldsetStyle);
  /**
   * Defines the header template.
   * @group Templates
   */
  headerTemplate;
  /**
   * Defines the expandicon template.
   * @group Templates
   */
  expandIconTemplate;
  /**
   * Defines the collapseicon template.
   * @group Templates
   */
  collapseIconTemplate;
  /**
   * Defines the content template.
   * @group Templates
   */
  contentTemplate;
  toggle(event) {
    if (this.animating) {
      return false;
    }
    this.animating = true;
    this.onBeforeToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    if (this.collapsed) this.expand();
    else this.collapse();
    this.onAfterToggle.emit({
      originalEvent: event,
      collapsed: this.collapsed
    });
    event.preventDefault();
  }
  onKeyDown(event) {
    if (event.code === "Enter" || event.code === "Space") {
      this.toggle(event);
      event.preventDefault();
    }
  }
  expand() {
    this.collapsed = false;
    this.collapsedChange.emit(this.collapsed);
  }
  collapse() {
    this.collapsed = true;
    this.collapsedChange.emit(this.collapsed);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  onToggleDone() {
    this.animating = false;
  }
  _headerTemplate;
  _expandIconTemplate;
  _collapseIconTemplate;
  _contentTemplate;
  templates;
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "expandicon":
          this._expandIconTemplate = item.template;
          break;
        case "collapseicon":
          this._collapseIconTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵFieldset_BaseFactory;
    return function Fieldset_Factory(__ngFactoryType__) {
      return (ɵFieldset_BaseFactory || (ɵFieldset_BaseFactory = ɵɵgetInheritedFactory(_Fieldset)))(__ngFactoryType__ || _Fieldset);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Fieldset,
    selectors: [["p-fieldset"]],
    contentQueries: function Fieldset_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, _c2, 4);
        ɵɵcontentQuery(dirIndex, _c3, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.expandIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.collapseIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    inputs: {
      legend: "legend",
      toggleable: [2, "toggleable", "toggleable", booleanAttribute],
      collapsed: [2, "collapsed", "collapsed", booleanAttribute],
      style: "style",
      styleClass: "styleClass",
      transitionOptions: "transitionOptions"
    },
    outputs: {
      collapsedChange: "collapsedChange",
      onBeforeToggle: "onBeforeToggle",
      onAfterToggle: "onAfterToggle"
    },
    features: [ɵɵProvidersFeature([FieldsetStyle]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c5,
    decls: 9,
    vars: 30,
    consts: [["legendContent", ""], [3, "ngStyle"], [4, "ngIf", "ngIfElse"], ["role", "region"], [4, "ngTemplateOutlet"], ["tabindex", "0", "role", "button", 3, "click", "keydown"], [4, "ngIf"], ["data-p-icon", "plus", 3, "class", 4, "ngIf"], [3, "class", 4, "ngIf"], ["data-p-icon", "plus"], ["data-p-icon", "minus", 3, "class", 4, "ngIf"], ["data-p-icon", "minus"]],
    template: function Fieldset_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵprojectionDef(_c4);
        ɵɵelementStart(0, "fieldset", 1)(1, "legend");
        ɵɵtemplate(2, Fieldset_ng_container_2_Template, 5, 9, "ng-container", 2)(3, Fieldset_ng_template_3_Template, 4, 5, "ng-template", null, 0, ɵɵtemplateRefExtractor);
        ɵɵelementEnd();
        ɵɵelementStart(5, "div", 3);
        ɵɵlistener("@fieldsetContent.done", function Fieldset_Template_div_animation_fieldsetContent_done_5_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onToggleDone());
        });
        ɵɵelementStart(6, "div");
        ɵɵprojection(7);
        ɵɵtemplate(8, Fieldset_ng_container_8_Template, 1, 0, "ng-container", 4);
        ɵɵelementEnd()()();
      }
      if (rf & 2) {
        const legendContent_r4 = ɵɵreference(4);
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
        ɵɵproperty("ngStyle", ctx.style);
        ɵɵattribute("id", ctx.id)("data-pc-name", "fieldset")("data-pc-section", "root");
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("legend"));
        ɵɵattribute("data-pc-section", "legend");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.toggleable)("ngIfElse", legendContent_r4);
        ɵɵadvance(3);
        ɵɵclassMap(ctx.cx("contentContainer"));
        ɵɵproperty("@fieldsetContent", ctx.collapsed ? ɵɵpureFunction1(24, _c7, ɵɵpureFunction1(22, _c6, ctx.transitionOptions)) : ɵɵpureFunction1(28, _c9, ɵɵpureFunction1(26, _c8, ctx.animating ? ctx.transitionOptions : "0ms")));
        ɵɵattribute("id", ctx.id + "_content")("aria-labelledby", ctx.id + "_header")("aria-hidden", ctx.collapsed)("data-pc-section", "toggleablecontent");
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("content"));
        ɵɵattribute("data-pc-section", "content");
        ɵɵadvance(2);
        ɵɵproperty("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate);
      }
    },
    dependencies: [CommonModule, NgIf, NgTemplateOutlet, NgStyle, MinusIcon, PlusIcon, SharedModule],
    encapsulation: 2,
    data: {
      animation: [trigger("fieldsetContent", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Fieldset, [{
    type: Component,
    args: [{
      selector: "p-fieldset",
      standalone: true,
      imports: [CommonModule, MinusIcon, PlusIcon, SharedModule],
      template: `
        <fieldset [attr.id]="id" [ngStyle]="style" [class]="cn(cx('root'), styleClass)" [attr.data-pc-name]="'fieldset'" [attr.data-pc-section]="'root'">
            <legend [class]="cx('legend')" [attr.data-pc-section]="'legend'">
                <ng-container *ngIf="toggleable; else legendContent">
                    <button
                        [attr.id]="id + '_header'"
                        tabindex="0"
                        role="button"
                        [attr.aria-controls]="id + '_content'"
                        [attr.aria-expanded]="!collapsed"
                        [attr.aria-label]="buttonAriaLabel"
                        (click)="toggle($event)"
                        (keydown)="onKeyDown($event)"
                        [class]="cx('toggleButton')"
                    >
                        <ng-container *ngIf="collapsed">
                            <svg data-p-icon="plus" *ngIf="!expandIconTemplate && !_expandIconTemplate" [class]="cx('toggleIcon')" [attr.data-pc-section]="'togglericon'" />
                            <span *ngIf="expandIconTemplate || _expandIconTemplate" [class]="cx('toggleIcon')" [attr.data-pc-section]="'togglericon'">
                                <ng-container *ngTemplateOutlet="expandIconTemplate || _expandIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngIf="!collapsed">
                            <svg data-p-icon="minus" *ngIf="!collapseIconTemplate && !_collapseIconTemplate" [class]="cx('toggleIcon')" [attr.aria-hidden]="true" [attr.data-pc-section]="'togglericon'" />
                            <span *ngIf="collapseIconTemplate || _collapseIconTemplate" [class]="cx('toggleIcon')" [attr.data-pc-section]="'togglericon'">
                                <ng-container *ngTemplateOutlet="collapseIconTemplate || _collapseIconTemplate"></ng-container>
                            </span>
                        </ng-container>
                        <ng-container *ngTemplateOutlet="legendContent"></ng-container>
                    </button>
                </ng-container>
                <ng-template #legendContent>
                    <span [class]="cx('legendLabel')" [attr.data-pc-section]="'legendtitle'">{{ legend }}</span>
                    <ng-content select="p-header"></ng-content>
                    <ng-container *ngTemplateOutlet="headerTemplate || _headerTemplate"></ng-container>
                </ng-template>
            </legend>
            <div
                [attr.id]="id + '_content'"
                role="region"
                [class]="cx('contentContainer')"
                [@fieldsetContent]="collapsed ? { value: 'hidden', params: { transitionParams: transitionOptions, height: '0' } } : { value: 'visible', params: { transitionParams: animating ? transitionOptions : '0ms', height: '*' } }"
                [attr.aria-labelledby]="id + '_header'"
                [attr.aria-hidden]="collapsed"
                [attr.data-pc-section]="'toggleablecontent'"
                (@fieldsetContent.done)="onToggleDone()"
            >
                <div [class]="cx('content')" [attr.data-pc-section]="'content'">
                    <ng-content></ng-content>
                    <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate"></ng-container>
                </div>
            </div>
        </fieldset>
    `,
      animations: [trigger("fieldsetContent", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FieldsetStyle]
    }]
  }], null, {
    legend: [{
      type: Input
    }],
    toggleable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    collapsed: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    collapsedChange: [{
      type: Output
    }],
    onBeforeToggle: [{
      type: Output
    }],
    onAfterToggle: [{
      type: Output
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    expandIconTemplate: [{
      type: ContentChild,
      args: ["expandicon", {
        descendants: false
      }]
    }],
    collapseIconTemplate: [{
      type: ContentChild,
      args: ["collapseicon", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var FieldsetModule = class _FieldsetModule {
  static ɵfac = function FieldsetModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FieldsetModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FieldsetModule,
    imports: [Fieldset, SharedModule],
    exports: [Fieldset, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Fieldset, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FieldsetModule, [{
    type: NgModule,
    args: [{
      imports: [Fieldset, SharedModule],
      exports: [Fieldset, SharedModule]
    }]
  }], null, null);
})();
export {
  Fieldset,
  FieldsetClasses,
  FieldsetModule,
  FieldsetStyle
};
//# sourceMappingURL=primeng_fieldset.js.map
