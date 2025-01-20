

import axios from "axios"
axios.defaults.headers.common['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibWF6YWhhcnVsIGlzbGFtIiwiZW1haWwiOiJleEBnbWFpbC5jb20iLCJzdGF0dXMiOiJ1c2VyIiwiaWF0IjoxNzM3Mjg5Njc2fQ._iHwWR5H9HuJqmaZPue8w5Ur2r7DdGLqBYLMkB-rlIE';

export const basicClient=axios.create({
    baseURL:"http://localhost:7070/api"
})


