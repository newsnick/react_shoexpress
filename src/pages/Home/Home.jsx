/* import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import shoegroup from '../../assets/images/shoegroup.svg'
import ellipselarge from '../../assets/images/ellipselarge.svg'
import ellipsewhite from '../../assets/images/ellipsewhite.svg'
import ellipsemedium from '../../assets/images/ellipsemedium.svg'
import ellipsesmall from '../../assets/images/ellipsesmall.svg'
import styles from '../../styles//Home/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.section1}>
      <Navbar />

      <img className={styles.shoes} src={shoegroup} alt="shoepair" />
      <img className={styles.ellipselr} src={ellipselarge} alt="ellipselarge" />
      <img
        className={styles.ellipsewhite}
        src={ellipsewhite}
        alt="ellipsewhite"
      />
      <img
        className={styles.ellipsem}
        src={ellipsemedium}
        alt="ellipsemedium"
      />
      <img className={styles.ellipses} src={ellipsesmall} alt="ellipsesmall" />
    </div>
  )
}

export default Home */

import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Welcome from '../../components/Welcome/Welcome.jsx'
import shoegroup from '../../assets/images/shoegroup.svg'
import ellipselarge from '../../assets/images/ellipselarge.svg'
import ellipsewhite from '../../assets/images/ellipsewhite.svg'
import ellipsemedium from '../../assets/images/ellipsemedium.svg'
import ellipsesmall from '../../assets/images/ellipsesmall.svg'
import styles from '../../styles/Home/Home.module.scss'

const Home = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Welcome />
      <img className={styles.shoes} src={shoegroup} alt="shoepair" />
      <img className={styles.ellipselr} src={ellipselarge} alt="ellipselarge" />
      <img
        className={styles.ellipsewhite}
        src={ellipsewhite}
        alt="ellipsewhite"
      />
      <img
        className={styles.ellipsem}
        src={ellipsemedium}
        alt="ellipsemedium"
      />
      <img className={styles.ellipses} src={ellipsesmall} alt="ellipsesmall" />
    </div>
  )
}

export default Home
