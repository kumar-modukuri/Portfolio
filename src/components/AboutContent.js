import { Link } from "react-router-dom";
import FullStack1 from "../assets/fullstack1.jpg";
import FullStack2 from "../assets/fullstack2.webp";
import "../component-styles/AboutContentStyles.css";

const AboutContent = () => {
	return (
		<div className="about">
			<div className="left">
				<h1>Who Am I ?</h1>
				<p>
					I'M a Full Stack Developer. I Strive to create responsive websites for
					both mobile and desktop
				</p>
				<Link to="/contact">
					<button className="btn">Contact</button>
				</Link>
			</div>
			<div className="right">
				<div className="img-container">
					<div className="img-stack top">
						<img src={FullStack1} alt="true" className="img" />
					</div>
					<div className="img-stack bottom">
						<img src={FullStack2} alt="true" className="img" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutContent;
