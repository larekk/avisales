import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ClipLoader } from 'react-spinners'

import TicketItem from '../ticket-item/TicketItem'
import { fetchTickets, startSearch } from '../asyncActions/asyncActions'
import { getFilteredAndSortedTickets } from '../store/selectors'

import styles from './tickets.module.scss'

const Tickets = () => {
  const dispatch = useDispatch()
  const { searchId, isSearching, error, isComplete } = useSelector((state) => state.tickets)
  const tickets = useSelector(getFilteredAndSortedTickets)
  const [visibleCount, setVisibleCount] = useState(5)

  useEffect(() => {
    dispatch(startSearch())
  }, [dispatch])

  useEffect(() => {
    if (searchId && !isComplete) {
      const fetchData = () => dispatch(fetchTickets(searchId))

      const interval = setInterval(fetchData, 3000)

      return () => clearInterval(interval)
    }
  }, [dispatch, searchId, isComplete])

  if (isSearching && tickets.length === 0) {
    return (
      <div className={styles.loader}>
        <ClipLoader color="#3498db" size={40} />
      </div>
    )
  }

  if (error && isComplete && tickets.length === 0) {
    return <div>Ошибка: {error}</div>
  }

  return (
    <section className={styles.tickets} aria-label="Available tickets">
      {!isComplete ? (
        <div className={styles.miniLoader}>
          Грузим оставшиеся билеты...
          <ClipLoader className={styles.miniiLoader} color="#3498db" size={10} />
        </div>
      ) : null}
      {tickets.length > 0 ? (
        tickets.slice(0, visibleCount).map((ticket, index) => <TicketItem key={index} {...ticket} />)
      ) : (
        <div>Нет доступных билетов</div>
      )}

      {tickets.length > visibleCount && (
        <div className={styles['tickets--supply']}>
          <button
            type="button"
            className={styles['tickets--button']}
            onClick={() => setVisibleCount((prev) => prev + 5)}
          >
            ПОКАЗАТЬ ЕЩЕ 5 БИЛЕТОВ!
          </button>
        </div>
      )}
    </section>
  )
}

export default Tickets
