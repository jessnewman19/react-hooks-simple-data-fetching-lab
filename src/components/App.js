// create your App component here

import React, {useState, useEffect} from 'react'

function App() {
  const [image, setImage] = useState("")
  console.log(image)

  useEffect(() => { 
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response => response.json())
    .then(data => { 
      setImage(data)
    })
  }, [])
  
  if (image === "") { 
    return <p>Loading...</p>
  }
  
  return (
    <img src={image.message} alt="A Random Dog"></img>
  )
}

export default App