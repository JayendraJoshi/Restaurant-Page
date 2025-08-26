import location from "./images/location.png";
import phoneSVG from "./images/phone.svg";
import storeSVG from "./images/store.svg";

const contactPage = function(){
    const contactButton = document.querySelector(".Contact");
    contactButton.classList.add("active");

    const main = document.querySelector("main");
    main.classList.add("contactView");
    const contactInfo = document.createElement("div");
    contactInfo.classList.add("contactInfo");
    const phoneSVGImage = document.createElement("img");
    phoneSVGImage.src = phoneSVG;
    phoneSVGImage.classList.add("phoneNumberImage");

    const storeSVGImage = document.createElement("img");
    storeSVGImage.src = storeSVG;
    storeSVGImage.classList.add("storeImage");

    const lineOne = document.createElement("p");
    lineOne.appendChild(phoneSVGImage);
    lineOne.appendChild(document.createTextNode("012 345 678 911"));
    lineOne.classList.add("phoneNumber");

    const lineTwo = document.createElement("p");
    lineTwo.appendChild(storeSVGImage);
    lineTwo.appendChild(document.createTextNode("63-67 Kensington High St, London W8 4SG, UK"))
    lineTwo.classList.add("address");
    const img = document.createElement("img");
    img.src = location;
    img.classList.add("locationImage");
    contactInfo.appendChild(lineOne);
    contactInfo.appendChild(lineTwo);
    main.appendChild(contactInfo);
    main.appendChild(img);

}

export { contactPage };