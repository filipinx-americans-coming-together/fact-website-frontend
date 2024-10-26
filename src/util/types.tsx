export interface ResponseData<T> {
    fields: T;
    model: string;
    pk: number;
}

export interface NotificationData {
    message: string;
    expiration: Date;
}

export interface UserResponse {
    delegate: ResponseData<DelegateData>[];
    registration: ResponseData<RegistrationData>[];
    user: ResponseData<UserData>[];
}

export interface WorkshopResponse {
    workshop: ResponseData<WorkshopData>[];
    location: ResponseData<LocationData>[];
}

export interface SchoolData {
    id: number;
    name: string;
}

export interface UserData {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}

export interface DelegateData {
    id: number;
    pronouns: string;
    year: string;
    school: number;
}

export interface WorkshopData {
    id: number;
    session: number;
    title: string;
    facilitators: string[];
    description: string;
    location: number;
}

export interface RegistrationData {
    delegate: number;
    workshop: number;
}

export interface LocationData {
    id: number;
    room_num: string;
    building: string;
    capacity: number;
    session: number;
}
