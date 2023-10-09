import styles from '../App.module.css'
import { createSignal, createEffect } from 'solid-js';
import {Router, Route, Routes, A} from "@solidjs/router"

function Deliverables(){

    const [deliverables,setDeliverables] = createSignal({})

    function handleDeliverable(deliv){
        return (
            <>
                name: {deliv.name} <br />
                <br />
            </>
        )
    }

    async function getDeliverables(){

        let deliverables1 = await fetch('https://cs-423-server.vercel.app/getDeliverables')
        let res = await deliverables1.json();
        setDeliverables(res)
    }
    getDeliverables()
    return (
        <div>
            <p>Deliverables:</p>
            <ol>
            <For each={deliverables()} fallback={<p>Loading...</p>}>
                {(document) => 
                    <li>{handleDeliverable(document)}</li>
                }
            </For>
            </ol>
        </div>
    )
}

export default Deliverables