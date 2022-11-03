import React from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
   
    return (
        <div>
            <div className="container-fluid">
                <nav className= {` navbar navbar-expand-md navbar-${props.mode}   ` }  style={{ backgroundColor:  props.mode === 'light' ? '#ebe5e5' : 'rgb(80 59 97)'} }>
                    <div className="container">
                        <a className="navbar-brand" href="/">{props.tittle}</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="/">Home</a>
                                </li>
                                
                            </ul>
                            <div className={`form-check form-switch text-${props.mode==='light' ? 'dark' :'light'}`}>
                            <input className="form-check-input" onClick={props.toggle} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.color} </label>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </div>
    )

}
Navbar.prototype = {
    tittle: PropTypes.string,
    about: PropTypes.string
}
Navbar.defaultProps = {
    tittle: 'TextUtils',
    about: 'About'
}

export default Navbar


