import { CgMail } from "react-icons/cg";
import {
	FaFacebook,
	FaGithub,
	FaHome,
	FaLinkedin,
	FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../component-styles/FooterStyles.css";

const Footer = () => {
	return (
		<div className="footer">
			<div className="footer-container">
				<div className="left">
					<div className="location">
						<FaHome size={22} style={{ color: "#fff", marginRight: "2rem" }} />
						<p>Sapthagiri Colony-2nd Line,Narapalli,Hyderabad,Telangana</p>
					</div>
					<div className="phone">
						<FaPhone size={18} style={{ color: "#fff", marginRight: "2rem" }} />
						<p>+91 9347637220</p>
					</div>
					<div className="email">
						<CgMail size={22} style={{ color: "#fff", marginRight: "2rem" }} />
						<p>rajkumar87901311@gmail.com</p>
					</div>
				</div>
				<div className="right">
					<h4>Social Media</h4>
					<p>
						My name is Kumar Modukuri , a full stack web developer looking for
						an oppurtunity to shocase my skills in a real world problem.You can
						contact me through these social media
					</p>
					<div className="social">
						<Link
							to="https://www.facebook.com/profile.php?id=100054819986743"
							target="#">
							<FaFacebook
								size={30}
								style={{ color: "#fff", marginRight: "1rem" }}
							/>
						</Link>
						<Link to="https://github.com/kumar-modukuri" target="#">
							<FaGithub
								size={30}
								style={{ color: "#fff", marginRight: "1rem" }}
							/>
						</Link>
						<Link
							to="https://www.linkedin.com/in/kumar-modukuri-284288231"
							target="#">
							<FaLinkedin
								size={30}
								style={{ color: "#fff", marginRight: "1rem" }}
							/>
						</Link>
					</div>
				</div>
			</div>
			<div className="copyright">Kumar Modukuri &copy; 2024</div>
		</div>
	);
};

export default Footer;
