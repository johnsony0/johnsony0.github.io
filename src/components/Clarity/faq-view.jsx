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
    answer: "R",
    links: []
  },
  {
    question: "Can I see a breakdown of settings to know what element each option hides?",
    answer: "",
    links: []
  },
  {
    question: "I notice YouTube videos missing on my for you page.",
    answer: "This happens when hiding shorts or playables or other elements that appear as you scroll the home page, means "
  }
];

function ClarityFAQ() {
  return (
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
            <AccordionDetails sx={{ padding: '0 24px 16px' }}>
              <Typography>
                {faq.answer}
              </Typography>
              <Link>
              </Link>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );
}

export default ClarityFAQ;
