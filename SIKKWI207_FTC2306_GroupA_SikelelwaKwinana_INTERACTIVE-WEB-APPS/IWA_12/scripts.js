// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 


// Loop through each book
for (let i = 1; i <= 3; i++) {
    const book = document.getElementById(`book${i}`)
    const statusElement = book.querySelector('.status')
    const reserveButton = book.querySelector('.reserve')
    const checkoutButton = book.querySelector('.checkout')
    const checkinButton = book.querySelector('.checkin')

    // Get the current status from the status element's text content
    const statusValue = statusElement.textContent.trim()

    // Update status color
    statusElement.style.color = STATUS_MAP[statusValue].color

    // Set button states based on STATUS_MAP
    reserveButton.disabled = !STATUS_MAP[statusValue].canReserve
    checkoutButton.disabled = !STATUS_MAP[statusValue].canCheckout
    checkinButton.disabled = !STATUS_MAP[statusValue].canCheckIn
}