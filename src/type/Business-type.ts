
export interface BusinessResponse {
    success: boolean,
    data: {
        id: number,
        user_id: number,
        name: string,
        address: string,
        city: string,
        business_id: number,
        date: string,
        rating: string,
        visitor_count: string,
        visitor_gained: string,
    }[]
}

export interface BusinessField {
    id: number,
    user_id: number,
    name: string,
    address: string,
    city: string,
    business_id: number,
    date: string,
    rating: string,
    visitor_count: string,
    visitor_gained: string,
}

export interface BusinessColumn {
    id: number;
    rank: number;
    business_name: string;
    address: string;
    city: string;
    date: string;
    rating: string;
    visitor_count: string;
    visitor_gained: string;
}

export type getAllBusinessAction = () => Promise<BusinessResponse | { success: boolean } | void>;

export interface BusinessService {
    getAllBusiness: getAllBusinessAction
}

