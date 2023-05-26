import $ from "jquery";
$(window).on("scroll load orientationchange", function () {
	if ($(this).scrollTop() > 0 && !$("body").hasClass("scrolled")) {
		$("body").addClass("scrolled");
	} else if ($(this).scrollTop() <= 0 && $("body").hasClass("scrolled")) {
		$("body").removeClass("scrolled");
	}
});

const $menuButton = $(".menu-button");
const $body = $("body");
$menuButton.on("click", function (e) {
	e.preventDefault();
	$body.toggleClass("menu-open");
});

const body = $("body");
const header = $(".header");
let lastScroll = 0;

function stickyHeader() {
	let currentScroll = window.pageYOffset;
	if (currentScroll === 0) {
		body.removeClass("up");
		header.removeClass("sticky");
		return;
	}
	if (currentScroll > 0) {
		header.addClass("sticky");
	} else {
		header.removeClass("sticky");
	}
	if (currentScroll > lastScroll + 10 && !body.hasClass("down")) {
		body.removeClass("up").addClass("down");
	} else if (currentScroll < lastScroll && body.hasClass("down")) {
		body.removeClass("down").addClass("up");
	}
	lastScroll = currentScroll;
}

window.addEventListener("load", () => {
	stickyHeader();
});
window.addEventListener("scroll", () => {
	stickyHeader();
});
