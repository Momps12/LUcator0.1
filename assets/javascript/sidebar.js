var sidebarOpen = false;

function toggleNav() {
  if (!sidebarOpen) {
    openNav();
  } else {
    closeNav();
  }
}

function openNav() {
  document.getElementById("mySidebar").style.width = "150px";
  document.getElementById("main").style.marginLeft = "150px";
  sidebarOpen = true;

  // Add a click event listener to the document to close the sidebar when clicked outside
  document.addEventListener('click', closeNavOnOutsideClick);
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  sidebarOpen = false;

  // Remove the click event listener when the sidebar is closed
  document.removeEventListener('click', closeNavOnOutsideClick);
}

function closeNavOnOutsideClick(event) {
  if (!event.target.matches('#mySidebar') && !event.target.matches('button')) {
    closeNav();}}