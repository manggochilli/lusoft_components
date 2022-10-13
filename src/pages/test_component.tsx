import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import LogoBig from "../image/base/logo.png";
import LogoSmall from "../image/base/logo_small.png";

// components
import { Icon, Button, SNSbutton, InputText, InputPass } from "../components/index";

function TestComponent() {

	// 로그인 테스트용
	const [ testFile , setTestFile ] = useState( '/api/test.json' );
	// 폼 유효성검사
	const [ chkForm , setChkForm ] = useState( false );

	// 로그인 버튼 disabled 처리
	const [ disabled , setDisabled ] = useState( true );

	// 로그인 페이지에서 입력받아서 전송할 항목
	const [ usrEmail , setUsrEmail ] = useState('');
	const [ usrPass , setUsrPass ] = useState('');

	// 상태메세지 - 이메일
	const [ scriptEmail , setScriptEmail ] = useState( '이메일주소를 입력하세요' );

	// 상태메세지 - 비밀번호
	const [ scriptPass , setScriptPass ] = useState( '' );

	function checkEmail() {
		let emailTerm = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
		if( usrEmail.length < 6 ) {
			setScriptEmail( '이메일주소를 입력하세요' );
			setChkForm( false );
		} else if( !emailTerm.test( usrEmail ) ) {
			setScriptEmail( '이메일 형식이 아닙니다.' );
			setDisabled( true );
			setChkForm( false );
		} else {
			setScriptEmail( '' );
			setDisabled( false );
			setChkForm( true );
		}
	}

	// 로그인 버튼 처리
	const SendLogin = (event: React.FormEvent<HTMLFormElement>) => {
		// 중복 실행 방지
		event.preventDefault();
		setDisabled( true ); // 전송 버튼 비활성화 시켜서 중복 실행 방지\

		if( usrPass.length < 4 ) {
			setScriptPass( '비밀번호를 확인해주세요' );
			setDisabled( false );
			return false;
		} else {
			setScriptPass( '' );
			setDisabled( true );
		}

		// 입력값을 취합
		var formData = new FormData();
		formData.append('usrEmail',usrEmail);
		formData.append('usrPass',usrPass);


		// formData 확인
		for( let key of formData.keys() ) {
			console.log( `${key}: ${formData.get(key)}` );
		}


		// 전송
		alert('전송 click - 작동하지 않습니다.');

		axios.post( testFile , formData)
		.then( function ( response ) {
			//console.log( response );
			setScriptEmail('');
			setScriptPass('');
			if( response.data.result === 'success' ) {
				alert('로그인 성공(test)');
				alert('페이지 이동(실행하지 않습니다.');
			} else if( response.data.result === 'error' ) {
				alert('로그인 실패(test)');
				alert(response.data.result_code);
				switch( response.data.result_code ) {
					case 1 : case 3 :
						setScriptEmail( response.data.result_text );
						break;
					case 2 :
						setScriptPass( response.data.result_text );
						break;
					case 4 : case 5 :
						alert( response.data.result_text );
						break;
				}
				setDisabled( false );
			}
		} )
		.catch( function ( error ) {
			console.log( error );
		} )
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
				<select className="absolute top(200)" onChange={ (event) => { setTestFile(event.target.value); } }>
					<option value="/api/test1.json">이메일</option>
					<option value="/api/test2.json">비밀번호</option>
					<option value="/api/test3.json">이메일형식</option>
					<option value="/api/test4.json">아이디또는비밀번호불일치</option>
					<option value="/api/test5.json">차단</option>
				</select>
				{/** </Image_Area> */}

				{/** <Text_input/> */}
				<div className="absolute top(250) left(30) vbox w(300) bg(#fff)">

					{/** <_Text_input_base/> */}
					<div className="vbox vgap(4)">
						<div className="vbox vgap(8)">
							<div className="w(300) font(12/18) c(#525252)">이메일 주소</div>
							<InputText name="usr_email" kind="underline" usrclass="w(300) h(48) p(0/40/0/10) bg(#fff) bc(#ccc) placeholder:w(236) placeholder:font(14/20) placeholder:c(#a8a8a8)" placeholder="예) kream@kream.co.kr" required={true} vals={usrEmail} _onChange={ ( return_val:string ) => { setUsrEmail(return_val); checkEmail(); } } />
						</div>
						<div className="w(300) font(12/18) c(#c9162b)">{scriptEmail}</div>
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
							<InputPass name="usr_pass" kind="underline" usrclass="w(300) h(48) p(0/40/0/10) bg(#fff) bc(#ccc) placeholder:w(236) placeholder:font(14/20) placeholder:c(#a8a8a8)" placeholder="비밀번호" required={true} vals={usrPass} _onChange={ ( return_val:string ) => { setUsrPass(return_val); } } />
						</div>
						<div className="w(300) font(12/18) c(#c9162b)">{scriptPass}</div>
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