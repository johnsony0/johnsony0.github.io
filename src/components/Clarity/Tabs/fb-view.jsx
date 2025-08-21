import React from 'react';
import { Box, Divider } from '@mui/material';
import fb_before from '../../../assets/clarity/clean_fb_before.png';
import fb_after from '../../../assets/clarity/clean_fb_after.png';
import filter_before from '../../../assets/clarity/clean_filter_before.png';
import filter_after from '../../../assets/clarity/clean_filter_after.png';
import { BeforeAfterSlider } from '../before-after-component';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';

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

function ClarityFB(){
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {fb_data.map((item, index) => (
        <React.Fragment key={index}>
          <BeforeAfterSlider
            firstImage={item.firstImage}
            secondImage={item.secondImage}
            header={item.header}
            theme={item.theme}
          />
          {index < fb_data.length - 1 && (
            <Divider sx={{ width: { xs: '90%', sm: '80%', md: '60%' }, my: 2 }} />
          )}
        </React.Fragment>
      ))}
      <Timeline>
        <TimelineItem>
          <TimelineSeparator>
          <TimelineDot />
          <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
}

export default ClarityFB;