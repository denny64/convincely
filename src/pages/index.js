import React from 'react';
import Tooltip from '../components/tooltip';

const styles = {
  container: {
    maxWidth: 1000,
    paddingLeft: "20%",
    paddingRight: "20%",
    marginTop: 100,
    display: "flex"
  }
}

export default () => (
  <div style={styles.container}>
    <Tooltip hover />
    <Tooltip click />
  </div>
)