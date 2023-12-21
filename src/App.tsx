
import './App.css'

function App() {
  

  return (
    <>
      {/* Add onSubmit untuk cara baca all input text di dalam form */}
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
