// video slider

import { useRef, useState, useEffect } from "react";
import { Star } from "react-feather";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";



const VideoSlider = ({ list }) => {

  const [swiper, setSlider] = useState(null);

  // Keep track of current playing video index
  const [activeVideoIndex, setActiveVideoIndex] = useState(0);

  // Ref to current playing video
  const videoRef = useRef(null);

  // useEffect(() => {
  //   const swiper = swiperRef.current;
    
  //   if (swiper) {
  //     swiper.slides.forEach((slide, index) => {
  //       slide.on('transitionStart', () => {
  //         setActiveVideoIndex(index);
  //       });
  //     });
  //   }
  // }, [swiper]);

  // Stop current playing video when slide changes
  const onSlideChange = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  

  return (
    <Swiper
      onSlideChange={onSlideChange} 
      onSwiper={setSlider}
      loop={true}
    >
      {list.map((item, index) => (
        <SwiperSlide key={index}>
          
          <div className="video-card">
          <video 
            ref={index === activeVideoIndex ? videoRef : null}
            controls
            type="video/mp4"
            src={item.video}
            alt={item.alternate}
            width="300"
  height="300"
          />
        <p className="text-center">{item.comment}</p>

</div>
        </SwiperSlide>
      ))}
    </Swiper>
    
  );

};
export default VideoSlider;