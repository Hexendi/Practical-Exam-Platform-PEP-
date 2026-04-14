import Home from './pages/home';
import Login from './pages/login';
import { Routes , Route } from 'react-router-dom';
function App(){
  return(
	  <>
	         <Routes>
		    <Route path="/" element={<Home />} />
		    <Route path="/login" element={<Login />} />
		 </Routes>
   	 </>
  )
}
export default App;
