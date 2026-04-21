import { Outlet } from "react-router-dom";
import App from "../App";
import AppFooter from "../components/AppFooter";
import AppHeader from "../components/AppHeader";

export default function DefaultLayout() {
    return (
        <>
       
            <AppHeader />
                <Outlet />
            <AppFooter />
        </>
    )
}