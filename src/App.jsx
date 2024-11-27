import Effort from "./component/page/Effort";
import Header from "./component/page/Header";
import Hero from "./component/page/Hero";
import Partners from "./component/page/Partners";
import Slider from "./component/page/Slider";
import System from "./component/page/System";
import Train from "./component/page/Train";

function App() {
  return (
    <>
      <main>
        <Header />
        <Hero />
        <Partners />
        <System />
        <Train />
        <Slider />
        <Effort />
      </main>
    </>
  );
}

export default App;
