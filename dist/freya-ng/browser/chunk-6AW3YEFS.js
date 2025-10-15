import{a as M,b as w}from"./chunk-ZNQSZWD2.js";import"./chunk-5ZQA5WDF.js";import"./chunk-ZSJP3KVP.js";import"./chunk-M3ICSFPT.js";import"./chunk-76Z42HQQ.js";import"./chunk-PADEYSER.js";import"./chunk-J44ZHNIW.js";import"./chunk-5YHCM6BB.js";import"./chunk-BODZH67C.js";import"./chunk-7UZYWCAJ.js";import{c as _,d as I}from"./chunk-MRXEPQQC.js";import"./chunk-YSV4FEGF.js";import"./chunk-WPF24WGD.js";import"./chunk-4O3FVBGX.js";import"./chunk-5IEWOUYS.js";import{Da as D,Ga as B}from"./chunk-U7ZBBLWD.js";import{t as k}from"./chunk-WLQFZU5C.js";import{Jb as u,Mb as h,Na as l,Nb as x,R as v,S as y,W as f,Za as b,Zb as o,_a as g,bb as S,fc as E,na as m,vb as a,wb as e,xb as t,yb as r}from"./chunk-TDJGN2RG.js";import"./chunk-GAL4ENT6.js";var C=`
    .p-buttongroup {
        display: inline-flex;
    }

    .p-buttongroup .p-button {
        margin: 0;
    }

    .p-buttongroup .p-button:not(:last-child),
    .p-buttongroup .p-button:not(:last-child):hover {
        border-inline-end: 0 none;
    }

    .p-buttongroup .p-button:not(:first-of-type):not(:last-of-type) {
        border-radius: 0;
    }

    .p-buttongroup .p-button:first-of-type:not(:only-of-type) {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup .p-button:last-of-type:not(:only-of-type) {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }

    .p-buttongroup .p-button:focus {
        position: relative;
        z-index: 1;
    }
`;var j=["*"],N=`
    ${C}

    /* For PrimeNG */
    .p-buttongroup p-button:focus .p-button {
        position: relative;
        z-index: 1;
    }

    .p-buttongroup p-button:not(:last-child) .p-button,
    .p-buttongroup p-button:not(:last-child) .p-button:hover {
        border-right: 0 none;
    }

    .p-buttongroup p-button:not(:first-of-type):not(:last-of-type) .p-button {
        border-radius: 0;
    }

    .p-buttongroup p-button:first-of-type:not(:only-of-type) .p-button {
        border-start-end-radius: 0;
        border-end-end-radius: 0;
    }

    .p-buttongroup p-button:last-of-type:not(:only-of-type) .p-button {
        border-start-start-radius: 0;
        border-end-start-radius: 0;
    }
`,H={root:"p-buttongroup p-component"},P=(()=>{class i extends D{name="buttongroup";theme=N;classes=H;static \u0275fac=(()=>{let p;return function(d){return(p||(p=m(i)))(d||i)}})();static \u0275prov=v({token:i,factory:i.\u0275fac})}return i})();var c=(()=>{class i extends B{_componentStyle=f(P);static \u0275fac=(()=>{let p;return function(d){return(p||(p=m(i)))(d||i)}})();static \u0275cmp=b({type:i,selectors:[["p-buttonGroup"],["p-buttongroup"],["p-button-group"]],features:[E([P]),S],ngContentSelectors:j,decls:2,vars:0,consts:[["role","group",1,"p-buttongroup","p-component"]],template:function(n,d){n&1&&(h(),e(0,"span",0),x(1),t())},dependencies:[k],encapsulation:2,changeDetection:0})}return i})(),F=(()=>{class i{static \u0275fac=function(n){return new(n||i)};static \u0275mod=g({type:i});static \u0275inj=y({imports:[c]})}return i})();var T=class i{items=[];loading=[!1,!1,!1,!1];ngOnInit(){this.items=[{label:"Update",icon:"pi pi-refresh"},{label:"Delete",icon:"pi pi-times"},{label:"Angular.io",icon:"pi pi-info",url:"http://angular.io"},{separator:!0},{label:"Setup",icon:"pi pi-cog"}]}load(s){this.loading[s]=!0,setTimeout(()=>this.loading[s]=!1,1e3)}static \u0275fac=function(p){return new(p||i)};static \u0275cmp=b({type:i,selectors:[["app-button-demo"]],decls:155,vars:14,consts:[[1,"flex","flex-col","md:flex-row","gap-8"],[1,"md:w-1/2"],[1,"card","flex","flex-col","gap-4"],[1,"font-semibold","text-xl"],[1,"flex","flex-wrap","gap-2"],["label","Submit"],["label","Disabled",3,"disabled"],["label","Link",1,"p-button-link"],["label","Primary"],["label","Secondary","severity","secondary"],["label","Success","severity","success"],["label","Info","severity","info"],["label","Warn","severity","warn"],["label","Help","severity","help"],["label","Danger","severity","danger"],["label","Contrast","severity","contrast"],["label","Primary","text",""],["label","Secondary","severity","secondary","text",""],["label","Success","severity","success","text",""],["label","Info","severity","info","text",""],["label","Warn","severity","warn","text",""],["label","Help","severity","help","text",""],["label","Danger","severity","danger","text",""],["label","Plain","text",""],["label","Primary","outlined",""],["label","Secondary","severity","secondary","outlined",""],["label","Success","severity","success","outlined",""],["label","Info","severity","info","outlined",""],["label","Warn","severity","warn","outlined",""],["label","Help","severity","help","outlined",""],["label","Danger","severity","danger","outlined",""],["label","Contrast","severity","contrast","outlined",""],["label","Save","icon","pi pi-check"],["label","Delete","icon","pi pi-trash"],["label","Cancel","icon","pi pi-times"],["label","Save",3,"model"],["label","Save","severity","secondary",3,"model"],["label","Save","severity","success",3,"model"],["label","Save","severity","info",3,"model"],["label","Save","severity","warn",3,"model"],["label","Save","severity","help",3,"model"],["label","Save","severity","danger",3,"model"],["label","Save","severity","contrast",3,"model"],["type","button"],["alt","logo","src","https://primefaces.org/cdn/primeng/images/logo.svg",2,"width","1.5rem"],["type","button","outlined","","severity","success"],[1,"text-bold"],["icon","pi pi-star-fill"],["label","Bookmark","icon","pi pi-bookmark"],["label","Bookmark","icon","pi pi-bookmark","iconPos","right"],["label","Primary","raised",""],["label","Secondary","severity","secondary","raised",""],["label","Success","severity","success","raised",""],["label","Info","severity","info","raised",""],["label","Warn","severity","warn","raised",""],["label","Help","severity","help","raised",""],["label","Danger","severity","danger","raised",""],["label","Contrast","severity","contrast","raised",""],["label","Primary","rounded",""],["label","Secondary","severity","secondary","rounded",""],["label","Success","severity","success","rounded",""],["label","Info","severity","info","rounded",""],["label","Warn","severity","warn","rounded",""],["label","Help","severity","help","rounded",""],["label","Danger","severity","danger","rounded",""],["label","Contrast","severity","contrast","rounded",""],["icon","pi pi-check","rounded",""],["icon","pi pi-bookmark","severity","secondary","rounded",""],["icon","pi pi-search","severity","success","rounded",""],["icon","pi pi-user","severity","info","rounded",""],["icon","pi pi-bell","severity","warn","rounded",""],["icon","pi pi-heart","severity","help","rounded",""],["icon","pi pi-times","severity","danger","rounded",""],["icon","pi pi-check","text","","raised","","rounded",""],["icon","pi pi-bookmark","severity","secondary","text","","raised","","rounded",""],["icon","pi pi-search","severity","success","text","","raised","","rounded",""],["icon","pi pi-user","severity","info","text","","raised","","rounded",""],["icon","pi pi-bell","severity","warn","text","","raised","","rounded",""],["icon","pi pi-heart","severity","help","text","","raised","","rounded",""],["icon","pi pi-times","severity","danger","text","","raised","","rounded",""],["icon","pi pi-check","rounded","","outlined",""],["icon","pi pi-bookmark","severity","secondary","rounded","","outlined",""],["icon","pi pi-search","severity","success","rounded","","outlined",""],["icon","pi pi-user","severity","info","rounded","","outlined",""],["icon","pi pi-bell","severity","warn","rounded","","outlined",""],["icon","pi pi-heart","severity","help","rounded","","outlined",""],["icon","pi pi-times","severity","danger","rounded","","outlined",""],["type","button","label","Search","icon","pi pi-search",3,"click","loading"],["type","button","label","Search","icon","pi pi-search","iconPos","right",3,"click","loading"],["type","button","styleClass","h-full","icon","pi pi-search",3,"click","loading"],["type","button","label","Search",3,"click","loading"]],template:function(p,n){p&1&&(e(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3),o(4,"Protibimbo"),t(),e(5,"div",4),r(6,"p-button",5)(7,"p-button",6)(8,"p-button",7),t()(),e(9,"div",2)(10,"div",3),o(11,"Default"),t(),e(12,"div",4),r(13,"p-button",5)(14,"p-button",6)(15,"p-button",7),t()(),e(16,"div",2)(17,"div",3),o(18,"Severities"),t(),e(19,"div",4),r(20,"p-button",8)(21,"p-button",9)(22,"p-button",10)(23,"p-button",11)(24,"p-button",12)(25,"p-button",13)(26,"p-button",14)(27,"p-button",15),t()(),e(28,"div",2)(29,"div",3),o(30,"Text"),t(),e(31,"div",4),r(32,"p-button",16)(33,"p-button",17)(34,"p-button",18)(35,"p-button",19)(36,"p-button",20)(37,"p-button",21)(38,"p-button",22)(39,"p-button",23),t()(),e(40,"div",2)(41,"div",3),o(42,"Outlined"),t(),e(43,"div",4),r(44,"p-button",24)(45,"p-button",25)(46,"p-button",26)(47,"p-button",27)(48,"p-button",28)(49,"p-button",29)(50,"p-button",30)(51,"p-button",31),t()(),e(52,"div",2)(53,"div",3),o(54,"Group"),t(),e(55,"div",4)(56,"p-buttongroup"),r(57,"p-button",32)(58,"p-button",33)(59,"p-button",34),t()()(),e(60,"div",2)(61,"div",3),o(62,"SplitButton"),t(),e(63,"div",4),r(64,"p-splitbutton",35)(65,"p-splitbutton",36)(66,"p-splitbutton",37)(67,"p-splitbutton",38)(68,"p-splitbutton",39)(69,"p-splitbutton",40)(70,"p-splitbutton",41)(71,"p-splitbutton",42),t()(),e(72,"div",2)(73,"div",3),o(74,"Templating"),t(),e(75,"div",4)(76,"p-button",43),r(77,"img",44),t(),e(78,"p-button",45),r(79,"img",44),e(80,"span",46),o(81,"PrimeNG"),t()()()()(),e(82,"div",1)(83,"div",2)(84,"div",3),o(85,"Icons"),t(),e(86,"div",4),r(87,"p-button",47)(88,"p-button",48)(89,"p-button",49),t()(),e(90,"div",2)(91,"div",3),o(92,"Raised"),t(),e(93,"div",4),r(94,"p-button",50)(95,"p-button",51)(96,"p-button",52)(97,"p-button",53)(98,"p-button",54)(99,"p-button",55)(100,"p-button",56)(101,"p-button",57),t()(),e(102,"div",2)(103,"div",3),o(104,"Rounded"),t(),e(105,"div",4),r(106,"p-button",58)(107,"p-button",59)(108,"p-button",60)(109,"p-button",61)(110,"p-button",62)(111,"p-button",63)(112,"p-button",64)(113,"p-button",65),t()(),e(114,"div",2)(115,"div",3),o(116,"Rounded Icons"),t(),e(117,"div",4),r(118,"p-button",66)(119,"p-button",67)(120,"p-button",68)(121,"p-button",69)(122,"p-button",70)(123,"p-button",71)(124,"p-button",72),t()(),e(125,"div",2)(126,"div",3),o(127,"Rounded Text"),t(),e(128,"div",4),r(129,"p-button",73)(130,"p-button",74)(131,"p-button",75)(132,"p-button",76)(133,"p-button",77)(134,"p-button",78)(135,"p-button",79),t()(),e(136,"div",2)(137,"div",3),o(138,"Rounded Outlined"),t(),e(139,"div",4),r(140,"p-button",80)(141,"p-button",81)(142,"p-button",82)(143,"p-button",83)(144,"p-button",84)(145,"p-button",85)(146,"p-button",86),t()(),e(147,"div",2)(148,"div",3),o(149,"Loading"),t(),e(150,"div",4)(151,"p-button",87),u("click",function(){return n.load(0)}),t(),e(152,"p-button",88),u("click",function(){return n.load(1)}),t(),e(153,"p-button",89),u("click",function(){return n.load(2)}),t(),e(154,"p-button",90),u("click",function(){return n.load(3)}),t()()()()()),p&2&&(l(7),a("disabled",!0),l(7),a("disabled",!0),l(50),a("model",n.items),l(),a("model",n.items),l(),a("model",n.items),l(),a("model",n.items),l(),a("model",n.items),l(),a("model",n.items),l(),a("model",n.items),l(),a("model",n.items),l(80),a("loading",n.loading[0]),l(),a("loading",n.loading[1]),l(),a("loading",n.loading[2]),l(),a("loading",n.loading[3]))},dependencies:[I,_,F,c,w,M],encapsulation:2})};export{T as ButtonDemo};
