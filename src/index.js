import "./styles.css";
import { homePage } from "./HomePage";
import { menuPage } from "./MenuPage";
import { contactPage } from "./ContactPage";

(function renderMain(){
    const contentDiv = document.querySelector("#content");  
    const main = document.createElement("main");
    contentDiv.appendChild(main);
})();
homePage();

(function renderPages(){
    (function renderNav(){
        const title = document.createElement("h1");
        title.textContent = "Maharaja's Delight";   
         
        const nav = document.querySelector("nav");
        const buttonsContainer = document.createElement("div");
        const buttonOne = document.createElement("button");
        buttonOne.textContent = "Home";
        buttonOne.classList.add("Home");
        const buttonTwo = document.createElement("button");
        buttonTwo.textContent = "Menu";
        buttonTwo.classList.add("Menu");
        const buttonThree = document.createElement("button");
        buttonThree.textContent = "Contact";
        buttonThree.classList.add("Contact");
        nav.appendChild(title);
        buttonsContainer.appendChild(buttonOne);
        buttonsContainer.appendChild(buttonTwo);
        buttonsContainer.appendChild(buttonThree);
        nav.appendChild(buttonsContainer);
    })();

    (function addEventListeners(){
        console.log("eventlisteners are beeing set")
        const main = document.querySelector("main");   
        const HomeButton = document.querySelector(".Home");
        const MenuButton = document.querySelector(".Menu");
        const ContactButton = document.querySelector(".Contact");

        HomeButton.addEventListener("click",function(){
            main.innerHTML="";
            main.classList.remove("menuView");
            homePage();
        })
        MenuButton.addEventListener("click",function(){
            main.innerHTML="";
            menuPage();
        })
        ContactButton.addEventListener("click",function(){
            main.innerHTML="";
            main.classList.remove("menuView");
            contactPage();
        })


    })();
    

    


})();

