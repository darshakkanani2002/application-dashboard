import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Button } from 'react-bootstrap';
export default function MainSidebar() {
    const [show, setShow] = useState(false);
    const [activeMenu, setActiveMenu] = useState(() => {
        return sessionStorage.getItem('activeProject') || 'dailyquates';
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
        sessionStorage.setItem('activeProject', menu); // Save the active menu to localStorage
        handleClose(); // Close the offcanvas when an item is selected
    };
    return (
        <div>
            <>
                <Button variant="primary" onClick={handleShow} className="mb-3 d-md-none sidebar-toggel-button">
                    <i className="fa-solid fa-bars"></i>
                </Button>

                <div className="sidebar d-none sidebar-menu-display">
                    <h2><span className='fw-bold'>Project Name</span></h2>
                    <ul className="side-menu">
                        <li className={`my-2 ${activeMenu === 'dailyquates' ? 'active' : ''}`}>
                            <Link to="/" className='nav-link active' onClick={() => handleMenuClick('dailyquates')}>
                                <i class="fa-solid fa-1 sidebar-icon"></i>.
                                Daily Quates
                            </Link>
                        </li>
                        <li className={`my-2 ${activeMenu === 'invitation' ? 'active' : ''}`}>
                            <Link to="/invitation" className='nav-link' onClick={() => handleMenuClick('invitation')}>
                                {/* <i className="fa-solid fa-signs-post me-3 sidebar-icon"></i> */}
                                {/* <i className="fa-solid fa-layer-group me-3 sidebar-icon"></i> */}
                                <i class="fa-solid fa-2 sidebar-icon"></i>.
                                Invitation Post
                            </Link>
                        </li>
                        {/* <li className={`my-2 ${activeMenu === 'post' ? 'active' : ''}`}>
                            <Link to="/post" className='nav-link' onClick={() => handleMenuClick('post')}>
                                <i className="fa-solid fa-signs-post me-3 sidebar-icon"></i>
                                Post
                            </Link>
                        </li> */}
                    </ul>
                </div>

                <Offcanvas show={show} onHide={handleClose} className="d-md-none">
                    <Offcanvas.Header closeButton>
                        <h2>Daily Quates</h2>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="side-menu">
                            <li className={`my-3 ${activeMenu === 'language' ? 'active' : ''}`}>
                                <Link to="/dailyquates" className='nav-link' onClick={() => handleMenuClick('dailyquates')}>
                                    Daily Quates
                                </Link>
                            </li>
                            <li className={`my-3 ${activeMenu === 'category' ? 'active' : ''}`}>
                                <Link to="/invitation" className='nav-link' onClick={() => handleMenuClick('invitation')}>
                                    Invitation Post
                                </Link>
                            </li>
                            {/* <li className={`my-2 ${activeMenu === 'post' ? 'active' : ''}`}>
                                <Link to="/post" className='nav-link' onClick={() => handleMenuClick('post')}>
                                    Post
                                </Link>
                            </li> */}
                        </ul>
                    </Offcanvas.Body>
                </Offcanvas>
            </>
        </div>
    )
}
