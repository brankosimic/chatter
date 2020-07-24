import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import VolumeDown from '@material-ui/icons/VolumeDown';
import VolumeUp from '@material-ui/icons/VolumeUp';
import { settingsStore } from '../../stores';
import { observer } from 'mobx-react';

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

const ChatSlider = () => {
  const classes = useStyles();
  const settingsContext = useContext(settingsStore);

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: number | number[],
  ) => {
    settingsContext.setSlider(newValue as number);
  };

  return (
    <div className={classes.root}>
      <Typography id="continuous-slider" component={'span'} gutterBottom>
        Volume
      </Typography>
      <Grid container spacing={2}>
        <Grid item>
          <VolumeDown />
        </Grid>
        <Grid item xs>
          <Slider
            value={settingsContext.slider}
            onChange={handleChange}
            aria-labelledby="continuous-slider"
          />
        </Grid>
        <Grid item>
          <VolumeUp />
        </Grid>
      </Grid>
    </div>
  );
};

export default observer(ChatSlider);
