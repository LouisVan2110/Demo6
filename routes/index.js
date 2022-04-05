var express = require('express');
const {request, response} = require("express");
var router = express.Router();

var fs = require('fs');

var db = 'mongodb+srv://mySever:IwDpQYDjI02ftwEa@sever.noqan.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const mongoose = require('mongoose');
mongoose.connect(db).catch(error => {
  console.log("co loi xay ra")
});

var studentSch = new mongoose.Schema({
  email : 'string',
  name : 'string',
  sdt : 'string'
});

var Student = mongoose.model('student', studentSch);

var hinhAnhSch = new mongoose.Schema({
  tenHA : 'string',
  noiDungHA : 'string',
  linkHA : 'string'
});

var HinhAnh = mongoose.model('hinhanh', hinhAnhSch);

/* GET home page. */
router.get('/', function (req, res, next) {
  // xu ly du lieu hoac la truy van vao database
  var array = [
    {id: 0, name: 'Huy Nguyen 0'},
    {id: 1, name: 'Huy Nguyen 1'},
    {id: 2, name: 'Huy Nguyen 2'},
    {id: 3, name: 'Huy Nguyen 3'},
    {id: 4, name: 'Huy Nguyen 4'},
    {id: 5, name: 'Huy Nguyen 5'},
  ]
  res.render('index', {data : array,title: 'Express', name: 'Huy Nguyen'});
});

router.get('/asia',function (req,res) {
  console.log('asia')
  res.render('asia',{title : 'Asia'});
})
router.get('/euro',function (req,res) {
  console.log('euro')
  res.render('euro',{title : 'Euro'});
})
router.get('/america',function (req,res) {
  console.log('America')
  res.render('america',{title : 'America'});
})

router.get('/about',function (req,res) {
  console.log('About')
  res.render('about',{title : 'About',message:''});
})

router.get('/themHinhAnh',function (req,res) {
  console.log('ThemHinhAnh')
  res.render('themHinhAnh',{title : 'ThemHinhAnh'});
})

router.get('/suaHinhAnh',function (req,res) {
  console.log('SuaHinhAnh')
  res.render('suaHinhAnh',{title : 'SuaHinhAnh'});
})

router.get('/hot',function (req,res) {
  console.log('Hot')

  var diaChi = 'Ha Noi - Nam Tu Liem - 19 To Huu'

  var mang = [5,3,4,4,5,3,3,4,6,6]

  var sinhVien = {name: 'Van vu', sinhNhat: '0394938443', sdt: '034234230432'}

  var danhSach = [{name: 'Van vu 1', sinhNhat: '394392992', sdt: '099334343'},
    {name: 'Van Vu 2', sinhNhat: '394392992', sdt: '099334343'},
    {name: 'Van vu 3', sinhNhat: '394392992', sdt: '099334343'},
    {name: 'Van vu 4', sinhNhat: '394392992', sdt: '099334343'},
    {name: 'Van vu 5', sinhNhat: '394392992', sdt: '099334343'}]

  var thongTin = {
    name: 'Van vu',
    favorite: 'Laptop',
    danhSachBaiGai: [
      {name: 'Van vu 1', sinhNhat: '394392992', sdt: '099334343'},
      {name: 'Van vu 2', sinhNhat: '394392992', sdt: '099334343'},
      {name: 'Van vu 3', sinhNhat: '394392992', sdt: '099334343'},
      {name: 'Van vu 4', sinhNhat: '394392992', sdt: '099334343'},
      {name: 'Van vu 5', sinhNhat: '394392992', sdt: '099334343'}
    ]
  }

  var  viewAnh = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://via.placeholder.com/600/24f355",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://via.placeholder.com/600/d32776",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://via.placeholder.com/600/f66b97",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://via.placeholder.com/600/56a8c2",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "https://via.placeholder.com/600/b0f7cc",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "https://via.placeholder.com/600/54176f",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
      "albumId": 1,
      "id": 9,
      "title": "qui eius qui autem sed",
      "url": "https://via.placeholder.com/600/51aa97",
      "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
      "albumId": 1,
      "id": 10,
      "title": "beatae et provident et ut vel",
      "url": "https://via.placeholder.com/600/810b14",
      "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },
    {
      "albumId": 1,
      "id": 11,
      "title": "nihil at amet non hic quia qui",
      "url": "https://via.placeholder.com/600/1ee8a4",
      "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
    },
    {
      "albumId": 1,
      "id": 12,
      "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
      "url": "https://via.placeholder.com/600/66b7d2",
      "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
    },
    {
      "albumId": 1,
      "id": 13,
      "title": "repudiandae iusto deleniti rerum",
      "url": "https://via.placeholder.com/600/197d29",
      "thumbnailUrl": "https://via.placeholder.com/150/197d29"
    },
    {
      "albumId": 1,
      "id": 14,
      "title": "est necessitatibus architecto ut laborum",
      "url": "https://via.placeholder.com/600/61a65",
      "thumbnailUrl": "https://via.placeholder.com/150/61a65"
    },
    {
      "albumId": 1,
      "id": 15,
      "title": "harum dicta similique quis dolore earum ex qui",
      "url": "https://via.placeholder.com/600/f9cee5",
      "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
    },
    {
      "albumId": 1,
      "id": 16,
      "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
      "url": "https://via.placeholder.com/600/fdf73e",
      "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
    },
    {
      "albumId": 1,
      "id": 17,
      "title": "natus doloribus necessitatibus ipsa",
      "url": "https://via.placeholder.com/600/9c184f",
      "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
    },
    {
      "albumId": 1,
      "id": 18,
      "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
      "url": "https://via.placeholder.com/600/1fe46f",
      "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
    },
    {
      "albumId": 1,
      "id": 19,
      "title": "perferendis nesciunt eveniet et optio a",
      "url": "https://via.placeholder.com/600/56acb2",
      "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
    },
    {
      "albumId": 1,
      "id": 20,
      "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
      "url": "https://via.placeholder.com/600/8985dc",
      "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
    },
    {
      "albumId": 1,
      "id": 21,
      "title": "ad et natus qui",
      "url": "https://via.placeholder.com/600/5e12c6",
      "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
    },]

  res.render('hot',{title : 'Hot', diaChi: diaChi, sinhVien: sinhVien,mang: mang, danhSach: danhSach, thongTin: thongTin, viewAnh: viewAnh});

})

