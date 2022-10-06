import React from "react";
import { Button } from "../components/button";
import { InputText } from "../components/inputText";


function TestComponent() {
	return (
		<div className="pack w(100vw) p(20) bg(#000.5)">
			<div className="relative w(360) h(800) bg(#fff) clip">

				{/** <Image_Area/> */}
				<div className="absolute top(84) left(57) pack w(246) h(128) r(5)">
					<div className="w(246) h(55) b(1)">image</div>
				</div>
				{/** </Image_Area> */}


				{/** <Top_navigation/> */}
				<div className="absolute top(0) left(0) hbox hgap(222) p(10/0/0/8)">
					<div className="vbox">
						<div className="w(60) h(24) b(1)">image</div>
					</div>
					<div className="hbox hgap(9.199999809265137) p(0/8/0/5)">

						{/** <Search/> */}
						<div className="relative w(24) h(24) clip b(1)">image</div>
						{/** </Search> */}

						{/** <Density_medium/> */}
						<div className="relative w(24) h(24) clip b(1)">image</div>
						{/** </Density_medium> */}

					</div>
				</div>
				{/** </Top_navigation> */}


				{/** <Text_input/> */}
				<div className="absolute top(292) left(30) vbox w(300) bg(#fff)">

					{/** <_Text_input_base/> */}
					<div className="vbox vgap(4)">
						<div className="vbox vgap(8)">
							<div className="w(300) font(12/18) c(#c9162b)">이메일 주소</div>
							<InputText type="text" kind="underline" usrclass="w(300) h(48) bg(#fff) bc(#c9162b) placeholder:w(236) placeholder:pl(15) placeholder:font(14/20) placeholder:c(#a8a8a8)" placeholder="예) kream@kream.co.kr" />
						</div>
						<div className="w(300) font(12/18) c(#c9162b)">이메일 주소를 정확히 입력해주세요.</div>
					</div>
					{/** </_Text_input_base> */}

				</div>
				{/** </Text_input> */}

				{/** <Text_input/> */}
				<div className="absolute top(400) left(30) vbox w(300) bg(#fff)">

					{/** <_Text_input_base/> */}
					<div className="vbox">
						<div className="vbox vgap(8)">
							<div className="w(300) font(12/18) c(#525252)">비밀번호</div>
							<InputText type="password" kind="underline" usrclass="w(300) h(48) bg(#fff) bc(#ccc) placeholder:w(236) placeholder:pl(15) placeholder:font(14/20) placeholder:c(#a8a8a8)" placeholder="비밀번호" />
						</div>
					</div>
					{/** </_Text_input_base> */}

				</div>
				{/** </Text_input> */}

				<Button kind="secondary" size="small" usrclass="absolute top(492) left(109) w(145) bg(#e8e8e8) font(14/20) c(#949494)">로그인</Button>

				<Button kind="tertiary" usrclass="absolute top(624) left(5) hgap(99) p(0/0/0/8) w(350) h(42) r(8) b(#000.2) font(15/20) c(#262626) text-center">네이버로 로그인</Button>

				<Button kind="tertiary" usrclass="absolute top(674) left(5) hgap(99) p(0/0/0/8) w(350) h(42) r(8) b(#000.2) font(15/20) c(#262626) text-center">Apple로 로그인</Button>

				{/** <Login_group/> */}
				<div className="absolute top(542) left(13) hbox">

					<Button kind="ghost" usrclass="clip p(13/26) font(11/16) text-center">이메일 가입</Button>

					<div className="w(1) h(16) bg(#777)"></div>

					<Button kind="ghost" usrclass="clip p(13/26) font(11/16) text-center">이메일 찾기</Button>

					<div className="w(1) h(16) bg(#777)"></div>

					<Button kind="ghost" usrclass="clip p(13/26) font(11/16) text-center">비밀번호 찾기</Button>

				</div>
				{/** </Login_group> */}

			</div>
		</div>
	)
}

export default TestComponent;