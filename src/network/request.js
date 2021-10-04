import axios from 'axios'

// export function request(config,success,failure) {
//   //1.创建axios实例
//   const instance =axios.create({
//     baseURL:'http://123.207.32.32:8000',
//     timeout:5000
//   })
//   //发送真正的网络请求
//   instance(config)
//     .then(res=>{
//       // console.log(res)
//       success(res)
//     })
//     .catch(err=>{
//       // console.log(err)
//       failure(err)
//     })
// }

// export function request(config) {
//  return new Promise((resolve,reject)=>{
//     //1.创建axios实例
//     const instance =axios.create({
//       baseURL:'http://123.207.32.32:8000',
//       timeout:5000
//     })
//    //发送真正的网络请求
//    instance(config)
//      .then(res=>{
//         resolve(res)
//      })
//      .catch(err=>{
//        reject(err)
//      })
//   })
// }

export function request(config) {
    //1.创建axios实例,,cnpm install axios --save下载axios
    const instance =axios.create({
      baseURL:'http://123.207.32.32:8000',
      timeout:5000
    })
  //2.1.请求拦截axios拦截器作用情况
  //①config中的一些信息不符合服务器要求
  //②每次发送网络请求时，都希望在界面中显示一个请求图标
  //③某些网络请求（比如登录（token）），必须携带一些信息
  instance.interceptors.request.use(config=>{
    // console.log(config)
    return config//拦截config后释放回去
  },err=>{
    // console.log(err)
  })
  // 2.2响应拦截
  instance.interceptors.response.use(res=>{
    // console.log(res)
    return res//拦截res后释放回去
  },error => {
    // console.log(error)
  })
    //3.发送真正的网络请求并返回
   return instance(config)
}


