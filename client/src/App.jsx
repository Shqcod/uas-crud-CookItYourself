import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AddRecipe from "./pages/AddRecipe";
import RecipeDetail from "./pages/RecipeDetail";
import EditRecipe from "./pages/EditRecipe";
import NotFound from "./pages/NotFound";
import "./App.css"; // pastikan CSS diimpor

function App() {
  return (
    <div className="App">
      {" "}
      {/* Tambahkan wrapper dengan className="App" */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddRecipe />} />
          <Route path="/edit/:id" element={<EditRecipe />} />
          <Route path="/recipe/:id" element={<RecipeDetail />} />
          <Route path="*" element={<NotFound />} /> {/* ini halaman 404 */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
