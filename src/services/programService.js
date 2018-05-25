/**
 * Created by py on 18-5-23.
 */
import * as requestService from './request'
import * as program from '../mock/programs'
//TODO
function filterData (data) {
    return data.items
}
export function getProgramByCategoryId (category_id = '1', params = {}) {
    return filterData(program.programs)
}

export function getProgramById (id,params = {}) {
    return {};
}