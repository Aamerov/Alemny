import card from "../assets/imgs/card.svg";
import lecturer from "../assets/imgs/mohamed ahmed.svg";
const Explore = () => {
  return (
    <div className="explore">
      <div className="row w-100 mx-0">
        <div className="col-md-3">
          <h3>Categories</h3>
          <div className="row">
            <div className="col-4">
              <div className="list-group" id="list-tab" role="tablist">
                <a
                  className="list-group-item list-group-item-action active"
                  id="list-home-list"
                  data-toggle="list"
                  href="#list-home"
                  role="tab"
                  aria-controls="home"
                >
                  All
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
                >
                  Software Engineer
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="messages"
                >
                  Business
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-settings-list"
                  data-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="settings"
                >
                  Accounting
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-profile-list"
                  data-toggle="list"
                  href="#list-profile"
                  role="tab"
                  aria-controls="profile"
                >
                  Data Science
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-messages-list"
                  data-toggle="list"
                  href="#list-messages"
                  role="tab"
                  aria-controls="messages"
                >
                  Robot Engineer
                </a>
                <a
                  className="list-group-item list-group-item-action"
                  id="list-settings-list"
                  data-toggle="list"
                  href="#list-settings"
                  role="tab"
                  aria-controls="settings"
                >
                  Statistician
                </a>
              </div>
            </div>
            <div className="col-8">
              <div className="tab-content" id="nav-tabContent">
                <div
                  className="tab-pane fade show active"
                  id="list-home"
                  role="tabpanel"
                  aria-labelledby="list-home-list"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="list-profile"
                  role="tabpanel"
                  aria-labelledby="list-profile-list"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="list-messages"
                  role="tabpanel"
                  aria-labelledby="list-messages-list"
                >
                  ...
                </div>
                <div
                  className="tab-pane fade"
                  id="list-settings"
                  role="tabpanel"
                  aria-labelledby="list-settings-list"
                >
                  ...
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <h2>Specializations</h2>
          <p>
            Specializations help you get a deep understanding of a topic. Here's
            how it works.
          </p>
          <h5>SOLID WORK ENGINEER</h5>
          <div id="firstCard" className="owl-carousel row w-100 mx-0">
            <div className="card">
              <img src={card } className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="card-title">SOFTWARE ENGINEER</h5>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ms-2">6-hrs</span>
                  </div>
                </div>
                <div className="teacher-info d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={lecturer} alt="" />
                    <span className="me-2">Mohamed Ahmed</span>
                  </div>
                  <div className="d-flex align-items-end">
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star grey"></i>
                    <span className="ms-3">4.1(5000)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={card } className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="card-title">BUSINESS</h5>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ms-2">6-hrs</span>
                  </div>
                </div>
                <div className="teacher-info d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={lecturer} alt="" />
                    <span className="me-2">Mohamed Ahmed</span>
                  </div>
                  <div className="d-flex align-items-end">
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star grey"></i>
                    <span className="ms-3">4.1(5000)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={card } className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="card-title">ACCOUNTING</h5>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ms-2">6-hrs</span>
                  </div>
                </div>
                <div className="teacher-info d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={lecturer} alt="" />
                    <span className="me-2">Mohamed Ahmed</span>
                  </div>
                  <div className="d-flex align-items-end">
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star grey"></i>
                    <span className="">4.1(5000)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="secondCard" className="owl-carousel row w-100 mx-0">
            <div className="card">
              <img src={card } className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="card-title">DATA SCIENCE</h5>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ms-2">6-hrs</span>
                  </div>
                </div>
                <div className="teacher-info d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={lecturer} alt="" />
                    <span className="me-2">Mohamed Ahmed</span>
                  </div>
                  <div className="d-flex align-items-end">
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star grey"></i>
                    <span className="ms-3">4.1(5000)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={card } className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="card-title">ROBOT ENGINEER</h5>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ms-2">6-hrs</span>
                  </div>
                </div>
                <div className="teacher-info d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={lecturer} alt="" />
                    <span className="me-2">Mohamed Ahmed</span>
                  </div>
                  <div className="d-flex align-items-end">
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star grey"></i>
                    <span className="ms-3">4.1(5000)</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <img src={card } className="card-img-top" alt="..." />
              <div className="card-body">
                <div className="d-flex align-items-center justify-content-between">
                  <h5 className="card-title">STATISTICIAN</h5>
                  <div className="d-flex align-items-center">
                    <i className="fa-regular fa-clock"></i>
                    <span className="ms-2">6-hrs</span>
                  </div>
                </div>
                <div className="teacher-info d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center">
                    <img src={lecturer} alt="" />
                    <span className="me-2">Mohamed Ahmed</span>
                  </div>
                  <div className="d-flex align-items-end">
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star gold"></i>
                    <i className="fa-solid fa-star grey"></i>
                    <span className="">4.1(5000)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Explore;
