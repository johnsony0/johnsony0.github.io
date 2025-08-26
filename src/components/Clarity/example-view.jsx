import React, {useState, useRef, useEffect} from 'react';
import { Box, Grid, useMediaQuery, useTheme, Button, ButtonGroup } from "@mui/material";
import { BeforeAfterSlider } from './components/before-after-component';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import useScrolledNearBottom from './components/scroll-near-bottom';
import RadioForm from './components/radio-form-component';

import fb_before from '../../assets/clarity/clean_fb_before.png';
import fb_after from '../../assets/clarity/clean_fb_after.png';
import filter_before from '../../assets/clarity/clean_filter_before.png';
import filter_after from '../../assets/clarity/clean_filter_after.png';

import x_before from '../../assets/clarity/clean_x_before.png';
import x_after from '../../assets/clarity/clean_x_after.png';
import x_profile_before from '../../assets/clarity/clean_x_profile_before.png';
import x_profile_after from '../../assets/clarity/clean_x_profile_after.png';  

import yt_before from '../../assets/clarity/clean_yt_before.png';
import yt_after from '../../assets/clarity/clean_yt_after.png';
import video_before from '../../assets/clarity/clean_video_before.png';
import video_after from '../../assets/clarity/clean_video_after.png';  
import yt_profile_before from '../../assets/clarity/clean_yt_profile_before.png';
import yt_profile_after from '../../assets/clarity/clean_yt_profile_after.png';

import grayscale_before from '../../assets/clarity/clean_grayscale_before.png';
import grayscale_after from '../../assets/clarity/clean_grayscale_after.png';
import timer from '../../assets/clarity/clean_timer.png';
import limit from '../../assets/clarity/clean_limit.png';

const fb_data = [
	{
		firstImage: fb_before,
		secondImage: fb_after,
		header: 'Home',
		theme: 'dark' 
	},
	{
		firstImage: filter_before,
		secondImage: filter_after,
		header: 'Profile + Posts',
		theme: 'dark'
	}
]

const x_data = [
	{
		firstImage: x_before,
		secondImage: x_after,
		header: 'Home',
		theme: 'light' 
	},
	{
		firstImage: x_profile_before,
		secondImage: x_profile_after,
		header: 'Profile + Posts',
		theme: 'light'
	}
]

const yt_data = [
	{
		firstImage: video_before,
		secondImage: video_after,
		header: 'Video',
		theme: 'dark'
	},
	{
		firstImage: yt_before,
		secondImage: yt_after,
		header: 'Home',
		theme: 'dark' 
	},
	{
		firstImage: yt_profile_before,
		secondImage: yt_profile_after,
		header: 'Profile',
		theme: 'dark'
	}
]

const shared_data = [
  {
    firstImage: grayscale_before,
    secondImage: grayscale_after,
    header: 'Grayscale Mode',
    theme: 'light' 
  },
  {
    firstImage: timer,
    secondImage: limit,
    header: 'Timer vs Limit',
    theme: 'light'
  }
]

function SliderSelectorComponent(selectedValue, handleChange, data, position, title) {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'));
	return (
		<Box sx={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
			<Grid container spacing={0} sx={{ mb: 2, width: '100%', height: '100%' }}>
				{(position === 'left' && isMd) && (
					<Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: {xs: 'start', md: 'center'}}}>
						<RadioForm selectedValue={selectedValue} handleChange={handleChange} data={data} title={title}/>
					</Grid>
				)}
				<Grid item xs={12} md={9} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' }}>
					<BeforeAfterSlider
						firstImage={data[selectedValue].firstImage}
						secondImage={data[selectedValue].secondImage}
						header={data[selectedValue].header}
						theme={data[selectedValue].theme}
					/>
				</Grid>
				{(position === 'right' || !isMd) && (
					<Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: {xs: 'start', md: 'center'}}}>
						<RadioForm selectedValue={selectedValue} handleChange={handleChange} data={data} title={title} />
					</Grid>
				)}
			</Grid>
		</Box>
	);
}

const useImagePreloader = (imageUrls) => {
  useEffect(() => {
    const preloadedImages = [];
    imageUrls.forEach((url) => {
      const img = new Image();
      img.src = url;
      preloadedImages.push(img);
    });
  }, [imageUrls]);
};


