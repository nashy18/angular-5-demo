webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div id=\"header\" class=\"\">\n      <nav class=\"navbar navbar-default\">\n        <div class=\"container-fluid\">\n          <div class=\"navbar-header\">\n            <a class=\"navbar-brand\">Angular 5</a>\n          </div>\n          <ul class=\"nav navbar-nav\">\n            <!-- <li class=\"nav-item active\">\n              <a class=\"nav-link\" routerLink=\"/\">Home <span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/chat\">Chat</a>\n            </li> -->\n             <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/\">Dynamic Form</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" routerLink=\"/user\">User</a>\n              </li>\n          </ul>\n        </div>\n      </nav>\n    </div>\n    <div class=\"col-md-12\" id=\"body\" style=\"min-height:900px;\">\n      <router-outlet></router-outlet>\n    </div>\n    <div class=\"col-md-12 text-center\" id=\"footer\">\n      <p>Copyright @ 2017</p>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__ = __webpack_require__("../../../../../src/app/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__chat_chat_component__ = __webpack_require__("../../../../../src/app/chat/chat.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dynamic_form_dynamic_form_component__ = __webpack_require__("../../../../../src/app/dynamic-form/dynamic-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_user_component__ = __webpack_require__("../../../../../src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ng_select_ng_select__ = __webpack_require__("../../../../@ng-select/ng-select/esm5/ng-select.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











//https://scotch.io/bar-talk/getting-to-know-angular-2s-module-ngmodule
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__ng_select_ng_select__["b" /* NgSelectModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    {
                        path: '',
                        component: __WEBPACK_IMPORTED_MODULE_8__dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */]
                    },
                    // {
                    //   path: 'chat',
                    //   component: ChatComponent
                    // },
                    // {
                    //   path: 'dynamic-form',
                    //   component: DynamicFormComponent
                    // },
                    {
                        path: 'user',
                        component: __WEBPACK_IMPORTED_MODULE_9__user_user_component__["a" /* UserComponent */]
                    }
                ])
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_7__chat_chat_component__["a" /* ChatComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dynamic_form_dynamic_form_component__["a" /* DynamicFormComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_user_component__["a" /* UserComponent */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_10__ng_select_ng_select__["a" /* NG_SELECT_DEFAULT_CONFIG */],
                    useValue: {
                        notFoundText: 'Items not found',
                        addTagText: 'Add item',
                        typeToSearchText: 'Type to search',
                        loadingText: 'Loading...',
                        clearAllText: 'Clear all'
                    }
                }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]] // The main components to be bootstrapped in main.ts file, normally one only
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.html":
/***/ (function(module, exports) {

module.exports = "<style>\n  * {\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n    font: 13px Helvetica, Arial;\n  }\n\n  form {\n    background: #000;\n    padding: 3px;\n    bottom: 0;\n    width: 100%;\n  }\n\n  form input {\n    border: 0;\n    padding: 10px;\n    width: 90%;\n    margin-right: .5%;\n  }\n\n  form button {\n    width: 9%;\n    background: rgb(130, 224, 255);\n    border: none;\n    padding: 10px;\n  }\n\n  #messages {\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n  }\n\n  #messages li {\n    padding: 5px 10px;\n  }\n\n  #messages li:nth-child(odd) {\n    background: #eee;\n  }\n</style>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/socket.io/2.0.3/socket.io.js\"></script>\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.js\"></script>\n<div id=\"header\" style=\"text-align:center;\">\n  <h2 id=\"title\"></h2>\n  <p id=\"subtitle\"></p>\n</div>\n<div class=\"row\" style=\"min-height:890px;\">\n  <div class=\"col-md-12\">\n    <ul id=\"messages\"></ul>\n  </div>\n</div>\n<div>\n  <form action=\"\">\n    <input id=\"m\" autocomplete=\"off\" /><button type=\"submit\">Send</button>\n  </form>\n</div>\n<script>\n  $(function () {\n    //Get IP address:\n    $.getJSON('http://gd.geobytes.com/GetCityDetails?callback=?', function (data) {\n      const ip = data.geobytesipaddress;\n      //Connect socket io\n      var socket = io(\"http://10.30.30.88:4000\");\n      $('form').submit(function () {\n        let response = {};\n        response.message = $('#m').val();\n        response.ip = ip;\n        socket.emit('chatMessage', response);\n        $('#m').val('');\n        return false;\n      });\n      socket.on('chatMessage', function (res) {\n        $('#messages').append($('<li>').text(res.ip + ' : ' + res.message));\n        window.scrollTo(0, document.body.scrollHeight);\n      });\n      socket.on('chatLoaded', function (res) {\n        $('#title').text(res.message);\n        $('#subtitle').text(\"Online Users: \" + res.onlineUsers);\n        window.scrollTo(0, document.body.scrollHeight);\n      });\n    });\n  });\n</script>"

/***/ }),

