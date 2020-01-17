import React, { Component } from 'react'

export default class Contador extends Component {
    maisUm = () => {
        this.props.numero++
    }

    render() {
        return (
            <div>
                <h1>Número: {this.props.numero}</h1>
                <button onClick={this.maisUm}>Inc</button>
                <button>Dec</button>
            </div>
        )
    }
}

// Solução 01 - Bind
// constructor(props){
//     super(props)
//     this.maisUm = this.maisUm.bind(this)
// }

// Solução 02 - Função Arrow (onClick)
// <button onClick={() => this.maisUm()}>Inc</button>

// Solução 03 - Função Arrow
// maisUm = () => {
//     //this.props.numero++
//     console.log(this)
// }
