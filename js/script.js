{
  const welcome = () => {
    console.log("Hello to all developers, who visit here 🔒")
  };
  
  
  const toggleBackground = () => {
    const container = document.querySelector(".container")
    const nextColorName = document.querySelector(".js-nextColorName");

    const navColor = document.querySelector(".navColor");
    const imageColor = document.querySelector(".imageColor");
    const nameColor = document.querySelector(".nameColor");
    const underlineColor = document.querySelector(".underlineColor");

    const underlineColor__color__lightblue = document.querySelector(".underlineColor__color__lightblue");
    const underlineColor__colorLightBlue = document.querySelector(".underlineColor__colorLightBlue");
    const underlineColor__colorLight = document.querySelector(".underlineColor__colorLight");
    // _________________
    const footerColor = document.querySelector(".footerColor");
    // _________________
    
    container.classList.toggle("whiteBackground");
    nextColorName.innerText = container.classList.contains("whiteBackground") ? "lightblue" : "white";
    
    // navColor.classList.toggle("lightblueNavColor");

    imageColor.classList.toggle("lightblueColorImage");
    nameColor.classList.toggle("lightblueColorName");
    underlineColor.classList.toggle("lightblueColorUnderline"); 

    underlineColor__color__lightblue.classList.toggle("lightblueColorUnderline"); 
    underlineColor__colorLightBlue.classList.toggle("lightblueColorUnderline"); 
    underlineColor__colorLight.classList.toggle("lightblueColorUnderline"); 
    // __________________
    footerColor.classList.toggle("lightblueFooterColor");
    // __________________
  };
  
  
  const init = () => {
    const changeBackground = document.querySelector(".js-changeBackground");
    changeBackground.addEventListener("click", toggleBackground);
    
    welcome();
 };

 init();
}