/***/ "../../../../../src/app/chat/chat.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
        this.title = 'Chat';
        this.items = ["item1", "item2", "item3"];
    }
    ChatComponent.prototype.sendMessage = function (event, msg) {
        alert('Sent: ' + msg);
    };
    ChatComponent.prototype.ngAfterContentInit = function () {
        alert("Welcome to chat club");
    };
    ChatComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-chat',
            template: __webpack_require__("../../../../../src/app/chat/chat.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());

//# sourceMappingURL=chat.component.js.map

/***/ }),

/***/ "../../../../../src/app/dynamic-form/dynamic-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_form_service__ = __webpack_require__("../../../../../src/app/dynamic-form/dynamic-form.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DynamicFormComponent = /** @class */ (function () {
    function DynamicFormComponent(http) {
        this.http = http;
        this.formData = {};
        this.formName = ["QMR-14"];
        this.inputTypes = [
            "Text", "DropDown", "Radio", "TextArea"
        ];
        this.dataPoints = [
            "Country", "City", "State", "District"
        ];
        this.required = [true, false];
        this.columns = ["label", "label2", "label3", "label4"];
        this.rows = [["data11", "data12", "data13", "data14"], ["data21", "data22", "data23", "data24"], ["data31", "data32", "data33", "data134"], ["data41", "data42", "data43", "data44"]];
        this.showTable = false;
        this.formTableRows = [];
        this.finalObj = {};
        this.myData = null;
        this.input = {};
    }
    DynamicFormComponent.prototype.ngOnInit = function () {
    };
    DynamicFormComponent.prototype.onSubmit = function (event, data, show) {
        if (show) { //Reset button click
            this.showTable = false;
            this.myData = "";
            this.finalObj = {};
            this.formTableRows = [];
            this.input = {};
        }
        else {
            var labels = [];
            for (var key in data) {
                for (var item in data[key]) {
                    if (item == "label") {
                        labels.push(data[key][item]);
                        break;
                    }
                }
            }
            var output = {};
            output["labels"] = labels;
            output["QMR-14"] = data;
            this.myData = JSON.stringify(output);
            console.log(data);
        }
    };
    DynamicFormComponent.prototype.formTable = function (event, data) {
        this.finalObj = {};
        this.showTable = false;
        this.formTableRows = [];
        this.input = {};
        if (!data.formName)
            return alert("Please Select Form Name");
        if (!Number(data.rows))
            return alert("You can enter only numbers");
        for (var index = 0; index < data.rows; index++) {
            this.formTableRows.push(index);
            this.finalObj["Cell_" + index] = {};
            this.finalObj["Cell_" + index]["required"] = false;
            this.finalObj["Cell_" + index]["readOnly"] = false;
            this.finalObj["Cell_" + index]["label"] = "";
            this.finalObj["Cell_" + index]["inputType"] = "Text";
            this.finalObj["Cell_" + index]["formula"] = "";
            this.finalObj["Cell_" + index]["required"] = false;
        }
        this.showTable = true;
    };
    DynamicFormComponent.prototype.dataSourceSelected = function (value) {
        alert(value);
    };
    DynamicFormComponent.prototype.inputTypeSelected = function (value) {
        alert(value);
    };
    DynamicFormComponent.prototype.onFormulaEntered = function (data, index) {
        this.finalObj["Cell_" + index]["readOnly"] = Boolean(data['Cell_' + index].formula);
    };
    DynamicFormComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'dynamic-form',
            template: __webpack_require__("../../../../../src/app/dynamic-form/dynamic-form.html"),
            styles: [__webpack_require__("../../../../../src/app/dynamic-form/dynamic-form.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__dynamic_form_service__["a" /* DynamicFormService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], DynamicFormComponent);
    return DynamicFormComponent;
    var _a;
}());

//# sourceMappingURL=dynamic-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/dynamic-form/dynamic-form.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\" style=\"margin-top:10px;\">\n            <div class=\"panel-heading\">\n                Dynamic Form Creation\n            </div>\n            <div class=\"panel-body\" style=\"position:relative\">\n                <div class=\"form-group\">\n                    <label>Form Name</label>\n                    <ng-select [items]=\"formName\" bindLabel=\"Form Name\" placeholder=\"Select\" appendTo=\"body\" [(ngModel)]=\"input.formName\"></ng-select>\n                </div>\n                <div class=\"form-group\">\n                    <label>Colums</label>\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Enter Number of Columns\" id=\"txtInputRows\" [(ngModel)]=\"input.rows\">\n                </div>\n                <div class=\"form-group pull-left\">\n                    <button (click)=\"formTable($event, input)\" class=\"btn btn-success\">Submit</button>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">&nbsp;</div>\n    <div class=\"row\" *ngIf=\"showTable\">\n        <div class=\"panel panel-default\" style=\"margin-top:10px;\">\n            <div class=\"panel-heading\">\n                Dynamic Tabular Form Creation\n            </div>\n            <div class=\"panel-body\" style=\"position:relative\">\n                <div class=\"table-responsive\">\n                    <table class=\"table table-bordered\">\n                        <thead>\n                            <tr>\n                                <th *ngFor=\"let column of formTableRows\" class=\"text-center\">\n                                    {{\"Cell \" + (column)}}\n                                </th>\n                            </tr>\n                        </thead>\n                        <tbody>\n                            <tr>\n                                <td *ngFor=\"let item of formTableRows\">\n                                    <div>\n                                        <div class=\"form-group\">\n                                            <label>Label </label>\n                                            <input type=\"text\" [attr.name]=\"'Label-' + item\" [attr.id]=\"'Label-' + item\" [(ngModel)]=\"finalObj['Cell_' + item].label\"\n                                                class=\"form-control\" placeholder=\"Enter Label\">\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label>Field Type</label>\n                                            <ng-select [items]=\"inputTypes\" bindLabel=\"Field Type\" placeholder=\"Select\" appendTo=\"body\" (add)=\"inputTypeSelected($event)\"\n                                                [(ngModel)]=\"finalObj['Cell_' + item].inputType\"></ng-select>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label>Required</label>\n                                            <ng-select [items]=\"required\" bindLabel=\"Required\" placeholder=\"Select\" appendTo=\"body\" [(ngModel)]=\"finalObj['Cell_' + item].required\"></ng-select>\n                                        </div>\n                                        <div class=\"form-group\" *ngIf=\"finalObj['Cell_' + item].inputType=='DropDown'\">\n                                            <label>Data Points</label>\n                                            <ng-select [items]=\"dataPoints\" bindLabel=\"Data Points\" placeholder=\"Select\" appendTo=\"body\" (add)=\"dataSourceSelected($event)\"\n                                                [(ngModel)]=\"finalObj['Cell_' + item].dataPoints\"></ng-select>\n                                        </div>\n                                        <div class=\"form-group\">\n                                            <label>Formula </label>\n                                            <input type=\"text\" [attr.name]=\"'Label-' + item\" [attr.id]=\"'Formula-' + item\" [(ngModel)]=\"finalObj['Cell_' + item].formula\"\n                                                class=\"form-control\" placeholder=\"Enter Formula\" (change)=\"onFormulaEntered(finalObj, item)\">\n                                        </div>\n                                    </div>\n                                </td>\n                            </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"form-group text-center\">\n                <button (click)=\"onSubmit($event, finalObj)\" class=\"btn btn-success\">Submit</button>\n                <button (click)=\"onSubmit($event, finalObj, true)\" class=\"btn btn-danger\">Reset</button>\n            </div>\n        </div>\n\n        <div class=\"container-fluid\" *ngIf=\"myData\">\n            <p>{{myData}}</p>\n        </div>\n        <!-- <div class=\"row\">\n        <div class=\"overflow-box\">\n            <ng-select [items]=\"columns\" bindLabel=\"company\" placeholder=\"Select item\" appendTo=\"body\" multiple=\"false\" [closeOnSelect]=\"false\"\n            [(ngModel)]=\"formData.dropdown\">\n        </ng-select>\n        </div>\n        \n        <br/>\n        <input type=\"text\"  [(ngModel)]=\"formData.textbox\"/>\n        <button (click)=\"onSubmit($event, formData)\">Submit</button>\n    </div> -->\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dynamic-form/dynamic-form.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login {\n  /*background-image: url(\"/assets/images/auth/pic.png\");*/\n  background-size: cover;\n  background-position: center;\n  /*opacity: 0.5;*/ }\n  .login .auth-box {\n    /*background:#3A8CAE;*/\n    margin-left: 10px;\n    width: 300px; }\n  .login .text-left {\n    font-size: 14;\n    font-weight: 600; }\n  .login .sub-text {\n    color: #F3FFFF; }\n  .login .text-right {\n    color: #F3FFFF; }\n  .login .re-size {\n    height: 80px;\n    width: 80px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dynamic-form/dynamic-form.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DynamicFormService; });
// import { Injectable } from '@angular/core';
// import { CommonService } from '../../common/common.service';
// import { API_ACTIONS, GLOBAL_PROPERTIES } from '../../common/common.constant';
// import { HttpRequestModal } from '../../common/httpRequest.modal';
// @Injectable()
// export class DynamicFormService {
//   constructor(private comonSrvc: CommonService) { }
// }
var DynamicFormService = /** @class */ (function () {
    function DynamicFormService() {
    }
    return DynamicFormService;
}());

//# sourceMappingURL=dynamic-form.service.js.map

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <!-- <h1>\n    Welcome to {{title}}!\n  </h1> -->\n    <section (click)=\"open($event, 'section clicked')\">\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-6 order-2\">\n            <div class=\"p-5\">\n              <img class=\"img-fluid rounded-circle\" src=\"https://unsplash.it/500/500?image=836\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"col-md-6 order-1\">\n            <div class=\"p-5\">\n              <h2 class=\"display-4\">For those about to rock...</h2>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <hr/>\n    <section>\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-6\">\n            <div class=\"p-5\">\n              <img class=\"img-fluid rounded-circle\" src=\"https://unsplash.it/500/500?image=452\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"p-5\">\n              <h2 class=\"display-4\">We salute you!</h2>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n     <hr/>\n    <section>\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-md-6 order-2\">\n            <div class=\"p-5\">\n              <img class=\"img-fluid rounded-circle\" src=\"https://unsplash.it/500/500?image=453\" alt=\"\">\n            </div>\n          </div>\n          <div class=\"col-md-6 order-1\">\n            <div class=\"p-5\">\n              <h2 class=\"display-4\">Let there be rock!</h2>\n              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod aliquid, mollitia odio veniam sit iste esse assumenda amet aperiam exercitationem, ea animi blanditiis recusandae! Ratione voluptatum molestiae adipisci, beatae obcaecati.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n     <hr/>\n     <section id=\"dynamicData\" *ngIf=\"results.data\">\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n          <hr/>\n          <h2>Dynamic Content from Google Maps API</h2>\n          <hr/>\n          <div class=\"col-md-6 order-2\">\n            <div class=\"p-5\">\n              <ol>\n                <li *ngFor=\"let item of results.data.results\">{{item.formatted_address}}</li>\n              </ol>\n            </div>\n          </div>\n          <div class=\"col-md-6 order-1\">\n            <div class=\"p-5\">\n               <ol>\n                <li *ngFor=\"let item1 of results.data.results[0].address_components\">{{item1.long_name + ' ' + item1.short_name }}</li>\n              </ol>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n     <hr/>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LandingComponent = /** @class */ (function () {
    function LandingComponent(http) {
        this.http = http;
        this.title = 'Landing';
        this.items = ["item1", "item2", "item3"];
    }
    LandingComponent.prototype.open = function (event, item) {
        alert('Open ' + item);
    };
    LandingComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('on page load');
        this.results = {};
        //const url = "https://nodejs-api-web.herokuapp.com/api/role";
        var url = "http://maps.googleapis.com/maps/api/geocode/json?address=bangalore";
        this.http.get(url)
            .map(function (res) { return _this.results['res'] = res; }) //it will execute only success response
            .subscribe(function (data) {
            // Read the result field from the JSON response.
            _this.results['data'] = data;
            console.log(_this.results);
        }, 
        // Errors will call this callback instead:
        function (err) {
            console.log('Something went wrong!');
            _this.results['err'] = err;
            console.log(_this.results);
        });
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], LandingComponent);
    return LandingComponent;
    var _a;
}());

