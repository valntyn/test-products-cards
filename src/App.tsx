import { Navigate, Route, Routes } from 'react-router-dom';
import { Navbar } from './Components/Navbar';
import { PageNotFound } from './Pages/PageNotFound';
import { Homepage } from './Pages/Homepage';

const App = () => {
  return (
    <>
      <Navbar />
      <div className="App App__container">
        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<Homepage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path=":id" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
};

export default App;
