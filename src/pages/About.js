import "../css/About.css";
import sofia from "../assets/about/sofia.jpg";

function About() {
  return (
    <div className="about">
      <div className="about-row">
        <img src={sofia} />
        <div className="about-text">
          <h1>About</h1>
          <p>
            My name is Sofia Gomes. I'm a proud Brazilian and an aspiring Art Director currently living in Atlanta, GA.
          </p>
          <p>
            Throughout my journey from Architecture school in Brazil to becoming an international student in the U.S., I 
            have learned that there's no challenge I'm not willing to take on and that with passion and hard work, any 
            dream is achievable.
          </p>
          <p>
            Advertising and design are in my mind and heart 100% of the time &mdash; that is, when I'm not looking at pictures 
            of my <a href="https://www.tiktok.com/@ladydithesecond?lang=en" target="_blank">pomsky</a>.
          </p>
          <p>
            What moves me is problem solving and expressing my creativity, and I hope to achieve my goals and aspirations 
            trough that.
          </p>
          <p>
            You can find my resume <a href="">here</a>.
          </p>
          <h1>Contact</h1>
          <p>
            <a href="mailto:sofiakfourigomes@gmail.com">sofiakfourigomes@gmail.com</a><br/>
            <a href="https://www.linkedin.com/in/sofia-gomes-3899b7183/" target="_blank">
              https://www.linkedin.com/in/sofia-gomes-3899b7183/
            </a><br/>
            404-563-6718
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;