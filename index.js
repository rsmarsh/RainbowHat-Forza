import { createServer } from './src/udp-server.js';
import { parseForzaData, getRPMLevel } from './src/apis/forza.js';
import { setRainbowRange, setScreen } from './src/apis/rainbow-hat.js';

// Updates both the rainbow lights, and the LED segment display
const updateRainbowHat = ( { Speed, EngineIdleRpm, CurrentEngineRpm, EngineMaxRpm}) => {
    setScreen(Speed);
    const rpmLevel = getRPMLevel(EngineIdleRpm, CurrentEngineRpm, EngineMaxRpm);
    setRainbowRange(0, rpmLevel);
};

// The raw buffer data is sent to this function, before becoming human readable
const receiveForzaData = (rawData) => {
    const parsedData = parseForzaData(rawData);
    updateRainbowHat(parsedData);
}

// Starts the UDP server and listens for data
// The handleData function will receive all the data untouched from the source
createServer({
    handleData: receiveForzaData
});
