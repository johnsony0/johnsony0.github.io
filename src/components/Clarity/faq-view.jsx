import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We offer a wide range of services including web development, mobile app development, UI/UX design, and cloud solutions."
  },
  {
    question: "How can I get a quote?",
    answer: "You can request a quote by filling out the contact form on our website or by sending us an email directly."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer various support packages tailored to your needs, including maintenance, updates, and technical assistance."
  },
  {
    question: "What is your development process?",
    answer: "Our process typically involves discovery, planning, design, development, testing, and deployment, followed by ongoing support."
  }
];

function ClarityFAQ() {
  return (
    <Box sx={{ width: {lg: '50%', md: '70%', sm: '90%'}, margin: 'auto', padding: '20px' }}>
      <Paper elevation={2} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        {faqData.map((faq, index) => (
          <Accordion
            key={index} 
            sx={{
              backgroundColor: 'background.paper', 
              borderBottom: index < faqData.length - 1 ? '1px solid rgba(0, 0, 0, 0.12)' : 'none',
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
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
    </Box>
  );
}

export default ClarityFAQ;
