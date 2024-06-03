import { Link,Outlet } from "react-router-dom"

export function Navbar() {
    return (
        <>
        <div className="nav">
        <Link to='/'>
        <h4>Home</h4>
        </Link>&nbsp;&nbsp;

        <Link to='/list'>
        <h4>List</h4>
        </Link>&nbsp;&nbsp;

        <Link to='/contact'>
        <h4>Contact</h4>
        </Link>

        </div>
        <Outlet/>
        </>
    )
}

