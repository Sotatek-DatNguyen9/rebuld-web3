import clsx from 'clsx';
import { useGlobalStyles } from 'src/theme';
import { useResponsive } from '.';

export const useFontStyle = () => {
  const classes = useGlobalStyles();
  const { mobile } = useResponsive();

  return (className: string | number) => {
    return clsx({ [classes[className]]: mobile });
  };
};
