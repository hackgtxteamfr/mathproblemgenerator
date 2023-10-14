import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Login from './components/Login';
import CreateAccount from './components/CreateAccount';

function App() {
  	return (
		<div>
		<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />}/>
			<Route path="/login" element={<Login />} />
			<Route path="/create-account" element={<CreateAccount />} />
		</Routes>
		</BrowserRouter>
		</div>
  	);
}

export default App;
