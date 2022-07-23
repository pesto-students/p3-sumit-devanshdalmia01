"use strict";
const customPromiseState = {
	PENDING: "PENDING",
	RESOLVED: "RESOLVED",
	REJECTED: "REJECTED",
};
class customPromise {
	constructor(fn) {
		this.customPromiseState = customPromiseState.PENDING;
		this.resolver = this.resolver.bind(this);
		this.rejector = this.rejector.bind(this);
		this.catchFn = null;
		this.thenFn = null;
		fn(this.resolver, this.rejector);
	}
	resolver(resolvedData) {
		if (this.customPromiseState === customPromiseState.PENDING) {
			this.thenFn && this.thenFn(resolvedData);
		}
		this.customPromiseState = customPromiseState.RESOLVED;
	}
	rejector(rejectedData) {
		if (this.customPromiseState === customPromiseState.PENDING) {
			this.catchFn && this.catchFn(rejectedData);
		}
		this.customPromiseState = customPromiseState.REJECTED;
	}
	then(thenFn) {
		this.thenFn = thenFn;
		return this;
	}
	catch(catchFn) {
		this.catchFn = catchFn;
		return this;
	}
}
const getNumber = () =>
	new customPromise((resolve, reject) => {
		const randomNumber = Math.floor(Math.random() * 100) + 1;
		console.log(randomNumber);
		setTimeout(() => {
			if (randomNumber % 5 === 0) {
				reject(randomNumber);
			}
			resolve(randomNumber);
		}, randomNumber * 10);
	});

getNumber()
	.then(function (result) {
		console.log(`${result} is not divisible by 5.`);
	})
	.catch(function (result) {
		console.log(`${result} is divisible by 5.`);
	});