router.post('/test',function (request,response){
  var email = request.body.email;
  var content = request.body.content;
  fs.writeFile('myfile/' + email + '.txt', content,function (error){
    if (error){
      response.render('about',{message: error})
    }else
      response.render('about',{message: 'chung toi da nhan phan hoi'})
  })

});

router.post('/lab3',function (request,response){
  var email = request.body.email1T;
  var number = request.body.number1;
  var text = request.body.text1;
  fs.writeFile('report/' + email + '.txt', 'Số điện thoại: '+number + ' - Nội Dung: '+  text,function (error){
    if (error){
      response.render('hot',{message: error})
    }else
      response.render('hot',{message: 'chung toi da nhan phan hoi'})
  })

});


router.get('/photo',function (req,res) {
  console.log('Photo')
  HinhAnh.find({}, function (err, data){
    res.render('photo', {data: data});
    console.log(data)
  })
})


router.post('/student',function (req,res) {
  var email = req.body.email;
  var ten = req.body.name;
  var sdt = req.body.sdt;

  console.log(email + ten + sdt);

  const data = new Student({
    email : email,
    name : ten,
    sdt : sdt
  });

  data.save(function (error){
    var mes;
    if (error == null){
      mes = 'them thanh cong'
      console.log('them thanh cong')
    }else mes = error
    res.render('photo', {message: mes});
  })

  Student.find({}, function (err, data){
    res.render('photo', {data: data});
    console.log(data.toString())
  })

})

router.post('/themHA', function (request, response){
  var tenHA = request.body.tenHA;
  var noiDungHA = request.body.noiDungHA;
  var linkHA = request.body.linkHA;

  console.log(tenHA + noiDungHA + linkHA);

  const data = new HinhAnh({
    tenHA : tenHA,
    noiDungHA : noiDungHA,
    linkHA : linkHA
  });

  data.save(function (error){
    var mes;
    if (error == null){
      mes = 'them thanh cong'
      console.log('them thanh cong')
    }else mes = error
    response.render('themHinhAnh', {message: mes});
  })
});

router.post('/suaHA', function (request, response){
  var tenHA = request.body.tenHA;
  var noiDungHA = request.body.noiDungHA;
  var linkHA = request.body.linkHA;

  console.log(tenHA + noiDungHA + linkHA);
  console.log(tenHA + noiDungHA + linkHA);

  HinhAnh.updateOne({tenHA : tenHA}, {tenHA: tenHA, noiDungHA : noiDungHA, linkHA: linkHA}, function (err){
    if(err) throw err;
    console.log('Sua thanh cong');
  });
});

router.post('/xoaHA', function (request, response){
  var id = request.body.id;

  console.log(id);

  HinhAnh.deleteOne({_id : id},  function (err){
    // if(err) throw err;
    // console.log('Xoa thanh cong');
  });
});





var multer = require('multer');
const e = require("express");

var storage = multer.diskStorage({
  destination: function(req, file, cb) {
    if(file.mimetype == 'image/jpeg'){
      cb(null, 'uploads/');
    }else {
      cb(new Error("Chỉ được up load file .jpg và không được quá  5  file"), false)
    }

  },
  filename: function(req, file, cb) {
    cb(null, Date.now() +".jpg"  );
  },
});

var upload1 = multer({ storage: storage , litmits : {
    filesize : 1*1024 ,
    files : 5
  }});

router.get('/upload', function (req , res){
  res.render('upload',{title : "Up load file"});
})
router.post('/upload' ,upload1.single('avatar'), (req , res , next ) =>{
  const file = req.file;
  if(!file){
    res.send("Cần chọn ảnh để uploads ")
  }else {
    res.send("Upload THÀNH CÔNG")
  }
})








module.exports = router;