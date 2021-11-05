import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'
import App from './App';
// import axios from 'axios';
// import MutationObserver from "mutation-observer";
// global.MutationObserver = MutationObserver;

// import { Provider } from 'react-redux'
// import configureStore from 'redux-mock-store'

// Object.defineProperty(window, 'matchMedia', {
//   writable: true,
//   value: jest.fn().mockImplementation(query => ({
//     matches: false,
//     media: query,
//     onchange: null,
//     addListener: jest.fn(), // Deprecated
//     removeListener: jest.fn(), // Deprecated
//     addEventListener: jest.fn(),
//     removeEventListener: jest.fn(),
//     dispatchEvent: jest.fn(),
//   })),
// });

// jest.mock('axios');

// const albums = [
//   {
//     id: 1,
//     title: "quidem molestiae enim",
//     userId: 1
//   }, 
//   {
//     id: 2,
//     title: "sunt qui excepturi placeat culpa",
//     userId: 1
//   }
// ]

// const initialState = {
//   albums: [
//     {
//       id: 1,
//       title: "quidem molestiae enim",
//       userId: 1,
//     }
//   ],
//   title: '',
//   userId: null,
//   app: {
//     loaderVisible: false,
//   }
// }
// const mockStore = configureStore()
// let store

// store = mockStore(initialState)


// const rerender = () => {
//   return render(<Provider store={store}><App /></Provider>)
// }


// describe('Render app', () => {
//   it('Shows index page', () => {
//     rerender();
//     expect(screen.getByText(/Реализовать CRUD Web приложение используя React/i)).toBeInTheDocument();
//     expect(screen.getByText(/В качестве бэкэнда использовать сервис/i)).toBeInTheDocument();
//     expect(screen.getByText(/Вывести список альбомов используя API GET/i)).toBeInTheDocument();
//     expect(screen.getByText(/Вывести список фото для каждого альбома, используя роутинг и API GET/i)).toBeInTheDocument();
//     expect(screen.getByText(/Реазизовать добавление\/изменение\/удаление альбомов, используя API POST\/PUT\/DELETE/i)).toBeInTheDocument();
//     expect(screen.getByText(/Реализовать CRUD Web приложение используя React/i)).toBeInTheDocument();
//     expect(screen.getByText(/Реализовать CRUD Web приложение используя React/i)).toBeInTheDocument();
//     expect(screen.getByText(/Реализовать CRUD Web приложение используя React/i)).toBeInTheDocument();
//   });

//   it('Shows navigation menu', () => {
//     rerender();
//     expect(screen.getByRole('menu')).toBeInTheDocument();
//     const menuItems = screen.getAllByRole('menuitem');
//     expect(menuItems[0]).toHaveTextContent(/Home/i);
//     expect(menuItems[1]).toHaveTextContent(/Albums/i);
//     expect(menuItems[2]).toHaveTextContent(/Create album/i);
//   });
// });

// describe('Navigation menu', () => {
//   it('Go to albums page', () => {
//     rerender();
//     const menuItem = screen.getByTestId('link-albums');
//     userEvent.click(menuItem);
//     expect(screen.getByText(/Albums page/i)).toBeInTheDocument();  
//   });

//   it('Go to create album page', () => {
//     rerender();
//     const menuItem = screen.getByTestId('link-create');
//     userEvent.click(menuItem);
//     expect(screen.getByText(/Create Album page/i)).toBeInTheDocument();    
//   })

//   it('Go to home page', () => {
//     rerender();
//     const menuItem = screen.getByTestId('link-home');
//     userEvent.click(menuItem);
//     expect(screen.getByText(/Реализовать CRUD Web приложение используя React/i)).toBeInTheDocument();    
//   })
// });


// describe('axios', () => {
//   it('Fetch albums', async() => {
    
//       const albums = [
//         {
//           id: 1,
//           title: "quidem molestiae enim",
//           userId: 1
//         }, 
//         {
//           id: 2,
//           title: "sunt qui excepturi placeat culpa",
//           userId: 1
//         }
//       ]
      
//       axios.get.mockResolvedValueOnce({data: {albums: albums}})
//       const { findByRole, getByTestId, getByRole } = rerender();
  
      
//       act(() => {
//       const menuItem = getByTestId('link-albums');
//       userEvent.click(menuItem);
  
//       const menu = getByRole('menu');
//       expect(menu).toBeInTheDocument(); 
//       expect(axios.get).toHaveBeenCalledTimes(1);
//       screen.debug();
//     })
   

    // return findByRole(screen, 'list-item')
    // .then((items) => {
    //   expect(items).toHaveLength(2);
    // })
    // .catch(() => {
    //   console.log('not found');
    //   screen.debug();
    // })
    

    // const items = await screen.findByRole(menu, 'menu-item');
    // screen.debug();
    // expect(items).toHaveLength(3);
//   })
// })
