var HLine = /** @class */ (function () {
    function HLine(parent, width) {
        this.parent = parent;
        this.width = width;
        this.parent.style.width = width + "px";
        this.parent.style.overflowX = "auto";
        this.element = document.createElement("div");
        this.element.style.height = "1px";
        this.parent.appendChild(this.element);
        this.setInactive();
    }
    HLine.prototype.setActive = function () {
        this.element.style.width = "200%";
        this.isActive = true;
    };
    HLine.prototype.setInactive = function () {
        this.element.style.width = "100%";
        this.isActive = false;
    };
    return HLine;
}());
var Greeter = /** @class */ (function () {
    function Greeter(element) {
        this.line = new HLine(element, 200);
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () {
            if (_this.line.isActive) {
                _this.line.setInactive();
            }
            else {
                _this.line.setActive();
            }
        }, 1000);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById("content");
    var greeter = new Greeter(el);
    greeter.start();
};
//# sourceMappingURL=app.js.map