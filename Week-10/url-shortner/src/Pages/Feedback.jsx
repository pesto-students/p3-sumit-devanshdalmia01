import Base from "../Base";
import FeedbackSVG from "../Assets/Feedback.svg";

export default function Feedback() {
	return (
		<Base>
			<main>
				<section>
					<div>
						<img src={FeedbackSVG} alt="Feedback" />
					</div>
					<div>
						<p>
							Thank you for visiting URL Shortner! Please share your experience with us, it will help us grow. <b>Keep Exploring!</b>
						</p>
						<form>
							<div>
								<label>Message</label>
								<textarea placeholder="Your message" required />
							</div>
							<div>
								<button type="submit">Submit</button>
							</div>
						</form>
					</div>
				</section>
			</main>
		</Base>
	);
}
