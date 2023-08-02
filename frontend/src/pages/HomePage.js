import { Fragment } from "react"
import { Outlet } from "react-router-dom"


function HomePage(props) {
    return (
        <Fragment>
            <h1 style={{ textAlign: 'center' }}>Home page</h1>
            <p style={{ textAlign: 'center' }}>Explore our events..</p>
            <Outlet />
        </Fragment>
    )
}

export default HomePage