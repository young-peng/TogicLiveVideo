/**
 * Created by py on 18-5-22.
 */
import * as layout from "../configs/layout";
import * as Tabs from '../constants/Tabs'

//TODO 暂时mock数据处理，后续替换成服务端获取
export function getLayoutByTab (tab = "index", params = {}) {
    const index = Tabs.tabs.indexOf(tab);
    return layout.layouts.tabs[index].cells;
}