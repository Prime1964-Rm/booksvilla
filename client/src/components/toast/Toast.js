import React from 'react';
import Toast from 'react-bootstrap/Toast'

const BSToast = (props) => (
        <React.Fragment>
            <Toast show={true} 
            // onClose={toggleShowA}
                style={{width:"100vw",
            backgroundColor:"inherit"}}
            >
          <Toast.Header>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Bootstrap</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <Toast.Body>Logged In SuccessFully</Toast.Body>
        </Toast>
        </React.Fragment>
   );

export default BSToast;