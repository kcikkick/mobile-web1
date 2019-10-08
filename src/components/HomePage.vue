<template>
  <div class="container">
    <div class='carousel-box'>
      <div class='carousel-image'>
      </div>
      <div class='user-info-box'>
        <div class='user-info-image-box'>
          <img class='user-info-image image--fix' src='../assets/1.jpg' alt='user-info'>
        </div>
        <div class='user-info-description'>
          <p>用户: {{wechatID}}</p>
          <p>欢迎您</p>
        </div>
      </div>
    </div>

    <div class='menu' @click='jumpToPath("myCoupon")'>
      <div class='detail-image'>
        <img class='image--fix' src='../assets/menu1.png' alt='menu1'>
      </div>
      <div class='detail-content'>
        我的优惠券
      </div>
      <div class='detail-icon'>
        >
      </div>
    </div>

    <div class='menu' @click='jumpToPath("carNumberBind")'>
      <div class='detail-image'>
        <img class='image--fix' src='../assets/menu2.png' alt='menu2'>
      </div>
      <div class='detail-content'>
        绑定车牌
      </div>
      <div class='detail-icon'>
        >
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HomePage',
    data() {
      return {
        wechatID: 'nickkcik'
      };
    },
    methods: {
      jumpToPath(path) {
        this.$router.push(path);
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    font-size: 14px;
  }

  .image--fix {
    background-repeat: no-repeat;
    background-size: cover;
  }

  p {
    margin: 0;
  }

  .carousel-box {
    height: 120px;
    width: 100%;
    position: relative;
  }

  .carousel-image {
    width: 100%;
    height: 100%;
    background: url("../assets/background.png") repeat;
  }

  .user-info-box {
    position: absolute;
    bottom: 30px;
    margin-left: 50px;
    color: #ffffff;
    display: flex;
    flex-direction: row;
  }

  .user-info-image-box {
    width: 60px;
    height: 60px;
  }

  .user-info-image {
    width: 100%;
    height: 100%;
    border-radius: 30px;
  }

  .user-info-description {
    text-align: left;
    margin-left: 30px;
    padding-top: 10px;
  }

  .menu {
    display: flex;
    flex-direction: row;
    padding: 15px 20px;
    border-bottom: 1px solid #ddd;
  }

  .detail-image {
    width: 56px;
    height: 56px;
    background: #149972;
    border-radius: 32px;
  }

  .detail-image img {
    width: 80%;
    height: 80%;
    margin-top: 5px;
  }

  .detail-content {
    line-height: 56px;
    margin-left: 20px;
  }

  .detail-icon {
    font-size: 26px;
    line-height: 56px;
    flex: 1 1 auto;
    display: flex;
    justify-content: flex-end;
  }

</style>
