import React, { memo } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import type { Coord } from '../types'

type Props = {
    onMapClick: (lat: number, lon: number) => void
    coords: Coord
}

function Map({onMapClick, coords }: Props) {
    return (
        <MapContainer center={[51.505, -0.09]} zoom={8} scrollWheelZoom={false} className='w-screen h-200'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <MapClick onMapClick={onMapClick} coords={coords} />
        </MapContainer>
    )
}

function MapClick({onMapClick, coords} : {onMapClick: (lat: number, lon:number) => void, coords: Coord }){
    const map = useMap();
    map.panTo([coords.lat, coords.lon])

    map.on("click", (e) => {
        const {lat, lng} = e.latlng
        onMapClick(lat, lng) 
    })

    return null
}

export default memo(Map);