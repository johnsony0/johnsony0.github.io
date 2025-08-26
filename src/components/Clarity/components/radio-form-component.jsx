import { Box, useTheme, Typography, useMediaQuery } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel, FormControl} from '@mui/material';


const UncheckedRectangle = () => (
  <Box
    sx={{
      width: {xs: 20, md: 10}, 
      height: {xs: 20, md: 40},
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
        width: {xs: 20, md: 10},
        height: {xs: 20, md:40},
        border: `2px solid ${theme.clarity.secondary}`,
        borderRadius: 1,
        backgroundColor: theme.clarity.secondary,
        display: 'inline-block', 
        transition: 'background-color 0.2s, border-color 0.2s',
      }}
    />
  );
};

function RadioForm({ selectedValue, handleChange, data, title }) {
  const theme = useTheme();
  const isSm = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box aria-label={`${title}-selection-form`}>
      <Typography component="h3" variant={isSm ? 'h5' : 'h3'} sx={{ mb: 2, textAlign: {xs: 'center', md: 'left'} }}>
        {title}
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup
          name={`custom-radio-group-${title}`}
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
    </Box>
  );
}

export default RadioForm;