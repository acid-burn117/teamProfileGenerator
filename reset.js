const fs = require('fs');
if (fs.existsSync('./dist/teammembers.html')) {
  fs.unlinkSync('./dist/teammembers.html');
  console.log('/dist/ folder reset!');
}
