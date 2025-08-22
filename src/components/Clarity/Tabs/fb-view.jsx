import React, {useState} from 'react';
import { Box } from '@mui/material';
import fb_before from '../../../assets/clarity/clean_fb_before.png';
import fb_after from '../../../assets/clarity/clean_fb_after.png';
import filter_before from '../../../assets/clarity/clean_filter_before.png';
import filter_after from '../../../assets/clarity/clean_filter_after.png';
import { BeforeAfterSlider } from '../before-after-component';
import { useTheme, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel} from '@mui/material';

const fb_data = [
  {
    firstImage: fb_before,
    secondImage: fb_after,
    header: 'Facebook Home',
    theme: 'dark' 
  },
  {
    firstImage: filter_before,
    secondImage: filter_after,
    header: 'Facebook Profile + Posts',
    theme: 'dark'
  }
]

const UncheckedRectangle = () => (
  <Box
    sx={{
      width: 24, 
      height: 24, 
      border: '2px solid grey', 
      borderRadius: 1, 
      backgroundColor: 'transparent',
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
        width: 24,
        height: 24,
        border: `2px solid ${theme.clarity.primary}`,
        borderRadius: 1,
        backgroundColor: theme.clarity.primary,
        display: 'inline-block', 
        transition: 'background-color 0.2s, border-color 0.2s',
      }}
    />
  );
};


function ClarityFB(){
  const [selectedValue, setSelectedValue] = useState(0);

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };



  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <FormControl component="fieldset">
        <RadioGroup
          aria-label="options"
          name="custom-radio-group"
          value={selectedValue}
          onChange={handleChange}
          row 
        >
          <FormControlLabel
            value={0}
            control={
              <Radio
                icon={<UncheckedRectangle />}       
                checkedIcon={<CheckedRectangle/>} 
              />
            }
            label="Option 1"
          />
          <FormControlLabel
            value={1}
            control={
              <Radio
                icon={<UncheckedRectangle />}
                checkedIcon={<CheckedRectangle />}
              />
            }
            label="Option 2"
          />
        </RadioGroup>
      </FormControl>
      <React.Fragment key={selectedValue}>
        <BeforeAfterSlider
          firstImage={fb_data[selectedValue].firstImage}
          secondImage={fb_data[selectedValue].secondImage}
          header={fb_data[selectedValue].header}
          theme={fb_data[selectedValue].theme}
        />
      </React.Fragment>
    </Box>
  );
}

export default ClarityFB;