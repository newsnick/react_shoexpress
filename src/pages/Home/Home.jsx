import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import shoegroup from '../../assets/images/shoegroup.svg'
import ellipselarge from '../../assets/images/ellipselarge.svg'
import ellipsewhite from '../../assets/images/ellipsewhite.svg'
import ellipsemedium from '../../assets/images/ellipsemedium.svg'
import ellipsesmall from '../../assets/images/ellipsesmall.svg'
import styles from './Home.module.scss'

const Home = () => {
  return (
    <main className={styles.section1}>
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
    </main>
  )
}

export default Home
