import React, { useState } from "react";
import pixell from "../assets/pixell.mp4";
import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import video3 from "../assets/video3.mp4";
import Calender from "./Calender";
import Ruler from "./Ruler";
import { Link } from "react-router-dom";

function Header() {
  const [destination, setDestination] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [maxPrice, setMaxPrice] = useState(0); // Using a number for max price
  const [displayedImage, setDisplayedImage] = useState(pixell); // Default image

  const handleSearch =async () => {
    const response=await fetch("http://localhost:8000/product")
    const data=await response.json()
    
    // Here, you can add logic to fetch a new image based on the user's selection
    // For simplicity, I'll just use the pixel video as an example
    // Replace this with logic to fetch the appropriate image
    setDisplayedImage(pixell);
  };

  return (
    <div>
      <header>
        <div className="video-container">
          <video src={displayedImage} autoPlay loop muted />
          <div className="text-overlay">
            <h6 className="package-text">Our Packages</h6>
            <p className="search-text">Search your Holiday</p>
            <div className="button-container">
              <div className="dropdown">
                <h6 className="heading" style={{ color: "black" }}>
                  Search your Destination
                </h6>
                <button className="search-button">Search destination
                <div className="dropdown-content">
                  <Link onClick={() => setDestination("England")} to="/england">
                    England
                  </Link>
                  <Link onClick={() => setDestination("Germany")} href="#">
                    Germany
                  </Link>
                  <Link onClick={() => setDestination("Canada")} href="#">
                    Canada
                  </Link>
                </div>
                </button>
              </div>
              <div>
                <h6 className="heading" style={{ color: "black" }}>
                  Select your date
                </h6>
                <Calender onDateSelect={setSelectedDate} />
              </div>
              <div>
                <h6 className="heading" style={{ color: "black" }}>
                
                <Ruler onPriceSelect={setMaxPrice} /> 
                </h6>
                
              </div>
              <button onClick={handleSearch} className="search-button">
                Search
              </button>
            </div>
          </div>
        </div>
      </header>
      <div class="container text-center">
  <div class="row">
    <div class="col">
      
    <h1 className="text-center mt-2" >Discover Your Next Adventure with <b>Travel</b></h1>
        <p className="text-center">Welcome to a realm where dreams take flight and memories are crafted against the backdrop of 
        breathtaking landscapes. At <b>Travel</b>, we don’t just offer destinations;
         we curate experiences that resonate with your soul. Imagine wandering through ancient cobblestone 
         streets in Europe, feeling the warm embrace of tropical sunsets in Southeast Asia, or embarking
          on an adrenaline-pumping safari across the vast plains of Africa.</p>

    </div>
    <div class="col m-2">
    <video src={video1} autoPlay loop muted />
    </div>
  </div>
</div>
 <div class="container text-center">
  <div class="row">
  <div class="col m-2">
    <video src={video2} autoPlay loop muted />
    </div>
    <div class="col">
      
    <h1 className="text-center mt-2" >Discover Your Next Adventure with <b>Travel</b></h1>
        
    <p className="text-center">With a tapestry of destinations waiting to be explored, 
          our platform is more than just a booking site—it's your gateway to a world of wonders. 
          Whether you're a seasoned globe-trotter seeking off-the-beaten-path adventures or a first-time traveler
           looking to embark on a transformative journey, our meticulously crafted itineraries 
           cater to every wanderlust-filled heart.</p>


    </div>
    
  </div>
</div>
    <div class="container text-center">
  <div class="row">
    <div class="col">
      
    <h1 className="text-center mt-2" >Discover Your Next Adventure with <b>Travel</b></h1>
        <p className="text-center">Welcome to a realm where dreams take flight and memories are crafted against the backdrop of 
        breathtaking landscapes. At <b>Travel</b>, we don’t just offer destinations;
         we curate experiences that resonate with your soul. Imagine wandering through ancient cobblestone 
         streets in Europe, feeling the warm embrace of tropical sunsets in Southeast Asia, or embarking
          on an adrenaline-pumping safari across the vast plains of Africa.</p>

    </div>
    <div class="col m-2">
    <video src={video3} autoPlay loop muted />
    </div>
  </div>
</div>
    </div>
  );
}

export default Header;
