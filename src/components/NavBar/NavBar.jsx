import './NavBar.css'
import { Link } from 'react-router-dom'

export default function NavBar() {
    return (
        <nav>
            <div>
                <Link to="/orders">Order History</Link>
                &nbsp; | &nbsp;
                <Link to="/orders/new">New Order</Link>
            </div>
            {user && <div>
                <span>Welcome, {user.name}!</span>
                &nbsp; | &nbsp;
                <Link to="" onClick={handleLogOut}>Log Out</Link>
            </div>}
        </nav>
    )
}