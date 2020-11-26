{
  // ________________________________________________________________
  // ________________________________________________________________
  const welcome = () => {
    console.log("Hello to all the developers, who visit here ❤️")
  };
  // ________________________________________________________________
  // ________________________________________________________________
  
  const toggleBackground = () => {
    const container = document.documentElement;
    const nextColorName = document.querySelector(".js-nextColorName");  
    const lightBlueBackground = document.querySelector(".lightBlueBackground");

    container.classList.toggle("lightBlueBackground");
    nextColorName.innerText = container.classList.contains("lightBlueBackground") ? "lightgray" : "lightblue";
    lightBlueBackground.addEventListener("click", toggleBackground);
  };
  // ________________________________________________________________

  const init = () => {
    const changeBackground = document.querySelector(".js-changeBackground");
    changeBackground.addEventListener("click", toggleBackground);

    welcome();
  };
  // ________________________________________________________________

  init();
}