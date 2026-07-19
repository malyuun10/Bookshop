import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import AddBook from "./pages/AddBook.jsx";
import BookDetailes from "./pages/BookDetailes.jsx";
import EditBook from "./pages/EditBook.jsx";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/book/:id" element={<BookDetailes />} />
          <Route path="/edit/:id" element={<EditBook />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;