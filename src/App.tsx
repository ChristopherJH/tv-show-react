import MainHeader from "./components/MainHeader"
import Episodes from "./components/MainContent"
import MainFooter from "./components/MainFooter";

function App(): JSX.Element {
  return (
  <>
    <MainHeader />
    <Episodes />
    <MainFooter />
  </>
  );
}

export default App;
