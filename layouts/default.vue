<template>
  <div>
    <header>
      <h1 class="nav-logo">
        <nuxt-link to="/">BOLETIN<span>EXTRAOFICIAL</span></nuxt-link>
      </h1>
      <div class="renav">
        <nuxt-link to="/">Macroeconomia</nuxt-link>
        <nuxt-link to="/a">Urbanismo</nuxt-link>
      </div>
    </header>
    <div class="content-container">
      <charts-kpinav />

      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  scrollToTop: false,
  data() {
    return {
      openNav: false,
    };
  },
  watch: {
    $route(to, from) {
      this.openNav = false;
    },
  },
};
</script>  
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap");
.chartcont {
  display: block;
  //align-items: flex-start;
  flex-direction: column-reverse;
  @media only screen and (max-width: 600px) {
    display: block;
  }
  > * {
    flex: 2;
    padding: 0 10px 0 20px;
  }
  .flexedtable {
    flex: 1;
    padding: 0;
    padding-right: 0px;
    display: none;
    //margin-right: 20px;
    //max-width: 300px;
    //border-right: 2px solid #f7f5f0;
    @media only screen and (max-width: 600px) {
      max-width: 100%;
      border: 0;
    }
    > div {
      max-height: 230px;
      overflow: auto;
      display: flex;
      &.flexedcontent {
        flex-direction: column;
        .green {
          background: #00996620;
        }
        .green.red {
          background: #b2222220;
        }
      }
      > div {
        flex: 1;
        display: flex;
        gap: 20px;
        border-bottom: 1px solid #f7f5f0;

        > div {
          flex: 1;
          padding: 10px 0;
          text-align: right;
          color: #555;
          &:last-child {
            max-width: 80px;
            padding-right: 10px;
          }
          &:first-child {
            text-align: left;
            max-width: 80px;
          }
        }
      }
    }
  }
}
#pepe {
  top: -3px;
  right: 10px;
  width: 50px;
  height: auto;
  z-index: 9999999;
  position: relative;
}

.content-container {
  margin: 0px auto;
  //background: #000;
  //height: 100vh;
  //max-width: 1440px;
  @media only screen and (max-width: 600px) {
    margin-top: 10px;
  }
}
html {
  box-sizing: border-box;
  font-family: arial, helvetica, sans-serif;
  * {
    color: #262626;
  }
}
*,
*:before,
*:after {
  box-sizing: inherit;
}
.renav {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  right: 0;
  align-items: center;
  bottom: 0;
  @media only screen and (max-width: 600px) {
    display: none;
  }
  a {
    padding: 10px 15px;
    color: #666;
    text-decoration: none;
    &.nuxt-link-exact-active.nuxt-link-active {
      color: #eee;
      background: #151515;
      border-radius: 5px;
    }
  }
}
header {
  background: rgba(55, 53, 47, 0.08);
  background: #000;
  position: fixed;
  top: 0;
  height: 60px;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  //justify-content: space-between;
  z-index: 999;
  img {
    width: 30px;
    height: auto;
    opacity: 0.8;
  }
}

header h1 {
  text-align: left;
  margin: 0;
  line-height: 60px;

  padding: 0 20px;
  position: relative;
  z-index: 99;
  a {
    color: #ddd;
    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    text-decoration: none;
    font-weight: 600;
    line-height: 20px;

    span {
      font-weight: 400;
      color: #fff;
    }
  }
}

body {
  font-family: arial, helvetica, sans-serif;
  background: rgb(245 246 250);
  background: #f7f5f0;
  background: rgb(247, 246, 243);
  //background: #000;
  margin: 0;
  font-size: 15px;
  padding: 0;
  padding-top: 60px;
  padding-left: 0px;
}

p {
  margin-top: 0;
  line-height: 1.4;
  color: #262626;
}

.selector {
  display: flex;
  a {
    text-decoration: none;
    background: none;
    border: 0;
    min-width: max-content;
    flex: 1;
    text-align: left;
    color: #666;
    padding: 0 20px;
    line-height: 60px;
    cursor: pointer;
    text-transform: uppercase;
    display: block;

    &:hover {
      background: #000;
    }
    &.active {
      background: rgba(253, 216, 53, 1);
      color: #333;
    }
  }
}

