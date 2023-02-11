import { Component } from "react";
import { Container, Row, Card, Col } from "react-bootstrap";
/* import CardTemplate from "./CardTemplate"; */

class PhotoGallery extends Component {
  state = {
    movies: [],
  };

  fetchDataMovies = async () => {
    try {
      let res = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=d8d3090e&s=harry%20potter"
      );
      if (res.ok) {
        const data = await res.json();
        this.setState({ movies: data });
        console.log(this.state.movies);
      } else {
        alert("Ops, c'è stato un errore!");
      }
    } catch (error) {
      alert(
        "Qualcosa è andato storto durante la chiamata al server. Tipo di errore:",
        error
      );
    }
  };

  componentDidMount() {
    this.fetchDataMovies();
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.movies.map((film, index) => {
            return (
              <Col xs={12} md={4} key={index}>
                <Card>
                  <Card.Img variant="top" src={film.Cover} />
                  <Card.Body>
                    <Card.Title>{film.Title}</Card.Title>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </Container>
    );
  }
}

export default PhotoGallery;
