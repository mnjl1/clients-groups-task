import {

  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import UserListPage from './pages/UserListPage';
import GroupListPage from './pages/GroupListPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
            <Route path='/users' element={<UserListPage />}/>
            <Route path='/groups' element={<GroupListPage />} />
       </Routes>
     </BrowserRouter>
  );
}

export default App;
