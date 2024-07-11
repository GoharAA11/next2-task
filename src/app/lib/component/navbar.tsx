import Link from "next/link"
import { NavLink } from "./navlink"

export const Navbar = () => {
    return <>
        <nav className="navbar">
            <NavLink className="navbar-item " href="/">Home</NavLink>
            <NavLink className="navbar-item" href="/add">Add</NavLink>
            <NavLink className="navbar-item" href="/signup">SignUp</NavLink>
            <NavLink className="navbar-item" href="/login">Login</NavLink>
        </nav>
    </>
}