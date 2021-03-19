import { Component } from 'react'

class AttackType extends Component {
  render() {
    const { name, immunes, strengths, weaknesses } = this.props.type
    return (
      <section className="Type">
        <h1>Attaque: {name}</h1>
        <div>
          <div>Fort contre</div>
          <div>
            {strengths.map((strength, key) => <span key={key}>{strength}</span>)}
          </div>
        </div>
        <div>
          <div>Faible contre</div>
          <div>
            {weaknesses.map((weakness, key) => <span key={key}>{weakness}</span>)}
          </div>
        </div>
      </section>
    )
  }
}

export default AttackType
