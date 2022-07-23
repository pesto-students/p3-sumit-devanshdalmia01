const doTask1 = async () => {
	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log("Doing first task!"));
		}, 2000);
	});
};

const doTask2 = async () => {
	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log("Doing second task!"));
		}, 2000);
	});
};

const doTask3 = async () => {
	return await new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(console.log("Doing third task!"));
		}, 2000);
	});
};

async function allAsync() {
	try {
		await doTask1();
		console.log("First task done!");
		await doTask2();
		console.log("Second task done!");
		await doTask3();
		console.log("Third task done!");
	} catch (err) {
		console.log(`Error ${err}`);
	} finally {
		console.log("Finished all 3 async tasks!");
	}
}
// allAsync();

function* generatorAsync() {
	yield doTask1()
		.then()
		.catch((err) => console.log(`Error ${err}`))
		.finally(() => console.log("First task done!"));
	yield doTask2()
		.then()
		.catch((err) => console.log(`Error ${err}`))
		.finally(() => console.log("Second task done!"));
	yield doTask3()
		.then()
		.catch((err) => console.log(`Error ${err}`))
		.finally(() => console.log("Third task done!"));
	return { done: true };
}
const gen = generatorAsync();
gen.next();
gen.next();
gen.next();
setTimeout(() => console.log("Finished all 3 async tasks from generator!"), 2000);
