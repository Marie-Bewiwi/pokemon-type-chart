import { render } from 'react-dom'
import App from 'src/components/App.jsx'
import 'src/index.scss'


const origin = {
  pokemon: "Test",
  type: "Fire",
}

const altered = {
  ...origin,
  type2: "Plant"
}

console.log(altered)

render(<App />, document.getElementById('root'))
