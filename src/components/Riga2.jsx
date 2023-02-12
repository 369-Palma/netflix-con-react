/* import { Component } from "react";
import { Container, Row, Card, Col } from "react-bootstrap"; */
/* import CardTemplate from "./CardTemplate"; */

/* class PhotoGallery2 extends Component {
  state = {
    movies: [],
  };

  fetchDataMovies = async () => {
    try {
      let res = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=d8d3090e&s=orphan%20black"
      );
      if (res.ok) {
        const data = await res.json();
        this.setState({ movies: data.Search });
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
    console.log(this.fetchDataMovies());
    this.fetchDataMovies();
  }

  render() {
    return (
      <Container>
        <Row>
          {this.state.movies
            .filter((film) => {
              return film.Type !== "game" && film.Poster !== "N/A";
            })
            .map((film, index) => {
              return (
                <Col xs={6} md={2} key={index}>
                  <Card className="text-bg-dark">
                    <Card.Img variant="top" src={film.Poster} />
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

export default PhotoGallery2; */
