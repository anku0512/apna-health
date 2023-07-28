import { useRef, useState } from "react";
import { Star } from "react-feather";
import SwiperCore, { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

const PictureSlider = ({ list }) => {
  SwiperCore.use([Pagination]);
  const [swiper, setSwiper] = useState(null);
  const paginationRef = useRef(null);

  return (
    <div className="photo-carousel relative">
      <Swiper
        pagination={{
          type: "bullets",
          el: paginationRef.current,
          clickable: true,
          dynamicBullets: true,
        }}
        onSwiper={(swiper) => {
          setSwiper(swiper);
        }}
        // loop={true}
        modules={[Pagination, Autoplay]}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
          stopOnLastSlide: false
        }}
        slidesPerView={1}
        breakpoints={{
          992: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 3,
          },
        }}
      >
        {list.map((item, i) => (
  <SwiperSlide key={"feature-" + i}>
    <div className="card mb-4">
      <div className="photo flex flex-col items-center">
        <div className="photo-author-avatar">
          <img 
            src={item.photo} 
            alt={item.alternate}
            width={300}
            height={300} 
          />
        </div>
        <p className="text-center">{item.detail}</p>
      </div>
    </div>
  </SwiperSlide>
))}
      </Swiper>
      <div className="relative flex justify-center">
        <div
          width="100%"
          className="swiper-pagination reviews-carousel-pagination !bottom-0"
          style={{ width: "100%" }}
          ref={paginationRef}
        ></div>
      </div>
    </div>
  );
};

export default PictureSlider;
