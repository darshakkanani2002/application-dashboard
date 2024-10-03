import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Button } from 'react-bootstrap';
export default function DailySidebar() {
    const [show, setShow] = useState(false);
    const [activeMenu, setActiveMenu] = useState(() => {
        return sessionStorage.getItem('activeMenu') || 'dailylanguage';
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        sessionStorage.setItem('activeMenu', menu); // Save the active menu to localStorage
        handleClose(); // Close the offcanvas when an item is selected
    };
    return (
        <div>
            <>
                <Button variant="primary" onClick={handleShow} className="mb-3 d-md-none sidebar-toggel-button">
                    <i className="fa-solid fa-bars"></i>
                </Button>

                <div className="px-3 d-none sidebar-menu-display w-100 z-3  daily-sidebar">
                    <ul className="side-menu d-flex">
                        <li className={`my-2 mx-2 ${activeMenu === 'dailylanguage' ? 'active' : ''}`}>
                            <Link to="/dailylanguage" className='nav-link active' onClick={() => handleMenuClick('dailylanguage')}>
                                <i className="fa-solid fa-language me-3 sidebar-icon"></i>Language
                            </Link>
                        </li>
                        <li className={`my-2 mx-2 ${activeMenu === 'dailycategory' ? 'active' : ''}`}>
                            <Link to="/dailycategory" className='nav-link' onClick={() => handleMenuClick('dailycategory')}>
                                {/* <i className="fa-solid fa-signs-post me-3 sidebar-icon"></i> */}
                                <i className="fa-solid fa-layer-group me-3 sidebar-icon"></i>Category
                            </Link>
                        </li>
                        <li className={`my-2 mx-2 ${activeMenu === 'dailypost' ? 'active' : ''}`}>
                            <Link to="/dailypost" className='nav-link' onClick={() => handleMenuClick('dailypost')}>
                                <i className="fa-solid fa-signs-post me-3 sidebar-icon"></i>
                                Post
                            </Link>
                        </li>
                    </ul>
                </div>

                <Offcanvas show={show} onHide={handleClose} className="d-md-none">
                    <Offcanvas.Header closeButton>
                        <h2>Daily Quates</h2>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="side-menu">
                            <li className={`my-3 ${activeMenu === 'dailylanguage' ? 'active' : ''}`}>
                                <Link to="/dailylanguage" className='nav-link' onClick={() => handleMenuClick('dailylanguage')}>
                                    Language
                                </Link>
                            </li>
                            <li className={`my-3 ${activeMenu === 'dailycategory' ? 'active' : ''}`}>
                                <Link to="/dailycategory" className='nav-link' onClick={() => handleMenuClick('dailycategory')}>
                                    Category
                                </Link>
                            </li>
                            <li className={`my-2 ${activeMenu === 'dailypost' ? 'active' : ''}`}>
                                <Link to="/dailypost" className='nav-link' onClick={() => handleMenuClick('dailypost')}>
                                    Post
                                </Link>
                            </li>
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        </div>
    )
}