.acti-list {
  overflow: auto;
  //display: flex;
  flex-direction: column;
  //justify-content: space-between;
  position: absolute;
  h2 {
    padding: 0 0 10px;
    font-weight: 500;
  }
  > * {
    flex: 1;
  }
  .relist div {
    user-select: none;
    color: #666;
  }
  .redesc,
  .relist div {
    padding: 10px 20px 10px 0;
    border-bottom: 1px solid #f7f5f0;
    cursor: pointer;
    opacity: 1;
    color: #888;
    &:hover {
      color: #111;
    }
    &.active {
      pointer-events: none;
      span {
        opacity: 1;
        background: rgba(253, 216, 53, 1);
        color: #111;
      }
    }
  }
  .redesc {
    opacity: 1;
    border: 0;
    cursor: auto;
    i {
      padding-bottom: 5px;
      display: inline-block;
    }
  }
}

h4 {
  margin: 0;
  line-clamp: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;
  position: absolute;
  color: #aaa;
  background: #fff;
  padding: 1px 10px;
  left: 20px;
  font-size: 12px;
  top: 5px;
}

em {
  background: rgba(253, 216, 53, 0.7);
  font-style: normal;
  font-weight: bold;
  color: #111;
}

p {
  margin-top: 0;
  line-height: 1.4;
  color: #262626;
}

a {
  color: #2e78d2;
}

.title-container {
  padding: 0 20px;
  padding-bottom: 15px;
  margin-bottom: 15px;
  border-bottom: 2px solid #f7f5f0;
  display: flex;
  justify-content: space-between;
  > * {
    flex: 1;
    max-width: max-content;
  }
  h2 {
    margin: 0;
    font-size: 18px;
    min-width: 300px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;

    font-weight: normal;
    color: #888;

    i {
      display: block;
      font-size: 14px;
      font-family: Arial, Helvetica, sans-serif;
      font-style: normal;
      color: #888;
      margin-top: 10px;
      a {
        color: #888;
      }
    }
    span {
      //display: block;
      font-weight: 600;
      color: #262626;
    }
  }
}

.headbert {
  width: 100%;
  border-radius: 4px;
  max-width: 1440px;
  //box-shadow: 0px 0px 15px 5px rgba(109,145,179,0.5);
  margin: 10px auto 15px;
  background: #fff;
  padding: 20px 25px 20px;
  overflow: hidden;
  display: flex;
  border-top: 0;
      border: 2px solid #eee;

  //border: 10px solid #000;
  //display: none;
  > div {
    display: flex;
    justify-content: space-between;
    flex: 1;
    @media only screen and (max-width: 600px) {
      display: block;
      em {
        display: none;
      }
      .capis {
        margin-top: 10px;
      }
    }
    > * {
      flex: 1;
    }
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 0px;
    padding: 0;
  }
  h1 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 500;
    padding: 0;
    margin: 0;
    margin-bottom: 10px;
  }
  p {
    color: #262626;
    font-size: 16px;
    margin: 0;
  }
}

.capis {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  @media only screen and (max-width: 600px) {
    justify-content: space-between;
  }
  > * {
    flex: 1;
    max-width: max-content;
    h2 {
      min-width: auto !important;
      margin: 5px 0 5px;
    }
  }
}

