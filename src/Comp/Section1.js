import {adder} from './Cart.js';

function Section1() {
    return(
        <div className="secdisplay">
            <ul>
                <h4>MILKSHAKE</h4>
                <li>
                    BLACKCURRENT
                    <button id="addb1" value={50} onClick={adder("addb1","Blackcurrent")}>Add</button>
                </li>
                <li>
                    BLUEBERRY
                    <button id="addb2" value={40} onClick={adder("addb2","Blueberry")}>Add</button> 
                </li>
                <li>
                    OREO
                    <button id="addb3" value={70} onClick={adder("addb3","Oreo")}>Add</button> 
                </li>
            </ul>
            <ul>
                <h4>COFFEE</h4>
                <li>
                    HOT COFFEE
                    <button id="addb4" value={60} onClick={adder("addb4","Hot Coffee")}>Add</button> 
                </li>
                <li>
                    COLD COFFEE
                    <button id="addb5" value={70} onClick={adder("addb5","Cold Coffee")}>Add</button> 
                </li>
                <li>
                    CAPUCINNO
                    <button id="addb6" value={80} onClick={adder("addb6","Capucinno")}>Add</button> 
                </li>
            </ul>
            <ul>
                <h4>JUICE</h4>
                <li>
                    WATERMELON
                    <button id="addb7" value={100} onClick={adder("addb7","Watermelon")}>Add</button> 
                </li>
                <li>
                    APPLE
                    <button id="addb8" value={80} onClick={adder("addb8","Apple")}>Add</button> 
                </li>
                <li>
                    MANGO
                    <button id="addb9" value={60} onClick={adder("addb9","Mango")}>Add</button> 
                </li>
            </ul>
        </div>
    )
}


export default Section1;