const csvtojson = require('csvtojson')
const fs = require('fs')
const path = require('path')
const converter=csvtojson({
   flatKeys:true
})
const csvfilepath = path.join(__dirname,'customer-data.csv')
let buff = '\[\n'
csvtojson()
.fromFile(csvfilepath)
.on('data',(jsonObj)=>{
	buff += jsonObj
    fs.writeFileSync(path.join(__dirname, 'customer-data.json'), buff)
})
.on('done',(error)=>{
   fs.appendFileSync(path.join(__dirname, 'customer-data.json'), '\n\]')
})
