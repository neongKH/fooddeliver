import gsap from "gsap";
import $ from "jquery";

const param = {
	duration: 0.3,
	ease: "Power2.easeOut",
};
const menu = document.querySelector(".order-button");
const circle = document.querySelector(".order-button .circle");

if ($(window).width() > 1200) {
	menu.addEventListener("mousemove", (e) => {
		var i = circle;

		var rect = i.getBoundingClientRect();
		var s = e.pageX - rect.left;
		var o = e.pageY - rect.top;

		gsap.to(circle, {
			x: ((s - i.clientWidth / 2) / i.clientWidth) * 50,
			y: ((o - i.clientHeight / 2) / i.clientHeight) * 50,
			scale: 1.05,
			ease: param.ease,
			duration: param.duration,
		});
	});

	menu.addEventListener("mouseleave", () => {
		gsap.to(circle, {
			x: 0,
			y: 0,
			scale: 0.75,
			ease: param.ease,
			duration: param.duration,
		});
		gsap.to(circle, {
			ease: "linear",
			rotation: 360,
			repeat: -1,
			duration: 30,
		});
	});
}

gsap.to(circle, {
	ease: "linear",
	rotation: 360,
	repeat: -1,
	duration: 30,
});
