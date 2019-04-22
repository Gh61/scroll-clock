interface IDisplay {
	deactivate(): void;
	setNumber(value: number): void;

	element:HTMLElement;
}