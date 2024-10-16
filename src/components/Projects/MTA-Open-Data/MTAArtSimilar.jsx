import { Box } from "@mui/material"
import { NavBar

 } from "./MTAutils"
export const ArtSimilar = ({setPage,nextPage,prevPage}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        height: '95vh', 
      }}
    >
      <NavBar setPage={setPage} nextPage={nextPage} prevPage={prevPage}/>
    </Box>
  )
}