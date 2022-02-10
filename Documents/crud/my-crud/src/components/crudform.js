import React, { useState,useEffect} from 'react';


const initialForm={
  name:"",
  constelacion:"",
  id:null,

}

function Form({createData,updateData,dataToEdit,setDataToEdit}) {
  const [form, setForm] = useState(initialForm);
useEffect(() => {
  if (dataToEdit) {
    setForm(dataToEdit)
  }else{
    setForm(initialForm);
  }
}, [dataToEdit]);


const handleChange=(e)=>{
  setForm(
    {...form, [e.target.name]:e.target.value
    })
}
const handleSubmit=(e)=>{
  e.preventDefault()
    if (!form.name||!form.constelacion) {
      alert("datos incompletos")
    
    return;
    }
    if (form.id===null) {
      createData(form)
    }else{updateData(form)
    }

    handleReset()

};

const handleReset=(e)=>{
  setForm(initialForm);
  setDataToEdit(null)
};

  return (
  <div>
  <form onSubmit={handleSubmit}>
    <h2>{dataToEdit?"Editar caballero":"Agregar Caballero"}</h2>
    <input type="text"placeholder="nombre"name="name"onChange={handleChange}value={form.name}/>
    <input type="text"placeholder="constelacion"name="constelacion"onChange={handleChange} value={form.constelacion}/>
    <input type="submit"value="enviar"/><input type="reset"value="limpiar"onClick={handleReset}/>
  </form>
  
  </div>

   );
}

export default Form;