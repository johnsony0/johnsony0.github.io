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
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: "Where can I visualize changes that Clarity makes?",
    answer: "Resources linked below provide sliders and images to visualize changes made on their respective platforms",
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
    answer: "This happens when hiding shorts or playables or other elements that appear as you scroll the home page.",
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
      <Box sx={{ width: {lg: '50%', md: '70%', sm: '90%'}, margin: 'auto', padding: '20px' }}>
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
                  padding: '10px 20px', 
                  '&.Mui-expanded': {
                    minHeight: '24px', 
                  },
                  '.MuiAccordionSummary-content': {
                    margin: '12px 0', 
                  },
                }}
              >
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails sx={{ padding: '0 24px 16px' }}
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
                    sx={{ display: 'block', marginTop: '8px' }}>
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
