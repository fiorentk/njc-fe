"use client";
import { QRCodeCanvas } from "qrcode.react";

interface CopyButtonProps {
  link: string;
}

function QR({ link }: CopyButtonProps) {
  return (
    <div>
      <div className="bg-posBlue p-2 max-w-max flex rounded-md">
        <QRCodeCanvas
          value={link}
          size={150}
          fgColor="#ffffff"
          bgColor="#1B2C5B"
        />
      </div>
    </div>
  );
}

export default QR;
