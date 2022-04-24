import useFetchMovieList from "../hooks/useFetchMovieLists";
import CardCarrousel from "./CardCarrousel";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carrousel =()=>{
  const [info, ] =useFetchMovieList("popular","Es")
  return (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={0}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {info.map(element=>{
                  return(
                      
                    <SwiperSlide isActive><CardCarrousel key={element.id} className="carrouselCard" imagen={element.poster_path}/></SwiperSlide>
                      
                      
                  )
              })
              }
      </Swiper>
  );
}
export default Carrousel