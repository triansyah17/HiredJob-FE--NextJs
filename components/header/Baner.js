import React from "react";
import Image from "next/image";
import baner1 from "../../assets/image/baner1.svg";
import banerBg from "../../assets/image/baner-bg1.svg";
import baner2 from "../../assets/image/baner2.svg";
import swal1 from "../../assets/image/swal1.png";
import swal2 from "../../assets/image/swal2.png";
import swal3 from "../../assets/image/swal3.png";
import baner3 from "../../assets/image/baner3.svg";
import test from "../../assets/image/test.svg";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

// Import Swiper styles
import "swiper/css/navigation";
import "swiper/css";
import "swiper/css/pagination";

function Baner() {
  return (
    <div className="container">
      <div className=" container-sm container_content1 mb-5">
        <div className="contain-tex m-auto">
          <h1>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
          <br />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </p>
          <button className="btn btn-custom">Mulai Dari Sekarang</button>
        </div>
        <div className="">
          <div className="">
            <Image src={baner1} />
          </div>
        </div>
      </div>
      <div className="container-sm container_content1">
        <div className="container-sm contain-text">
          <div>
            <Image src={baner2} />
          </div>
        </div>
        <div className="d-flex flex-column w-100 ">
          <h1>Kenapa harus mencari tallent di peworld</h1>
          <ul className="daftar">
            <li>
              <i className="bi bi-check-circle-fill" />
              <span> Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <i className="bi bi-check-circle-fill" />
              <span> Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <i className="bi bi-check-circle-fill" />
              <span> Lorem ipsum dolor sit amet.</span>
            </li>
            <li>
              <i className="bi bi-check-circle-fill" />
              <span> Lorem ipsum dolor sit amet.</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container_content1 ">
        <div className="contain-text2 ">
          <h1 className="ms-5">Skill Tallent</h1>
          <span className="fw-light ms-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod
            ipsum et dui rhoncus auctor.
          </span>
          <div className="container-sm mt-2">
            <ul className="list-skill">
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> Java</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> Kotlin</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> PHP</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> Javascrip</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> Golang</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> C++</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> Ruby</span>
              </li>
              <li>
                <i className="bi bi-check-circle-fill text-color" />
                <span> 10+ Bahasa lainnya</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="container_img d-flex justify-content-center align-items-center">
          <div className="contain-img3">
            <Image src={baner3} />
          </div>
        </div>
      </div>

      <div className="container-sm">
        <h1 className="text-center">Their opinion about peworld</h1>
        <Swiper
          className="container container_swiper"
          modules={[Pagination, Navigation]}
          spaceBetween={0}
          // slidesPerView={3}
          pagination={{ clickable: true }}
          navigation={true}
          breakpoints={{
            //when window width is >= 440
            440: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="">
            <div className="Card">
              <div className="bg-img">
                <div className="card-img ">
                  <Image src={swal2} className="img7" />
                </div>
              </div>
              <div className="card-text ">
                <h3 className="">Niall Horan</h3>
                <span className="fw-light">Web Developer</span>
                <p className="w-75 ms-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="Card">
              <div className="bg-img">
                <div className="card-img ">
                  <Image src={swal1} className="img7" />
                </div>
              </div>
              <div className="card-text ">
                <h3 className="">Harry Styles</h3>
                <span className="fw-light">Web Developer</span>
                <p className="w-75 ms-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="Card">
              <div className="bg-img">
                <div className="card-img ">
                  <Image src={swal3} className="img7" />
                </div>
              </div>
              <div className="card-text ">
                <h3 className="">Louis Tomlinson</h3>
                <span className="fw-light">Web Developer</span>
                <p className="w-75 ms-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="">
            <div className="Card">
              <div className="bg-img">
                <div className="card-img ">
                  <Image src={swal3} className="img7" />
                </div>
              </div>
              <div className="card-text ">
                <h3 className="">Louis Tomlinson</h3>
                <span className="fw-light">Web Developer</span>
                <p className="w-75 ms-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="container_content4 my-5">
        <div className="container_img4 ">
          <div className="">
            <p className="text-white w-50 ms-5 fs-2">
              Lorem ipsum dolor sit amet
            </p>
          </div>
          <div className="d-flex justify-content-end me-5">
            <button className="btn bg-white py-2 fs-5 btn3">
              Mulai Dari Sekarang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Baner;
