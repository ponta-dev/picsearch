import { ServiceList } from './serviceList'

export function getInstance<T>(interfaceName: string):T {
    const service = ServiceList.find(service => service.id == interfaceName);
    if(service == undefined) {
        throw new Error("サービスの実装が登録されていません");
    }
    
    let impl: Object | undefined = undefined;
    switch(import.meta.env.VITE_MODE) {
        case "DEV":
            impl = service.dev;
        case "PROD":
            impl = service.prod;
            break;
        default:
            break;
    }
    if(impl == undefined) return service.dev as T;
    else return impl as T;
}