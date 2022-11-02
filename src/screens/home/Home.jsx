import React from "react";
import { useState } from "react";
import { Container } from "./styled";

export default function Home(){
    const [listaTarefas, setListaTarefas] = useState([]);
    const [tarefaNova, setTarefaNova] = useState("");

    const adicionarTarefa = ()=>{
        console.log("test");
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
    return(<Container>
        <header>
            <h1>
                Minhas Tarefas
            </h1>
        </header>
        <article>
            <ul>
                {
                    listaTarefas.map((item, index)=>{
                        console.log("minhaTask", item)
                        return(
                        <li>{item.content}<button onClick={()=> removerTarefa(item.id)}>Apagar 🗑️</button> <input type="checkbox"></input></li>
                        )
                    })
                }
            </ul>
            <input type="text" onChange={(e)=>{setTarefaNova(e.target.value)}} value={tarefaNova} />
            <button onClick={adicionarTarefa}>Enviar ➡️</button>
        </article>
    </Container>)
};