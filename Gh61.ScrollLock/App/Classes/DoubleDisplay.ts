class DoubleDisplay implements IDisplay {
	private readonly display0: IDisplay;
	private readonly display1: IDisplay;
	private readonly padWithZero: boolean;

	element: HTMLElement;

	constructor(container: HTMLElement, padWithZero:boolean, segmentWidth:number = 100, segmentHeight:number = 200) {
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

	deactivate(): void {
		this.display0.deactivate();
		this.display1.deactivate();
	}

	setNumber(value:number): void {
		if (value < 0 || value > 99) {
			throw `Value ${value} is out of supported range (0-9).`;
		}

		var d1 = value % 10;
		var d0 = Math.floor(value / 10);

		if (d0 === 0 && !this.padWithZero) {
			this.display0.deactivate();
		} else {
			this.display0.setNumber(d0);
		}
		this.display1.setNumber(d1);
	}
}