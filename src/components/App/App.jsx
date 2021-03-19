import 'src/index.scss'

import { Component } from 'react'
import AttackType from 'src/components/Types/AttackType.jsx'
import Header from 'src/components/Header/Header.jsx'
import PokemonType from 'src/components/Types/PokemonType.jsx'
import Search from 'src/components/Search/Search.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    Promise.all([getPokemonTypes(), getAttackTypes()])
      .then(([pokemonTypes, attackTypes]) => {
        this.setState({ pokemonTypes, attackTypes })
      })
  }

  render() {
    return (
      <>
        <Header />
        <Search />
        {this.state ? <PokemonType type={this.state.pokemonTypes.psy} /> : null}
        {this.state ? <AttackType type={this.state.attackTypes.psy} /> : null}
      </>
    )
  }
}

function getPokemonTypes() {
  return fetch('/data/pokemon-types.json').then((response) => response.json())
}

function getAttackTypes() {
  return fetch('/data/attack-types.json').then((response) => response.json())
}

export default App
