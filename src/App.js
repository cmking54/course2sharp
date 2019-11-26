import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import VideoPlayer from './Video/VideoPlayer';
import { Container, Row, Col } from 'react-bootstrap';

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
  nl: 'https://www.youtube.com/watch?v=wDGDMRIJA1A'
};

function App() {
  const [current_data, setCurrentData] = useState({
    title: `Lesson ${5}: ${'OOP and other crimes'}`, 
    url: sources.nl
  });
  return (
    <div>
       <NavBar />
       <Container>
         <Row>
           <Col className="text-center">
           <h2 className="py-2">{current_data.title}</h2>
           </Col>
         </Row>
        <Row>
          {/* top row */}
          <Col xs={1}></Col>
          <VideoPlayer url={current_data.url}/>
          <Col xs={1}></Col>
        </Row>
        <Row>
          {/* bot row */}
          <Placeholder name="user interaction" h="50vh"/>
        </Row> 
      </Container>
    </div>
  );
}
function Placeholder({name, c, h, w}) {
  const divStyle = {
    height: h,
    width: w
  };
  return (<Col className={"text-center border " + c} style={divStyle}>Space for {name}</Col>);
}

export default App;