.section-container {
  padding-bottom: 100px;
  padding-left: 0px;

  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  > a {
    flex: 1;
    max-width: calc(20% - 10px);
    min-width: 350px;
    display: block;
    padding: 20px 0px 10px 0px;
    background: #fff;
    border-radius: 0px;
    margin: 0px;
    border: 2px solid #eee;
    position: relative;
    text-decoration: none;
    order: 100;
    #emae {
      order: 1;
    }
    &:hover {
      background: #fafafa;
    }
  }
}
.backdrop {
  display: none;
  &.active {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: block;
    z-index: 9;
  }
}
.navigator {
  background: #fff;
  max-width: 350px;
  position: fixed;
  top: 60px;
  right: 0;
  bottom: 0;
  overflow: auto;
  z-index: 999999;
  display: none;
  &.active {
    display: block;
  }
  .separator > div {
    padding: 8px 30px 8px 15px;
    background: #f7f5f0;
    font-size: 14px;
    color: #555;
  }
  label {
    list-style: none;
    padding: 10px 30px 10px 15px;
    display: block;
    border-bottom: 1px solid #f7f5f0;
    font-size: 14px;
    line-height: 1.4;
    span {
      color: #555;
    }
    cursor: pointer;
    input:checked + span {
      //background: rgba(253, 216, 53, 0.7);
      font-style: normal;
      font-weight: bold;
      color: #111;
    }
    &:hover {
      color: #111;
    }
  }
}
@keyframes rotatesun {
  0% {
    transform: translateX(0) translateY(0) rotate(0);
  }
  25% {
    transform: translateX(-100px) translateY(100px) translateX(180deg);
  }
  50% {
    transform: translateX(-200px) translateY(200px) rotate(360deg);
  }
  75% {
    transform: translateX(-100px) translateY(100px) translateX(180deg);
  }
  100% {
    transform: translateX(0) translateY(0) rotate(0);
  }
}
@keyframes rotatepup {
  0% {
    transform: translateX(0);
  }
  25% {
    transform: translateX(-2px);
  }
  50% {
    transform: translateX(0);
  }
  75% {
    transform: translateX(2px);
  }
  100% {
    transform: translateX(0);
  }
}

.left .rupil {
  animation: rotatepup 2s infinite ease-in;
}

h5 {
  font-family: montserrat;
  padding: 20px 15px;
  padding-bottom: 5px;
  margin: 0;
  margin-bottom: 10px;
  font-size: 18px;
}

h2.pagetitle {
  font-family: montserrat;
  padding: 20px 15px;
  margin: 0 auto;
  margin-bottom: 20px;
  border-bottom: 1px solid #666;
  max-width: 1440px !important;
  color: #eee;
  position: relative;
  i {
    font-style: normal;
    position: absolute;
    right: 0;
    bottom: 20px;
    color: #888;
    font-size: 16px;
  }
}

.emaerto > h2 {
  padding: 0 0;
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 14px;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.4);
  //letter-spacing: 1px;
  //font-weight: normal;
  font-family: montserrat;
  display: none;
}

.repills {
  display: flex;
  display: none;
  position: absolute;
  top: 43px;
  flex-wrap: wrap;
  right: 40px;
  gap: 10px;
  z-index: 99;
  @media only screen and (max-width: 600px) {
    display: flex;
    position: relative;
    top: 0;
    right: 0;
    margin-bottom: 10px;
  }
  > div {
    //background: #fff;
    //border: 1px solid #ddd;
    padding: 12px 22px;
    cursor: pointer;
    font-family: montserrat;
    //border-radius: 50px;

    strong {
      color: #888;
      font-weight: normal;
    }
    &.active {
      border-bottom: 2px solid #2e78d2;
      strong {
        color: #2e78d2;
        font-weight: bold;
      }
    }
  }
}

.titler {
  border-bottom: 2px solid red;
}

.contaein {
  background: #fff;
  //max-width: 1440px;
  //margin: 0 auto 0;
  padding: 20px;
  min-height: 100vh;
  margin-left: 240px;
}

.dashboard-container {
  max-width: 1440px;
  margin: 0 auto 0;
  min-height: 100vh;
  a {
    text-decoration: none;
    background: #fff;
    display: block;
    //margin: 10px;
    padding: 20px 10px 15px;
    border-radius: 4px;
    border: 2px solid #eee;
    //box-shadow: 0 0 1px #ccc;
  }
  #cuentas-row,
  #monetaria-row {
    display: flex;
    gap: 15px;
        margin-bottom: 15px;

    > a {
      flex: 1;
     }
  }
  #actividad-row {
    display: flex;
        gap: 15px;
    margin-bottom: 15px;
    > a {
      flex: 1;
      &:first-of-type { flex: 2; }
    }
  }
}
</style>
