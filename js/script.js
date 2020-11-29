{
  const welcome = () => {
    console.log("Hello to all developers, who visit here 🔒")
  };
  
  const toggleBackground = () => {
    const container = document.querySelector(".container")
    const nextColorName = document.querySelector(".js-nextColorName");

    container.classList.toggle("whiteBackground");
    nextColorName.innerText = container.classList.contains("whiteBackground") ? "lightgray" : "white";
  };
  
  
  const init = () => {
    const changeBackground = document.querySelector(".js-changeBackground");
    
    changeBackground.addEventListener("click", toggleBackground);
    
    welcome();
 };

 init();
}