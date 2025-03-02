import React from 'react'
import hoverImage from '../imagenes/img_1.PNG'

function Tarjeta(){
return(
    <div>
        <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
            <div className="card" style={{ width: '15rem', marginRight: '3rem' }}>
                <img className="card-img-top" src={hoverImage} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make 
                        up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card" style={{ width: '15rem', marginRight: '3rem' }}>
                <img className="card-img-top" src={hoverImage} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make 
                        up the bulk of the card's content.</p>
                </div>
            </div>

            <div className="card" style={{ width: '15rem', marginRight: '3rem' }}>
                <img className="card-img-top" src={hoverImage} alt="Card image cap" />
                <div className="card-body">
                    <p className="card-text">Some quick example text to build on the card title and make 
                        up the bulk of the card's content.</p>
                </div>
            </div>
        </div>
    </div>    
    
)
        }
        
export default Tarjeta;