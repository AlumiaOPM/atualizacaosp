/* import React from "react";
import './index.css'


// import { Container } from './styles';

function PopupDiscount() {
  return (
    <div className="footer-popup">

    <div className="popup-content">
        <div className="popup-img">
            <img src=""/>
        </div>
        <div className="popup-text">
            <p className="firtText">10% de desconto para matrículas antecipadas</p>
            <p className="secondText">VÁLIDO ATÉ 15/12</p>
        </div>
        <div className="closeBtn">
        <button onclick={addEventListener(event, ()=>{
            
            console.log("foi fi")
        })
            }>X</button>
        </div>
    </div>
</div>
  );
}

export default PopupDiscount; */
import React from 'react';
import Provider from '../Provider';

import { Link, Button } from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { AiOutlineGift } from 'react-icons/ai'

import './index.css';

export default function PopupDiscount() {
    const [isDrawerVisible2, setIsDrawerVisible2] = React.useState(false);




    React.useEffect(() => {


        setIsDrawerVisible2(true);

    }, []);

    const handleClick2 = event => {

        setIsDrawerVisible2(false);
    }

    return (

        <div className="footer-popup" style={{ transform: `translateY(${isDrawerVisible2 ? '0%' : '150%'})` }}>

            <div className="popup-content">
                
                    <AiOutlineGift style={{color:'white', height:"auto", width:"80px"}}/>
                
                <div className="popup-text">
                    <p className="firtText">10% de desconto para matrículas antecipadas</p>
                    <p className="secondText">VÁLIDO ATÉ 15/12</p>
                </div>

            </div>
            <div className="closeBtn">
            
                <button onClick={handleClick2}>X</button>
            </div>
        </div>
    )
}



