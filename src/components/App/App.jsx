import 'src/index.scss'

import { Component } from 'react'
import AttackType from 'src/components/Types/AttackType.jsx'
import PokemonType from 'src/components/Types/PokemonType.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    this.searchType = this.searchType.bind(this)

    Promise.all([getTypes(), getPokemonTypes(), getAttackTypes()])
      .then(([types, pokemonTypes, attackTypes]) => {
        this.setState({ types, pokemonTypes, attackTypes })
      })
  }

  searchType(event) {
    const type = event.target.value
    if (this.state.types.includes(type)) {
      this.setState({ type })
    }
  }

  render() {
    return (
      <>
        <header className="Header">
          <h1>Pokéhelp!</h1>
        </header>
        <main className="Search">
          <input type="text" onChange={this.searchType} />
        </main>
        {this.state?.type ? <PokemonType type={this.state.pokemonTypes[this.state.type]} /> : null}
        {this.state?.type ? <AttackType type={this.state.attackTypes[this.state.type]} /> : null}
      </>
    )
  }
}

function getTypes() {
  return fetch('/data/types.json').then((response) => response.json())
}

function getPokemonTypes() {
  return fetch('/data/pokemon-types.json').then((response) => response.json())
}

function getAttackTypes() {
  return fetch('/data/attack-types.json').then((response) => response.json())
}

export default App
