import {
  BaseComponent
} from "./chunk-MNAA6S3O.js";
import {
  BaseStyle
} from "./chunk-3XZT2HEB.js";
import "./chunk-DCRKS4SA.js";
import {
  SharedModule
} from "./chunk-4YGAGIGH.js";
import "./chunk-EXUXITB2.js";
import {
  CommonModule,
  NgClass,
  NgIf
} from "./chunk-QIB4AD5R.js";
import "./chunk-W2WIUP6R.js";
import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Injectable,
  Input,
  NgModule,
  Output,
  ViewEncapsulation,
  inject,
  setClassMetadata,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-GWCN73BT.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-MARUHEWW.js";
import "./chunk-4MWRP73S.js";

// node_modules/@primeuix/styles/dist/avatar/index.mjs
var style = "\n    .p-avatar {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        width: dt('avatar.width');\n        height: dt('avatar.height');\n        font-size: dt('avatar.font.size');\n        background: dt('avatar.background');\n        color: dt('avatar.color');\n        border-radius: dt('avatar.border.radius');\n    }\n\n    .p-avatar-image {\n        background: transparent;\n    }\n\n    .p-avatar-circle {\n        border-radius: 50%;\n    }\n\n    .p-avatar-circle img {\n        border-radius: 50%;\n    }\n\n    .p-avatar-icon {\n        font-size: dt('avatar.icon.size');\n        width: dt('avatar.icon.size');\n        height: dt('avatar.icon.size');\n    }\n\n    .p-avatar img {\n        width: 100%;\n        height: 100%;\n    }\n\n    .p-avatar-lg {\n        width: dt('avatar.lg.width');\n        height: dt('avatar.lg.width');\n        font-size: dt('avatar.lg.font.size');\n    }\n\n    .p-avatar-lg .p-avatar-icon {\n        font-size: dt('avatar.lg.icon.size');\n        width: dt('avatar.lg.icon.size');\n        height: dt('avatar.lg.icon.size');\n    }\n\n    .p-avatar-xl {\n        width: dt('avatar.xl.width');\n        height: dt('avatar.xl.width');\n        font-size: dt('avatar.xl.font.size');\n    }\n\n    .p-avatar-xl .p-avatar-icon {\n        font-size: dt('avatar.xl.icon.size');\n        width: dt('avatar.xl.icon.size');\n        height: dt('avatar.xl.icon.size');\n    }\n\n    .p-avatar-group {\n        display: flex;\n        align-items: center;\n    }\n\n    .p-avatar-group .p-avatar + .p-avatar {\n        margin-inline-start: dt('avatar.group.offset');\n    }\n\n    .p-avatar-group .p-avatar {\n        border: 2px solid dt('avatar.group.border.color');\n    }\n\n    .p-avatar-group .p-avatar-lg + .p-avatar-lg {\n        margin-inline-start: dt('avatar.lg.group.offset');\n    }\n\n    .p-avatar-group .p-avatar-xl + .p-avatar-xl {\n        margin-inline-start: dt('avatar.xl.group.offset');\n    }\n";

