import Crud from "./components/crud"
import CrudApi from "./components/CrudApi"
import SongSearch from "./components/SongSearch";
import Hola from"./components/Hola"
import SelectsAnidados from "./components/SelectsAnidados";
import ContactForm from "./components/ContactForm";
import Input from "./components/Input";

function App() {
  return (
    <div>
<Input/>
<hr/>
<ContactForm/>
<hr/>
      <SelectsAnidados/>
      <hr/>
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
