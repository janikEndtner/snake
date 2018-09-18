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

module.exports = "<app-game></app-game>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.component */ "./src/app/game/game.component.ts");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./web-socket.service */ "./src/app/web-socket.service.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _game_game_component__WEBPACK_IMPORTED_MODULE_3__["GameComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [_web_socket_service__WEBPACK_IMPORTED_MODULE_4__["WebSocketService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/game/game.component.css":
/*!*****************************************!*\
  !*** ./src/app/game/game.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "svg {\r\n  border: 5px solid black;\r\n}\r\n"

/***/ }),

/***/ "./src/app/game/game.component.html":
/*!******************************************!*\
  !*** ./src/app/game/game.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <table>\n    <tr>\n      <td>Snake Lenght: </td>\n      <td>{{snake.getFields().length}}</td>\n    </tr>\n  </table>\n  <button [disabled]=\"gameRunning\" (click)=\"initGame()\">Start game</button>\n</div>\n<svg [attr.height]=\"pxHeight\" [attr.width]=\"pxWidth\">\n  <g>\n    <g *ngFor=\"let row of fields\">\n      <rect *ngFor=\"let field of row\"\n            [attr.width]=\"widthOfField\"\n            [attr.height]=\"heightOfField\"\n            [attr.stroke]=\"fieldStrokeColor\"\n            [attr.fill]=\"field.hasItem ? 'red' : 'none'\"\n            [attr.x]=\"field.x * widthOfField\"\n            [attr.y]=\"field.y * heightOfField\"\n      ></rect>\n    </g>\n    <g>\n      <rect *ngFor=\"let field of snake.getFields()\"\n            [attr.width]=\"widthOfField\"\n            [attr.height]=\"heightOfField\"\n            [attr.stroke]=\"fieldStrokeColor\"\n            [attr.fill]=\"'black'\"\n            [attr.x]=\"field.x * widthOfField\"\n            [attr.y]=\"field.y * heightOfField\"\n      ></rect>\n    </g>\n  </g>\n</svg>\n"

/***/ }),

/***/ "./src/app/game/game.component.ts":
/*!****************************************!*\
  !*** ./src/app/game/game.component.ts ***!
  \****************************************/
/*! exports provided: Message, GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _snake__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../snake */ "./src/app/snake.ts");
/* harmony import */ var _item_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../item-handler */ "./src/app/item-handler.ts");
/* harmony import */ var _web_socket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../web-socket.service */ "./src/app/web-socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Message = /** @class */ (function () {
    function Message(sender, content, isBroadcast) {
        if (isBroadcast === void 0) { isBroadcast = false; }
        this.sender = sender;
        this.content = content;
        this.isBroadcast = isBroadcast;
    }
    return Message;
}());

var GameComponent = /** @class */ (function () {
    function GameComponent(wsService) {
        this.wsService = wsService;
        this.pxWidth = 500;
        this.pxHeight = 500;
        this.colNumber = 30;
        this.rowNumber = 30;
        this.fields = [];
        this.fieldStrokeColor = "lightgray";
        this.snake = null;
        this.gameSpeed = 100;
        this.gameRunning = false;
        wsService
            .connect()
            .subscribe(function (d) {
            console.log(d);
        });
    }
    GameComponent.prototype.handleKeyDown = function (event) {
        this.moveSnake(event);
    };
    GameComponent.prototype.ngOnInit = function () {
        this.initGame();
    };
    GameComponent.prototype.initGame = function () {
        this.gameRunning = true;
        this.createFields();
        this.itemHandler = new _item_handler__WEBPACK_IMPORTED_MODULE_2__["ItemHandler"](this.fields, this.rowNumber, this.colNumber);
        this.snake = new _snake__WEBPACK_IMPORTED_MODULE_1__["Snake"]([
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 }
        ], this.itemHandler);
        this.snake.directionRight();
        this.startGame();
    };
    GameComponent.prototype.startGame = function () {
        var _this = this;
        var interval = setInterval(function () {
            var nextStep = _this.snake.getNextStep();
            if (_this.checkIfNextMovePossible(_this.snake.getNextStep())) {
                _this.snake.makeStep(_this.fields[nextStep.y][nextStep.x]);
            }
            else {
                console.log(_this.snake.getNextStep());
                clearInterval(interval);
                _this.gameRunning = false;
            }
        }, this.gameSpeed);
    };
    GameComponent.prototype.createFields = function () {
        for (var i = 0; i < this.colNumber; i++) {
            this.fields.push([]);
            for (var j = 0; j < this.rowNumber; j++) {
                var field = {
                    x: j,
                    y: i
                };
                this.fields[this.fields.length - 1].push(field);
            }
        }
        console.log(this.fields);
        this.heightOfField = this.pxHeight / this.rowNumber;
        this.widthOfField = this.pxWidth / this.colNumber;
    };
    GameComponent.prototype.moveSnake = function (event) {
        switch (event.key) {
            case 'ArrowUp':
                this.snake.directionUp();
                break;
            case 'ArrowDown':
                this.snake.directionDown();
                break;
            case 'ArrowRight':
                this.snake.directionRight();
                break;
            case 'ArrowLeft':
                this.snake.directionLeft();
                break;
        }
    };
    GameComponent.prototype.checkIfNextMovePossible = function (field) {
        return field.x >= 0 && field.x < this.colNumber
            && field.y >= 0 && field.y < this.rowNumber;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], GameComponent.prototype, "handleKeyDown", null);
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_web_socket_service__WEBPACK_IMPORTED_MODULE_3__["WebSocketService"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/item-handler.ts":
/*!*********************************!*\
  !*** ./src/app/item-handler.ts ***!
  \*********************************/
/*! exports provided: ItemHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemHandler", function() { return ItemHandler; });
var ItemHandler = /** @class */ (function () {
    function ItemHandler(field, rowNumber, colNumber) {
        this.fieldsReference = field;
        this.rowNumber = rowNumber;
        this.colNumber = colNumber;
        this.setItem();
    }
    ItemHandler.prototype.setItem = function () {
        var x = Math.floor(Math.random() * this.colNumber);
        var y = Math.floor(Math.random() * this.rowNumber);
        this.fieldsReference[x][y].hasItem = true;
        this.previousItemField = this.fieldsReference[x][y];
        console.log("create item on (" + x + "," + y + ")");
    };
    ItemHandler.prototype.removeItem = function () {
        this.previousItemField.hasItem = false;
    };
    ItemHandler.prototype.replaceItem = function () {
        this.removeItem();
        this.setItem();
    };
    return ItemHandler;
}());



/***/ }),

