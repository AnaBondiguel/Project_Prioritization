const tickets = [
    {id: 1, initiative: "Whiteboard on Pricing LP", description: "Add whiteboard icon to the pricing page", target: "Team", type:"I", impact: "Medium", confidence: "Large", effort: "small", ICE_Score:"24",  priority:"1"},
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

export async function getTickets() {
  
    return tickets;
}

export async function createTicket(ticket) {
	
    return ticket;
}

export async function deleteTicket(id) {

    return id;
}

export async function updateTicket(ticket) {
     return ticket;
}