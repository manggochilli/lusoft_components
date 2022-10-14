import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

import LogoBig from "../image/base/logo.png";
import LogoSmall from "../image/base/logo_small.png";

// components
import { Icon, Button, SNSbutton, InputText, InputPass } from "../components/index";

function TestComponent() {

	// 로그인 테스트용
	const [ testFile , setTestFile ] = useState( '/api/test1.json' );

	// 폼 유효성확인
	const [ chkForm , setChkForm ] = useState( false );

	// 입력박스 종류
	const [ inputKindEmail , setInputKindEmail ] = useState( 'underline' );
	const [ inputKindPass , setInputKindPass ] = useState( 'underline' );

	// 로그인 버튼 disabled 처리
	const [ disabled , setDisabled ] = useState( true );

	// 로그인 페이지에서 입력받아서 전송할 항목
	const [ Inputs , setInputs ] = useState({
		usr_email: '',
		usr_pass: ''
	});

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if( e ) {
			setInputs({
				...Inputs,
				[e.target.name]: e.target.value
			});
			//console.log( e.target.name + ' : ' + e.target.value );
		}
	}

	// 포커스 처리용
	const usrEmailRef = useRef(null);
	const usrPassRef = useRef(null)

	// 상태메세지 - 이메일
	const [ scriptEmail , setScriptEmail ] = useState( '이메일주소를 입력하세요' );

	// 상태메세지 - 비밀번호
	const [ scriptPass , setScriptPass ] = useState( '' );

	function checkEmail() {
		//console.log( 'checkEmail : ' + Inputs.usr_email );
		let emailTerm = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
		if( Inputs.usr_email.length < 6 ) {
			setScriptEmail( '이메일주소를 입력하세요' );
			setChkForm( false );
			setDisabled( true );
			setInputKindEmail( 'underline_alert' );
		} else if( !emailTerm.test( Inputs.usr_email ) ) {
			setScriptEmail( '이메일 형식이 아닙니다.' );
			setChkForm( false );
			setDisabled( true );
			setInputKindEmail( 'underline_alert' );
		} else {
			setScriptEmail( '' );
			setChkForm( true );
			setDisabled( false );
			setInputKindEmail( 'underline' );
		}
	}

	// 로그인 버튼 처리
	const SendLogin = (event: React.FormEvent<HTMLFormElement>) => {
		// 중복 실행 방지
		event.preventDefault();
		setDisabled( true ); // 전송 버튼 비활성화 시켜서 중복 실행 방지

		if( Inputs.usr_pass.length < 4 ) {
			setScriptPass( '비밀번호를 확인해주세요' );
			setDisabled( false );
			setChkForm( false );
			setInputKindPass( 'underline_alert' );
			return false;
		} else {
			setScriptPass( '' );
			setDisabled( true );
			setChkForm( true );
			setInputKindPass( 'underline' );
		}

		// 입력값을 취합
		var formData = new FormData();
		formData.append('usrEmail',Inputs.usr_email);
		formData.append('usrPass',Inputs.usr_pass);

		// formData 확인
		//for( let key of formData.keys() ) {
		//	console.log( `${key}: ${formData.get(key)}` );
		//}

		// 전송
		if( chkForm === true ) {
			//console.log('전송 click - 작동하지 않습니다.');
			axios.post( testFile , formData)
			.then( function ( response ) {
				//console.log( response );
				setScriptEmail('');
				setScriptPass('');
				setInputKindEmail( 'underline' );
				setInputKindPass( 'underline' );
				if( response.data.result === 'success' ) {
					alert('로그인 성공');
					// console.log('페이지 이동(실행하지 않습니다.)');
					// jwt 처리
				} else if( response.data.result === 'error' ) {
					//console.log('로그인 실패(test)');
					//console.log(response.data.result_code);
					switch( response.data.result_code ) {
						case 1 : case 3 :
							setScriptEmail( response.data.result_text );
							setInputKindEmail( 'underline_alert' );
							usrEmailRef.current.focus();
							break;
						case 2 :
							setScriptPass( response.data.result_text );
							setInputKindPass( 'underline_alert' );
							usrPassRef.current.focus();
							break;
						case 4 : case 5 :
							alert( response.data.result_text );
							break;
					}
				}
			} )
			.catch( function ( error ) {
				console.log( error );
			} )
		}
		setDisabled( false );
	}

	return (
		<div className="pack w(100%) p(20) bg(#000.5)">
			<form name="form_login" className="relative w(360) h(850) bg(#fff) clip" onSubmit={SendLogin}>
				{/** <Top_navigation/> */}
				<div className="relative w(100%) h(44) p(10/0) bb(1) bc(#e9e9e9)">
					<Icon iconName="close" size={24} color="#404040" usrclass="absolute top(10) left(8) w(24) h(24)" />
					<div className="absolute top(10) right(8) hbox hgap(9)">

						{/** <Search/> */}
						<Icon iconName="search" size={24} color="#404040" />
						{/** </Search> */}

						{/** <Density_medium/> */}
						<Icon iconName="menu" size={24} color="#404040" />
						{/** </Density_medium> */}

					</div>
					<img src={LogoSmall} className="h(25) m(0/auto)" />
				</div>
				{/** </Top_navigation> */}

				{/** <Image_Area/> */}
				<img src={LogoBig} className="absolute top(84) left(57) pack w(246) h(128) r(5)" />
				<select className="absolute top(50) left(70) w(220) h(25)" onChange={ (event) => { setTestFile(event.target.value); } }>
					<option value="/api/test1.json">오류확인:이메일</option>
					<option value="/api/test2.json">오류확인:비밀번호</option>
					<option value="/api/test3.json">오류확인:이메일형식</option>
					<option value="/api/test4.json">오류확인:아이디또는비밀번호불일치</option>
					<option value="/api/test5.json">오류확인:차단</option>
					<option value="/api/test.json">확인:로그인성공</option>
				</select>
				{/** </Image_Area> */}

				{/** <Text_input/> */}
				<div className="absolute top(250) left(30) vbox w(300) bg(#fff)">

					{/** <_Text_input_base/> */}
					<div className="vbox vgap(4)">
						<div className="vbox vgap(8)">
							<div className="w(300) font(12/18) c(#525252)">이메일 주소</div>
							<InputText name="usr_email" kind={inputKindEmail} usrclass="w(300) h(48) p(0/40/0/10) placeholder:w(236) placeholder:font(14/20)" placeholder="예) kream@kream.co.kr" required={true} vals={Inputs.usr_email} _onChange={ ( return_event:any ) => { handleChange( return_event ); checkEmail(); } } _ref={usrEmailRef} />
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
							<InputPass name="usr_pass" kind={inputKindPass} usrclass="w(300) h(48) p(0/40/0/10) placeholder:w(236) placeholder:font(14/20)" placeholder="비밀번호" required={true} vals={Inputs.usr_pass} _onChange={ ( return_event:any ) => { handleChange( return_event ); } } _ref={usrPassRef} />
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

				<SNSbutton service="naver" size="medium" iconPosition="left" usrText="네이버 ID로 로그인" usrclass="absolute top(620) left(16) w[100%-32px]" />

				<SNSbutton service="kakao" size="medium" iconPosition="left" usrText="카카오 ID로 로그인" usrclass="absolute top(670) left(16) w[100%-32px]" />

				<SNSbutton service="google" size="medium" iconPosition="left" usrText="Google ID로 로그인" usrclass="absolute top(720) left(16) w[100%-32px]" />

				<SNSbutton service="apple" size="medium" useFill="fill" iconPosition="left" usrText="Apple ID로 로그인" usrclass="absolute top(770) left(16) w[100%-32px]" />

			</form>
		</div>
	)
}

export default TestComponent;