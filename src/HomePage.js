import restaurantLogo from "./images/logo.svg";
const homePage = function () {
  const homeButton = document.querySelector(".Home");
  homeButton.classList.add("active");
  const contentDiv = document.querySelector("#content");
  const main = document.querySelector("main");
  main.classList.add("homeView");
  const image = document.createElement("img");
  image.src = restaurantLogo;
  image.alt = "logo";
  image.classList.add("logo");

  const description = document.createElement("p");
  description.classList.add("descriptionText");
  description.appendChild(
    document.createTextNode("The best Indian restaurant in your country")
  );
  description.appendChild(document.createElement("br")); 
  description.appendChild(document.createTextNode("Made with love since 1965"));

  main.appendChild(description);
  main.appendChild(image);
  contentDiv.appendChild(main);
};
export { homePage };
