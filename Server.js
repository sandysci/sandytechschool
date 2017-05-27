const express = require('express');
const app = express ();
app.use(express.static(_dirname+'/dist'));
app.listen (process.env.PORT||8080);
//force https
const forceSSL = function(){
    return function(req,res,next){
        if(req.headers['x-forwarded-proto'] != 'https'){
            return res.redirect(
                ['https://',req.get('Host'),req.url].join('')
            );
        }
        next();
    }
}
//middleware
app.use(forceSSL());
const path = require('path');
app.get('/*',function(req,res){
    res.sendFile(path.join(_dirname+'/dist/index.html'));
});
