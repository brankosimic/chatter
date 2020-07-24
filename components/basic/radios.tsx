import React, { useContext } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import { settingsStore } from "../../stores";
import { observer } from "mobx-react";

const ChatRadios = () => {
  const settingsContext = useContext(settingsStore);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    settingsContext.setRadio((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="gender"
        name="gender1"
        value={settingsContext.radio}
        onChange={handleChange}
      >
        <FormControlLabel value="1" control={<Radio />} label="Female" />
        <FormControlLabel value="2" control={<Radio />} label="Male" />
        <FormControlLabel value="3" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl>
  );
};

export default observer(ChatRadios);
