import React from "react";

function TestHandShake() {
	return (
		<div className="pack">
			<div className="relative w(360) h(800) bg(#fff) clip">

				{/** <Image_Area/> */}
				<div className="absolute top(84) left(57) pack w(246) h(128) r(5)">
					<div className="w(246) h(55)"></div>
				</div>
				{/** </Image_Area> */}


				{/** <Top_navigation/> */}
				<div className="absolute top(0) left(0) hbox hgap(222) p(10/0/0/8)">
					<div className="vbox">
						<div className="w(60) h(24)"></div>
				</div>
					<div className="hbox hgap(9.199999809265137) p(0/8/0/5)">

				{/** <Search/> */}
				<div className="relative w(24) h(24) clip">


				</div>
				{/** </Search> */}


				{/** <Density_medium/> */}
				<div className="relative w(24) h(24) clip">

				</div>
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
						<div className="hbox(top) hgap(16) p(15/16) h(48) bg(#fff) b(#c9162b) bw(2)">
							<div className="hbox(top) flex h(18) clip">
							<div className="flex w(236) h(18) font(14/20) c(#a8a8a8)">예) kream@kream.co.kr</div>
				</div>
							<div className="hbox p(1/0)">

				{/** <Error/> */}
				<div className="relative w(16) h(16) clip">

				</div>
				{/** </Error> */}

				</div>
				</div>
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
						<div className="hbox(top) p(15/16) h(48) bg(#fff) $ui-04 border - inner/border bottom">
							<div className="hbox(top) flex h(18) clip">
							<div className="flex w(268) h(18) font(14/20) c(#a8a8a8)"></div>
				</div>
				</div>
				</div>
				</div>
				{/** </_Text_input_base> */}

				</div>
				{/** </Text_input> */}


				{/** <Button/> */}
				<div className="absolute top(492) left(109) vbox p(2) w(145) bg(#e8e8e8) r(8) clip">

				{/** <_Button_base/> */}
				<div className="hbox p(5/50) r(6) clip">
						<div className="font(14/20) c(#949494)">로그인</div>
				</div>
				{/** </_Button_base> */}

				</div>
				{/** </Button> */}


				{/** <Login_Button/> */}
				<div className="absolute top(624) left(5) hbox hgap(99) p(0/0/0/8) w(350) h(42) r(8) b(#000.2)">

				{/** <Image_Area/> */}
				<div className="pack w(24) h(24) r(5) clip">
						<div className="flex h(fill)"></div>
				</div>
				{/** </Image_Area> */}

					<div className="pack p(2/0)">
						<div className="font(15/20) c(#262626) text-center">네이버로 로그인</div>
				</div>
				</div>
				{/** </Login_Button> */}


				{/** <Login_Button/> */}
				<div className="absolute top(674) left(5) hbox hgap(99) p(0/0/0/8) w(350) h(42) r(8) b(#000.2)">

				{/** <Image_Area/> */}
				<div className="pack w(24) h(24) r(5) clip">
						<div className="w(19) h(24)"></div>
				</div>
				{/** </Image_Area> */}

					<div className="pack p(2/0)">
						<div className="font(15/20) c(#262626) text-center">Apple로 로그인</div>
				</div>
				</div>
				{/** </Login_Button> */}


				{/** <Login_group/> */}
				<div className="absolute top(542) left(13) hbox">

				{/** <Button/> */}
				<div className="vbox p(2) r(8) clip">

				{/** <_Button_base/> */}
				<div className="hbox p(13/26) r(6) clip">
						<div className="font(11/16) c(#262626) text-center">이메일 가입</div>
				</div>
				{/** </_Button_base> */}

				</div>
				{/** </Button> */}

					<div className="w(1) h(16) bg(#777)">
				</div>

				{/** <Button/> */}
				<div className="vbox p(2) r(8) clip">

				{/** <_Button_base/> */}
				<div className="hbox p(13/26) r(6) clip">
						<div className="font(11/16) c(#262626) text-center">이메일 찾기</div>
				</div>
				{/** </_Button_base> */}

				</div>
				{/** </Button> */}

					<div className="w(1) h(16) bg(#777)">
				</div>

				{/** <Button/> */}
				<div className="vbox p(2) r(8) clip">

				{/** <_Button_base/> */}
				<div className="hbox p(13/26) r(6) clip">
						<div className="font(11/16) c(#262626) text-center">비밀번호 찾기</div>
				</div>
				{/** </_Button_base> */}

				</div>
				{/** </Button> */}

				</div>
				{/** </Login_group> */}

			</div>
		</div>
	)
}

export default TestHandShake;