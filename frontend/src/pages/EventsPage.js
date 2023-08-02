import { useLoaderData, defer, Await } from "react-router-dom";
import { Suspense } from "react";
import EventsList from "../components/EventsList"

function EventsPage() {
    const data = useLoaderData()

    return (
        <Suspense fallback={<p>Loading...</p>}>
            <Await resolve={data.events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    )
}

async function loadEvents(request, params) {
    const url = 'http://localhost:8080/events'

    const response = await fetch(url)
    if (!response.ok) {
        throw response
    }
    const data = await response.json()
    return data.events
}

export async function loader({ request, params }) {
    return defer({
        events: loadEvents(request, params)
    })
}

export default EventsPage