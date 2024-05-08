import First from "./components/First"
import Marqee from "./components/Marqee"
import Nav from "./components/Nav"
import LocomotiveScroll from 'locomotive-scroll';




function App() {
  const locomotiveScroll = new LocomotiveScroll();


  return (
    <div className="home">
      <Nav />
      <First />
      <Marqee />
    </div>


  )
}

export default App
