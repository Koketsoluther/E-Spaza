import React, {useState, useEffect} from 'react'
import './managestock.css'
import axios from "axios"
import {toast} from "react-toastify"

const manage = () => {
    const url = "http://localhost:4000"
    const [list,setList] = useState([]);

    const fetchList =async () => {
        const response =await axios.get(`${url}/api/products/list`);

        if(response.data.success){
            setList(response.data.data)
        }
        else{
            toast.error("error")
        }
    }

    const exportPDF = async (item) => {
        const items = await fetchList();
        if (items.length === 0) return;
          const doc = new jsPDF(item);
          
          doc.text(`Number of Products: ${items.length}`, 10, 10);
          let row1 = 60;
          items.forEach((item) => {
            doc.text(item.NAME, 10, row1);
            row1 += 10;
          });
          
          doc.save(`Manage_stock.pdf`);
        
      }
    
    useEffect(()=>{
        fetchList();
    },[])
    return (
        <div className='list add flex-col'>
            <p>All product list</p>
            <div className='list-table'>
                <div className = "list-table-format title">
                    <b>Image</b>
                    <b>Name</b>
                    <b>Category</b>
                    <b>Quantity</b>
                </div>
                {list.map((item,index)=>{
                    return (
                       <div key={index} className='list-table-format'>
                            <img src={`${url}/images/`+item.IMAGE} alt = "" />
                            <p>{item.NAME}</p>
                            <p>{item.CATEGORY}</p>
                            <p>${item.QUANTITY}</p>
                            
                        </div>
                    )
                })}
            </div>
            <button onClick={() => exportPDF(item)}>Export as PDF</button>
        </div>
    )
}

export default manage