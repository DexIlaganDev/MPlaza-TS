import React from 'react'

// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Component Imports
import CardContracts from '../components/medcomponents/contracts/contracts'

type Props = {}

const Contract = (props: Props) => {
  return (

    <Grid container spacing={6}>
      <Grid item xs={12} md={6} lg={6}>
        <CardContracts />
      </Grid>
    </Grid>
  )
}

export default Contract