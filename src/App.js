import logo from './logo.svg';
import './App.css';
// import router from './Routes/Routes/Routes';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes/ROutes';

function App() {
  return (
    <div className='max-x-[1440px] mx-auto'>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
