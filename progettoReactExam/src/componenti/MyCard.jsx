import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './MyCard.css';

function MyCard() {
    return (
      <div className="container">
        <Card className="card card1">
          <Card.Body>
            <Card.Title style={{color:'#333', fontWeight:'bold'}}>Professori</Card.Title>
            <Card.Text>
              Visualizza elenco di tutti i Professori presenti nell'Accademia.
            </Card.Text>
            <Button variant="primary" href="/professori">Visualizza</Button>
          </Card.Body>
        </Card>
  
        <Card className="card card2">
          <Card.Body>
          <Card.Title style={{color:'#333', fontWeight:'bold'}}>Professori Associati</Card.Title>
            <Card.Text>
              Visualizza elenco di tutti i Professori Associati nell'Accademia.
            </Card.Text>
            <Button variant="primary" href="/associati">Visualizza</Button>
          </Card.Body>
        </Card>
  
        <Card className="card card3">
          <Card.Body>
          <Card.Title style={{color:'#333', fontWeight:'bold'}}>Professori Ordinari</Card.Title>
            <Card.Text>
              Visualizza elenco di tutti i Professori Ordinari nell'Accademia.
            </Card.Text>
            <Button variant="primary" href="/ordinari">Visualizza</Button>
          </Card.Body>
        </Card>
  
        <Card className="card card4">
          <Card.Body>
          <Card.Title style={{color:'#333', fontWeight:'bold'}}>Ricercatori</Card.Title>
            <Card.Text>
              Visualizza elenco di tutti i Ricercatori nell'Accademia.
            </Card.Text>
            <Button variant="primary" href="/ricercatori">Visualizza</Button>
          </Card.Body>
        </Card>
      </div>
    );
  }

export default MyCard;
