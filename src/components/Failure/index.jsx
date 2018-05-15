import React from 'react';
import styles from './styles.css';

function Failure() {
    return (
      <div className={styles.failure}>
          Failed to load the articles...
      </div>
    );
}

export default Failure;