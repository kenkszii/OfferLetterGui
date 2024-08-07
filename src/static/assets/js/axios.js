import axios from "axios";

import { Auth } from "./useAuth.jsx";
import fetchAPI from "./fetchAPI.js";



axios.defaults.baseURL = (
	import.meta.env.VITE_DEPLOYMENT_STATUS === "beta"
		? "https://beta.api.offerletter.co.in/v1"
		: "https://api.offerletter.co.in/v1"
);




let refresh = false;

axios.interceptors.response.use(
	function (response) {
		return response;
	},
	function (error) {
		const originalRequest = error.config;

		if (error && error["response"] && error["response"]["status"] === 422
			&& !refresh
		) {
			const { authorize, renewAuthSession } = Auth();


			refresh = true;

			authorize("refresh_token");


			const item = localStorage.getItem("USER_TOKEN_AUTH_KEY");
			const userObject = JSON.parse(item);

			const requestBody = {
				"refresh_token": userObject.refresh_token
			};


			return (
				fetchAPI("/auth/sign-in/refresh", "POST", requestBody, [201, 401, 422])
					.then(
						function (response) {
							if (response && response["status"] === 201) {
								const { data } = response;

								renewAuthSession(data["data"]);

								originalRequest.headers.Authorization = (
									`Bearer ${data["data"]["access_token"]}`
								);

								return axios(originalRequest);
							};
						}
					)
					.catch(
						function (error) {
							return error;
						}
					)
					.finally(
						function () {
							refresh = false;
						}
					)
			);
		};

		refresh = false;

		return error;
	},
);