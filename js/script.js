{
  const welcome = () => {
    console.log("Hello to all developers, who visit here 🔒")
  };
  
  
  const toggleBackground = () => {
    const container = document.querySelector(".container")
    const nextColorName = document.querySelector(".js-nextColorName");
    // _________________
    const navColor = document.querySelector(".navColor");
    // _________________
    const imageColor = document.querySelector(".imageColor");
    const nameColor = document.querySelector(".nameColor");
    const underlineColor = document.querySelector(".underlineColor");
    // _________________
    const footerColor = document.querySelector(".footerColor");
    // _________________
    
    container.classList.toggle("whiteBackground");
    nextColorName.innerText = container.classList.contains("whiteBackground") ? "lightblue" : "white";
    
    // __________________
    navColor.classList.toggle("lightBlueNavColor");
    // __________________
    imageColor.classList.toggle("grayColorImage");
    nameColor.classList.toggle("grayColorName");
    underlineColor.classList.toggle("grayColorUnderline"); 
    // __________________
    footerColor.classList.toggle("lightBlueFooterColor");
    // __________________
  };
  
  
  const init = () => {
    const changeBackground = document.querySelector(".js-changeBackground");
    changeBackground.addEventListener("click", toggleBackground);
    
    welcome();
 };

 init();
}