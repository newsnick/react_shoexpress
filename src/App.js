import './assets/styles/App.scss'

import Home from './pages/Home/Home'
import Presentation from './pages/Presentation/Presentation'
import Slider from './pages/Slider/Slider'
import Selection from './pages/Selection/Selection'
import Promotion from './pages/Promotion/Promotion'
import Footer from './pages/Footer/Footer'

function App() {
  return (
    //<div className="App">
    <main>
      <Home />
      <div>
        <Home />
      </div>

      <div>
        <Presentation />
      </div>
      <Slider />
      {/*
      <Slider />
      <Selection />
      <Promotion />
      <Footer /> */}
    </main>
    //</div>
  )
}

export default App
