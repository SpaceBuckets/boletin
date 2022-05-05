<template>
  <div>
    <header
 
    >
      <h1 class="nav-logo">
       <a href="/">BOLETIN<span>EXTRAOFICIAL</span></a>
      </h1>
 
      
  
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
 @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500&display=swap');
.content-container {
  margin: 0 auto;
  background: #000;
   //height: 100vh;
  //max-width: 1440px;
}
html {
  box-sizing: border-box;
}
*, *:before, *:after {
  box-sizing: inherit;
}

header {
  background: #151515;

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
 
}

h1 {

  text-align: left;
  margin: 0;
         line-height:60px;

  padding: 0 20px;
  a {
   color: #fff;
     font-family: 'Montserrat', sans-serif;
  font-size: 22px;
  text-decoration: none;
 font-weight: 600;
 line-height: 20px;
 
  span {
    font-weight: 400;
    color:#ddd;
  }  
  }

}

body {
  font-family: arial, helvetica, sans-serif;
  background: rgb(245 246 250);
  background: #000;
 
  margin: 0;
  font-size: 15px;
  padding: 0;
  padding-left: 0;
  padding-top: 60px;
 }

p {
  margin-top: 0;
  line-height: 1.4;
  color: #4a4a4a;
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
         line-height:60px;
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
  h2 {
    padding: 0 20px 10px;
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
    padding: 10px 20px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
    opacity: 1;
    color: #666;
    &:hover {
            color: #111;
     }
    &.active {
      pointer-events:none;
        span {
        opacity: 1;
        background:rgba(253, 216, 53, 1);
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
    margin: 0px auto;
   border-bottom: 1px dotted #aaa;
  padding-bottom: 30px;
  padding-top: 30px;
  background: #fff;
  min-height: 485px;
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
      border-right: 1px solid #eee;
      + div {
        padding: 0 15px;
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
  color: #333;
  background: #fff;
  padding: 1px 10px;
  left: 20px;
  border-radius: 50px;
  opacity: 0.8;
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
  color: #4a4a4a;
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


h2 {
  margin: 0;
  font-size: 22px;
  min-width: 300px;
  font-weight: 400;
  padding-right: 10px;
  font-family: "Montserrat", sans-serif;
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
