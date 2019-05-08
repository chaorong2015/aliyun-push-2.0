var sls = require('./sls');

// -------------------------------
// list logStores
// -------------------------------
var projectName = "your_project_name";

sls.listLogStores({
  //必选字段
    projectName: projectName 
}, function (err, data) {

    if (err) {
        console.log('error:', err);
        return;
    }

    console.log('success:', data);

});