/***/ "./src/app/snake.ts":
/*!**************************!*\
  !*** ./src/app/snake.ts ***!
  \**************************/
/*! exports provided: Snake */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Snake", function() { return Snake; });
var Snake = /** @class */ (function () {
    function Snake(initialFields, itemHandler) {
        this.snakeFields = initialFields;
        this.itemHandler = itemHandler;
    }
    Snake.prototype.directionUp = function () {
        this.directionX = 0;
        this.directionY = -1;
    };
    Snake.prototype.directionDown = function () {
        this.directionX = 0;
        this.directionY = 1;
    };
    Snake.prototype.directionRight = function () {
        this.directionX = 1;
        this.directionY = 0;
    };
    Snake.prototype.directionLeft = function () {
        this.directionX = -1;
        this.directionY = 0;
    };
    Snake.prototype.getNextStep = function () {
        var newX = this.snakeFields[0].x + this.directionX;
        var newY = this.snakeFields[0].y + this.directionY;
        return {
            x: newX,
            y: newY,
        };
    };
    Snake.prototype.makeStep = function (field) {
        this.snakeFields.unshift(field);
        if (!field.hasItem) {
            this.snakeFields.pop();
        }
        else {
            this.itemHandler.replaceItem();
        }
    };
    Snake.prototype.getFields = function () {
        return this.snakeFields;
    };
    return Snake;
}());



/***/ }),

/***/ "./src/app/web-socket.service.ts":
/*!***************************************!*\
  !*** ./src/app/web-socket.service.ts ***!
  \***************************************/
/*! exports provided: WebSocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebSocketService", function() { return WebSocketService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebSocketService = /** @class */ (function () {
    function WebSocketService() {
    }
    WebSocketService.prototype.connect = function () {
        var _this = this;
        // If you aren't familiar with environment variables then
        // you can hard code `environment.ws_url` as `http://localhost:5000`
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1__('http://localhost:3000');
        // We define our observable which will observe any incoming messages
        // from our socket.io server.
        var observable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (observer) {
            _this.socket.on('message', function (data) {
                console.log("Received message from Websocket Server");
                observer.next(data);
            });
            return function () {
                _this.socket.disconnect();
            };
        });
        // We define our Observer which will listen to messages
        // from our other components and send messages back to our
        // socket server whenever the `next()` method is called.
        var observer = {
            next: function (data) {
                _this.socket.emit('message', JSON.stringify(data));
            },
        };
        return observable;
        // we return our Rx.Subject which is a combination
        // of both an observer and observable.
        // return Rx.Subject.create(observer, observable);
    };
    WebSocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], WebSocketService);
    return WebSocketService;
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
    production: false
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

module.exports = __webpack_require__(/*! C:\Users\janik\Documents\current_projects\snake-angular-node\front_end\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map