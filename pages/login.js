import Head from "next/head";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import styles from "../styles/Login.module.css";
// import Background from "../../assets/login/login.png";
import Logo from "../assets/image/logo-White.svg";
// import PasswordInput from "../../atoms/PasswordInput";

export default function LoginForm({}) {
  return (
    <>
      <div className={styles.body}>
        <div className="container-fluid py-3 ">
          <div className="d-flex align-items-center justify-content-center  ">
            <div
              className={` d-none d-lg-flex ${styles.backdroplogin} ${styles.column} justify-content-center`}
            >
              <div className="mt-4 me-3">
                <Image
                  className={styles.logo}
                  src={Logo}
                  height={30}
                  alt="Logo"
                />
              </div>
              <div className="d-flex align-items-center">
                <h1 className="text-white">
                  Temukan developer berbakat & terbaik di berbagai bidang
                  keahlian
                </h1>
              </div>
            </div>
            <div className="container-fluid ">
              <div
                className={`${styles.column} d-flex align-items-center justify-content-center my-5 py-4`}
              >
                <form
                  className={`d-flex flex-column ${styles.login} justify-content-center`}
                >
                  <h1 className="text-center title-text">
                    <b>Halo, Pweapeople</b>
                  </h1>
                  <p className="subtitle-text text-center my-4">
                    Login into your existing account
                  </p>
                  <label
                    className={`align-self-start ${styles.inputLabelText} ms-5`}
                    htmlFor="email"
                  >
                    E-mail
                  </label>
                  <input
                    type="email"
                    name="email"
                    className={`${styles.login} form-control my-2 mb-4`}
                    placeholder="email"
                  />
                  <label
                    className={`align-self-start ${styles.inputLabelText} ms-5`}
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className={`${styles.login} form-control my-2 mb-4`}
                    placeholder="Password"
                  />
                  <div className="mb-4">
                    <label className="forgot-password-text float-end mt-4">
                      Forgot password?
                    </label>
                  </div>
                  <Link href="/home">
                    <button
                      type="submit"
                      className={`btn btn-warning ${styles.submit} text-white w-100`}
                    >
                      Login
                    </button>
                  </Link>

                  <br />
                  <label className="dont-have-an-account-text align-self-center">
                    Dont You Have An Account?
                    <Link className="signup-text ms-1" href="/registerpekerja">
                      Sign Up Here
                    </Link>
                  </label>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
