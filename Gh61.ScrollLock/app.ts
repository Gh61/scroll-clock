class Greeter {
	private readonly line: ISegment;
	timerToken: number;

	constructor(element: HTMLElement) {
		this.line = new HLine(element, 200);
	}

	start() {
		this.timerToken = setInterval(() => {
			if (this.line.isActive) {
				this.line.setInactive();
			} else {
				this.line.setActive();
			}
		}, 1000);
	}

	stop() {
		clearTimeout(this.timerToken);
	}

}

window.onload = () => {
	var el = document.getElementById("content");
	var greeter = new Greeter(el);
	greeter.start();
};