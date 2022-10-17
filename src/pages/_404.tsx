import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
	return (
		<div className="block hpack">
			<div>
				<div className="m(10/0) font(30) bold text-center">페이지를 찾을 수 없습니다.</div>
				<div className="m(10/0) font(25) bold text-center">404 - PAGE NOT FOUND</div>
				<div className="m(10/0) font(14) text-center">페이지가 존재하지 않거나, 사용할 수 없는 페이지입니다. 입력하신 주소가 정확한지 다시 한번 확인해 주시기 바랍니다.</div>
				<div className="m(10/0) text-center"><Link to="/">첫화면으로이동</Link></div>
			</div>
		</div>
	)
}

export default NotFound;