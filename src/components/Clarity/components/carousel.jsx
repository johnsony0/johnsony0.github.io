import { Box } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import screenshot1 from '../../../assets/clarity/screenshot-1.png';
import screenshot2 from '../../../assets/clarity/screenshot-2.png';
import screenshot3 from '../../../assets/clarity/screenshot-3.png';
import screenshot4 from '../../../assets/clarity/screenshot-4.png';
import screenshot5 from '../../../assets/clarity/screenshot-5.png';

const images = [
  { label: 'Introduction', url: screenshot1 },
  { label: 'YouTube', url: screenshot2 },
  { label: 'Facebook', url: screenshot3 },
  { label: 'Twitter', url: screenshot4 },
  { label: 'Twitch', url: screenshot5 },
];


function ImageCarousel() {
  return (
    <Box
      sx={{
        width: {xs: '90vw', md: '60vw'},
        maxWidth: 800,
        m: 4, 
        p: 2,
      }}
    >
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        loop={true}
        navigation
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Box
              component="img"
              src={image.url}
              alt={image.label}
              sx={{
                width: '100%',
                height: 'auto',
                display: 'block',
                borderRadius: 2,
                objectFit: 'cover',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}

export default ImageCarousel;