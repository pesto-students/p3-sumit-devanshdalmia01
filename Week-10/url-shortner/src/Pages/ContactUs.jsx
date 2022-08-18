import Base from "../Base";
import ContactUsSVG from "../Assets/ContactUs.svg";

export default function ContactUs() {
	return (
		<Base>
			<main>
				<section>
					<div>
						<img src={ContactUsSVG} alt="Contact_Us" />
					</div>
					<div>
						<p>Get In Touch!</p>
						<form>
							<div>
								<label>Name</label>
								<input type="text" placeholder="Name" required />
							</div>
							<div>
								<label>Mobile Number</label>
								<input type="text" pattern="[6789][0-9]{9}" maxlength="10" placeholder="Mobile Number" required />
							</div>
							<div>
								<label>Email</label>
								<input type="email" placeholder="Email" required />
							</div>
							<div>
								<label>Subject</label>
								<input type="text" placeholder="Subject" required />
							</div>
							<div>
								<label>Message</label>
								<textarea placeholder="Message" required />
							</div>
							<div>
								<button type="submit">Send Message</button>
							</div>
						</form>
					</div>
				</section>
			</main>
		</Base>
	);
}
