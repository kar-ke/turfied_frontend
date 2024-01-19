import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import Landingpage from "./Pages/Landingpage";
import SigninPage from "./Pages/SigninPage";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<Routes>
				<Route path="/" exact element={<Landingpage />} />
				<Route path="/signin" element={<SigninPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
