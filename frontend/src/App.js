import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import EditUSer from "./components/EditUser";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<UserList/>}/>
        <Route path="add" element = {<AddUser/>}/>
        <Route path="edit/:id" element = {<EditUSer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
