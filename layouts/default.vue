<template>
  <div>
    <header>
      <h1 class="nav-logo">
        <a href="/">BOLETIN<span>EXTRAOFICIAL</span></a>
      </h1>
      <div class="renav">
        <a href="" class="active">Macroeconomia</a>
        <a href="">Urbanismo</a>
      </div>
      <svg
        id="pepe"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="504px"
        height="504px"
        viewBox="-50 -50 100 100"
      >
        <g id="sun">
          >
          <g id="face_right" fill="#fff" stroke="none">
            <path
              id="eyebrow_nose"
              d="M 41,-14 C 29.5,-24 15,-25.5 7,-18 A 140,50 10 0,0 8.5,8.5 C 8,8.5 7,9 6.5,9.5 A 80,50 10 0,1 4,-19 C 15,-28 30,-29 41,-14"
            />
            <path
              id="uppalpebra"
              d="M 23,-17 C 16.5,-17 15,-15.5 12,-13 S 7.5,-11 7,-10.5 S 7,-8.5 8,-9 S 11,-10.5 14,-13 S 20,-15.5 23,-15.5 C 32,-15.5 37,-8 38,-8.5 S 33,-17 23,-17"
            />
            <path
              id="upeyecontour"
              d="M 34.5,-8.5 C 28,-15.5 16,-16 11,-8 H 13 C 18,-16 30,-12.5 31,-9 v 1"
            />
            <circle id="pupil" cx="22" cy="-9" r="4.5" />
            <path
              id="loweyecontour"
              d="M 11,-8 C 16,-3.5 27,-3 34.5,-8.5 L 31,-9 C 26,-3.5 18,-4 13,-8 v -1"
            />
            <path
              id="lowpalpebra"
              d="M 35,-6 C 26.5,0.5 18,0 13,-3 S 8,-7 9,-7 S 11,-6 15,-4 S 25,-2 35,-6"
            />
            <path
              id="nose"
              d="M 10.5,9 A 3,3 0 1,1 6.5,12 C 6,13 4,16 0,16 h -1 l 1,1.5 C 1,17.5 4,17.5 6,16 A 4.5,4.5 0 1,0 10.5,9"
            />
            <path
              id="uplip1"
              d="M 16.5,30 C 12,27 10,22.5 5,22.5 C 4,22.5 2,23 0,24 h -1 L 0,25.5 C 2,25.5 5,23 8.5,25 S 14,29 16.5,30"
            />
            <path
              id="midlip"
              d="M 15,30 C 5,27 3,29 0,29 h -1 l 1,2 C 4,31 6,28 15,30"
            />
            <path
              id="uplip2"
              d="M 16.5,30 C 5.5,29 9,35.5 0,35.5 h -1 L 0,37 C 11,37 6,31 16.5,30"
            />
            <path
              id="chin"
              d="M 9,46 a 9,9 0 0,0 -18,0 a 9.25,9.25 0 0,1 18,0"
            />
          </g>
          <use xlink:href="#face_right" transform="scale(-1,1)" />
        </g>
      </svg>
    </header>
    <div class="content-container">
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

#pepe {
  top: 0;
  right: 10px;
  width: 60px;
  height: auto;
}

.content-container {
  margin: 10px auto;
  //background: #000;
  //height: 100vh;
  // max-width: 1440px;
}
html {
  box-sizing: border-box;
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
  a {
    padding: 10px 15px;
    color: #666;
    text-decoration: none;
    &.active {
      color: #eee;
      background: #151515;
      border-radius: 5px;
    }
  }
}
header {
  background: #000;
  position: fixed;
  top: 0;
  height: 60px;
  left: 0;
  width: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
  background: #000;
  margin: 0;
  font-size: 15px;
  padding: 10px;
  padding-top: 60px;
  padding-left: 300px;
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

section {
  //float: left;
  width: 100%;
  //min-height: 500px;
  //max-width: 1440px;
  //border-bottom: 1px dotted #aaa;
  padding: 25px 25px 20px;
   background: #fff;
  min-height: 480px;
  border-radius: 2px;
  margin-bottom: 10px;

  //border-radius: 10px;
}

.section-container div:first-child section {
  border-top: 0;
  padding-top: 25px;
}

.realrto {
  width: 100%;
}

.tablehead {
  height: 32px;
  display: none;
}

.megaheatmap {
  display: flex;
  color: #eee;
  div {
    flex: 1;
    height: 30px;
  }
  .green {
    background: #4caf50;
  }
  .greenstrong {
    background: #388e3c;
  }
  .red {
    background: #ff5722;
  }
  .redstrong {
    background: #e64a19;
  }
}

.reflexed {
  position: relative;
  //height: calc(100vh - 100px);
  overflow: auto;
  display: flex;
  > * {
    flex: 1;
    &:first-child {
      max-width: 340px !important;
      padding-left: 0;
      border-right: 2px solid #f7f5f0;
      + div {
        padding: 0 0 0 15px;
      }
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
.acti-wrap {
  overflow: auto;
  padding-left: 35px;
  padding-right: 92px;

  > div {
    border-bottom: 1px solid #eee;
    position: relative;
  }
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

.descripshon {
  margin-top: 20px;
  p {
    column-count: 1;
    padding-right: 100px;
    font-size: 16px;
    &:last-of-type {
      margin-bottom: 0;
    }
  }
}

h3 {
  font-weight: 600;
  margin-top: 0;
  margin: 25px 0 20px;
  font-size: 18px;
  padding-top: 25px;
  border-top: 1px dashed #ccc;
  font-family: "Montserrat", sans-serif;
  text-transform: uppercase;
  /*   &:first-child {
    margin: 0;
    margin-bottom: 15px;
    border: 0;
    padding: 0;
  } */
  span {
    color: #888;
  }
}

a {
  color: #2e78d2;
}

.title-container {
  padding-right: 10px;
  padding-bottom: 20px;
  margin-bottom: 15px;
  border-bottom: 2px solid #f7f5f0;
  display: flex;
  justify-content: space-between;
  > * { flex: 1; max-width: max-content; }
  h2 {
    margin: 0;
    font-size: 20px;
    min-width: 300px;
    font-weight: 400;
    font-family: "Montserrat", sans-serif;

    font-weight: 500;
    color: #262626;

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
    }
  }
}

.flex-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-items: flex-start;
  border-bottom: 1px solid #eee;
  padding: 20px 15px;
}
.legends {
  margin-left: auto;
  color: #888;
  display: flex;
  margin: 10px 0;
  font-size: 14px;

  div {
    margin-right: 15px;
    flex: 1;
    max-width: max-content;
  }
  i {
    display: inline-block;
    border-radius: 50%;
    width: 10px;
    height: 10px;
    margin-right: 5px;
  }
}
.flexed {
  padding: 50px 10px 10px 15px;
}

.flexed-desc {
  display: flex;
  flex-direction: column;
}
</style>
