var fs = require('fs');

let data = [{ time: '2017-06-05', stap: 100 }, { time: '2017-06-05', stap: 100 }];
fs.writeFile('mypage/run/data.json', JSON.stringify(data), 'utf-8');

fs.readFile('mypage/run/data.json', 'utf-8', function(err, data) {
    if (err) throw err;
    console.log(data);
});