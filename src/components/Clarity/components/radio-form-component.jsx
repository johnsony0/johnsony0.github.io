import { Box, useTheme } from '@mui/material';
import { Radio, RadioGroup, FormControlLabel, FormControl} from '@mui/material';

function RadioForm({ selectedValue, handleChange, data, title }) {
  const theme = useTheme();

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FormControl component="fieldset">
        <RadioGroup
          name={`custom-radio-group-${title}`}
          value={selectedValue}
          onChange={handleChange}
          sx={{
            display: 'flex',
            flexDirection: { xs: 'row', md: 'column' },
            gap: 1.5, 
          }}
        >
          {data.map((item, index) => {
            const isSelected = Number(selectedValue) === index;

            return (
              <FormControlLabel
                key={index}
                value={index}
                control={<Radio sx={{ display: 'none' }} />}
                label={item.header}
                sx={{
                  marginTop: { xs: 3, md: 0 },
                  margin: 0,
                  padding: '10px 20px',
                  borderRadius: '50px', 
                  border: '2px solid',
                  borderColor: isSelected ? theme.clarity.secondary : 'grey.400',
                  backgroundColor: 'transparent', 
                  transition: 'all 0.2s ease-in-out',
                  cursor: 'pointer',
                  
                  '& .MuiFormControlLabel-label': {
                    fontSize: '18px',
                    fontWeight: isSelected ? 'bold' : 'normal',
                    color: isSelected ? theme.clarity.secondary : theme.clarity.font,
                  },

                  '&:hover': {
                    borderColor: theme.clarity.secondary,
                  },
                }}
              />
            );
          })}
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default RadioForm;