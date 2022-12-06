import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    await client.hSet("prospect",{
        fullName:"ousf" , 
        contact :"linkedin"
    })
    const prospect = await client.hGetAll("prospect")
    console.log(prospect)
};
run();
