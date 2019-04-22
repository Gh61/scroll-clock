class Greeter {
	private readonly display1: SevenSegment;
	timerToken: number;

	constructor(element: HTMLElement) {
		this.display1 = new SevenSegment(element);

	}

	start() {
		this.timerToken = setInterval(() => {
			var s = new Date().getSeconds() % 10;
			this.display1.setNumber(s);
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