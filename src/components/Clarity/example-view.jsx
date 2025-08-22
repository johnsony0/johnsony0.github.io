import React, {useState} from 'react';
import { Box, Grid, Divider } from "@mui/material";
import { BeforeAfterSlider } from './components/before-after-component';
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

const x_data = [
	{
		firstImage: x_before,
		secondImage: x_after,
		header: 'X/Twitter Home',
		theme: 'light' 
	},
	{
		firstImage: x_profile_before,
		secondImage: x_profile_after,
		header: 'X/Twitter Profile + Posts',
		theme: 'light'
	}
]

const yt_data = [
	{
		firstImage: video_before,
		secondImage: video_after,
		header: 'YouTube Video',
		theme: 'dark'
	},
	{
		firstImage: yt_before,
		secondImage: yt_after,
		header: 'YouTube Home',
		theme: 'dark' 
	},
	{
		firstImage: yt_profile_before,
		secondImage: yt_profile_after,
		header: 'YouTube Profile',
		theme: 'dark'
	}
]

const shared_data = [
  {
    firstImage: grayscale_before,
    secondImage: grayscale_after,
    header: '',
    theme: 'dark' 
  },
  {
    firstImage: timer,
    secondImage: limit,
    header: 'Facebook Profile + Posts',
    theme: 'dark'
  }
]

function SliderSelectorComponent(selectedValue, handleChange, data, position) {
	return (
		<Box sx={{ width: '100%', height: '80vh'}}>
			<Grid container spacing={0} sx={{ mb: 2, justifyContent: 'center', width: '100%', height: '100%' }}>
				{position === 'left' && (
					<Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: {xs: 'start', md: 'center'}}}>
						<RadioForm selectedValue={selectedValue} handleChange={handleChange} data={data} />
					</Grid>
				)}
				<Grid item xs={12} md={9} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
					<React.Fragment key={selectedValue}>
						<BeforeAfterSlider
							firstImage={data[selectedValue].firstImage}
							secondImage={data[selectedValue].secondImage}
							header={data[selectedValue].header}
							theme={data[selectedValue].theme}
						/>
					</React.Fragment>
				</Grid>
				{position === 'right' && (
					<Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center', alignItems: {xs: 'start', md: 'center'}}}>
						<RadioForm selectedValue={selectedValue} handleChange={handleChange} data={data} />
					</Grid>
				)}
			</Grid>
		</Box>
	);
}

function ClarityExamples(){
	const [FBValue, setFBvalue] = useState(0);
	const [XValue, setXvalue] = useState(0);
	const [YTValue, setYTvalue] = useState(0);
	const [SharedValue, setSharedValue] = useState(0);

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

	return (
		<Grid container spacing={0} sx={{ mb: 2, justifyContent: 'center', width: '100%', height: '100%' }}>
			<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
				{SliderSelectorComponent(FBValue,handleFBChange,fb_data,'right')}
			</Grid>
			<Divider sx={{width: '90%'}}/>
			<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
				{SliderSelectorComponent(XValue,handleXChange,x_data,'left')}
			</Grid>
			<Divider sx={{width: '90%'}}/>
			<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				{SliderSelectorComponent(YTValue,handleYTChange,yt_data,'right')}
			</Grid>
			<Divider sx={{width: '90%'}}/>
			<Grid item xs={12} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
				{SliderSelectorComponent(SharedValue,handleSharedChange,shared_data,'left')}
			</Grid>
			<Divider sx={{width: '90%'}}/>
		</Grid>
	);
}

export default ClarityExamples;