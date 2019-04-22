var DoubleDisplay = /** @class */ (function () {
    function DoubleDisplay(container, padWithZero, segmentWidth, segmentHeight) {
        if (segmentWidth === void 0) { segmentWidth = 100; }
        if (segmentHeight === void 0) { segmentHeight = 200; }
        this.element = document.createElement("div");
        this.element.className = "double-display";
        container.appendChild(this.element);
        this.padWithZero = padWithZero;
        this.display0 = new SevenSegment(this.element, segmentWidth, segmentHeight);
        this.display1 = new SevenSegment(this.element, segmentWidth, segmentHeight);
        // inline with space
        this.display0.element.style.display = "inline-block";
        this.display0.element.style.marginRight = "5px";
        this.display1.element.style.display = "inline-block";
    }
    DoubleDisplay.prototype.deactivate = function () {
        this.display0.deactivate();
        this.display1.deactivate();
    };
    DoubleDisplay.prototype.setNumber = function (value) {
        if (value < 0 || value > 99) {
            throw "Value " + value + " is out of supported range (0-9).";
        }
        var d1 = value % 10;
        var d0 = Math.floor(value / 10);
        if (d0 === 0 && !this.padWithZero) {
            this.display0.deactivate();
        }
        else {
            this.display0.setNumber(d0);
        }
        this.display1.setNumber(d1);
    };
    return DoubleDisplay;
}());
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
var SevenSegment = /** @class */ (function () {
    function SevenSegment(container, width, height) {
        if (width === void 0) { width = 100; }
        if (height === void 0) { height = 200; }
        this.segments = new Array(7);
        this.width = width;
        this.height = height;
        this.element = document.createElement("div");
        this.element.className = "display";
        this.element.style.width = (width + 2 * Dimensions.cornerWidth) + "px";
        this.element.style.height = (height + 3 * Dimensions.cornerHeight) + "px";
        container.appendChild(this.element);
        this.segments[0] = this.createHorizontal(this.element, "a");
        this.segments[1] = this.createVertical(this.element, "b");
        this.segments[2] = this.createVertical(this.element, "c");
        this.segments[3] = this.createHorizontal(this.element, "d");
        this.segments[4] = this.createVertical(this.element, "e");
        this.segments[5] = this.createVertical(this.element, "f");
        this.segments[6] = this.createHorizontal(this.element, "g");
        this.deactivate();
    }
    SevenSegment.prototype.get = function (c) {
        return this.segments[(c.charCodeAt(0) - 97)];
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
var Dimensions = /** @class */ (function () {
    function Dimensions() {
    }
    // Change accordingly to app.less
    Dimensions.cornerWidth = 20;
    Dimensions.cornerHeight = 20;
    return Dimensions;
}());
var Greeter = /** @class */ (function () {
    function Greeter(element) {
        this.clock = new Clock(element);
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () {
            _this.clock.setClock(new Date());
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
var Clock = /** @class */ (function () {
    function Clock(container, segmentWidth, segmentHeight) {
        if (segmentWidth === void 0) { segmentWidth = 100; }
        if (segmentHeight === void 0) { segmentHeight = 200; }
        var clockElement = document.createElement("div");
        clockElement.className = "clock";
        container.appendChild(clockElement);
        this.hoursDisplay = new DoubleDisplay(clockElement, false, segmentWidth, segmentHeight);
        this.minutesDisplay = new DoubleDisplay(clockElement, true, segmentWidth, segmentHeight);
        this.secondsDisplay = new DoubleDisplay(clockElement, true, segmentWidth, segmentHeight);
        this.hoursDisplay.element.style.display = "inline-block";
        this.minutesDisplay.element.style.display = "inline-block";
        this.secondsDisplay.element.style.display = "inline-block";
        this.hoursDisplay.element.style.marginRight = Math.floor(segmentWidth / 3) + "px";
        this.minutesDisplay.element.style.marginRight = Math.floor(segmentWidth / 3) + "px";
    }
    Clock.prototype.setClock = function (clock) {
        var hours = clock.getHours();
        var minutes = clock.getMinutes();
        var seconds = clock.getSeconds();
        this.secondsDisplay.setNumber(seconds);
        this.minutesDisplay.setNumber(minutes);
        this.hoursDisplay.setNumber(hours);
    };
    return Clock;
}());
//# sourceMappingURL=app.js.map