class Clock {
	private readonly hoursDisplay: IDisplay;
	private readonly dots0: IDisplay;
	private readonly minutesDisplay: IDisplay;
	private readonly dots1: IDisplay;
	private readonly secondsDisplay: IDisplay;
	private dotsState: boolean;

	constructor(container: HTMLElement, useDots:boolean, segmentWidth:number = 100, segmentHeight:number = 200) {
		var clockElement = document.createElement("div");
		clockElement.className = "clock";
		container.appendChild(clockElement);

		this.hoursDisplay = new DoubleDisplay(clockElement, false, segmentWidth, segmentHeight);
		if (useDots) {
			this.dots0 = new SevenSegment(clockElement, Dimensions.cornerWidth, Math.floor(segmentHeight / 2));
		}
		this.minutesDisplay = new DoubleDisplay(clockElement, true, segmentWidth, segmentHeight);
		if (useDots) {
			this.dots1 = new SevenSegment(clockElement, Dimensions.cornerWidth, Math.floor(segmentHeight / 2));
		}
		this.secondsDisplay = new DoubleDisplay(clockElement, true, segmentWidth, segmentHeight);

		this.hoursDisplay.element.style.display = "inline-block";
		this.minutesDisplay.element.style.display = "inline-block";
		this.secondsDisplay.element.style.display = "inline-block";

		// dots
		if (useDots) {
			this.dots0.element.style.display = "inline-block";
			this.dots1.element.style.display = "inline-block";

			this.dots0.element.style.marginBottom = Math.floor(segmentHeight / 4) + "px";
			this.dots1.element.style.marginBottom = Math.floor(segmentHeight / 4) + "px";

			this.dots0.element.style.marginRight = Math.floor(segmentWidth / 3) + "px";
			this.dots1.element.style.marginRight = Math.floor(segmentWidth / 3) + "px";

		} else {

			this.hoursDisplay.element.style.marginRight = Math.floor(segmentWidth/3) + "px";
			this.minutesDisplay.element.style.marginRight = Math.floor(segmentWidth / 3) + "px";
		}
	}

	setClock(clock: Date):void {
		var hours = clock.getHours();
		var minutes = clock.getMinutes();
		var seconds = clock.getSeconds();

		this.secondsDisplay.setNumber(seconds);
		this.minutesDisplay.setNumber(minutes);
		this.hoursDisplay.setNumber(hours);

		this.toggleDots();
	}

	toggleDots(): void {
		if (this.dots0 != null && this.dots1 != null) {
			if (this.dotsState) {
				this.dots0.setNumber(1);
				this.dots1.setNumber(1);
			} else {
				this.dots0.deactivate();
				this.dots1.deactivate();
			}
			this.dotsState = !this.dotsState;
		}
	}
}