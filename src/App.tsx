import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from "./pages/Game";
import { Home } from "./pages/Home/Home";
import { Info } from "./pages/Info";
import { Report } from "./pages/Report";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home></Home>}></Route>
				<Route path="info" element={<Info></Info>}></Route>
				<Route path="game" element={<Game></Game>}></Route>
				<Route path="report" element={<Report></Report>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
