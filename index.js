const barIcon = document.getElementById("mobile_menu")
barIcon.addEventListener("click", function () {
	let navBar = document.getElementById("wrapper");
	navBar.style.display === "block" ? navBar.style.display = "none" : navBar.style.display = "block";
}
);