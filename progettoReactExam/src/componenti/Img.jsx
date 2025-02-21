import Image from 'react-bootstrap/Image';

function FluidExample() {
  return <div><Image src="accademia.jpg" fluid 
  style={{
    maxHeight: '300px',
    objectFit: 'cover',
    width: '100%',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  }}
  /></div>;
}

export default FluidExample;