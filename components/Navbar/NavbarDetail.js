import React from 'react';
import Icon from '../../assets/image/icon.svg';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css'
import iconProfile from '../../assets/image/navbar/icon-profile.svg'
import iconMail from '../../assets/image/navbar/icon-mail.svg'
import iconBell from '../../assets/image/navbar/icon-bell.svg'


function Navbar() {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-white">
            <div className="container-fluid">
                <Link href='/'>
                    <a className="navbar-brand ms-5" href="#">
                        <Image src={Icon}></Image>
                    </a>
                </Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <div className="d-flex justify-content-end me-2" >
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.auth}`}>
                        <li className={`${styles.border_none} nav-item mx-3 my-2`}>
                                <Image 
                                className={`${styles.icon_profile}`}
                                src={iconBell}
                                />
                            </li>
                            <li className={`${styles.border_none} nav-item mx-3 my-2`}>
                                <Image 
                                className={`${styles.icon_profile}`}
                                src={iconMail}
                                />
                            </li>
                            <li className={`${styles.container_profile} nav-item mx-1 my-1`}>
                                <Link href='/profile'>
                                <Image
                                    className={`${styles.icon_profile}`}
                                    
                                    src={iconProfile}
                                />
                                
                                </Link>
                               
                            </li>
                         </ul>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar