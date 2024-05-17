type Square = {
	kind: "square";
	size: number;
};

type Rectangle = {
	kind: "rectangle";
	width: number;
	height: number;
};

type Circle = {
	kind: "circle";
	radius: number;
};

type Shape = Square | Rectangle | Circle;

export function area(shape: Shape): number | string {
	if (shape.kind === "square") return shape.size * shape.size;
	if (shape.kind === "rectangle") return shape.width * shape.height;
	if (shape.kind === "circle") return Math.PI * (shape.radius)^2;
	return "Unknown shape";
}
