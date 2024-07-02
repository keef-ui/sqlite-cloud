'use client'
import {useState} from "react";
import { Toaster ,toast } from "react-hot-toast";


const Editable = ({company}) =>{
    const [appear,setAppear] = useState(false);
    const [name,setName] = useState(company[1]);

    const HandleUpdatePost = async (name:any,id:any)=>{
       
        const resp = await fetch('http://localhost:3000/api/update',{
            method:'PUT',
            cache:'no-cache',
            body:JSON.stringify({
                'name':name,
                'CustomerId':id
            })
        })
        const response = await resp.json();
        
        if(response.data.length < 1){
            toast.error("No Data Found!",{
                duration : 1500,
                position:'top-center'
            })

           
        }
        else if(resp.status == 201){
            toast.success("Data Updated Successfully!",{
                duration : 1500,
                position:'top-center'
            })
            setTimeout(function(){ location.reload(); }, 1500);
            
        }

    }

    return (
        <>
{/* It'll change the state of appear to display the input field where we can update the data */}
        <button onClick={()=>setAppear(!appear)} className="bg-green-400 p-2 text-white">Update</button>
        
        {!appear ? '' : 
        
<div className="w-fit absolute bottom-[62%] left-[55%]">
{/* You will enter your new name here */}
            <input className="border border-black rounded-xl p-2 font-bold" type="text" onChange={(e)=>setName(e.currentTarget.value)} name="update_name" id="update_name" value={name}  />

{/* Onclicking this button, handleupdatepost method will be called and updated name and user_id will be sent to it as the param */}
            <button onClick={() => HandleUpdatePost(name,company[0])} className="px-8 py-2 bg-blue-800 text-white mt-2 rounded-full">
            Submit
            <Toaster />
          </button>
        </div>
        }
        </>
    )

}
export default Editable;