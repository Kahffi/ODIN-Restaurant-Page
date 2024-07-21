import "./style.css";
import baratieLogo from "./assets/images/baratie-logo.png";
const restaurantLogo = document.getElementById("restaurant-logo");
import HomeElement from "./Home";
import MenuElement from "./Menu";
restaurantLogo.src = baratieLogo;

const mainContainer = document.getElementById("content");

const navBtnStateHandler = (function () {
	// track current content for navbar
	let activeContent;

	function setActive(target) {
		activeContent ? null : (activeContent = target);
		// deacivate last button by removing "active" class
		activeContent.classList.contains("active")
			? activeContent.classList.remove("active")
			: console.error("Error");
		// activate the targeted button by adding "active" class
		target.classList.add("active");

		activeContent = target;
	}

	return { setActive };
})();

// to switch content.... hehe
function switchContent(content) {
	if (mainContainer.hasChildNodes()) {
		mainContainer.childNodes.forEach((node) => {
			mainContainer.removeChild(node);
		});
	}
	mainContainer.appendChild(content);
}

// initialize navbar to navigate to their corresponding section
const initNavbar = (function () {
	const buttons = document.querySelectorAll(
		".navbar .buttons-container button"
	);

	navBtnStateHandler.setActive(document.querySelector(".home"));

	buttons.forEach((button) => {
		button.addEventListener("click", handleClick);
	});

	function handleClick(e) {
		if (e.target.classList.contains("menu")) {
			navBtnStateHandler.setActive(e.target);
			switchContent(MenuElement);
		} else if (e.target.classList.contains("home")) {
			navBtnStateHandler.setActive(e.target);
			switchContent(HomeElement);
		} else if (e.target.classList.contains("about")) {
			navBtnStateHandler.setActive(e.target);
			alert("about");
		}
	}
})();

mainContainer.appendChild(HomeElement);
