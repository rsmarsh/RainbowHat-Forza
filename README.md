# RainbowHat-Forza
Displays Forza telemetry data on a RainbowHAT to create a physical speedometer


## Operation
To operate, enable Forza Horizon 5 telemetry within the game options, and point the IP at your Raspberry Pi's local network IP address, the port will default to 1024

run ```npm install ``` followed by ```sudo node index.js``` and the server will begin listening for telemetry.

As data is received, the RainbowHAT will automatically update with the incoming data

Note: must be run as sudo to gain permission to control the RainbowHAT.
