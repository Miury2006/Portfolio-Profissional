import React, { useEffect } from 'react';
import { updateScrollIndicator } from '../../utils/helpers';
import styles from './ScrollIndicator.module.css';

const ScrollIndicator = () => {
  useEffect(() => {
    window.addEventListener('scroll', updateScrollIndicator);
    return () => window.removeEventListener('scroll', updateScrollIndicator);
  }, []);

  return <div className={styles.scrollIndicator}></div>;
};

export default ScrollIndicator;