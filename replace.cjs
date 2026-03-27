const fs = require('fs');
['index.html', 'store-details.html'].forEach(f => {
  if (!fs.existsSync(f)) return;
  let content = fs.readFileSync(f, 'utf8');
  let replaced = content.replace(/<button([^>]*?)>(Order(?:[ ]Now)?)<\/button>/gi, '<a href="register.html"$1>$2</a>');
  if (content !== replaced) {
    fs.writeFileSync(f, replaced);
    console.log('Replaced CTA buttons in: ' + f);
  } else {
    console.log('No CTA buttons found in: ' + f);
  }
});
