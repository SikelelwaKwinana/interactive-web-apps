// script.js

/*const 1-root = document(order1),
const 1-biscuits: document(biscuits),
const 1-donuts: document(donuts),
const 1-pancakes: document(pancakes),
const 1-status: document(status)

const 2-root = document(order2),
const 2-biscuits: document(biscuits),
const 2-donuts: document(donuts),
const 2-pancakes: document(pancakes),
const 2-status: document(status)

const 3-root = document(order3),
const 3-biscuits: document(biscuits),
const 3-donuts: document(donuts),
const 3-pancakes: document(pancakes),
const 3-status: document(status)

1-biscuits= 1-root.biscuits,
1-donuts = 1-root.donuts,
1-pancakes = 1-root.pancakes,
1-status = 1-root.status ? Delivered : Pending

2-biscuits= 2-root.biscuits,
2-donuts = 2-root.donuts,
2-pancakes = 2-root.pancakes,
2-status = 2-root.status ? Delivered : Pending

3-biscuits= 3-root.biscuits,
3-donuts = 3-root.donuts,
3-pancakes = 3-root.pancakes,
3-status = 3-root.status ? Delivered : Pending
*/
// // Get references to the dl elements

// Get references to the dl elements
const order1 = document.querySelector('[data-key="order1"]');
const order2 = document.querySelector('[data-key="order2"]');
const order3 = document.querySelector('[data-key="order3"]');

// Function to update the order information
function updateOrder(orderElement, biscuits, donuts, pancakes, delivered) {
  // Get references to the specific elements inside the order dl
  const biscuitsElement = orderElement.querySelector(".biscuits .count");
  const donutsElement = orderElement.querySelector(".donuts .count");
  const pancakesElement = orderElement.querySelector(".pancakes .count");
  const statusElement = orderElement.querySelector(".status dd");

  // Update the text content of the elements
  biscuitsElement.textContent = biscuits;
  donutsElement.textContent = donuts;
  pancakesElement.textContent = pancakes;
  statusElement.textContent = delivered ? "Delivered" : "Pending";
}

// Update Order 1
updateOrder(
  order1,
  order1.dataset.biscuits,
  order1.dataset.donuts,
  order1.dataset.pancakes,
  order1.dataset.delivered === "true"
);

// Update Order 2
updateOrder(
  order2,
  order2.dataset.biscuits,
  order2.dataset.donuts,
  order2.dataset.pancakes,
  order2.dataset.delivered === "true"
);

// Update Order 3
updateOrder(
  order3,
  order3.dataset.biscuits,
  order3.dataset.donuts,
  order3.dataset.pancakes,
  order3.dataset.delivered === "true"
);
