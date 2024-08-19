import React, { useState } from 'react';
import {
    Container, ImageList, ImageListItem, ImageListItemBar, Box, Typography, useMediaQuery,
    ToggleButtonGroup, ToggleButton, Fade
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FaReact, FaPython, FaGitAlt, FaLinux } from 'react-icons/fa';
import { SiCplusplus, SiPytorch, SiMongodb } from 'react-icons/si';
import { IoLogoJavascript } from "react-icons/io";
import { DiPostgresql } from "react-icons/di";

const itemData = [
    { icon: SiCplusplus, title: 'C++', category: 'Languages' },
    { icon: IoLogoJavascript, title: 'Javascript', category: 'Languages' },
    { icon: FaPython, title: 'Python', category: 'Languages' },
    { icon: SiPytorch, title: 'Pytorch', category: 'Framework' },
    { icon: FaReact, title: 'React', category: 'Framework' },
    { icon: SiMongodb, title: 'MongoDB', category: 'Database' },
    { icon: DiPostgresql, title: 'PostgreSQL', category: 'Database' },
    { icon: FaGitAlt, title: 'Git', category: 'Etc' },
    { icon: FaLinux, title: 'Linux', category: 'Etc' }
];

function AboutTools() {
    const theme = useTheme();
    const isXs = useMediaQuery(theme.breakpoints.down('xs')); 
    const isSm = useMediaQuery(theme.breakpoints.down('sm')); 
    const isMd = useMediaQuery(theme.breakpoints.down('md')); 

    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategoryChange = (event, newCategory) => {
      setSelectedCategory(newCategory === selectedCategory ? null : newCategory);
    };

    const getColumns = () => {
        if (isXs) return 1;
        if (isSm) return 2;
        if (isMd) return 4;
        return 6;
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
            <Typography
              variant='h3'
              sx={{ color: theme.palette.text.secondary, marginBottom: '10%', marginTop: '10%' }}
            >
                Skillset
            </Typography>
            
            <ToggleButtonGroup
              value={selectedCategory}
              exclusive
              onChange={handleCategoryChange}
              aria-label="Category selection"
              sx={{ marginBottom: '2%' }}
            >
                <ToggleButton value="Languages" aria-label="Languages">
                    Languages
                </ToggleButton>
                <ToggleButton value="Framework" aria-label="Framework">
                    Frameworks
                </ToggleButton>
                <ToggleButton value="Database" aria-label="Database">
                    Databases
                </ToggleButton>
                <ToggleButton value="Etc" aria-label="Etc">
                    Etc
                </ToggleButton>
            </ToggleButtonGroup>

            <ImageList sx={{ width: '100%' }} cols={getColumns()} rowHeight={150} gap={30}>
                {itemData
                    .filter(item => selectedCategory === null || item.category === selectedCategory)
                    .map((item) => (
                    <Fade in={true} timeout={1000} key={item.title}>
                        <ImageListItem>
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
                                <item.icon size="3em" color={item.color} />
                            </Box>
                            <ImageListItemBar position='below' title={item.title} />
                        </ImageListItem>
                    </Fade>
                ))}
            </ImageList>
        </Container>
    );
}

export default AboutTools;