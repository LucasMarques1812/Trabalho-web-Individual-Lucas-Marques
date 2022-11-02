import React from "react";
import { useState } from "react";

export default function Home(){
    const [listaTarefas, setListaTarefas] = useState([]);
    const [tarefaNova, setTarefaNova] = useState("ABC");

    const adicionarTarefa = ()=>{
        console.log("test");
        //const newLista = [...listaTarefas];
        //newLista.push(tarefaNova);
        //setListaTarefas(newLista);
        const task = {
            id: Math.random(),
            content: tarefaNova,
            done: false
            }
            setListaTarefas([...listaTarefas, task])
    }
    function removerTarefa(id){
            const commentWithoutDeletedOne = listaTarefas.filter((tarefa) => tarefa.id !== id)
            setListaTarefas(commentWithoutDeletedOne);
    }
    return(<div>
        <header>
            <h1>
                Lista de Tarefas
            </h1>
        </header>
        <article>
            <ul>
                {
                    listaTarefas.map((item, index)=>{
                        console.log("minhaTask", item)
                        return(
                        <li>{item.content}<button onClick={()=> removerTarefa(item.id)}>Apagar</button></li>
                        )
                    })
                }
            </ul>
            <input type="text" onChange={(e)=>{setTarefaNova(e.target.value)}} value={tarefaNova} />
            <button onClick={adicionarTarefa}>Submit</button>
        </article>
    </div>)
};