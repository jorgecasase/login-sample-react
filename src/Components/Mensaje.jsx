import React from 'react';

const Mensaje = ({mensaje, esError}) =>{
    return(
        <div style={{color: esError ? 'red' : 'green'}}>
            {mensaje}
        </div>
    )
}

export default Mensaje;