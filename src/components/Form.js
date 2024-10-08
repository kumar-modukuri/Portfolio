import emailjs from "@emailjs/browser";
import { useState } from "react";
import "../component-styles/FormStyles.css";

const Form = () => {
	const [name, setName] = useState("");
	const [mail, setMail] = useState("");
	const [subject, setSubject] = useState("");
	const [message, setMessage] = useState("");
	const [loading, setLoading] = useState(false);

	const sendEmail = (e) => {
		e.preventDefault();
		setLoading(true);

		const form = {
			name,
			mail,
			subject,
			message,
		};

		emailjs
			.send(
				process.env.REACT_APP_EMAILJS_SERVICE_ID,
				process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
				form,
				process.env.REACT_APP_EMAILJS_USER_ID
			)
			.then(() => {
				alert("Email sent successfully!");
				setName("");
				setMail("");
				setSubject("");
				setMessage("");
			})
			.catch((err) => {
				console.error("FAILED...", err);
				alert("Failed to send the email. Please try again later.");
			})
			.finally(() => {
				setLoading(false);
			});
	};

	return (
		<div className="form">
			<form onSubmit={sendEmail}>
				<label>Your Name</label>
				<input
					type="text"
					placeholder="Type here"
					value={name}
					onChange={(e) => setName(e.target.value)}
					required
				/>
				<label>Email</label>
				<input
					type="email"
					placeholder="Type here"
					value={mail}
					onChange={(e) => setMail(e.target.value)}
					required
				/>
				<label>Subject</label>
				<input
					type="text"
					placeholder="Type here"
					value={subject}
					onChange={(e) => setSubject(e.target.value)}
					required
				/>
				<label>Message</label>
				<textarea
					rows="8"
					placeholder="Type here"
					value={message}
					onChange={(e) => setMessage(e.target.value)}
					required></textarea>
				<button type="submit" className="btn" disabled={loading}>
					{loading ? "Sending..." : "Submit"}
				</button>
			</form>
		</div>
	);
};

export default Form;
