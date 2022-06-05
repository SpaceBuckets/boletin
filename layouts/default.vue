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
.flexedtable {
  flex: 1;
  padding: 0;
  padding-right: 0px;

  @media only screen and (max-width: 600px) {
    max-width: 100%;
    border: 0;
  }
  > div {
    max-height: 420px;
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

.recontent-container {
  display: flex;
  flex-wrap: wrap;
  .content-cell {
    background: #fff;
    padding: 20px 25px;
    flex: 1;
    border-top: 2px solid #f7f5f0;

    h3 {
      margin-top: 0;
      font-family: "Montserrat", sans-serif;
    }
  }
}

.content-container {
  max-width: 1366px;
  margin: 0 auto;
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
    &.nuxt-link-active {
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
  z-index: 999;
  img {
    width: 30px;
    height: auto;
    opacity: 0.8;
  }
  h1 {
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
}

body {
  font-family: arial, helvetica, sans-serif;
  background: rgb(245 246 250);
  background: #f7f5f0;
  background: rgb(247, 246, 243);
  background: #000;
  margin: 0;
  font-size: 15px;
  padding: 0;
  padding-top: 60px;
}

p {
  margin-top: 0;
  line-height: 1.4;
  color: #262626;
}

em {
  background: rgba(253, 216, 53, 0.7);
  font-style: normal;
  font-weight: bold;
  color: #111;
}

a {
  color: #2e78d2;
}

.chart h2 {
  margin: 0;
  font-size: 18px;
  min-width: 300px;
  font-weight: 400;
  padding-bottom: 15px;

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
    font-weight: 600;
    color: #262626;
  }
}

.__nuxt-error-page {
  background: #000;
  .title {
    color: #eee;
  }
}

.headbert {
  width: 100%;
  border-radius: 2px;
  margin: 10px auto 10px;
  background: #fff;
  padding: 20px 25px 20px;
  overflow: hidden;
  display: flex;
  border-top: 0;
  &.internal {
    margin-bottom: 0;
    h2 {
      font-family: "Montserrat", sans-serif;
      font-size: 22px;
      font-weight: 500;
      margin-top: 0;
      margin-bottom: 15px;
      font-weight: normal;
      color: #888;
    }
  }
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
      &:first-child {
        min-width: 55%;
        padding-right: 20px;
      }
    }
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    font-weight: 500;
    margin-top: 0;
    margin-bottom: 10px;
    font-weight: normal;
    color: #888;
  }
  h3 {
    font-family: "Montserrat", sans-serif;
    font-size: 22px;
    font-weight: 500;
    margin-top: 5px;
    margin-bottom: 5px;
    font-weight: normal;
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

canvas {
  cursor: crosshair;
}

.capis {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 600px) {
    justify-content: space-between;
  }
  > * {
    flex: 1;
    min-width: 70px;
    margin-right: 60px;
    margin-top: 5px;
    &:last-child {
      margin-right: 10px;
    }
    h2 {
      min-width: auto !important;
      margin: 5px 0 5px;
    }
  }
}

.section-container {
  padding-bottom: 100px;
  padding-left: 0px;

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
    border: 1px solid #eee;
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

.contaein {
  background: #fff;
  max-width: 1366px;
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 25px;
  margin-top: 10px;
  min-height: 100vh;
}

.dashboard-container {
  min-height: 100vh;
  section section {
    background: #fff;
  }
  &.index a {
    text-decoration: none;
    background: #fff;
    display: block;
    padding: 20px 15px 15px 25px;
    border-radius: 2px;
  }
  #cuentas-row,
  #monetaria-row {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;

    > a {
      flex: 1;
    }
  }
  #actividad-row {
    display: flex;
    gap: 10px;
    margin-bottom: 10px;
    > a {
      flex: 1;
      &:first-of-type {
        flex: 2;
      }
    }
  }
}
</style>
