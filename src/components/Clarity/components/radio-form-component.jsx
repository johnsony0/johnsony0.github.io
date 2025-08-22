import { Box, useTheme } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel, FormControl} from '@mui/material';


const UncheckedRectangle = () => (
  <Box
    sx={{
      width: 10, 
      height: 40,
      border: '2px solid grey', 
      borderRadius: 1, 
      backgroundColor: 'white',
      display: 'inline-block',
      transition: 'background-color 0.2s, border-color 0.2s', 
    }}
  />
);

const CheckedRectangle = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: 10,
        height: 40,
        border: `2px solid ${theme.clarity.primary}`,
        borderRadius: 1,
        backgroundColor: theme.clarity.primary,
        display: 'inline-block', 
        transition: 'background-color 0.2s, border-color 0.2s',
      }}
    />
  );
};

function RadioForm({ selectedValue, handleChange, data }) {
  return (
    <FormControl component="fieldset">
      <RadioGroup
        aria-label="options"
        name="custom-radio-group"
        value={selectedValue}
        onChange={handleChange}
				sx={{
					display: 'flex',
					flexDirection: {xs:'row', md:'column'}
				}}
      >
        {data.map((item, index) => (
          <FormControlLabel
            key={index}
            value={index}
            control={
              <Radio
                icon={<UncheckedRectangle />}
                checkedIcon={<CheckedRectangle />}
              />
            }
            label={item.header}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioForm;