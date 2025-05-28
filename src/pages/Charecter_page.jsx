import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function Charecter_page() {
   //useParams to get the id from url
  const { id } = useParams()
  //ustState to save data in characterDetalies and render it on dom
  const [characterDetalies, setcharacterDetalies] = useState([])

  //useEffect to get the data as soon as the user enters the site
  useEffect(() => {
    axios.get(`https://655127797d203ab6626e943b.mockapi.io/Character_fahad/${id}`)
      .then(response => {
        setcharacterDetalies(response.characterDetalies[id])
        console.log(characterDetalies[id])
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">

         <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
        <img src={characterDetalies.image} className="w-full h-64 object-cover" />
        <div className="p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">{characterDetalies.name}</h2>
          <p className="text-gray-600"><span className="font-semibold">Status:</span> {characterDetalies.status}</p>
          <p className="text-gray-600"><span className="font-semibold">Species:</span> {characterDetalies.species}</p>
          <p className="text-gray-600"><span className="font-semibold">Gender:</span> {characterDetalies.gender}</p>
          <p className="text-gray-600"><span className="font-semibold">Origin:</span> {characterDetalies.origin}</p>
          <p className="text-gray-600"><span className="font-semibold">Hair:</span> {characterDetalies.hair}</p>
        </div>
      </div>

    </div>
  )
}

export default Charecter_page
