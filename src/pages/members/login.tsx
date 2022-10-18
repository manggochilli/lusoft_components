import React from "react";

function MemberLogin() {
	return (
		<div className="relative w(375) h(812) bg(#fff)">
			<div className="absolute top(0) left(0) vbox vgap(40)">

				<div className="vbox">

					{/** <Regular/> **/}
					<div className="pack p(0/16) w(375) bg(#fff)">
						<div className="hbox pack flex">

							{/** <__Button_Area/> **/}
							<div className="hbox w(124)">

								{/** <__Button/> **/}
								<div className="pack p(9)">

									{/** <Close/> **/}
									<div className="relative w(22) h(22) clip"></div>
									{/** </Close> **/}

								</div>
								{/** </__Button> **/}

							</div>
							{/** </__Button_Area> **/}


							{/** <__Title_Area/> **/}
							<div className="w(104) h(40)">
							</div>
							{/** </__Title_Area> **/}


							{/** <__Button_Area/> **/}
							<div className="w(124)">
							</div>
							{/** </__Button_Area> **/}

						</div>
					</div>
					{/** </Regular> **/}

				</div>

				<div className="vbox">

					{/** <Tabs/> **/}
					<div className="pack p(0/16) w(375) bg(#fff)">
						<div className="hbox pack flex">

							{/** <__Tab/> **/}
							<div className="vbox pack flex bg(#fff) clip">
								<div className="relative w(fill) h(0)">
									<div className="w(172) h(48) bg(#fff) border / bottom"></div>
								</div>
								<div className="vbox pack vgap(12) p(14/16/0)">
									<div className="font(15/20) c(#1a9cff) text-center">개인회원</div>
									<div className="w(fill) h(2) bg(#1a9cff)"></div>
								</div>
							</div>
							{/** </__Tab> **/}

							{/** <__Tab/> **/}
							<div className="vbox pack flex bg(#fff) clip">
								<div className="relative w(fill) h(0)">
									<div className="w(172) h(48) bg(#fff) border / bottom"></div>
								</div>
								<div className="pack p(14/16)">
									<div className="font(15/20) c(#c8c8c8) text-center">기업회원</div>
								</div>
							</div>
							{/** </__Tab> **/}

						</div>
					</div>
					{/** </Tabs> **/}

				</div>

				<div className="vbox vgap(9)">

					{/** <Inputs/> **/}
					<div className="vbox p(0/16) w(375)">
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
							<div className="vbox(middle) vgap(8) p(9/0/0) w(360)">
								<div className="hbox">
									<div className="flex w(360) font(14/20) c(#c8c8c8)">예) lusoft@lusoft.co.kr</div>
								</div>

								{/** <_Item_Underline/> **/}
								<div className="relative h(1) clip">
									<div className="w(360) h(1) bg(#f5f5f5)"></div>
								</div>
								{/** </_Item_Underline> **/}

							</div>
							{/** </Input_Only> **/}

						</div>
					</div>
					{/** </Inputs> **/}

					{/** <Inputs/> **/}
					<div className="vbox p(0/16) w(375)">
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
							<div className="vbox(middle) vgap(8) p(9/0/0) w(360)">
								<div className="hbox">
									<div className="flex w(360) font(14/20) c(#c8c8c8)">Password</div>
								</div>

								{/** <_Item_Underline/> **/}
								<div className="relative h(1) clip">
									<div className="w(360) h(1) bg(#f5f5f5)"></div>
								</div>
								{/** </_Item_Underline> **/}

							</div>
							{/** </Input_Only> **/}

						</div>
					</div>
					{/** </Inputs> **/}

				</div>

				<div className="vbox vgap(10)">
					<div className="vbox p(0/16) w(375)">

						{/** <Button/> **/}
						<div className="pack p(2) h(48) bg(#1a9cff) r(8) clip">

							{/** <_Button_base/> **/}
							<div className="pack p(13/38) h(46) r(6) clip">
								<div className="font(14/20) c(#fff)">로그인</div>
							</div>
							{/** </_Button_base> **/}

						</div>
						{/** </Button> **/}

					</div>

					{/** <Login_group/> **/}
					<div className="pack p(0/16) w(375)">
						<div className="hbox pack hgap(75) flex">

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

							<div className="hbox">

								{/** <Button/> **/}
								<div className="vbox p(2) w(70) h(50) r(8) clip">

									{/** <_Button_base/> **/}
									<div className="pack p(13/10) h(46) r(6) clip">
										<div className="font(11/16) c(#262626) text-center">아이디 찾기</div>
									</div>
									{/** </_Button_base> **/}

								</div>
								{/** </Button> **/}

								<div className="w(1) h(16) bg(#777)"></div>

								{/** <Button/> **/}
								<div className="vbox p(2/2/2/10) w(70) h(50) r(8) clip">

									{/** <_Button_base/> **/}
									<div className="pack p(13/10) h(46) r(6) clip">
										<div className="font(11/16) c(#262626) text-center">비밀번호 찾기</div>
									</div>
									{/** </_Button_base> **/}

								</div>
								{/** </Button> **/}

							</div>

						</div>
					</div>
					{/** </Login_group> **/}

				</div>

				{/** <SNS_Group/> **/}
				<div className="pack p(0/16) w(375)">
					<div className="vbox vgap(10)">

						{/** <SNS_Login_Button/> **/}
						<div className="pack p(0/16) h(48) bg(#fff) r(8) b(#000.1) clip">
							<div className="hbox pack hgap(4) flex">

								{/** <Image_Area/> **/}
								<div className="pack w(24) h(24) r(5) clip">

								</div>
								{/** </Image_Area> **/}

								<div className="font(15/20) c(#262626) text-center">네이버로 로그인</div>
							</div>
						</div>
						{/** </SNS_Login_Button> **/}


						{/** <SNS_Login_Button/> **/}
						<div className="pack p(0/16) h(48) bg(#fff) r(8) b(#000.1) clip">
							<div className="hbox pack hgap(4) flex">

								{/** <Image_Area/> **/}
								<div className="pack w(24) h(24) r(5)">
									<div className="w(22) h(22)"></div>
								</div>
								{/** </Image_Area> **/}

								<div className="font(15/20) c(#262626) text-center">카카오 아이디로 로그인</div>
							</div>
						</div>
						{/** </SNS_Login_Button> **/}

						{/** <SNS_Login_Button/> **/}
						<div className="pack p(0/16) h(48) bg(#fff) r(8) b(#000.1) clip">
							<div className="hbox pack hgap(4) flex">

								{/** <Image_Area/> **/}
								<div className="pack w(24) h(24) r(5)">
									<div className="w(20) h(20)"></div>
								</div>
								{/** </Image_Area> **/}

								<div className="font(15/20) c(#262626) text-center">구글 계정으로 로그인</div>

							</div>
						</div>
						{/** </SNS_Login_Button> **/}

						{/** <SNS_Login_Button/> **/}
						<div className="pack p(0/16) h(48) bg(#000) r(8) b(#000.1) clip">
							<div className="hbox pack hgap(4) flex">

								{/** <Image_Area/> **/}
								<div className="pack w(24) h(24) r(5)">
									<svg width="19" height="24" viewBox="0 0 19 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.8554 12.7559C15.8659 11.8647 16.1017 10.9905 16.5409 10.2149C16.9801 9.4393 17.6085 8.78758 18.3674 8.32005C17.8842 7.63071 17.247 7.06332 16.5064 6.66315C15.7658 6.26298 14.9422 6.04105 14.1008 6.01471C12.3061 5.82671 10.5659 7.08796 9.65125 7.08796C8.73659 7.08796 7.31016 6.0332 5.79416 6.06387C4.81331 6.09541 3.85719 6.38049 3.01909 6.89102C2.18099 7.40154 1.48925 8.1202 1.01128 8.97728C-1.05539 12.5533 0.486 17.8093 2.46733 20.6999C3.458 22.1146 4.61673 23.6959 6.1314 23.6332C7.61406 23.5719 8.16755 22.6892 9.95822 22.6892C11.7489 22.6892 12.2514 23.6334 13.7968 23.5974C15.3874 23.5721 16.3899 22.1761 17.3459 20.7468C18.0578 19.7383 18.6059 18.6236 18.9699 17.4441C18.0485 17.0539 17.262 16.4016 16.7082 15.5681C16.1545 14.7346 15.858 13.7566 15.8554 12.7559Z" fill="white"/>
										<path d="M12.9341 4.10809C13.806 3.06479 14.2367 1.72267 14.1343 0.366882C12.8047 0.505777 11.5762 1.14089 10.6942 2.14553C9.82415 3.13539 9.38301 4.43028 9.46767 5.74546C10.1317 5.75248 10.7884 5.60882 11.3889 5.32522C11.9894 5.04161 12.5177 4.6254 12.9341 4.10809V4.10809Z" fill="white"/>
									</svg>
								</div>
								{/** </Image_Area> **/}

								<div className="font(15/20) c(#fff) text-center">Apple로 로그인</div>

							</div>
						</div>
						{/** </SNS_Login_Button> **/}

					</div>
				</div>
				{/** </SNS_Group> **/}

				{/** <Join_link/> **/}
				<div className="pack p(0/16) w(375)">
					<div className="hbox pack flex">
						<div className="hbox p(9/10)">
							<div className="font(11/16) c(#777) text-center">아직 회원이 아니세요?</div>
						</div>

						{/** <Button/> **/}
						<div className="vbox p(2) w(121) h(34) r(8) clip">

							{/** <_Button_base/> **/}
							<div className="pack p(5/38) h(30) r(6) clip">
								<div className="font(11/16) c(#4270ed) text-center">개인 회원가입</div>
							</div>
							{/** </_Button_base> **/}

						</div>
						{/** </Button> **/}

					</div>
				</div>
				{/** </Join_link> **/}

			</div>
		</div>

	);
}

export default MemberLogin;