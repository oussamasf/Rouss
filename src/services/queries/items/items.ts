import type { CreateItemAttrs } from '$services/types';
import {client} from '$services/redis' ;
import {serialize} from './serialize';
import {genId} from '$services/utils';
import { itemsKey } from '$services/keys';
import { deserialize } from './deserialize';


export const getItem = async (id: string) => {
const item = await client.hGetAll(itemsKey(id));
if(Object.keys(item).length===0) return null
return deserialize(id,item)
};

export const getItems = async (ids: string[]) => {
    const commands = ids.map(id=>{
        return client.hGetAll(itemsKey(id))
    })
    const results = await Promise.all(commands)
   return  results.map(result => {
if (Object.keys(result,index).length===0){
    return null
}
return deserialize(ids[index],result)
    })
};

export const createItem = async (attrs: CreateItemAttrs, userId: string) => {
    const id = genId();
    const serializedItem = serialize(attrs);
    await client.hSet(itemsKey(id),serializedItem)
    return id
};
