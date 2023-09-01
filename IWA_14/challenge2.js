/*// script.js

function add = a, b => { a + b }

function multiply = a, b => { a - b }

function internal() {
	const added = this.add(this.a, this.b)
	this.multiply(this.a, this.b)
	return this
}

// Not allowed to change below this

const example1 = {
	internal: {
		a: 2,
		b: 4,
		c: 8,
	},
	add,
	multiply,
  calculate: internal
}

const example2 = {
	internal: {
		a: 2,
		b: 2,
		c: 3,
	},
	add,
	multiply,
  calculate: internal
}

example1.calculate()
example2.calculate()
*/

const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

function internal() {
  //calculate added by calling the add function using the this context (which refers to the current object) and accessing properties a and b under the internal object
  const added = this.add(this.internal.a, this.internal.b); //this.add refers to the add function from the example1 object.
  const result = added * this.internal.c; // it calculates result by multiplying added with the c property under the internal object
  console.log(result); // Log the result
}

// Not allowed to change below this

const example1 = {
  internal: {
    a: 2,
    b: 4,
    c: 8,
  },
  add,
  multiply,
  calculate: internal, //calculate property points to the internal function declaration
};

const example2 = {
  internal: {
    a: 2,
    b: 2,
    c: 3,
  },
  add,
  multiply,
  calculate: internal,
};

example1.calculate(); //calls the calculate function defined in example1.
example2.calculate(); //calls the calculate function defined in example2.
