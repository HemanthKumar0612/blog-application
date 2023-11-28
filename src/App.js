import React,{ useState } from 'react';
import './App.css';
import AddBlog from './components/AddBlog';

function App() {

  // Creating State variable blogs[]
  const [blogs,setBlogs] = useState([]);

  // Add Blog Handler
  const handleAddBlog = (newBlog) => {

    // console.log("Inside handleAddBlog");
    // console.log(newBlog);
    // Shorthand for adding blogs
    setBlogs((prevBlogs) => [...prevBlogs, newBlog]);
    console.log(blogs);
  }

  return (
    <div className="App">
      {/* Passing handleAddBlog function as a prop to AddBlog FC */}
      <AddBlog handleAddBlog = {handleAddBlog}></AddBlog>
    </div>

  );
}

export default App;
