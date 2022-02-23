import Crud from "./components/crud"
import CrudApi from "./components/CrudApi"
import SongSearch from "./components/SongSearch";
function App() {
  return (
    <div>
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
