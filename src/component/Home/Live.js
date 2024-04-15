import { useState,useEffect,React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
function Recent(){
       // eslint-disable-next-line
       const [data,setData]=useState([]);
       const [records,setRecords]=useState([]);
       const [error, setError] = useState(null);
        const Filter =(data)=>{
                setRecords(data.filter((f)=>f.position.includes("live")));
              }
                         let c=1;
       useEffect(
           () => {
               fetch('http://localhost:4000/todo')
                 .then((res) => {
                
                   return res.json();
                 })
                 .then((data) => {
                    setData(data);
                    Filter(data);
                    
                 })
             }, [data]
       )
      const deleteLive=async(itemId)=>{
        try{
         const response=await fetch(`http://localhost:4000/todo/${itemId}`,{
          method:'DELETE'
         })
         if (response.ok) {
          setData(data.filter((item) => item.id !== itemId));
          alert("One live schedule is deleted...");
        } else {
          setError(`Error deleting item with ID ${itemId}`);
        }
  
        }catch(err){
          console.log(err);
          setError(error.message);
        }  
          }
return(
    
    <div className='content'>
 <table className="table">
        <thead>
          <tr>
            <th scope="col">Sr. No</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Work</th>
            <th scope="col">Level</th>
            <th scope="col">Position</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
    {records.map((data,index)=>(
        <tbody  key={index}>
          <tr>
            <th scope="row">{c++}</th>
            <td>{data.startTime}</td>
            <td>{data.endTime}</td>
            <td>{data.work}</td>
            <td>{data.level}</td>
            <td>{data.position}</td>
            <td type="button"className='button'  
            onClick={()=>deleteLive(data._id)}><FontAwesomeIcon icon={faTrash} /></td>
          </tr>
        </tbody>
    ))}
    </table>
    </div>
)
}
export default Recent;