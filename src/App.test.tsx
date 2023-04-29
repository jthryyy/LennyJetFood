// TODO

// import React from 'react'
// import { fireEvent, render } from '@testing-library/react'
// import { About, Footer, Map, NavigationBar } from './components'
// import App from './App'
// import { MemoryRouter } from 'react-router-dom'

// jest.mock('./components')

// const mockAbout = About as jest.MockedFunction<typeof About>
// const mockNavigationBar = NavigationBar as jest.MockedFunction<
//   typeof NavigationBar
// >
// const mockFooter = Footer as jest.MockedFunction<typeof Footer>
// const mockMap = Map as jest.MockedFunction<typeof Map>

// const renderWithProviders = (
//   <MemoryRouter initialEntries={['/']} initialIndex={0}>
//     <App />
//   </MemoryRouter>
// )

// describe('App', () => {
//   beforeEach(() => {
//     mockAbout.mockReturnValue(<div>mock about</div>)
//     mockNavigationBar.mockReturnValue(<div>mock navigation bar</div>)
//     mockFooter.mockReturnValue(<div>mock footer</div>)
//     mockMap.mockReturnValue(<div>mock map</div>)
//   })
//   it('renders the app component with correct information', () => {
//     const { getByRole, getByLabelText, getByText } = render(renderWithProviders)
//     getByRole('img', { name: 'homeImage' })
//   })
// })

it.todo(
  'write this test out when we figure out the correct configuration for moduleNameMapper in jest for styled-components in package.json'
)
