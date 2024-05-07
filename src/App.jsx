import { Route, Routes } from "react-router"
import { Templates } from "./assets/Pages/Templates/Templates"
import { Addtemplates } from "./assets/Pages/AddTemplate/Addtemplates"



function App() {


  return (
    <div>
     <Routes>
      <Route path="/" element={<Templates/>}/>
      <Route path='/AddnewTemplates' element={<Addtemplates/>} />
     </Routes>
    </div>
   
  
  )
}

export default App
