import { Box, Divider } from '@mui/material';
import x_before from '../../../assets/clarity/clean_x_before.png';
import x_after from '../../../assets/clarity/clean_x_after.png';
import x_profile_before from '../../../assets/clarity/clean_x_profile_before.png';
import x_profile_after from '../../../assets/clarity/clean_x_profile_after.png';  
import { BeforeAfterSlider } from '../before-after-component';

function ClarityX(){
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {BeforeAfterSlider({ firstImage: x_before, secondImage: x_after, header: 'X/Twitter Home & Posts' })}
      <Divider sx={{ width: { xs: '90%', sm: '80%', md: '60%' } }} />
      {BeforeAfterSlider({ firstImage: x_profile_before, secondImage: x_profile_after, header: 'X/Twitter Profile' })}
      <Divider sx={{ width: { xs: '90%', sm: '80%', md: '60%' } }} />
    </Box>
  );
}

export default ClarityX;