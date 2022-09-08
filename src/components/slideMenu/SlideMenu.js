import React, { useState } from 'react'
import { TbDeviceHeartMonitor } from 'react-icons/tb';
import { ImLab  } from 'react-icons/im';
import { VscGraphLine, VscNoNewline  } from 'react-icons/vsc';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import {Link} from 'react-router-dom'
import './slideMenu.css'

const SlideMenu = () => {
    const [show, setShow] = useState (false)
    
    
  return (
    <div className='nav-menu'>
        {show
                        ? <RiCloseLine color="#000" size={27} onClick={() => setShow(false)} />
                        : <RiMenuLine color="#000" size={27} onClick={() => setShow(true)} />}
                    {show && (
                        <div className="nav-menu-container scale-up-center">
                        <div className='slideMenu-holder'>
                            <div className='slideMenu-body'>
                                <div className='slideMenu-item'>
                                    <TbDeviceHeartMonitor color='#000' size={27}/>
                                    <Link to="/"><p>Dashboard</p>
                                    </Link>
                                </div>
                                <div className='slideMenu-item'>
                                    <ImLab color='#000' size={26}/>
                                    <Link to="/exp-list">{show && <p>Experiment List</p>}
                                    </Link>
                                </div>
                                <div className='slideMenu-item'>
                                    
                                    <VscGraphLine color='#000' size={27}/>
                                    <Link to="/experiment">{show && <p>Experiment</p>}
                                    </Link>
                                </div>
                            </div>
                        </div>
                        </div>
                    )}
    
    </div>
  )
}

export default SlideMenu