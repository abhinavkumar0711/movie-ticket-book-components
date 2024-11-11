import QRCode from 'react-qr-code';

const QRCodeGenerator = ({ value='https://www.google.com', size = 300, bgColor = '#ffffff', fgColor = '#000000' }) => {
  return (
    <div className="flex justify-center items-center">
        <div className=' bg-white p-4 rounded-xl'>

      <QRCode
        value={value}
        size={size}
        bgColor={bgColor}
        fgColor={fgColor}
      />
        </div>
    </div>
  );
};

export default QRCodeGenerator;
