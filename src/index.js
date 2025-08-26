import "./styles.css";
import { homePage } from "./HomePage";
import { menuPage } from "./MenuPage";
import { contactPage } from "./ContactPage";
function renderInitialPage() {
  (function renderMain() {
    const contentDiv = document.querySelector("#content");
    const main = document.createElement("main");
    contentDiv.appendChild(main);
  })();
  (function renderNav() {
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
  homePage();
}
const classRemovers = function () {
  function removeActiveClassFromButtons() {
    const homeButton = document.querySelector(".Home");
    const menuButton = document.querySelector(".Menu");
    const contactButton = document.querySelector(".Contact");
    homeButton.classList.remove("active");
    menuButton.classList.remove("active");
    contactButton.classList.remove("active");
  }
  function removeAllClassesFromMain() {
    const main = document.querySelector("main");
    main.classList.remove("menuView");
    main.classList.remove("homeView");
    main.classList.remove("contactView");
  }
  return {
    removeActiveClassFromButtons,
    removeAllClassesFromMain,
  };
};
function addEventListeners() {
  const removerFunctions = classRemovers();
  const main = document.querySelector("main");
  const HomeButton = document.querySelector(".Home");
  const MenuButton = document.querySelector(".Menu");
  const ContactButton = document.querySelector(".Contact");

  HomeButton.addEventListener("click", function () {
    main.innerHTML = "";
    removerFunctions.removeAllClassesFromMain();
    removerFunctions.removeActiveClassFromButtons();
    homePage();
  });
  MenuButton.addEventListener("click", function () {
    main.innerHTML = "";
    removerFunctions.removeAllClassesFromMain();
    removerFunctions.removeActiveClassFromButtons();
    menuPage();
  });
  ContactButton.addEventListener("click", function () {
    main.innerHTML = "";
    removerFunctions.removeAllClassesFromMain();
    removerFunctions.removeActiveClassFromButtons();
    contactPage();
  });
}
renderInitialPage();
addEventListeners();
