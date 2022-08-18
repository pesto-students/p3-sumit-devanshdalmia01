import Base from "../Base";
import Hero from "../Components/Hero";
import URLShortner from "../Components/URLShortner";
import Features from "../Components/Features";

export default function Home() {
	return (
		<Base>
			<main>
				<Hero />
				<URLShortner />
				<Features />
			</main>
		</Base>
	);
}
