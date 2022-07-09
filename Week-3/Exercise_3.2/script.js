// const employee = {
// 	fName: "Devansh",
// 	lName: "Dalmia",
// 	getfName: function () {
// 		return this.fName;
// 	},
// 	getlName: function () {
// 		return this.lName;
// 	},
// };
// const employeeLocation = {
// 	getLocation: function () {
// 		return `${this.getfName()} lives in Delhi,India!`;
// 	},
// };
// const usingBind = employeeLocation.getLocation.bind(employee);
// console.log(usingBind());

// const student = {
// 	fName: "Devansh",
// 	lName: "Dalmia",
// 	getfName: function () {
// 		return this.fName;
// 	},
// 	getlName: function () {
// 		return this.lName;
// 	},
// };
// const studentLocation = {
// 	getLocation: function (city, country) {
// 		return `${this.getfName()} lives in ${city},${country}!`;
// 	},
// };
// const usingCall = studentLocation.getLocation.call(student, "Delhi", "India");
// console.log(usingCall);

const teacher = {
	fName: "Devansh",
	lName: "Dalmia",
	getfName: function () {
		return this.fName;
	},
	getlName: function () {
		return this.lName;
	},
};
const teacherLocation = {
	getLocation: function (city, country) {
		return `${this.getfName()} lives in ${city},${country}!`;
	},
};
const usingApply = teacherLocation.getLocation.apply(teacher, ["Delhi", "India"]);
console.log(usingApply);
