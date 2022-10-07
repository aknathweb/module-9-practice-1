import './App.css';
import Home from './components/Home/Home';
import About from './components/About/About';
import Products from './components/Products/Products';
import Friends from './components/Friends/Friends';
import FriendDetails from './components/FriendDetails/FriendDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';
import Main from './layout/Main';
import { createBrowserRouter, Route, RouterProvider, Routes } from 'react-router-dom';

function App() {

  //another way to crate route
  {/* 
  <Routes>
    <Route path='/' loader={async()=>{return fetch('https://jsonplaceholder.typicode.com/users');}} element={<Home></Home>}></Route>
  </Routes> 
*/}

  //react-router function use to create route
  const router = createBrowserRouter([
    {
      path: '/',
      //parent path is static for all children 
      element: <Main></Main>,// Main component from layout
      //children for show dynamic change base on path
      children: [
        { path: '/', element: <Home></Home> },
        { path: 'home', element: <Home></Home> },
        { path: 'products', element: <Products></Products> },
        {
          path: 'friends',
          // react-router>>> loader >> for fetch api >> data use permission only for loader using element
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users');
          },
          element: <Friends></Friends>
        },
        {
          // ':friendId' for set dynamic path without ':', path will be static
          // 'friendId' indicate as a variable '/friend/{all values as friendId}'
          path: '/friend/:friendId',
          // react-router>>> loader >> for fetch api >> data use permission only for loader using element
          // params to find ':' after value
          loader: async ({ params }) => {
            console.log(params)
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          },
          element: <FriendDetails></FriendDetails>
        },
        {
          path: 'posts',
          // react-router>>> loader >> for fetch api >> data use permission only for loader using element
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/posts')
          },
          element: <Posts></Posts>
        },
        {
          path: '/post/:postId',
          // react-router>>> loader >> for fetch api >> data use permission only for loader using element
          // params to find ':' after value
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
          },
          element: <PostDetails></PostDetails>
        }
      ]
    },
    { path: 'about', element: <About></About> },
    //another path which is not use or declare those path indicate by '*'
    { path: '*', element: <div>This route not found: 404</div> }
  ])
  return (
    <div className="App">
      {/* react-router create route to use*/}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
