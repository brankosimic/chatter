import React, { useContext } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { settingsStore } from '../../stores';
import { observer } from 'mobx-react';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

const ChatChecks = () => {
  const classes = useStyles();
  const settingsContext = useContext(settingsStore);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    settingsContext.setChecks({
      ...settingsContext.checks,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={settingsContext.checks.check1}
                onChange={handleChange}
                name="check1"
              />
            }
            label="Option 1"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={settingsContext.checks.check2}
                onChange={handleChange}
                name="check2"
              />
            }
            label="Option 2"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={settingsContext.checks.check3}
                onChange={handleChange}
                name="check3"
              />
            }
            label="Option 3"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={settingsContext.checks.check4}
                onChange={handleChange}
                name="check4"
              />
            }
            label="Option 4"
          />
        </FormGroup>
      </FormControl>
    </div>
  );
};

export default observer(ChatChecks);
