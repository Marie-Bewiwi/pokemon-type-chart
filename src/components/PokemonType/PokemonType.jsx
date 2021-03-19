import { Component } from 'react'

class PokemonType extends Component {
  render() {
    const { name, immunes, strengths, weaknesses } = this.props.type
    return (
      <section className="PokemonType">
        <h1>Pokémon type: {name}</h1>
        <div>
          <div>Resist to</div>
          <div>
            {strengths?.map((strength, i) => <span key={i}>{strength}</span>)}
          </div>
        </div>
        <div>
          <div>Sensitive to</div>
          <div>
            {weaknesses?.map((weakness, i) => <span key={i}>{weakness}</span>)}
          </div>
        </div>
      </section>
    )
  }
}

export default PokemonType
