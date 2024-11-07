import { Link } from "react-router-dom";
import "../component-styles/WorkCardStyles.css";

const WorkCard = (props) => {
	return (
		<div className="project-card">
			<img src={props.imgSrc} alt="ProjetImage" />
			<h2 className="project-title">{props.title}</h2>
			<div className="pro-details">
				<p>{props.text}</p>
				<div className="pro-btns">
					<Link to={props.view} target="#" className="btn">
						View
					</Link>
					<Link to={props.source} target="#" className="btn">
						Source
					</Link>
				</div>
			</div>
		</div>
	);
};

export default WorkCard;
