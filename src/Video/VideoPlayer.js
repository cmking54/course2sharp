import React from 'react';
import { Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const VideoPlayer = ({url}) => {
    return (
        <Col>
            <ReactPlayer
                url={url}
                width='100%'
                // height='100%'
                // config={{
                //     youtube: {
                //         playerVars: { showinfo: 1 }
                //     },
                //     facebook: {
                //         appId: '12345'
                //     }
                // }}
            />
        </Col>
    );
};
export default VideoPlayer;