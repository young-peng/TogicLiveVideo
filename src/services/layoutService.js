/**
 * Created by py on 18-5-22.
 */
import layout from "../configs/layout.json";

//TODO 暂时mock数据处理，后续替换成服务端获取
export function getLayoutByTab (tab = 0, params = {}) {
    return layout.tabs[tab];
}