function ClarityExamples(){
	const [FBValue, setFBvalue] = useState(0);
	const [XValue, setXvalue] = useState(0);
	const [YTValue, setYTvalue] = useState(0);
	const [SharedValue, setSharedValue] = useState(0);

	const fbRef = useRef(null);
  const xRef = useRef(null);
  const ytRef = useRef(null);
  const othersRef = useRef(null);

	const theme = useTheme();
	const isBottom = useScrolledNearBottom(107);
	const isMd = useMediaQuery(theme.breakpoints.down('md'));

	const handleFBChange = (event) => {
		setFBvalue(event.target.value);
	};
	const handleXChange = (event) => {
		setXvalue(event.target.value);
	};
	const handleYTChange = (event) => {
		setYTvalue(event.target.value);
	};

	const handleSharedChange = (event) => {
		setSharedValue(event.target.value);
	}

	const scrollToSection = (ref) => {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
    });
  };


  useEffect(() => {
		const hashRefMap = {
			'#fb': fbRef,
			'#x': xRef,
			'#yt': ytRef,
			'#others': othersRef,
		};
    const hash = window.location.hash;
    const refToScroll = hashRefMap[hash];
    if (refToScroll) {
      setTimeout(() => {
        scrollToSection(refToScroll);
      }, 100);
    }
  }, []);

	const allImages = [
		...fb_data.map(item => item.firstImage),
		...fb_data.map(item => item.secondImage),
		...x_data.map(item => item.firstImage),
		...x_data.map(item => item.secondImage),
		...yt_data.map(item => item.firstImage),
		...yt_data.map(item => item.secondImage),
		...yt_data.map(item => item.secondImage),
		...shared_data.map(item => item.firstImage),
		...shared_data.map(item => item.secondImage),
	];
	useImagePreloader(allImages);

	return (
	<Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
		<HelmetProvider>
			<Helmet>
				<title>Clarity | Examples</title>
				<meta name="description" content="Examples of how Clarity blocks distractions on Facebook, Twitter, or YouTube." />
				<link rel="canonical" href="https://johnsony0.github.io/clarity/examples" />
			</Helmet>
		</HelmetProvider>
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				width: '100%',
				height: 'auto',
				backgroundImage: 'linear-gradient(to bottom left, #f5f5dc, #f5f5f5)',
			}}
		>
			<Box ref={fbRef} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				{SliderSelectorComponent(FBValue, handleFBChange, fb_data, 'right', 'Facebook')}
			</Box>
			<Box ref={xRef} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				{SliderSelectorComponent(XValue, handleXChange, x_data, 'left', 'X/Twitter')}
			</Box>
			<Box ref={ytRef} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				{SliderSelectorComponent(YTValue, handleYTChange, yt_data, 'right', 'YouTube')}
			</Box>
			<Box ref={othersRef} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				{SliderSelectorComponent(SharedValue, handleSharedChange, shared_data, 'left', 'Other Features')}
			</Box>
		</Box>
		<Box
			sx={{
				position: 'sticky',
				bottom: {xs: 20, md: 30},
				zIndex: 1000,
				borderRadius: isBottom ? 0 : 50,
				overflow: 'hidden',
				display: 'flex',
				justifyContent: 'center',
				width: {xs: isBottom ? '100vw' : '90vw', md: isBottom ? '100vw' : '60vw'},
			}}
		>
			<ButtonGroup variant="contained" aria-label="outlined primary button group" size="large" sx={{ width: '100%' }}>
				<Button aria-label="Scroll to Facebook examples" startIcon={<FacebookIcon />} sx={{ flexGrow: 1 }} onClick={() => scrollToSection(fbRef)}>{isMd ? 'FB' : 'Facebook'}</Button>
				<Button aria-label="Scroll to X/Twitter examples" startIcon={<TwitterIcon />} sx={{ flexGrow: 1 }} onClick={() => scrollToSection(xRef)}>{isMd ? 'X' : 'X/Twitter'}</Button>
				<Button aria-label="Scroll to YouTube examples" startIcon={<YouTubeIcon />} sx={{ flexGrow: 1 }} onClick={() => scrollToSection(ytRef)}>{isMd ? 'YT' : 'YouTube'}</Button>
				<Button aria-label="Scroll to other features examples" startIcon={<MoreHorizIcon />} sx={{ flexGrow: 1 }} onClick={() => scrollToSection(othersRef)}>Others</Button>
			</ButtonGroup>
		</Box>
	</Box>
);
}

export default ClarityExamples;