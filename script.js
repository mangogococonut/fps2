const button1 = document.querySelector(".button1");
const button2 = document.querySelector(".button2");
const bananarain = document.querySelector(".bananarain");
const kidding = document.querySelector(".kidding");
const minion = document.querySelector(".minion");
const linkwrapper = document.querySelector(".linkwrapper");




button1.addEventListener("click", function() {
  bananarain.classList.toggle("active");

});


button2.addEventListener("click", function() {
    kidding.classList.toggle("active");
    minion.classList.toggle("active");
      linkwrapper.classList.toggle("active");
});
