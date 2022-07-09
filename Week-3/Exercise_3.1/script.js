function memoize(fn) {
	const cache = new Map();
	return function (...arguments) {
		const key = arguments.toString();
		if (cache.has(key)) {
			return cache.get(key);
		}
		cache.set(key, fn(...arguments));
		return cache.get(key);
	};
}

function fibonnaci(n) {
	if (n < 2) {
		return n;
	}
	return fibonnaci(n - 1) + fibonnaci(n - 2);
}

const memoizefibonnaci = memoize(fibonnaci);
console.time();
console.log(memoizefibonnaci(45));
console.timeEnd();
console.time();
console.log(memoizefibonnaci(45));
console.timeEnd();
console.time();
console.log(memoizefibonnaci(45));
console.timeEnd();
console.time();
console.log(memoizefibonnaci(45));
console.timeEnd();
