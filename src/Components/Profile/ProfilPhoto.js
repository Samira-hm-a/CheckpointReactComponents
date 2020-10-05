import React from 'react';
import ProfilPhot from "./../../Assets/profilphoto.jpg"
import  './../css/Main.css'


function ProfilPhoto(){
    return (
        <div className="ProfPhoto">
            <img src={ProfilPhot} alt='Profil Photo' style={{ width:'250px', borderStyle:'white', borderRadius:'15px'}}/>
        </div>
    );
};
export default ProfilPhoto;