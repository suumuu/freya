import {
  BaseEditableHolder
} from "./chunk-ACMYCYNN.js";
import "./chunk-7PW4UALC.js";
import {
  AutoFocus
} from "./chunk-2ZQOUU6A.js";
import "./chunk-VUXHBR7Y.js";
import {
  NG_VALUE_ACCESSOR
} from "./chunk-LBJKRNRD.js";
import "./chunk-YIJ652GS.js";
import {
  BaseStyle
} from "./chunk-H6WPFNKP.js";
import {
  PrimeTemplate,
  SharedModule
} from "./chunk-7JQS7UJ5.js";
import "./chunk-UKZYY4TH.js";
import "./chunk-RK2QIU6W.js";
import {
  CommonModule,
  NgTemplateOutlet
} from "./chunk-QIB4AD5R.js";
import "./chunk-W2WIUP6R.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostListener,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  forwardRef,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-GWCN73BT.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-MARUHEWW.js";
import "./chunk-4MWRP73S.js";

// node_modules/@primeuix/styles/dist/toggleswitch/index.mjs
var style = "\n    .p-toggleswitch {\n        display: inline-block;\n        width: dt('toggleswitch.width');\n        height: dt('toggleswitch.height');\n    }\n\n    .p-toggleswitch-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        top: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border-radius: dt('toggleswitch.border.radius');\n    }\n\n    .p-toggleswitch-slider {\n        cursor: pointer;\n        width: 100%;\n        height: 100%;\n        border-width: dt('toggleswitch.border.width');\n        border-style: solid;\n        border-color: dt('toggleswitch.border.color');\n        background: dt('toggleswitch.background');\n        transition:\n            background dt('toggleswitch.transition.duration'),\n            color dt('toggleswitch.transition.duration'),\n            border-color dt('toggleswitch.transition.duration'),\n            outline-color dt('toggleswitch.transition.duration'),\n            box-shadow dt('toggleswitch.transition.duration');\n        border-radius: dt('toggleswitch.border.radius');\n        outline-color: transparent;\n        box-shadow: dt('toggleswitch.shadow');\n    }\n\n    .p-toggleswitch-handle {\n        position: absolute;\n        top: 50%;\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        background: dt('toggleswitch.handle.background');\n        color: dt('toggleswitch.handle.color');\n        width: dt('toggleswitch.handle.size');\n        height: dt('toggleswitch.handle.size');\n        inset-inline-start: dt('toggleswitch.gap');\n        margin-block-start: calc(-1 * calc(dt('toggleswitch.handle.size') / 2));\n        border-radius: dt('toggleswitch.handle.border.radius');\n        transition:\n            background dt('toggleswitch.transition.duration'),\n            color dt('toggleswitch.transition.duration'),\n            inset-inline-start dt('toggleswitch.slide.duration'),\n            box-shadow dt('toggleswitch.slide.duration');\n    }\n\n    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-slider {\n        background: dt('toggleswitch.checked.background');\n        border-color: dt('toggleswitch.checked.border.color');\n    }\n\n    .p-toggleswitch.p-toggleswitch-checked .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.checked.background');\n        color: dt('toggleswitch.handle.checked.color');\n        inset-inline-start: calc(dt('toggleswitch.width') - calc(dt('toggleswitch.handle.size') + dt('toggleswitch.gap')));\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-slider {\n        background: dt('toggleswitch.hover.background');\n        border-color: dt('toggleswitch.hover.border.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover) .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.hover.background');\n        color: dt('toggleswitch.handle.hover.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-slider {\n        background: dt('toggleswitch.checked.hover.background');\n        border-color: dt('toggleswitch.checked.hover.border.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:hover).p-toggleswitch-checked .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.checked.hover.background');\n        color: dt('toggleswitch.handle.checked.hover.color');\n    }\n\n    .p-toggleswitch:not(.p-disabled):has(.p-toggleswitch-input:focus-visible) .p-toggleswitch-slider {\n        box-shadow: dt('toggleswitch.focus.ring.shadow');\n        outline: dt('toggleswitch.focus.ring.width') dt('toggleswitch.focus.ring.style') dt('toggleswitch.focus.ring.color');\n        outline-offset: dt('toggleswitch.focus.ring.offset');\n    }\n\n    .p-toggleswitch.p-invalid > .p-toggleswitch-slider {\n        border-color: dt('toggleswitch.invalid.border.color');\n    }\n\n    .p-toggleswitch.p-disabled {\n        opacity: 1;\n    }\n\n    .p-toggleswitch.p-disabled .p-toggleswitch-slider {\n        background: dt('toggleswitch.disabled.background');\n    }\n\n    .p-toggleswitch.p-disabled .p-toggleswitch-handle {\n        background: dt('toggleswitch.handle.disabled.background');\n    }\n";

