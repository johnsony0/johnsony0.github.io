import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';
import train from '../../../assets/open_data_images/train.jpg'
import mta from '../../../assets/open_data_images/MTA.png'
import bus from '../../../assets/open_data_images/bus.jpg'

const WhiteCircle = ({cx,cy}) => (
  <motion.circle
    cx={cx}
    cy={cy}
    r="3"
    stroke="black"
    fill="white"
    strokeWidth="1"
    initial={{ scale: 0 }} 
    animate={{ scale: 1 }} 
    transition={{duration: 0.25, delay:0.75}}
  />
)

const ClickableText = ({ x, y, text, onClick }) => (
  <motion.g
    initial={{ scale: 0, rotate: -60 }} 
    animate={{ scale: 1, rotate: -60 }} 
    transition={{ duration: 0.5}}
    whileHover={{ scale: 1.1, transition: { duration: 0.1, delay: 0.1 }}}
    whileTap={{ scale: 0.9, transition: { duration: 0.1, delay: 0.1 } }}
    onClick={onClick} 
    style={{ cursor: "pointer" }} 
  >
    <motion.text
      x={x}
      y={y}
      fill="black"
      fontSize="15"
    >
      {text}
    </motion.text>
  </motion.g>
);

export const IntroSequence = ({setPage}) => {
  const y_axis = 200;
  return(
    
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '100vh', 
        backgroundImage: ``,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Typography
        fontSize={50}
      >
        MTA Open Data Challenge
      </Typography>
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        initial="hidden"
        animate="visible"
        width="100vw"
        height="auto"
      >
        <motion.circle
          cx="20"
          cy={y_axis}
          r="10"
          stroke="#fbd305"
          fill="#fbd305"
          strokeWidth="2"
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{duration: 0.25}}
        />
        <motion.text
          x="20" 
          y={y_axis}
          dy=".1em"
          fill="black"
          fontSize="12"
          fontWeight="bold"
          textAnchor="middle" 
          alignmentBaseline="middle" 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.25, delay: 0.25 }} 
        >
          J.Y
        </motion.text>
        <motion.line
          x1="40"
          x2="40"
          y1={y_axis}
          y2={y_axis}
          stroke="#fbd305"
          strokeWidth="15"
          strokeLinecap="round"
          initial={{ x2: 40, opacity: 0 }}
          animate={{ x2: 290, opacity: 1}}
          transition={{ duration: 0.5, delay: 0.25 }}
        />
        <motion.image
          href={mta} 
          x="50"
          y="50"
          width="50"
          height="50"
          animate={{scale:[0.8,1.1,0.8]}}
          transition={{
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut"
          }}
          style={{ transformOrigin: 'center' }}
        />
        <motion.image
          href={train} 
          x="-50"
          y="225"
          width="100"
          height="100"
          animate={{x:[350,-50,350]}}
          transition={{
            repeat: Infinity,
            duration: 5,
            ease: "anticipate"
          }}
        />
        <motion.image
          href={bus} 
          x="150"
          y="-150"
          width="100"
          height="100"
          initial={{rotate: -90}}
          animate={{y:[-150,500]}}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatDelay: 5,
            ease: "linear",
            delay: 5,
          }}
        />
        <WhiteCircle cx={102.5} cy={y_axis}/>
        <WhiteCircle cx={165} cy={y_axis}/>
        <WhiteCircle cx={227.5} cy={y_axis}/>
        <ClickableText x={205} y={y_axis-42} text={"Safety Data"} onClick={setPage}/>
        <ClickableText x={133} y={y_axis-58} text={"Art Location Map"} onClick={setPage}/>
        <ClickableText x={63} y={y_axis-68} text={"Ridership Prediction"} onClick={setPage}/>
      </motion.svg>
    </Box>
  )
}