"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProjectCard from '@/components/cards/projectCard';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./desktop.module.scss";

export default function Desktop() {
    return (
        <main className={`${styles.main}`}>
            {/* Bron: https://codesandbox.io/p/sandbox/xw8sfx?file=/src/App.jsx */}
             <Swiper
                    slidesPerView={'auto'}
                    slidesOffsetBefore={20}
                    slidesOffsetAfter={20}

                    // Bron: Chat gpt
                    breakpoints={{
                        1300: {
                            slidesOffsetBefore: "100"
                        },
                        1500: {
                            slidesOffsetBefore: "200"
                        },
                        1900: {
                            slidesOffsetBefore: "300"
                        },
                    }}

                    spaceBetween={30}
                    modules={[Navigation]}
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