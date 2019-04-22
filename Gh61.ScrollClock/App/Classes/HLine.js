var HLine = /** @class */ (function () {
    function HLine(parent, width) {
        this.parent = parent;
        this.width = width;
        this.parent.style.width = width + "px";
        this.parent.style.overflowX = "auto";
        this.element = document.createElement("div");
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
//# sourceMappingURL=HLine.js.map