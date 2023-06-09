import { Popup } from 'react-leaflet'
import styled from 'styled-components'

//  use styled-components to style the Popup in React-leaflet
export const StyledPopup = styled(Popup)`
  .leaflet-popup-content-wrapper {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  }
`
