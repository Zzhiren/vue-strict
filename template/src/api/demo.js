import axiosConfig from "@/api/axios.base.config";

const axios = axiosConfig();

/**
 * @description 系统配置模块接口请求
 */
const api = {
  /**
   * @description 获取数据
   * @param   {INT}       pagesize    每页显示条数 默认12条
   * @param   {INT}       pageindex   页码
   */
  getData(data, callback) {
    axios({
      url: '/base/data',
      data: data
    }).then(res => {
      callback(res.data);
    })
  }
}
export default api;
