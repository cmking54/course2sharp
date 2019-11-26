import React from 'react';
import { Col } from 'react-bootstrap';
import ReactPlayer from 'react-player';

const VideoPlayer = ({url}) => {
    return (
        <Col>
            <ReactPlayer //TODO: explore config
            // TODO: make player fit to video / be large enough to show vid at original aspect ratio
                url={url}
                controls
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