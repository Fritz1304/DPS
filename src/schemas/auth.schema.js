import {z} from 'zod'

export const registerSchema = z.object({
    username: z.string({
        required_error: 'Username is requiered'
    }),
    email: z.string({
        required_error: 'Email is requiered'
    }).email({
        message:'Correo Invalido'
    }),
    password: z.string({
        required_error :'La contraseña es requerida'
    }).min(6,{
        message: 'La contraseña Debe tener almenos 6 caracteres'
    })
})

export const loginSchema = z.object({
    email: z.string({
        required_error: 'Email is requiered'
    }).email({
        message:'Correo Invalido'
    }),
    password: z.string({
        required_error :'La contraseña es requerida'
    }).min(6,{
        message: 'La contraseña debe tener almenos 6 caracteres'
    })
})

export const abogadoregisterSchema = z.object({
    name: z.string({
        required_error: 'Username is requiered'
    }),
    email: z.string({
        required_error: 'Email is requiered'
    }).email({
        message:'Correo Invalido'
    }),
    password: z.string({
        required_error :'La contraseña es requerida'
    }).min(6,{
        message: 'Debe tener almenos 6 caracteres'
    })
})