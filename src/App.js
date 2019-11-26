import React, { useState } from 'react';
import './App.css';
import NavBar from './NavBar/NavBar';
import VideoPlayer from './Video/VideoPlayer';
import { Container, Row, Col } from 'react-bootstrap';
import SandBoxTrigger from './SandBox/SandBoxTrigger';

const sources = {
  sintelTrailer: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
  bunnyTrailer: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
  bunnyMovie: 'http://media.w3.org/2010/05/bunny/movie.mp4',
  test: 'http://media.w3.org/2010/05/video/movie_300.webm',
  nl: 'https://www.youtube.com/watch?v=wDGDMRIJA1A'
};

function App() {
  // TODO: DB fetching
  const [current_data, setCurrentData] = useState({ // TODO: Youtube Fetching
    title: `Lesson ${5}: ${'OOP and other crimes'}`, 
    url: sources.nl
  });
  const sandbox_switch = useState(false);
  const [is_sandbox_on, setSandboxToggle] = sandbox_switch;
  let view;
  if (is_sandbox_on) {
    view = null; // TODO: add sandbox (interactable scrshot)
  } else {
    view = <VideoPlayer url={current_data.url}/>
  }
  return (
    // TODO: make rows their own component
    <div>
       <NavBar />
       <Container>
         <Row>
           <Col className="text-center">
            <h2 className="py-2">{current_data.title}</h2>
           </Col>
         </Row>
        <Row className="">
          {/* vid row */}
          <Col xs={1}></Col>
          {view}
          <Col xs={1}></Col>
        </Row>
        <Row className="py-2">
          {/* interaction */}
          {/* <Placeholder name="user interaction" h="50vh"/> */}
          <Col xs={9}></Col>
          <Col className="">
            <SandBoxTrigger className="block" sb_switch={sandbox_switch}></SandBoxTrigger>
          </Col>
          <Col xs={1}></Col>

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
