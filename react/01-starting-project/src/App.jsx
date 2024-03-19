import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import Examples from './components/Examples/Examples.jsx';


function App() {
  console.log("App Component Executing");

  return (
    <>
      {/* <header>
        <h1>Header.css Test</h1>
      </header> */}
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  );
}

export default App;
