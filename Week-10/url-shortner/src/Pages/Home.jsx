import Base from "../Base";
import Hero from "../Components/Hero";
import URLShortner from "../Components/URLShortner";

export default function Home() {
	return (
		<Base>
			<main>
				<Hero />
				<URLShortner />
			</main>
		</Base>
	);
}