//# sourceMappingURL=landing.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(http) {
        this.http = http;
        this.productionLine = [
            { "name": "Production-1", "code": "P1" },
            { "name": "Production-2", "code": "P2" },
            { "name": "Production-3", "code": "P3" },
            { "name": "Production-4", "code": "P4" }
        ];
        this.netWeight = [
            "10", "20", "30", "40"
        ];
        // brandName = [
        //   "Brand-01", "Brand-02", "Brand-03", "Brand-04"
        // ];
        this.brandNameData = [
            { "name": "Brand-01", "code": "B1", "productionLineCode": "P1" },
            { "name": "Brand-02", "code": "B2", "productionLineCode": "P1" },
            { "name": "Brand-03", "code": "B3", "productionLineCode": "P2" },
            { "name": "Brand-04", "code": "B4", "productionLineCode": "P4" }
        ];
        this.productName = [
            "Product-01", "Product-02", "Product-03", "Product-04"
        ];
        this.formData = {};
        //this.formData["productionLine"] = "P2";
        //this.brandName = this.brandNameData;
    }
    UserComponent.prototype.onSubmit = function (event, data) {
        console.log(data);
    };
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent.prototype.productionLineSelected = function (data) {
        var result = [];
        delete this.formData["brandName"]; //for deleting the pre selected value of brand name dropdown
        //creating filter of data based on production line selection, populate btand name dropdown
        this.brandNameData.forEach(function (item) {
            if (item.productionLineCode == data.code) {
                result.push(item);
            }
        });
        this.brandName = result;
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'user',
            template: __webpack_require__("../../../../../src/app/user/user.html"),
            styles: [__webpack_require__("../../../../../src/app/user/user.scss")],
            providers: [__WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], UserComponent);
    return UserComponent;
    var _a;
}());

