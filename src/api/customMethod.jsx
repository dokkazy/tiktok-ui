
import { instance } from "./instance";

export const get = async (path, options = {}) => {

        const res = await instance.get(path, {
            ...options,
            validateStatus: (status) => {
                return status >= 200 && status < 500;
            }
        });
        return res.data;

}