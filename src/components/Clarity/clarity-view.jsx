import { Box } from "@mui/material";
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material'

function Clarity(){
  function Item(props)
  {
    return (
      <Paper>
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>

        <Button className="CheckButton">
          Check it out!
        </Button>
      </Paper>
    )
  }

  var items = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!"
    },
    {
      name: "Random Name #2",
      description: "Hello World!"
    }
  ]

  return (
    <Carousel
      
    >
      {
        items.map( (item, i) => <Item key={i} item={item} /> )
      }
    </Carousel>
  )
}

export default Clarity;