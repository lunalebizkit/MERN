import * as React from 'react';
import Typography from '@mui/material/Typography';

function Title(props) {
  return (
    <Typography component="h2" variant="h6" color={props.color} align={props.posicion} gutterBottom>
      
      {props.nombre}
    </Typography>
  );
}

// Title.propTypes = {
//   children: PropTypes.node,
// };

export default Title;