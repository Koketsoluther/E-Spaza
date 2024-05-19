import React from 'react'
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill}
 from 'react-icons/bs'
 import 
 { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } 
 from 'recharts';
 import './dashboard.css'

function Home() {
    const data = [
        {
          name: 'Spaza 1',
          staff: 10,
          orders: 24,
          amt: 2400,
        },
        {
          name: 'Spaza 2',
          staff: 5,
          orders: 10,
          amt: 2210,
        },
        {
          name: 'Spaza 3',
          staff: 10,
          orders: 2,
          amt: 2290,
        }
        
      ];
return (
    <main className='main-container'>
        <div className='main-title'>
            <h3>DASHBOARD</h3>
        </div>

        <div className='main-cards'>
            <div className='card'>
                <div className='card-inner'>
                    <h3>PRODUCTS</h3>
                    <BsFillArchiveFill className='card_icon'/>
                </div>
                <h1>300</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>Shops</h3>
                    <BsFillGrid3X3GapFill className='card_icon'/>
                </div>
                <h1>3</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>CUSTOMERS</h3>
                    <BsPeopleFill className='card_icon'/>
                </div>
                <h1>33</h1>
            </div>
            <div className='card'>
                <div className='card-inner'>
                    <h3>ALERTS</h3>
                    <BsFillBellFill className='card_icon'/>
                </div>
                <h1>42</h1>
            </div>
        </div>
        <div className='charts'>
            <ResponsiveContainer width="100%" height="100%">
            <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="staff" fill="#8884d8" />
                <Bar dataKey="orders" fill="#82ca9d" />
                </BarChart>
            </ResponsiveContainer>
            </div>
        </main>
  )
}

export default Home