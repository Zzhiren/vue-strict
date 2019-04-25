// import axios from "axios";
import router from '../router/index';

export default () => {
  // let loadingInstance; //创建Loading 的实例
  // axios.defaults.baseURL = 'http://localhost:3023'; // 配置axios请求的地址
  axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';
  axios.defaults.crossDomain = true;
  axios.defaults.withCredentials = true; //设置cross跨域 并设置访问权限 允许跨域携带cookie信息
  axios.defaults.headers.common['Authorization'] = ''; // 设置请求头为 Authorization
  axios.defaults.timeout = 60000;
  axios.defaults.method = 'POST';

  axios.interceptors.response.use(
    response => {
      if(response && response.data && response.data.code == 401){
        router.replace({
          name: 'Login',
          // query: {
          //   redirect: router.currentRoute.fullPath
          // }
        })
      }else{
        return response;
      }
    },
    error => {
      console.log(error)
      if (error.response) {
        switch (error.response.status) {
          case 401:
            router.replace({
              path: 'login',
              query: { redirect: router.currentRoute.fullPath }//登录成功后跳入浏览的当前页面
            })
        }
        return Promise.reject(error.response)
      }else {
        return Promise.reject(error)
      }
    });

  axios.interceptors.request.use(
    config => {
      //每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
      if (localStorage.token) {
        config.headers.Authorization = `${localStorage.token}`;
      }else{
        router.replace({
          name: 'Login'
        })
      }
      return config;
    },
    err => {
      return Promise.reject(err);
    }
  );

  return axios;
};
