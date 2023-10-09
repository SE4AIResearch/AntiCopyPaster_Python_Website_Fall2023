import styles from '../App.module.css'
import { createSignal, createEffect } from 'solid-js';
import {Router, Route, Routes, A} from "@solidjs/router"

function Homepage(){


    return (
        <div>
            <p>This is the homepage</p>
            <A class={styles.link} href="/deliverables">View Deliverables</A> <br /> <br />
        </div>
    )
}

export default Homepage