import React, { useState } from 'react'
import { Route, Routes, Link, useNavigate } from 'react-router-dom'
import styles from '../../styles/MenuBar/MenuBar.module.css'

const MenuBar = () => {
  return (
    <div className={styles.MenuBar}>
      <ul className={styles.MenuBar}>
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/presentation">Present</Link>
        </li>
        <li>
          <Link to="/slider">Slider</Link>
        </li>
        <li>
          <Link to="/selection">Selection</Link>
        </li>
        <li>
          <Link to="/promotion">Promotion</Link>
        </li>
        <li>
          <Link to="/footer">Footer</Link>
        </li>
      </ul>
    </div>
  )
}

export default MenuBar
