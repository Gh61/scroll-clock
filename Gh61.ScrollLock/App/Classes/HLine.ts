class HLine implements ISegment {
	private readonly parent: HTMLElement;
	private readonly width: number;
	private readonly element: HTMLElement;

	constructor(parent: HTMLElement, width: number) {
		this.parent = parent;
		this.width = width;

		this.parent.style.width = width + "px";
		this.parent.style.overflowX = "auto";

		this.element = document.createElement("div");
		this.element.style.height = "1px";
		this.parent.appendChild(this.element);

		this.setInactive();
	}

	isActive: boolean;

	setActive(): void {
		this.element.style.width = "200%";
		this.isActive = true;
	}

	setInactive(): void {
		this.element.style.width = "100%";
		this.isActive = false;
	}
}