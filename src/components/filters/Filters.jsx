import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { allCheckboxesCheckedAction, toggleCheckboxAction } from '../store/checkboxReducer'

import styles from './filters.module.scss' // Импорт CSS-модуля

const Filters = () => {
  const dispatch = useDispatch()
  const all = useSelector((state) => state.checkboxes)

  return (
    <div className={styles.filters}>
      <label className={styles.checkboxLabel}>
        <input
          className={styles.customCheckbox}
          type="checkbox"
          checked={all.allCheckboxes}
          onChange={() => dispatch(allCheckboxesCheckedAction())}
        />
        <span className={styles.checkmark}></span>
        Все
      </label>
      <label className={styles.checkboxLabel}>
        <input
          className={styles.customCheckbox}
          type="checkbox"
          checked={all.withoutTransfer}
          onChange={() => dispatch(toggleCheckboxAction('withoutTransfer'))}
        />
        <span className={styles.checkmark}></span>
        Без пересадок
      </label>
      <label className={styles.checkboxLabel}>
        <input
          className={styles.customCheckbox}
          type="checkbox"
          checked={all.oneTransfer}
          onChange={() => dispatch(toggleCheckboxAction('oneTransfer'))}
        />
        <span className={styles.checkmark}></span>1 пересадка
      </label>
      <label className={styles.checkboxLabel}>
        <input
          className={styles.customCheckbox}
          type="checkbox"
          checked={all.twoTransfers}
          onChange={() => dispatch(toggleCheckboxAction('twoTransfers'))}
        />
        <span className={styles.checkmark}></span>2 пересадки
      </label>
      <label className={styles.checkboxLabel}>
        <input
          className={styles.customCheckbox}
          type="checkbox"
          checked={all.threeTransfers}
          onChange={() => dispatch(toggleCheckboxAction('threeTransfers'))}
        />
        <span className={styles.checkmark}></span>3 пересадки
      </label>
    </div>
  )
}

export default Filters
