import React,{useState,useEffect} from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/home.css"

const Home = () => {
    const sliderImages = [
      "/images/p1.jpg",
      "/images/p2.jpg",
      "/images/p3.jpg",
      "/images/p4.jpg",
      "/images/p5.jpg",
      "/images/p6.jpg",
      "/images/p7.jpg",
      "/images/p8.jpg",
      "../images/p9.jpg",
      "../images/p10.jpg",
    ];
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
    };

    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-scroll every 2 seconds
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === sliderImages.length - 1 ? 0 : prevIndex + 1
        );
      }, 2000);

      return () => clearInterval(interval);
    }, []);

  return (
    <div className="container">
      <div className="s-container">
        <div className="top-section">
          <div className="content">
            <h1>A community learning center</h1>
            <p>
              Aarohan is a place where people of a community can come together
              to plan, develop and participate in activities that are local,
              friendly, welcoming, non-judgmental, and most importantly engaging
              and educative for everyone involved.
            </p>
          </div>
          <div className="scroll-container">
            <div className="carousel-wrapper">
              <div className="carousel-slide">
                <img
                  src={sliderImages[currentIndex]}
                  alt={`Slide ${currentIndex}`}
                  className="carousel-image"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="history">
          <div className="history-content">
            <h3> The Aarohan Story</h3>
            <div className="video">
              <iframe
                width="940"
                height="528"
                src="https://www.youtube.com/embed/OrmO9n45iB0"
                title="Aarohan in Shahdara"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p className="video-content">
                Aarohan community learning centers act as vehicles of education,
                learning, innovation and creation for all the members of the
                community. It not only offers definite scientific, artistic,
                sporting arrears for the kids but also similar interest
                oriented, job oriented vocational help for adults. We will be
                looking at taking up community projects that engage the
                community and enhance their understanding of their own problems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home