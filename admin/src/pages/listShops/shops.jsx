import React, {useState, useEffect} from 'react'
import './shops.css'
import axios from "axios";
import jsPDF from "jspdf";
import {toast} from "react-toastify"

const List = () => {
    const url = "http://localhost:4000"
    const [list,setList] = useState([]);

    const fetchList =async () => {
        const response =await axios.get(`${url}/api/shops/list`);

        if(response.data.success){
            setList(response.data.data)
        }
        else{
            toast.error("error")
        }
    }

    const removeShop = async(ShopID) => {
        const response = await axios.post(`${url}/api/shop/remove`,{id:ShopID});
        await fetchList();
        if (response.data.success){
            toast.success(response.data.message)
        }
        else{
            toast.error("Error")
        }
    }
    
    
      const getOrderList = async (shopId) => {
        try {
          const response = await axios.get(`${url}/api/orders/list`, { params: { shopId } });
          if (response.data.success) {
            return response.data.data;
          } else {
            toast.error('Error fetching orders list');
            return [];
          }
        } catch (error) {
          toast.error('Error fetching orders list');
          return [];
        }
      };

      const getStaffList = async (shopId) => {
        try {
          const response = await axios.get(`${url}/api/staff/list`, { params: { shopId } });
          if (response.data.success) {
            return response.data.data;
          } else {
            toast.error('Error fetching orders list');
            return [];
          }
        } catch (error) {
          toast.error('Error fetching orders list');
          return [];
        }
      };
    
    
      const exportPDF = async (shop) => {
        const shopHistory = await getShopHistory(shop._id);
        const orders = await getOrderList(shop._id);
        const staff = await getStaffList(shop._id);
        if (staff.length ===0 || orders.length === 0) return;

    
          const doc = new jsPDF();
          doc.text(`Shop Name: ${shop.NAME}`, 10, 10);
          doc.text(`Address: ${shop.ADRESS}`, 10, 20);
          doc.text(`Owner: ${shop.OWNER}`, 10, 30);
          doc.text(`Number of Orders: ${orders.length}`, 10, 40);
          let row1 = 60;
          orders.forEach((order) => {
            doc.text(order.detail, 10, row1);
            row1 += 10;
          });
          doc.text(`Staff: ${staff.length}`, 10, 50);
          let row = row1 + 10;
          staff.forEach((staff) => {
            doc.text(staff.name, 10, row);
            row += 10;
          });
          doc.save(`${shop.NAME}_Shop_History.pdf`);
        
      }

    useEffect(()=>{
        fetchList();
    },[])

    

    return (
        <div className='list add flex-col'>
            <p>All Shops list</p>
            <div className='list-table'>
                <div className = "list-table-format title">
                    <b>Name</b>
                    <b>Address</b>
                    <b>Owner</b>
                    <b>Report</b>
                    <b>Action</b>
                </div>
                {list.map((shop,index)=>{
                    return (
                       <div key={index} className='list-table-format'>
                            <p>{shop.NAME}</p>
                            <p>{shop.ADRESS}</p>
                            <p>${shop.OWNER}</p>
                            <p onClick={()=>exportPDF(shop)} className='cursor'>R</p>
                            <p onClick={()=>removeShop(shop._id)} className='cursor'>X</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default List