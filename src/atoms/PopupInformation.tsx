import * as React from 'react'
import startCase from 'lodash/startCase'
import { Flex } from '../utils/Flex'
import { getPrice, getStarRatings } from '../utils/utils'
import { LocationIcon } from '../icons'
import './atoms.css'
import type { RestaurantDataWithId } from '../types'

interface PopupInformationProps {
  restuarantData: RestaurantDataWithId
}
export const PopupInformation = (props: PopupInformationProps): JSX.Element => {
  const { restuarantData } = props
  const {
    name,
    price,
    rating,
    firstVisit,
    type,
    subcategory,
    description,
    link,
    location,
    neighborhood,
    id,
  } = restuarantData
  const isPermanentlyClosed = restuarantData.permanantlyClosed
  const tagProps = {
    marginLeft: '4px',
    padding: '6px',
    color: 'white',
    borderRadius: '15px',
    minWidth: '5rem',
    maxWidth: 'max-content',
    justifyContent: 'center',
    fontSize: '12px',
  }
  const styledType = (
    <Flex {...tagProps} backgroundColor="purple">
      {startCase(type)}
    </Flex>
  )
  const styledSub =
    subcategory != null ? (
      <Flex {...tagProps} backgroundColor="blue">
        {startCase(subcategory)}
      </Flex>
    ) : null

  return (
    <Flex flexDirection="column" gridGap="4px" key={id}>
      <Flex fontWeight={500} flexDirection="row" justifyContent="space-between">
        <Flex>
          {link ? (
            <a href={link} className="Name-link" style={{ color: 'black' }}>
              {name}
            </a>
          ) : (
            name
          )}
        </Flex>
        {isPermanentlyClosed ? (
          <Flex color="red" marginLeft="4px">
            Permanently Closed
          </Flex>
        ) : null}
      </Flex>
      <Flex flexDirection="row" justifyContent="space-between">
        <Flex>{getStarRatings(rating)}</Flex>
        <Flex>{getPrice(price)}</Flex>
      </Flex>
      <Flex flexDirection="row" justifyContent="space-between">
        <Flex flexDirection="row">
          <LocationIcon />
          {location != null
            ? location.state + ', ' + location.country
            : neighborhood}
        </Flex>
        <Flex>First visited: {firstVisit}</Flex>
      </Flex>
      <Flex paddingY="0.5rem">{description}</Flex>
      <Flex>
        {styledType}
        {styledSub}
      </Flex>
    </Flex>
  )
}
