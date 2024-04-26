const nextBtn = document.querySelector(".arrow-right");
const backBtn = document.querySelector(".arrow-left");
const fsts = document.querySelectorAll(".fst");
const borders = document.querySelectorAll(".borderr");
const mainBorders = document.querySelectorAll(".main-border");

let thePxOfLeft = 0;
let number = 0;
let index = 0;

let touchFind = false;
document.addEventListener("touchstart", () => {
	touchFind = true;
});
document.addEventListener("touchend", () => {
	touchFind = false;
});

function contBorder() {
	mainBorders.forEach((mainBorder, idx) => {
		mainBorder.style.transform = "scaleX(0)";
		mainBorder.style.transition = "0.8s";
		if (idx === index) {
			mainBorder.style.transition = "8s";
			mainBorder.style.transform = "scaleX(1)";
		}
	});
}
setTimeout(() => {
	contBorder();
}, 500);

let callTheFunctions;
function setTheInterval() {
	callTheFunctions = setInterval(() => {
		nextFunction();
		contBorder();
	}, 7000);
}
setTheInterval();

function resetAllf() {
	thePxOfLeft = 0;
	number = 0;
	index = 0;
}
function resetAlls() {
	thePxOfLeft = 200;
	number = 2;
	index = 2;
}

fsts.forEach((fst) => {
	fst.style.left = "0";
});

nextBtn.addEventListener("click", () => {
	clearInterval(callTheFunctions);
	nextFunction();
	contBorder();
	setTheInterval();
});
function nextFunction() {
	backToFirst();

	if (number >= 2) return;
	thePxOfLeft = thePxOfLeft + 100;
	fsts.forEach((fst) => {
		fst.style.left = `-${thePxOfLeft}%`;
	});

	number++;
	index++;
}

backBtn.addEventListener("click", () => {
	clearInterval(callTheFunctions);
	backFunction();
	contBorder();
	setTheInterval();
});
function backFunction() {
	backToLast();

	if (number <= 0) return;
	thePxOfLeft = thePxOfLeft - 100;
	fsts.forEach((fst) => {
		fst.style.left = `-${thePxOfLeft}%`;
	});

	number--;
	index--;
}

function backToFirst() {
	if (number === 2) {
		fsts.forEach((fst) => {
			fst.style.left = `0`;
		});
		setTimeout(() => {
			resetAllf();
			contBorder();
		}, 500);
	}
}

function backToLast() {
	if (number === 0) {
		thePxOfLeft = 200;
		fsts.forEach((fst) => {
			fst.style.left = `-${thePxOfLeft}%`;
		});
		setTimeout(() => {
			resetAlls();
			contBorder();
		}, 500);
	}
}

// for swipe
let startX = 0;
let startY = 0;

document.addEventListener("touchstart", (event) => {
	startX = event.touches[0].clientX;
	startY = event.touches[0].clientY;
});

document.addEventListener("touchend", (event) => {
	let endX = event.changedTouches[0].clientX;
	let endY = event.changedTouches[0].clientY;
	let deltaX = endX - startX;
	let deltaY = endY - startY;

	if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 10) {
		if (deltaX > 0) {
			clearInterval(callTheFunctions);
			backFunction();
			contBorder();
			setTheInterval();
		} else {
			clearInterval(callTheFunctions);
			nextFunction();
			contBorder();
			setTheInterval();
		}
	}
});

const logo = document.querySelector(".logo");
const btn = document.querySelector(".btn");
const menuT = document.querySelector(".menu-t");
const menuCup = document.querySelector(".menu-cup");
const appIcons = document.querySelectorAll(".app-icon");
const btnIcons = document.querySelectorAll(".btn-icon");
const typeIcons = document.querySelectorAll(".type-icon");
const coffeeWraps = document.querySelectorAll(".coffee-items-wrap");
const homePage = document.querySelector(".homePageWrapper");
const menuPage = document.querySelector(".menuPageWrapper");
const menuBtns = document.querySelectorAll(".menuBtn");
const clickEvents = document.querySelectorAll(".clickEvent");
const forAbsolutes = document.querySelectorAll(".forAbsolute");
const closeBtns = document.querySelectorAll(".closeBtn");
const overlay = document.querySelector(".overlay");
const coffeeItems = document.querySelectorAll(".coffee-item");
const updateDiv = document.querySelector(".updateDiv");
const burgerWrapper = document.querySelector(".burgerWrapper");
const mainToggle = document.querySelector(".burger-icon-wrap");

