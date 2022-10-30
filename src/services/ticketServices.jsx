

function transformTicket(ticket) {
    let transformedTicket = {
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
    return transformedTicket;
}

export async function getTickets() {
    const response = await projectAPI.get('/api/tickets');
    return response.data;
}
