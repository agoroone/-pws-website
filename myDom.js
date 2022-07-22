const btn = document.querySelector(".btn");


btn.addEventListener("mouseleave", (e) => {
  e.preventDefault();
  console.log(e.target.className);

  document.querySelector("header").style.background = "lightblue"
  
    document.querySelector("footer").style.background = "black";
    document.querySelector("body").style.background = "white";
    document.querySelector("body").style.fontFamily =   "Verdana";
//   document.querySelector("body").classList.add("bg-dark");
//   ulElements.lastElementChild.innerHTML = "<h1>Design Thinking</h1>";
});


btn.addEventListener("mouseover", (e) => {
    e.preventDefault();
    console.log(e.target.className);
      document.querySelector("header").style.background = "white";
      document.querySelector("footer").style.background = "black";
      document.querySelector("body").style.background = "red";
      document.querySelector("body").style.fontFamily =   "Georgia";
      document.querySelector("a").style.color=   "black";
  //   document.querySelector("body").classList.add("bg-dark");
  //   ulElements.lastElementChild.innerHTML = "<h1>Design Thinking</h1>";
  });