const net = require('net');
const client = new net.Socket();

const PORT = process.env.PORT || 3001;

let logCount = 1;
let errorCount = 1;

client.connect(PORT, 'localhost', () => {
  console.log(`Logger running on ${PORT}`);
});

client.on('data', data => {
  let json = JSON.parse(data);
  if (json.eventType === 'save') {
    console.log(`Log ${logCount}:`, json);
    logCount++;
  } else if (json.eventType === 'error') {
    console.log(`Error ${errorCount}:`, json);
    errorCount++;
  }
  
});

client.on('close', () => {
  console.log('Connection closed');
});