var something = /** @class */ (function () {
    function something() {
        this.name = 'Hello';
        this.v = true;
    }
    something.prototype.getName = function (name) {
        return name;
    };
    return something;
}());
var p = new something();
console.log(p);
