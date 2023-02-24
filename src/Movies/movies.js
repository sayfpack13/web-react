import React from 'react'
import Movie from './movie'
import { Box, Grid } from '@mui/material'

export default function Movies() {

  const movies_data = [
    {
      "title": "Avengers",
      "desc": "Nick Fury is compelled to launch the Avengers Initiative when Loki poses a threat to planet Earth. His squad of superheroes put their minds together to accomplish the task.",
      "img": "https://www.shutterstock.com/shutterstock/photos/721215637/display_1500/stock-photo-las-vegas-nv-usa-sep-marvel-superheroes-iron-man-thor-hulk-black-widow-hawkeye-721215637.jpg"
    },
    {
      "title": "Captain America",
      "desc": "Recipient of the Super Soldier serum, World War II hero Steve Rogers fights for American ideals as one of the world's mightiest heroes and the leader of the ...",
      "img": "https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg"
    },
    {
      "title": "Carter",
      "desc": "A high-school booster (Keenan Wynn) replaces his grandson's basketball coach with an Olympian (Cathy Lee Crosby) who turns out to be a woman.",
      "img": "https://m.media-amazon.com/images/M/MV5BNTdiMjJjNDAtOWMwMC00YjU5LWEzOWYtM2Q4Nzc3ZTFkM2JlXkEyXkFqcGdeQXVyMTEzMjQ4NzEw._V1_.jpg"
    },
    

  ]

  return (

      <Grid container marginTop={"10px"} justifyContent="center" spacing={4} columns={{ xs: 4, md: 8 }}>
        {
          movies_data.map((movie, key) => {
            return (
              <Grid key={key} item xs={2}>
                <Movie title={movie.title} description={movie.desc} image={movie.img} />
              </Grid>


            )
          })
        }



      </Grid >
 



  )
}
