
import { useState } from 'react';
import './App.css'

function App() {
  

  return (
    const [name, setName] = useState();

    <>
      {/* uncontrolled component */}
      <input type="text" onChange={() => console.log('asd')} />
      {/* controlled component */}
       <input type="text" onChange={() => console.log('asd')} value={name} />
    </>
  )
}

export default App
