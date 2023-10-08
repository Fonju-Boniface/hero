let tablinks = document.getElementsByClassName("tab-links");
let Mathcontents = document.getElementsByClassName("math-content");
let navTabs = document.querySelector("#navTabs")

function openMath(Mathname) {
  for (tablink of tablinks) {
    tablink.classList.remove("active-tab");
  }
  for (Mathcontent of Mathcontents) {
    Mathcontent.classList.remove("Active-math-content");
  }
 event.currentTarget.classList.add("active-tab");

  document.getElementById(Mathname).classList.add("Active-math-content");
  navTabs.classList.remove("active-navTabs");
  openNTabs.classList.remove("active");
  openNTabs.innerHTML = 'Open Nav-Tabs'
}



let openNTabs = document.querySelector("#openNTabs")
openNTabs.addEventListener("click", () => {
  openNTabs.classList.toggle("active");
  if (openNTabs.classList.contains("active")) {
    navTabs.classList.add("active-navTabs");
    openNTabs.innerHTML = 'Close Nav-Tabs'
  }
  else{
    navTabs.classList.remove("active-navTabs");
    openNTabs.innerHTML = 'Open Nav-Tabs'

  }
}
)

