import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
    Promise.all([
        client.hSet("prospect#0",{
            fullName:"ousf" , 
            contact :"linkedin"
        }) ,
        client.hSet("prospect#1",{
            fullName:"tiff" , 
            contact :"linkedin"
        }) ,
        client.hSet("prospect#2",{
            fullName:"loni" , 
            contact :"linkedin"
        }),
        client.hSet("prospect#3",{
            fullName:"cad" , 
            contact :"linkedin"
        })
    ])
    const commands = [0,1,2,3].map((id)=> {
        return  client.hGetAll(`prospect#${id}`)})
        
    const results =  Promise.all(commands)
    console.log(prospect)
};
run();
