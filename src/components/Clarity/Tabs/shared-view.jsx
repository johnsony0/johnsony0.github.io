import { Box, Divider } from '@mui/material';
import grayscale_before from '../../../assets/clarity/clean_grayscale_before.png';
import grayscale_after from '../../../assets/clarity/clean_grayscale_after.png';
import timer from '../../../assets/clarity/clean_timer.png';
import limit from '../../../assets/clarity/clean_limit.png';
import { BeforeAfterSlider } from '../before-after-component';

function ClarityShared() {
  return (
    <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {BeforeAfterSlider({ firstImage: grayscale_before, secondImage: grayscale_after, header: 'Grayscale', theme: 'light' })}
      <Divider sx={{ width: { xs: '90%', sm: '80%', md: '60%' } }} />
      {BeforeAfterSlider({ firstImage: timer, secondImage: limit, header: 'Timeouts & Limits', theme: 'light' })}
      <Divider sx={{ width: { xs: '90%', sm: '80%', md: '60%' } }} />
    </Box>
  );
}

export default ClarityShared;