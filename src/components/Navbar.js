import React, {Component} from 'react';

export class Navbar extends Component{
    render(){
        return(
            <div className='Navbar'>
                <ul>
                    <li>Inicio</li>
                    <li>Roomies</li>
                    <li>Contacto</li>
                </ul>
            </div>
        )
    }
}