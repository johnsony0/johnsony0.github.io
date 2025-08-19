import BeforeAfterSlider from "../BeforeAfterSlider";
import { Paper, Box } from '@mui/material';
import x_before from '../../../assets/clarity/clean_x_before.png';
import x_after from '../../../assets/clarity/clean_x_after.png';

function ClarityX(){
  return (
    <Box>
      <BeforeAfterSlider
        beforeImage={x_before}
        afterImage={x_after}
        text={'Slide or drag to see changes on X/Twitter home page & posts!'}
      />
    </Box>
  );
}

export default ClarityX;