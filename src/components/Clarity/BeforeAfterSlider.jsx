import React, { useState, useRef } from 'react';
import { Box, Slider, useTheme, Typography } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const BeforeAfterSlider = ({ beforeImage, afterImage, text }) => {
	const [value, setValue] = useState(0);
	const theme = useTheme();
	const containerRef = useRef(null);
	const [dragging, setDragging] = useState(false);

	// Mouse/touch event handlers
	const handleDragStart = (e) => {
		e.preventDefault();
		setDragging(true);
	};
	const handleDragEnd = () => {
		setDragging(false);
	};
	const handleDragMove = (e) => {
		if (!dragging || !containerRef.current) return;
		let clientX;
		if (e.touches) {
			clientX = e.touches[0].clientX;
		} else {
			clientX = e.clientX;
		}
		const rect = containerRef.current.getBoundingClientRect();
		let percent = ((clientX - rect.left) / rect.width) * 100;
		percent = Math.max(0, Math.min(100, percent));
		setValue(percent);
	};

	React.useEffect(() => {
		if (!dragging) return;
		const move = (e) => handleDragMove(e);
		const up = () => handleDragEnd();
		window.addEventListener('mousemove', move);
		window.addEventListener('mouseup', up);
		window.addEventListener('touchmove', move);
		window.addEventListener('touchend', up);
		return () => {
			window.removeEventListener('mousemove', move);
			window.removeEventListener('mouseup', up);
			window.removeEventListener('touchmove', move);
			window.removeEventListener('touchend', up);
		};
	}, [dragging]);

	const handleSliderChange = (event, newValue) => {
		setValue(newValue);
	};

			return (
				<>
					<Box
						ref={containerRef}
						sx={{
							position: 'relative',
							width: '100%',
							maxWidth: 1200,
							height: { xs: '60vw', sm: '60vh' },
							minHeight: 200,
							maxHeight: 600,
							mx: 'auto',
							mt: 2,
							overflow: 'hidden',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'center',
						}}
						onMouseDown={handleDragStart}
						onTouchStart={handleDragStart}
					>
						<img
							src={beforeImage}
							alt="Before"
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'contain',
								position: 'absolute',
								top: 0,
								left: 0,
								zIndex: 1,
								pointerEvents: 'none',
								userSelect: 'none',
							}}
						/>
						<img
							src={afterImage}
							alt="After"
							style={{
								width: '100%',
								height: '100%',
								objectFit: 'contain',
								position: 'absolute',
								top: 0,
								left: 0,
								zIndex: 2,
								pointerEvents: 'none',
								userSelect: 'none',
								clipPath: `inset(0 ${100 - value}% 0 0)`,
								transition: 'clip-path 0.2s',
							}}
						/>
						{value === 0 && (
							<Box
								sx={{
									position: 'absolute',
									top: '50%',
									left: '50%',
									transform: 'translate(-50%, -50%)',
									bgcolor: 'rgba(0,0,0,0.7)',
									color: 'white',
									px: 3,
									py: 2,
									borderRadius: 2,
									zIndex: 10,
									textAlign: 'center',
									fontSize: { xs: 16, sm: 18 },
									pointerEvents: 'none',
									display: 'flex',
									flexDirection: 'row',
									alignItems: 'center',
									justifyContent: 'center',
								}}
							>
								<Typography sx={{ mr: 1 }}>
									{text || 'Slide or drag to see changes!'}
								</Typography>
								<ArrowForwardIosIcon/>
							</Box>
						)}
					</Box>
				<Box
					sx={{
						width: '100%',
						maxWidth: 800,
						mx: 'auto',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}
				>
					<Slider
						value={value}
						min={0}
						max={100}
						step={1}
						onChange={handleSliderChange}
						aria-labelledby="before-after-slider"
						sx={{
							color: theme.palette.text.secondary,
							width: { xs: '90%', sm: '80%' },
						}}
					/>
				</Box>
			</>
		);
};

export default BeforeAfterSlider;
