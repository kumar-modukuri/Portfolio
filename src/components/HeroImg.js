import { Link } from "react-router-dom";
import IntroImg from "../assets/intro-bg.jpg";
import Resume from "../assets/Kumar_Modukuri_Resume.pdf";
import "../component-styles/HeroImgStyles.css";

const HeroImg = () => {
	const downloadResume = () => {
		const link = document.createElement("a");
		link.href = Resume;
		link.setAttribute("download", "Kumar_Modukuri_Resume.pdf");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="hero">
			<div className="mask">
				<img className="intro-img" src={IntroImg} alt="IntroImage" />
			</div>
			<div className="content">
				<p>HI , I'M KUMAR MODUKURI</p>
				<h1>Full Stack Developer</h1>
				<div>
					<Link to="/projects" className="btn">
						Projects
					</Link>
					<button className="btn btn-light" onClick={downloadResume}>
						Resume/CV
					</button>
				</div>
			</div>
		</div>
	);
};

export default HeroImg;
