import { Link,Outlet,NavLink} from "react-router-dom"

export function Navbar() {
    return (
        <>
        <div className="nav">

        <NavLink style={({isActive}) => (isActive ? { color : "blue"}: undefined)}
         to='/'>
        <h4>Home</h4>
        </NavLink>&nbsp;&nbsp;

        <NavLink style={({isActive}) => (isActive ? { color : "blue"}: undefined)}
        to='/list'>
        <h4>List</h4>
        </NavLink>&nbsp;&nbsp;

        < NavLink style={({isActive}) => (isActive ? { color : "blue"}: undefined)}
         to='/contact'>
        <h4>Contact</h4>
        </NavLink>

        </div>
        <Outlet/>
        </>
    )
}

