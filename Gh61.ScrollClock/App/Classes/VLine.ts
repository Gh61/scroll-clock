class VLine implements ISegment {
	private readonly parent: HTMLElement;
	private readonly height: number;
	private readonly element: HTMLElement;

	constructor(parent: HTMLElement, height: number) {
		this.parent = parent;
		this.height = height;

		this.parent.style.height = height + "px";
		this.parent.style.overflowY = "auto";

		this.element = document.createElement("div");
		this.element.style.width = "1px";
		this.parent.appendChild(this.element);

		this.setInactive();
	}

	isActive: boolean;

	setActive(): void {
		this.element.style.height = "200%";
		this.isActive = true;
	}

	setInactive(): void {
		this.element.style.height = "100%";
		this.isActive = false;
	}
}