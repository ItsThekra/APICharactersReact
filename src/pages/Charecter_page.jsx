import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'

function Charecter_page() {
  const { id } = useParams()
  const [characterDetalies, setcharacterDetalies] = useState([])

  useEffect(() => {
    axios.get(`https://655127797d203ab6626e943b.mockapi.io/Character_fahad/${id}`)
      .then(response => {
        setcharacterDetalies(response.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [id])

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-md">
        <img src={characterDetalies.image} alt={characterDetalies.name} className="w-full h-64 object-cover" />
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
