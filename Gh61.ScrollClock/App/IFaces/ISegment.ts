interface ISegment {
	readonly isActive: boolean;

	setActive(): void;
	setInactive(): void;
}