import { useState,useEffect,React } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
function Failed(){
       // eslint-disable-next-line
       const [data,setData]=useState([]);
       const [records,setRecords]=useState([]);
       const [error, setError] = useState(null);
        let c=1;
       useEffect(
           () => {
               fetch('https://coding-samurai-server.onrender.com/todo')
                 .then((res) => {
                   return res.json();
                 })
                 .then((data) => {
                    setData(data);
                    Filter(data);

                 });
             }, [data]
       );
       const Filter =(data)=>{
                setRecords(data.filter(f=>f.position.includes("failed")))
      
       }
          const deleteRecent=async(itemId)=>{
          try{
           const response=await fetch(`https://coding-samurai-server.onrender.com/todo/${itemId}`,{
            method:'DELETE'
           })
           if (response.ok) {
            setData(data.filter((item) => item.id !== itemId));
            alert("One Recent data is deleted from list...");
          } else {
            setError(`Error deleting item with ID ${itemId}`);
          }
    
          }catch(err){
            console.log(err);
            setError(error.message);
          }  
            }
return(
    
<table className="table" >
        <thead>
          <tr >
            <th scope="col">Sr. No</th>
            <th scope="col">Start Time</th>
            <th scope="col">End Time</th>
            <th scope="col">Work</th>
            <th scope="col">Level</th>
            <th scope="col">Position</th>
          </tr>
        </thead>
    {records.map((data,index)=>(
     
        <tbody   key={index}>
          <tr>
            <th scope="row">{c++}</th>
            <td>{data.startTime}</td>
            <td>{data.endTime}</td>
            <td>{data.work}</td>
            <td>{data.level}</td>
            <td>{data.position}</td>
            <td type="button" 
            style={{background:"red",color:"white",borderRadius:"10px",margin:"5px"}} 
            className='button' onClick={()=>deleteRecent(data._id)}><FontAwesomeIcon icon={faTrash} /></td>
          </tr>
        </tbody>
        // 
    ))}
    </table>
  
)
}
export default Failed;