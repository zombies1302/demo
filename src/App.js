
import { BrowserRouter, Routes, Route, Link  } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import Admin from './components/Admin'




function App() {
  return (
    <BrowserRouter>
    <div className="container">
    <Header />
    <main>
    <article>
    <Routes>  
    <Route path='/' exact element={<Login/>} />
    <Route path='/admin' exact element={<Admin/>} />



    </Routes>
    </article>
    <aside>
    </aside>
    </main>    

    </div>
    </BrowserRouter>
    );
}

export default App;
