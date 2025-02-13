import axios from 'axios'

export const startSearch = () => async (dispatch) => {
  try {
    const response = await axios.get('https://aviasales-test-api.kata.academy/search')
    dispatch({
      type: 'START_SEARCH',
      payload: response.data.searchId,
    })
  } catch (error) {
    dispatch({
      type: 'SEARCH_ERROR',
      payload: 'Ошибка получения searchId',
    })
  }
}

export const fetchTickets = (searchId) => async (dispatch) => {
  try {
    const response = await axios.get(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`)
    dispatch({
      type: 'FETCH_TICKETS',
      payload: response.data,
    })

    if (response.data.stop) {
      dispatch({ type: 'SEARCH_COMPLETE' })
    }
  } catch (error) {
    dispatch({
      type: 'FETCH_TICKETS_ERROR',
      payload: 'Ошибка получения билетов',
    })
  }
}
