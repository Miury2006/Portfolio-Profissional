import React, { useState, useEffect } from 'react';
import { generateParticles } from '../../utils/helpers';
import styles from './FloatingParticles.module.css';

const FloatingParticles = ({ count = 50 }) => {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    setParticles(generateParticles(count));
  }, [count]);

  return (
    <div className={styles.floatingParticles}>
      {particles.map(particle => (
        <div
          key={particle.id}
          className={styles.particle}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDelay: `${particle.delay}s`
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;