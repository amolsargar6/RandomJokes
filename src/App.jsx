import { useState } from 'react'
import './App.css'
import getRandomJokes from "./hooks/getRandomJokes"
import Card from "./components/Card"

function App() {

  const [count, setCount] = useState(0)

  //taking the api resp
  // const jokes = getRandomJokes();

  const {data, fetchJoke} = getRandomJokes(); //here i am getting one call back for the api and data fetched by that api as well
  
  
  const getJoke = () => {
    
    // const jokeData = jokes
    // console.log('call :: ',jokeData.data.content);
    // setJoke(jokeData);

    fetchJoke();
    console.log('data',data);

    setCount(count+1);
  }


  return (
    <div>
      
      <div>
        Joke: {count}
        {
          data && (<Card jokeData={data}/>)
        }
      </div>

      <button
          onClick={() => getJoke() }
          className="outline-none px-2 py-2 rounded-3xl  shadow-lg px-3 py-3 gap-5"
          style={{backgroundColor : "gray"}}
      >

          Change

      </button>
    </div>
  )
}

export default App
