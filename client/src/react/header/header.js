import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import './header.css';

class Header extends React.Component{ 

    render(){
        return (
            <nav>
                <div className="nav-wrapper color-style">
                    <div className="title-position-style">{this.props.title}</div>
                    <div id="links-config">
                        <ul id="nav-mobile" className="links-style right hide-on-med-and-down">
                            <li><a href="/">Home</a></li>
                            <li><a href="/escolheCarros">Carros</a></li>
                            <li><a href="/login">Área do Gestor</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
export default Header;
