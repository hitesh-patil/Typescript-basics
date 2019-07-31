"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person() {
        /**
         * @param username Given user name.
         */
        this.username = 'person';
    }
    /**
     * @method getName returns provided name
     */
    Person.prototype.getName = function (name) {
        return name;
    };
    Person.prototype.getUserName = function () {
        return this.username;
    };
    return Person;
}());
exports.Person = Person;
var Developer = /** @class */ (function (_super) {
    __extends(Developer, _super);
    function Developer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * @param developerName Given developer name.
         */
        _this.developerName = 'Hitesh';
        return _this;
    }
    /**
     * @method getName returns provided name
     */
    Developer.prototype.getName = function (name) {
        return name;
    };
    Developer.prototype.getDeveloperName = function () {
        return this.developerName;
    };
    Developer.prototype.getParentName = function (name) {
        return _super.prototype.getName.call(this, name);
    };
    return Developer;
}(Person));
exports.Developer = Developer;
