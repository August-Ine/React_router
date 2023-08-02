import { Fragment } from "react"
import EventsNavigation from '../components/EventsNavigation'
import { Outlet } from "react-router-dom"

function EventsRootLayout(props) {
    return (
        <Fragment>
            <EventsNavigation />
            <Outlet />
        </Fragment>
    )
}

export default EventsRootLayout