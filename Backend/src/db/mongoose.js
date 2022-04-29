const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/SimpliTendr',{
      useNewUrlParser:true,
      useUnifiedTopology:true,
      useCreateIndex:true,
      useFindAndModify:false
}).then(()=>{
      console.log('Connected to DB');
}).catch((err)=>{
      console.log(err);
});