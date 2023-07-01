import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='navbar bg-secondary'>
        <div className="container-fluid">
            <h4 className="mr-md-auto">
               <a href="/" className="navbar-brand text-white">BOOKS</a>
            </h4>
            <div className="d-flex btn-group">
                 <Link to="/" className='btn btn-light'>Home</Link>
                 <Link to="/search" className='btn btn-light'>Suchen</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar
