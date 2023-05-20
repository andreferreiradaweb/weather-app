'use client'

import React from 'react'
import LocationForm from '../components/LocationForm'

export default function Home() {
  const handleLocationChange = (address: string) => {
    console.log('Nova localização:', address)
    // Aqui você pode fazer outras operações relacionadas à mudança de localização
  }

  return (
    <div>
      <h1>Minha Aplicação do Clima</h1>
      <LocationForm onChange={handleLocationChange} />
      {/* Outros componentes e conteúdos da página */}
    </div>
  )
}
