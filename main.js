//Select element function
// add the class "open" to body to show fa-bars
const selectElement = function(element) {
  return document.querySelector(element);
};

let menuToggler = selectElement(".menu-toggle"); // it works similar to Jquery
let body = selectElement("body");

menuToggler.addEventListener("click", function() {
  body.classList.toggle("open");
});
