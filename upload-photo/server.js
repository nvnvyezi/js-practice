const express = require('express');
const cors = require('cors');
// const bodyParser = require('body-parser');
const multer = require('multer');
const fs = require('fs');

const app = express();
let storage = multer.diskStorage({
  // destination用于确定应该在哪个文件夹中存储上传的文件。这也可以作为string（例如'/tmp/uploads'）给出。如果否 destination，则使用操作系统的临时文件的默认目录。
  destination: function(req, file, cb) {
      cb(null, './uploads');
  },
  filename: function(req, file, cb) {
      cb(null, `${Date.now()}-${file.originalname}`)
  }
})
let createFolder = function(folder){
  try{
      // 测试 path 指定的文件或目录的用户权限,我们用来检测文件是否存在
      // 如果文件路径不存在将会抛出错误"no such file or directory"
      fs.accessSync(folder); 
  }catch(e){
      // 文件夹不存在，以同步的方式创建文件目录。
      fs.mkdirSync(folder);
  }
};

let uploadFolder = './uploads/';
createFolder(uploadFolder);

let upload = multer({storage: storage})
app.use(cors());
// app.use(bodyParser());

app.post('/update', upload.single('image'), (req, res, next) => {
  console.log(req.file)
  res.json('sd');
  res.end();
})

app.listen(3000, () => {
  console.log(`3000 is ready`);
})