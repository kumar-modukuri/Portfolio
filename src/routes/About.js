import AboutContent from "../components/AboutContent";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import Navbar from "../components/Navbar";

const About = () => {
	return (
		<div>
			<Navbar />
			<HeroImg2 heading="ABOUT" text="I'm a full stack web developer" />
			<AboutContent />
			<Footer />
		</div>
	);
};

export default About;
