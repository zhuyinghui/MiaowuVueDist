import Axios from 'axios';
import Vue from 'vue'
 let getGoods = function (callback) {
   let imgApi='http://zhuyinghui.shop/';
    Axios.get('http://zhuyinghui.shop/api/goodsList').then(res=>{
    let arr=[];
    res.data.data.forEach((item)=>{
      Vue.set(item, 'goodsimgs', imgApi+item.picture);
      Vue.set(item, 'count', 1);
      Vue.set(item, 'checked', true);
      arr.push(item);
    });
     callback(arr)
  });
};
let getClass =function (callback) {
  let imgApi='http://zhuyinghui.shop/';
  Axios.get('http://zhuyinghui.shop/api/goodsClass').then(res=>{
    let arr=[];
    res.data.data.forEach((item)=>{
      Vue.set(item, 'classimgs', imgApi+item.classimg);
      arr.push(item);
    });
    callback(arr)
  });
};

export { getGoods,getClass }
