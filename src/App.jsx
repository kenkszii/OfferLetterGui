/**
*!/usr/bin/env node
* -*- coding: utf-8 -*-
* OfferLetter
*/


/**
* author: Eduglobe Consultants
* copyright: Copyright 2023 - new Date().getFullYear(), Eduglobe Consultants
* credits: ["OTechCup"]
* version: process.env.OFFERLETTER_BOILERPLATE_VERSION
* maintainer: Eduglobe Consultants
* email: support@offerletter.co.in
* status: process.env.OFFERLETTER_BOILERPLATE_ENVIRONMENT_STATUS
*/


// import modules
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";


import Index from "./components/main/pages/Index.jsx";
import SignIn from "./components/auth/pages/SignIn.jsx";
import SignUp from "./components/auth/pages/SignUp.jsx";
import ResetPassword from "./components/auth/pages/ResetPassword.jsx";
import Dashboard from "./components/account/pages/dashboard/Dashboard.jsx";
import ExamHome from "./components/account/pages/dashboard/program/Exams/ExamHome.jsx";
import GmatPage from "./components/account/pages/dashboard/program/Exams/GmatPage.jsx";
import University from "./components/account/pages/dashboard/program/university/University.jsx";
import AppliedAt from "./components/account/pages/dashboard/admission/AppliedAt.jsx"
import AppStatus from "./components/account/pages/dashboard/admission/AppStatus.jsx";
import ViewProfile from "./components/account/pages/dashboard/profile/ViewProfile.jsx";
import ProfDocuments from "./components/account/pages/dashboard/profile/ProfDocuments.jsx";
import Inbox from "./components/account/pages/dashboard/inbox/Inbox.jsx";
import ProfileSettings from "./components/account/pages/dashboard/profile/ProfileSettings.jsx";

import { useAuth } from "./static/assets/js/useAuth.jsx";
import "./static/assets/js/axios.js"

import "./static/assets/css/App.css";



function App() {
	const { isAuthenticated, GetAuthenticated } = useAuth();
	return (
		<Routes>
			<Route path="/" element={<Index />} />


			<Route path="/student/documents" element={
				isAuthenticated ?

					<ProfDocuments />

					: <SignIn />}
			/>

			<Route path="/student/profilesettings" element={
				isAuthenticated ?

					<ProfileSettings />

					: <SignIn />}
			/>


			<Route path="/student/profile" element={
				isAuthenticated ?

					<ViewProfile />

					: <SignIn />}
			/>

			<Route path="/program/exam" element={
				isAuthenticated ?

					<ExamHome />

					: <SignIn />}
			/>

			<Route path="/admission/applied-at" element={
				isAuthenticated ?

					<AppliedAt />

					: <SignIn />}
			/>

			<Route path="/program/exams/gmat" element={
				isAuthenticated ?

					<GmatPage />

					: <SignIn />}

			/>

			<Route path="/program/universities" element={
				isAuthenticated ?

					<University />

					: <SignIn />

			} />

			<Route path="/admission/application-status" element={
				isAuthenticated ?

					<AppStatus />

					: <SignIn />}

			/>

			<Route path="auth/sign-in"
				element={
					!isAuthenticated
						? <SignIn />
						: <Navigate to="/account/dashboard" />
				}
			/>

			<Route path="auth/sign-up"
				element={
					!isAuthenticated
						? <SignUp />
						: <Navigate to="/account/dashboard" />
				}
			/>

			<Route
				path="/student/inbox" element={
					isAuthenticated
						? <Inbox />
						: <SignIn />
				}

			/>



			<Route
				path="/sign-up"
				element={
					!isAuthenticated
						? <SignUp />
						: <Navigate to="/account/dashboard" />
				}
			/>
			<Route
				path="/account/dashboard"
				element={
					isAuthenticated
						? <Dashboard />
						: <GetAuthenticated />
				}
			/>

			<Route path="/auth/Resetpassword" element={<ResetPassword />} />

		</Routes>

	);
};


export default App;
