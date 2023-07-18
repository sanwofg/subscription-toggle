import { useState } from "react"
import 'bootstrap/dist/css/bootstrap.css';
// import './index.css';
function Body(){
    const [price, setPrice] =useState(true)

    function change(){
        setPrice(!price);
    }
    return(
        <div className='poll'> 

            <p className="pricing">Our Pricing</p>

            <div><button className="subscribe" onClick={change}>{price ? 'Monthly': 'Annualy'}</button></div>

            <div className="first">
        
                <div className="rows top-row">
                    <div className="stacks col-lg-4">                    <p className="basic">Basic</p>
                        <p className="contents2">$<span className="price">{price? 19.99 : 199.99}</span></p>
                        <p className="contents">500 GB Storage</p>
                        <p className="contents">2 Users Allowed</p>
                        <p className="contents">Send up to 3 GB</p>
                        <button className={price? "button": "button2"}>LEARN MORE</button>
                    </div>
                    <div className=" stacks-mid col-lg-4">
                        <p className="basic2">Professional</p>
                        <p className="contents2">$<span className="price">{price? 24.99: 249.99}</span></p>
                        <p className="contents">1 TB Storage</p>
                        <p className="contents">5 Users Allowed</p>
                        <p className="contents">Send up to 10 GB</p>
                        <button className={price? "button-stack": "button3"}>LEARN MORE</button>
                    </div>
                    <div className="stacks col-lg-4">
                        <p className="basic">Master</p>
                        <p className="contents2">$<span className="price">{price? 39.99: 399.99}</span></p>
                        <p className="contents">2 TB Storage</p>
                        <p className="contents">10 Users Allowed</p>
                        <p className="contents">Send up to 20 GB</p>
                        <button className={price? "button": "button2"}>LEARN MORE</button>
                    </div>            
                </div>
            </div>
        </div>

    )
}

export default Body