mainToggle.addEventListener("click", () => {
	if (mainToggle.innerText == "=") {
		burgerWrapper.style.right = "5px";
		document.body.style.overflowY = "hidden";
		mainToggle.textContent = "×";
	} else {
		burgerWrapper.style.right = "-100%";
		document.body.style.overflowY = "visible";
		mainToggle.textContent = "=";
	}
});

logo.addEventListener("click", () => {
	homePage.style.display = "block";
	menuPage.style.display = "none";
	menuBtns.forEach((menu) => (menu.children[0].textContent = "Menu"));
});

coffeeWraps[0].style.display = "flex";

btn.addEventListener("mouseover", () => {
	if (window.innerWidth > 768) {
		menuCup.style.transform = "scale(1)";
		menuT.style.marginLeft = "-7px";
		menuCup.classList.add("add-cup");
	}
});
btn.addEventListener("mouseleave", () => {
	if (window.innerWidth > 768) {
		menuCup.style.transform = "scale(0)";
		menuT.style.marginLeft = "7px";
		menuCup.classList.remove("add-cup");
	}
});

btnIcons.forEach((btnIcon) => {
	btnIcon.addEventListener("mouseenter", () => {
		const path = btnIcon.querySelectorAll("path");
		path.forEach(
			(el) => (
				(el.style.fill = "rgba(225, 212, 201, 1)"),
				(el.style.transition = "0.8s")
			)
		);
	});

	btnIcon.addEventListener("mouseleave", () => {
		const path = btnIcon.querySelectorAll("path");
		path.forEach(
			(el) => ((el.style.fill = ""), (el.style.transition = "0.8s"))
		);
	});
});

typeIcons.forEach((icon, index) => {
	icon.addEventListener("click", () => {
		coffeeWraps.forEach((wrap) => (wrap.style.display = "none"));
		typeIcons.forEach((typeIcon) => {
			typeIcon.style.backgroundColor = "rgba(225, 212, 201, 1)";
			typeIcon.style.color = "rgba(64, 63, 61, 1)";

			typeIcon.addEventListener("mouseover", () => {
				typeIcon.style.backgroundColor = "rgba(102, 95, 85, 1)";
				typeIcon.style.color = "rgba(225, 212, 201, 1)";
			});
			typeIcon.addEventListener("mouseleave", () => {
				typeIcon.style.backgroundColor = "rgba(225, 212, 201, 1)";
				typeIcon.style.color = "rgba(64, 63, 61, 1)";
				// get the color again
				typeIcons.forEach((typeIcon) => {
					typeIcon.style.backgroundColor = "rgba(225, 212, 201, 1)";
					typeIcon.style.color = "rgba(64, 63, 61, 1)";
				});
				typeIcons[index].style.backgroundColor = "rgba(102, 95, 85, 1)";
				typeIcons[index].style.color = "rgba(225, 212, 201, 1)";
				// got the color again
			});
		});
		typeIcons[index].style.backgroundColor = "rgba(102, 95, 85, 1)";
		typeIcons[index].style.color = "rgba(225, 212, 201, 1)";
		coffeeWraps[index].style.display = "flex";

		if (window.innerWidth > 768) {
			updateDiv.style.display = "none";
		} else {
			Array.from(coffeeWraps[index].children).forEach((child) => {
				if (child.classList.contains("getNone")) {
					updateDiv.style.display = "block";
				} else {
					updateDiv.style.display = "none";
				}
			});
		}
	});
});

