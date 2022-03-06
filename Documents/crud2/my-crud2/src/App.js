import Crud from "./components/crud"
import CrudApi from "./components/CrudApi"
import SongSearch from "./components/SongSearch";
import Hola from"./components/Hola"

function App() {
  return (
    <div>
    <Hola/>
      <hr/>
      <SongSearch/>
      <hr/>
      <hr/>
      <CrudApi/>
      <hr/>
      <Crud/>
      </div>

  );
}

export default App;
