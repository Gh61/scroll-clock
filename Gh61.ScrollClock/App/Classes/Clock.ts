class Clock {
	private readonly hoursDisplay: IDisplay;
	private readonly dots0: IDisplay;
	private readonly minutesDisplay: IDisplay;
	private readonly dots1: IDisplay;
	private readonly secondsDisplay: IDisplay;

	constructor(container: HTMLElement, segmentWidth:number = 100, segmentHeight:number = 200) {
		var clockElement = document.createElement("div");
		clockElement.className = "clock";
		container.appendChild(clockElement);

		this.hoursDisplay = new DoubleDisplay(clockElement, false, segmentWidth, segmentHeight);
		this.minutesDisplay = new DoubleDisplay(clockElement, true, segmentWidth, segmentHeight);
		this.secondsDisplay = new DoubleDisplay(clockElement, true, segmentWidth, segmentHeight);

		this.hoursDisplay.element.style.display = "inline-block";
		this.minutesDisplay.element.style.display = "inline-block";
		this.secondsDisplay.element.style.display = "inline-block";

		this.hoursDisplay.element.style.marginRight = Math.floor(segmentWidth/3) + "px";
		this.minutesDisplay.element.style.marginRight = Math.floor(segmentWidth/3) + "px";
	}

	setClock(clock: Date):void {
		var hours = clock.getHours();
		var minutes = clock.getMinutes();
		var seconds = clock.getSeconds();

		this.secondsDisplay.setNumber(seconds);
		this.minutesDisplay.setNumber(minutes);
		this.hoursDisplay.setNumber(hours);
	}
}