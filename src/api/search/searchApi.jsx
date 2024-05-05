import * as request from '@/api/customMethod';
import handleLogError from '@/utils/handleLogError';
import config from '@/configs';

export const search = async (query, type = 'less') => {
    try {
        const res = await request.get(config.apis.search, {
            params: {
                q: query,
                type: type
            }
        });
        return res.data;
    } catch (error) {
        handleLogError(error);
    }
};