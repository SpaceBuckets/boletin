 
 const getBuilds = async()=>{try{return(await import("../json/kpis.json")).default}catch(t){return console.log(t),[]}};
  

async function singlePost(kpi) {
  var posts = await getBuilds()
  var single = []
  posts.forEach(post => { if (post.kpi === kpi) { single = post } })
  return single
}

 

export {  singlePost  };