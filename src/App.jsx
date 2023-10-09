import styles from './App.module.css';
import { createSignal, createEffect } from 'solid-js';
import {Router, Route, Routes, A} from "@solidjs/router"
import Homepage from './pages/homepage';
import Deliverables from './pages/deliverables';

function App() {
  //for fetches that happen multiple times, use createResource
  const [data, setData] = createSignal(null)

  createEffect(async() => {
      // let req = await fetch(`http://localhost:4000/api`)
      // let data = await req.json()
      // setData(data)
  })

  return (
    <Router>
    <div class={styles.App}>
      <header class={styles.header}>
        <A class={styles.link} href="/">Home</A>
        Senior Design Deliverables 
      </header>
      {/* <p>{data()}</p> */}
      
      <Routes>
        <Route path="/" component={Homepage} />
        <Route path="/deliverables" component={Deliverables} />
      </Routes>
    </div>
    </Router>

  );
}

export default App;
