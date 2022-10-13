import {Link} from 'react-router-dom'
export default function Navbar() {
    return (
        <nav id="nav" class="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <Link className="navbar-brand" to='/'>Home page</Link>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li class="nav-item">
                            <Link className="nav-link" to="/contactus">Contact Us</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}