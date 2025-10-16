import {
  ProgressBar
} from "./chunk-GJXD27U4.js";
import {
  Message
} from "./chunk-PVXM7Z25.js";
import {
  Button
} from "./chunk-XYHC3BRH.js";
import {
  Badge
} from "./chunk-7UJ6UPW4.js";
import "./chunk-ONQFUGA2.js";
import "./chunk-QQ7HCBDO.js";
import "./chunk-VUXHBR7Y.js";
import "./chunk-PSFGPXRF.js";
import {
  PlusIcon,
  TimesIcon,
  UploadIcon
} from "./chunk-RIG3C35J.js";
import "./chunk-ZN64Z63N.js";
import {
  BaseComponent
} from "./chunk-3X7R6USB.js";
import {
  BaseStyle
} from "./chunk-AY5DPW7U.js";
import {
  PrimeTemplate,
  SharedModule,
  TranslationKeys
} from "./chunk-VY6QECRP.js";
import "./chunk-RDLP67JE.js";
import "./chunk-P5OQKAHD.js";
import {
  DomSanitizer
} from "./chunk-P4MYCUEC.js";
import {
  HttpClient,
  HttpEventType
} from "./chunk-DOFC62RF.js";
import "./chunk-S6LLAXY2.js";
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
  input,
  numberAttribute,
  output,
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
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction5,
  ɵɵpureFunction8,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-GWCN73BT.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-MARUHEWW.js";
import "./chunk-UKZYY4TH.js";
import {
  O,
  W
} from "./chunk-RK2QIU6W.js";
import "./chunk-4MWRP73S.js";

// node_modules/@primeuix/styles/dist/fileupload/index.mjs
var style = "\n    .p-fileupload input[type='file'] {\n        display: none;\n    }\n\n    .p-fileupload-advanced {\n        border: 1px solid dt('fileupload.border.color');\n        border-radius: dt('fileupload.border.radius');\n        background: dt('fileupload.background');\n        color: dt('fileupload.color');\n    }\n\n    .p-fileupload-header {\n        display: flex;\n        align-items: center;\n        padding: dt('fileupload.header.padding');\n        background: dt('fileupload.header.background');\n        color: dt('fileupload.header.color');\n        border-style: solid;\n        border-width: dt('fileupload.header.border.width');\n        border-color: dt('fileupload.header.border.color');\n        border-radius: dt('fileupload.header.border.radius');\n        gap: dt('fileupload.header.gap');\n    }\n\n    .p-fileupload-content {\n        border: 1px solid transparent;\n        display: flex;\n        flex-direction: column;\n        gap: dt('fileupload.content.gap');\n        transition: border-color dt('fileupload.transition.duration');\n        padding: dt('fileupload.content.padding');\n    }\n\n    .p-fileupload-content .p-progressbar {\n        width: 100%;\n        height: dt('fileupload.progressbar.height');\n    }\n\n    .p-fileupload-file-list {\n        display: flex;\n        flex-direction: column;\n        gap: dt('fileupload.filelist.gap');\n    }\n\n    .p-fileupload-file {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        padding: dt('fileupload.file.padding');\n        border-block-end: 1px solid dt('fileupload.file.border.color');\n        gap: dt('fileupload.file.gap');\n    }\n\n    .p-fileupload-file:last-child {\n        border-block-end: 0;\n    }\n\n    .p-fileupload-file-info {\n        display: flex;\n        flex-direction: column;\n        gap: dt('fileupload.file.info.gap');\n    }\n\n    .p-fileupload-file-thumbnail {\n        flex-shrink: 0;\n    }\n\n    .p-fileupload-file-actions {\n        margin-inline-start: auto;\n    }\n\n    .p-fileupload-highlight {\n        border: 1px dashed dt('fileupload.content.highlight.border.color');\n    }\n\n    .p-fileupload-basic .p-message {\n        margin-block-end: dt('fileupload.basic.gap');\n    }\n\n    .p-fileupload-basic-content {\n        display: flex;\n        flex-wrap: wrap;\n        align-items: center;\n        gap: dt('fileupload.basic.gap');\n    }\n";

