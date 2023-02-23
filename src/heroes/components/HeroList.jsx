import React from 'react'
import { getHeroesByPublisher } from '../helpers'
import { HerCard } from './HerCard'

export const HeroList = ({publisher}) => {
    const heroes =getHeroesByPublisher(publisher)
  return (
      <div className='row row-cols-1 row-cols-md-3 g-3'>
      {
          heroes.map (hero => (
                <HerCard 
                key={hero.id}
                {...hero}
                />
            ))
        }
    </div>
  )
}
