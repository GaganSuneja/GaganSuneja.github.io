(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./currency/currency.component */ "./src/app/currency/currency.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: '', redirectTo: "/dashboard", pathMatch: "full" },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'home', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_4__["HomepageComponent"] },
    { path: 'currency/:id', component: _currency_currency_component__WEBPACK_IMPORTED_MODULE_5__["CurrencyComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _common_general_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/general.service */ "./src/app/common/general.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _highlight_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./highlight.directive */ "./src/app/highlight.directive.ts");
/* harmony import */ var _newhighlight_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./newhighlight.directive */ "./src/app/newhighlight.directive.ts");
/* harmony import */ var _currency_currency_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./currency/currency.component */ "./src/app/currency/currency.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _common_pipes_priceFormat_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/pipes/priceFormat.pipe */ "./src/app/common/pipes/priceFormat.pipe.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_7__["HomepageComponent"],
                _newhighlight_directive__WEBPACK_IMPORTED_MODULE_11__["NewhighlightDirective"],
                _highlight_directive__WEBPACK_IMPORTED_MODULE_10__["HighlightDirective"],
                _currency_currency_component__WEBPACK_IMPORTED_MODULE_12__["CurrencyComponent"],
                _common_pipes_priceFormat_pipe__WEBPACK_IMPORTED_MODULE_14__["priceFormatPipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_15__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSnackBarModule"]
            ],
            providers: [_common_general_service__WEBPACK_IMPORTED_MODULE_8__["GeneralService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            schemas: [
                _angular_core__WEBPACK_IMPORTED_MODULE_1__["CUSTOM_ELEMENTS_SCHEMA"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/general.service.ts":
/*!*******************************************!*\
  !*** ./src/app/common/general.service.ts ***!
  \*******************************************/
/*! exports provided: GeneralService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneralService", function() { return GeneralService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralService = /** @class */ (function () {
    function GeneralService(http) {
        this.http = http;
        this.baseUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl;
    }
    GeneralService.prototype.getData = function (endpoint) {
        return this.http.get(this.baseUrl + endpoint);
    };
    GeneralService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], GeneralService);
    return GeneralService;
}());



/***/ }),

/***/ "./src/app/common/pipes/priceFormat.pipe.ts":
/*!**************************************************!*\
  !*** ./src/app/common/pipes/priceFormat.pipe.ts ***!
  \**************************************************/
/*! exports provided: priceFormatPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "priceFormatPipe", function() { return priceFormatPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var priceFormatPipe = /** @class */ (function () {
    function priceFormatPipe() {
    }
    priceFormatPipe.prototype.transform = function (input) {
        console.log(typeof input);
        var index = input.toString(10).indexOf('.');
        return input.toString(10).slice(0, index + 3);
    };
    priceFormatPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            'name': 'priceFormat'
        })
    ], priceFormatPipe);
    return priceFormatPipe;
}());



/***/ }),

/***/ "./src/app/currency/currency.component.css":
/*!*************************************************!*\
  !*** ./src/app/currency/currency.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-currency__hero h2{\r\n    text-align: center;\r\n    font-family:Lato;\r\n    font-weight: 700;\r\n}\r\n.parentToData{\r\n    overflow: auto;\r\n}\r\n.parentToData div{\r\n    float: left;\r\n    clear: none;\r\n}"

/***/ }),

/***/ "./src/app/currency/currency.component.html":
/*!**************************************************!*\
  !*** ./src/app/currency/currency.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n <aside class=\"app-currency__hero\">\n    <h2>CryptoCurrency Details</h2>\n  </aside>\n<section style=\"overflow:auto;margin-top: 30px;background-color:white;width:48%;margin:100px auto;border:1px solid #0000000a;padding: 20px;border-radius:5px;box-shadow:0px 5px 14px 1px #0000001a;\"> \n    <div class=\"parentToData\">\n      <div style=\"margin-right:100px;width: 200px;display:inline-block;border:1px solid #0000003b;padding:30px;border-radius:5px;\">\n        <h2 style=\"text-align:center\">{{curr.symbol}}</h2>\n      </div>\n      <div class=\"\" style=\"display: inline-block\">\n        <p>Rank: {{curr.rank}}</p>\n        <p>Name: {{curr.name}}</p>\n        <p *ngIf=\"curr.quotes.hasOwnProperty('USD')\">Price (USD): ${{curr.quotes.USD.price | priceFormat}}</p>\n        <p *ngIf=\"curr.quotes.hasOwnProperty('INR')\">Price (INR): ₹{{curr.quotes.INR.price | priceFormat}}</p>\n        <p *ngIf=\"curr.quotes.hasOwnProperty('EUR')\">Price (EUR): €{{curr.quotes.EUR.price | priceFormat}}</p>\n        <p>Supply: {{curr.circulating_supply}}</p>\n      </div>\n    </div>  \n    <br>\n    <div style=\"display: block;margin-top: 20px;padding-left:300px;\">\n      <textarea style=\"width: 300px;border:1px solid #0000003b\" [(ngModel)]=\"userNotes.notes\">\n\n      </textarea>\n      <br/>\n      <button mat-raised-button color=\"primary\" (click)=\"saveNotes()\">Save Note</button>\n    </div>\n  <div style=\"display:block;margin-top:85px;margin-left: auto;margin-right: auto; text-align:center\">\n    <button mat-raised-button color=\"primary\" (click)=\"naviToDashboard()\">Go Back!</button>\n  </div>\n</section>\n\n\n"

/***/ }),

