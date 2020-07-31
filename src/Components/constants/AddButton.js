import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const AddButton = () => {
  const classes = useStyles();

  return (
    <div>
      <div>
      <Button variant="contained" color="secondary" size="small" aria-label="add" className={classes.margin}>
        Agregar un estudio
      </Button>
      </div>
    </div>
  )
}
export default AddButton;