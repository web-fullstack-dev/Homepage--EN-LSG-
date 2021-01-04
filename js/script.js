{
  const welcome = () => {
    console.log("Hello to all developers, who visit here 🔒")
  };
  
  const toggleBackground = () => {
    const container = document.querySelector(".container")
    const nextColorName = document.querySelector(".js-nextColorName");
    const imageColor = document.querySelector(".imageColor");
    const nameColor = document.querySelector(".nameColor");
    const underlineColor = document.querySelector(".underlineColor");

    container.classList.toggle("whiteBackground");
    nextColorName.innerText = container.classList.contains("whiteBackground") ? "lightskyblue" : "white";
    imageColor.classList.toggle("lightSkyBlueColorImage");
    nameColor.classList.toggle("lightSKyBlueColorName");
    underlineColor.classList.toggle("lightSkyBlueColorUnderline"); 

  };
  
  const init = () => {
    const changeBackground = document.querySelector(".js-changeBackground");
    changeBackground.addEventListener("click", toggleBackground);
    
    welcome();
 };

 init();
}