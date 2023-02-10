import Card from "react-bootstrap/Card";

function CardTemplate() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src="" alt="titolo" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardTemplate;
