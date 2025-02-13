import React from 'react'

import Filters from '../filters/Filters'

import styles from './sideBar.module.scss'

const SideBar = () => {
  return (
    <aside className={styles.sidebar}>
      <h4>КОЛИЧЕСТВО ПЕРЕСАДОК</h4>
      <Filters />
    </aside>
  )
}

export default SideBar
