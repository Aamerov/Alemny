import hero from "../assets/imgs/hero-img.svg";
import community from "../assets/imgs/COMMU-removebg-preview.png";
import intrast from "../assets/imgs/INTRAST-removebg-preview.png";
import alex from "../assets/imgs/ALEX-removebg-preview.png";
import udemy from "../assets/imgs/udemy-2-logo 1.png";
import card from "../assets/imgs/card.svg";
import lecturer from "../assets/imgs/mohamed ahmed.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Home = () => {
  return (
    <div className="home">
      <header class="d-flex align-items-center justify-content-center text-white">
        <p class="text-center mb-0">
          Join now and enjoy your first free course
        </p>
      </header>
      <section id="hero">
        <div class="container">
          <div class="row mx-0 w-100 align-items-center">
            <div class="col-md-8">
              <h1>YOUR ROAD TO SUCCESS STARTS FROM HERE </h1>
              <p id="header__text">
                Thousands of free courses , Best instructors all over egypt and
                Also enjoy cheap prices and alot of offers.
              </p>
            </div>
            <div class="col-md-4">
              <img src={hero} class="w-100" alt="" />
            </div>
          </div>
        </div>
      </section>
      <section id="partners">
        <div class="container" id="parnters">
          <div class="row w-100 mx-0" id="partners__imgs">
            <div class="col-md-3">
              <img class="imageAlternation" src={community} alt="" />
            </div>
            <div class="col-md-3">
              <img id="intrast" src={intrast} alt="" />
            </div>
            <div class="col-md-3">
              <img class="imageAlternation" src={alex} alt="" />
            </div>
            <div class="col-md-3">
              <img class="imageAlternation" src={udemy} alt="" />
            </div>
          </div>
        </div>
      </section>

      <section id="stacks">
        <div class="container">
          <h2 class="section__title">OUR STACKS</h2>
          <nav class="nav-tabs">
            <a class="nav-link" aria-current="page" href="./pages/explore.html">
              SOFTWARE ENGINEER
            </a>
            <a class="nav-link mx-3" href="./pages/explore.html">
              BUSINESS
            </a>
            <a class="nav-link" href="./pages/explore.html">
              ACCOUNTING
            </a>
            <a class="nav-link mx-3" href="./pages/explore.html">
              DATA SCIENCE
            </a>
            <a class="nav-link me-3" href="./pages/explore.html">
              ROBOT ENGINEER
            </a>
            <a class="nav-link" href="./pages/explore.html">
              STATISTICIAN{" "}
            </a>
          </nav>
          <div class="owl-carousel row w-100 mx-0">
            <div class="card">
              <img src={card} class="card-img-top" alt="..." />
              <span class="label">POPULAR</span>
              <div class="card-body">
                <div class="d-flex align-items-center justify-content-between">
                  <a href="./pages/explore.html">
                    <h5 class="card-title">ROBOT ENGINEER</h5>
                  </a>
                  <div class="d-flex align-items-center">
                    <i class="fa-regular fa-clock"></i>
                    <span class="ms-2">6-hrs</span>
                  </div>
                </div>
                <div class="teacher-info d-flex align-items-center justify-content-between">
                  <div class="d-flex align-items-center">
                    <img src={lecturer} alt="" />
                    <span class="me-2">Mohamed Ahmed</span>
                  </div>
                  <div class="d-flex align-items-end">
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <FontAwesomeIcon icon={faStar} />
                    <span class="ms-3">4.1(5000)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="calender">
        <div class="container theme-showcase">
          <h2 class="section__title">UPCOMING EVENTS</h2>
          <div id="holder" class="row"></div>
        </div>
      </section>
      <section id="learn-more">
        <div id="shadow__overlay">
          <div class="container">
            <div class="row mx-0 w-100">
              <div class="col-md-6">
                <h2 class="fw-bolder text-white col-md-11">
                  JOIN MORE THAN TWENTY THOUSAND STUDENTS
                </h2>
                <a href="./pages/register.html">
                  <button class="btn btn-primary" id="calltoaction__button">
                    JOIN NOW
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

{
  /* <script type="text/tmpl" id="tmpl">
{{
var date = date || new Date(),
    month = date.getMonth(),
    year = date.getFullYear(),
    first = new Date(year, month, 1),
    last = new Date(year, month + 1, 0),
    startingDay = first.getDay(),
    thedate = new Date(year, month, 1 - startingDay),
    dayclass = lastmonthcss,
    today = new Date(),
    i, j;
if (mode === 'week') {
  thedate = new Date(date);
  thedate.setDate(date.getDate() - date.getDay());
  first = new Date(thedate);
  last = new Date(thedate);
  last.setDate(last.getDate()+6);
} else if (mode === 'day') {
  thedate = new Date(date);
  first = new Date(thedate);
  last = new Date(thedate);
  last.setDate(thedate.getDate() + 1);
}

}}
<table class="calendar-table table table-condensed table-tight">
  <thead>
    <tr>
      <td colspan="7" style="text-align: center">
        <table style="white-space: nowrap; width: 100%">
          <tr>
            <td style="text-align: left;">
              <span class="btn-group">
                <button class="js-cal-prev btn btn-default">&lt;</button>
                <button class="js-cal-next btn btn-default">&gt;</button>
              </span>
              <button class="js-cal-option btn btn-default {{: first.toDateInt() <= today.toDateInt() && today.toDateInt() <= last.toDateInt() ? 'active':'' }}" data-date="{{: today.toISOString()}}" data-mode="month">{{: todayname }}</button>
            </td>
            <td>
              <span class="btn-group btn-group-lg">
                {{ if (mode !== 'day') { }}
                  {{ if (mode === 'month') { }}<button class="js-cal-option btn btn-link" data-mode="year">{{: months[month] }}</button>{{ } }}
                  {{ if (mode ==='week') { }}
                    <button class="btn btn-link disabled">{{: shortMonths[first.getMonth()] }} {{: first.getDate() }} - {{: shortMonths[last.getMonth()] }} {{: last.getDate() }}</button>
                  {{ } }}
                  <button class="js-cal-years btn btn-link">{{: year}}</button>
                {{ } else { }}
                  <button class="btn btn-link disabled">{{: date.toDateString() }}</button>
                {{ } }}
              </span>
            </td>
            <td style="text-align: right">
              <span class="btn-group">
                <button class="js-cal-option btn btn-default {{: mode==='year'? 'active':'' }}" data-mode="year">Year</button>
                <button class="js-cal-option btn btn-default {{: mode==='month'? 'active':'' }}" data-mode="month">Month</button>
                <button class="js-cal-option btn btn-default {{: mode==='week'? 'active':'' }}" data-mode="week">Week</button>
                <button class="js-cal-option btn btn-default {{: mode==='day'? 'active':'' }}" data-mode="day">Day</button>
              </span>
            </td>
          </tr>
        </table>

      </td>
    </tr>
  </thead>
  {{ if (mode ==='year') {
    month = 0;
  }}
  <tbody>
    {{ for (j = 0; j < 3; j++) { }}
    <tr>
      {{ for (i = 0; i < 4; i++) { }}
      <td class="calendar-month month-{{:month}} js-cal-option" data-date="{{: new Date(year, month, 1).toISOString() }}" data-mode="month">
        {{: months[month] }}
        {{ month++;}}
      </td>
      {{ } }}
    </tr>
    {{ } }}
  </tbody>
  {{ } }}
  {{ if (mode ==='month' || mode ==='week') { }}
  <thead>
    <tr class="c-weeks">
      {{ for (i = 0; i < 7; i++) { }}
        <th class="c-name">
          {{: days[i] }}
        </th>
      {{ } }}
    </tr>
  </thead>
  <tbody>
    {{ for (j = 0; j < 6 && (j < 1 || mode === 'month'); j++) { }}
    <tr>
      {{ for (i = 0; i < 7; i++) { }}
      {{ if (thedate > last) { dayclass = nextmonthcss; } else if (thedate >= first) { dayclass = thismonthcss; } }}
      <td class="calendar-day {{: dayclass }} {{: thedate.toDateCssClass() }} {{: date.toDateCssClass() === thedate.toDateCssClass() ? 'selected':'' }} {{: daycss[i] }} js-cal-option" data-date="{{: thedate.toISOString() }}">
        <div class="date">{{: thedate.getDate() }}</div>
        {{ thedate.setDate(thedate.getDate() + 1);}}
      </td>
      {{ } }}
    </tr>
    {{ } }}
  </tbody>
  {{ } }}
  {{ if (mode ==='day') { }}
  <tbody>
    <tr>
      <td colspan="7">
        <table class="table table-striped table-condensed table-tight-vert" >
          <thead>
            <tr>
              <th>&nbsp;</th>
              <th style="text-align: center; width: 100%">{{: days[date.getDay()] }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th class="timetitle" >All Day</th>
              <td class="{{: date.toDateCssClass() }}">  </td>
            </tr>
            <tr>
              <th class="timetitle" >Before 6 AM</th>
              <td class="time-0-0"> </td>
            </tr>
            {{for (i = 6; i < 22; i++) { }}
            <tr>
              <th class="timetitle" >{{: i <= 12 ? i : i - 12 }} {{: i < 12 ? "AM" : "PM"}}</th>
              <td class="time-{{: i}}-0"> </td>
            </tr>
            <tr>
              <th class="timetitle" >{{: i <= 12 ? i : i - 12 }}:30 {{: i < 12 ? "AM" : "PM"}}</th>
              <td class="time-{{: i}}-30"> </td>
            </tr>
            {{ } }}
            <tr>
              <th class="timetitle" >After 10 PM</th>
              <td class="time-22-0"> </td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
  {{ } }}
</table>
</script> */
}
