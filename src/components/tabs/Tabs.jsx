import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { setActiveTab } from '../store/tabsReducer'

import styles from './tabs.module.scss' // Импорт CSS-модуля

const Tabs = () => {
  const dispatch = useDispatch()
  const activeTab = useSelector((state) => state.tabs.activeTab)

  return (
    <nav className={styles.tabs} aria-label="Навигация для сортировки билетов">
      <button
        className={`${styles.tab} ${styles['tab--cheap']} ${activeTab === 'cheap' ? styles.tab__active : ''}`}
        aria-pressed={activeTab === 'cheap'}
        onClick={() => dispatch(setActiveTab('cheap'))}
      >
        САМЫЙ ДЕШЕВЫЙ
      </button>
      <button
        className={`${styles.tab} ${styles['tab--fast']} ${activeTab === 'fast' ? styles.tab__active : ''}`}
        aria-pressed={activeTab === 'fast'}
        onClick={() => dispatch(setActiveTab('fast'))}
      >
        САМЫЙ БЫСТРЫЙ
      </button>
      <button
        className={`${styles.tab} ${styles['tab--optimal']} ${activeTab === 'optimal' ? styles.tab__active : ''}`}
        aria-pressed={activeTab === 'optimal'}
        onClick={() => dispatch(setActiveTab('optimal'))}
      >
        ОПТИМАЛЬНЫЙ
      </button>
    </nav>
  )
}

export default Tabs
