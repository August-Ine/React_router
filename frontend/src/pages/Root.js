import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

function RootLayout(props) {
    return (
        <Fragment>
            <MainNavigation />
            <Outlet />
        </Fragment>
    )
}

export default RootLayout