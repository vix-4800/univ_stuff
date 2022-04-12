const panelSwitch = document.querySelector(".profile");
const loginPanel = document.querySelector(".login-options");
const panelIconPath = document.getElementById("profile-expand-icon-path");
const panelIcon = document.getElementById("profile-expand-icon");
const profileName = document.getElementById("profile-name");
panelIcon.addEventListener("click", showPanel);

function showPanel() {
	const shown = loginPanel.getAttribute("data-visibility");

	if (shown === "false") {
		loginPanel.setAttribute("data-visibility", true);
		panelSwitch.setAttribute(
			"style",
			"animation: gradient-change 350ms ease-in-out forwards;"
		);
		panelIconPath.setAttribute("d", "M20 20L4 4m16 0L4 20");
		panelIconPath.setAttribute("stroke", "#ffffff");
		profileName.style.color = "#ffffff";
	} else {
		loginPanel.setAttribute("data-visibility", false);
		panelSwitch.setAttribute(
			"style",
			"animation: gradient-change-back 500ms ease-in-out forwards;"
		);
		panelIconPath.setAttribute("d", "m4 9l8 8l8-8");
		panelIconPath.setAttribute("stroke", "var(--main-font-color)");
		profileName.style.color = "var(--main-font-color)";
	}
}

const themeIconPath = document.getElementById("change-theme-icon-path");
const themeIcon = document.getElementById("change-theme-icon");
themeIcon.addEventListener("mouseover", () => {
	themeIconPath.setAttribute("fill", "#011f3b");
});
themeIcon.addEventListener("mouseout", () => {
	themeIconPath.setAttribute("fill", "#ffffff");
});
themeIcon.addEventListener("click", () => {
	document.body.classList.toggle("light-theme");
});

const helpIconPath = document.getElementById("help-icon-path");
const helpIcon = document.getElementById("help-icon");
helpIcon.addEventListener("mouseover", () => {
	helpIconPath.setAttribute("fill", "#011f3b");
});
helpIcon.addEventListener("mouseout", () => {
	helpIconPath.setAttribute("fill", "#ffffff");
});

const loadAnimation = document.querySelector(".loading");
setInterval(stopAnimation, 4500);
function stopAnimation() {
	loadAnimation.style.display = "none";
}
