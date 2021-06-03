const os = require('os');

//info user
const user = os.userInfo();
console.log(user);
console.log(`System uptime ${os.uptime()}`);

const currentOs ={
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
};

console.log(currentOs);