/***/ "./src/app/currency/currency.component.ts":
/*!************************************************!*\
  !*** ./src/app/currency/currency.component.ts ***!
  \************************************************/
/*! exports provided: CurrencyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CurrencyComponent", function() { return CurrencyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/general.service */ "./src/app/common/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CurrencyComponent = /** @class */ (function () {
    function CurrencyComponent(http, route, router, snackBar) {
        var _this = this;
        this.http = http;
        this.route = route;
        this.router = router;
        this.snackBar = snackBar;
        this.currId = "-1";
        this.curr = {};
        this.userNotes = { notes: "" };
        this.route.params.subscribe(function (params) {
            _this.currId = params['id'];
        });
    }
    CurrencyComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.getData("/ticker/" + this.currId + "/?convert=" + localStorage.getItem('coinCap_currName'))
            .subscribe(function (res) {
            _this.curr = res.data;
            _this.snackBar.open("Data Fetched", "", { duration: 2000 });
        }, function (error) {
            _this.snackBar.open("Please Try Again Later");
        });
        var note = JSON.parse(localStorage.getItem("curr_notes"));
        if (note.hasOwnProperty(this.currId)) {
            this.userNotes.notes = note[this.currId];
        }
    };
    CurrencyComponent.prototype.naviToDashboard = function () {
        this.router.navigate(['/dashboard']);
    };
    CurrencyComponent.prototype.saveNotes = function () {
        var notes = {};
        notes = JSON.parse(localStorage.getItem("curr_notes"));
        notes[this.currId] = this.userNotes.notes;
        console.log("notes are", notes);
        localStorage.setItem("curr_notes", JSON.stringify(notes));
        this.snackBar.open("Note Saved", "", { duration: 2000 });
    };
    CurrencyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-currency',
            template: __webpack_require__(/*! ./currency.component.html */ "./src/app/currency/currency.component.html"),
            styles: [__webpack_require__(/*! ./currency.component.css */ "./src/app/currency/currency.component.css")]
        }),
        __metadata("design:paramtypes", [_common_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], CurrencyComponent);
    return CurrencyComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-dashboard{\r\n    width: 100%;\r\n    padding:20px;\r\n    margin:20px auto;\r\n    /* //border:1px solid black; */\r\n}\r\n.app-dasboard__hero h2{\r\n    text-align: center;\r\n    font-family:Lato;\r\n    font-weight: 700;\r\n}\r\n.app-dashboard__search{\r\n    width: 100%;\r\n    padding:20px;\r\n    margin:20px auto;\r\n    border:1px solid #9e9e9e1c;\r\n    border-radius: 3px;\r\n}\r\n.app-dashboard__result__table{\r\n    width: 60%;\r\n    padding: 20px;\r\n    margin:20px auto;\r\n}\r\n.app-dashboard__result__table thead tr th {\r\n    font-weight: bold;\r\n}\r\n.app-dashboard__result__table>thead>tr{\r\n    width: 25%;\r\n}\r\n.app-dashboard__result__table td{\r\n    text-align: center;\r\n    box-sizing: border-box;\r\n    padding: 4px;\r\n}\r\n.app-dasboard__result__filter{\r\n    margin : 10px auto;\r\n\r\n}\r\n.app-dasboard__result__filter div label{\r\n    margin-right: 2px;\r\n}\r\n.app-dasboard__result__filter div{\r\n   /* / display: inline-block; */\r\n    margin: 30px auto;\r\n    width: 350px;\r\n}\r\n.in-primary{\r\n    border:1px solid #9e9e9e1c;\r\n    border-radius: 3px;\r\n    font-family: Lato;  \r\n    width: 80%;\r\n    padding: 15px;\r\n    outline: none;\r\n}\r\ntable>tbody tr:hover{\r\n    bacground-color:blue;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"app-dashboard\">\n  \n  <aside class=\"app-dasboard__hero\">\n    <h2>Dominating Crypto Currencies</h2>\n  </aside>\n\n  <section class=\"app-dasboard__result\">\n    <aside class=\"app-dasboard__result__filter\">\n      <div>\n        <p>Select Currency</p>\n        <mat-radio-group style=\"margin-right:40px;\" name=\"radio-grp-1\" (change)=\"changeFilter($event)\" >\n          <mat-radio-button style=\"margin-right:10px;\" [checked]=\"filter_name==='USD'\" value=\"USD\">USD</mat-radio-button>\n          <mat-radio-button style=\"margin-right:10px;\" [checked]=\"filter_name==='INR'\" value=\"INR\">INR</mat-radio-button>\n          <mat-radio-button style=\"margin-right:10px;\" [checked]=\"filter_name==='EUR'\" value=\"EUR\">EUR</mat-radio-button>\n        </mat-radio-group>\n        <button mat-raised-button color=\"primary\" (click)=\"getData() ;snackbarPopup('List updated')\">Refresh</button>\n      </div>\n    </aside>\n    <table mat-table [dataSource]=\"currencies_results\" class=\"mat-elevation-z8 app-dashboard__result__table\" style=\"padding:30px !important;\">\n      <ng-container matColumnDef=\"symbol\">\n        <th style=\"text-align: center;font-weight: bold;font-size: 15px;\" mat-header-cell *matHeaderCellDef> Symbol</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"name\">\n        <th style=\"text-align: center;font-weight: bold;font-size: 15px;\" mat-header-cell *matHeaderCellDef> Name</th>\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\n      </ng-container>\n      <ng-container matColumnDef=\"price\">\n        <th style=\"text-align: center;font-weight: bold;font-size: 15px;\"  mat-header-cell *matHeaderCellDef> Price</th>\n        <td mat-cell *matCellDef=\"let element\">{{currType}}{{element.quotes[curr_present].price | priceFormat}} </td>\n      </ng-container> \n      <ng-container matColumnDef=\"m_cap\">\n        <th style=\"text-align: center;font-weight: bold;font-size: 15px;\"  mat-header-cell *matHeaderCellDef> Market Cap</th>\n        <td mat-cell *matCellDef=\"let element\">{{currType}}{{element.quotes[curr_present].market_cap}} </td>\n      </ng-container> \n      <ng-container matColumnDef=\"notes\">\n        <th style=\"text-align: center;font-weight: bold;font-size: 15px;width:40%\"  mat-header-cell *matHeaderCellDef> Notes</th>\n        <td mat-cell *matCellDef=\"let element\"> <span *ngIf=\"userNotes.notes.hasOwnProperty(element.id)\">{{userNotes.notes[element.id]}}</span></td>\n      </ng-container>  \n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n      <tr (click)=\"getSpecificCurr(row.id)\" style=\"cursor: pointer;\" mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n    </table>\n  </section>\n</section>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_general_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/general.service */ "./src/app/common/general.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, router, snackBar) {
        this.http = http;
        this.router = router;
        this.snackBar = snackBar;
        this.filter_name = "INR";
        this.someRange = [0, 1];
        this.searchTerm = "";
        this.rangeFilter = false;
        this.curr_present = "INR";
        this.currType = "$";
        this.userNotes = {};
        this.someValue = { "value": null };
        this.foods = [
            { value: 'steak-0', viewValue: 'Steak' },
            { value: 'pizza-1', viewValue: 'Pizza' },
            { value: 'tacos-2', viewValue: 'Tacos' }
        ];
        this.displayedColumns = ['symbol', 'name', 'price', 'm_cap', 'notes'];
        this.date = new Date();
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!localStorage.getItem("curr_notes")) {
            localStorage.setItem("curr_notes", JSON.stringify(this.userNotes));
        }
        else {
            this.userNotes.notes = JSON.parse(localStorage.getItem("curr_notes"));
            console.log("Notes are of type", this.userNotes.notes);
        }
        if (localStorage.getItem('coinCap_currName')) {
            this.filter_name = localStorage.getItem('coinCap_currName');
            this.getData();
        }
        else {
            this.http.getData("/ticker/?convert=" + this.filter_name + "&limit=20")
                .subscribe(function (res) {
                var result = Object.keys(res.data).map(function (key) {
                    return res.data[key];
                });
                _this.currencies_results = result;
                console.log(_this.currencies_results);
                _this.snackbarPopup("Data Fetched");
            }, function (error) { return _this.snackbarPopup("Please Try Again After Some Time"); });
        }
        ;
    };
    DashboardComponent.prototype.snackbarPopup = function (message) {
        this.snackBar.open(message, "", {
            duration: 2000
        });
        console.log("popup");
    };
    DashboardComponent.prototype.changeFilter = function ($event) {
        console.log($event);
        this.filter_name = $event.value;
        localStorage.setItem('coinCap_currName', $event.value);
        this.getCurr($event.value);
        console.log($event.value);
    };
    Object.defineProperty(DashboardComponent.prototype, "format", {
        get: function () { return "fullDate"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "testFun", {
        get: function () { return "this is test"; },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.showRange = function (event) {
        console.log(event);
    };
    // /  setPriceFilter(){
    //     if(this.rangeFilter) this.setRange(this.someRange);
    //     else this.resetResults();
    //   }
    DashboardComponent.prototype.getData = function () {
        var _this = this;
        this.http.getData("/ticker/?convert=" + this.filter_name + "&limit=20")
            .subscribe(function (res) {
            var result = Object.keys(res.data).map(function (key) {
                return res.data[key];
            });
            console.log(_this.curr_present);
            _this.curr_present = _this.filter_name;
            if (_this.filter_name == "USD")
                _this.currType = "$";
            else if (_this.filter_name == "INR")
                _this.currType = "₹";
            else if (_this.filter_name == "EUR")
                _this.currType = "€";
            _this.currencies_results = result;
            console.log(_this.currencies_results);
            _this.snackbarPopup("Data Fetched");
        }, function (error) {
            _this.snackbarPopup("Please Try Again after some Time");
        });
    };
    DashboardComponent.prototype.getCurr = function (curr_name) {
        var _this = this;
        this.http.getData("/ticker/?convert=" + curr_name + "&limit=20")
            .subscribe(function (res) {
            var result = Object.keys(res.data).map(function (key) {
                return res.data[key];
            });
            _this.curr_present = _this.filter_name;
            if (_this.filter_name == "USD")
                _this.currType = "$";
            else if (_this.filter_name == "INR")
                _this.currType = "₹";
            else if (_this.filter_name == "EUR")
                _this.currType = "€";
            _this.currencies_results = result;
            _this.snackbarPopup("Data Fetched");
        }, function (error) {
            _this.snackbarPopup("Please Try Again after some Time");
        });
    };
    DashboardComponent.prototype.getSpecificCurr = function (e) {
        console.log(e);
        this.router.navigate(['/currency/' + e]);
    };
    DashboardComponent.prototype.saveNotes = function (id) {
        localStorage.setItem("cuur_" + id + "_notes", this.userNotes.notes);
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('search'),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_common_general_service__WEBPACK_IMPORTED_MODULE_1__["GeneralService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/highlight.directive.ts":
/*!****************************************!*\
  !*** ./src/app/highlight.directive.ts ***!
  \****************************************/
/*! exports provided: HighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightDirective", function() { return HighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HighlightDirective = /** @class */ (function () {
    function HighlightDirective(elem) {
        elem.nativeElement.style.backgroundColor = 'yellow';
    }
    HighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[myHighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HighlightDirective);
    return HighlightDirective;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app-landing{\r\n\r\n}\r\n.app-landing__hero{\r\n    width: auto;\r\n    height: 500px;\r\n    margin:10px auto;\r\n    border:1px solid rgba(0,0,0,0.25);\r\n    border-radius:2px;\r\n    padding: 20px;\r\n    font-family: Lato;\r\n}\r\n.app-landing__hero>h2{\r\n    text-align :center;\r\n   \r\n}\r\n.app-landing__hero__navbar{\r\n    text-align: center;\r\n    max-width: 400px;\r\n    height: auto;\r\n    border:1px solid black;\r\n    margin:10px auto;\r\n    border-radius:2px;\r\n    padding: 10px;\r\n}"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"app-landing\">\n  <aside class=\"app-landing__hero\">\n      <h2>Welcome to itunes</h2>\n      <aside class=\"app-landing__hero__navbar\">\n        <a (click)=\"navigateToSearch()\">Search</a>\n      </aside>\n  </aside>\n</section>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomepageComponent = /** @class */ (function () {
    function HomepageComponent(router) {
        this.router = router;
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent.prototype.navigateToSearch = function () {
        this.router.navigate(['/dashboard']);
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  login works!\n</p>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/newhighlight.directive.ts":
/*!*******************************************!*\
  !*** ./src/app/newhighlight.directive.ts ***!
  \*******************************************/
/*! exports provided: NewhighlightDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewhighlightDirective", function() { return NewhighlightDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewhighlightDirective = /** @class */ (function () {
    function NewhighlightDirective(el) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
    NewhighlightDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appNewhighlight]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], NewhighlightDirective);
    return NewhighlightDirective;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    baseUrl: "https://api.coinmarketcap.com/v2/"
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Programs\811\work\dipper\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map