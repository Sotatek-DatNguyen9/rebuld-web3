import { useMediaQuery } from '@mui/material';
import theme from 'src/theme';

type DeviceSlugs = 'mobile' | 'desktop';

export const QueryMapping = {
  desktop: theme.breakpoints.up('md'),
  mobile: theme.breakpoints.down('md'),
};
export const useResponsive = (device: DeviceSlugs = 'mobile') => {
  const isTheDevice = useMediaQuery(QueryMapping[device]);

  return { mobile: isTheDevice };
};
