const nextBtn = document.querySelector(".arrow-right");
const backBtn = document.querySelector(".arrow-left");
const coffeCards = document.querySelectorAll(".fst");
const wrapper = document.querySelector(".choose-wrapper");

const content = [
	`<div class="first fst">
	<img
		class="choice"
		src="Assets/HomePage/coffee-slider-1.png"
		alt=""
	/>
	<div class="desc-wrap">
		<h2 class="price-name">S’mores Frappuccino</h2>
		<p class="description">
			This new drink takes an espresso and mixes it with brown sugar and
			cinnamon before being topped with oat milk.
		</p>
		<h2 class="price-name">$5.50</h2>
		<div class="borders">
			<div class="borderr darkened"></div>
			<div class="borderr"></div>
			<div class="borderr"></div>
		</div>
	</div>
</div>`,

	`	<div class="second fst">
	<img
		class="choice"
		src="Assets/HomePage/coffee-slider-2.png"
		alt=""
	/>
	<div class="desc-wrap">
		<h2 class="price-name">Caramel Macchiato</h2>
		<p class="description">
			Fragrant and unique classic, espresso with rich caramel-peanut
			syrup, with cream under whipped thick foam.
		</p>
		<h2 class="price-name">$5.00</h2>
		<div class="borders">
			<div class="borderr"></div>
			<div class="borderr darkened"></div>
			<div class="borderr"></div>
		</div>
	</div>
</div>`,

	`	<div class="third fst">
	<img
		class="choice"
		src="Assets/HomePage/coffee-slider-3.png"
		alt=""
	/>
	<div class="desc-wrap">
		<h2 class="price-name">Ice coffe</h2>
		<p class="description">
			A popular summer drink that tones and invigorates. Prepared from
			coffee, milk and ice.
		</p>
		<h2 class="price-name">$4.50</h2>
		<div class="borders">
			<div class="borderr"></div>
			<div class="borderr"></div>
			<div class="borderr darkened"></div>
		</div>
	</div>
</div>`,
];

let index = 0;

nextBtn.addEventListener("click", () => {
	if (index == 2) return;
	index++;
	if (index > 2) return;
	wrapper.innerHTML = content[index];
});

backBtn.addEventListener("click", () => {
	if (index == 0) return;
	index--;
	if (index < 0) return;
	wrapper.innerHTML = content[index];
});

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
		} else {
			burgerWrapper.style.right = "-100%";
			toggleBurgers[0].style.transform = "scale(1)";
			toggleBurgers[1].style.transform = "scale(0)";
			document.body.style.overflowY = "visible";
		}
	});
});
