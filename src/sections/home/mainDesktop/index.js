"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import ProjectCard from '@/components/cards/projectCard';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import styles from "./main.module.scss";

export default function MainDesktop() {
    return (
        <main className={`${styles.main}`}>
             <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    pagination={{
                    clickable: true,
                    }}
                    modules={[Pagination, Navigation]}
                    navigation={true}
                    className="mySwiper"
                >
                    <SwiperSlide><ProjectCard/></SwiperSlide>
                    <SwiperSlide><ProjectCard/></SwiperSlide>
                    <SwiperSlide><ProjectCard/></SwiperSlide>
                    <SwiperSlide><ProjectCard/></SwiperSlide>
                    <SwiperSlide><ProjectCard/></SwiperSlide>
                    <SwiperSlide><ProjectCard/></SwiperSlide>
                </Swiper>
        </main>
    )
}