// node_modules/primeng/fesm2022/primeng-fileupload.mjs
var _c0 = ["pFileContent", ""];
var _c1 = (a0, a1, a2) => ({
  class: a0,
  file: a1,
  index: a2
});
var _forTrack0 = ($index, $item) => ($item == null ? null : $item.name) + "-" + $index;
function FileContent_For_1_ng_template_10_Conditional_0_0_ng_template_0_Template(rf, ctx) {
}
function FileContent_For_1_ng_template_10_Conditional_0_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileContent_For_1_ng_template_10_Conditional_0_0_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileContent_For_1_ng_template_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileContent_For_1_ng_template_10_Conditional_0_0_Template, 1, 0, null, 6);
  }
  if (rf & 2) {
    const iconClass_r4 = ɵɵnextContext().class;
    const ctx_r4 = ɵɵnextContext();
    const file_r6 = ctx_r4.$implicit;
    const ɵ$index_1_r2 = ctx_r4.$index;
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngTemplateOutlet", ctx_r2.fileRemoveIconTemplate())("ngTemplateOutletContext", ɵɵpureFunction3(2, _c1, iconClass_r4, file_r6, ɵ$index_1_r2));
  }
}
function FileContent_For_1_ng_template_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 7);
  }
  if (rf & 2) {
    const iconClass_r4 = ɵɵnextContext().class;
    ɵɵclassMap(iconClass_r4);
    ɵɵattribute("aria-hidden", true);
  }
}
function FileContent_For_1_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, FileContent_For_1_ng_template_10_Conditional_0_Template, 1, 6)(1, FileContent_For_1_ng_template_10_Conditional_1_Template, 1, 3, ":svg:svg", 5);
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r2.fileRemoveIconTemplate() ? 0 : 1);
  }
}
function FileContent_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵelement(1, "img", 2);
    ɵɵelementStart(2, "div")(3, "div");
    ɵɵtext(4);
    ɵɵelementEnd();
    ɵɵelementStart(5, "span");
    ɵɵtext(6);
    ɵɵelementEnd()();
    ɵɵelement(7, "p-badge", 3);
    ɵɵelementStart(8, "div")(9, "p-button", 4);
    ɵɵlistener("onClick", function FileContent_For_1_Template_p_button_onClick_9_listener($event) {
      const ɵ$index_1_r2 = ɵɵrestoreView(_r1).$index;
      const ctx_r2 = ɵɵnextContext();
      return ɵɵresetView(ctx_r2.onRemoveClick($event, ɵ$index_1_r2));
    });
    ɵɵtemplate(10, FileContent_For_1_ng_template_10_Template, 2, 1, "ng-template", null, 0, ɵɵtemplateRefExtractor);
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const file_r6 = ctx.$implicit;
    const ctx_r2 = ɵɵnextContext();
    ɵɵclassMap(ctx_r2.cx("file"));
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("fileThumbnail"));
    ɵɵproperty("src", file_r6.objectURL, ɵɵsanitizeUrl)("width", ctx_r2.previewWidth());
    ɵɵattribute("alt", file_r6.name);
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("fileInfo"));
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("fileName"));
    ɵɵadvance();
    ɵɵtextInterpolate(file_r6.name);
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("fileSize"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r2.formatSize(file_r6.size));
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("pcFileBadge"));
    ɵɵproperty("value", ctx_r2.badgeValue())("severity", ctx_r2.badgeSeverity());
    ɵɵadvance();
    ɵɵclassMap(ctx_r2.cx("fileActions"));
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r2.cx("pcFileRemoveButton"));
  }
}
var _c2 = ["file"];
var _c3 = ["header"];
var _c4 = ["content"];
var _c5 = ["toolbar"];
var _c6 = ["chooseicon"];
var _c7 = ["filelabel"];
var _c8 = ["uploadicon"];
var _c9 = ["cancelicon"];
var _c10 = ["empty"];
var _c11 = ["advancedfileinput"];
var _c12 = ["basicfileinput"];
var _c13 = (a0, a1, a2, a3, a4) => ({
  $implicit: a0,
  uploadedFiles: a1,
  chooseCallback: a2,
  clearCallback: a3,
  uploadCallback: a4
});
var _c14 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({
  $implicit: a0,
  uploadedFiles: a1,
  chooseCallback: a2,
  clearCallback: a3,
  removeUploadedFileCallback: a4,
  removeFileCallback: a5,
  progress: a6,
  messages: a7
});
var _c15 = (a0) => ({
  $implicit: a0
});
function FileUpload_div_0_ng_container_4_ng_template_4_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵclassMap(ctx_r1.chooseIcon);
    ɵɵattribute("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 15);
  }
  if (rf & 2) {
    ɵɵattribute("aria-label", true)("data-pc-section", "chooseicon");
  }
}
function FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_span_2_1_Template, 1, 0, null, 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵattribute("aria-label", true)("data-pc-section", "chooseicon");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.chooseIconTemplate || ctx_r1._chooseIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1__svg_svg_1_Template, 1, 2, "svg", 14)(2, FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_span_2_Template, 2, 3, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.chooseIconTemplate && !ctx_r1._chooseIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.chooseIconTemplate || ctx_r1._chooseIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_ng_container_4_ng_template_4_span_0_Template, 1, 4, "span", 5)(1, FileUpload_div_0_ng_container_4_ng_template_4_ng_container_1_Template, 3, 2, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r1.chooseIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.chooseIcon);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngClass", ctx_r1.uploadIcon);
    ɵɵattribute("aria-hidden", true);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 20);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_span_2_1_Template, 1, 0, null, 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.uploadIconTemplate || ctx_r1._uploadIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1__svg_svg_1_Template, 1, 0, "svg", 19)(2, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_span_2_Template, 2, 2, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.uploadIconTemplate && !ctx_r1._uploadIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.uploadIconTemplate || ctx_r1._uploadIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_span_0_Template, 1, 2, "span", 17)(1, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_ng_container_1_Template, 3, 2, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", ctx_r1.uploadIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.uploadIcon);
  }
}
function FileUpload_div_0_ng_container_4_p_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 16);
    ɵɵlistener("onClick", function FileUpload_div_0_ng_container_4_p_button_6_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r4);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.upload());
    });
    ɵɵtemplate(1, FileUpload_div_0_ng_container_4_p_button_6_ng_template_1_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("label", ctx_r1.uploadButtonLabel)("disabled", !ctx_r1.hasFiles() || ctx_r1.isFileLimitExceeded())("styleClass", ctx_r1.cn(ctx_r1.cx("pcUploadButton"), ctx_r1.uploadStyleClass))("buttonProps", ctx_r1.uploadButtonProps);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 18);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵproperty("ngClass", ctx_r1.cancelIcon);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 22);
  }
  if (rf & 2) {
    ɵɵattribute("aria-hidden", true);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtemplate(1, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_span_2_1_Template, 1, 0, null, 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(6);
    ɵɵattribute("aria-hidden", true);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.cancelIconTemplate || ctx_r1._cancelIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1__svg_svg_1_Template, 1, 1, "svg", 21)(2, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_span_2_Template, 2, 2, "span", 8);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.cancelIconTemplate && !ctx_r1._cancelIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.cancelIconTemplate || ctx_r1._cancelIconTemplate);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_span_0_Template, 1, 1, "span", 17)(1, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_ng_container_1_Template, 3, 2, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngIf", ctx_r1.cancelIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.cancelIcon);
  }
}
function FileUpload_div_0_ng_container_4_p_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-button", 16);
    ɵɵlistener("onClick", function FileUpload_div_0_ng_container_4_p_button_7_Template_p_button_onClick_0_listener() {
      ɵɵrestoreView(_r5);
      const ctx_r1 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r1.clear());
    });
    ɵɵtemplate(1, FileUpload_div_0_ng_container_4_p_button_7_ng_template_1_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("label", ctx_r1.cancelButtonLabel)("disabled", !ctx_r1.hasFiles() || ctx_r1.uploading)("styleClass", ctx_r1.cn(ctx_r1.cx("pcCancelButton"), ctx_r1.cancelStyleClass))("buttonProps", ctx_r1.cancelButtonProps);
  }
}
function FileUpload_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = ɵɵgetCurrentView();
    ɵɵelementContainerStart(0);
    ɵɵelementStart(1, "p-button", 12);
    ɵɵlistener("focus", function FileUpload_div_0_ng_container_4_Template_p_button_focus_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onFocus());
    })("blur", function FileUpload_div_0_ng_container_4_Template_p_button_blur_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onBlur());
    })("onClick", function FileUpload_div_0_ng_container_4_Template_p_button_onClick_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.choose());
    })("keydown.enter", function FileUpload_div_0_ng_container_4_Template_p_button_keydown_enter_1_listener() {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.choose());
    });
    ɵɵelementStart(2, "input", 7, 0);
    ɵɵlistener("change", function FileUpload_div_0_ng_container_4_Template_input_change_2_listener($event) {
      ɵɵrestoreView(_r3);
      const ctx_r1 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r1.onFileSelect($event));
    });
    ɵɵelementEnd();
    ɵɵtemplate(4, FileUpload_div_0_ng_container_4_ng_template_4_Template, 2, 2, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementEnd();
    ɵɵtemplate(6, FileUpload_div_0_ng_container_4_p_button_6_Template, 3, 4, "p-button", 13)(7, FileUpload_div_0_ng_container_4_p_button_7_Template, 3, 4, "p-button", 13);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵadvance();
    ɵɵproperty("styleClass", ctx_r1.cn(ctx_r1.cx("pcChooseButton"), ctx_r1.chooseStyleClass))("disabled", ctx_r1.disabled || ctx_r1.isChooseDisabled())("label", ctx_r1.chooseButtonLabel)("buttonProps", ctx_r1.chooseButtonProps);
    ɵɵattribute("data-pc-section", "choosebutton");
    ɵɵadvance();
    ɵɵproperty("multiple", ctx_r1.multiple)("accept", ctx_r1.accept)("disabled", ctx_r1.disabled || ctx_r1.isChooseDisabled());
    ɵɵattribute("aria-label", ctx_r1.browseFilesLabel)("title", "")("data-pc-section", "input");
    ɵɵadvance(4);
    ɵɵproperty("ngIf", !ctx_r1.auto && ctx_r1.showUploadButton);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.auto && ctx_r1.showCancelButton);
  }
}
function FileUpload_div_0_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FileUpload_div_0_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FileUpload_div_0_Conditional_9_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FileUpload_div_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_Conditional_9_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction8(2, _c14, ctx_r1.files, ctx_r1.uploadedFiles, ctx_r1.choose.bind(ctx_r1), ctx_r1.clear.bind(ctx_r1), ctx_r1.removeUploadedFile.bind(ctx_r1), ctx_r1.remove.bind(ctx_r1), ctx_r1.progress, ctx_r1.msgs));
  }
}
function FileUpload_div_0_Conditional_10_p_progressbar_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-progressbar", 26);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("value", ctx_r1.progress)("showValue", false);
  }
}
function FileUpload_div_0_Conditional_10_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-message", 24);
  }
  if (rf & 2) {
    const message_r6 = ctx.$implicit;
    ɵɵproperty("severity", message_r6.severity)("text", message_r6.text);
  }
}
function FileUpload_div_0_Conditional_10_Conditional_3_ng_template_1_Template(rf, ctx) {
}
function FileUpload_div_0_Conditional_10_Conditional_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 29);
    ɵɵlistener("onRemove", function FileUpload_div_0_Conditional_10_Conditional_3_Conditional_2_Template_div_onRemove_0_listener($event) {
      ɵɵrestoreView(_r7);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onRemoveClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("files", ctx_r1.files)("badgeValue", ctx_r1.pendingLabel)("previewWidth", ctx_r1.previewWidth)("fileRemoveIconTemplate", ctx_r1.cancelIconTemplate || ctx_r1._cancelIconTemplate);
  }
}
function FileUpload_div_0_Conditional_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, FileUpload_div_0_Conditional_10_Conditional_3_ng_template_1_Template, 0, 0, "ng-template", 27);
    ɵɵconditionalCreate(2, FileUpload_div_0_Conditional_10_Conditional_3_Conditional_2_Template, 1, 4, "div", 28);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("fileList"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.files)("ngForTemplate", ctx_r1.fileTemplate || ctx_r1._fileTemplate);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.fileTemplate && !ctx_r1._fileTemplate ? 2 : -1);
  }
}
function FileUpload_div_0_Conditional_10_Conditional_4_ng_template_1_Template(rf, ctx) {
}
function FileUpload_div_0_Conditional_10_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 31);
    ɵɵlistener("onRemove", function FileUpload_div_0_Conditional_10_Conditional_4_Conditional_2_Template_div_onRemove_0_listener($event) {
      ɵɵrestoreView(_r8);
      const ctx_r1 = ɵɵnextContext(4);
      return ɵɵresetView(ctx_r1.onRemoveUploadedFileClick($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("files", ctx_r1.uploadedFiles)("badgeValue", ctx_r1.completedLabel())("previewWidth", ctx_r1.previewWidth)("fileRemoveIconTemplate", ctx_r1.cancelIconTemplate || ctx_r1._cancelIconTemplate);
  }
}
function FileUpload_div_0_Conditional_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div");
    ɵɵtemplate(1, FileUpload_div_0_Conditional_10_Conditional_4_ng_template_1_Template, 0, 0, "ng-template", 27);
    ɵɵconditionalCreate(2, FileUpload_div_0_Conditional_10_Conditional_4_Conditional_2_Template, 1, 4, "div", 30);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵclassMap(ctx_r1.cx("fileList"));
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r1.uploadedFiles)("ngForTemplate", ctx_r1.fileTemplate || ctx_r1._fileTemplate);
    ɵɵadvance();
    ɵɵconditional(!ctx_r1.fileTemplate && !ctx_r1._fileTemplate ? 2 : -1);
  }
}
function FileUpload_div_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_Conditional_10_p_progressbar_0_Template, 1, 2, "p-progressbar", 23);
    ɵɵrepeaterCreate(1, FileUpload_div_0_Conditional_10_For_2_Template, 1, 2, "p-message", 24, ɵɵrepeaterTrackByIdentity);
    ɵɵconditionalCreate(3, FileUpload_div_0_Conditional_10_Conditional_3_Template, 3, 5, "div", 25);
    ɵɵconditionalCreate(4, FileUpload_div_0_Conditional_10_Conditional_4_Template, 3, 5, "div", 25);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngIf", ctx_r1.hasFiles());
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.msgs);
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.hasFiles() ? 3 : -1);
    ɵɵadvance();
    ɵɵconditional(ctx_r1.hasUploadedFiles() ? 4 : -1);
  }
}
function FileUpload_div_0_Conditional_11_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FileUpload_div_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_0_Conditional_11_ng_container_0_Template, 1, 0, "ng-container", 10);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.emptyTemplate || ctx_r1._emptyTemplate);
  }
}
function FileUpload_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 6)(1, "input", 7, 0);
    ɵɵlistener("change", function FileUpload_div_0_Template_input_change_1_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFileSelect($event));
    });
    ɵɵelementEnd();
    ɵɵelementStart(3, "div");
    ɵɵtemplate(4, FileUpload_div_0_ng_container_4_Template, 8, 13, "ng-container", 8)(5, FileUpload_div_0_ng_container_5_Template, 1, 0, "ng-container", 9)(6, FileUpload_div_0_ng_container_6_Template, 1, 0, "ng-container", 10);
    ɵɵelementEnd();
    ɵɵelementStart(7, "div", 11, 1);
    ɵɵlistener("dragenter", function FileUpload_div_0_Template_div_dragenter_7_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDragEnter($event));
    })("dragleave", function FileUpload_div_0_Template_div_dragleave_7_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDragLeave($event));
    })("drop", function FileUpload_div_0_Template_div_drop_7_listener($event) {
      ɵɵrestoreView(_r1);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onDrop($event));
    });
    ɵɵconditionalCreate(9, FileUpload_div_0_Conditional_9_Template, 1, 11, "ng-container")(10, FileUpload_div_0_Conditional_10_Template, 5, 3);
    ɵɵconditionalCreate(11, FileUpload_div_0_Conditional_11_Template, 1, 1, "ng-container");
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    ɵɵproperty("ngStyle", ctx_r1.style);
    ɵɵattribute("data-pc-name", "fileupload")("data-pc-section", "root");
    ɵɵadvance();
    ɵɵstyleProp("display", "none");
    ɵɵproperty("multiple", ctx_r1.multiple)("accept", ctx_r1.accept)("disabled", ctx_r1.disabled || ctx_r1.isChooseDisabled());
    ɵɵattribute("aria-label", ctx_r1.browseFilesLabel)("title", "")("data-pc-section", "input");
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r1.cx("header"));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.headerTemplate && !ctx_r1._headerTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.headerTemplate || ctx_r1._headerTemplate)("ngTemplateOutletContext", ɵɵpureFunction5(24, _c13, ctx_r1.files, ctx_r1.uploadedFiles, ctx_r1.choose.bind(ctx_r1), ctx_r1.clear.bind(ctx_r1), ctx_r1.upload.bind(ctx_r1)));
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.toolbarTemplate || ctx_r1._toolbarTemplate);
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("content"));
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance(2);
    ɵɵconditional(ctx_r1.contentTemplate || ctx_r1._contentTemplate ? 9 : 10);
    ɵɵadvance(2);
    ɵɵconditional((ctx_r1.emptyTemplate || ctx_r1._emptyTemplate) && !ctx_r1.hasFiles() && !ctx_r1.hasUploadedFiles() ? 11 : -1);
  }
}
function FileUpload_div_1_For_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "p-message", 24);
  }
  if (rf & 2) {
    const message_r10 = ctx.$implicit;
    ɵɵproperty("severity", message_r10.severity)("text", message_r10.text);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_0_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 35);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ctx_r1.uploadIcon);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 20);
  }
  if (rf & 2) {
    ɵɵclassMap("p-button-icon p-button-icon-left");
  }
}
function FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_span_2_1_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_span_2_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_span_2_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 38);
    ɵɵtemplate(1, FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_span_2_1_Template, 1, 0, null, 10);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1._uploadIconTemplate || ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1__svg_svg_1_Template, 1, 2, "svg", 36)(2, FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_span_2_Template, 2, 1, "span", 37);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.uploadIconTemplate && !ctx_r1._uploadIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1._uploadIconTemplate || ctx_r1.uploadIconTemplate);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_1_ng_template_5_Conditional_0_span_0_Template, 1, 1, "span", 34)(1, FileUpload_div_1_ng_template_5_Conditional_0_ng_container_1_Template, 3, 2, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r1.uploadIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.uploadIcon);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_1_span_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 40);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵproperty("ngClass", ctx_r1.chooseIcon);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1__svg_svg_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵnamespaceSVG();
    ɵɵelement(0, "svg", 15);
  }
  if (rf & 2) {
    ɵɵattribute("data-pc-section", "uploadicon");
  }
}
function FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1__svg_svg_1_Template, 1, 1, "svg", 14)(2, FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1_2_Template, 1, 0, null, 10);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.chooseIconTemplate && !ctx_r1._chooseIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.chooseIconTemplate || ctx_r1._chooseIconTemplate);
  }
}
function FileUpload_div_1_ng_template_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_1_ng_template_5_Conditional_1_span_0_Template, 1, 1, "span", 39)(1, FileUpload_div_1_ng_template_5_Conditional_1_ng_container_1_Template, 3, 2, "ng-container", 8);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngIf", ctx_r1.chooseIcon);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r1.chooseIcon);
  }
}
function FileUpload_div_1_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, FileUpload_div_1_ng_template_5_Conditional_0_Template, 2, 2)(1, FileUpload_div_1_ng_template_5_Conditional_1_Template, 2, 2);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(ctx_r1.hasFiles() && !ctx_r1.auto ? 0 : 1);
  }
}
function FileUpload_div_1_Conditional_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span");
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵadvance();
    ɵɵtextInterpolate1(" ", ctx_r1.basicFileChosenLabel(), " ");
  }
}
function FileUpload_div_1_Conditional_9_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function FileUpload_div_1_Conditional_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, FileUpload_div_1_Conditional_9_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 9);
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(3);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.fileLabelTemplate || ctx_r1._fileLabelTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c15, ctx_r1.files));
  }
}
function FileUpload_div_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵconditionalCreate(0, FileUpload_div_1_Conditional_9_Conditional_0_Template, 2, 1, "span")(1, FileUpload_div_1_Conditional_9_Conditional_1_Template, 1, 4, "ng-container");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵconditional(!ctx_r1.fileLabelTemplate && !ctx_r1._fileLabelTemplate ? 0 : 1);
  }
}
function FileUpload_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div");
    ɵɵrepeaterCreate(1, FileUpload_div_1_For_2_Template, 1, 2, "p-message", 24, ɵɵrepeaterTrackByIdentity);
    ɵɵelementStart(3, "div")(4, "p-button", 32);
    ɵɵlistener("onClick", function FileUpload_div_1_Template_p_button_onClick_4_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onBasicUploaderClick());
    })("keydown", function FileUpload_div_1_Template_p_button_keydown_4_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onBasicKeydown($event));
    });
    ɵɵtemplate(5, FileUpload_div_1_ng_template_5_Template, 2, 1, "ng-template", null, 2, ɵɵtemplateRefExtractor);
    ɵɵelementStart(7, "input", 33, 3);
    ɵɵlistener("change", function FileUpload_div_1_Template_input_change_7_listener($event) {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFileSelect($event));
    })("focus", function FileUpload_div_1_Template_input_focus_7_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onFocus());
    })("blur", function FileUpload_div_1_Template_input_blur_7_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r1 = ɵɵnextContext();
      return ɵɵresetView(ctx_r1.onBlur());
    });
    ɵɵelementEnd()();
    ɵɵconditionalCreate(9, FileUpload_div_1_Conditional_9_Template, 2, 1);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cn(ctx_r1.cx("root"), ctx_r1.styleClass));
    ɵɵattribute("data-pc-name", "fileupload");
    ɵɵadvance();
    ɵɵrepeater(ctx_r1.msgs);
    ɵɵadvance(2);
    ɵɵclassMap(ctx_r1.cx("basicContent"));
    ɵɵadvance();
    ɵɵstyleMap(ctx_r1.style);
    ɵɵproperty("styleClass", ctx_r1.cn(ctx_r1.cx("pcChooseButton"), ctx_r1.chooseStyleClass))("disabled", ctx_r1.disabled)("label", ctx_r1.chooseButtonLabel)("buttonProps", ctx_r1.chooseButtonProps);
    ɵɵadvance(3);
    ɵɵproperty("accept", ctx_r1.accept)("multiple", ctx_r1.multiple)("disabled", ctx_r1.disabled);
    ɵɵattribute("aria-label", ctx_r1.browseFilesLabel)("data-pc-section", "input");
    ɵɵadvance(2);
    ɵɵconditional(!ctx_r1.auto ? 9 : -1);
  }
}
var classes = {
  root: ({
    instance
  }) => `p-fileupload p-fileupload-${instance.mode} p-component`,
  header: "p-fileupload-header",
  pcChooseButton: "p-fileupload-choose-button",
  pcUploadButton: "p-fileupload-upload-button",
  pcCancelButton: "p-fileupload-cancel-button",
  content: "p-fileupload-content",
  fileList: "p-fileupload-file-list",
  file: "p-fileupload-file",
  fileThumbnail: "p-fileupload-file-thumbnail",
  fileInfo: "p-fileupload-file-info",
  fileName: "p-fileupload-file-name",
  fileSize: "p-fileupload-file-size",
  pcFileBadge: "p-fileupload-file-badge",
  fileActions: "p-fileupload-file-actions",
  pcFileRemoveButton: "p-fileupload-file-remove-button",
  basicContent: "p-fileupload-basic-content"
};
var FileUploadStyle = class _FileUploadStyle extends BaseStyle {
  name = "fileupload";
  theme = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵFileUploadStyle_BaseFactory;
    return function FileUploadStyle_Factory(__ngFactoryType__) {
      return (ɵFileUploadStyle_BaseFactory || (ɵFileUploadStyle_BaseFactory = ɵɵgetInheritedFactory(_FileUploadStyle)))(__ngFactoryType__ || _FileUploadStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _FileUploadStyle,
    factory: _FileUploadStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadStyle, [{
    type: Injectable
  }], null, null);
})();
var FileUploadClasses;
(function(FileUploadClasses2) {
  FileUploadClasses2["root"] = "p-fileupload";
  FileUploadClasses2["header"] = "p-fileupload-header";
  FileUploadClasses2["pcChooseButton"] = "p-fileupload-choose-button";
  FileUploadClasses2["pcUploadButton"] = "p-fileupload-upload-button";
  FileUploadClasses2["pcCancelButton"] = "p-fileupload-cancel-button";
  FileUploadClasses2["content"] = "p-fileupload-content";
  FileUploadClasses2["fileList"] = "p-fileupload-file-list";
  FileUploadClasses2["file"] = "p-fileupload-file";
  FileUploadClasses2["fileThumbnail"] = "p-fileupload-file-thumbnail";
  FileUploadClasses2["fileInfo"] = "p-fileupload-file-info";
  FileUploadClasses2["fileName"] = "p-fileupload-file-name";
  FileUploadClasses2["fileSize"] = "p-fileupload-file-size";
  FileUploadClasses2["pcFileBadge"] = "p-fileupload-file-badge";
  FileUploadClasses2["fileActions"] = "p-fileupload-file-actions";
  FileUploadClasses2["pcFileRemoveButton"] = "p-fileupload-file-remove-button";
  FileUploadClasses2["basicContent"] = "p-fileupload-basic-content";
})(FileUploadClasses || (FileUploadClasses = {}));
var FileContent = class _FileContent extends BaseComponent {
  _componentStyle = inject(FileUploadStyle);
  onRemove = output();
  files = input(...ngDevMode ? [void 0, {
    debugName: "files"
  }] : []);
  badgeSeverity = input("warn", ...ngDevMode ? [{
    debugName: "badgeSeverity"
  }] : []);
  badgeValue = input(...ngDevMode ? [void 0, {
    debugName: "badgeValue"
  }] : []);
  previewWidth = input(50, ...ngDevMode ? [{
    debugName: "previewWidth"
  }] : []);
  fileRemoveIconTemplate = input(...ngDevMode ? [void 0, {
    debugName: "fileRemoveIconTemplate"
  }] : []);
  onRemoveClick(event, index) {
    this.onRemove.emit({
      event,
      index
    });
  }
  formatSize(bytes) {
    const k = 1024;
    const dm = 3;
    const sizes = this.config.getTranslation(TranslationKeys.FILE_SIZE_TYPES);
    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = (bytes / Math.pow(k, i)).toFixed(dm);
    return `${formattedSize} ${sizes[i]}`;
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵFileContent_BaseFactory;
    return function FileContent_Factory(__ngFactoryType__) {
      return (ɵFileContent_BaseFactory || (ɵFileContent_BaseFactory = ɵɵgetInheritedFactory(_FileContent)))(__ngFactoryType__ || _FileContent);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _FileContent,
    selectors: [["", "pFileContent", ""]],
    inputs: {
      files: [1, "files"],
      badgeSeverity: [1, "badgeSeverity"],
      badgeValue: [1, "badgeValue"],
      previewWidth: [1, "previewWidth"],
      fileRemoveIconTemplate: [1, "fileRemoveIconTemplate"]
    },
    outputs: {
      onRemove: "onRemove"
    },
    features: [ɵɵProvidersFeature([FileUploadStyle]), ɵɵInheritDefinitionFeature],
    attrs: _c0,
    decls: 2,
    vars: 0,
    consts: [["icon", ""], [3, "class"], ["role", "presentation", 3, "src", "width"], [3, "value", "severity"], ["text", "", "rounded", "", "severity", "danger", 3, "onClick", "styleClass"], ["data-p-icon", "times", 3, "class"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "times"]],
    template: function FileContent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵrepeaterCreate(0, FileContent_For_1_Template, 12, 22, "div", 1, _forTrack0);
      }
      if (rf & 2) {
        ɵɵrepeater(ctx.files());
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, Badge, Button, TimesIcon],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileContent, [{
    type: Component,
    args: [{
      selector: "[pFileContent]",
      standalone: true,
      template: `@for (file of files(); track file?.name + '-' + $index; let index = $index) {
        <div [class]="cx('file')">
            <img role="presentation" [class]="cx('fileThumbnail')" [attr.alt]="file.name" [src]="file.objectURL" [width]="previewWidth()" />
            <div [class]="cx('fileInfo')">
                <div [class]="cx('fileName')">{{ file.name }}</div>
                <span [class]="cx('fileSize')">{{ formatSize(file.size) }}</span>
            </div>
            <p-badge [value]="badgeValue()" [severity]="badgeSeverity()" [class]="cx('pcFileBadge')" />
            <div [class]="cx('fileActions')">
                <p-button (onClick)="onRemoveClick($event, index)" [styleClass]="cx('pcFileRemoveButton')" text rounded severity="danger">
                    <ng-template #icon let-iconClass="class">
                        @if (fileRemoveIconTemplate()) {
                            <ng-template *ngTemplateOutlet="fileRemoveIconTemplate(); context: { class: iconClass, file: file, index: index }"></ng-template>
                        } @else {
                            <svg data-p-icon="times" [class]="iconClass" [attr.aria-hidden]="true" />
                        }
                    </ng-template>
                </p-button>
            </div>
        </div>
    }`,
      changeDetection: ChangeDetectionStrategy.OnPush,
      providers: [FileUploadStyle],
      imports: [CommonModule, Badge, Button, TimesIcon]
    }]
  }], null, null);
})();
var FileUpload = class _FileUpload extends BaseComponent {
  /**
   * Name of the request parameter to identify the files at backend.
   * @group Props
   */
  name;
  /**
   * Remote url to upload the files.
   * @group Props
   */
  url;
  /**
   * HTTP method to send the files to the url such as "post" and "put".
   * @group Props
   */
  method = "post";
  /**
   * Used to select multiple files at once from file dialog.
   * @group Props
   */
  multiple;
  /**
   * Comma-separated list of pattern to restrict the allowed file types. Can be any combination of either the MIME types (such as "image/*") or the file extensions (such as ".jpg").
   * @group Props
   */
  accept;
  /**
   * Disables the upload functionality.
   * @group Props
   */
  disabled;
  /**
   * When enabled, upload begins automatically after selection is completed.
   * @group Props
   */
  auto;
  /**
   * Cross-site Access-Control requests should be made using credentials such as cookies, authorization headers or TLS client certificates.
   * @group Props
   */
  withCredentials;
  /**
   * Maximum file size allowed in bytes.
   * @group Props
   */
  maxFileSize;
  /**
   * Summary message of the invalid file size.
   * @group Props
   */
  invalidFileSizeMessageSummary = "{0}: Invalid file size, ";
  /**
   * Detail message of the invalid file size.
   * @group Props
   */
  invalidFileSizeMessageDetail = "maximum upload size is {0}.";
  /**
   * Summary message of the invalid file type.
   * @group Props
   */
  invalidFileTypeMessageSummary = "{0}: Invalid file type, ";
  /**
   * Detail message of the invalid file type.
   * @group Props
   */
  invalidFileTypeMessageDetail = "allowed file types: {0}.";
  /**
   * Detail message of the invalid file type.
   * @group Props
   */
  invalidFileLimitMessageDetail = "limit is {0} at most.";
  /**
   * Summary message of the invalid file type.
   * @group Props
   */
  invalidFileLimitMessageSummary = "Maximum number of files exceeded, ";
  /**
   * Inline style of the element.
   * @group Props
   */
  style;
  /**
   * Class of the element.
   * @group Props
   */
  styleClass;
  /**
   * Width of the image thumbnail in pixels.
   * @group Props
   */
  previewWidth = 50;
  /**
   * Label of the choose button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  chooseLabel;
  /**
   * Label of the upload button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  uploadLabel;
  /**
   * Label of the cancel button. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  cancelLabel;
  /**
   * Icon of the choose button.
   * @group Props
   */
  chooseIcon;
  /**
   * Icon of the upload button.
   * @group Props
   */
  uploadIcon;
  /**
   * Icon of the cancel button.
   * @group Props
   */
  cancelIcon;
  /**
   * Whether to show the upload button.
   * @group Props
   */
  showUploadButton = true;
  /**
   * Whether to show the cancel button.
   * @group Props
   */
  showCancelButton = true;
  /**
   * Defines the UI of the component.
   * @group Props
   */
  mode = "advanced";
  /**
   * HttpHeaders class represents the header configuration options for an HTTP request.
   * @group Props
   */
  headers;
  /**
   * Whether to use the default upload or a manual implementation defined in uploadHandler callback. Defaults to PrimeNG Locale configuration.
   * @group Props
   */
  customUpload;
  /**
   * Maximum number of files that can be uploaded.
   * @group Props
   */
  fileLimit;
  /**
   * Style class of the upload button.
   * @group Props
   */
  uploadStyleClass;
  /**
   * Style class of the cancel button.
   * @group Props
   */
  cancelStyleClass;
  /**
   * Style class of the remove button.
   * @group Props
   */
  removeStyleClass;
  /**
   * Style class of the choose button.
   * @group Props
   */
  chooseStyleClass;
  /**
   * Used to pass all properties of the ButtonProps to the choose button inside the component.
   * @group Props
   */
  chooseButtonProps;
  /**
   * Used to pass all properties of the ButtonProps to the upload button inside the component.
   * @group Props
   */
  uploadButtonProps = {
    severity: "secondary"
  };
  /**
   * Used to pass all properties of the ButtonProps to the cancel button inside the component.
   * @group Props
   */
  cancelButtonProps = {
    severity: "secondary"
  };
  /**
   * Callback to invoke before file upload is initialized.
   * @param {FileBeforeUploadEvent} event - Custom upload event.
   * @group Emits
   */
  onBeforeUpload = new EventEmitter();
  /**
   * An event indicating that the request was sent to the server. Useful when a request may be retried multiple times, to distinguish between retries on the final event stream.
   * @param {FileSendEvent} event - Custom send event.
   * @group Emits
   */
  onSend = new EventEmitter();
  /**
   * Callback to invoke when file upload is complete.
   * @param {FileUploadEvent} event - Custom upload event.
   * @group Emits
   */
  onUpload = new EventEmitter();
  /**
   * Callback to invoke if file upload fails.
   * @param {FileUploadErrorEvent} event - Custom error event.
   * @group Emits
   */
  onError = new EventEmitter();
  /**
   * Callback to invoke when files in queue are removed without uploading using clear all button.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onClear = new EventEmitter();
  /**
   * Callback to invoke when a file is removed without uploading using clear button of a file.
   * @param {FileRemoveEvent} event - Remove event.
   * @group Emits
   */
  onRemove = new EventEmitter();
  /**
   * Callback to invoke when files are selected.
   * @param {FileSelectEvent} event - Select event.
   * @group Emits
   */
  onSelect = new EventEmitter();
  /**
   * Callback to invoke when files are being uploaded.
   * @param {FileProgressEvent} event - Progress event.
   * @group Emits
   */
  onProgress = new EventEmitter();
  /**
   * Callback to invoke in custom upload mode to upload the files manually.
   * @param {FileUploadHandlerEvent} event - Upload handler event.
   * @group Emits
   */
  uploadHandler = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onImageError = new EventEmitter();
  /**
   * This event is triggered if an error occurs while loading an image file.
   * @param {RemoveUploadedFileEvent} event - Remove event.
   * @group Emits
   */
  onRemoveUploadedFile = new EventEmitter();
  /**
   * Template for file.
   * @group Templates
   */
  fileTemplate;
  /**
   * Template for header.
   * @group Templates
   */
  headerTemplate;
  /**
   * Template for content.
   * @group Templates
   */
  contentTemplate;
  /**
   * Template for toolbar.
   * @group Templates
   */
  toolbarTemplate;
  /**
   * Template for choose icon.
   * @group Templates
   */
  chooseIconTemplate;
  /**
   * Template for file label.
   * @group Templates
   */
  fileLabelTemplate;
  /**
   * Template for upload icon.
   * @group Templates
   */
  uploadIconTemplate;
  /**
   * Template for cancel icon.
   * @group Templates
   */
  cancelIconTemplate;
  /**
   * Template for empty state.
   * @group Templates
   */
  emptyTemplate;
  advancedFileInput;
  basicFileInput;
  content;
  set files(files) {
    this._files = [];
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (this.validate(file)) {
        if (this.isImage(file)) {
          file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
        }
        this._files.push(files[i]);
      }
    }
  }
  get files() {
    return this._files;
  }
  get basicButtonLabel() {
    if (this.auto || !this.hasFiles()) {
      return this.chooseLabel;
    }
    return this.uploadLabel ?? this.files[0].name;
  }
  _files = [];
  progress = 0;
  dragHighlight;
  msgs;
  uploadedFileCount = 0;
  focus;
  uploading;
  duplicateIEEvent;
  // flag to recognize duplicate onchange event for file input
  translationSubscription;
  dragOverListener;
  uploadedFiles = [];
  sanitizer = inject(DomSanitizer);
  zone = inject(NgZone);
  http = inject(HttpClient);
  _componentStyle = inject(FileUploadStyle);
  ngOnInit() {
    super.ngOnInit();
    this.translationSubscription = this.config.translationObserver.subscribe(() => {
      this.cd.markForCheck();
    });
  }
  ngAfterViewInit() {
    super.ngAfterViewInit();
    if (isPlatformBrowser(this.platformId)) {
      if (this.mode === "advanced") {
        this.zone.runOutsideAngular(() => {
          if (this.content) {
            this.dragOverListener = this.renderer.listen(this.content.nativeElement, "dragover", this.onDragOver.bind(this));
          }
        });
      }
    }
  }
  _headerTemplate;
  _contentTemplate;
  _toolbarTemplate;
  _chooseIconTemplate;
  _uploadIconTemplate;
  _cancelIconTemplate;
  _emptyTemplate;
  _fileTemplate;
  _fileLabelTemplate;
  templates;
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "header":
          this._headerTemplate = item.template;
          break;
        case "file":
          this._fileTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        case "toolbar":
          this._toolbarTemplate = item.template;
          break;
        case "chooseicon":
          this._chooseIconTemplate = item.template;
          break;
        case "uploadicon":
          this._uploadIconTemplate = item.template;
          break;
        case "cancelicon":
          this._cancelIconTemplate = item.template;
          break;
        case "empty":
          this._emptyTemplate = item.template;
          break;
        case "filelabel":
          this._fileLabelTemplate = item.template;
          break;
        default:
          this._fileTemplate = item.template;
          break;
      }
    });
  }
  basicFileChosenLabel() {
    if (this.auto) return this.chooseButtonLabel;
    else if (this.hasFiles()) {
      if (this.files && this.files.length === 1) return this.files[0].name;
      return this.config.getTranslation("fileChosenMessage")?.replace("{0}", this.files.length);
    }
    return this.config.getTranslation("noFileChosenMessage") || "";
  }
  completedLabel() {
    return this.config.getTranslation("completed") || "";
  }
  getTranslation(option) {
    return this.config.getTranslation(option);
  }
  choose() {
    this.advancedFileInput?.nativeElement.click();
  }
  onFileSelect(event) {
    if (event.type !== "drop" && this.isIE11() && this.duplicateIEEvent) {
      this.duplicateIEEvent = false;
      return;
    }
    if (!this.multiple) {
      this.files = [];
    }
    this.msgs = [];
    this.files = this.files || [];
    let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
    for (let i = 0; i < files.length; i++) {
      let file = files[i];
      if (!this.isFileSelected(file)) {
        if (this.validate(file)) {
          if (this.isImage(file)) {
            file.objectURL = this.sanitizer.bypassSecurityTrustUrl(window.URL.createObjectURL(files[i]));
          }
          this.files.push(files[i]);
        }
      }
    }
    this.onSelect.emit({
      originalEvent: event,
      files,
      currentFiles: this.files
    });
    this.checkFileLimit(files);
    if (this.hasFiles() && this.auto && (this.mode !== "advanced" || !this.isFileLimitExceeded())) {
      this.upload();
    }
    if (event.type !== "drop" && this.isIE11()) {
      this.clearIEInput();
    } else {
      this.clearInputElement();
    }
  }
  isFileSelected(file) {
    for (let sFile of this.files) {
      if (sFile.name + sFile.type + sFile.size === file.name + file.type + file.size) {
        return true;
      }
    }
    return false;
  }
  isIE11() {
    if (isPlatformBrowser(this.platformId)) {
      return !!this.document.defaultView["MSInputMethodContext"] && !!this.document["documentMode"];
    }
  }
  validate(file) {
    this.msgs = this.msgs || [];
    if (this.accept && !this.isFileTypeValid(file)) {
      const text = `${this.invalidFileTypeMessageSummary.replace("{0}", file.name)} ${this.invalidFileTypeMessageDetail.replace("{0}", this.accept)}`;
      this.msgs.push({
        severity: "error",
        text
      });
      return false;
    }
    if (this.maxFileSize && file.size > this.maxFileSize) {
      const text = `${this.invalidFileSizeMessageSummary.replace("{0}", file.name)} ${this.invalidFileSizeMessageDetail.replace("{0}", this.formatSize(this.maxFileSize))}`;
      this.msgs.push({
        severity: "error",
        text
      });
      return false;
    }
    return true;
  }
  isFileTypeValid(file) {
    let acceptableTypes = this.accept?.split(",").map((type) => type.trim());
    for (let type of acceptableTypes) {
      let acceptable = this.isWildcard(type) ? this.getTypeClass(file.type) === this.getTypeClass(type) : file.type == type || this.getFileExtension(file).toLowerCase() === type.toLowerCase();
      if (acceptable) {
        return true;
      }
    }
    return false;
  }
  getTypeClass(fileType) {
    return fileType.substring(0, fileType.indexOf("/"));
  }
  isWildcard(fileType) {
    return fileType.indexOf("*") !== -1;
  }
  getFileExtension(file) {
    return "." + file.name.split(".").pop();
  }
  isImage(file) {
    return /^image\//.test(file.type);
  }
  onImageLoad(img) {
    window.URL.revokeObjectURL(img.src);
  }
  /**
   * Uploads the selected files.
   * @group Method
   */
  uploader() {
    if (this.customUpload) {
      if (this.fileLimit) {
        this.uploadedFileCount += this.files.length;
      }
      this.uploadHandler.emit({
        files: this.files
      });
      this.cd.markForCheck();
    } else {
      this.uploading = true;
      this.msgs = [];
      let formData = new FormData();
      this.onBeforeUpload.emit({
        formData
      });
      for (let i = 0; i < this.files.length; i++) {
        formData.append(this.name, this.files[i], this.files[i].name);
      }
      this.http.request(this.method, this.url, {
        body: formData,
        headers: this.headers,
        reportProgress: true,
        observe: "events",
        withCredentials: this.withCredentials
      }).subscribe((event) => {
        switch (event.type) {
          case HttpEventType.Sent:
            this.onSend.emit({
              originalEvent: event,
              formData
            });
            break;
          case HttpEventType.Response:
            this.uploading = false;
            this.progress = 0;
            if (event["status"] >= 200 && event["status"] < 300) {
              if (this.fileLimit) {
                this.uploadedFileCount += this.files.length;
              }
              this.onUpload.emit({
                originalEvent: event,
                files: this.files
              });
            } else {
              this.onError.emit({
                files: this.files
              });
            }
            this.uploadedFiles = [...this.uploadedFiles, ...this.files];
            this.clear();
            break;
          case HttpEventType.UploadProgress: {
            if (event["loaded"]) {
              this.progress = Math.round(event["loaded"] * 100 / event["total"]);
            }
            this.onProgress.emit({
              originalEvent: event,
              progress: this.progress
            });
            break;
          }
        }
        this.cd.markForCheck();
      }, (error) => {
        this.uploading = false;
        this.onError.emit({
          files: this.files,
          error
        });
      });
    }
  }
  onRemoveClick(e) {
    const {
      event,
      index
    } = e;
    if (this.hasFiles()) {
      this.remove(event, index);
    }
  }
  onRemoveUploadedFileClick(e) {
    const {
      index
    } = e;
    if (this.hasUploadedFiles()) {
      this.removeUploadedFile(index);
    }
  }
  /**
   * Clears the files list.
   * @group Method
   */
  clear() {
    this.files = [];
    this.onClear.emit();
    this.clearInputElement();
    this.msgs = [];
    this.cd.markForCheck();
  }
  /**
   * Removes a single file.
   * @param {Event} event - Browser event.
   * @param {Number} index - Index of the file.
   * @group Method
   */
  remove(event, index) {
    this.clearInputElement();
    this.onRemove.emit({
      originalEvent: event,
      file: this.files[index]
    });
    this.files.splice(index, 1);
    this.checkFileLimit(this.files);
  }
  /**
   * Removes uploaded file.
   * @param {Number} index - Index of the file to be removed.
   * @group Method
   */
  removeUploadedFile(index) {
    let removedFile = this.uploadedFiles.splice(index, 1)[0];
    this.uploadedFiles = [...this.uploadedFiles];
    this.onRemoveUploadedFile.emit({
      file: removedFile,
      files: this.uploadedFiles
    });
  }
  isFileLimitExceeded() {
    const isAutoMode = this.auto;
    const totalFileCount = isAutoMode ? this.files.length : this.files.length + this.uploadedFileCount;
    if (this.fileLimit && this.fileLimit <= totalFileCount && this.focus) {
      this.focus = false;
    }
    return this.fileLimit && this.fileLimit < totalFileCount;
  }
  isChooseDisabled() {
    if (this.auto) {
      return this.fileLimit && this.fileLimit <= this.files.length;
    } else {
      return this.fileLimit && this.fileLimit <= this.files.length + this.uploadedFileCount;
    }
  }
  checkFileLimit(files) {
    this.msgs ??= [];
    const hasExistingValidationMessages = this.msgs.length > 0 && this.fileLimit && this.fileLimit < files.length;
    if (this.isFileLimitExceeded() || hasExistingValidationMessages) {
      const text = `${this.invalidFileLimitMessageSummary.replace("{0}", this.fileLimit.toString())} ${this.invalidFileLimitMessageDetail.replace("{0}", this.fileLimit.toString())}`;
      this.msgs.push({
        severity: "error",
        text
      });
    } else {
      this.msgs = this.msgs.filter((msg) => !msg.text.includes(this.invalidFileLimitMessageSummary));
    }
  }
  clearInputElement() {
    if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
      this.advancedFileInput.nativeElement.value = "";
    }
    if (this.basicFileInput && this.basicFileInput.nativeElement) {
      this.basicFileInput.nativeElement.value = "";
    }
  }
  clearIEInput() {
    if (this.advancedFileInput && this.advancedFileInput.nativeElement) {
      this.duplicateIEEvent = true;
      this.advancedFileInput.nativeElement.value = "";
    }
  }
  hasFiles() {
    return this.files && this.files.length > 0;
  }
  hasUploadedFiles() {
    return this.uploadedFiles && this.uploadedFiles.length > 0;
  }
  onDragEnter(e) {
    if (!this.disabled) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  onDragOver(e) {
    if (!this.disabled) {
      W(this.content?.nativeElement, "p-fileupload-highlight");
      this.dragHighlight = true;
      e.stopPropagation();
      e.preventDefault();
    }
  }
  onDragLeave(event) {
    if (!this.disabled) {
      O(this.content?.nativeElement, "p-fileupload-highlight");
    }
  }
  onDrop(event) {
    if (!this.disabled) {
      O(this.content?.nativeElement, "p-fileupload-highlight");
      event.stopPropagation();
      event.preventDefault();
      let files = event.dataTransfer ? event.dataTransfer.files : event.target.files;
      let allowDrop = this.multiple || files && files.length === 1;
      if (allowDrop) {
        this.onFileSelect(event);
      }
    }
  }
  onFocus() {
    this.focus = true;
  }
  onBlur() {
    this.focus = false;
  }
  formatSize(bytes) {
    const k = 1024;
    const dm = 3;
    const sizes = this.getTranslation(TranslationKeys.FILE_SIZE_TYPES);
    if (bytes === 0) {
      return `0 ${sizes[0]}`;
    }
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    const formattedSize = (bytes / Math.pow(k, i)).toFixed(dm);
    return `${formattedSize} ${sizes[i]}`;
  }
  upload() {
    if (this.hasFiles()) this.uploader();
  }
  onBasicUploaderClick() {
    this.basicFileInput?.nativeElement.click();
  }
  onBasicKeydown(event) {
    switch (event.code) {
      case "Space":
      case "Enter":
        this.onBasicUploaderClick();
        event.preventDefault();
        break;
    }
  }
  imageError(event) {
    this.onImageError.emit(event);
  }
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  get chooseButtonLabel() {
    return this.chooseLabel || this.config.getTranslation(TranslationKeys.CHOOSE);
  }
  get uploadButtonLabel() {
    return this.uploadLabel || this.config.getTranslation(TranslationKeys.UPLOAD);
  }
  get cancelButtonLabel() {
    return this.cancelLabel || this.config.getTranslation(TranslationKeys.CANCEL);
  }
  get browseFilesLabel() {
    return this.config.getTranslation(TranslationKeys.ARIA)[TranslationKeys.BROWSE_FILES];
  }
  get pendingLabel() {
    return this.config.getTranslation(TranslationKeys.PENDING);
  }
  ngOnDestroy() {
    if (this.content && this.content.nativeElement) {
      if (this.dragOverListener) {
        this.dragOverListener();
        this.dragOverListener = null;
      }
    }
    if (this.translationSubscription) {
      this.translationSubscription.unsubscribe();
    }
    super.ngOnDestroy();
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵFileUpload_BaseFactory;
    return function FileUpload_Factory(__ngFactoryType__) {
      return (ɵFileUpload_BaseFactory || (ɵFileUpload_BaseFactory = ɵɵgetInheritedFactory(_FileUpload)))(__ngFactoryType__ || _FileUpload);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _FileUpload,
    selectors: [["p-fileupload"], ["p-fileUpload"]],
    contentQueries: function FileUpload_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
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
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fileTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.headerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.toolbarTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.chooseIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.fileLabelTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.uploadIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.cancelIconTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.emptyTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function FileUpload_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c11, 5);
        ɵɵviewQuery(_c12, 5);
        ɵɵviewQuery(_c4, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.advancedFileInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.basicFileInput = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.content = _t.first);
      }
    },
    inputs: {
      name: "name",
      url: "url",
      method: "method",
      multiple: [2, "multiple", "multiple", booleanAttribute],
      accept: "accept",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      auto: [2, "auto", "auto", booleanAttribute],
      withCredentials: [2, "withCredentials", "withCredentials", booleanAttribute],
      maxFileSize: [2, "maxFileSize", "maxFileSize", numberAttribute],
      invalidFileSizeMessageSummary: "invalidFileSizeMessageSummary",
      invalidFileSizeMessageDetail: "invalidFileSizeMessageDetail",
      invalidFileTypeMessageSummary: "invalidFileTypeMessageSummary",
      invalidFileTypeMessageDetail: "invalidFileTypeMessageDetail",
      invalidFileLimitMessageDetail: "invalidFileLimitMessageDetail",
      invalidFileLimitMessageSummary: "invalidFileLimitMessageSummary",
      style: "style",
      styleClass: "styleClass",
      previewWidth: [2, "previewWidth", "previewWidth", numberAttribute],
      chooseLabel: "chooseLabel",
      uploadLabel: "uploadLabel",
      cancelLabel: "cancelLabel",
      chooseIcon: "chooseIcon",
      uploadIcon: "uploadIcon",
      cancelIcon: "cancelIcon",
      showUploadButton: [2, "showUploadButton", "showUploadButton", booleanAttribute],
      showCancelButton: [2, "showCancelButton", "showCancelButton", booleanAttribute],
      mode: "mode",
      headers: "headers",
      customUpload: [2, "customUpload", "customUpload", booleanAttribute],
      fileLimit: [2, "fileLimit", "fileLimit", (value) => numberAttribute(value, void 0)],
      uploadStyleClass: "uploadStyleClass",
      cancelStyleClass: "cancelStyleClass",
      removeStyleClass: "removeStyleClass",
      chooseStyleClass: "chooseStyleClass",
      chooseButtonProps: "chooseButtonProps",
      uploadButtonProps: "uploadButtonProps",
      cancelButtonProps: "cancelButtonProps",
      files: "files"
    },
    outputs: {
      onBeforeUpload: "onBeforeUpload",
      onSend: "onSend",
      onUpload: "onUpload",
      onError: "onError",
      onClear: "onClear",
      onRemove: "onRemove",
      onSelect: "onSelect",
      onProgress: "onProgress",
      uploadHandler: "uploadHandler",
      onImageError: "onImageError",
      onRemoveUploadedFile: "onRemoveUploadedFile"
    },
    features: [ɵɵProvidersFeature([FileUploadStyle]), ɵɵInheritDefinitionFeature],
    decls: 2,
    vars: 2,
    consts: [["advancedfileinput", ""], ["content", ""], ["icon", ""], ["basicfileinput", ""], [3, "class", "ngStyle", 4, "ngIf"], [3, "class", 4, "ngIf"], [3, "ngStyle"], ["type", "file", 3, "change", "multiple", "accept", "disabled"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngTemplateOutlet"], [3, "dragenter", "dragleave", "drop"], [3, "focus", "blur", "onClick", "keydown.enter", "styleClass", "disabled", "label", "buttonProps"], [3, "label", "disabled", "styleClass", "buttonProps", "onClick", 4, "ngIf"], ["data-p-icon", "plus", 4, "ngIf"], ["data-p-icon", "plus"], [3, "onClick", "label", "disabled", "styleClass", "buttonProps"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], ["data-p-icon", "upload", 4, "ngIf"], ["data-p-icon", "upload"], ["data-p-icon", "times", 4, "ngIf"], ["data-p-icon", "times"], [3, "value", "showValue", 4, "ngIf"], [3, "severity", "text"], [3, "class"], [3, "value", "showValue"], ["ngFor", "", 3, "ngForOf", "ngForTemplate"], ["pFileContent", "", 3, "files", "badgeValue", "previewWidth", "fileRemoveIconTemplate"], ["pFileContent", "", 3, "onRemove", "files", "badgeValue", "previewWidth", "fileRemoveIconTemplate"], ["pFileContent", "", "badgeSeverity", "success", 3, "files", "badgeValue", "previewWidth", "fileRemoveIconTemplate"], ["pFileContent", "", "badgeSeverity", "success", 3, "onRemove", "files", "badgeValue", "previewWidth", "fileRemoveIconTemplate"], [3, "onClick", "keydown", "styleClass", "disabled", "label", "buttonProps"], ["type", "file", 3, "change", "focus", "blur", "accept", "multiple", "disabled"], ["class", "p-button-icon p-button-icon-left", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", 3, "ngClass"], ["data-p-icon", "upload", 3, "class", 4, "ngIf"], ["class", "p-button-icon p-button-icon-left", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left"], ["class", "p-button-icon p-button-icon-left pi", 3, "ngClass", 4, "ngIf"], [1, "p-button-icon", "p-button-icon-left", "pi", 3, "ngClass"]],
    template: function FileUpload_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, FileUpload_div_0_Template, 12, 30, "div", 4)(1, FileUpload_div_1_Template, 10, 17, "div", 5);
      }
      if (rf & 2) {
        ɵɵproperty("ngIf", ctx.mode === "advanced");
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.mode === "basic");
      }
    },
    dependencies: [CommonModule, NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, Button, ProgressBar, Message, PlusIcon, UploadIcon, TimesIcon, SharedModule, FileContent],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUpload, [{
    type: Component,
    args: [{
      selector: "p-fileupload, p-fileUpload",
      standalone: true,
      imports: [CommonModule, Button, ProgressBar, Message, PlusIcon, UploadIcon, TimesIcon, SharedModule, FileContent],
      template: `
        <div [class]="cn(cx('root'), styleClass)" [ngStyle]="style" *ngIf="mode === 'advanced'" [attr.data-pc-name]="'fileupload'" [attr.data-pc-section]="'root'">
            <input
                [attr.aria-label]="browseFilesLabel"
                #advancedfileinput
                type="file"
                (change)="onFileSelect($event)"
                [multiple]="multiple"
                [accept]="accept"
                [disabled]="disabled || isChooseDisabled()"
                [attr.title]="''"
                [attr.data-pc-section]="'input'"
                [style.display]="'none'"
            />
            <div [class]="cx('header')">
                <ng-container *ngIf="!headerTemplate && !_headerTemplate">
                    <p-button
                        [styleClass]="cn(cx('pcChooseButton'), chooseStyleClass)"
                        [disabled]="disabled || isChooseDisabled()"
                        (focus)="onFocus()"
                        [label]="chooseButtonLabel"
                        (blur)="onBlur()"
                        (onClick)="choose()"
                        (keydown.enter)="choose()"
                        [attr.data-pc-section]="'choosebutton'"
                        [buttonProps]="chooseButtonProps"
                    >
                        <input
                            [attr.aria-label]="browseFilesLabel"
                            #advancedfileinput
                            type="file"
                            (change)="onFileSelect($event)"
                            [multiple]="multiple"
                            [accept]="accept"
                            [disabled]="disabled || isChooseDisabled()"
                            [attr.title]="''"
                            [attr.data-pc-section]="'input'"
                        />
                        <ng-template #icon>
                            <span *ngIf="chooseIcon" [class]="chooseIcon" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'"></span>
                            <ng-container *ngIf="!chooseIcon">
                                <svg data-p-icon="plus" *ngIf="!chooseIconTemplate && !_chooseIconTemplate" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'" />
                                <span *ngIf="chooseIconTemplate || _chooseIconTemplate" [attr.aria-label]="true" [attr.data-pc-section]="'chooseicon'">
                                    <ng-template *ngTemplateOutlet="chooseIconTemplate || _chooseIconTemplate"></ng-template>
                                </span>
                            </ng-container>
                        </ng-template>
                    </p-button>

                    <p-button
                        *ngIf="!auto && showUploadButton"
                        [label]="uploadButtonLabel"
                        (onClick)="upload()"
                        [disabled]="!hasFiles() || isFileLimitExceeded()"
                        [styleClass]="cn(cx('pcUploadButton'), uploadStyleClass)"
                        [buttonProps]="uploadButtonProps"
                    >
                        <ng-template #icon>
                            <span *ngIf="uploadIcon" [ngClass]="uploadIcon" [attr.aria-hidden]="true"></span>
                            <ng-container *ngIf="!uploadIcon">
                                <svg data-p-icon="upload" *ngIf="!uploadIconTemplate && !_uploadIconTemplate" />
                                <span *ngIf="uploadIconTemplate || _uploadIconTemplate" [attr.aria-hidden]="true">
                                    <ng-template *ngTemplateOutlet="uploadIconTemplate || _uploadIconTemplate"></ng-template>
                                </span>
                            </ng-container>
                        </ng-template>
                    </p-button>
                    <p-button *ngIf="!auto && showCancelButton" [label]="cancelButtonLabel" (onClick)="clear()" [disabled]="!hasFiles() || uploading" [styleClass]="cn(cx('pcCancelButton'), cancelStyleClass)" [buttonProps]="cancelButtonProps">
                        <ng-template #icon>
                            <span *ngIf="cancelIcon" [ngClass]="cancelIcon"></span>
                            <ng-container *ngIf="!cancelIcon">
                                <svg data-p-icon="times" *ngIf="!cancelIconTemplate && !_cancelIconTemplate" [attr.aria-hidden]="true" />
                                <span *ngIf="cancelIconTemplate || _cancelIconTemplate" [attr.aria-hidden]="true">
                                    <ng-template *ngTemplateOutlet="cancelIconTemplate || _cancelIconTemplate"></ng-template>
                                </span>
                            </ng-container>
                        </ng-template>
                    </p-button>
                </ng-container>
                <ng-container
                    *ngTemplateOutlet="
                        headerTemplate || _headerTemplate;
                        context: {
                            $implicit: files,
                            uploadedFiles: uploadedFiles,
                            chooseCallback: choose.bind(this),
                            clearCallback: clear.bind(this),
                            uploadCallback: upload.bind(this)
                        }
                    "
                ></ng-container>
                <ng-container *ngTemplateOutlet="toolbarTemplate || _toolbarTemplate"></ng-container>
            </div>
            <div #content [class]="cx('content')" (dragenter)="onDragEnter($event)" (dragleave)="onDragLeave($event)" (drop)="onDrop($event)" [attr.data-pc-section]="'content'">
                @if (contentTemplate || _contentTemplate) {
                    <ng-container
                        *ngTemplateOutlet="
                            contentTemplate || _contentTemplate;
                            context: {
                                $implicit: files,
                                uploadedFiles: uploadedFiles,
                                chooseCallback: choose.bind(this),
                                clearCallback: clear.bind(this),
                                removeUploadedFileCallback: removeUploadedFile.bind(this),
                                removeFileCallback: remove.bind(this),
                                progress: progress,
                                messages: msgs
                            }
                        "
                    ></ng-container>
                } @else {
                    <p-progressbar [value]="progress" [showValue]="false" *ngIf="hasFiles()"></p-progressbar>
                    @for (message of msgs; track message) {
                        <p-message [severity]="message.severity" [text]="message.text"></p-message>
                    }

                    @if (hasFiles()) {
                        <div [class]="cx('fileList')">
                            <ng-template ngFor [ngForOf]="files" [ngForTemplate]="fileTemplate || _fileTemplate"></ng-template>
                            @if (!fileTemplate && !_fileTemplate) {
                                <div pFileContent [files]="files" (onRemove)="onRemoveClick($event)" [badgeValue]="pendingLabel" [previewWidth]="previewWidth" [fileRemoveIconTemplate]="cancelIconTemplate || _cancelIconTemplate"></div>
                            }
                        </div>
                    }
                    @if (hasUploadedFiles()) {
                        <div [class]="cx('fileList')">
                            <ng-template ngFor [ngForOf]="uploadedFiles" [ngForTemplate]="fileTemplate || _fileTemplate"></ng-template>
                            @if (!fileTemplate && !_fileTemplate) {
                                <div
                                    pFileContent
                                    [files]="uploadedFiles"
                                    (onRemove)="onRemoveUploadedFileClick($event)"
                                    [badgeValue]="completedLabel()"
                                    badgeSeverity="success"
                                    [previewWidth]="previewWidth"
                                    [fileRemoveIconTemplate]="cancelIconTemplate || _cancelIconTemplate"
                                ></div>
                            }
                        </div>
                    }
                }
                @if ((emptyTemplate || _emptyTemplate) && !hasFiles() && !hasUploadedFiles()) {
                    <ng-container *ngTemplateOutlet="emptyTemplate || _emptyTemplate"></ng-container>
                }
            </div>
        </div>
        <div [class]="cn(cx('root'), styleClass)" *ngIf="mode === 'basic'" [attr.data-pc-name]="'fileupload'">
            @for (message of msgs; track message) {
                <p-message [severity]="message.severity" [text]="message.text"></p-message>
            }

            <div [class]="cx('basicContent')">
                <p-button
                    [styleClass]="cn(cx('pcChooseButton'), chooseStyleClass)"
                    [disabled]="disabled"
                    [label]="chooseButtonLabel"
                    [style]="style"
                    (onClick)="onBasicUploaderClick()"
                    (keydown)="onBasicKeydown($event)"
                    [buttonProps]="chooseButtonProps"
                >
                    <ng-template #icon>
                        @if (hasFiles() && !auto) {
                            <span *ngIf="uploadIcon" class="p-button-icon p-button-icon-left" [ngClass]="uploadIcon"></span>
                            <ng-container *ngIf="!uploadIcon">
                                <svg data-p-icon="upload" *ngIf="!uploadIconTemplate && !_uploadIconTemplate" [class]="'p-button-icon p-button-icon-left'" />
                                <span *ngIf="_uploadIconTemplate || uploadIconTemplate" class="p-button-icon p-button-icon-left">
                                    <ng-template *ngTemplateOutlet="_uploadIconTemplate || uploadIconTemplate"></ng-template>
                                </span>
                            </ng-container>
                        } @else {
                            <span *ngIf="chooseIcon" class="p-button-icon p-button-icon-left pi" [ngClass]="chooseIcon"></span>
                            <ng-container *ngIf="!chooseIcon">
                                <svg data-p-icon="plus" *ngIf="!chooseIconTemplate && !_chooseIconTemplate" [attr.data-pc-section]="'uploadicon'" />
                                <ng-template *ngTemplateOutlet="chooseIconTemplate || _chooseIconTemplate"></ng-template>
                            </ng-container>
                        }
                    </ng-template>
                    <input
                        [attr.aria-label]="browseFilesLabel"
                        #basicfileinput
                        type="file"
                        [accept]="accept"
                        [multiple]="multiple"
                        [disabled]="disabled"
                        (change)="onFileSelect($event)"
                        (focus)="onFocus()"
                        (blur)="onBlur()"
                        [attr.data-pc-section]="'input'"
                    />
                </p-button>
                @if (!auto) {
                    @if (!fileLabelTemplate && !_fileLabelTemplate) {
                        <span>
                            {{ basicFileChosenLabel() }}
                        </span>
                    } @else {
                        <ng-container *ngTemplateOutlet="fileLabelTemplate || _fileLabelTemplate; context: { $implicit: files }"></ng-container>
                    }
                }
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [FileUploadStyle]
    }]
  }], null, {
    name: [{
      type: Input
    }],
    url: [{
      type: Input
    }],
    method: [{
      type: Input
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    accept: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    auto: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    withCredentials: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    maxFileSize: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    invalidFileSizeMessageSummary: [{
      type: Input
    }],
    invalidFileSizeMessageDetail: [{
      type: Input
    }],
    invalidFileTypeMessageSummary: [{
      type: Input
    }],
    invalidFileTypeMessageDetail: [{
      type: Input
    }],
    invalidFileLimitMessageDetail: [{
      type: Input
    }],
    invalidFileLimitMessageSummary: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    previewWidth: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    chooseLabel: [{
      type: Input
    }],
    uploadLabel: [{
      type: Input
    }],
    cancelLabel: [{
      type: Input
    }],
    chooseIcon: [{
      type: Input
    }],
    uploadIcon: [{
      type: Input
    }],
    cancelIcon: [{
      type: Input
    }],
    showUploadButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showCancelButton: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    mode: [{
      type: Input
    }],
    headers: [{
      type: Input
    }],
    customUpload: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fileLimit: [{
      type: Input,
      args: [{
        transform: (value) => numberAttribute(value, void 0)
      }]
    }],
    uploadStyleClass: [{
      type: Input
    }],
    cancelStyleClass: [{
      type: Input
    }],
    removeStyleClass: [{
      type: Input
    }],
    chooseStyleClass: [{
      type: Input
    }],
    chooseButtonProps: [{
      type: Input
    }],
    uploadButtonProps: [{
      type: Input
    }],
    cancelButtonProps: [{
      type: Input
    }],
    onBeforeUpload: [{
      type: Output
    }],
    onSend: [{
      type: Output
    }],
    onUpload: [{
      type: Output
    }],
    onError: [{
      type: Output
    }],
    onClear: [{
      type: Output
    }],
    onRemove: [{
      type: Output
    }],
    onSelect: [{
      type: Output
    }],
    onProgress: [{
      type: Output
    }],
    uploadHandler: [{
      type: Output
    }],
    onImageError: [{
      type: Output
    }],
    onRemoveUploadedFile: [{
      type: Output
    }],
    fileTemplate: [{
      type: ContentChild,
      args: ["file", {
        descendants: false
      }]
    }],
    headerTemplate: [{
      type: ContentChild,
      args: ["header", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    toolbarTemplate: [{
      type: ContentChild,
      args: ["toolbar", {
        descendants: false
      }]
    }],
    chooseIconTemplate: [{
      type: ContentChild,
      args: ["chooseicon", {
        descendants: false
      }]
    }],
    fileLabelTemplate: [{
      type: ContentChild,
      args: ["filelabel", {
        descendants: false
      }]
    }],
    uploadIconTemplate: [{
      type: ContentChild,
      args: ["uploadicon", {
        descendants: false
      }]
    }],
    cancelIconTemplate: [{
      type: ContentChild,
      args: ["cancelicon", {
        descendants: false
      }]
    }],
    emptyTemplate: [{
      type: ContentChild,
      args: ["empty", {
        descendants: false
      }]
    }],
    advancedFileInput: [{
      type: ViewChild,
      args: ["advancedfileinput"]
    }],
    basicFileInput: [{
      type: ViewChild,
      args: ["basicfileinput"]
    }],
    content: [{
      type: ViewChild,
      args: ["content"]
    }],
    files: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var FileUploadModule = class _FileUploadModule {
  static ɵfac = function FileUploadModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileUploadModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _FileUploadModule,
    imports: [FileUpload, SharedModule],
    exports: [FileUpload, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [FileUpload, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadModule, [{
    type: NgModule,
    args: [{
      imports: [FileUpload, SharedModule],
      exports: [FileUpload, SharedModule]
    }]
  }], null, null);
})();
export {
  FileContent,
  FileUpload,
  FileUploadClasses,
  FileUploadModule,
  FileUploadStyle
};
//# sourceMappingURL=primeng_fileupload.js.map
