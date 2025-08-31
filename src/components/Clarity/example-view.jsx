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
import { fb_data, x_data, yt_data, shared_data } from './components/example-data';

function SliderSelectorComponent(selectedValue, handleChange, data, position, title) {
	const theme = useTheme();
	const isMd = useMediaQuery(theme.breakpoints.up('md'));
	return (
		<Box sx={{ width: '100%', height: 'auto', justifyContent: 'center', alignItems: 'center', display: 'flex', mb:{xs: 2, md: 0} }}>
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
						<RadioForm selectedValue={selectedValue} handleChange={handleChange} data={data} title={title}/>
					</Grid>
				)}
			</Grid>
		</Box>
	);
}

const useImagePreloader = (imageUrls) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setIsLoading(false);
      return;
    }
    let loadedCount = 0;
    const totalImages = imageUrls.length;
    const imgLoadHandler = () => {
      loadedCount++;
      if (loadedCount === totalImages) {
        setIsLoading(false);
      }
    };
    imageUrls.forEach((url) => {
      const img = new Image();
      img.onload = imgLoadHandler;
      img.onerror = imgLoadHandler; 
      img.src = url;
    });
    return () => {
      imageUrls.forEach((url) => {
        const img = new Image();
        img.onload = null;
        img.onerror = null;
      });
    };
  }, [imageUrls]);

  return isLoading;
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
	const [currentSection, setCurrentSection] = useState(0); 

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
		} else {
			setTimeout(() => {
				scrollToSection(fbRef);
			}, 100);
		}
	}, [fbRef, xRef, ytRef, othersRef]);

	useEffect(() => {
		const refs = [fbRef, xRef, ytRef, othersRef];
		const handleScroll = () => {
			const navHeight = 64;
			const offsets = refs.map(ref => {
				if (!ref.current) return Infinity;
				const rect = ref.current.getBoundingClientRect();
				return Math.abs(rect.top - navHeight);
			});
			const minIdx = offsets.indexOf(Math.min(...offsets));
			setCurrentSection(minIdx);
		};
		window.addEventListener('scroll', handleScroll, { passive: true });
		handleScroll();
		scrollToSection(fbRef)
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

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
		<Box>
			<HelmetProvider>
				<Helmet>
					<title>Clarity | Examples </title>
					<meta name="title" content="Clarity | less distractions - more clarity" />
					<meta name="description" content="Boost your productivity by removing distractive elements from social media sites which are built to be addictive and time-wasting." />
					<link rel="icon" href={`${process.env.PUBLIC_URL}/clarity-icon.png`} />

					<meta property="og:type" content="website" />
					<meta property="og:url" content="johnsony0.github.io/clarity" />
					<meta property="og:title" content="Clarity | less distractions - more clarity" />
					<meta property="og:description" content="Boost your productivity by removing distractive elements from social media sites which are built to be addictive and time-wasting." />
					<meta property="og:image" content={`${process.env.PUBLIC_URL}/clarity-banner.png`} />

					<meta property="twitter:card" content="summary_large_image" />
					<meta property="twitter:url" content="johnsony0.github.io/clarity" />
					<meta property="twitter:title" content="Clarity | less distractions - more clarity" />
					<meta property="twitter:description" content="Boost your productivity by removing distractive elements from social media sites which are built to be addictive and time-wasting." />
					<meta property="twitter:image" content={`${process.env.PUBLIC_URL}/clarity-banner.png`} />
				</Helmet>
			</HelmetProvider>
			<Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
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
						<Box ref={fbRef} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px)', width: '95vw', scrollSnapAlign: 'start' }}>
							{SliderSelectorComponent(FBValue, handleFBChange, fb_data, 'right', 'Facebook')}
						</Box>
						<Box ref={xRef} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px)', width: '95vw', scrollSnapAlign: 'start' }}>
							{SliderSelectorComponent(XValue, handleXChange, x_data, 'left', 'Twitter')}
						</Box>
						<Box ref={ytRef} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px)', width: '95vw', scrollSnapAlign: 'start' }}>
							{SliderSelectorComponent(YTValue, handleYTChange, yt_data, 'right', 'YouTube')}
						</Box>
						<Box ref={othersRef} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 64px - 200px)', width: '95vw', scrollSnapAlign: 'start' }}>
							{SliderSelectorComponent(SharedValue, handleSharedChange, shared_data, 'left', 'Other Features')}
						</Box>
					</Box>
					<Box
						sx={{
							position: 'sticky',
							bottom: { xs: 20, md: 30 },
							zIndex: 1000,
							borderRadius: isBottom ? 0 : 50,
							overflow: 'hidden',
							display: 'flex',
							justifyContent: 'center',
							width: { xs: isBottom ? '100vw' : '90vw', md: isBottom ? '100vw' : '60vw' },
						}}
					>
						<ButtonGroup variant="contained" aria-label="outlined primary button group" size="large" sx={{ width: '100%' }}>
							<Button
								aria-label="Scroll to Facebook examples"
								startIcon={<FacebookIcon />}
								sx={{ flexGrow: 1, backgroundColor: (currentSection === 0 ? theme.clarity.secondary : 'white') }}
								color={currentSection === 0 ? 'primary' : 'inherit'}
								onClick={() => scrollToSection(fbRef)}
							>
								{isMd ? 'FB' : 'Facebook'}
							</Button>
							<Button
								aria-label="Scroll to Twitter examples"
								startIcon={<TwitterIcon />}
								sx={{ flexGrow: 1, backgroundColor: (currentSection === 1 ? theme.clarity.secondary : 'white') }}
								onClick={() => scrollToSection(xRef)}
							>
								{isMd ? 'TWT' : 'Twitter'}
							</Button>
							<Button
								aria-label="Scroll to YouTube examples"
								startIcon={<YouTubeIcon />}
								sx={{ flexGrow: 1, backgroundColor: (currentSection === 2 ? theme.clarity.secondary : 'white')}}
								onClick={() => scrollToSection(ytRef)}
							>
								{isMd ? 'YT' : 'YouTube'}
							</Button>
							<Button
								aria-label="Scroll to other features examples"
								startIcon={<MoreHorizIcon />}
								sx={{ flexGrow: 1 , backgroundColor: (currentSection === 3 ? theme.clarity.secondary : 'white')}}
								onClick={() => scrollToSection(othersRef)}
							>
								Others
							</Button>
						</ButtonGroup>
					</Box>
			</Box>
		</Box>
	);
}

export default ClarityExamples;