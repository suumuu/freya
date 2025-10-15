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
import "./chunk-UKZYY4TH.js";
import "./chunk-RK2QIU6W.js";
import {
  CommonModule,
  NgForOf,
  NgIf,
  NgTemplateOutlet
} from "./chunk-QIB4AD5R.js";
import "./chunk-W2WIUP6R.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  Injectable,
  Input,
  NgModule,
  ViewEncapsulation,
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
  ɵɵgetInheritedFactory,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor
} from "./chunk-GWCN73BT.js";
import "./chunk-JRFR6BLO.js";
import "./chunk-HWYXSU2G.js";
import "./chunk-MARUHEWW.js";
import "./chunk-4MWRP73S.js";

// node_modules/@primeuix/styles/dist/timeline/index.mjs
var style = "\n    .p-timeline {\n        display: flex;\n        flex-grow: 1;\n        flex-direction: column;\n        direction: ltr;\n    }\n\n    .p-timeline-left .p-timeline-event-opposite {\n        text-align: right;\n    }\n\n    .p-timeline-left .p-timeline-event-content {\n        text-align: left;\n    }\n\n    .p-timeline-right .p-timeline-event {\n        flex-direction: row-reverse;\n    }\n\n    .p-timeline-right .p-timeline-event-opposite {\n        text-align: left;\n    }\n\n    .p-timeline-right .p-timeline-event-content {\n        text-align: right;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) {\n        flex-direction: row-reverse;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-opposite {\n        text-align: right;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(odd) .p-timeline-event-content {\n        text-align: left;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-opposite {\n        text-align: left;\n    }\n\n    .p-timeline-vertical.p-timeline-alternate .p-timeline-event:nth-child(even) .p-timeline-event-content {\n        text-align: right;\n    }\n\n    .p-timeline-vertical .p-timeline-event-opposite,\n    .p-timeline-vertical .p-timeline-event-content {\n        padding: dt('timeline.vertical.event.content.padding');\n    }\n\n    .p-timeline-vertical .p-timeline-event-connector {\n        width: dt('timeline.event.connector.size');\n    }\n\n    .p-timeline-event {\n        display: flex;\n        position: relative;\n        min-height: dt('timeline.event.min.height');\n    }\n\n    .p-timeline-event:last-child {\n        min-height: 0;\n    }\n\n    .p-timeline-event-opposite {\n        flex: 1;\n    }\n\n    .p-timeline-event-content {\n        flex: 1;\n    }\n\n    .p-timeline-event-separator {\n        flex: 0;\n        display: flex;\n        align-items: center;\n        flex-direction: column;\n    }\n\n    .p-timeline-event-marker {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        position: relative;\n        align-self: baseline;\n        border-width: dt('timeline.event.marker.border.width');\n        border-style: solid;\n        border-color: dt('timeline.event.marker.border.color');\n        border-radius: dt('timeline.event.marker.border.radius');\n        width: dt('timeline.event.marker.size');\n        height: dt('timeline.event.marker.size');\n        background: dt('timeline.event.marker.background');\n    }\n\n    .p-timeline-event-marker::before {\n        content: ' ';\n        border-radius: dt('timeline.event.marker.content.border.radius');\n        width: dt('timeline.event.marker.content.size');\n        height: dt('timeline.event.marker.content.size');\n        background: dt('timeline.event.marker.content.background');\n    }\n\n    .p-timeline-event-marker::after {\n        content: ' ';\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        border-radius: dt('timeline.event.marker.border.radius');\n        box-shadow: dt('timeline.event.marker.content.inset.shadow');\n    }\n\n    .p-timeline-event-connector {\n        flex-grow: 1;\n        background: dt('timeline.event.connector.color');\n    }\n\n    .p-timeline-horizontal {\n        flex-direction: row;\n    }\n\n    .p-timeline-horizontal .p-timeline-event {\n        flex-direction: column;\n        flex: 1;\n    }\n\n    .p-timeline-horizontal .p-timeline-event:last-child {\n        flex: 0;\n    }\n\n    .p-timeline-horizontal .p-timeline-event-separator {\n        flex-direction: row;\n    }\n\n    .p-timeline-horizontal .p-timeline-event-connector {\n        width: 100%;\n        height: dt('timeline.event.connector.size');\n    }\n\n    .p-timeline-horizontal .p-timeline-event-opposite,\n    .p-timeline-horizontal .p-timeline-event-content {\n        padding: dt('timeline.horizontal.event.content.padding');\n    }\n\n    .p-timeline-horizontal.p-timeline-alternate .p-timeline-event:nth-child(even) {\n        flex-direction: column-reverse;\n    }\n\n    .p-timeline-bottom .p-timeline-event {\n        flex-direction: column-reverse;\n    }\n";

