import axios from 'axios'; // 引入axios



//get方法
export function get(url){    
  return new Promise((resolve, reject) =>{        
      axios.get(url).then(res => {
        resolve(res.data);
      }).catch(err =>{
        reject(err.data)    
    })    
  });}