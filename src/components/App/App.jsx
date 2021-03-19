import 'src/index.scss'

import { Component } from 'react'
import Header from 'src/components/Header/Header.jsx'
import Search from 'src/components/Search/Search.jsx'
import PokemonType from 'src/components/PokemonType/PokemonType.jsx'

class App extends Component {
  constructor(props) {
    super(props)

    fetch('/data/pokemon-types.json')
      .then((response) => response.json())
      .then((json) => {
        console.log('Fetched', json)
        this.setState({ ...json })
      })
  }

  render() {
    console.log('App state?', this.state)
    return (
      <>
        <Header />
        <Search />
        {this.state ? <PokemonType type={this.state.normal} /> : null}
      </>
    )
  }
}

export default App
