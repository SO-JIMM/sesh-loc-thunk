import React from 'react'
import LocationItem from './location-item.component'

const LocationDropdown = (locationItems) => {
  return (
    <div className="location-dropdown">
      <div className="location-items">
        {locationItems.length ? (
          locationItems.map((locationItem) => (
            <LocationItem
              key={locationItem.id}
              location={locationItem.location}
            />
          ))
        ) : (
          <span className="empty-message">No Locations</span>
        )}
      </div>
    </div>
  )
}

export default LocationDropdown