//# sourceMappingURL=user.component.js.map

/***/ }),

/***/ "../../../../../src/app/user/user.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">{{formData.productName}} - Weight Checks</div>\n            <div class=\"panel-body\">\n                <div class=\"form-horizontal\">\n                    <div class=\"form-group\">\n                        <label for=\"inputDate\" class=\"col-sm-4 control-label text-left\">Date:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"date\" class=\"form-control\" id=\"inputDate\" placeholder=\"Date\" [(ngModel)]=\"formData.date\" required=\"true\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"itemCode\" class=\"col-sm-4 control-label text-left\">Production Line:</label>\n                        <div class=\"col-sm-8\">\n                            <ng-select [items]=\"productionLine\" bindLabel=\"name\" bindValue=\"code\"  placeholder=\"Select Production Line\" appendTo=\"body\" [(ngModel)]=\"formData.productionLine\" (add)=\"productionLineSelected($event)\"></ng-select>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"itemCode\" class=\"col-sm-4 control-label text-left\">Brand Name:</label>\n                        <div class=\"col-sm-8\">\n                            <ng-select [items]=\"brandName\" bindLabel=\"name\" bindValue=\"code\" placeholder=\"Select Brand Name\" appendTo=\"body\" [(ngModel)]=\"formData.brandName\"></ng-select>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputProduct\" class=\"col-sm-4 control-label text-left\">Product Name:</label>\n                        <div class=\"col-sm-8\">\n                            <ng-select [items]=\"productName\" bindLabel=\"Product Name\" placeholder=\"Select Product Name\" appendTo=\"body\" [(ngModel)]=\"formData.productName\"></ng-select>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputNetWght\" class=\"col-sm-4 control-label text-left\">Net Weight (g):</label>\n                        <div class=\"col-sm-8\">\n                            <ng-select [items]=\"netWeight\" bindLabel=\"Product Name\" placeholder=\"Select Net Weight\" appendTo=\"body\" [(ngModel)]=\"formData.netWeight\"></ng-select>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"itemCode\" class=\"col-sm-4 control-label text-left\">Item Code:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control\" id=\"inputItemCode\" placeholder=\"Item Code\"  [(ngModel)]=\"formData.itemCode\" required=\"true\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputBestBefore\" class=\"col-sm-4 control-label text-left\">Best Before:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control\" id=\"inputBestBefore\" placeholder=\"Best Before\" [(ngModel)]=\"formData.bestBefore\" required=\"true\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputDateCodeFormat\" class=\"col-sm-4 control-label text-left\">Date Code Format:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control\" id=\"inputDateCodeFormat\" placeholder=\"Date Code Format\" [(ngModel)]=\"formData.dateCodeFormat\" required=\"true\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputUPCCode\" class=\"col-sm-4 control-label text-left\">UPC Code of Bag:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control\" id=\"inputUPCCode\" placeholder=\"UPC Code of Bag\" [(ngModel)]=\"formData.UpcCodeBag\" required=\"true\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputPicDataCodeBag\" class=\"col-sm-4 control-label text-left\">Picture of the Data Code Format on the Bag:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"file\" class=\"form-control\" id=\"inputPicDataCodeBag\" required=\"true\" [(ngModel)]=\"formData.imgDataCodeFormat\">\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputPicProductRecipe\" class=\"col-sm-4 control-label text-left\">Picture of Finished Product Recipe:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"file\" class=\"form-control\" id=\"inputPicProductRecipe\" required=\"true\" [(ngModel)]=\"formData.imgProdcutRecipe\">\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"row\">&nbsp;</div>\n    <div class=\"row\">\n        <div class=\"table-responsive\">\n            <table class=\"table table-bordered\">\n                <thead>\n                    <tr>\n                        <th class=\"text-center\">\n                            Bag Lot Number\n                        </th>\n                        <th class=\"text-center\">\n                            Pictures\n                        </th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" id=\"inputBagLot\" placeholder=\"Bag Lot Number\" required=\"true\">\n                        </td>\n                        <td>\n                            <input type=\"file\" class=\"form-control\" id=\"inputPicture1\"  required=\"true\">\n                        </td>\n                    </tr>\n                    <tr>\n                        <td>\n                            <input type=\"text\" class=\"form-control\" id=\"inputBagLot\" placeholder=\"Bag Lot Number\" required=\"true\">\n                        </td>\n                        <td>\n                            <input type=\"file\" class=\"form-control\" id=\"inputPicture2\"  required=\"true\">\n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n        </div>\n    </div>\n    <div class=\"row\">&nbsp;</div>\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Product Verification</div>\n            <div class=\"panel-body\">\n                <div class=\"form-horizontal\">\n                    <div class=\"form-group\">\n                        <label for=\"inputSuperviserDay\" class=\"col-sm-4 control-label text-left\">Superviser Day:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control\" id=\"inputSuperviserDay\" placeholder=\"Superviser Day\" [(ngModel)]=\"formData.superviserDay\" required=\"true\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputSuperviserDayRB\" class=\"col-sm-4 control-label text-left\">Is Verifed By Superviser Day ?</label>\n                        <div class=\"col-sm-8\">\n                            <label class=\"radio-inline\"><input type=\"radio\" name=\"radioSD\" id=\"optDayYes\" >Yes</label>\n                            <label class=\"radio-inline\"><input type=\"radio\" name=\"radioSD\" id=\"optDayNo\" >No</label>\n                            <label class=\"radio-inline\"><input type=\"radio\" name=\"radioSD\" id=\"optDayNA\" >NA</label>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputSuperviserNight\" class=\"col-sm-4 control-label text-left\">Superviser Night:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control\" id=\"inputSuperviserNight\" placeholder=\"Superviser Night\" [(ngModel)]=\"formData.superviserNight\" required=\"true\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputSuperviserDayRB\" class=\"col-sm-4 control-label text-left\">Is Verifed By Superviser Night ?</label>\n                        <div class=\"col-sm-8\">\n                            <label class=\"radio-inline\"><input type=\"radio\" name=\"radioSN\" id=\"optNightYes\" >Yes</label>\n                            <label class=\"radio-inline\"><input type=\"radio\" name=\"radioSN\" id=\"optNightNo\" >No</label>\n                            <label class=\"radio-inline\"><input type=\"radio\" name=\"radioSN\" id=\"optNightNA\" >NA</label>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputQC\" class=\"col-sm-4 control-label text-left\">Quality Control:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control\" id=\"inputQC\" placeholder=\"Quality Control\" [(ngModel)]=\"formData.QC\" required=\"true\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputSuperviserDayRB\" class=\"col-sm-4 control-label text-left\">Is Quality Control Done ?</label>\n                        <div class=\"col-sm-8\">\n                            <label class=\"radio-inline\"><input type=\"radio\" name=\"radioQC\" id=\"optQcYes\">Yes</label>\n                            <label class=\"radio-inline\"><input type=\"radio\" name=\"radioQC\" id=\"optQcNo\">No</label>\n                            <label class=\"radio-inline\"><input type=\"radio\" name=\"radioQC\" id=\"optQcNA\">NA</label>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputQC\" class=\"col-sm-4 control-label text-left\">Record Verification:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control\" id=\"inputRV\" placeholder=\"Record Verification\" [(ngModel)]=\"formData.recordVerification\" required=\"true\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputSuperviserDayRB\" class=\"col-sm-4 control-label text-left\">Is Record Verification Done ?</label>\n                        <div class=\"col-sm-8\">\n                            <label class=\"radio-inline\"><input type=\"radio\" name=\"radioRV\" id=\"optRvYes\">Yes</label>\n                            <label class=\"radio-inline\"><input type=\"radio\" name=\"radioRV\" id=\"optRvNo\">No</label>\n                            <label class=\"radio-inline\"><input type=\"radio\" name=\"radioRv\" id=\"optRvNA\">NA</label>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">&nbsp;</div>\n    <div class=\"row\">\n        <div class=\"panel panel-default\">\n            <div class=\"panel-heading\">Overall Data</div>\n            <div class=\"panel-body\">\n                <div class=\"form-horizontal\">\n                    <div class=\"form-group\">\n                        <label for=\"inputEmail3\" class=\"col-sm-4 control-label text-left\">Total Average Net Weight:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"Total Average Net Weight\" [(ngModel)]=\"formData.totalAvgWght\" required=\"true\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputPassword3\" class=\"col-sm-4 control-label text-left\">Low Limit:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control\" id=\"inputPassword3\" placeholder=\"Low Limit\" [(ngModel)]=\"formData.lowLimit\" required=\"true\" readonly>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <label for=\"inputEmail3\" class=\"col-sm-4 control-label text-left\">High Limit:</label>\n                        <div class=\"col-sm-8\">\n                            <input type=\"text\" class=\"form-control\" id=\"inputEmail3\" placeholder=\"High Limit\" [(ngModel)]=\"formData.highLimit\" required=\"true\" readonly>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n    <div class=\"row\">&nbsp;</div>\n    <p class=\"h2\">Dynamic Form Tabular Content</p>\n    <!-- <div class=\"row container\">\n        <div class=\"form-group text-center\">\n            <button (click)=\"onSubmit($event, formData)\" class=\"btn btn-success\">Submit</button>\n            <button (click)=\"onSubmit($event, formData, true)\" class=\"btn btn-danger\">Reset</button>\n        </div>\n    </div> -->\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/user/user.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".text-left {\n  text-align: left !important; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
// import { Injectable } from '@angular/core';
// import { CommonService } from '../../common/common.service';
// import { API_ACTIONS, GLOBAL_PROPERTIES } from '../../common/common.constant';
// import { HttpRequestModal } from '../../common/httpRequest.modal';
// @Injectable()
// export class DynamicFormService {
//   constructor(private comonSrvc: CommonService) { }
// }
var UserService = /** @class */ (function () {
    function UserService() {
    }
    return UserService;
}());

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map