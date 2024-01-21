import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SearchResult from './pages/SearchResult';
import RootLayout from './pages/RootLayout';

function App() {
  return (
    <main className="h-screen">
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/search/:searchText" element={<SearchResult />} />
          <Route path="/search/" element={<SearchResult />} />
          <Route path="/*" element={<Navigate to={'/'} />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
