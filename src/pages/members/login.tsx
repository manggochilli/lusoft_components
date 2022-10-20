import React,{ useState } from "react";
import { Link } from "react-router-dom";
import { Icon, InputText, InputPass, Button, SNSbutton, Stick, Text } from '../../components/index';

function MemberLogin() {

	// 탭 메뉴에 따른 반응 - 개인/기업 회원
	const [ tabActive , setTabActive ] = useState('person');

	return (
		<div className="pack w(100%) p(20) bg(#000.5)">
			<div className="relative w(375px~100%~1000px) bg(#fff)">
				<div className="relative vbox vgap(40)">

					{/** 상단 btns */}
					<div className="vbox">

						{/** <Regular/> **/}
						<div className="pack p(0/16) w(375px~100%~1000px) bg(#fff)">
							<div className="hbox pack flex">

								{/** <__Button_Area/> **/}
								<div className="hbox w(124) h(40)">
									{/** <__Button/> **/}
									<div className="pack p(9)">
										{/** <Close/> **/}
										<Icon iconName="close" size={22} usrclass="clip" />
										{/** </Close> **/}
									</div>
									{/** </__Button> **/}
								</div>
								{/** </__Button_Area> **/}


								{/** <__Title_Area/> **/}
								<div className="w[100%-248px] h(40)">
									{/** 타이틀영역 **/}
								</div>
								{/** </__Title_Area> **/}


								{/** <__Button_Area/> **/}
								<div className="w(124) h(40)">
									{/** 상단버튼영역 **/}
								</div>
								{/** </__Button_Area> **/}

							</div>
						</div>
						{/** </Regular> **/}

					</div>

					{/** 탭메뉴 */}
					<div className="vbox">

						{/** <Tabs/> **/}
						<div className="pack p(0/16) w(375px~100%~1000px)">
							<ul className="hbox pack flex">

								{/** <__Tab/> **/}
								<li onClick={ () => { setTabActive('person') } } className={`flex clip p(14/16) bb(2) ${ tabActive === 'person' ? `bc(--primary-border-color)` : 'bc(--default-border-color)'} bg(transparent) font(15/20) ${ tabActive === 'person' ? 'c(--primary-font-color)' : 'c(--default-font-color)'} text-center pointer`}>개인회원</li>
								{/** </__Tab> **/}

								{/** <__Tab/> **/}
								<li onClick={ () => { setTabActive('company') } } className={`flex clip p(14/16) bb(2) ${ tabActive === 'company' ? 'bc(--primary-border-color)' : 'bc(--default-border-color)'} bg(transparent) font(15/20) ${ tabActive === 'company' ? 'c(--primary-font-color)' : 'c(--default-font-color)'} text-center pointer`}>기업회원</li>
								{/** </__Tab> **/}

							</ul>
						</div>
						{/** </Tabs> **/}

					</div>

					{/** 입력 */}
					<div className="vbox vgap(9)">

						{/** <Inputs/> **/}
						<div className="vbox p(0/16) w(375px~100%~1000px)">
							<div className="vbox vgap(8)">

								{/** <_Item_Label_Area/> **/}
								<div className="hbox w(360)">

									{/** <_Item_Label/> **/}
									<div className="hbox">
										<div className="font(12/18) c(#262626)">아이디</div>
									</div>
									{/** </_Item_Label> **/}

								</div>
								{/** </_Item_Label_Area> **/}

								{/** <Input_Only/> **/}
								<InputText kind="underline" placeholder="예) lusoft@lusoft.co.kr" maxlength={50} usrclass="w(100%) h(40) bc(#f5f5f5) AppleSD placeholder:AppleSD placeholder:font(14/20) placeholder:c(#c8c8c8)" />
								{/** </Input_Only> **/}

							</div>
						</div>
						{/** </Inputs> **/}


						{/** <Inputs/> **/}
						<div className="vbox p(0/16) w(375px~100%~1000px)">
							<div className="vbox vgap(8)">

								{/** <_Item_Label_Area/> **/}
								<div className="hbox w(360)">

									{/** <_Item_Label/> **/}
									<div className="hbox">
										<div className="font(12/18) c(#262626)">비밀번호</div>
									</div>
									{/** </_Item_Label> **/}

								</div>
								{/** </_Item_Label_Area> **/}

								{/** <Input_Only/> **/}
								<InputPass kind="underline" placeholder="Password" maxlength={20} usrclass="w(100%) h(40) bc(#f5f5f5) AppleSD placeholder:AppleSD placeholder:font(14/20) placeholder:c(#c8c8c8)" />
								{/** </Input_Only> **/}

							</div>
						</div>
						{/** </Inputs> **/}

					</div>

					{/** 로그인버튼, 옵션, 링크 */}
					<div className="vbox vgap(10)">

						{/** 로그인버튼 */}
						<div className="vbox p(0/16) w(375px~100%~1000px)">

							{/** <Button/> **/}
							<Button kind="primary" size="large">로그인</Button>
							{/** </Button> **/}

						</div>

						{/** <Login_group/> **/}
						<div className="pack p(0/16) w(375px~100%~1000px)">
							<div className="hbox pack hgap(60) flex">

								{/** <Checkbox/> **/}
								<div className="vbox p(0/50/0/0)">

									{/** <_Checkbox_base/> **/}
									<div className="vbox">
										<div className="hbox hgap(8)">

											{/** <Checkbox__checked__filled/> **/}
											<div className="relative w(18) h(18) bg(#fff.1) clip">

											</div>
											{/** </Checkbox__checked__filled> **/}

											<div className="vbox">
												<div className="font(11/16) c(#262626)">자동 로그인</div>
											</div>

										</div>
									</div>
									{/** </_Checkbox_base> **/}

								</div>
								{/** </Checkbox> **/}

								<div className="hbox pack hgap(2) w(145)">

									{/** <Button/> **/}
									<Button kind="ghost" size="small" usrclass="c(#262626)">아이디 찾기</Button>
									{/** </Button> **/}

									<div className="w(1) h(16) bg(#777)"></div>

									{/** <Button/> **/}
									<Button kind="ghost" size="small" usrclass="c(#262626)">비밀번호 찾기</Button>
									{/** </Button> **/}

								</div>
							</div>
						</div>
						{/** </Login_group> **/}

					</div>

					{/** <SNS_Group/> **/}
					<div className={`pack p(0/16) w(375px~100%~1000px) ${ tabActive === 'person' ? '' : 'none' }`}>
						<div className="vbox vgap(10) w(100%)">

							{/** <SNS_Login_Button/> **/}
							<SNSbutton service="naver" size="medium" iconPosition="text_left" usrText="네이버 ID로 로그인" usrclass="w(100%)" />
							{/** </SNS_Login_Button> **/}

							{/** <SNS_Login_Button/> **/}
							<SNSbutton service="kakao" size="medium" iconPosition="text_left" usrText="카카오 ID로 로그인" usrclass="w(100%)" />
							{/** </SNS_Login_Button> **/}

							{/** <SNS_Login_Button/> **/}
							<SNSbutton service="google" size="medium" iconPosition="text_left" usrText="Google ID로 로그인" usrclass="w(100%)" />
							{/** </SNS_Login_Button> **/}

							{/** <SNS_Login_Button/> **/}
							<SNSbutton service="apple" size="medium" useFill="fill" iconPosition="text_left" usrText="Apple ID로 로그인" usrclass="w(100%)" />
							{/** </SNS_Login_Button> **/}

						</div>
					</div>
					{/** </SNS_Group> **/}

					{/** <Join_link/> **/}
					<div className="pack p(0/16) w(375px~100%~1000px)">
						<div className="hbox pack flex">
							<Text size="small" usrclass="m(0/10) c(#777)">아직 회원이 아니세요?</Text>

							{/** <Button/> **/}
							<Link to="/" className={`${ tabActive === 'person' ? '' : 'none' }`}><Button kind="ghost" size="small" usrclass="c(--primary-font-color)">개인 회원가입</Button></Link>
							<Link to="/" className={`${ tabActive === 'company' ? '' : 'none' }`}><Button kind="ghost" size="small" usrclass="c(--primary-font-color)">기업 회원가입</Button></Link>
							{/** </Button> **/}

						</div>
					</div>
					{/** </Join_link> **/}

				</div>
			</div>

		</div>
	);
}

export default MemberLogin;