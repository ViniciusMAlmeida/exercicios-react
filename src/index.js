import React from 'react'
import ReactDOM from 'react-dom'
// import PrimeiroComponente from './componentes/PrimeiroComponente'
import CompA, { CompB as B } from './componentes/DoisComponentes'
// import MultiElementos from './componentes/MultiElementos'

const elemento = document.getElementById('root')
ReactDOM.render(
    <div>
        {/*<MultiElementos />*/}
        <CompA valor="Olá eu sou o A!" />
        <B valor="B na área!" />
        {/*<PrimeiroComponente valor="Bom dia!" /> */}
    </div>
    , elemento)

// const jsx = <h1>Olá React!</h1>
// ReactDOM.render(jsx, elemento)
