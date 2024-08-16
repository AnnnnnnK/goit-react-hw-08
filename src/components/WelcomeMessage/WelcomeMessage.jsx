import React from "react";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link, NavLink } from "react-router-dom";
import css from "./WelcomeMessage.module.css";

const WelcomeMessage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.welcomeContainer}>
      <h1 className={css.welcomeTitle}>Welcome to Your Personal Phonebook!</h1>
      <p className={css.welcomeIntro}>
        Managing your contacts has never been easier! With our Phonebook app,
        you can effortlessly store, manage, and access all your important
        contacts in one convenient place.
      </p>

      <ul className={css.welcomeFeaturesList}>
        <li className={css.welcomeFeatureItem}>
          <h4 className={css.welcomeFeatureTitle}>Easy Contact Management</h4>
          <p className={css.welcomeFeatureDescription}>
            Add, edit, and delete contacts with just a few clicks.
          </p>
        </li>
        <li className={css.welcomeFeatureItem}>
          <h4 className={css.welcomeFeatureTitle}>Quick Search</h4>
          <p className={css.welcomeFeatureDescription}>
            Find any contact instantly with our fast search functionality.
          </p>
        </li>
        <li className={css.welcomeFeatureItem}>
          <h4 className={css.welcomeFeatureTitle}>Secure Storage</h4>
          <p className={css.welcomeFeatureDescription}>
            Your contacts are securely stored, ensuring your information stays
            private.
          </p>
        </li>
      </ul>
      {!isLoggedIn && (
        <div className={css.welcomeGetStarted}>
          <h2 className={css.welcomeGetStartedTitle}>Get Started Now!</h2>
          <p className={css.welcomeGetStartedText}>
            Whether you're organizing your personal contacts or managing a list
            for work, our Phonebook app is designed to make your life easier.{" "}
            <Link className={css.welcomeLink} to="/register">
              Sign up
            </Link>{" "}
            or
            <Link className={css.welcomeLink} to="/login">
              {" "}
              log in{" "}
            </Link>
            to begin building your digital address book today.
          </p>
        </div>
      )}
    </div>
  );
};

export default WelcomeMessage;
