import React from 'react';
import { Button } from 'react-bootstrap';

const SandBoxTrigger = ({sb_switch}) => {
    return (
        <Button variant="dark" onClick={() => { sb_switch[1](!sb_switch[0])}}>
            Have A Question?
        </Button>
    );
};
export default SandBoxTrigger;