import React from "react";

const Scroll = (props) =>{
    return(
        <div style={{overflowY: 'auto', height: '100vh', backgroundColor: '#f3f3f3', maxWidth: '1199px', margin: 'auto', borderRadius: '20px' }}>
        { props.children }
        </div>
    );
}

export default Scroll;