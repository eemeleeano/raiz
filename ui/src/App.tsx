import PopularHarvests from './components/PopularHarvests'
import PopularGrowers from './components/PopularGrowers'

const Header = () => {
  return (
    <h1>Raiz</h1>
  )
}

function App() {
  return (
    <>
      <Header />
      <p>Welcome!</p>

      <PopularHarvests k="5" />
      <PopularGrowers k="5" />
    </>
  )
}

export default App
