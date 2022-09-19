import "../css/About.css";
import sofia from "../assets/about/sofia.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-row">
        <img src={sofia} />
        <div className="about-text">
          <h1>ABOUT</h1>
          <p>
            My name is Sofia Gomes. I'm a proud Brazilian currently living in New York City and working as a Creative Assistant (future Art Director) at Momentum Worldwide.
          </p>
          <p>
            I solve problems in a creative, authentic and weird way &mdash; that is, when I'm not managing
            my <a href="https://www.tiktok.com/@ladydithesecond?lang=en" target="_blank">pomsky's</a> career.
          </p>
          <p>
            You can find my resume{" "}
            <a href="https://raw.githubusercontent.com/sofiakgomes/portfolio-v2/main/src/assets/about/resume.pdf" target="_blank">here</a>.
          </p>
          <h1>CONTACT</h1>
          <p>
            <a href="mailto:sofiakfourigomes@gmail.com">sofiakfourigomes@gmail.com</a><br/>
            <a href="https://www.linkedin.com/in/sofia-gomes-3899b7183/" target="_blank">
              https://www.linkedin.com/in/sofia-gomes-3899b7183/
            </a><br/>
            <a href="https://twitter.com/sofiakpgomes_" target="_blank">
              https://twitter.com/sofiakpgomes_
            </a><br/>
            (404) 563-6718
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;