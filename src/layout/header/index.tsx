import { Link } from "react-router-dom";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';

export default function DefaultHeader() {

	return (
		<header className="w(100%) bb(0)">
			<Swiper
				slidesPerView={"auto"}
				spaceBetween={3}
				observer={true}
				observeParents={true}
				className="w(100%) h(30) m(0) p(0) bb(1) bc(--default-border-color)"
			>
				<SwiperSlide className={`flex w(120px~100%~100%) h(30) m(0) p(0/5px) bb(2) bc(#fff) text-center line-height(30) nowrap... pointer`}><Link to="/" className="font(14) bold c(--default-font-color)">Home</Link></SwiperSlide>
				<SwiperSlide className={`flex w(120px~100%~100%) h(30) m(0) p(0/5px) bb(2) bc(#fff) text-center line-height(30) nowrap... pointer`}><Link to="/member/login" className="font(14) bold c(--default-font-color)">로그인</Link></SwiperSlide>
				<SwiperSlide className={`flex w(120px~100%~100%) h(30) m(0) p(0/5px) bb(2) bc(#fff) text-center line-height(30) nowrap... pointer`}><Link to="/test/handshake" className="font(14) bold c(--default-font-color)">HandShake(test)</Link></SwiperSlide>
				<SwiperSlide className={`flex w(120px~100%~100%) h(30) m(0) p(0/5px) bb(2) bc(#fff) text-center line-height(30) nowrap... pointer`}><Link to="/test/component" className="font(14) bold c(--default-font-color)">Components(test)</Link></SwiperSlide>
				<SwiperSlide className={`flex w(120px~100%~100%) h(30) m(0) p(0/5px) bb(2) bc(#fff) text-center line-height(30) nowrap... pointer`}><Link to="/test/swiper" className="font(14) bold c(--default-font-color)">Swiper(test)</Link></SwiperSlide>
			</Swiper>
		</header>
	)
}
