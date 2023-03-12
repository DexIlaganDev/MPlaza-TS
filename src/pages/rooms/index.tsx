import React from 'react'

//** call supabase */
import supabase from 'src/configs/supabase'

// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

// ** Props
type Props = {}

type RoomProps = {
  id : number,
  room_number : string,
  office_name : string,
  is_commercial : boolean
}

const Rooms = (props: Props) => {
  const [ fetchError, setFetchError ] = React.useState<null | string>(null)
  const [ rooms, setRooms ] = React.useState<null | RoomProps[] >(null)

  React.useEffect( ()=>{

    const fetchRooms = async () =>  {
      const { data:Rooms, error } = await supabase
          .from('officescript')
          .select('*')
          .order('room_number')

          if(error) {
            setFetchError("Error calling rooms")
            setRooms(null)
          }
          if(Rooms) {
            setFetchError(null)
            setRooms(Rooms as RoomProps[])
          }
    }

    fetchRooms()

  }, [])

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='Rooms'>
          <TableHead>
            <TableRow>
              <TableCell>Room #</TableCell>
              <TableCell>Offices / Client</TableCell>
              <TableCell>Is Commercial</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rooms && rooms.map(room => (
              <TableRow
                key={room.id}
                sx={{
                  '&:last-of-type td, &:last-of-type th': {
                    border: 0
                  }
                }}
              >
                <TableCell component='th' scope='row'>
                  {room.room_number} 
                </TableCell>
                <TableCell>{room.office_name}</TableCell>
                <TableCell>{room.is_commercial ? 'Yes' : 'No'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Rooms