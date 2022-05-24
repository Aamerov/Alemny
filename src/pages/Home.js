import card from "../assets/imgs/card.svg";
import { Link } from "react-router-dom";
import hero from "../assets/imgs/hero-img.svg";
import { getDownloadURL, ref } from "firebase/storage";
import { storage, db } from "../firebase-config";
import { collection, query, getDocs, doc, updateDoc } from "firebase/firestore";
import community from "../assets/imgs/COMMU-removebg-preview.png";
import intrast from "../assets/imgs/INTRAST-removebg-preview.png";
import alex from "../assets/imgs/ALEX-removebg-preview.png";
import udemy from "../assets/imgs/udemy-2-logo 1.png";
import lecturer from "../assets/imgs/mohamed ahmed.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect, useState } from "react";
const Home = () => {
  const [coursesData, setCoursesData] = useState(null);

  useEffect(() => {
    console.log("fired");

    const fetchData = async () => {
      const coursesData0 = [];
      const q = query(collection(db, "featuredCourses"));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((docu) => {
        coursesData0.push(docu.data());
        const fetchImage = async () => {
          const courseImages = [];
          await getDownloadURL(ref(storage, `images/${docu.id}.jpg`)).then(
            (url) => {
              const featuredCoursesRef = doc(
                db,
                "featuredCourses",
                `${docu.id}`
              );
              updateDoc(featuredCoursesRef, {
                image: url,
              });
              courseImages.push(url);
            }
          );
        };
        fetchImage();
        setCoursesData(coursesData0);
      });
    };
    fetchData();
  }, []);
  return (
    <div className="home">
      <header className="d-flex align-items-center justify-content-center text-white">
        <p className="text-center mb-0">
          Join now and enjoy your first free course
        </p>
      </header>
      <section id="hero">
        <div className="container">
          <div className="row mx-0 w-100 align-items-center">
            <div className="col-md-8">
              <h1>YOUR ROAD TO SUCCESS STARTS FROM HERE </h1>
              <p id="header__text">
                Thousands of free courses , Best instructors all over egypt and
                Also enjoy cheap prices and alot of offers.
              </p>
            </div>
            <div className="col-md-4">
              <img src={hero} className="w-100" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="partners">
        <div className="container" id="parnters">
          <div className="row w-100 mx-0" id="partners__imgs">
            <div className="col-md-3">
              <img className="imageAlternation" src={community} alt="" />
            </div>
            <div className="col-md-3">
              <img id="intrast" src={intrast} alt="" />
            </div>
            <div className="col-md-3">
              <img className="imageAlternation" src={alex} alt="" />
            </div>
            <div className="col-md-3">
              <img className="imageAlternation" src={udemy} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="stacks">
        <div className="container">
          <h2 className="section__title">OUR STACKS</h2>
          <div className="nav-tabs">
            <Link className="nav-link" aria-current="page" to="/explore">
              SOFTWARE ENGINEER
            </Link>
            <Link to="/explore" className="nav-link">
              BUSINESS
            </Link>
            <Link to="/explore" className="nav-link">
              ACCOUNTING
            </Link>
            <Link to="/explore" className="nav-link">
              DATA SCIENCE
            </Link>
            <Link to="/explore" className="nav-link">
              ROBOT ENGINEER
            </Link>
            <Link to="/explore" className="nav-link">
              STATISTICIAN
            </Link>
          </div>
          <div className="owl-carousel row w-100 mx-0">
            {coursesData &&
              coursesData.map((courseData, index) => {
                return (
                  <div className="card" key={index}>
                    <img
                      src={courseData.image}
                      className="card-img-top"
                      alt="..."
                    />
                    <span className="label">POPULAR</span>
                    <div className="card-body">
                      <div className="d-flex align-items-center justify-content-between">
                        <a href="./pages/explore.html">
                          <h5 className="card-title">{courseData.name} </h5>
                        </a>
                        <div className="d-flex align-items-center">
                          <i className="fa-regular fa-clock"></i>
                          <span className="ms-2">{courseData.time} </span>
                        </div>
                      </div>
                      <div className="teacher-info d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                          <img src={lecturer} alt="" />
                          <span className="me-2">{courseData.lecturer} </span>
                        </div>
                        <div className="d-flex align-items-end" id="rating">
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <FontAwesomeIcon icon={faStar} />
                          <span className="ms-3">{courseData.ratings} </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </section>
      <section id="learn-more">
        <div id="shadow__overlay">
          <div className="container">
            <div className="row mx-0 w-100">
              <div className="col-md-6">
                <h2 className="fw-bolder text-white col-md-11">
                  JOIN MORE THAN TWENTY THOUSAND STUDENTS
                </h2>
                <div id="join-now__container">
                  <button id="calltoaction__button">JOIN NOW</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
