import { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CardTemplate from "./CardTemplate";

class PhotoGallery extends Component {
  state = {
    movies: [],
  };

  fetchDataMovies = async () => {
    try {
      let res = await fetch(
        `http://www.omdbapi.com/?i=tt3896198&apikey=d8d3090e&s=${this.props.titolo}`
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
        <Row className="d-flex flex-md-nowrap">
          {this.state.movies
            .filter((film) => {
              return film.Type !== "game" && film.Poster !== "N/A";
            })
            .map((film, imdbID) => {
              return (
                <Col xs={6} md={2} key={imdbID}>
                  <CardTemplate movie={film} />
                </Col>
              );
            })}
        </Row>
      </Container>
    );
  }
}

export default PhotoGallery;
