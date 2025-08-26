import { Box } from '@mui/material'
import { useParams } from 'react-router-dom';

const Category = () => {
  const {category} = useParams();
  return (
    <Box>
      {category}
    </Box>
  )
}

export default Category
