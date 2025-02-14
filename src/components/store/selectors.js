import { createSelector } from 'reselect'

const selectTickets = (state) => state.tickets.tickets
const selectFilters = (state) => state.checkboxes
const selectActiveTab = (state) => state.tabs.activeTab

const filterTickets = (tickets, filters) => {
  if (filters.allCheckboxes) {
    return tickets
  }

  const noFiltersSelected =
    !filters.withoutTransfer && !filters.oneTransfer && !filters.twoTransfers && !filters.threeTransfers

  if (noFiltersSelected) {
    return []
  }

  return tickets.filter((ticket) => {
    const stopsCount = ticket.segments[0].stops.length

    return (
      (filters.withoutTransfer && stopsCount === 0) ||
      (filters.oneTransfer && stopsCount === 1) ||
      (filters.twoTransfers && stopsCount === 2) ||
      (filters.threeTransfers && stopsCount === 3)
    )
  })
}

const sortTickets = (tickets, activeTab) => {
  const sortedTickets = [...tickets]
  switch (activeTab) {
    case 'cheap':
      return sortedTickets.sort((a, b) => a.price - b.price)
    case 'fast':
      return sortedTickets.sort((a, b) => a.segments[0].duration - b.segments[0].duration)
    case 'optimal':
      return sortedTickets.sort((a, b) => a.price + a.segments[0].duration - (b.price + b.segments[0].duration))
    default:
      return sortedTickets
  }
}

export const getFilteredAndSortedTickets = createSelector(
  [selectTickets, selectFilters, selectActiveTab],
  (tickets, filters, activeTab) => {
    const filteredTickets = filterTickets(tickets, filters)
    return sortTickets(filteredTickets, activeTab)
  }
)
