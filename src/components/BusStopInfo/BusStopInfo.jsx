import React from 'react';

import cssmod from './BusStopInfo.module.css';

const busStopInfo = (props) => (
    <div className={cssmod.BusStopInfoLabel}>
        <div className={cssmod.BusStopCodeLabel}>BUS STOP {props.busStopCode}</div>
        <div className={cssmod.BusStopNameLabel}>{props.busStopName}</div>
    </div>
)

export default busStopInfo;