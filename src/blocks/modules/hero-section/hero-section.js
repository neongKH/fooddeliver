import gsap from "gsap";
import $ from "jquery";

if ($(window).width() > 1200) {
	const param = {
		duration: 0.3,
		ease: "Power2.easeOut",
	};

	const menu = document.querySelector(".order-button");
	const circle = document.querySelector(".order-button .circle");
	menu.addEventListener("mousemove", (e) => {
		var i = circle;

		var rect = i.getBoundingClientRect();
		var s = e.pageX - rect.left;
		var o = e.pageY - rect.top;

		gsap.to(circle, param.duration, {
			x: ((s - i.clientWidth / 2) / i.clientWidth) * 50,
			y: ((o - i.clientHeight / 2) / i.clientHeight) * 50,
			scale: 1.05,
			ease: param.ease,
		});
	});

	menu.addEventListener("mouseleave", () => {
		gsap.to(circle, param.duration, {
			x: 0,
			y: 0,
			scale: 0.75,
			ease: param.ease,
		});
	});
}
