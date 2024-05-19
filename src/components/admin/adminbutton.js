import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './AdminButton.css';

const AdminButton = () => {
    const navigate = useNavigate();

    const handleAdminRedirect = () => {
        navigate('/admin/listproducts');
    };

    return (
        <button className="admin-button" onClick={handleAdminRedirect}>
            Admin
        </button>
    );
};

export default AdminButton;
