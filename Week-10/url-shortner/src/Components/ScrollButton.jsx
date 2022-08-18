import { useState, useEffect } from "react";

export default function ScrollButton() {
	const [visible, setVisible] = useState(false);
	const toggleVisible = () => {
		const scrolled = document.documentElement.scrollTop;
		if (scrolled > 300) {
			setVisible(true);
		} else if (scrolled <= 300) {
			setVisible(false);
		}
	};
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};
	useEffect(() => {
		var mounted = true;
		if (mounted) {
			window.addEventListener("scroll", toggleVisible);
		}
		return () => {
			mounted = false;
		};
	});
	return visible && <button onClick={scrollToTop}>Scroll Up</button>;
}
