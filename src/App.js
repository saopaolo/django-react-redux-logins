import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Signup from "./containers/Signup";
import ResetPassword from "./containers/ResetPassword";
import ResetPasswordConfirm from "./containers/ResetPasswordConfirm";
import Activate from "./containers/Activate";
import Layout from "./hocs/Layout";
import Login from "./containers/Login";
import About from "./containers/About";
import Contact from "./containers/Contact";
import { Provider } from "react-redux";
import store from "./store";
import WelcomePage from "./containers/WelcomePage";
import NotFound from "./components/NotFound";
import PrivateOutlet from "./components/PrivateOutlet";
import Admission from "./containers/Admission";
import ApplicationForm from "./containers/ApplicationForm";
import Guid from "./containers/Guid";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<WelcomePage />} />
            <Route path="/home" element={<Home />} />
            <Route path="/admission" element={<Admission />} />
            <Route path="/application-form" element={<ApplicationForm />} />
            <Route path="/guid" element={<Guid />} />

            <Route element={<PrivateOutlet />}>
              <Route path="/about" element={<About />} />
            </Route>

            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/reset-password" element={<ResetPassword />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              element={<ResetPasswordConfirm />}
            />
            <Route path="/activate/:uid/:token" element={<Activate />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}

export default App;
