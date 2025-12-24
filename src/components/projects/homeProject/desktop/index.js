"use client";
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import ProjectCard from '@/components/cards/projectCard';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./desktop.module.scss";

export default function Desktop() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('https://xiaonan.nl/wp-json/wp/v2/projects-2026?acf_format=standard')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);


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

                {data.map((item) => {
                    const category = item.acf.category.join(",");
                    return (
                        <SwiperSlide key={item.id} className={`${category}`}>
                            <ProjectCard
                                title={item.title.rendered}
                                goal={item.acf.goal}
                                img={item.acf.images[0]}
                                alt={item.title.rendered}
                                data={item}
                                slug={item.slug}
                            />
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </main>
    )
}