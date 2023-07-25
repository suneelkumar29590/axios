import {useEffect, useState} from 'react';
import axios from 'axios';



function App(){
const [blogslist, setblogslist] = useState([]);
const [selectedblog, setselectedblog]= useState(null);

useEffect(()=>{
  fetchblogs()
},[])

const fetchblogs= async ()=>{
  const api= "https://apis.ccbp.in/blogs"

  const response =await axios.get(api)  //fetching data from server or api

  setblogslist(response.data);
}

console.log(blogslist)




  return(
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
           <h1>blogs list</h1>
        </div>
        <ul className="col-12 col-md-4">
            {blogslist.map((blog)=>
              <div className='d-flex flex-row'>
                <img src={blog.image_url} alt={blog.title} className='w-50 mt-3'/>
                <div className='d-flex flex-column p-1 mt-2'>
                  <p>{blog.topic}</p>
                  <div className='d-flex'>
                    <img src={blog.avatar_url} alt={blog.author} className='avatar'/>
                    <p>{blog.author}</p>
                  </div>
                  
                </div>


              </div>
            )}
        </ul>

      </div>
       
    </div>
  )
}

export default App;