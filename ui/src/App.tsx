import HarvestFeed from './components/HarvestFeed'
import PopularGrowers from './components/PopularGrowers'

const Header = () => {
  return (
    <>
      <h1>Raiz</h1>
      <h4>Food Network</h4>
    </>
  )
}

function App() {
  return (
    <>
      <Header />

      <PopularGrowers />
      <HarvestFeed />
    </>
  )
}

export default App
