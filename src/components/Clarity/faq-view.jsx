import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
  Link
} from '@mui/material';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: "Where can I visualize changes that Clarity makes?",
    answer: "Visualize changes made on their respective platforms with the links below.",
    links: [{link: 'http://localhost:3000/clarity/examples#fb', text: 'Facebook'},
      {link: 'http://localhost:3000/clarity/examples#x', text: 'X/TWitter'},
      {link: 'http://localhost:3000/clarity/examples#yt', text: 'YouTube'},
      {link: 'http://localhost:3000/clarity/examples#others', text: 'Others'}]
  },
  /*{
    question: "Can I see what element each option hides?",
    answer: "Of course! Check out the links below for visual guides on what each option does.",
    links: []
  },*/
  {
    question: "I notice YouTube videos missing on my home page.",
    answer: "This is normal behavior happens when hiding shorts or playables or other elements that appear on the YouTube feed.",
    links: []
  },
  {
    question: "This request exceeds the MAX_WRITE_OPERATIONS_PER_MINUTE quota.",
    answer: "Chrome sync storage only allows 120 write operations per minute. So just wait a bit and try again. If the issue persists, please reach out to us.",
    links: []
  }
];

function ClarityFAQ() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        minHeight: '80vh',
        backgroundImage: 'linear-gradient(to bottom right, #f5f5dc, white)',
      }}
    >
      <HelmetProvider>
        <Helmet>
          <title>Clarity | Help </title>
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
      <Box sx={{ width: {lg: '50%', md: '70%', sm: '90%'}, margin: 'auto', padding: 3 }}>
        <Paper elevation={5} sx={{ borderRadius: 2, overflow: 'hidden' }}>
          {faqData.map((faq, index) => (
            <Accordion
              key={index} 
              sx={{
                borderBottom: index < faqData.length - 1 ? '2px solid rgba(0, 0, 0, 0.4)' : 'none',
                '&:last-child': {
                  borderBottom: 'none', 
                },
                '&.Mui-expanded': {
                  margin: '0', 
                },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                sx={{
                  '&.Mui-expanded': {
                    minHeight: 2, 
                  },
                  '.MuiAccordionSummary-content': {
                    margin: 3, 
                  },
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ pl: 5, pr: 5}}
                id={`panel${index}-content`}
                aria-labelledby={`panel${index}-header`}
              >
                <Typography>
                  {faq.answer}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2}}>
                  {faq.links.map((linkObj, linkIndex) => (
                    <Link href={linkObj.link} target="_blank" rel="noopener noreferrer" 
                    color="inherit"
                    sx={{ display: 'block', marginTop: 2 }}>
                      {linkObj.text}
                    </Link>
                  ))}
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </Paper>
      </Box>
    </Box>
  );
}

export default ClarityFAQ;
