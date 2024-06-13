const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");
menuToggleBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  this.classList.toggle("active");
});
for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", function () {
    navbar.classList.toggle("active");
    menuToggleBtn.classList.toggle("active");
  });
}
const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");
window.addEventListener("scroll", function () {
  if (window.scrollY >= 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});
const searchBtn = document.querySelector("[data-search-btn]");
const searchContainer = document.querySelector("[data-search-container]");
const searchSubmitBtn = document.querySelector("[data-search-submit-btn]");
const searchCloseBtn = document.querySelector("[data-search-close-btn]");
const searchBoxElems = [searchBtn, searchSubmitBtn, searchCloseBtn];
for (let i = 0; i < searchBoxElems.length; i++) {
  searchBoxElems[i].addEventListener("click", function () {
    searchContainer.classList.toggle("active");
    document.body.classList.toggle("active");
  });
}
const deliveryBoy = document.querySelector("[data-delivery-boy]");
let deliveryBoyMove = -80;
let lastScrollPos = 0;
window.addEventListener("scroll", function () {
  let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;
  if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
    let activeScrollPos = window.scrollY;
    if (lastScrollPos < activeScrollPos) {
      deliveryBoyMove += 1;
    } else {
      deliveryBoyMove -= 1;
    }
    lastScrollPos = activeScrollPos;
    deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
  }
});
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
});
document.addEventListener("DOMContentLoaded", function() {
  const tabs = document.querySelectorAll(".tab-item");
  const panes = document.querySelectorAll(".tab-pane");
  tabs.forEach(tab => {
    tab.addEventListener("click", function() {
      const tabId = this.getAttribute("data-tab");
      tabs.forEach(tab => tab.classList.remove("active"));
      panes.forEach(pane => pane.classList.remove("active"));
      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });
});
document.getElementById('open-modal').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'flex';
});

document.querySelector('.close-button').addEventListener('click', function() {
  document.getElementById('modal').style.display = 'none';
});

window.addEventListener('click', function(event) {
  const modal = document.getElementById('modal');
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
