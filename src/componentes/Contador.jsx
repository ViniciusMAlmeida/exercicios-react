import React, { Component } from 'react'

export default class Contador extends Component {
    maisUm () {
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
