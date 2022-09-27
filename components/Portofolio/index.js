import Head from "next/head";
import React, { useEffect, Fragment } from "react";
import Image from "next/image";
import Porto1 from "../../assets/image/porto/porto1.svg";
import Porto2 from "../../assets/image/porto/porto2.svg";
import Porto3 from "../../assets/image/porto/porto3.svg";
import Porto4 from "../../assets/image/porto/porto4.svg";
import Porto5 from "../../assets/image/porto/porto5.svg";
import Porto6 from "../../assets/image/porto/porto6.svg";

const Portofolio = () => {
  return (
    <div>
      <div className="row row-cols-2 row-cols-lg-3 align-items-center g-5">
        <div className="col categories">
          <div className="card card-1 text-center d-flex flex-colum">
            <Image
              src={Porto1}
              layout="responsive"
              width="1"
              height="1"
              alt="portofolio"
            />
            <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <a href="/category/{category[0].id}">
                <p className="font-category"></p>
              </a>
            </div>
          </div>
        </div>
        <div className="col categories">
          <div className="card card-2">
            <Image
              src={Porto2}
              layout="responsive"
              width="1"
              height="1"
              alt="portofolio"
            />
            <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <p className="font-category"></p>
            </div>
          </div>
        </div>
        <div className="col categories">
          <div className="card card-3">
            <Image
              src={Porto3}
              layout="responsive"
              width="1"
              height="1"
              alt="portofolio"
            />
            <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <p className="font-category"></p>
            </div>
          </div>
        </div>

        <div className="col categories">
          <div className="card card-3">
            <Image
              src={Porto4}
              layout="responsive"
              width="1"
              height="1"
              alt="portofolio"
            />
            <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <p className="font-category"></p>
            </div>
          </div>
        </div>

        <div className="col categories">
          <div className="card card-3">
            <Image
              src={Porto5}
              layout="responsive"
              width="1"
              height="1"
              alt="portofolio"
            />
            <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <p className="font-category"></p>
            </div>
          </div>
        </div>

        <div className="col categories">
          <div className="card card-3">
            <Image
              src={Porto6}
              layout="responsive"
              width="1"
              height="1"
              alt="portofolio"
            />
            <div className="card-img-overlay text-white d-flex justify-content-center align-items-center">
              <p className="font-category"></p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Portofolio;
