import udp from 'dgram';
const server = udp.createSocket('udp4');

export const createServer = (config) => {
        
    server.on('error', err => {
        console.error(err)
        server.close();
    });

    server.on('message', (msg, info) => {
        config.handleData(msg);
    }); 

    server.on('listening', () => {
        const address = server.address();
        const port = address.port;
        const ipaddr = address.address;
        console.log(`UDP Server is listening at ${ipaddr}:${port}`);
    });

    //emits after the socket is closed using socket.close();
    server.on('close', () => {
        console.log('socket has closed');
    });

    server.bind(config.port || 1024);

    
    config.handleData;
};
