<template>
  <div class="wrapper">
    <div class='container'>
      <div class="title-box">
        <span class="fallback-icon" @click="jumpToHomePage"> {{fallbackIcon}} </span>
        <p class='title-content'>我的优惠券</p>
      </div>
      <div class='card' v-for='coupon in couponInfo' :key='coupon.id'>
        <p class='card-number'>车牌: {{coupon.carNumber}}</p>
        <div class='card-count'>
          <span class='card-count--hightlight'><span class='text--green'>{{coupon.carCount}}</span>次</span>
          <span class='card-count-tip text--yellow'>{{coupon.carType}}</span>
        </div>
        <div class='card-description'>
          劵描述：{{coupon.carDescription}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MyCoupon',
    data() {
      return {
        fallbackIcon: '<',
        couponInfo: [
          {
            id: 1,
            carNumber: '粤Bddd112',
            carCount: 3,
            carType: '洗车劵',
            carDescription: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          },
          {
            id: 2,
            carNumber: '粤ccd332',
            carCount: 1,
            carType: '代驾劵',
            carDescription: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
          }
        ]
      };
    },
    methods: {
      jumpToHomePage() {
        this.$router.push('/');
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
  }

  .container {
    display: flex;
    flex-direction: column;
    background: url("../assets/background.png") repeat;
    min-width: 100vw;
    min-height: 100vh;
  }

  .card {
    height: 150px;
    width: 90%;
    margin: 20px auto;
    background-color: white;
    border-radius: 5px;
    text-align: left;
    color: #215137;
    box-shadow: 0 0.46875rem 2.1875rem rgba(4, 9, 20, .03), 0 0.9375rem 1.40625rem rgba(4, 9, 20, .03), 0 0.25rem 0.53125rem rgba(4, 9, 20, .05), 0 0.125rem 0.1875rem rgba(4, 9, 20, .03);
  }

  p {
    margin: 0;
  }

  .text--green {
    color: #0f8262;
  }

  .text--yellow {
    color: #ffad4a;
  }

  .card-number {
    padding: 10px;
    border-bottom: 1px solid #ddd;
  }

  .card-count {
    padding: 20px 20px 0 20px;
    display: flex;
    justify-content: space-between;
  }

  .card-count--hightlight {
    font-size: 25px;
  }

  .card-count-tip {
    font-size: 14px;
    display: flex;
    align-items: flex-end;
  }

  .card-description {
    word-break: break-all;
    height: 35px;
    text-overflow: ellipsis;
    overflow: hidden;
    padding: 5px 20px
  }

  .title-box {
    display: flex;
    flex-direction: row;
  }

  .fallback-icon {
    padding: 1em 0 0 1em;
    color: #ffffff;
    font-size: 17px;
  }

  .title-content {
    padding: 1em;
    color: #ffffff;
    font-size: 16px;
    flex: 1 1 auto;
  }
</style>
