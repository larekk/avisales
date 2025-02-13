import React from 'react'

import styles from './ticketItem.module.scss'

const formatTime = (dateString) => {
  const date = new Date(dateString)
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${hours}:${minutes}`
}

const calculateArrivalTime = (departureTime, duration) => {
  const departureDate = new Date(departureTime)
  departureDate.setMinutes(departureDate.getMinutes() + duration)
  return departureDate
}

const TicketItem = ({ price, carrier, segments }) => {
  return (
    <article className={styles.ticket}>
      <div className={styles['ticket--main']}>
        <div className={styles['ticket--price']}>{price} Р</div>
        <div className={styles['ticket--airline']}>
          <img
            src={`https://images.daisycon.io/airline/?width=110&height=50&color=ffffff&iata=${carrier}`}
            alt="logo"
          />
        </div>
      </div>
      {segments.map((segment, index) => (
        <div key={index} className={styles['ticket--details']}>
          <div>
            <div className={styles['ticket--route']}>
              {segment.origin} – {segment.destination}
            </div>
            <div className={styles['ticket--time']}>
              {formatTime(segment.date)} – {formatTime(calculateArrivalTime(segment.date, segment.duration))}
            </div>
          </div>
          <div>
            <div className={styles['ticket--path']}>В пути</div>
            <div className={styles['ticket--duration']}>
              {Math.floor(segment.duration / 60)}ч {segment.duration % 60}м
            </div>
          </div>
          <div>
            <div className={styles['ticket--stops']}>
              {segment.stops.length > 0
                ? `${segment.stops.length} пересадк${segment.stops.length === 1 ? 'a' : 'и'}`
                : 'Без пересадок'}
            </div>
            <div className={styles['ticket--stopDetails']}>
              {segment.stops.length > 0 ? segment.stops.join(', ') : 'Прямой рейс'}
            </div>
          </div>
        </div>
      ))}
    </article>
  )
}

export default TicketItem
