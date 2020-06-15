import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './header.css';

class Header extends React.Component{ 
    render(){
        return (
            <nav>
                <div className="nav-wrapper color-style">
                    <div className="title-position-style">{this.props.title}</div>
                </div>
            </nav>
        )
    }
}
export default Header;
