import mongoose from 'mongoose'

  export const connectDB =async()=>{
  try{
  //mongodb+srv://mepa1409:<password>@proyecto.xewlteu.mongodb.net/?retryWrites=true&w=majority&appName=Proyecto
  await mongoose.connect('mongodb+srv://mepa1409:46365200@proyecto.xewlteu.mongodb.net/?retryWrites=true&w=majority&appName=Proyecto')
 //await mongoose.connect('mongodb://127.0.0.1:27017/AbogadosAPP')
 console.log("BD esta conectada")

  } catch(error){
    console.log(error)
  }

}
