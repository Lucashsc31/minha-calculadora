webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".container{\n    display: -ms-grid;\n    display: grid;\n    justify-items: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    width: 100vw;\n    height: 100vh;\n    font-family: Roboto;   \n    background-color: #ececec;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <calculadora></calculadora>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculadora_calculadora_module__ = __webpack_require__("./src/app/calculadora/calculadora.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__calculadora_calculadora_module__["a" /* CalculadoraModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/calculadora/calculadora.component.css":
/***/ (function(module, exports) {

module.exports = "#calculadora{\n    display: -ms-grid;\n    display: grid;\n    width: 100vw;\n    height: 100vh;\n    max-width: 300px;\n    max-height: 500px;\n    -ms-grid-rows: (1fr)[7];\n    -ms-grid-columns: (1fr)[4];\n        grid-template: repeat(7, 1fr) / repeat(4, 1fr);\n        grid-template-areas: \"clear expr expr expr\"\n                         \"clear result result result\"\n                         \"num num num ope\"\n                         \"num num num ope\"\n                         \"num num num ope\"\n                         \"num num num ope\"\n                         \"equal equal equal equal\";\n    \n    -webkit-box-shadow: 3px 5px 10px rgba(1, 1, 1, 0.15);\n    \n            box-shadow: 3px 5px 10px rgba(1, 1, 1, 0.15);\n\n    -webkit-animation: organic;\n\n            animation: organic;\n    -webkit-animation-duration: 5s;\n            animation-duration: 5s;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n}\n\n.expr, .result{\n    display: -ms-grid;\n    display: grid;\n    -webkit-box-align: end;\n        -ms-flex-align: end;\n            align-items: end;\n    justify-items: end;\n    padding: 0 15px 10px 0;\n    background-color: #fff;\n    overflow: hidden;\n}\n\n.expr{\n    -ms-grid-row: 1;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 3;\n    grid-area: expr;    \n    font-size: 18pt;\n    color: #afafaf;\n}\n\n.result{\n    -ms-grid-row: 2;\n    -ms-grid-column: 2;\n    -ms-grid-column-span: 3;\n    grid-area: result;\n    font-size: 44pt;\n}\n\n.num{\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 4;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 3;\n    grid-area: num;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-rows: (1fr)[4];\n    -ms-grid-columns: (1fr)[3];\n        grid-template: repeat(4, 1fr) / repeat(3, 1fr);\n    background-color: #383838;\n    color: #fff;\n}\n\n.ope{\n    -ms-grid-row: 3;\n    -ms-grid-row-span: 4;\n    -ms-grid-column: 4;\n    grid-area: ope;\n    display: -ms-grid;\n    display: grid;\n    -ms-grid-rows: (1fr)[4];\n        grid-template-rows: repeat(4, 1fr);\n    background-color: #202020;\n    color: #1abc9c;\n}\n\n.equal{\n    -ms-grid-row: 7;\n    -ms-grid-column: 1;\n    -ms-grid-column-span: 4;\n    grid-area: equal;\n    background: #1abc9c;\n    color: #fff;\n}\n\n.clear{\n    -ms-grid-row: 1;\n    -ms-grid-row-span: 2;\n    -ms-grid-column: 1;\n    grid-area: clear;\n    background: #1abc9c;\n    color: #fff;\n}\n\n.btn{\n    z-index: 0;\n    position: relative;\n    display: -ms-grid;\n    display: grid;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    justify-items: center;\n    width: 100%;\n    height: 100%;\n    font-size: 26pt;\n    cursor: pointer;\n    overflow: hidden;\n\n    /* Desativar Seleção */\n    -webkit-touch-callout: none; /* iOS Safari */\n    -webkit-user-select: none; /* Safari */ /* Konqueror HTML */\n       -moz-user-select: none; /* Firefox */\n        -ms-user-select: none; /* Internet Explorer/Edge */\n            user-select: none\n}\n\n.btn::before{\n    content: '';\n    z-index: 1;\n    display: block;\n    position: absolute;\n    background-color: rgba(0, 0, 0, 0.3);\n    border-radius: 100%;\n}\n\n.btn:active::before{\n    -webkit-animation-name: click-btn;\n            animation-name: click-btn;\n    -webkit-animation-duration: .3s;\n            animation-duration: .3s;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    -webkit-animation-iteration-count: 1;\n            animation-iteration-count: 1;\n}\n\n@-webkit-keyframes click-btn{\n    from{\n        height: 0px;\n        width: 0px;\n    } \n    to{\n        height: 100px;\n        width: 100px;\n        opacity: 0.1;\n    }\n}\n\n@keyframes click-btn{\n    from{\n        height: 0px;\n        width: 0px;\n    } \n    to{\n        height: 100px;\n        width: 100px;\n        opacity: 0.1;\n    }\n}\n\n@-webkit-keyframes organic{\n    50%{\n        -webkit-transform: translateY(-2px);\n                transform: translateY(-2px);\n        -webkit-box-shadow: 3px 7px 10px rgba(1, 1, 1, 0.15);\n                box-shadow: 3px 7px 10px rgba(1, 1, 1, 0.15);\n    }\n    100%{\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n        -webkit-box-shadow: 3px 5px 10px rgba(1, 1, 1, 0.15);\n                box-shadow: 3px 5px 10px rgba(1, 1, 1, 0.15);\n    }\n}\n\n@keyframes organic{\n    50%{\n        -webkit-transform: translateY(-2px);\n                transform: translateY(-2px);\n        -webkit-box-shadow: 3px 7px 10px rgba(1, 1, 1, 0.15);\n                box-shadow: 3px 7px 10px rgba(1, 1, 1, 0.15);\n    }\n    100%{\n        -webkit-transform: translateY(0px);\n                transform: translateY(0px);\n        -webkit-box-shadow: 3px 5px 10px rgba(1, 1, 1, 0.15);\n                box-shadow: 3px 5px 10px rgba(1, 1, 1, 0.15);\n    }\n}"

/***/ }),

/***/ "./src/app/calculadora/calculadora.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"calculadora\">\n\n  <div class=\"clear\">\n    <div class=\"btn\" (click)=\"clearExpr()\">C</div>\n  </div>\n\n  <div class=\"expr\">\n    {{ expr }}\n  </div>\n\n  <div class=\"result\">\n    {{ result }}\n  </div>\n\n  <div class=\"num\">\n    <div class=\"btn\" *ngFor=\"let num of nums\" (click)=\"addExpr(num)\">\n      {{ num }}\n    </div>\n  </div>\n\n  <div class=\"ope\">\n    <div class=\"btn\" *ngFor=\"let ope of opes\" (click)=\"addExpr(ope)\">\n      {{ ope }}\n    </div>\n  </div>\n\n  <div class=\"equal\">\n    <div class=\"btn\" (click)=\"calcExpr()\">=</div>\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/calculadora/calculadora.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculadoraComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calculadora_service__ = __webpack_require__("./src/app/calculadora/calculadora.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalculadoraComponent = /** @class */ (function () {
    function CalculadoraComponent(calculadoraService) {
        this.calculadoraService = calculadoraService;
        this.expr = "";
        this.result = 0;
        this.nums = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "."];
        this.opes = ["/", "x", "-", "+"];
    }
    CalculadoraComponent.prototype.addExpr = function (val) {
        this.expr = this.calculadoraService.addExpr(val, this.expr);
    };
    CalculadoraComponent.prototype.calcExpr = function () {
        this.result = this.calculadoraService.calcExpr(this.expr);
    };
    CalculadoraComponent.prototype.clearExpr = function () {
        this.expr = this.calculadoraService.clearExpr();
        this.result = 0; // :D kkk
    };
    CalculadoraComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'calculadora',
            template: __webpack_require__("./src/app/calculadora/calculadora.component.html"),
            styles: [__webpack_require__("./src/app/calculadora/calculadora.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__calculadora_service__["a" /* CalculadoraService */]])
    ], CalculadoraComponent);
    return CalculadoraComponent;
}());