// node_modules/primeng/fesm2022/primeng-toggleswitch.mjs
var _c0 = ["handle"];
var _c1 = ["input"];
var _c2 = (a0) => ({
  checked: a0
});
function ToggleSwitch_Conditional_4_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function ToggleSwitch_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, ToggleSwitch_Conditional_4_ng_container_0_Template, 1, 0, "ng-container", 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.handleTemplate || ctx_r1._handleTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c2, ctx_r1.checked()));
  }
}
var theme = (
  /*css*/
  `
    ${style}

    p-toggleswitch.ng-invalid.ng-dirty > .p-toggleswitch-slider {
        border-color: dt('toggleswitch.invalid.border.color');
    }
`
);
var inlineStyles = {
  root: {
    position: "relative"
  }
};
var classes = {
  root: ({
    instance
  }) => ["p-toggleswitch p-component", {
    "p-toggleswitch p-component": true,
    "p-toggleswitch-checked": instance.checked(),
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid()
  }],
  input: "p-toggleswitch-input",
  slider: "p-toggleswitch-slider",
  handle: "p-toggleswitch-handle"
};
var ToggleSwitchStyle = class _ToggleSwitchStyle extends BaseStyle {
  name = "toggleswitch";
  theme = theme;
  classes = classes;
  inlineStyles = inlineStyles;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵToggleSwitchStyle_BaseFactory;
    return function ToggleSwitchStyle_Factory(__ngFactoryType__) {
      return (ɵToggleSwitchStyle_BaseFactory || (ɵToggleSwitchStyle_BaseFactory = ɵɵgetInheritedFactory(_ToggleSwitchStyle)))(__ngFactoryType__ || _ToggleSwitchStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _ToggleSwitchStyle,
    factory: _ToggleSwitchStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitchStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleSwitchClasses;
(function(ToggleSwitchClasses2) {
  ToggleSwitchClasses2["root"] = "p-toggleswitch";
  ToggleSwitchClasses2["input"] = "p-toggleswitch-input";
  ToggleSwitchClasses2["slider"] = "p-toggleswitch-slider";
})(ToggleSwitchClasses || (ToggleSwitchClasses = {}));
var TOGGLESWITCH_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleSwitch),
  multi: true
};
var ToggleSwitch = class _ToggleSwitch extends BaseEditableHolder {
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the input element.
   * @group Props
   */
  inputId;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Used to define a string that autocomplete attribute the current element.
   * @group Props
   */
  ariaLabel;
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : []);
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Callback to invoke when the on value change.
   * @param {ToggleSwitchChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  input;
  /**
   * Callback to invoke when the on value change.
   * @type {TemplateRef<ToggleSwitchHandleTemplateContext>} context - Context of the template
   * @example
   * ```html
   * <ng-template #handle let-checked="checked"> </ng-template>
   * ```
   * @see {@link ToggleSwitchHandleTemplateContext}
   * @group Templates
   */
  handleTemplate;
  _handleTemplate;
  focused = false;
  _componentStyle = inject(ToggleSwitchStyle);
  templates;
  onHostClick(event) {
    this.onClick(event);
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "handle":
          this._handleTemplate = item.template;
          break;
        default:
          this._handleTemplate = item.template;
          break;
      }
    });
  }
  onClick(event) {
    if (!this.$disabled() && !this.readonly) {
      this.writeModelValue(this.checked() ? this.falseValue : this.trueValue);
      this.onModelChange(this.modelValue());
      this.onChange.emit({
        originalEvent: event,
        checked: this.modelValue()
      });
      this.input.nativeElement.focus();
    }
  }
  onFocus() {
    this.focused = true;
  }
  onBlur() {
    this.focused = false;
    this.onModelTouched();
  }
  checked() {
    return this.modelValue() === this.trueValue;
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    setModelValue(value);
    this.cd.markForCheck();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵToggleSwitch_BaseFactory;
    return function ToggleSwitch_Factory(__ngFactoryType__) {
      return (ɵToggleSwitch_BaseFactory || (ɵToggleSwitch_BaseFactory = ɵɵgetInheritedFactory(_ToggleSwitch)))(__ngFactoryType__ || _ToggleSwitch);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ToggleSwitch,
    selectors: [["p-toggleswitch"], ["p-toggleSwitch"], ["p-toggle-switch"]],
    contentQueries: function ToggleSwitch_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.handleTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function ToggleSwitch_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.input = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function ToggleSwitch_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("click", function ToggleSwitch_click_HostBindingHandler($event) {
          return ctx.onHostClick($event);
        });
      }
      if (rf & 2) {
        ɵɵattribute("data-pc-name", "toggleswitch")("data-pc-section", "root");
        ɵɵstyleMap(ctx.sx("root"));
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      styleClass: "styleClass",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      ariaLabel: "ariaLabel",
      size: [1, "size"],
      ariaLabelledBy: "ariaLabelledBy",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [ɵɵProvidersFeature([TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitchStyle]), ɵɵInheritDefinitionFeature],
    decls: 5,
    vars: 19,
    consts: [["input", ""], ["type", "checkbox", "role", "switch", 3, "focus", "blur", "checked", "pAutoFocus"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function ToggleSwitch_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = ɵɵgetCurrentView();
        ɵɵelementStart(0, "input", 1, 0);
        ɵɵlistener("focus", function ToggleSwitch_Template_input_focus_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onFocus());
        })("blur", function ToggleSwitch_Template_input_blur_0_listener() {
          ɵɵrestoreView(_r1);
          return ɵɵresetView(ctx.onBlur());
        });
        ɵɵelementEnd();
        ɵɵelementStart(2, "div")(3, "div");
        ɵɵconditionalCreate(4, ToggleSwitch_Conditional_4_Template, 1, 4, "ng-container");
        ɵɵelementEnd()();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.cx("input"));
        ɵɵproperty("checked", ctx.checked())("pAutoFocus", ctx.autofocus);
        ɵɵattribute("id", ctx.inputId)("required", ctx.required() ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0)("aria-checked", ctx.checked())("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("name", ctx.name())("tabindex", ctx.tabindex)("data-pc-section", "hiddenInput");
        ɵɵadvance(2);
        ɵɵclassMap(ctx.cx("slider"));
        ɵɵattribute("data-pc-section", "slider");
        ɵɵadvance();
        ɵɵclassMap(ctx.cx("handle"));
        ɵɵadvance();
        ɵɵconditional(ctx.handleTemplate || ctx._handleTemplate ? 4 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, AutoFocus, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitch, [{
    type: Component,
    args: [{
      selector: "p-toggleswitch, p-toggleSwitch, p-toggle-switch",
      standalone: true,
      imports: [CommonModule, AutoFocus, SharedModule],
      template: `
        <input
            #input
            [attr.id]="inputId"
            type="checkbox"
            role="switch"
            [class]="cx('input')"
            [checked]="checked()"
            [attr.required]="required() ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            [attr.aria-checked]="checked()"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [attr.name]="name()"
            [attr.tabindex]="tabindex"
            (focus)="onFocus()"
            (blur)="onBlur()"
            [attr.data-pc-section]="'hiddenInput'"
            [pAutoFocus]="autofocus"
        />
        <div [class]="cx('slider')" [attr.data-pc-section]="'slider'">
            <div [class]="cx('handle')">
                @if (handleTemplate || _handleTemplate) {
                    <ng-container *ngTemplateOutlet="handleTemplate || _handleTemplate; context: { checked: checked() }" />
                }
            </div>
        </div>
    `,
      providers: [TOGGLESWITCH_VALUE_ACCESSOR, ToggleSwitchStyle],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[style]": "sx('root')",
        "[attr.data-pc-name]": "'toggleswitch'",
        "[attr.data-pc-section]": "'root'"
      }
    }]
  }], null, {
    styleClass: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    onChange: [{
      type: Output
    }],
    input: [{
      type: ViewChild,
      args: ["input"]
    }],
    handleTemplate: [{
      type: ContentChild,
      args: ["handle", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    onHostClick: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }]
  });
})();
var ToggleSwitchModule = class _ToggleSwitchModule {
  static ɵfac = function ToggleSwitchModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleSwitchModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _ToggleSwitchModule,
    imports: [ToggleSwitch, SharedModule],
    exports: [ToggleSwitch, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [ToggleSwitch, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleSwitchModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleSwitch, SharedModule],
      exports: [ToggleSwitch, SharedModule]
    }]
  }], null, null);
})();
export {
  TOGGLESWITCH_VALUE_ACCESSOR,
  ToggleSwitch,
  ToggleSwitchClasses,
  ToggleSwitchModule,
  ToggleSwitchStyle
};
//# sourceMappingURL=primeng_toggleswitch.js.map
