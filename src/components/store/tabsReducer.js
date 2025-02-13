const initialState = {
  activeTab: 'cheap',
}

const SET_ACTIVE_TAB = 'SET_ACTIVE_TAB'

const tabsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload }
    default:
      return state
  }
}

// Экшен
export const setActiveTab = (tab) => ({
  type: SET_ACTIVE_TAB,
  payload: tab,
})

export default tabsReducer
