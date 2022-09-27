import Head from "next/head";
import React, { useEffect, Fragment, useState } from "react";

import Portofolio from "../../components/Portofolio/index";
// import Pengalaman from "../../components/pengalamankerja/index";
import styles from "../../styles/Profile.module.css";
import Image from "next/image";
import PhotoProfile from "../../assets/image/photo_profil.jpg";
import axios from "axios";
import Pengalaman from "../../components/experience/index";
const Profile = () => {
  const [data, setData] = useState("");
  const [skill, setSkill] = useState([]);
  function fetch() {
    axios.get("http://localhost:3200/profile").then((res) => {
      setSkill(res.data.skill);
      setData(res.data);
    });
  }
  useEffect(() => {
    fetch();
  });

  // data.skill.map(item =>{
  //   setSkill(item)
  // })
  // console.log(skill)
  // console.log(data.skill)
  return (
    <div>
      <style global jsx>{``}</style>
      <Head>
        <title>Profile</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Fragment>
        <div className={`container ${styles.hight}`}>
          <div className="row mt-3 justify-content-center">
            <div className="col-4">
              <div className="card mb-5">
                <div className="card-body">
                  <Image
                    src={PhotoProfile}
                    layout="responsive"
                    width="1"
                    height="1"
                    alt="Photo Profile"
                  />
                  <h3>{data.name}</h3>
                  <h5>{data.jobSkill}</h5>
                  <p>{data.location}</p>
                  <p>{data.job}</p>
                  <p>
                    Perkenalkan saya Aditya Triansyah saya berasal Tasikmalaya,
                    Jawa Barat. Saya lulusan Sarjana Terapan administrasi
                    pemerintahan di Universitas Padjadjaran. Saya seorang yang
                    supel, percaya diri dan antusias. Saya memiliki softskill
                    yang dominan dalam bersosial. Sejak dulu saya aktif dalam
                    berorganisasi dan mengikuti kegiatan-kegiatan sosial.
                  </p>
                  <button className={`btn ${styles.btn_custom}`}>Hire</button>

                  <p className="fw-1 fw-bold mt-5">Skill</p>
                  <div class="container text-center">
                    <div class="row g-2">
                      <div class="col-4">
                        <div class="border bg-warning">
                          {skill.length > 0
                            ? skill.map((item) => (
                                <button className="btn bg-warning me-2 mt-2">
                                  {item}
                                </button>
                              ))
                            : "Loadingg"}
                        </div>
                      </div>

                      {/* <div class="col-4">
                        <div class=" border bg-warning"><button className="btn">{data.skill}</button></div>
                      </div> */}
                      {/* <div class="col-4">
                        <div class=" border bg-warning"><button className="btn">PHP</button></div>
                      </div>
                      <div class="col-4">
                        <div class=" border bg-warning"><button className="btn">PHP</button></div>
                      </div>
                      <div class="col-4">
                        <div class=" border bg-warning"><button className="btn">PHP</button></div>
                      </div>
                      <div class="col-4">
                        <div class=" border bg-warning"><button className="btn">PHP</button></div>
                      </div>
                      <div class="col-4">
                        <div class=" border bg-warning"><button className="btn">PHP</button></div>
                      </div>
                      <div class="col-4">
                        <div class=" border bg-warning"><button className="btn">PHP</button></div>
                      </div>
                      <div class="col-4">
                        <div class=" border bg-warning"><button className="btn">PHP</button></div>
                      </div> */}
                    </div>
                  </div>

                  <ul className="d-flex flex-column mt-5">
                    <li>
                      <i class="bi bi-envelope " /> triansyah.a17@gmail.com
                    </li>
                    <li>
                      <i class="bi bi-instagram " /> @triansyah_a
                    </li>
                    <li>
                      <i class="bi bi-github " /> @triansyah17
                    </li>
                    <li>
                      <i class="bi bi-linkedin " /> @triansyah17
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-8">
              <div className="card">
                <div className="card-body">
                  <div className="utama">
                    <nav>
                      <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <button
                          className={`nav-link  ${styles.under_line}`}
                          id="nav-home-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-home"
                          type="button"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                        >
                          Portofolio
                        </button>
                        <button
                          className="nav-link"
                          id="nav-profile-tab"
                          data-bs-toggle="tab"
                          data-bs-target="#nav-profile"
                          type="button"
                          role="tab"
                          aria-controls="nav-profile"
                          aria-selected="false"
                        >
                          Pengalaman Kerja
                        </button>
                      </div>
                    </nav>
                    <div className="tab-content mt-5" id="nav-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="nav-home"
                        role="tabpanel"
                        aria-labelledby="nav-home-tab"
                        tabIndex="0"
                      >
                        <Portofolio />
                      </div>
                      <div
                        className="tab-pane fade"
                        id="nav-profile"
                        role="tabpanel"
                        aria-labelledby="nav-profile-tab"
                        tabIndex="0"
                      >
                        <Pengalaman />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default Profile;
