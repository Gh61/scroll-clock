class SevenSegment implements IDisplay {
	private readonly segments: ISegment[];
	private readonly height: number;
	private readonly width: number;

	element: HTMLElement;

	constructor(container: HTMLElement, width:number = 100, height:number = 200) {
		this.segments = new Array(7);
		this.width = width;
		this.height = height;

		this.element = document.createElement("div");
		this.element.className = "display";
		this.element.style.width = (width + 2*Dimensions.cornerWidth) + "px";
		this.element.style.height = (height + 3*Dimensions.cornerHeight) + "px";
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

	private get(c: string): ISegment {
		return this.segments[(c.charCodeAt(0) - 97)];
	}

	private createHorizontal(parent: HTMLElement, identifier:string):ISegment {
		var container = document.createElement("div");
		container.className = `line horizontal-line segment-${identifier}`;
		parent.appendChild(container);

		var result = new HLine(container, this.width);
		return result;
	}

	private createVertical(parent: HTMLElement, identifier:string):ISegment {
		var container = document.createElement("div");
		container.className = `line vertical-line segment-${identifier}`;
		parent.appendChild(container);

		var result = new VLine(container, this.height / 2);
		return result;
	}

	deactivate(): void {
		this.segments.forEach((segment) => {
			segment.setInactive();
		});
	}

	setNumber(value: number): void {
		if (value < 0 || value > 9) {
			throw `Value ${value} is out of supported range (0-9).`;
		}

		console.log(`Setting ${value}`);

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
	}
}