import * as request from '@/api/customMethod';
import handleLogError from '@/utils/handleLogError';
import config from '@configs';

export const getSuggestedUsers = async (page = 1, perPage = 5) => {
    try {
        const res = await request.get(config.apis.suggestedUsers, {
            params: {
                page: page,
                per_page: perPage
            }
        });
        return res.data;
    } catch (error) {
        handleLogError(error);
    }
};

export const getFollowingUsers = async (page = 1) => {
    try {
        const res = await request.get(config.apis.followingUsers, {
            params: {
                page: page,
            },
            headers: {
                'Authorization': `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC90aWt0b2suZnVsbHN0YWNrLmVkdS52blwvYXBpXC9hdXRoXC9sb2dpbiIsImlhdCI6MTcxNDI5MTk1MCwiZXhwIjoxNzE2ODgzOTUwLCJuYmYiOjE3MTQyOTE5NTAsImp0aSI6ImVtekgwV1JBWTNPSGVjTmwiLCJzdWIiOjY2NzYsInBydiI6IjIzYmQ1Yzg5NDlmNjAwYWRiMzllNzAxYzQwMDg3MmRiN2E1OTc2ZjcifQ.1SJzW4Fl_BvkvQdxzD7q76tP6E7rbkclJmpZybDhOHA`
            }
        });
        return res.data;
    } catch (error) {
        handleLogError(error);
    }
};