// ThirdFram.jsx

import React from 'react';
import Card3 from './Card3';
import styles from '../../styles/ThirdFram.module.css'; // Import your CSS file

const ThirdFram = () => {
  return (
    <section className={styles.glassMorphismSection}>
      <div className="flex min-h-screen flex-col items-center justify-between">
        <Card3/>
      </div>
    </section>
  );
}

export default ThirdFram;
