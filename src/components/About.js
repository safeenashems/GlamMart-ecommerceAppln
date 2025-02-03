//import AboutImg from '../Assets/About section.png';
import { Form } from 'react-router-dom';
import ImgA from '../Assets/welcome-about.png';
import ImgB  from '../Assets/Screenshot 2025-01-18 232137.png';
import ImgC from '../Assets/our mission-about.png';

function About() {
    return (
        <div id="About" className='About'>

            <div className="about-divs">
                    <div className="about-contentDiv">
                        <h3> Welcome to GlamMart – Where Beauty Meets Style</h3><p> your ultimate destination for all things beauty and fashion. We are dedicated to bringing you a curated collection of premium products, from stunning beauty essentials to the latest fashion trends, all designed to make you look and feel extraordinary.</p>
                    </div>
                    <div className="about-imgDiv">
                        <img src={ImgA}  alt="About Us" className="about-image"/>
                    </div>
            </div>

            <div className="about-divs">
                    <div className="about-imgDiv">
                        <img src={ImgB}  alt="About Us" className="about-image" />
                    </div>
                    <div className="about-contentDiv">
                        <h3>Our Philosophy: Empowering Your Unique Style.</h3><p>At GlamMart, we believe in empowering individuals to express their unique style effortlessly. Our carefully selected range includes top-quality skincare, fragrances, jewelry, apparel, and more, ensuring something special for every occasion and personality.</p>
                    </div>
            </div>

            <div className="about-divs">
                    <div className="about-contentDiv">
                        <h3>Our Mission: Redefining Luxury and Convenience</h3><p>Provide an exceptional shopping experience that combines luxury, affordability, and convenience. With GlamMart, you can explore a world of glamour and sophistication, delivered straight to your doorstep. Step into the spotlight and redefine your style with us!</p>
                    </div>
                    <div className="about-imgDiv">
                        <img src={ImgC}  alt="About Us" className="about-image"/>
                    </div>
            </div>
            
        </div>
  );
};

export default About;
