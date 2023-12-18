import React, { useState } from 'react'

const Todo = () => {
// const storedList = localStorage.getItem("todo") ? JSON.parse(localStorage.getItem("todo")) : [];
// console.log(storedList)   
const [list, setList] = useState([]);
const [input, setInput] = useState("");
const [edit, setEdit] = useState();
const handleClick = () => {
    setList([...list, input])
    // localStorage.setItem("todo", list)
    setInput("")
    // console.log(localStorage.getItem("todo"))
}
const deleteClick = (index) => {
    setList((deleteInput) => {
        return deleteInput.filter((a, i)=> i !== index)
    } )
    // localStorage.setItem("todo", list)
}

  return (
    <>
    <h2 className='text-center'>Todo List</h2>    
    <label htmlFor="plan" className="block mb-2 text-center">Planın nedir?</label>
    <div className='flex justify-center'>
    <input type="text" id="plan" value={input} name="plan" className="w-[500px] rounded p-2 m-2 border-2" onChange={(e) => setInput(e.target.value)}/> 
    <button onClick={handleClick}>Ekle</button>
    </div>
    <ol className=''>
        {list.map((item, index) => {
            return(
                <div key={index} className='flex justify-between m-5'>
                    <li >{item}</li>
                    <div className=''>
                        <button className='mx-2' onClick={() => deleteClick(index)}>Sil</button>
                        <button className='mx-2'>Düzenle</button>
                    </div> 
                </div>
            )
        })}
    </ol>

    </>
  )
}

export default Todo