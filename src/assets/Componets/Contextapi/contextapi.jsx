import { createContext, useState } from "react";

export const StateContext = createContext();

export const Stateprovider = ({ children }) => {

  const [newMilestone, setNewMilestone] = useState("");
  const [temporarymilstonearr,setTemporarymilstonearr] = useState([])
  const [tasks, setTasks] = useState({});
    const [milestonearr,setMilstonearr]= useState([])
    const [taskdata, setAddtask] = useState([])
    const [users,SetUsers]=useState([])
    const [user,SetUser]=useState([])
    const [onlytask,SetTask] = useState([])

  return (
    <StateContext.Provider value={{onlytask,SetTask,temporarymilstonearr,setTemporarymilstonearr,tasks, setTasks,user,SetUser,SetUsers,taskdata, users,setAddtask, milestonearr ,setMilstonearr,newMilestone, setNewMilestone}}>
      {children}
    </StateContext.Provider>
  );
};