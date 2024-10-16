
export class AuthForms {
	constructor(Auth, UserAuth) {
		this.auth = Auth
		this.userAuth = UserAuth
	}

	async init() {
		//await this.turnstile()
		// login use
		console.log("Login Button")
		this.getURLParams()
		this.loginListiner()

		//await this.userAuth.captchaCheck()
	}
	async turnstile() {
		turnstile.ready(function () {
			console.log("get sf token")
			turnstile.render("#turnstile-container", {
				sitekey: "0x4AAAAAAAeZmvjkaX6Vyund",
				callback: function (token) {
					console.log(`Challenge Success ${token}`);
					document.cookie = `cf-turnstile-response=${token}`;
				},
			});
		});
	}
	getURLParams() {
		let urlParams = window.location.search;
		this.auth.returnToPage = urlParams.split('lookingFor=')[1];
	}

	getLoginInputs() {
		this.auth.userInput = document.getElementById("userId").value.trim()
		this.auth.passwordInput = document.getElementById("password").value.trim()
	}

	loginListiner() {

		document.getElementById("loginBtn").addEventListener("click", (submited) => {
			submited.preventDefault
			// get values for the login input
			this.getLoginInputs()

			// Validate username and password
			if (!this.userAuth.isValidUsername()) {
				alert("Invalid username format. Username should not contain escape keys.");
				showform()
				return;
			}

			if (!this.userAuth.isValidPassword()) {
				alert("Invalid password format. Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character.");
				showform()
				return;
			}
			this.userAuth.loginAPI();
		})

	}
}

