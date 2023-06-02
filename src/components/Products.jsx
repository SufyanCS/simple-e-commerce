import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar,faTruckFast } from '@fortawesome/free-solid-svg-icons';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
      .catch(error => console.error(error));
  }, []);
  const generateStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      if (i < rating) {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-warning" />);
      } else {
        stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-secondary" />);
      }
    }
    return stars;
  };
  return (
<div className='flex flex-col justify-between mt-[6vw] m-1 m-sm-5'>
  <Row xs={2} sm={2} md={3} lg={4} className="g-1 g-sm-4">
    {products.map((product) => (
      <Col key={product.id} href={`/item/${product.id}`}>
        <Card className='h-100'>
          <div className='w-75 mx-auto mt-4'>
            <Card.Img src={product.image} alt={product.title} style={{ objectFit: 'contain', height: '200px' }} />
          </div>
          <Card.Body className='d-flex flex-column'>
<Card.Title className='h-25 fs-5 fs-lg-6'>{product.title.slice(0, 50)}..</Card.Title>  <h6 className='mt-3 mb-2'>{product.category}</h6>
  <hr />
  <div className='d-flex flex-column flex-sm-row justify-content-between'>
    <h5 className='font-weight-bolder-sm font-weight-bold'>{product.price} $</h5>
    <div className="mb-2">{generateStars(product.rating.rate)}<span className='m-1'>({product.rating.count})</span></div>
  </div>
  <div className='mt-auto'>
    <h6 className='mt-2'>
      <FontAwesomeIcon icon={faTruckFast} className='mx-1'/>
      Free Shipping
    </h6>
  </div>
</Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
</div>
  );
}