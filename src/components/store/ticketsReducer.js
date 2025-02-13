const initialState = {
  searchId: null,
  tickets: [],
  isSearching: false,
  isComplete: false,
  error: null,
}

const ticketsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START_SEARCH':
      return {
        ...state,
        searchId: action.payload,
        isSearching: true,
        error: null,
      }

    case 'FETCH_TICKETS':
      return {
        ...state,
        tickets: [...state.tickets, ...action.payload.tickets],
        isSearching: false,
      }

    case 'SEARCH_COMPLETE':
      return {
        ...state,
        isComplete: true,
      }

    case 'SEARCH_ERROR':
    case 'FETCH_TICKETS_ERROR':
      return {
        ...state,
        isSearching: false,
        error: action.payload,
      }

    default:
      return state
  }
}

export default ticketsReducer
