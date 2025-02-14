const initialState = {
  allCheckboxes: true,
  withoutTransfer: true,
  oneTransfer: true,
  twoTransfers: true,
  threeTransfers: true,
}

const ALL_CHECKBOXES_CHECKED = 'ALL_CHECKBOXES_CHECKED'
const TOGGLE_CHECKBOX = 'TOGGLE_CHECKBOX'

const checkboxesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ALL_CHECKBOXES_CHECKED: {
      const newValue = !state.allCheckboxes
      return Object.fromEntries(Object.keys(state).map((key) => [key, newValue]))
    }

    case TOGGLE_CHECKBOX: {
      const updatedState = { ...state, [action.payload]: !state[action.payload] }
      const allChecked = Object.keys(updatedState)
        .filter((key) => key !== 'allCheckboxes')
        .every((key) => updatedState[key])

      return { ...updatedState, allCheckboxes: allChecked }
    }

    default:
      return state
  }
}

export const allCheckboxesCheckedAction = () => ({ type: ALL_CHECKBOXES_CHECKED })
export const toggleCheckboxAction = (checkbox) => ({ type: TOGGLE_CHECKBOX, payload: checkbox })

export default checkboxesReducer