/***/ }),

/***/ "./src/app/calculadora/calculadora.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculadoraModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__calculadora_component__ = __webpack_require__("./src/app/calculadora/calculadora.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calculadora_service__ = __webpack_require__("./src/app/calculadora/calculadora.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CalculadoraModule = /** @class */ (function () {
    function CalculadoraModule() {
    }
    CalculadoraModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__calculadora_component__["a" /* CalculadoraComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__calculadora_component__["a" /* CalculadoraComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__calculadora_service__["a" /* CalculadoraService */]
            ]
        })
    ], CalculadoraModule);
    return CalculadoraModule;
}());



/***/ }),

/***/ "./src/app/calculadora/calculadora.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalculadoraService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CalculadoraService = /** @class */ (function () {
    function CalculadoraService() {
    }
    CalculadoraService.prototype.addExpr = function (val, atualExpr) {
        var _return;
        try {
            if (val === "x")
                val = "*";
            _return = atualExpr.concat(val);
        }
        catch (e) {
            console.log(e);
            _return = "Erro";
        }
        return _return;
    };
    CalculadoraService.prototype.clearExpr = function () {
        return "";
    };
    CalculadoraService.prototype.calcExpr = function (expr) {
        var _return;
        try {
            _return = eval(expr);
            if (_return === expr) {
                _return = "Erro";
            }
        }
        catch (e) {
            console.log(e);
            _return = "Erro";
        }
        return _return;
    };
    CalculadoraService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], CalculadoraService);
    return CalculadoraService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map