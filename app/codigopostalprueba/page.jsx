"use client"

import { useState } from 'react';
import axios from 'axios';

function TuComponente() {
  const [postalCode, setPostalCode] = useState('');
  const [locationInfo, setLocationInfo] = useState(null);

  const fetchLocationInfo = async () => {
    try {
      const response = await axios.get(
        `https://api.opencagedata.com/geocode/v1/json?key=e5e6b9a9c2c040c2989074a1c75cfa22&q=${postalCode}`
      );

      // Procesar la respuesta y extraer información relevante
      const data = response.data.results[0];
      const country = data.components.country;
      const state = data.components.state || data.components.county;
      const city = data.components.city || data.components.town;

      setLocationInfo({
        country,
        state,
        city,
      });
    } catch (error) {
      console.error('Error al obtener información de ubicación:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Código Postal"
        value={postalCode}
        onChange={(e) => setPostalCode(e.target.value)}
      />
      <button onClick={fetchLocationInfo}>Obtener Ubicación</button>

      {locationInfo && (
        <div>
          <h2>Información de Ubicación:</h2>
          <p>País: {locationInfo.country}</p>
          <p>Estado: {locationInfo.state}</p>
          <p>Ciudad: {locationInfo.city}</p>
        </div>
      )}
    </div>
  );
}

export default TuComponente;
