import { motion } from 'framer-motion';
import { Box } from '@mui/material';

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
    onClick={() => onClick(text)} 
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

export const Home = ({setPage, pageOne, pageTwo, pageThree}) => {
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
      <motion.svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 300 300"
        initial="hidden"
        animate="visible"
        width="100vw"
      >
        <motion.text
          x="150" 
          y="50"
          dy=".1em"
          fill="black"
          fontSize="15"
          fontWeight="bold"
          textAnchor="middle" 
          alignmentBaseline="middle" 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.25, delay: 0.25 }} 
        >
          Choose Your
          Destination
        </motion.text>
        <motion.text
          x="150" 
          y="60"
          dy=".1em"
          fill="black"
          fontSize="5"
          textAnchor="middle" 
          alignmentBaseline="middle" 
          initial={{ scale: 0 }} 
          animate={{ scale: 1 }} 
          transition={{ duration: 0.25, delay: 0.25 }} 
        >
          (Location shown are rough estimates)
        </motion.text>
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
        <WhiteCircle cx={102.5} cy={y_axis}/>
        <WhiteCircle cx={165} cy={y_axis}/>
        <WhiteCircle cx={227.5} cy={y_axis}/>
        <ClickableText x={193} y={y_axis-55} text={pageOne} onClick={setPage}/>
        <ClickableText x={130} y={y_axis-62} text={pageTwo} onClick={setPage}/>
        <ClickableText x={73} y={y_axis-45} text={pageThree} onClick={setPage}/>
      </motion.svg>
    </Box>
  )
}