// node_modules/primeng/fesm2022/primeng-timeline.mjs
var _c0 = ["content"];
var _c1 = ["opposite"];
var _c2 = ["marker"];
var _c3 = (a0) => ({
  $implicit: a0
});
function Timeline_div_0_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Timeline_div_0_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Timeline_div_0_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, Timeline_div_0_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 2);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const event_r1 = ɵɵnextContext().$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.markerTemplate || ctx_r1._markerTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, event_r1));
  }
}
function Timeline_div_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("eventMarker"));
    ɵɵattribute("data-pc-section", "marker");
  }
}
function Timeline_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "div");
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext(2);
    ɵɵclassMap(ctx_r1.cx("eventConnector"));
  }
}
function Timeline_div_0_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainer(0);
  }
}
function Timeline_div_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div")(1, "div");
    ɵɵtemplate(2, Timeline_div_0_ng_container_2_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd();
    ɵɵelementStart(3, "div");
    ɵɵtemplate(4, Timeline_div_0_ng_container_4_Template, 2, 4, "ng-container", 3)(5, Timeline_div_0_ng_template_5_Template, 1, 3, "ng-template", null, 0, ɵɵtemplateRefExtractor)(7, Timeline_div_0_div_7_Template, 1, 2, "div", 4);
    ɵɵelementEnd();
    ɵɵelementStart(8, "div");
    ɵɵtemplate(9, Timeline_div_0_ng_container_9_Template, 1, 0, "ng-container", 2);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    const last_r3 = ctx.last;
    const marker_r4 = ɵɵreference(6);
    const ctx_r1 = ɵɵnextContext();
    ɵɵclassMap(ctx_r1.cx("event"));
    ɵɵattribute("data-pc-section", "event");
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("eventOpposite"));
    ɵɵattribute("data-pc-section", "opposite");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.oppositeTemplate || ctx_r1._oppositeTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(19, _c3, event_r1));
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("eventSeparator"));
    ɵɵattribute("data-pc-section", "separator");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.markerTemplate || ctx_r1._markerTemplate)("ngIfElse", marker_r4);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", !last_r3);
    ɵɵadvance();
    ɵɵclassMap(ctx_r1.cx("eventContent"));
    ɵɵattribute("data-pc-section", "content");
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r1.contentTemplate || ctx_r1._contentTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(21, _c3, event_r1));
  }
}
var classes = {
  root: ({
    instance
  }) => ["p-timeline p-component", "p-timeline-" + instance.align, "p-timeline-" + instance.layout],
  event: "p-timeline-event",
  eventOpposite: "p-timeline-event-opposite",
  eventSeparator: "p-timeline-event-separator",
  eventMarker: "p-timeline-event-marker",
  eventConnector: "p-timeline-event-connector",
  eventContent: "p-timeline-event-content"
};
var TimelineStyle = class _TimelineStyle extends BaseStyle {
  name = "timeline";
  theme = style;
  classes = classes;
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTimelineStyle_BaseFactory;
    return function TimelineStyle_Factory(__ngFactoryType__) {
      return (ɵTimelineStyle_BaseFactory || (ɵTimelineStyle_BaseFactory = ɵɵgetInheritedFactory(_TimelineStyle)))(__ngFactoryType__ || _TimelineStyle);
    };
  })();
  static ɵprov = ɵɵdefineInjectable({
    token: _TimelineStyle,
    factory: _TimelineStyle.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineStyle, [{
    type: Injectable
  }], null, null);
})();
var TimelineClasses;
(function(TimelineClasses2) {
  TimelineClasses2["root"] = "p-timeline";
  TimelineClasses2["event"] = "p-timeline-event";
  TimelineClasses2["eventOpposite"] = "p-timeline-event-opposite";
  TimelineClasses2["eventSeparator"] = "p-timeline-event-separator";
  TimelineClasses2["eventMarker"] = "p-timeline-event-marker";
  TimelineClasses2["eventConnector"] = "p-timeline-event-connector";
  TimelineClasses2["eventContent"] = "p-timeline-event-content";
})(TimelineClasses || (TimelineClasses = {}));
var Timeline = class _Timeline extends BaseComponent {
  /**
   * An array of events to display.
   * @group Props
   */
  value;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Position of the timeline bar relative to the content. Valid values are "left", "right" for vertical layout and "top", "bottom" for horizontal layout.
   * @group Props
   */
  align = "left";
  /**
   * Orientation of the timeline.
   * @group Props
   */
  layout = "vertical";
  /**
   * Custom content template.
   * @group Templates
   */
  contentTemplate;
  /**
   * Custom opposite item template.
   * @group Templates
   */
  oppositeTemplate;
  /**
   * Custom marker template.
   * @group Templates
   */
  markerTemplate;
  templates;
  _contentTemplate;
  _oppositeTemplate;
  _markerTemplate;
  _componentStyle = inject(TimelineStyle);
  getBlockableElement() {
    return this.el.nativeElement.children[0];
  }
  ngAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "content":
          this._contentTemplate = item.template;
          break;
        case "opposite":
          this._oppositeTemplate = item.template;
          break;
        case "marker":
          this._markerTemplate = item.template;
          break;
      }
    });
  }
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵTimeline_BaseFactory;
    return function Timeline_Factory(__ngFactoryType__) {
      return (ɵTimeline_BaseFactory || (ɵTimeline_BaseFactory = ɵɵgetInheritedFactory(_Timeline)))(__ngFactoryType__ || _Timeline);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _Timeline,
    selectors: [["p-timeline"]],
    contentQueries: function Timeline_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, _c0, 4);
        ɵɵcontentQuery(dirIndex, _c1, 4);
        ɵɵcontentQuery(dirIndex, _c2, 4);
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.contentTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.oppositeTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.markerTemplate = _t.first);
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 4,
    hostBindings: function Timeline_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵattribute("data-pc-section", "root")("data-pc-name", "timeline");
        ɵɵclassMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      value: "value",
      styleClass: "styleClass",
      align: "align",
      layout: "layout"
    },
    features: [ɵɵProvidersFeature([TimelineStyle]), ɵɵInheritDefinitionFeature],
    decls: 1,
    vars: 1,
    consts: [["marker", ""], [3, "class", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [4, "ngIf", "ngIfElse"], [3, "class", 4, "ngIf"]],
    template: function Timeline_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵtemplate(0, Timeline_div_0_Template, 10, 23, "div", 1);
      }
      if (rf & 2) {
        ɵɵproperty("ngForOf", ctx.value);
      }
    },
    dependencies: [CommonModule, NgForOf, NgIf, NgTemplateOutlet, SharedModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Timeline, [{
    type: Component,
    args: [{
      selector: "p-timeline",
      standalone: true,
      imports: [CommonModule, SharedModule],
      template: `
        <div *ngFor="let event of value; let last = last" [class]="cx('event')" [attr.data-pc-section]="'event'">
            <div [class]="cx('eventOpposite')" [attr.data-pc-section]="'opposite'">
                <ng-container *ngTemplateOutlet="oppositeTemplate || _oppositeTemplate; context: { $implicit: event }"></ng-container>
            </div>
            <div [class]="cx('eventSeparator')" [attr.data-pc-section]="'separator'">
                <ng-container *ngIf="markerTemplate || _markerTemplate; else marker">
                    <ng-container *ngTemplateOutlet="markerTemplate || _markerTemplate; context: { $implicit: event }"></ng-container>
                </ng-container>
                <ng-template #marker>
                    <div [class]="cx('eventMarker')" [attr.data-pc-section]="'marker'"></div>
                </ng-template>
                <div *ngIf="!last" [class]="cx('eventConnector')"></div>
            </div>
            <div [class]="cx('eventContent')" [attr.data-pc-section]="'content'">
                <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: event }"></ng-container>
            </div>
        </div>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [TimelineStyle],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-pc-section]": "'root'",
        "[attr.data-pc-name]": "'timeline'"
      }
    }]
  }], null, {
    value: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    align: [{
      type: Input
    }],
    layout: [{
      type: Input
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    oppositeTemplate: [{
      type: ContentChild,
      args: ["opposite", {
        descendants: false
      }]
    }],
    markerTemplate: [{
      type: ContentChild,
      args: ["marker", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var TimelineModule = class _TimelineModule {
  static ɵfac = function TimelineModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TimelineModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TimelineModule,
    imports: [Timeline, SharedModule],
    exports: [Timeline, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [Timeline, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimelineModule, [{
    type: NgModule,
    args: [{
      imports: [Timeline, SharedModule],
      exports: [Timeline, SharedModule]
    }]
  }], null, null);
})();
export {
  Timeline,
  TimelineClasses,
  TimelineModule,
  TimelineStyle
};
//# sourceMappingURL=primeng_timeline.js.map
