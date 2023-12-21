
import './App.css'

function App() {
  

  return (
    <>
      {/* Cr8 simple form with add onSubmit to controlling input text & button submit */}
      <form onSubmit={() => console.log('asd')}>
        <input type="text" onChange={() => console.log('asd')} />
        <input type="text" onChange={() => console.log('asd')} />
        <input type="text" onChange={() => console.log('asd')} />
        <input type="text" onChange={() => console.log('asd')} />
        <input type="text" onChange={() => console.log('asd')} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App
