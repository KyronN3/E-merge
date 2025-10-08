import { axiosAPI } from "@/axios";
import type { BusinessService, getAllBusinessAction } from "@/type/Business-type";
import type { BusinessResponse } from "@/type/Business-type";
import { useBusinessStore } from "@/store/Business-store";

export const useBusinessService = (): BusinessService => {
    const { setBusiness } = useBusinessStore();

    const getAllBusiness: getAllBusinessAction = async () => {
        try {
            const response = await axiosAPI.get<BusinessResponse>("business/all")
            setBusiness(response.data)
            return { success: true }
        } catch (error: unknown) {
            console.error(error);
            return { success: false }
        }
    }

    return { getAllBusiness }
}