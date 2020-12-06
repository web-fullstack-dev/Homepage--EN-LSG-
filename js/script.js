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

    const underlineColor__2 = document.querySelector(".underlineColor__2");
    const underlineColor__3 = document.querySelector(".underlineColor__3");
    const underlineColor__4 = document.querySelector(".underlineColor__4");
    // _________________
    const footerColor = document.querySelector(".footerColor");
    // _________________
    
    container.classList.toggle("whiteBackground");
    nextColorName.innerText = container.classList.contains("whiteBackground") ? "lightblue" : "white";
    
    // navColor.classList.toggle("lightblueNavColor");

    imageColor.classList.toggle("lightblueColorImage");
    nameColor.classList.toggle("lightblueColorName");
    underlineColor.classList.toggle("lightblueColorUnderline"); 

    underlineColor__2.classList.toggle("lightblueColorUnderline"); 
    underlineColor__3.classList.toggle("lightblueColorUnderline"); 
    underlineColor__4.classList.toggle("lightblueColorUnderline"); 
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