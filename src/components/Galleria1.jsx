/* import CardTemplate from "./CardTemplate";
 */ import { Row } from "react-bootstrap";

const Galleria = (props) => {
  return (
    <>
      <h4> {props.title} </h4>
      <Row>
        {/* {data.map(movie => {return
                 <CardTemplate key = {props.imdbID}
                 movie={props.movie.imdbID}/>
                 })}
                 */}
      </Row>
    </>
  );
};

export default Galleria;
