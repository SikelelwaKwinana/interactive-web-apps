import {
  createOrderHtml,
  html,
  updateDraggingHtml,
  moveToColumn,
} from "./view.js";
import { createOrderData, updateDragging } from "./data.js";
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */

let editColumn = false;

const handleDragOver = (event) => {
  event.preventDefault();
  const path = event.path || event.composedPath();
  let column = null;

  for (const element of path) {
    const { area } = element.dataset;
    if (area) {
      column = area;
      break;
    }
  }

  if (!column) return;
  updateDragging({ over: column });
  updateDraggingHtml({ over: column });
  editColumn = column;
};
/**
 * Handles drag start with data transfer.
 */
const handleDragStart = (event) => {
  const OrderId = event.target.getAttribute("data-id");
  event.dataTransfer.setData("text/plain", OrderId);
  event.target.classList.add("dragging");
};

/**
 * Handles the drag end event.
 */

const handleDragEnd = (event) => {
  event.preventDefault();
  const OrderId = event.dataTransfer.getData("text/plain");
  const targetColumn = editColumn;
  const orderColumn = document.querySelector(
    `section[data-area="${targetColumn}"]`
  );

  if (OrderId && targetColumn) {
    moveToColumn(OrderId, targetColumn);
  }

  orderColumn.style = "";
  document.querySelector(".dragging")?.classList.remove("dragging");
};
/**
 * Toggles the visibility of the help overlay and updates focus accordingly.
 */

const handleHelpToggle = (event) => {
  const helpOverlay = html.help.overlay;
  const isHelpOpen = helpOverlay.open;

  // Toggle the help overlay state
  helpOverlay.open = !isHelpOpen;

  if (!isHelpOpen) {
    html.help.cancel.focus();
  } else {
    html.other.order.focus();
  }
};

/**
 * Toggles the visibility of the add overlay and manages focus and form reset.
 */
const handleAddToggle = (event) => {
  const adddOrder = html.add.overlay.open;

  if (adddOrder) {
    html.add.overlay.open = false;
    html.add.form.reset();
    html.add.title.focus();
  } else {
    html.add.overlay.open = true;
  }
};
/**
 * Handles the submission of the add form, creates and appends a new order.
 */
const handleAddSubmit = (event) => {
  event.preventDefault();
  const { table, title } = html.add;
  const column = "ordered";

  const orderData = createOrderData({
    table: table.value,
    title: title.value,
    column,
  });
  html.columns.ordered.appendChild(createOrderHtml(orderData));
  html.add.overlay.open = false;
  html.add.form.reset();
};

/**
 * Toggles the visibility of the edit overlay and populates it with order data.
 */
const handleEditToggle = (event) => {
  const addOrder = event.target.closest(".order");
  const editOverlay = html.edit.overlay;

  if (!addOrder) {
    editOverlay.open = false;
    return;
  }

  const orderId = addOrder.getAttribute("data-id");
  const orderTitleElement = addOrder.querySelector(".order__title");
  const orderTableElement = addOrder.querySelector(
    ".order__value[data-order-table]"
  );
  const orderedColumn = addOrder.parentNode.getAttribute("data-column");

  html.edit.title.value = orderTitleElement.textContent;
  html.edit.table.value = orderTableElement.textContent;
  html.edit.id.value = orderId;
  html.edit.column.value = orderedColumn;
  editOverlay.open = true;
};

/**
 * Handles the submission of the edit form, updates order data, and moves to a new column.
 */
const handleEditSubmit = (event) => {
  event.preventDefault();

  const OrderId = html.edit.id.value;
  const editedTitle = html.edit.title.value;
  const editedTable = html.edit.table.value;
  const editedColumn = html.edit.column.value;

  const orderElement = document.querySelector(`[data-id="${OrderId}"]`);
  const titleElement = orderElement.querySelector(".order__title");
  const tableElement = orderElement.querySelector(
    ".order__value[data-order-table]"
  );

  titleElement.textContent = editedTitle;
  tableElement.textContent = editedTable;

  moveToColumn(OrderId, editedColumn);

  html.edit.overlay.open = false;
};

/**
 * Handles the deletion of an order.
 */
const handleDelete = (event) => {
  const orderId = html.edit.id.value;
  const orderToDelete = document.querySelector(`[data-id="${orderId}"]`);

  orderToDelete.remove();

  html.edit.overlay.open = false;
};

html.add.cancel.addEventListener("click", handleAddToggle);
html.other.add.addEventListener("click", handleAddToggle);
html.add.form.addEventListener("submit", handleAddSubmit);

html.other.grid.addEventListener("click", handleEditToggle);
html.edit.cancel.addEventListener("click", handleEditToggle);
html.edit.form.addEventListener("submit", handleEditSubmit);
html.edit.delete.addEventListener("click", handleDelete);

html.help.cancel.addEventListener("click", handleHelpToggle);
html.other.help.addEventListener("click", handleHelpToggle);

for (const htmlColumn of Object.values(html.columns)) {
  htmlColumn.addEventListener("dragstart", handleDragStart);
  htmlColumn.addEventListener("dragend", handleDragEnd);
  htmlColumn.addEventListener("dragover", handleDragOver);
}

for (const htmlArea of Object.values(html.area)) {
  htmlArea.addEventListener("dragover", handleDragOver);
  htmlArea.addEventListener("drop", handleDragEnd);
}
