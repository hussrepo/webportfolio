// Function to reload the page when clicking "Home" while already on the home page
function reloadHome(event) {
    if (window.location.pathname.endsWith("index.html") || window.location.pathname === "/") {
        event.preventDefault(); // Prevent default link behavior
        location.reload(); // Reload the current page
    }
}
