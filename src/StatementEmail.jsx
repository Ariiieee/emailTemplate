// import React from "react";

// const StatementEmail = () => {
// 	return (
// 		<>
// 			<html>
// 				<head>
// 					<style>
// 						{`@font-face {
// 							font-family:"Gordita";
// 							src: url('https://vccloud.blob.core.windows.net/omnipayblob/email-assets/GroditaMedium.woff')
// 							format('woff'),
// 							url('https://vccloud.blob.core.windows.net/omnipayblob/email-assets/GroditaRegular.woff')
// 							format('woff');

// 						}`}
// 					</style>
// 				</head>
// 				<body
// 					style={{
// 						fontFamily: "GroditaRegular, sans-serif",
// 						fontSize: "16px",
// 						margin: "0",
// 						padding: "0",
// 						boxSizing: "border-box",
// 						backgroundColor: "#fff",
// 						minHeight: "100vh",
// 					}}
// 				>
// 					<main
// 						style={{
// 							padding: "48px 24px 32px 24px",
// 							margin: "0 auto",
// 							maxWidth: "640px",
// 						}}
// 					>
// 						<div
// 							style={{
// 								marginTop: "32px",
// 								display: "flex",
// 								gap: "20px",
// 								justifyContent: "center",
// 								alignItems: "center",
// 							}}
// 						>
// 							<div
// 								style={{
// 									margin: "0px",
// 									textAlign: "center",
// 									padding: "24px 0px 24px 0",
// 									objectFit: "contain",
// 									width: "145px",
// 								}}
// 							>
// 								<img
// 									width={145}
// 									src="https://vccloud.blob.core.windows.net/omnipayblob/email-assets/logo.png"
// 									alt=""
// 								/>
// 							</div>
// 						</div>
// 						<div
// 							style={{
// 								padding: "16px",
// 								fontSize: "16px",
// 								lineHeight: "32px",
// 							}}
// 						>
// 							<p>
// 								Dear Customer
// 								<br />
// 								Your wallet account statement for selected time
// 								period is now available (see attached).
// 								<br />
// 								If you did not initiate this request, please
// 								change your PIN.
// 								<br />
// 								For any feedback or enquiries, please call
// 								support on 08000900999
// 							</p>
// 							<p
// 								style={{
// 									marginTop: "12px",
// 									fontFamily: "Gordita",
// 									fontWeight: "500",
// 									fontSize: "16px",
// 									color: "#344054",
// 								}}
// 							>
// 								Thank you for choosing OmniPay
// 							</p>
// 						</div>
// 						<div
// 							style={{
// 								paddingTop: "16px",
// 								display: "flex",
// 								flexDirection: "column",
// 								justifyContent: "center",
// 								alignItems: "center",
// 								color: "#101828",
// 								fontWeight: "500",
// 								lineHeight: "24px",
// 							}}
// 						>
// 							<p
// 								style={{
// 									color: "#101828",
// 									fontFamily: "Gordita",
// 								}}
// 							>
// 								Download the app
// 							</p>
// 							<p
// 								style={{
// 									fontFamily: "Gordita",
// 									color: "#667085",
// 								}}
// 							>
// 								Get the most of OmniPay by installing our new
// 								mobile app.
// 							</p>
// 						</div>
// 						<div
// 							style={{
// 								marginTop: "24px",
// 								display: "flex",
// 								gap: "12px",
// 								justifyContent: "center",
// 							}}
// 						>
// 							<div
// 								style={{
// 									width: "120px",
// 									objectFit: "contain",
// 								}}
// 							>
// 								<img
// 									src="https://vccloud.blob.core.windows.net/omnipayblob/email-assets/appstore.png"
// 									width={120}
// 									height={40}
// 									alt=""
// 								/>
// 							</div>
// 							<div
// 								style={{
// 									width: "135px",
// 									objectFit: "contain",
// 								}}
// 							>
// 								<img
// 									width={135}
// 									height={40}
// 									src="https://vccloud.blob.core.windows.net/omnipayblob/email-assets/playstore.png"
// 									alt=""
// 								/>
// 							</div>
// 						</div>
// 					</main>

// 					<footer>
// 						<div
// 							style={{
// 								marginTop: "32px",
// 								display: "flex",
// 								gap: "20px",
// 								justifyContent: "center",
// 								alignItems: "center",
// 							}}
// 						>
// 							<div
// 								style={{
// 									display: "flex",
// 									justifyContent: "center",
// 									alignItems: "center",
// 									width: "20px",
// 									height: "20px",
// 									objectFit: "contain",
// 								}}
// 							>
// 								<img
// 									src="https://vccloud.blob.core.windows.net/omnipayblob/email-assets/twitter.png"
// 									width={20}
// 									height={20}
// 									alt=""
// 								/>
// 							</div>
// 							<div
// 								style={{
// 									display: "flex",

