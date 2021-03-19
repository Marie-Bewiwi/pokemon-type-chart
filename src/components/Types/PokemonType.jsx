import { Component } from 'react'

class PokemonType extends Component {
  render() {
    const { name, immunes, strengths, weaknesses } = this.props.type
    return (
      <section className="Type">
        <h1>Pokémon: {name}</h1>
        <div>
          <div>Résiste à</div>
          <div>
            {strengths?.map((strength, i) => <span key={i}>{strength}</span>)}
          </div>
        </div>
        <div>
          <div>Faible à</div>
          <div>
            {weaknesses?.map((weakness, i) => <span key={i}>{weakness}</span>)}
          </div>
        </div>
      </section>
    )
  }
}

export default PokemonType
