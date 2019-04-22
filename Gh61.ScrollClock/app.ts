class Greeter {
	private readonly clock: Clock;
	timerToken: number;

	constructor(element: HTMLElement) {
		this.clock = new Clock(element, true);
	}

	start() {
		this.timerToken = setInterval(() => {
			this.clock.setClock(new Date());
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