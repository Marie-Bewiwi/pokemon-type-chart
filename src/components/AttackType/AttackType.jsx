import { Component } from 'react'

class AttackType extends Component {
  render() {
    const { name, immunes, strengths, weaknesses } = this.props.type
    return (
      <section className="AttackType">
        <h1>{name}</h1>
        <div>
          <div>Strong against</div>
          <div>
            {strengths.map((strength, key) => <span key={key}>{strength}</span>)}
          </div>
        </div>
        <div>
          <div>Weak against</div>
          <div>
            {weaknesses.map((weakness, key) => <span key={key}>{weakness}</span>)}
          </div>
        </div>
      </section>
    )
  }
}

export default AttackType
