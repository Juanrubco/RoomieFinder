import React, {Component} from 'react';

export class Resume extends Component{
    render(){
        return(
            <div className='Resume'>
                <h1 className='person_name'>
                    {this.props.name}
                </h1>
                <p>Calificacion: {this.props.calification}</p>
            </div>
        )
    }
}