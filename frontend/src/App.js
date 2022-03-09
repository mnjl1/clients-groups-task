import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import UserListPage from './pages/UserListPage';
import GroupListPage from './pages/GroupListPage'
import NewGroupPage from "./pages/NewGroupPage";
import UpdateGroupPage from "./pages/UpdateGroupPage";
import UpdateUserPage from "./pages/UpdateUserPage";
import NewUserPage from "./pages/NewUserPage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
            <Route path='/users' element={<UserListPage />} />
            <Route path='/users/:id' element={<UpdateUserPage />} />
            <Route path='/new-user' element={<NewUserPage />} />
            <Route path='/groups' element={<GroupListPage />} />
            <Route path='/groups/:id' element={<UpdateGroupPage />} />
            <Route path='/new-group' element={<NewGroupPage />} />
       </Routes>
     </BrowserRouter>
  );
}

export default App;
