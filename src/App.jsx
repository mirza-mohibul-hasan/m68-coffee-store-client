import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './components/CoffeeCard'
import { useState } from 'react'

function App() {
  const loadeCoffees = useLoaderData()
  const [coffees, setCoffees] =useState(loadeCoffees)
  // console.log(coffees)
  return (
    <div className='m-20'>
      <h1 className='text-6xl text-purple-600 text-center'>Hot & Cool Coffees</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
