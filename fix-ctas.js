const fs=require('fs');
['index.html','store-details.html'].forEach(f=>{
  let txt=fs.readFileSync(f,'utf8');
  txt=txt.replace(/<button[^>]*>\s*Order( Now)?\s*<\/button>/gi,'<a href="register.html" class="btn btn-hover">Order Now</a>');
  fs.writeFileSync(f,txt);
  console.log('Fixed', f);
});
