import type { BusinessColumn, BusinessResponse, BusinessField } from "@/type/Business-type";
import type { BusinessStore, SetBusiness } from "@/type/Store-type";


export const useBusinessStore = (): BusinessStore => {

    const setBusiness: SetBusiness<BusinessResponse> = (data) => {
        localStorage.setItem("business-city", JSON.stringify(data))
    }

    const getBusiness = (): BusinessColumn[] | null => {
        const business = localStorage.getItem("business-city");

        if (!business || business === undefined) {
            return null
        }
        try {
            const json = JSON.parse(business).data;
            const toTransf: BusinessField[] = Object.values(json);
            const data: BusinessColumn[] = toTransf.map((data, index) => ({
                id: data.id,
                rank: index + 1,
                business_name: data.name,
                address: data.address,
                city: data.city,
                date: data.date,
                rating: data.rating,
                visitor_count: data.visitor_count,
                visitor_gained: `+${data.visitor_gained}%`,
            }))
            return data;
        } catch {
            return null
        }
    }

    const clearBusiness = (): void => {
        localStorage.removeItem("business-city")
    }

    return { setBusiness, getBusiness, clearBusiness }

}