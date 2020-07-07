<template>
  <div class="home">
    22223
  </div>
</template>

<script>

// import axios from 'axios';

export default {
  name: 'Home',
  mounted() {
    window.wx.config({
      debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
      appId: 'wx57f1ffbcdc635211', // 必填，公众号的唯一标识
      timestamp: '1594104671', // 必填，生成签名的时间戳
      nonceStr: 'tbaixdgfd19', // 必填，生成签名的随机串
      signature: 'ec9a68224dcc15c4d2f909d90991fd7e00b4a793', // 必填，签名
      jsApiList: ['onMenuShareWeibo'], // 必填，需要使用的JS接口列表
    });
    // // axios.get('http://www.sevenseven.site/wx/').then((res) => {
    // //   const { data } = res;
    // //   const {
    // //     appID,
    // //     noncestr,
    // //     signature,
    // //     timestamp,
    // //   } = data;
    // //   window.wx.config({
    // //     debug: true, // 调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
    // //     appId: appID, // 必填，公众号的唯一标识
    // //     timestamp, // 必填，生成签名的时间戳
    // //     nonceStr: noncestr, // 必填，生成签名的随机串
    // //     signature, // 必填，签名
    // //     jsApiList: ['onMenuShareWeibo'], // 必填，需要使用的JS接口列表
    // //   });
    // });
  },
};
</script>
