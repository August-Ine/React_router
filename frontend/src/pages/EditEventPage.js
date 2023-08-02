import { useRouteLoaderData } from "react-router-dom"
import EventForm from "../components/EventForm"

function EditEventPage() {
    const { event } = useRouteLoaderData('event-detail')

    return <EventForm method='patch' event={event}></EventForm>
}

export default EditEventPage