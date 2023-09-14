
const add = (a, b) => a + b;

const multiply = (a, b) => a * b;

/*call add function to calc added variable
 *access properties a and b under the internal object
 */
function internal() {
  
  const added = this.add(this.internal.a, this.internal.b); //this.add refers to the add function from the example1 object.
  const result = added * this.internal.c; // calculate result by * added with the c property in internal object
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