menuBtns.forEach((menuBtn) => {
	menuBtn.addEventListener("click", () => {
		if (menuBtn.innerText == "Menu") {
			homePage.style.display = "none";
			menuPage.style.display = "block";
			menuBtns.forEach((menu) => (menu.children[0].textContent = "Home"));
		} else {
			homePage.style.display = "block";
			menuPage.style.display = "none";
			menuBtns.forEach((menu) => (menu.children[0].textContent = "Menu"));
		}

		if (window.innerWidth < 768) {
			burgerWrapper.style.right = "-100%";
			mainToggle.textContent = "=";
			document.body.style.overflowY = "visible";
		}
	});
});

clickEvents.forEach((clickEvent, index) => {
	clickEvent.addEventListener("click", () => {
		forAbsolutes[index].style.display = "block";
		overlay.style.display = "block";
		document.body.style.overflowY = "hidden";
	});
});

closeBtns.forEach((closeBtn) => {
	closeBtn.addEventListener("click", () => {
		forAbsolutes.forEach((coffeeWrap) => (coffeeWrap.style.display = "none"));
		overlay.style.display = "none";
		document.body.style.overflowY = "visible";
	});
});

overlay.addEventListener("click", () => {
	forAbsolutes.forEach((coffeeWrap) => (coffeeWrap.style.display = "none"));
	overlay.style.display = "none";
	document.body.style.overflowY = "visible";
});

updateDiv.addEventListener("click", () => {
	coffeeWraps.forEach((coffeItem) => {
		if (coffeItem.style.display == "flex") {
			Array.from(coffeItem.children).forEach((child) => {
				if (child.classList.contains("getNone")) {
					child.classList.remove("getNone");
				}
			});
		}
	});
	updateDiv.style.display = "none";
});

const navItems = burgerWrapper.querySelectorAll(".nav-item");

navItems.forEach((navItem, index) => {
	navItem.addEventListener("click", () => {
		if (homePage.style.display == "block" || index == 3) {
			burgerWrapper.style.right = "-100%";
			mainToggle.textContent = "=";
			document.body.style.overflowY = "visible";
		}
	});
});

// modal functions

const quantityBtns = document.querySelectorAll(".quantityBtn");
const additiveBtns = document.querySelectorAll(".additiveBtn");

quantityBtns.forEach((quantityBtn) => {
	quantityBtn.addEventListener("click", () => {
		const fatherElement = quantityBtn.parentElement.parentElement.parentElement;
		const thePrice = fatherElement.querySelector(".prices");

		if (!quantityBtn.classList.contains("autoHover")) {
			quantityBtn.classList.add("autoHover");

			if (quantityBtn.children[0].textContent == "S") {
				thePrice.textContent =
					"$" + (Number(thePrice.textContent.slice(1)) + 0.0).toFixed(2);
			} else if (quantityBtn.children[0].textContent == "M") {
				thePrice.textContent =
					"$" + (Number(thePrice.textContent.slice(1)) + 0.5).toFixed(2);
			} else if (quantityBtn.children[0].textContent == "L") {
				thePrice.textContent =
					"$" + (Number(thePrice.textContent.slice(1)) + 1.0).toFixed(2);
			}
		} else {
			quantityBtn.classList.remove("autoHover");

			if (quantityBtn.children[0].textContent == "S") {
				thePrice.textContent =
					"$" + (Number(thePrice.textContent.slice(1)) - 0.0).toFixed(2);
			} else if (quantityBtn.children[0].textContent == "M") {
				thePrice.textContent =
					"$" + (Number(thePrice.textContent.slice(1)) - 0.5).toFixed(2);
			} else if (quantityBtn.children[0].textContent == "L") {
				thePrice.textContent =
					"$" + (Number(thePrice.textContent.slice(1)) - 1.0).toFixed(2);
			}
		}
	});
});

additiveBtns.forEach((additive) => {
	const fatherElement = additive.parentElement.parentElement.parentElement;
	const thePrice = fatherElement.querySelector(".prices");

	additive.addEventListener("click", () => {
		if (!additive.classList.contains("autoHover")) {
			additive.classList.add("autoHover");

			thePrice.textContent =
				"$" + (Number(thePrice.textContent.slice(1)) + 0.5).toFixed(2);
		} else {
			additive.classList.remove("autoHover");

			thePrice.textContent =
				"$" + (Number(thePrice.textContent.slice(1)) - 0.5).toFixed(2);
		}
	});
});
