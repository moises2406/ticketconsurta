import { useEffect, useState } from 'react'
import {socket} from '../socket'
import { onConnect, onDisconnect, onFooEvent } from '../socketConnet';
import { QRCode } from 'react-qrcode-logo';
import { useNavigate } from 'react-router-dom';

export default function QRcode() {
  // navigate
  const navigate = useNavigate();

  const [isQr,setQr] = useState<string>('')
  useEffect(() => {
    socket.on('connect', () => {
      const res = onConnect();
      console.log(res);
    });
    socket.on('disconnect', () => {
      const res = onDisconnect();
      console.log(res);
    });
    socket.on('foo', onFooEvent);
    socket.on('qr', (qr) => {
      setQr(qr);
    });
    socket.on('ready', (msg:string) => {
      if (msg === 'ready') {
       navigate('/Notification')
      }
    });
  }, [navigate])
  if (isQr) {
    return (
      <div className="flex justify-center items-center h-screen">
        <QRCode
          value={isQr}
          size={256}
          bgColor="#FFFFFF"
          fgColor="#000000"
        />
      </div>
    );
  } else {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center items-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div>
        </div>
      </div>
    );
  }
  

}
