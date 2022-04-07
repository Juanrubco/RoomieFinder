import React, {Component} from 'react';

export class Person extends Component {
    render(){
        return(
            <div className='person'>
                <h1 className='person_name'>
                    {this.props.name}
                </h1>
                <p className='lgbti'>
                    Lgbti: {this.props.lgbti}<br></br>
                    Mascotas: {this.props.pets}<br></br>
                    Desordenado: {this.props.messy}<br></br>
                    Aseado: {this.props.clean}<br></br>
                    Fumador: {this.props.smoker}<br></br>
                    Estudiante: {this.props.student}<br></br>
                    Ciudad: {this.props.city}<br></br>
                    Calificacion: {this.props.calification} estrellas de 5 de estrellas
                </p>
            </div>
        ) 
    }
}
