import { useRouteLoaderData, redirect } from "react-router-dom"
import EventItem from '../components/EventItem'

function EventDetailPage() {
    const data = useRouteLoaderData('event-detail')
    return (
        <EventItem event={data.event}></EventItem>
    )
}

export async function loader({ request, params }) {
    const url = 'http://localhost:8080/events/' + params.eventId

    const response = await fetch(url)
    if (!response.ok) {
        throw response
    }
    return response
}

export async function action({ request, params }) {
    const eventId = params.eventId

    const response = await fetch('http://localhost:8080/events/' + eventId, {
        method: 'delete'
    })
    if (!response.ok) {
        throw response
    }
    return redirect('/events')
}

export default EventDetailPage