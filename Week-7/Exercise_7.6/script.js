var MyQueue = function () {
	this.input = [];
	this.output = [];
};
MyQueue.prototype.push = function (x) {
	this.input.push(x);
};
MyQueue.prototype.pop = function () {
	if (!this.output.length) {
		while (this.input.length) {
			this.output.push(this.input[this.input.length - 1]);
			this.input.pop();
		}
	}
	let x = this.output[this.output.length - 1];
	this.output.pop();
	return x;
};
MyQueue.prototype.peek = function () {
	if (!this.output.length) while (this.input.length) this.output.push(this.input[this.input.length - 1]), this.input.pop();
	return this.output[this.output.length - 1];
};
MyQueue.prototype.empty = function () {
	return this.output.length + this.input.length ? false : true;
};
var obj = new MyQueue();
obj.push(1);
obj.push(2);
console.log(obj.pop());
console.log(obj.peek());
console.log(obj.empty());
