const buttons = document.querySelectorAll(".button");
const body = document.querySelector("body");

buttons.forEach(function (button) {
  console.log(buttons);

  button.addEventListener("click", function (e) {
    console.log(e);
    console.log(e.target);
    switch (e.target.id) {
      case "grey":
        body.style.backgroundColor = "grey";
        break;

      case "blue":
        body.style.backgroundColor = "blue";
        break;

      case "yellow":
        body.style.backgroundColor = "yellow";
        break;

      case "white":
        body.style.backgroundColor = "black";
        break;

      default:
        break;
    }


    // if(e.target.id === "grey"){
    //   body.style.backgroundColor = "grey"
    // } else if(e.target.id === "blue"){
    //   body.style.backgroundColor = "blue"
    // }else if(e.target.id === "white"){
    //   body.style.backgroundColor = "black"
    // } else if(e.target.id === "yellow"){
    //   body.style.backgroundColor = "yellow"
    // }
    
  });
});
