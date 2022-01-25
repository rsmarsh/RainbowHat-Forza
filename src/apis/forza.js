const telemetryData = [
    {
        name: 'isRaceOn',
        func: 'readInt32LE',
        transformData: (value) => Boolean(value),
        want: true
    },
    {
        name: 'TimestampMS',
        func: 'readInt32LE',
        transformData: (value) => new Date(value)
    },
    {
        name: 'EngineMaxRpm',
        func: 'readFloatLE'
    },
    {
        name: 'EngineIdleRpm',
        func: 'readFloatLE'
    },
    {
        name: 'CurrentEngineRpm',
        func: 'readFloatLE',
        want: true
    },
    {
        //In the car's local space; X = right, Y = up, Z = forward
        name: 'AccelerationX',
        func: 'readFloatLE'
    },
    {
        //In the car's local space; X = right, Y = up, Z = forward
        name: 'AccelerationY',
        func: 'readFloatLE'
    },
    {
        //In the car's local space; X = right, Y = up, Z = forward
        name: 'AccelerationZ',
        func: 'readFloatLE'
    },
    {
        //In the car's local space; X = right, Y = up, Z = forward
        name: 'VelocityX',
        func: 'readFloatLE'
    },
    {
        //In the car's local space; X = right, Y = up, Z = forward
        name: 'VelocityY',
        func: 'readFloatLE'
    },
    {
        //In the car's local space; X = right, Y = up, Z = forward
        name: 'VelocityZ',
        func: 'readFloatLE'
    },
    {
        name: 'AngularVelocityX',
        func: 'readFloatLE'
    },
    {
        name: 'AngularVelocitY',
        func: 'readFloatLE'
    },
    {
        name: 'AngularVelocityZ',
        func: 'readFloatLE'
    },
    {
        name: 'Yaw',
        func: 'readFloatLE'
    },
    {
        name: 'Pitch',
        func: 'readFloatLE'
    },
    {
        name: 'Roll',
        func: 'readFloatLE'
    },
    {
        // Suspension travel normalized: 0.0f = max stretch; 1.0 = max compression
        name: 'NormalizedSuspensionTravelFrontLeft',
        func: 'readFloatLE'
    },
    {
        name: 'NormalizedSuspensionTravelFrontRight',
        func: 'readFloatLE'
    },
    {
        name: 'NormalizedSuspensionTravelRearLeft',
        func: 'readFloatLE'
    },
    {
        name: 'NormalizedSuspensionTravelRearRight',
        func: 'readFloatLE'
    },
    {
        // Tire normalized slip ratio, = 0 means 100% grip and |ratio| > 1.0 means loss of grip.
        name: 'TireSlipRatioFrontLeft',
        func: 'readFloatLE'
    },
    {
        name: 'TireSlipRatioFrontRight',
        func: 'readFloatLE'
    },
    {
        name: 'TireSlipRatioRearLeft',
        func: 'readFloatLE'
    },
    {
        name: 'TireSlipRatioRearRight',
        func: 'readFloatLE'
    },
    {
        // Wheel rotation speed radians/sec.
        name: 'WheelRotationSpeedFrontLeft',
        func: 'readFloatLE',
        want: true
    },
    {
        name: 'WheelRotationSpeedFrontRight',
        func: 'readFloatLE'
    },
    {
        name: 'WheelRotationSpeedRearLeft',
        func: 'readFloatLE',
        want: true
    },
    {
        name: 'WheelRotationSpeedRearRight',
        func: 'readFloatLE'
    },
    // AT LEAST CORRECT TO HERE
    {
         // = 1 when wheel is on rumble strip, = 0 when off.
        name: 'WheelOnRumbleStripFrontLeft',
        func: 'readInt32LE'
    },
    {
        // = 1 when wheel is on rumble strip, = 0 when off.
       name: 'WheelOnRumbleStripFrontRight',
       func: 'readInt32LE'
    },
    {
        // = 1 when wheel is on rumble strip, = 0 when off.
       name: 'WheelOnRumbleStripRearLeft',
       func: 'readInt32LE'
    },
    {
        // = 1 when wheel is on rumble strip, = 0 when off.
       name: 'WheelOnRumbleStripRearRight',
       func: 'readInt32LE'
    },
    {
        // = from 0 to 1, where 1 is the deepest puddle
       name: 'WheelInPuddleDepthFrontLeft',
       func: 'readFloatLE'
    },
    {
       name: 'WheelInPuddleDepthFrontRight',
       func: 'readFloatLE'
    },
    {
       name: 'WheelInPuddleDepthRearLeft',
       func: 'readFloatLE'
    },
    {
       name: 'WheelInPuddleDepthRearRight',
       func: 'readFloatLE'
    },
    {
        // Non-dimensional surface rumble values passed to controller force feedback
       name: 'SurfaceRumbleFrontLeft',
       func: 'readFloatLE'
    },
    {
       name: 'SurfaceRumbleFrontRight',
       func: 'readFloatLE'
    },
    {
        name: 'SurfaceRumbleRearLeft',
        func: 'readFloatLE'
     },
     {
        name: 'SurfaceRumbleRearRight',
        func: 'readFloatLE'
     },
     {
         // Tire normalized slip angle, = 0 means 100% grip and |angle| > 1.0 means loss of grip.
        name: 'TireSlipAngleFrontLeft',
        func: 'readFloatLE'
     },
     {
        name: 'TireSlipAngleFrontRight',
        func: 'readFloatLE'
     },
     {
        name: 'TireSlipAngleRearLeft',
        func: 'readFloatLE'
     },
     {
        name: 'TireSlipAngleRearRight',
        func: 'readFloatLE'
     },
     {
         // Tire normalized combined slip, = 0 means 100% grip and |slip| > 1.0 means loss of grip.
        name: 'TireCombinedSlipFrontLeft',
        func: 'readFloatLE'
     },
     {
        name: 'TireCombinedSlipFrontRight',
        func: 'readFloatLE'
     },
     {
        name: 'TireCombinedSlipRearLeft',
        func: 'readFloatLE'
     },
     {
        name: 'TireCombinedSlipRearRight',
        func: 'readFloatLE'
     },
     {
         // Actual suspension travel in meters
        name: 'SuspensionTravelMetersFrontLeft',
        func: 'readFloatLE'
     },
     {
        name: 'SuspensionTravelMetersFrontRight',
        func: 'readFloatLE'
     },
     {
        name: 'SuspensionTravelMetersRearLeft',
        func: 'readFloatLE'
     },
     {
        name: 'SuspensionTravelMetersRearRight',
        func: 'readFloatLE'
    },
    {
        //Unique ID of the car make/model
        name: 'CarOrdinal',
        func: 'readInt32LE',
    },
    {
        // Between 0 (D -- worst cars) and 7 (X class -- best cars) inclusive
        name: 'CarClass',
        func: 'readInt32LE',
        want: true
    },
    {
        //Between 100 (slowest car) and 999 (fastest car) inclusive
        name: 'CarPerformanceIndex',
        func: 'readInt32LE',
        want: true
    },
    {
         //Corresponds to EDrivetrainType; 0 = FWD, 1 = RWD, 2 = AWD
        name: 'DrivetrainType',
        func: 'readInt32LE',
        want: true,
        transformData: (num) => {
            return ['FWD', 'RWD', 'AWD'][num];
        }
    },
    {
         //Number of cylinders in the engine
        name: 'NumCylinders',
        func: 'readInt32LE',
        want: true
    }, 
    // V2 from here
    { name: '?', func: 'readFloatLE', want: true },
    { name: '?', func: 'readFloatLE' },
    { name: '?', func: 'readFloatLE' },
    { name: 'PositionX', func: 'readFloatLE', want: true },
    { name: 'PositionY', func: 'readFloatLE' },
    { name: 'PositionZ', func: 'readFloatLE' },
     // meters per second
    { name: 'Speed', func: 'readFloatLE', transformData: (mps) => Math.floor(mps*2.236), 
    want: true },  
    // watts
    { name: 'Power', func: 'readFloatLE' },
    // newton meter
    { name: 'Torque', func: 'readFloatLE', want: true },
    { name: 'TireTempFrontLeft', func: 'readFloatLE' },
    { name: 'TireTempFrontRight', func: 'readFloatLE' },
    { name: 'TireTempRearLeft', func: 'readFloatLE' },
    { name: 'TireTempRearRight', func: 'readFloatLE' },
    { name: 'Boost', func: 'readFloatLE' },
    { name: 'Fuel', func: 'readFloatLE',
    want: true },
    { name: 'DistanceTraveled', func: 'readFloatLE',
    want: true },
    { name: 'BestLap', func: 'readFloatLE' },
    { name: 'LastLap', func: 'readFloatLE' },
    { name: 'CurrentLap', func: 'readFloatLE' },
    { name: 'CurrentRaceTime', func: 'readFloatLE' },
    { name: 'LapNumber', func: 'readUInt16LE', want: true },
    { name: 'RacePosition', func: 'readUInt8' },
    // Appears to be Steer value
    { name: 'Throttle', func: 'readUInt8',
    want: true },
    // not working due to FH5 data or a mismatch above, stil TODO
    // { name: 'Brake', func: 'readUInt8',
    // want: true },
    // { name: 'Clutch', func: 'readUInt8' },
    // { name: 'HandBrake', func: 'readUInt8', // this is a number of how much you are moving your analogue, seems to be the final data available too
    // want: true },
    // { name: 'Gear', func: 'readUInt8' },
    // { name: 'Steer', func: 'readInt8' },
    // { name: 'NormalizedDrivingLine', func: 'readInt8' },
    // { name: 'NormalizedAIBrakeDifference', func: 'readInt8' }

];

export const getRPMLevel = (idle, current, max) => {
    const upperNormalised = max - idle;
    const currentNormalised = current - idle;

    // convert it on to scale of 1 to 7
    let sevenRange = (currentNormalised/upperNormalised)*7;

    sevenRange = Math.floor(sevenRange);

    // sometimes the engine RPM goes below the idle level, ignore this
    sevenRange = Math.max(0, sevenRange);

    return sevenRange;
};

export const parseForzaData = (rawData) => {
    
    const parsedData = {};
    
    telemetryData.forEach((dataSet, index) => {
        const start = index*4;
        const end = start+4;
        const func = dataSet.func;
        const rawVal =  rawData.slice(start, end)[func]();
        parsedData[dataSet.name] = dataSet.transformData ? dataSet.transformData(rawVal) : rawVal;
    });

    return parsedData;
};