import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas, Button } from 'react-bootstrap';

export default function InvitationSidebar() {
    const [show, setShow] = useState(false);
    const [activeMenu, setActiveMenu] = useState(() => {
        return sessionStorage.getItem('activeMenu') || 'invitationcategory';
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
                <Button variant="primary" onClick={handleShow} className="mb-3 d-md-none">
                    <i className="fa-solid fa-bars"></i>
                </Button>

                <div className="px-3 d-none d-md-block w-100 invitation-sidebar">
                    <ul className="side-menu d-flex">
                        <li className={`my-2 mx-2 ${activeMenu === 'invitationcategory' ? 'active' : ''}`}>
                            <Link to="/invitationcategory" className='nav-link' onClick={() => handleMenuClick('invitationcategory')}>
                                <i className="fa-solid fa-layer-group me-3 sidebar-icon"></i>
                                Category
                            </Link>
                        </li>
                        <li className={`my-2 mx-2 ${activeMenu === 'invitationpost' ? 'active' : ''}`}>
                            <Link to="/invitationpost" className='nav-link' onClick={() => handleMenuClick('invitationpost')}>
                                <i className="fa-solid fa-signs-post me-3 sidebar-icon"></i>
                                Post
                            </Link>
                        </li>
                    </ul>
                </div>

                <Offcanvas show={show} onHide={handleClose} className="d-md-none">
                    <Offcanvas.Header closeButton>
                        <h2>Crafto</h2>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="side-menu">
                            <li className={`my-3 ${activeMenu === 'invitationcategory' ? 'active' : ''}`}>
                                <Link to="/invitationcategory" className='nav-link' onClick={() => handleMenuClick('invitationcategory')}>
                                    Category
                                </Link>
                            </li>
                            <li className={`my-3 ${activeMenu === 'invitationpost' ? 'active' : ''}`}>
                                <Link to="/invitationpost" className='nav-link' onClick={() => handleMenuClick('invitationpost')}>
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
