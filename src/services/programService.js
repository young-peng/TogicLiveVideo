/**
 * Created by py on 18-5-23.
 */
import * as requestService from './request'

export function getProgramByCategoryId (category_id = '1', params = {}) {
    return requestService.get("/programs",{
        category_id,
        page_size:10,
        page_no:1,
        ...params
    }).then(data=>{
        console.log(data);
        if(data.items) {
            return data.items;
        } else {
            throw 'get failed'
        }
    })
}

export function getProgramById (id,params = {}) {
    return {};
}