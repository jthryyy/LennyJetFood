import * as React from 'react'
import startCase from 'lodash/startCase'
import { Flex } from '../utils/Flex'
import { getPrice, getStarRatings } from '../utils/utils'
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
    id,
  } = restuarantData
  const isPermanentlyClosed = restuarantData.permanantlyClosed

  return (
    <Flex flexDirection="column" gridGap="4px" key={id}>
      <Flex fontWeight={500} flexDirection="row">
        <Flex> {name}</Flex>
        {isPermanentlyClosed ? (
          <Flex color="red" marginLeft="4px">
            Permanently Closed
          </Flex>
        ) : null}
      </Flex>
      <Flex>{getPrice(price)}</Flex>
      <Flex>{getStarRatings(rating)}</Flex>
      <Flex>First visited: {firstVisit}</Flex>
      <Flex>
        {startCase(type)}
        {subcategory != null ? ', ' + startCase(subcategory) : null}
      </Flex>
      <Flex>{description}</Flex>
      {link ? <a href={link}>Website</a> : null}
    </Flex>
  )
}
