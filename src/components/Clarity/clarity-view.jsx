import { Box } from "@mui/material";
import { Grid, Typography, Paper, useMediaQuery, Button } from '@mui/material'
import { useTheme } from '@mui/material/styles';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import GetAppIcon from '@mui/icons-material/GetApp';
import intromov from '../../assets/clarity/intro.mov';
import intromp4 from '../../assets/clarity/intro.mp4';

const VideoPlayer = ({ srcMov, srcMp4, title, autoPlay = false, loop = false, muted = true }) => {
  return (
    <Box
      sx={{
        width: {xs: '90vw', md: '60vw'},
        maxWidth: 800,
        m: 4, 
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        component="video" 
        autoPlay={autoPlay} 
        loop={loop} 
        muted={muted} 
        playsInline 
        sx={{
          width: '100%',
          height: 'auto', 
          borderRadius: 4, 
          outline: 'none', 
        }}
      >
        {srcMov && <source src={srcMov} type="video/quicktime" />}
        {srcMp4 && <source src={srcMp4} type="video/mp4" />}
        Your browser does not support the video tag.
      </Box>
    </Box>
  );
};

function WhyItem({ svg, header, text }) {
  return (
    <Grid item sx={12} sm={6} md={4} display="flex" justifyContent="center">
      <Paper elevation={0} sx={{ p: 3, backgroundColor: 'whitesmoke', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '70vw' }}>
        <Box sx={{width: 48, height: 48, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {svg}
        </Box>
        <Typography variant="h5" sx={{ fontWeight: 700, color: 'text.primary', textAlign: 'center' }}>
          {header}
        </Typography>
        <Typography variant="subtitle1" sx={{ fontWeight: 400, color: 'text.primary', textAlign: 'center' }}>
          {text}
        </Typography>
      </Paper>
    </Grid>
  );
}

function Clarity() {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'));

  return (
    <Box>
      <HelmetProvider>
        <Helmet>
          <title>
            {"Clarity | Home"}
          </title>
          <meta
            name="image"
            content={`${process.env.PUBLIC_URL}/clarity-icon.png`}
          />
          <meta
            name="description"
            content={"A web extension to block distractions from Facebook, Twitter, and YouTube."}
          />
          <meta
            property="og:title"
            content={ "Clarity Extension"}
          />
          <meta
            property="og:description"
            content={"A web extension to block distractions from Facebook, Twitter, and YouTube."}
          />
          <meta
            property="og:image"
            content={`${process.env.PUBLIC_URL}/clarity-icon.png`}
          />
        </Helmet>
      </HelmetProvider>
      <Box container sx={{ p: 2, display: 'flex', justifyContent: 'center', alignItems:'center',  flexDirection: {xs: 'column', md:'row'}, height: '80vh', backgroundImage: 'linear-gradient(to bottom, #f5f5dc, #f5f5f5)'}}>
          <VideoPlayer
            srcMov={intromov}
            srcMp4={intromp4} 
            title="My Local Demo Video"
            autoPlay={true}
            loop={true}
            muted={true}
          />
          <Box sx={{ display: 'flex',  flexDirection:'column', textAlign: {xs: 'center', md:'start'} }}>
            <Typography variant={isMd ? 'h3' : 'h4'} sx={{ fontWeight: 700, color: theme.palette.text.secondary }}>
              Less Distractions,
            </Typography>
            <Typography variant={isMd ? 'h3' : 'h4'} sx={{ fontWeight: 700, color: theme.palette.text.secondary, mb: 2 }}>
              More Clarity.
            </Typography>
            <Typography variant="subtitle" sx={{ fontWeight: 500, color: theme.palette.text.primary, mb: 1, maxWidth: 420 }}>
              Boost your productivity by removing distractive elements from social media sites which are built to be addictive and time-wasting.
            </Typography>
            <Button
              component="a"
              href="https://chromewebstore.google.com/detail/clarity/cjigopmhiclhnkjajamcdobogkgpodnj"
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              fullWidth
              sx={{
                padding: '10px',
                mt: 2,
                textTransform: 'none',
                color: 'whitesmoke',
                backgroundColor: theme.clarity.secondary,
              }}
              startIcon={<GetAppIcon />}
            >
              Get Clarity - All Features Free
            </Button>
          </Box>
      </Box>
      <Paper elevation={0} sx={{backgroundColor: 'whitesmoke', minHeight: '50vh', display: 'flex', textAlign: 'center', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', paddingBottom: {xs: '5px', md: '10px'}}}>
          <Typography variant={isMd ? 'h3' : 'h4'} sx={{margin: '20px', color: theme.palette.text.secondary, fontWeight: 700 }}>
            Why Clarity?
          </Typography>
          <Typography variant="subtitle" sx={{ color: theme.palette.text.primary, maxWidth: '80vw' }}>
            With Clarity, you can take back control of your attention and time, so you can focus on more important things.
          </Typography>
          <Grid container spacing={2} justifyContent="center" alignItems="stretch" width="80%">
            <WhyItem
              svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 0 0 5.636 5.636m12.728 12.728A9 9 0 0 1 5.636 5.636m12.728 12.728L5.636 5.636" /></svg>}
              header="Distraction Blocker"
              text="Remove distractive elements to focus on what is ahead of us, whether it is work, responding to emails or crunching excel numbers."
            />
            <WhyItem
              svg={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/></svg>}
              header="Productivity Enabler"
              text="There is so much to do and so little time, so why waste that time on media. Block it out, and find more time for yourself."
            />
            <WhyItem
              svg={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="none" stroke="currentColor" stroke-width="1"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="4.667" d="M19.036 44q-1.47-4.793-4.435-7.147c-2.965-2.353-7.676-.89-9.416-3.318s1.219-6.892 2.257-9.526s-3.98-3.565-3.394-4.313q.585-.748 7.609-4.316Q13.652 4 26.398 4C39.144 4 44 14.806 44 21.68c0 6.872-5.88 14.276-14.256 15.873q-1.123 1.636 3.24 6.447"/><path stroke-linejoin="round" stroke-width="4" d="M19.5 14.5q-.981 3.801.583 5.339q1.563 1.537 5.328 2.01q-.855 4.903 2.083 4.6q2.937-.302 3.53-2.44q4.59 1.29 4.976-2.16c.385-3.45-1.475-6.201-2.238-6.201s-2.738-.093-2.738-1.148s-2.308-1.65-4.391-1.65s-.83-1.405-3.69-.85q-2.86.555-3.443 2.5Z" clip-rule="evenodd"/><path stroke-linecap="round" stroke-width="4" d="M30.5 25.5c-1.017.631-2.412 1.68-3 2.5c-1.469 2.05-2.66 3.298-2.92 4.608"/></g></svg>}
              header="Mental Reset"
              text="Social media can make us angier: comments can be rage baiting and posts are clearly politically skewed, let Clarity fix that for you."
            />
            <WhyItem
              svg={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" width="40" height="40"><path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>}
              header="Simplified Settings"
              text="Install, then browse. It's that simple. The next time you visit a supported site, Clarity will automatically apply your chosen settings."
            />
            <WhyItem
              svg={<svg xmlns="http://www.w3.org/2000/svg"  width="48" height="48" viewBox="0 0 20 20"><path fill="currentColor" d="M13.5 5a.5.5 0 0 0 0-1zM2.964 2.814a.5.5 0 1 0-.928.372zM14 7.5A6.5 6.5 0 0 1 7.5 14v1A7.5 7.5 0 0 0 15 7.5zM7.5 14A6.5 6.5 0 0 1 1 7.5H0A7.5 7.5 0 0 0 7.5 15zM1 7.5A6.5 6.5 0 0 1 7.5 1V0A7.5 7.5 0 0 0 0 7.5zM7.5 1A6.5 6.5 0 0 1 14 7.5h1A7.5 7.5 0 0 0 7.5 0zm0 4h6V4h-6zM4.964 7.814l-2-5l-.928.372l2 5zM9.25 9.301l-3.65 4.9l.802.598l3.65-4.9zM7.5 10A2.5 2.5 0 0 1 5 7.5H4A3.5 3.5 0 0 0 7.5 11zM10 7.5A2.5 2.5 0 0 1 7.5 10v1A3.5 3.5 0 0 0 11 7.5zM7.5 5A2.5 2.5 0 0 1 10 7.5h1A3.5 3.5 0 0 0 7.5 4zm0-1A3.5 3.5 0 0 0 4 7.5h1A2.5 2.5 0 0 1 7.5 5z"/></svg>}
              header="Multiple Browsers and Platforms"
              text="Built for every Chromium based browsers such as Chrome, Edge, Brave, etc. With support for Facebook, X/Twitter, and YouTube."
            />
            <WhyItem
              svg={<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33s1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2"/></svg>}
              header="Open-Source"
              text="Clarity is open-source to ensure transparency and security. The repo is also open to community contributions so feel free to commit!"
            />
          </Grid>
      </Paper>
    </Box>
  );
}

export default Clarity;