import HarvestFeed from './components/HarvestFeed'
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

      <PopularGrowers />
      <HarvestFeed />
    </>
  )
}

export default App
