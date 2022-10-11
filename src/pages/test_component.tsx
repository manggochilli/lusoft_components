import React, { useState } from "react";
import { Link } from "react-router-dom";

import LogoBig from "../image/base/logo.png";
import LogoSmall from "../image/base/logo_small.png";

// components
import { Button } from "../components/button";
import { InputText } from "../components/inputText";
import { InputPass } from "../components/inputPass";
import { Icon } from "../components/icon";
import { SNSbutton } from "../components/snsbutton";

function TestComponent() {
	const [ disabled , setDisabled ] = useState( false );

	// 로그인 버튼 처리
	const SendLogin = (event: React.FormEvent) => {
		event.preventDefault();
		setDisabled( true );
		alert('서버와 통신을 준비중입니다.');
	}

	return (
		<div className="pack w(100vw) p(20) bg(#000.5)">
			<form name="form_login" className="relative w(360) h(850) bg(#fff) clip" onSubmit={SendLogin}>

				{/** <Top_navigation/> */}
				<div className="absolute top(0) left(0) hbox hgap(222) p(10/0/0/8)">
					<img src={LogoSmall} className="vbox w(60) h(24)" />
					<div className="hbox hgap(9) p(0/8/0/5)">

						{/** <Search/> */}
						<Icon iconName="search" size={24} color="#404040" />
						{/** </Search> */}

						{/** <Density_medium/> */}
						<Icon iconName="menu" size={24} color="#404040" />
						{/** </Density_medium> */}

					</div>
				</div>
				{/** </Top_navigation> */}

				{/** <Image_Area/> */}
				<img src={LogoBig} className="absolute top(84) left(57) pack w(246) h(128) r(5)" />
				{/** </Image_Area> */}

				{/** <Text_input/> */}
				<div className="absolute top(250) left(30) vbox w(300) bg(#fff)">

					{/** <_Text_input_base/> */}
					<div className="vbox vgap(4)">
						<div className="vbox vgap(8)">
							<div className="w(300) font(12/18) c(#525252)">이메일 주소</div>
							<InputText name="usr_email" kind="underline" usrclass="w(300) h(48) p(0/40/0/10) bg(#fff) bc(#ccc) placeholder:w(236) placeholder:font(14/20) placeholder:c(#a8a8a8)" placeholder="예) kream@kream.co.kr" required={true} />
						</div>
						<div className="none w(300) font(12/18) c(#c9162b)">이메일 주소를 정확히 입력해주세요.</div>
					</div>
					{/** </_Text_input_base> */}

				</div>
				{/** </Text_input> */}

				{/** <Text_input/> */}
				<div className="absolute top(360) left(30) vbox w(300) bg(#fff)">

					{/** <_Text_input_base/> */}
					<div className="vbox">
						<div className="vbox vgap(8)">
							<div className="w(300) font(12/18) c(#525252)">비밀번호</div>
							<InputPass name="usr_pass" kind="underline" usrclass="w(300) h(48) p(0/40/0/10) bg(#fff) bc(#ccc) placeholder:w(236) placeholder:font(14/20) placeholder:c(#a8a8a8)" placeholder="비밀번호" required={true} />
						</div>
					</div>
					{/** </_Text_input_base> */}

				</div>
				{/** </Text_input> */}

				<Button type="submit" kind="secondary" size="small" usrclass="absolute top(490) left(109) w(145) bg(#e8e8e8) font(14/20) c(#949494)" disabled={disabled}>로그인</Button>

				{/** <Login_group/> */}
				<div className="absolute top(540) left(13) hbox">

					<Link to="/" className="clip p(13/26) font(11/16) c(#262626) hover:c(#262626) text-center">이메일 가입</Link>

					<div className="w(1) h(16) bg(#777)"></div>

					<Link to="/" className="clip p(13/26) font(11/16) c(#262626) hover:c(#262626) text-center">이메일 찾기</Link>

					<div className="w(1) h(16) bg(#777)"></div>

					<Link to="/" className="clip p(13/26) font(11/16) c(#262626) hover:c(#262626) text-center">비밀번호 찾기</Link>

				</div>
				{/** </Login_group> */}

				<SNSbutton service="naver" size="medium" iconPosition="left" usrText="네이버 ID로 로그인" usrclass="absolute top(620) left(5) w(350)" />

				<SNSbutton service="kakao" size="medium" iconPosition="left" usrText="카카오 ID로 로그인" usrclass="absolute top(670) left(5) w(350)" />

				<SNSbutton service="google" size="medium" iconPosition="left" usrText="Google ID로 로그인" usrclass="absolute top(720) left(5) w(350)" />

				<SNSbutton service="apple" size="medium" useFill="fill" iconPosition="left" usrText="Apple ID로 로그인" usrclass="absolute top(770) left(5) w(350)" />

			</form>
		</div>
	)
}

export default TestComponent;