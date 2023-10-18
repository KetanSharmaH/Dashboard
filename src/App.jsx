import { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DashBoardElements from './components/dashBoard/DashBoardElements';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='d-flex'>
      <DashBoardElements />
    </div>
    
  )
}

export default App