// 									justifyContent: "center",
// 									alignItems: "center",
// 									width: "20px",
// 									height: "20px",
// 									objectFit: "contain",
// 								}}
// 							>
// 								<img
// 									src="https://vccloud.blob.core.windows.net/omnipayblob/email-assets/facebook.png"
// 									width={20}
// 									height={20}
// 									alt=""
// 								/>
// 							</div>
// 							<div
// 								style={{
// 									display: "flex",

// 									justifyContent: "center",
// 									alignItems: "center",
// 									width: "20px",
// 									height: "20px",

// 									objectFit: "contain",
// 								}}
// 							>
// 								<img
// 									src="https://vccloud.blob.core.windows.net/omnipayblob/email-assets/instagram.png"
// 									width={20}
// 									height={20}
// 									alt=""
// 								/>
// 							</div>
// 						</div>
// 					</footer>
// 				</body>
// 			</html>
// 		</>
// 	);
// };

// export default StatementEmail;


import React from "react";

const StatementEmail = () => {
	return (
		<>
			<html>
				<head>
					<style>
						{`@font-face {
							font-family:"Gordita";
							src: url('https://vccloud.blob.core.windows.net/omnipayblob/email-assets/GroditaMedium.woff')
							format('woff'),
							url('https://vccloud.blob.core.windows.net/omnipayblob/email-assets/GroditaRegular.woff')
							format('woff');
							
						}`}
					</style>
				</head>
				<body
					style={{
						fontFamily: "GroditaRegular, sans-serif",
						fontSize: "16px",
						margin: "0",
						padding: "0",
						boxSizing: "border-box",
						backgroundColor: "#fff",
						minHeight: "100vh",
					}}
				>
					<main
						style={{
							padding: "48px 24px 32px 24px",
							margin: "0 auto",
							maxWidth: "640px",
						}}
					>
						<div
							style={{
								marginTop: "32px",
								textAlign: "center",
							}}
						>
							<div
								style={{
									textAlign: "center",
									padding: "24px 0px 24px 0",
									objectFit: "contain",
									width: "145px",
									margin: "0 auto",
								}}
							>
								<img
									width={145}
									src="https://vccloud.blob.core.windows.net/omnipayblob/email-assets/logo.png"
									alt=""
								/>
							</div>
						</div>
						<div
							style={{
								padding: "16px",
								fontSize: "16px",
								lineHeight: "24px",

							}}
						>
							<p>
								Dear Customer,
								<br />
								<br />
								Your wallet account statement for selected time
								period
								is now available (see attached).
								<br />
								<br />
								If you did not initiate this request, please
								change your PIN.
								<br />
								<br />
								For any feedback or enquiries, please call
								support on 08000900999.
								<br />
								<br />

							</p>
							<p
								style={{
									marginTop: "12px",
									fontFamily: "Gordita",
									fontWeight: "500",
									fontSize: "16px",
									color: "#344054",
								}}
							>
								Thank you for choosing OmniPay
							</p>
						</div>
						<div
							style={{
								paddingTop: "16px",
								textAlign: "center",
								color: "#101828",
								fontWeight: "500",
								lineHeight: "24px",
							}}
						>
							<p
								style={{
									color: "#101828",
									fontFamily: "Gordita",
								}}
							>
								Download the app
							</p>
							<p
								style={{
									fontFamily: "Gordita",
									color: "#667085",
								}}
							>
								Get the most of OmniPay by installing our new
								mobile app.
							</p>
						</div>
						<div
							style={{
								marginTop: "24px",
								textAlign: "center",
							}}
						>
							<div
								style={{
									width: "120px",
									objectFit: "contain",
									display: "inline-block",
									marginRight: "12px",
								}}
							>
								<img
									src="https://vccloud.blob.core.windows.net/omnipayblob/email-assets/appstore.png"
									width={120}
									height={40}
									alt=""
								/>
							</div>
							<div
								style={{
									width: "135px",
									objectFit: "contain",
									display: "inline-block",
								}}
							>
								<img
									width={135}
									height={40}
									src="https://vccloud.blob.core.windows.net/omnipayblob/email-assets/playstore.png"
									alt=""
								/>
							</div>
						</div>
					</main>

					<footer>
						<div
							style={{
								marginTop: "32px",
								textAlign: "center",
							}}
						>
							<div
								style={{
									display: "inline-block",
									marginRight: "12px",
								}}
							>
								<img
									src="https://vccloud.blob.core.windows.net/omnipayblob/email-assets/twitter.png"
									width={20}
									height={20}
									alt=""
								/>
							</div>
							<div
								style={{
									display: "inline-block",
									marginRight: "12px",
								}}
							>
								<img
									src="https://vccloud.blob.core.windows.net/omnipayblob/email-assets/facebook.png"
									width={20}
									height={20}
									alt=""
								/>
							</div>
							<div
								style={{
									display: "inline-block",
								}}
							>
								<img
									src="https://vccloud.blob.core.windows.net/omnipayblob/email-assets/instagram.png"
									width={20}
									height={20}
									alt=""
								/>
							</div>
						</div>
					</footer>
				</body>
			</html>
		</>
	);
};

export default StatementEmail;
