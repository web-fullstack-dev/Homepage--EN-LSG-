{
  const welcome = () => {
    console.log("Hello to all developers, who visit here 🔒")
  };
  
  const toggleBackground = () => {
    const container = document.querySelector(".container")
    const nextColorName = document.querySelector(".js-nextColorName");

    container.classList.toggle("lightBlueBackground");
    nextColorName.innerText = container.classList.contains("lightBlueBackground") ? "lightgray" : "lightblue";
  };
  
  
  const init = () => {
    const changeBackground = document.querySelector(".js-changeBackground");
    
    changeBackground.addEventListener("click", toggleBackground);
    
    welcome();
 };

 init();
}