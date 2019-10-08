<template>
  <div class="wrapper">
    <div class='container'>
      <div class="title-box">
        <span class="fallback-icon" @click="jumpToHomePage"> {{fallbackIcon}} </span>
        <p class='title-content'>绑定车牌</p>
      </div>
      <div class='operation-box'>
        <input class='car-input' v-model='carNumber' type='text'/>
        <button class='car-button text--green' @click='addCarNumber'>添加车牌</button>
      </div>

      <div class='card' v-for='car in carInfo' :key='car.id'>
        <p class='card-title'>车牌</p>
        <p class='card-number text--green'>{{car.carNumber}}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'CarNumberBind',
    data() {
      return {
        fallbackIcon: '<',
        carNumber: null,
        carInfo: [
          {
            id: 1,
            carNumber: '粤Bddd112'
          },
          {
            id: 2,
            carNumber: '粤ccd332'
          }
        ]
      };
    },
    methods: {
      addCarNumber() {
        if (!this.carNumber) {
          return;
        }
        this.carInfo.push({
          id: this.carInfo.length + 1,
          carNumber: this.carNumber
        });
      },
      jumpToHomePage() {
        this.$router.push('/');
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .wrapper {
    font-size: 14px;
  }

  .container {
    display: flex;
    flex-direction: column;
    background: url("../assets/background.png") repeat;
    min-width: 100vw;
    min-height: 100vh;
  }

  .card {
    height: 80px;
    width: 90%;
    margin: 10px auto;
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

  .title {
    padding: 1em;
    color: #ffffff;
    font-size: 16px;
  }

  .card-title,
  .card-number {
    padding: 10px;
  }

  .card-number {
    font-size: 20px;
    text-align: center;
    padding-top: 0;
  }

  .operation-box {
    display: flex;
    flex-direction: row;
    margin: 0 auto;
  }

  .car-input {
    display: block;
    width: 60%;
    height: 20px;
    padding: 0.5rem 1.1rem;
    font-size: 1.063rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.1);

    border-radius: 5px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
  }

  .car-button {
    display: inline-block;
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    font-size: 0.875rem;
    line-height: 1.5rem;
    background-color: #fff;
    margin-left: 10px;
    border: 0;
    border-radius: 5px;
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
