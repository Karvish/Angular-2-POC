"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var readbook_service_1 = require('../../services/readbook.service');
var ReadBookComponent = (function () {
    function ReadBookComponent(readBookService) {
        this.readBookService = readBookService;
    }
    ReadBookComponent.prototype.ngOnInit = function () {
        this.getBooks();
    };
    // Get Books
    ReadBookComponent.prototype.getBooks = function () {
        var _this = this;
        // now it's a simple subscription to the observable
        this.readBookService.getBooksData()
            .subscribe(function (data) {
            var tempArray = [];
            tempArray.push(data.Message);
            _this.getBooksList = tempArray[0];
        }, function (err) { return alert(err); }, function () { });
    };
    ReadBookComponent = __decorate([
        core_1.Component({
            providers: [readbook_service_1.ReadBookService],
            templateUrl: 'app/modules/ReadBookComponent/readbook.component.html',
            styleUrls: ['app/modules/ReadBookComponent/readbook.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [readbook_service_1.ReadBookService])
    ], ReadBookComponent);
    return ReadBookComponent;
}());
exports.ReadBookComponent = ReadBookComponent;
;
//# sourceMappingURL=readbook.component.js.map