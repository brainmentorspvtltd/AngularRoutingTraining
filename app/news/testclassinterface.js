var A = /** @class */ (function () {
    function A(x) {
        this.x = x;
    }
    A.prototype.increment = function () {
        this.x++;
    };
    A.prototype.print = function () {
        console.log("x is ", this.x);
    };
    return A;
}());
var obj = new A(100);
obj.print();
var a = { x: 1200, y: 900, z: 'Hello' };
console.log("a is ", a);
