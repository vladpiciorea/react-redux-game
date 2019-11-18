import React from 'react';
import { puke } from '../helpers/utils';

const styles = { position: 'fixed', top: 0, left: 16 };

const DebugState = ({ data }) => <div style={styles}>{puke(data)}</div>

export default DebugState