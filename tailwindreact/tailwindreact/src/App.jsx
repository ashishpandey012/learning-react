import './App.css'
import Card from './Card';

function App(){

  return(
    <>
      <h2 className='bg-green-400 p-4 rounded-xl text-black mb-5'>This is my Card</h2>
      <div className='flex gap-5 flex-wrap'>
      <Card username="Ashish" btnText="click me"/>
      <Card username="Pandey"/>
      </div>
    </>
  )
}



export default App
