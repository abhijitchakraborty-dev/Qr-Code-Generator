import { useState } from "react";
import QRCode from "react-qr-code";
import "./style.css"
export default function QRCodeGenerator() {
    const [qrcode, setqrvalue] = useState('')
    const [input, setinput] = useState('')
    function handlegenerateqrcode() {
        setqrvalue(input)
    }
    return (
        <div>
            <h1>Your QRCodeGenerator</h1>
            <div className="firstdiv">
                <input className="in" onChange={(e) => setinput(e.target.value)} type="text" name="qr-code" placeholder="Type your Name" />
                <button className="btn" disabled={input && input.trim !== '' ? false : true} onClick={handlegenerateqrcode}>Generate your QR Code</button>
            </div>
            <div className="seconddiv">
                <QRCode id="qr-value" value={qrcode} size={350} bgColor="white" color="black" />
            </div>
        </div>
    )
}

