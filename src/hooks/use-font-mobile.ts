import clsx from 'clsx';
import _ from 'lodash';
import { useGlobalStyles } from 'src/theme';
import { useResponsive } from '.';

export const useFontMobile = () => {
  const classes = useGlobalStyles();
  const { mobile } = useResponsive();

  return ([...mobileClass]: string[] | number[]) => {
    const classNames = _.map(mobileClass, (className) => classes[className]);

    return mobile ? clsx(classNames.join()) : '';
  };
};
