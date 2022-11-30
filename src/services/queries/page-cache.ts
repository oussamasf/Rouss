import {client } from "$services/redis/client"
import { pageCacheKey } from "$services/keys";
const cacheRoutes = ["/about","/privacy","/auth/signup","/auth/signin"];
export const getCachedPage = (route: string) => {
  if (cacheRoutes.includes(route)){
    return client.get(pageCacheKey(route))
  }
  return null;
};
export const setCachedPage = (route: string, page: string) => {
  if (cacheRoutes.includes(route)){
    return client.set(pageCacheKey(route) , page , {
      EX: 2
    })
  }
};
