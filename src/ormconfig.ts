import { ConnectionOptions } from 'typeorm';

const config: ConnectionOptions = {
    type:'postgres',
    host:'localhost',
    port: 5432,
    username:'postgres',
    password: 'aA123!@#',
    database:'medium'
};

export default config;
