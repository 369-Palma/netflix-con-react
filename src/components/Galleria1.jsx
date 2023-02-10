import CardTemplate from "./CardTemplate";
import { Col, Row } from "react-bootstrap";

const Galleria = (props) => {
  const movieToShow = async () => {
    try {
      let res = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=d8d3090e&s=harry%20potter"
      );
      if (res.ok) {
        let data = await res.json();
        console.log(data);
        return (
          <>
            <h4> {props.title} </h4>
            <Row>
              <Col>
                <CardTemplate></CardTemplate>
              </Col>
            </Row>
          </>
        );
      }
    } catch (error) {
      alert(
        `Ops...qualcosa è andato storto durante la chiamata. Tipo di errore:`,
        error
      );
    }
  };
};

export default Galleria;
