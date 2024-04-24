const nextBtn = document.querySelector(".arrow-right");
const backBtn = document.querySelector(".arrow-left");
const fsts = document.querySelectorAll(".fst");
const wrapper = document.querySelector(".choose-wrapper");
const borders = document.querySelectorAll(".borderr");

let thePxOfLeft = 0;
let number = 0;
let index = 0;

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

nextBtn.addEventListener("click", nextFunction);
function nextFunction() {
	backToFirst();

	if (number >= 2) return;
	thePxOfLeft = thePxOfLeft + 100;
	fsts.forEach((fst) => {
		fst.style.left = `-${thePxOfLeft}%`;
	});

	number++;
	index++;
	borders.forEach(
		(border) => (border.style.backgroundColor = "rgba(193, 182, 173, 1)")
	);
	borders[index].style.backgroundColor = "rgba(102, 95, 85, 1)";
}

backBtn.addEventListener("click", backFunction);
function backFunction() {
	backToLast();

	if (number <= 0) return;
	thePxOfLeft = thePxOfLeft - 100;
	fsts.forEach((fst) => {
		fst.style.left = `-${thePxOfLeft}%`;
	});

	number--;
	index--;
	borders.forEach(
		(border) => (border.style.backgroundColor = "rgba(193, 182, 173, 1)")
	);
	borders[index].style.backgroundColor = "rgba(102, 95, 85, 1)";
}

function backToFirst() {
	if (number === 2) {
		fsts.forEach((fst) => {
			fst.style.left = `0`;
		});
		borders.forEach(
			(border) => (border.style.backgroundColor = "rgba(193, 182, 173, 1)")
		);
		borders[0].style.backgroundColor = "rgba(102, 95, 85, 1)";
		setTimeout(() => {
			resetAllf();
		}, 500);
	}
}

function backToLast() {
	if (number === 0) {
		thePxOfLeft = 200;
		fsts.forEach((fst) => {
			fst.style.left = `-${thePxOfLeft}%`;
		});
		borders.forEach(
			(border) => (border.style.backgroundColor = "rgba(193, 182, 173, 1)")
		);
		borders[fsts.length - 1].style.backgroundColor = "rgba(102, 95, 85, 1)";
		setTimeout(() => {
			resetAlls();
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
			backFunction();
		} else {
			nextFunction();
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
const toggleBurgers = document.querySelectorAll(".toggleBurger");
const burgerWrapper = document.querySelector(".burgerWrapper");

logo.addEventListener("click", () => {
	homePage.style.display = "block";
	menuPage.style.display = "none";
	menuBtns.forEach((menu) => (menu.children[0].textContent = "Menu"));
});

coffeeWraps[0].style.display = "flex";

btn.addEventListener("mouseover", () => {
	menuCup.style.transform = "scale(1)";
	menuT.style.marginLeft = "-7px";
	menuCup.classList.add("add-cup");
});
btn.addEventListener("mouseleave", () => {
	menuCup.style.transform = "scale(0)";
	menuT.style.marginLeft = "7px";
	menuCup.classList.remove("add-cup");
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

		if (window.innerWidth > 850) {
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

		if (window.innerWidth < 850) {
			burgerWrapper.style.right = "-100%";
			toggleBurgers[0].style.transform = "scale(1)";
			toggleBurgers[1].style.transform = "scale(0)";
			document.body.style.overflowY = "visible";
			toggleBurgers[index].parentElement.style.paddingBottom = "0px";
		}
	});
});

clickEvents.forEach((clickEvent, index) => {
	clickEvent.addEventListener("click", () => {
		forAbsolutes[index].style.display = "block";
		overlay.style.display = "block";
	});
});

closeBtns.forEach((closeBtn) => {
	closeBtn.addEventListener("click", () => {
		forAbsolutes.forEach((coffeeWrap) => (coffeeWrap.style.display = "none"));
		overlay.style.display = "none";
	});
});

overlay.addEventListener("click", () => {
	forAbsolutes.forEach((coffeeWrap) => (coffeeWrap.style.display = "none"));
	overlay.style.display = "none";
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

toggleBurgers.forEach((burger, index) => {
	burger.addEventListener("click", () => {
		if (index == 0) {
			burgerWrapper.style.right = "5px";
			toggleBurgers[0].style.transform = "scale(0)";
			toggleBurgers[1].style.transform = "scale(1)";
			document.body.style.overflowY = "hidden";
			toggleBurgers[index].parentElement.style.paddingBottom = "3px";
		} else {
			burgerWrapper.style.right = "-100%";
			toggleBurgers[0].style.transform = "scale(1)";
			toggleBurgers[1].style.transform = "scale(0)";
			document.body.style.overflowY = "visible";
			toggleBurgers[index].parentElement.style.paddingBottom = "0px";
		}
	});
});

const navItems = burgerWrapper.querySelectorAll(".nav-item");

navItems.forEach((navItem, index) => {
	navItem.addEventListener("click", () => {
		if (homePage.style.display == "block" || index == 3) {
			burgerWrapper.style.right = "-100%";
			toggleBurgers[0].style.transform = "scale(1)";
			toggleBurgers[1].style.transform = "scale(0)";
			document.body.style.overflowY = "visible";
			toggleBurgers[index].parentElement.style.paddingBottom = "0px";
		}
	});
});

// modal functions

// const realQuantity = document.querySelectorAll(".realQuantity");
// const realAdditives = document.querySelectorAll(".realAdditives");

// realQuantity.forEach((realQ, index) => {
// 	realQ.addEventListener("click", () => {
// 		console.log(realQ);
// 		console.log(index);
// 	});
// });

// realAdditives.forEach((realA, index) => {
// 	realA.addEventListener("click", () => {
// 		console.log(realA);
// 		console.log(index);
// 	});
// });
