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
        this.display1 = new SevenSegment(element);
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () {
            var s = new Date().getSeconds() % 10;
            _this.display1.setNumber(s);
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
var VLine = /** @class */ (function () {
    function VLine(parent, height) {
        this.parent = parent;
        this.height = height;
        this.parent.style.height = height + "px";
        this.parent.style.overflowY = "auto";
        this.element = document.createElement("div");
        this.element.style.width = "1px";
        this.parent.appendChild(this.element);
        this.setInactive();
    }
    VLine.prototype.setActive = function () {
        this.element.style.height = "200%";
        this.isActive = true;
    };
    VLine.prototype.setInactive = function () {
        this.element.style.height = "100%";
        this.isActive = false;
    };
    return VLine;
}());
var SevenSegment = /** @class */ (function () {
    function SevenSegment(container, width, height) {
        if (width === void 0) { width = 100; }
        if (height === void 0) { height = 200; }
        this.segments = new Array(7);
        this.width = width;
        this.height = height;
        var display = document.createElement("div");
        display.className = "display";
        display.style.width = (width + 2 * Dimensions.cornerWidth) + "px";
        display.style.height = (height + 3 * Dimensions.cornerHeight) + "px";
        container.appendChild(display);
        this.segments[0] = this.createHorizontal(display, "a");
        this.segments[1] = this.createVertical(display, "b");
        this.segments[2] = this.createVertical(display, "c");
        this.segments[3] = this.createHorizontal(display, "d");
        this.segments[4] = this.createVertical(display, "e");
        this.segments[5] = this.createVertical(display, "f");
        this.segments[6] = this.createHorizontal(display, "g");
        this.deactivate();
    }
    SevenSegment.prototype.get = function (c) {
        return this.segments[(c.charCodeAt(0) - 97)];
    };
    SevenSegment.prototype.createFiller = function (parent) {
        var filler = document.createElement("div");
        filler.className = "filler";
        filler.style.width = this.width + "px";
        filler.style.height = (this.height / 2) + "px";
        parent.appendChild(filler);
    };
    SevenSegment.prototype.createHorizontal = function (parent, identifier) {
        var container = document.createElement("div");
        container.className = "line horizontal-line segment-" + identifier;
        parent.appendChild(container);
        var result = new HLine(container, this.width);
        return result;
    };
    SevenSegment.prototype.createVertical = function (parent, identifier) {
        var container = document.createElement("div");
        container.className = "line vertical-line segment-" + identifier;
        parent.appendChild(container);
        var result = new VLine(container, this.height / 2);
        return result;
    };
    SevenSegment.prototype.deactivate = function () {
        this.segments.forEach(function (segment) {
            segment.setInactive();
        });
    };
    SevenSegment.prototype.setNumber = function (value) {
        if (value < 0 || value > 9) {
            throw "Value " + value + " is out of supported range (0-9).";
        }
        console.log("Setting " + value);
        switch (value) {
            case 0:
                this.get("a").setActive();
                this.get("b").setActive();
                this.get("c").setActive();
                this.get("d").setActive();
                this.get("e").setActive();
                this.get("f").setActive();
                this.get("g").setInactive();
                break;
            case 1:
                this.get("a").setInactive();
                this.get("b").setActive();
                this.get("c").setActive();
                this.get("d").setInactive();
                this.get("e").setInactive();
                this.get("f").setInactive();
                this.get("g").setInactive();
                break;
            case 2:
                this.get("a").setActive();
                this.get("b").setActive();
                this.get("c").setInactive();
                this.get("d").setActive();
                this.get("e").setActive();
                this.get("f").setInactive();
                this.get("g").setActive();
                break;
            case 3:
                this.get("a").setActive();
                this.get("b").setActive();
                this.get("c").setActive();
                this.get("d").setActive();
                this.get("e").setInactive();
                this.get("f").setInactive();
                this.get("g").setActive();
                break;
            case 4:
                this.get("a").setInactive();
                this.get("b").setActive();
                this.get("c").setActive();
                this.get("d").setInactive();
                this.get("e").setInactive();
                this.get("f").setActive();
                this.get("g").setActive();
                break;
            case 5:
                this.get("a").setActive();
                this.get("b").setInactive();
                this.get("c").setActive();
                this.get("d").setActive();
                this.get("e").setInactive();
                this.get("f").setActive();
                this.get("g").setActive();
                break;
            case 6:
                this.get("a").setActive();
                this.get("b").setInactive();
                this.get("c").setActive();
                this.get("d").setActive();
                this.get("e").setActive();
                this.get("f").setActive();
                this.get("g").setActive();
                break;
            case 7:
                this.get("a").setActive();
                this.get("b").setActive();
                this.get("c").setActive();
                this.get("d").setInactive();
                this.get("e").setInactive();
                this.get("f").setInactive();
                this.get("g").setInactive();
                break;
            case 8:
                this.get("a").setActive();
                this.get("b").setActive();
                this.get("c").setActive();
                this.get("d").setActive();
                this.get("e").setActive();
                this.get("f").setActive();
                this.get("g").setActive();
                break;
            case 9:
                this.get("a").setActive();
                this.get("b").setActive();
                this.get("c").setActive();
                this.get("d").setInactive();
                this.get("e").setInactive();
                this.get("f").setActive();
                this.get("g").setActive();
                break;
            default:
                // displays "E"
                this.get("a").setActive();
                this.get("b").setInactive();
                this.get("c").setInactive();
                this.get("d").setActive();
                this.get("e").setActive();
                this.get("f").setActive();
                this.get("g").setActive();
                break;
        }
    };
    return SevenSegment;
}());
var Dimensions = /** @class */ (function () {
    function Dimensions() {
    }
    // Change accordingly to app.less
    Dimensions.cornerWidth = 20;
    Dimensions.cornerHeight = 20;
    return Dimensions;
}());
//# sourceMappingURL=app.js.map