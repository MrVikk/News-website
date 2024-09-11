import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <nav className='navbar fixed-top navbar-expand-lg bg-dark color-white'>
        <div className='container-fluid'>
          <Link className='navbar-brand text-light' to='Navbar'>
            NEWS@Arena{' '}
          </Link>
          <div>
            <button
              className='navbar-toggler'
              background-color='#ccccc'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation color-light'
            >
              <span className='navbar-toggler-icon color-white'></span>
            </button>
          </div>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white'
                  aria-current='page'
                  to='/'
                >
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link className=' nav-link text-white' to='/About'>
                  About
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white'
                  aria-current='page'
                  to='/business'
                >
                  Business
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white'
                  aria-current='page'
                  to='/entertainment'
                >
                  Entertainment
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white'
                  aria-current='page'
                  to='/general'
                >
                  General
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white'
                  aria-current='page'
                  to='/health'
                >
                  Health
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white'
                  aria-current='page'
                  to='/science'
                >
                  Science
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white'
                  aria-current='page'
                  to='/sports'
                >
                  Sports
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white'
                  aria-current='page'
                  to='/technology'
                >
                  Technology
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
