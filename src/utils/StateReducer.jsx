export default function reducer (state, action) {

    switch(action.type) {
        case 'setTickets': {
            return {
                ...state,
                Tickets: action.data
            }
        }
      
        case 'setLoggedInUser': {
            return {
                ...state,
                loggedInUser: action.data
            }
        }
        default: return state

    }

}