function createIncrement() {
	let count = 0;
	function increment() {
		count++;
	}
	let message = `Count is ${count}`;
	function log() {
		console.log(message);
	}
	return [increment, log];
}
const [increment, log] = createIncrement();
increment();
increment();
increment();
log();
// Output - "Count is 0"
// This is because the when increment() is called three times, it didn't make any change to message
// and because of that when we call log() the value stored in message is displayed which was constant all along.
