import { gsap } from "gsap";
import $ from "jquery";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const elements = $(".has-animation");

elements.each(function () {
	const element = $(this);
	ScrollTrigger.create({
		trigger: element,
		start: "top 80%",
		onEnter: function () {
			if (!element.hasClass("animated")) {
				element.addClass("animated");
			}
		},
	});
});
