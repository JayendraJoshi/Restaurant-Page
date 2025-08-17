import restaurantLogo from "./images/logo.svg";
const homePage = function(){
    const title = document.createElement("h1");
    title.textContent = "Maharaja's Delight";   
     
    const nav = document.querySelector("nav");
    const buttonsContainer = document.createElement("div");
    const buttonOne = document.createElement("button");
    buttonOne.textContent = "Home";
    const buttonTwo = document.createElement("button");
    buttonTwo.textContent = "Menu";
    const buttonThree = document.createElement("button");
    buttonThree.textContent = "About";
    nav.appendChild(title);
    buttonsContainer.appendChild(buttonOne);
    buttonsContainer.appendChild(buttonTwo);
    buttonsContainer.appendChild(buttonThree);
    nav.appendChild(buttonsContainer);

    const contentDiv = document.querySelector("#content");   
    const main = document.createElement("main");
    const image = document.createElement("img");
    image.src= restaurantLogo;
    image.alt ="logo";
    image.width=300;
    image.height=200;
    
    const description = document.createElement("p");
description.appendChild(document.createTextNode("The best Indian restaurant in your country"));
description.appendChild(document.createElement("br")); // Add a line break
description.appendChild(document.createTextNode("Made with love since 1965"));
    
    
   
    main.appendChild(description);
    main.appendChild(image);
    contentDiv.appendChild(main);
    
}
export { homePage };