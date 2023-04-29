import L from 'leaflet'

//  the type file for all the types used in the project

export type Location =
  | 'Jersey City'
  | 'Elizabeth'
  | 'Freehold'
  | 'Princeton'
  | 'Hopewell'
  | 'Palisade'
  | 'Grand Junction'
  | 'Salt Lake City'
  | 'Seattle'
  | 'Laguna Beach'
  | 'Orange'
  | 'Anaheim'
  | 'London'

export type FoodType =
  | 'southern comfort'
  | 'pizza'
  | 'cocktail bar'
  | 'burger'
  | 'bar'
  | 'italian'
  | 'bagel'
  | 'bar grill'
  | 'american'
  | 'german'
  | 'mexican'
  | 'french'
  | 'juice'
  | 'coffee'
  | 'chinese'
  | 'japanese'
  | 'thai'
  | 'indian'
  | 'korean'
  | 'tapas'
  | 'taqueria'
  | 'dessert'
  | 'ukrainian'
  | 'filipino'
  | 'vietnamese'
  | 'spanish'
  | 'mediterranean'
  | 'portuguese'
  | 'lounge'
  | 'afro-portuguese'
  | 'english'

export type Neighborhood =
  | 'Harlem'
  | 'Morningside'
  | 'UWS'
  | 'UES'
  | 'Midtown'
  | 'Ktown'
  | 'Flatiron'
  | 'Chelsea'
  | 'East Village'
  | 'West Village'
  | 'Washington Square Park'
  | 'Lower Manhattan'
  | 'LES'
  | 'FiDi'
  | 'Flushing'
  | 'Astoria'
  | 'LIC'
  | 'Greenpoint'
  | 'Williamsburg'
  | 'Bushwick'
  | 'Park Slope'
  | 'Prospect Heights'
  | 'Downtown Brooklyn'
  | 'DUMBO'

export type Rating = 1 | 1.5 | 2 | 2.5 | 3 | 3.5 | 4 | 4.5 | 5

export type Subcategory =
  | 'brunch'
  | 'sushi'
  | 'ramen'
  | 'kareoke'
  | 'kbbq'
  | 'marketplace'
  | 'jazz'
  | 'vegan'
  | 'dog friendly'
  | 'pub'

export type Filter =
  | FoodType
  | Neighborhood
  | Rating
  | 'permanantelyClosed'
  | Location

export type RestaurantData = {
  name: string
  coordinate: [number, number]
  description: string
  type: FoodType
  rating: Rating
  price: number
  neighborhood?: Neighborhood
  location?: { city: string; state?: string; country: string }
  firstVisit: number
  link?: string
  permanantlyClosed?: boolean
  subcategory?: Subcategory
}

export type RestaurantDataWithId = RestaurantData & {
  id: string
}

export type Data = {
  restaurant: RestaurantData[]
}
export interface MarkerWithPopup extends L.Marker {
  bindPopup(
    content: string | HTMLElement | L.Popup,
    options?: L.PopupOptions
  ): this
}
export interface GenericProps {
  onClick: () => void
}

export type FilterType =
  | 'type'
  | 'neighborhood'
  | 'rating'
  | 'advanced'
  | 'all'
  | 'location'
