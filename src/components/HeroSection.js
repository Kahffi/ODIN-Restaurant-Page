import zeffImage from "../assets/images/zeff.png";
import { createClassedElement } from "../utilities/ElementUtility";
import "./HeroSection.css";

const HeroSection = () => {
	const rootElement = createClassedElement("div", "hero-container");
	rootElement.appendChild(mainWrapper);

	return rootElement;
};

const rightSide = (function () {
	const rootElement = createClassedElement("div", "right");

	const headerText = document.createElement("h1");
	headerText.textContent = "The Best Restaurant On East Blue Sea";

	const paragraph = document.createElement("p");
	paragraph.textContent = "Just bring your money";

	rootElement.appendChild(headerText);
	rootElement.appendChild(paragraph);
	return rootElement;
})();

const leftSide = (function () {
	const rootElement = createClassedElement("div", "left");

	const image = new Image();
	image.src = zeffImage;

	rootElement.appendChild(image);

	return rootElement;
})();

const mainWrapper = (function () {
	const wrapper = document.createElement("div");
	wrapper.classList.add("main-wrapper");
	wrapper.appendChild(leftSide);
	wrapper.appendChild(rightSide);

	return wrapper;
})();

export default HeroSection();
