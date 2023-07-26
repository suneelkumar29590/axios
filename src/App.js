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
const onclickblogdetails=async(blogid)=>{
  const api=`https://apis.ccbp.in/blogs/${blogid}`
  const response=await axios.get(api);
  
  setselectedblog(response.data)


}

console.log(blogslist)
console.log(selectedblog);




  return(
    <div className="container">
      <div className="row">
        <div className="col-12 text-center">
           <h1>blogs list</h1>
        </div>
        <ul className="col-12 col-md-4 ">
            {blogslist.map((blog)=>
              <div className={`d-flex flex-row card mt-3 select ${selectedblog && selectedblog.id === blog.id ? "selected":''}`}
              onClick={((e)=>onclickblogdetails(blog.id))}>

                <img src={blog.image_url} alt={blog.title} className='w-50 image-author'/>
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
        <div className='col-md-8 card'>
         {selectedblog &&
         <div className='d-flex flex-column'>
          <h2>{selectedblog.title}</h2>
          <div className='d-flex justify-content-start align-items-center'>
            <img src={selectedblog.avatar_url} alt={selectedblog.author} className='avatar-img'/>
            <p>{selectedblog.author}</p>
          </div>
          <img src={selectedblog.image_url} alt={selectedblog.title} className='w-75 m-1'/>
          <p>{selectedblog.content}</p>
          
         </div>}

        </div>

      </div>
       
    </div>
  )
}

export default App;