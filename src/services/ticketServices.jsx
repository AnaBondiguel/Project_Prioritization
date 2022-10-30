const tickets = [
    {id: 1, initiative: "Whiteboard on Pricing LP", description: "Add whiteboard icon to the pricing page", target: "Team", type:"I", impact: "Medium", confidence: "Large", effort: "small", dueDate: "2022-01-11T01:33:50.019Z", user_id: 1, ICE_Score:"24",  priority:"1", feedback:"Great work"},
]

function transformTicket(ticket) {
    return {
        author: ticket.username, 
        initiative: ticket.initiative,
        description: ticket.description,
        target: ticket.target,
        type: ticket.type,
        impact: ticket.impact,
        confidence: ticket.confidence,
        effort: ticket.effort,
        dueDate: ticket.dueDate,
        ICE_Score: ticket.ICE_Score,
        priority: ticket.priority,
        feedback: ticket.feedback
    }
}

//get all tickets
export async function getTickets() {
  
    return tickets;
}

//get a single ticket
export async function getPrediction(id) {
    const ticket = tickets.find(ticket => ticket.id.toString() === id.toString())
    return ticket ? transformTicket(ticket) : null
}

//create a ticket
export async function createTicket(ticket) {
	
    return ticket;
}

//delete a ticket
export async function deleteTicket(id) {

    return id;
}

//update a ticket
export async function updateTicket(ticket) {
     return ticket;
}