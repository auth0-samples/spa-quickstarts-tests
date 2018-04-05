var url;
if (process.env.WEBAPP_URL){
  url = process.env.WEBAPP_URL;
} else if (process.env.SAMPLE_PORT){
  url = "http://localhost:" + process.env.SAMPLE_PORT;
} else {
  url = "http://localhost:3000";
}

exports.config = {
  "tests": "./*_test.js",
  "timeout": 10000,
  "output": "out",
  "multiple": {
    "basic": {
      "browsers": ["chrome", "firefox"]
    }
  },
  "helpers": {
    "Puppeteer": {  
      "url": url,
      "chrome":{
        "args": ["--no-sandbox", "--disable-setuid-sandbox"]
      }
    }
  },
  "include": {},
  "bootstrap": false,
  "mocha": {},
  "name": "webapp-tests"
}