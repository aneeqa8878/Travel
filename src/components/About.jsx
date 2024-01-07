import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation,Autoplay } from 'swiper/modules';

function About() {
  return (
    <div>
      <h1>"Explore the World: Curated Travel Experiences Tailored to Your Wanderlust"</h1>
      <p className='text-center'>Dive into a world of adventure, culture, and 
      relaxation with our meticulously designed travel packages. 
      Whether you're seeking thrilling escapades, cultural immersion, or 
      serene retreats, we've crafted unique itineraries to satisfy your wanderlust.
       Our expertly curated packages combine top-notch accommodations, immersive activities, 
       and personalized experiences to ensure unforgettable journeys. From exploring iconic landmarks
        to discovering hidden gems, embark on a transformative travel experience that resonates with 
        your passion for exploration. Join us on a journey of discovery, adventure, and unparalleled 
        hospitality as we guide you through the world's most captivating destinations, 
      creating memories that last a lifetime.</p>
      <Swiper 
        navigation={true} 
        modules={[Navigation, Autoplay]} 
        className="mySwiper"
        autoplay={{ delay: 1000 }}  // autoplay with 3 seconds delay between slides
      >
      
        <SwiperSlide><img src='https://images.pexels.com/photos/19553433/pexels-photo-19553433/free-photo-of-thames-with-london-bridge.jpeg?auto=compress&cs=tinysrgb&w=600' style={{width:'100%', height:'90vh'}}/></SwiperSlide>
        <SwiperSlide><img src='https://images.pexels.com/photos/1796715/pexels-photo-1796715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'style={{width:'100%', height:'90vh'}}/></SwiperSlide>
        <SwiperSlide><img src='https://images.pexels.com/photos/145685/pexels-photo-145685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'style={{width:'100%', height:'90vh'}}/></SwiperSlide>
        <SwiperSlide><img src='https://img.emg-services.net/htmlpages/htmlpage15225/1200-header.jpg' style={{width:'100%', height:'80vh'}}/></SwiperSlide>
        <SwiperSlide><img src='https://cdn.britannica.com/77/151777-050-3E7C01EE/rail-Hohenzollern-pedestrian-bridge-cathedral-Cologne-Rhine.jpg'style={{width:'100%', height:'90vh'}}/></SwiperSlide>
        <SwiperSlide><img src='https://www.worldtravelguide.net/wp-content/uploads/2017/03/shu-Canada-Toronto_1388944829-1440x823.jpg'style={{width:'100%', height:'90vh'}}/></SwiperSlide>
        
      </Swiper>
      
    </div>
    
    
  )
}

export default About
