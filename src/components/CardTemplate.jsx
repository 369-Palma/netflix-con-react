import Card from "react-bootstrap/Card";

function CardTemplate(props) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src={props.movie.Poster}
        alt={props.movie.Title}
      />
      <Card.Body>
        <Card.Title>{props.movie.title}</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CardTemplate;
