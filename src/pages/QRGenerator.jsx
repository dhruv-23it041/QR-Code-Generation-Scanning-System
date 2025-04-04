import React, { useState } from 'react';
import QRCode from 'qrcode';

const QRCodeGenerator = () => {
    const [text, setText] = useState('');
    const [qrCode, setQrCode] = useState('');

    const generateQRCode = async () => {
        try {
            const qr = await QRCode.toDataURL(text);
            setQrCode(qr);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div>
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            <button onClick={generateQRCode}>Generate QR Code</button>
            {qrCode && <img src={qrCode} alt="QR Code" />}
        </div>
    );
};

export default QRCodeGenerator;