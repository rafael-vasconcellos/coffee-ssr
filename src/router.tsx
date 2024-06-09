import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Vite from './Vite/Vite';


// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/vite" element={<Vite />} />
    </Routes>
  );
};