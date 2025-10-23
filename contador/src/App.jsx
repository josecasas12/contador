import Teoria from "./components/teoria";
import Conceptos from "./components/Conceptos";
function App() {
const codComision = 'web16 2025 modulo2';
  return (
    <>
      <header className="py-3 text-center">
        <h1 className="display-4 text">Contador</h1>
      </header>
      <main>
        <Teoria />  
        <Conceptos nombreComision={codComision}/>
      </main>
    </>
  );
}

export default App;
