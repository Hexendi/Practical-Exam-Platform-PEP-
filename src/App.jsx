import Home from './pages/home';
import AdminRoute from './components/AdminRoute';
import Exams from './pages/exams.jsx';
import Dashboard from './pages/Dashboard';
import Login from './pages/login';
import { Routes , Route } from 'react-router-dom';
function App(){
  return(
	  <>
	         <Routes>
		    <Route path="/" element={<Home />} />
		    <Route path="/login" element={<Login />} />
	  	    <Route path="/exam" element={<Exams />} />
	  	    <Route path="/dashboard" element={
						         <AdminRoute>
  							    <Dashboard />
   							 </AdminRoute>
		    } />
		 </Routes>
   	 </>
  )
}
export default App;