// node_modules/primeng/fesm2022/primeng-avatar.mjs
var _c0 = ["*"];
function Avatar_span_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵclassMap(ctx_r0.cx("label"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r0.label);
  }
}
function Avatar_ng_template_2_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 4);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r0.icon);
    ɵɵproperty("ngClass", ctx_r0.cx("icon"));
  }
}
function Avatar_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Avatar_ng_template_2_span_0_Template, 1, 3, "span", 3);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    const imageTemplate_r2 = ɵɵreference(5);
    ɵɵproperty("ngIf", ctx_r0.icon)("ngIfElse", imageTemplate_r2);
  }
}
function Avatar_ng_template_4_img_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "img", 6);
    ɵɵlistener("error", function Avatar_ng_template_4_img_0_Template_img_error_0_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r0 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r0.imageError($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext(2);
    ɵɵproperty("src", ctx_r0.image, ɵɵsanitizeUrl);
    ɵɵattribute("aria-label", ctx_r0.ariaLabel);
  }
}
function Avatar_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, Avatar_ng_template_4_img_0_Template, 1, 2, "img", 5);
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngIf", ctx_r0.image);
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-avatar p-component", {
    "p-avatar-image": instance.image != null,
    "p-avatar-circle": instance.shape === "circle",
    "p-avatar-lg": instance.size === "large",
    "p-avatar-xl": instance.size === "xlarge"
  }],
  label: "p-avatar-label",
  icon: "p-avatar-icon"
};
var AvatarStyle = class _AvatarStyle extends BaseStyle {
  name = "avatar";
  theme = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAvatarStyle_BaseFactory;
    return function AvatarStyle_Factory(__ngFactoryType__) {
      return (ɵAvatarStyle_BaseFactory || (ɵAvatarStyle_BaseFactory = ɵɵgetInheritedFactory(_AvatarStyle)))(__ngFactoryType__ || _AvatarStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _AvatarStyle,
    factory: _AvatarStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarStyle, [{
    type: Injectable
  }], null, null);
})();
var AvatarClasses;
(function(AvatarClasses2) {
  AvatarClasses2["root"] = "p-avatar";
  AvatarClasses2["label"] = "p-avatar-label";
  AvatarClasses2["icon"] = "p-avatar-icon";
})(AvatarClasses || (AvatarClasses = {}));
var Avatar = class _Avatar extends BaseComponent {
  /**
   * Defines the text to display.
   * @group Props
   */
  label;
  /**
   * Defines the icon to display.
   * @group Props
   */
  icon;
  /**
   * Defines the image to display.
   * @group Props
   */
  image;
  /**
   * Size of the element.
   * @group Props
   */
  size = "normal";
  /**
   * Shape of the element.
   * @group Props
   */
  shape = "square";
  /**
   * Class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Establishes a string value that labels the component.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  _componentStyle = inject(AvatarStyle);
  imageError(event) {
    this.onImageError.emit(event);
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAvatar_BaseFactory;
    return function Avatar_Factory(__ngFactoryType__) {
      return (ɵAvatar_BaseFactory || (ɵAvatar_BaseFactory = ɵɵgetInheritedFactory(_Avatar)))(__ngFactoryType__ || _Avatar);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Avatar,
    selectors: [["p-avatar"]],
    hostVars: 5,
    hostBindings: function Avatar_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-pc-name", "avatar")("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledBy);
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      label: "label",
      icon: "icon",
      image: "image",
      size: "size",
      shape: "shape",
      styleClass: "styleClass",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy"
    },
    outputs: {
      onImageError: "onImageError"
    },
    features: [ɵɵProvidersFeature([AvatarStyle]), ɵɵInheritDefinitionFeature],
    ngContentSelectors: _c0,
    decls: 6,
    vars: 2,
    consts: [["iconTemplate", ""], ["imageTemplate", ""], [3, "class", 4, "ngIf", "ngIfElse"], [3, "class", "ngClass", 4, "ngIf", "ngIfElse"], [3, "ngClass"], [3, "src", "error", 4, "ngIf"], [3, "error", "src"]],
    template: function Avatar_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
        ɵɵtemplate(1, Avatar_span_1_Template, 2, 3, "span", 2)(2, Avatar_ng_template_2_Template, 1, 2, "ng-template", null, 0, ɵɵtemplateRefExtractor)(4, Avatar_ng_template_4_Template, 1, 1, "ng-template", null, 1, ɵɵtemplateRefExtractor);
      }
      if (rf & 2) {
        const iconTemplate_r4 = ɵɵreference(3);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.label)("ngIfElse", iconTemplate_r4);
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Avatar, [{
    type: Component,
    args: [{
      selector: "p-avatar",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <ng-content></ng-content>
        <span [class]="cx('label')" *ngIf="label; else iconTemplate">{{ label }}</span>
        <ng-template #iconTemplate><span [class]="icon" [ngClass]="cx('icon')" *ngIf="icon; else imageTemplate"></span></ng-template>
        <ng-template #imageTemplate> <img [src]="image" *ngIf="image" (error)="imageError($event)" [attr.aria-label]="ariaLabel" /></ng-template>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-pc-name]": '"avatar"',
        "[attr.aria-label]": "ariaLabel",
        "[attr.aria-labelledby]": "ariaLabelledBy"
      },
      providers: [AvatarStyle]
    }]
  }], null, {
    label: [{
      type: Input
    }],
    icon: [{
      type: Input
    }],
    image: [{
      type: Input
    }],
    size: [{
      type: Input
    }],
    shape: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    onImageError: [{
      type: Output
    }]
  });
})();
var AvatarModule = class _AvatarModule {
  static ɵfac = function AvatarModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvatarModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _AvatarModule,
    imports: [Avatar, SharedModule],
    exports: [Avatar, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Avatar, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvatarModule, [{
    type: NgModule,
    args: [{
      imports: [Avatar, SharedModule],
      exports: [Avatar, SharedModule]
    }]
  }], null, null);
})();
export {
  Avatar,
  AvatarClasses,
  AvatarModule,
  AvatarStyle
};
//# sourceMappingURL=primeng_avatar.js.map
