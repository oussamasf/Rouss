import {client } from "$services/redis/client"
const cacheRoutes = ["/about","/privacy","/auth/signup","/auth/signin"];
export const getCachedPage = (route: string) => {
  if (cacheRoutes.includes(route)){
    return client.get("pageCache#"+route)
  }
  return null;
};
export const setCachedPage = (route: string, page: string) => {
  if (cacheRoutes.includes(route)){
    return client.set("pageCache#"+route , page , {
      EX: 2
    })
  }
};
