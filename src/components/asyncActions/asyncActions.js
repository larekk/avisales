import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { getKeyAction } from './store/ticketsReducer'

const dispatch = useDispatch()

export const fetchCustomers = () => {
  return function (dispatch) {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => dispatch(getKeyAction(json)))
  }
}
