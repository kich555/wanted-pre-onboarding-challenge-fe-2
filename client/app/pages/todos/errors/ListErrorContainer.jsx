import { Box } from '@mantine/core';
import ErrorHandler from '~/pages/errors/ErrorHandler';

export default function ListErrorContainer({ error }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh', width: '100vw', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <Box sx={{ overflow: 'hidden', borderRadius: '12px' }}>
        <ErrorHandler error={error} />
      </Box>
    </Box>
  );
}
