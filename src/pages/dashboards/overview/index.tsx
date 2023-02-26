// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

// ** Custom Components Imports
import CardStatisticsVerticalComponent from 'src/@core/components/card-statistics/card-stats-vertical'

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import AnalyticsTable from 'src/views/dashboards/analytics/AnalyticsTable'
import AnalyticsVLIRooms from 'src/views/dashboards/analytics/AnalyticsVLIRooms'

const Overview = () => {
  return (
    <ApexChartWrapper>
      <Grid container spacing={6}>
        <Grid item xs={12} md={12}>
          <AnalyticsVLIRooms />
        </Grid>
        <Grid item xs={12} md={12} lg={12}>
          <AnalyticsTable />
        </Grid>
      </Grid>
    </ApexChartWrapper>
  )
}

export default Overview
