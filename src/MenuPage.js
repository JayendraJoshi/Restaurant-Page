import daal from "./images/daal.png";
import chapati from "./images/chapati.png";
import paneer from "./images/paneer.png";
import samosa from "./images/samosa.png";
import dosa from "./images/masalaDosa.png";
import chickenTikka from "./images/chickenTikkaMasala.png";

const menuPage = function(){
    const main = document.querySelector("main");
    console.log("MenuPage");

    const daalImage = document.createElement("img");
    daalImage.src = daal;
    daalImage.classList.add("dish");
    const daalTitle = document.createElement("h3");
    daalTitle.textContent = "Daal";
    const daalDescription = document.createElement("p");
    daalDescription.textContent = "Slow-cooked lentils tempered with garlic, cumin, and aromatic spices";
    const daalContainer = document.createElement("div");
    daalContainer.appendChild(daalTitle);
    daalContainer.appendChild(daalImage);
    daalContainer.appendChild(daalDescription);

    const chapatiImage = document.createElement("img");
    chapatiImage.classList.add("dish");
    chapatiImage.src = chapati;
    const chapatiTitle = document.createElement("h3");
    chapatiTitle.textContent = "Chapati";
    const chapatiDescription = document.createElement("p");
    chapatiDescription.textContent="Soft, whole wheat flatbread with chutney and pickles";
    const chapatiContainer = document.createElement("div");
    chapatiContainer.appendChild(chapatiTitle);
    chapatiContainer.appendChild(chapatiImage);
    chapatiContainer.appendChild(chapatiDescription);

    const paneerImage = document.createElement("img");
    paneerImage.classList.add("dish");
    paneerImage.src = paneer;
    const paneerTitle = document.createElement("h3");
    paneerTitle.textContent = "Paneer";
    const paneerDescription = document.createElement("p");
    paneerDescription.textContent = "Deliciously fresh Indian cottage cheese simmered in a rich and creamy tomato butter gravy.";
    const paneerContainer = document.createElement("div");
    paneerContainer.appendChild(paneerTitle);
    paneerContainer.appendChild(paneerImage);
    paneerContainer.appendChild(paneerDescription);

    const samosaImage = document.createElement("img");
    samosaImage.classList.add("dish");
    samosaImage.src = samosa;
    const samosaTitle = document.createElement("h3");
    samosaTitle.textContent = "Samosa";
    const samosaDescription = document.createElement("p");
    samosaDescription.textContent="Crispy pastry stuffed with spiced potatoes and peas, served with chutneys";
    const samosaContainer = document.createElement("div");
    samosaContainer.appendChild(samosaTitle);
    samosaContainer.appendChild(samosaImage);
    samosaContainer.appendChild(samosaDescription);

    const dosaImage = document.createElement("img");
    dosaImage.classList.add("dish");
    dosaImage.src = dosa;
    const dosaTitle = document.createElement("h3");
    dosaTitle.textContent = "Masala Dosa";
    const dosaDescription = document.createElement("p");
    dosaDescription.textContent="Thin, crispy fermented rice and lentil dosa filled with a spiced potato mash, served with sambar and chutneys"
    const dosaContainer = document.createElement("div");

    dosaContainer.appendChild(dosaTitle);
    dosaContainer.appendChild(dosaImage);
    dosaContainer.appendChild(dosaDescription);

    const chickenTikkaImage = document.createElement("img");
    chickenTikkaImage.classList.add("dish");
    chickenTikkaImage.src = chickenTikka;
    const chickenTikkaTitle = document.createElement("h3");
    chickenTikkaTitle.textContent = "Chicken Tikka Masala";
    const chickenTikkaDescription = document.createElement("p");
    chickenTikkaDescription.textContent="Tandoor-grilled chicken simmered in a creamy tomato and spice-infused sauce";
    const chickenTikkaContainer = document.createElement("div");
    chickenTikkaContainer.appendChild(chickenTikkaTitle);
    chickenTikkaContainer.appendChild(chickenTikkaImage);
    chickenTikkaContainer.appendChild(chickenTikkaDescription);

    main.appendChild(daalContainer);
    main.appendChild(chapatiContainer);
    main.appendChild(paneerContainer);
    main.appendChild(samosaContainer);
    main.appendChild(dosaContainer);
    main.appendChild(chickenTikkaContainer);

    main.classList.add("menuView");

}
export {menuPage};