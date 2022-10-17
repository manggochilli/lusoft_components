// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

export default () => {
	return (
		<div className="w(375px~1000px~100vw) m(0/auto)">
		<Swiper
			slidesPerView={"auto"}
			spaceBetween={5}
			observer={true}
			observeParents={true}
			className="w(100%) h(30) b(0) m(16px/0/32px) p(0)"
		>
			<SwiperSlide className="flex w(100px~100%~100%) h(30) line-height(30) bg(magenta) font(14) c(#565656) p(0/5px) m(0) bold bb(1) bc(#e6e6e6) text-center nowrap...">전체</SwiperSlide>
			<SwiperSlide className="flex w(100px~100%~100%) h(30) line-height(30) bg(yellow) font(14) c(#565656) p(0/5px) m(0) bold bb(1) bc(#e6e6e6) text-center nowrap...">서울</SwiperSlide>
			<SwiperSlide className="flex w(100px~100%~100%) h(30) line-height(30) bg(cyan) font(14) c(#565656) p(0/5px) m(0) bold bb(1) bc(#e6e6e6) text-center nowrap...">경기/인천</SwiperSlide>
			<SwiperSlide className="flex w(100px~100%~100%) h(30) line-height(30) bg(black) font(14) c(#565656) p(0/5px) m(0) bold bb(1) bc(#e6e6e6) text-center nowrap...">세종/충북</SwiperSlide>
			<SwiperSlide className="flex w(100px~100%~100%) h(30) line-height(30) bg(magenta) font(14) c(#565656) p(0/5px) m(0) bold bb(1) bc(#e6e6e6) text-center nowrap...">대전/충남</SwiperSlide>
			<SwiperSlide className="flex w(100px~100%~100%) h(30) line-height(30) bg(yellow) font(14) c(#565656) p(0/5px) m(0) bold bb(1) bc(#e6e6e6) text-center nowrap...">강원</SwiperSlide>
			<SwiperSlide className="flex w(100px~100%~100%) h(30) line-height(30) bg(cyan) font(14) c(#565656) p(0/5px) m(0) bold bb(1) bc(#e6e6e6) text-center nowrap...">전북</SwiperSlide>
			<SwiperSlide className="flex w(100px~100%~100%) h(30) line-height(30) bg(black) font(14) c(#565656) p(0/5px) m(0) bold bb(1) bc(#e6e6e6) text-center nowrap...">광주/전남</SwiperSlide>
			<SwiperSlide className="flex w(100px~100%~100%) h(30) line-height(30) bg(magenta) font(14) c(#565656) p(0/5px) m(0) bold bb(1) bc(#e6e6e6) text-center nowrap...">대구/경북</SwiperSlide>
			<SwiperSlide className="flex w(100px~100%~100%) h(30) line-height(30) bg(yellow) font(14) c(#565656) p(0/5px) m(0) bold bb(1) bc(#e6e6e6) text-center nowrap...">부산/울산/경남</SwiperSlide>
			<SwiperSlide className="flex w(100px~100%~100%) h(30) line-height(30) bg(cyan) font(14) c(#565656) p(0/5px) m(0) bold bb(1) bc(#e6e6e6) text-center nowrap...">제주</SwiperSlide>
		</Swiper>
		</div>
	);
};