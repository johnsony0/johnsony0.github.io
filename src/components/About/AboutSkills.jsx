import React from 'react';
import { Container, ImageList, ImageListItem, Box, Typography, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FaReact, FaPython, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiCplusplus, SiC, SiPytorch, SiNeo4J, SiMongodb } from 'react-icons/si';

const itemData = [
    {
      icon: SiCplusplus,
      title: 'C++',
    },
    {
      icon: FaReact,
      title: 'React',
    },
    {
      icon: FaPython,
      title: 'Python',
    },
    {
      icon: SiPytorch,
      title: 'Pytorch',
    }
  ];

function AboutTools() {
    const theme = useTheme()
    const isXs = useMediaQuery(theme.breakpoints.down('xs')); 
    const isSm = useMediaQuery(theme.breakpoints.down('sm')); 
    const isMd = useMediaQuery(theme.breakpoints.down('md')); 

    const getColumns = () => {
        if (isXs) return 1;
        if (isSm) return 2;
        if (isMd) return 3;
        return 4;
    };

    return (
        <Container
            sx={{
                width: '90%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                marginBottom: '2%'
            }}
        >
            <Typography variant='h3' sx={{ color: theme.palette.text.secondary,
              marginBottom: '10%',
              marginTop: '10%'
            }}>
                Skillset
            </Typography>
            <ImageList 
                sx={{ width: '100%'}} cols={getColumns()} rowHeight={164} gap={50}
            >
                {itemData.map((item) => (
                <ImageListItem key={item.title}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 2,
                            border: '2px solid #ccc',
                            height: '100%',
                            padding: '5px'
                        }}
                    >
                        <item.icon size="3em" color={item.color}/>
                    </Box>
                </ImageListItem>
                ))}
            </ImageList>
      </Container>
    );
}

export default AboutTools