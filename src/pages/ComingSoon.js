import comingsoon from "../assets/imgs/cominsoon.svg";
import "./Success.css";
const ComingSoon = () => {
  return (
    <div className="success__container" id="comingsoon__container">
      <img src={comingsoon} alt="" />
      <h1 id="success__title" className="comingsoon">
        Coming Soon
      </h1>
      <p id="success__paragraph">
        We apperciate your excitment for our Platform we will let you know
        through email when the Platform launches on may 2023
      </p>
    </div>
  );
};

export default ComingSoon;
