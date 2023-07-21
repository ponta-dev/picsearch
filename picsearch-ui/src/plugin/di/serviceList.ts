import { UserServiceMockImpl } from "@/main/common/service/userServiceMockImpl";

interface ServiceListIF {
    id: string,
    dev: Object,
    prod?: Object
}

export const ServiceList: ServiceListIF[] = [
    {
        "id": "UserService",
        "dev": UserServiceMockImpl
    }
]