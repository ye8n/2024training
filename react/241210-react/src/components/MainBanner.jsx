import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./MainBanner.module.scss";

import bg1 from '../assets/images/bg1.png';

function MainBanner() {
  const path = process.env.PUBLIC_URL;

  return (
    <article>
      <Swiper 
        navigation={true} 
        loop={true}
        modules={[Navigation, Autoplay]} 
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} 
        className={styles.mainSwiper}>
        <SwiperSlide className={styles.bg}>
          <img src="https://placeholder.co/800x500/f46/fff?text=img1" alt="img1" />
        </SwiperSlide>
        <SwiperSlide className={styles.bg}><img src={bg1} alt="bg2" /></SwiperSlide>
        <SwiperSlide className={styles.bg}><img src={path + "./images/bg2.png"} alt="img2" /></SwiperSlide>
        <SwiperSlide className={styles.bg}><img src={path + "./images/bg3.png"} alt="img3" /></SwiperSlide>
        <SwiperSlide className={`${styles.bg} ${styles.bg4}`}>Slide 4</SwiperSlide>
      </Swiper>
    </article>
  );
}

export default MainBanner;