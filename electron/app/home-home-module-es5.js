(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n  <ion-toolbar color=\"tertiary\">\r\n      <ion-buttons slot =\"start\">\r\n          <ion-menu-button (click)=\"run()\">\r\n          </ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title  style=\"text-align: center\"><img src=\"\\assets\\icon\\magnifying-glass (10).png\"  >\r\n      \r\n        </ion-title>\r\n\r\n          \r\n  </ion-toolbar>\r\n  \r\n </ion-header>\r\n\r\n    \r\n<ion-content color=\"success\">\r\n    <!-- <ion-button shape=\"round\" color=\"tertiary\" style=\"float: right;\" [routerLink]=\"['/login']\">\r\n      <ion-icon name=\"log-in\"></ion-icon>Sign In\r\n    </ion-button>\r\n  <ion-button shape=\"round\" color=\"tertiary\" style=\"float: right;\"  [routerLink]=\"['/registration']\"> \r\n    <ion-icon name=\"person\"></ion-icon>Sign Up\r\n  </ion-button><br><br> -->\r\n  \r\n  <ion-searchbar color= \"light\"showCancelButton=\"never\"></ion-searchbar>\r\n\r\n  <!--  start map -->\r\n  <div id=\"map_canvas\"></div>\r\n  <!-- end -->\r\n\r\n\r\n\r\n    <ion-card color=\"light\">\r\n        <ion-card-header>\r\n          <ion-card-title>News Updates.</ion-card-title>\r\n        </ion-card-header>\r\n      \r\n        <ion-card-content>\r\n          Keep close to Nature's heart... and break clear away, once in awhile,\r\n          and climb a mountain or spend a week in the woods. Wash your spirit clean.\r\n        </ion-card-content>\r\n      </ion-card>\r\n  \r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#map_canvas {\n  width: 100%;\n  height: 80vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9DOlxcVXNlcnNcXENvZGVUcmliZVxcS2FzaV9EZXRlY3RpdmVzL3NyY1xcYXBwXFxob21lXFxob21lLnBhZ2Uuc2NzcyIsInNyYy9hcHAvaG9tZS9ob21lLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21hcF9jYW52YXMge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgfVxyXG4iLCIjbWFwX2NhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDgwdmg7XG59Il19 */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/google-maps */ "./node_modules/@ionic-native/google-maps/index.js");






var HomePage = /** @class */ (function () {
    function HomePage(events, toastCtrl, platform, userService) {
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.platform = platform;
        this.userService = userService;
        this.checkUserState();
        this.run();
    }
    HomePage.prototype.ngOnInit = function () {
        // Since ngOnInit() is executed before `deviceready` event,
        // you have to wait the event.
        this.platform.ready();
        this.loadMap();
    };
    HomePage.prototype.loadMap = function () {
        this.map = _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMaps"].create('map_canvas', {
        // camera: {
        //   target: {
        //     lat: 43.0741704,
        //     lng: -89.3809802
        //   },
        //   zoom: 18,
        //   tilt: 30
        // }
        });
        this.goToMyLocation();
    };
    HomePage.prototype.goToMyLocation = function () {
        var _this = this;
        this.map.clear();
        // Get the location of you
        this.map.getMyLocation().then(function (location) {
            console.log(JSON.stringify(location, null, 2));
            // Move the map camera to the location with animation
            _this.map.animateCamera({
                target: location.latLng,
                zoom: 17,
                duration: 5000
            });
            //add a marker
            var marker = _this.map.addMarkerSync({
                title: '@ionic-native/google-maps plugin!',
                snippet: 'This plugin is awesome!',
                position: location.latLng,
                animation: _ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsAnimation"].BOUNCE
            });
            //show the infoWindow
            marker.showInfoWindow();
            //If clicked it, display the alert
            marker.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsEvent"].MARKER_CLICK).subscribe(function () {
                _this.showToast('clicked!');
            });
            _this.map.on(_ionic_native_google_maps__WEBPACK_IMPORTED_MODULE_4__["GoogleMapsEvent"].MAP_READY).subscribe(function (data) {
                console.log("Click MAP", data);
            });
        })
            .catch(function (err) {
            //this.loading.dismiss();
            _this.showToast(err.error_message);
        });
    };
    HomePage.prototype.showToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 2000,
                            position: 'middle'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    /////
    HomePage.prototype.checkUserState = function () {
        var _this = this;
        this.events.subscribe('user:loggedOut', function (boolean) {
            console.log(boolean);
            if (boolean === true) {
                _this.userService.destroyUserData();
                _this.events.publish('user:created', false);
            }
        });
    };
    HomePage.prototype.run = function () {
        console.log("running");
        this.events.publish('currentPage:home', true);
    };
    HomePage.ctorParameters = function () { return [
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"] },
        { type: _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"] }
    ]; };
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Events"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _users_service__WEBPACK_IMPORTED_MODULE_3__["UsersService"]])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module-es5.js.map