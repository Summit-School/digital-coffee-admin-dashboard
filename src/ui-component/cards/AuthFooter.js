// material-ui
import { Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION 2 & 3 ||============================== //

const AuthFooter = () => (
  <Stack direction="row" justifyContent="space-between">
    <Typography variant="subtitle2" component={Link} href="https://summittech-eng.org" target="_blank" underline="hover">
      summittech-eng.org
    </Typography>
    <Typography variant="subtitle2" component={Link} href="https://summittech-eng.org" target="_blank" underline="hover">
      &copy; summittech-eng.org
    </Typography>
  </Stack>
);

export default AuthFooter;
