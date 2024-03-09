import Abogado from '../models/abogadomodel.js'
import bcryptjs from 'bcryptjs'
import { CreateAccesToken } from '../libs/jwt.js'

export const abogadoregister = async(req,res) =>{
    const {name,email,phone,category,password} =req.body

    try {
        const AbogadoFound =await Abogado.findOne({email});
        if(AbogadoFound)
        return res.status(400).json(["El correo ya está en uso"])
        const passwordHash = await bcryptjs.hash(password,10)

        const newAbogado = new Abogado({
            name,
            email,
            phone,
            category,
            password : passwordHash
        })
        const AbogadoSaved = await newAbogado.save()
        const token = await CreateAccesToken({ id : AbogadoSaved.id})
        res.cookie("token",token)
       
          res.json({
            id: AbogadoSaved.id,
            username: AbogadoSaved.name,
            email: AbogadoSaved.email
        })
        
       
    } catch (error) {
        console.log(error)
    }
   
}

export const abogadologin = async(req,res) =>{
    const {email,password} =req.body

    try {
        const AbogadoFound = await Abogado.findOne({email})
        if(!AbogadoFound) return res.status(400).json({
            message: "Usuario No Encontrado"
        })
        const isMatch = await bcryptjs.compare(password,AbogadoFound.password)

        if(!isMatch) return res.status(400).json ({
            message:"Credenciales Incorrectas"

        })
       
        const token = await CreateAccesToken({ id : AbogadoFound.id})
        res.cookie("token",token)
       
          res.json({
            id: AbogadoFound.id,
            username: AbogadoFound.name,
            email: AbogadoFound.email
        })
        
       
    } catch (error) {
        console.log(error)
    }
   
}

export const abogadologout =(req,res)=>{

    res.cookie('token',"",{
       expires: new Date(0), 
    })
    return res.sendStatus(200)
}


export const abogadoprofile =async (req,res) => {
    const AbogadoFound=await Abogado.findById(req.user.id)
    if(!AbogadoFound) return res.status(400).json({
        message : "Usuario no encontrado"
    })
    return res.json({
        id: AbogadoFound._id,
        name : AbogadoFound.name
    })
}


export const getAbogados = async (req, res) => {
    try {
      const abogados = await Abogado.find();
  
      // Verificar si abogados es un array y tiene al menos un elemento
      if (Array.isArray(abogados) && abogados.length > 0) {
        res.json(abogados);
      } else {
        res.status(404).json({ message: 'No se encontraron abogados.' });
      }
    } catch (error) {
      console.error('Error al obtener abogados:', error);
      res.status(500).json({ message: 'Error interno del servidor.' });
    }
  };