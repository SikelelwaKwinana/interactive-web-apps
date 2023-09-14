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
