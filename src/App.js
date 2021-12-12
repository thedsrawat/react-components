import FontCase from "./components/FontCase";
import ScreenWidth from "./components/ScreenWidth";

function App() {
  return (
    <>
      <ScreenWidth minWidth="700" maxWidth="1920">
        700 - 1920
      </ScreenWidth>
      <FontCase changeTo="capital">my name is deepak.</FontCase>
    </>
  );
}

export default App;
