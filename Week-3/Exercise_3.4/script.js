function createStack() {
	let items = new Map();
	return {
		push(item) {
			items.set(item);
		},
		pop() {
			return items.delete();
		},
	};
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop(); // => 5
console.log(stack.items);
