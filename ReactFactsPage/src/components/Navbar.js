import logo from '../images/logo.svg';

const Navbar = () => {
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Logo/>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <div className="nav-link">React Course - Project 1 <span class="sr-only">(current)</span></div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Menu <span class="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
}

const Logo = () => {
    return (
        <a className="navbar-brand nav-logo" href="#"> 
            <img className="logo" placeholder="react logo" src={logo}/>
            <div className='logo-name'>ReactFacts</div>
        </a>
    )
}

export default Navbar;