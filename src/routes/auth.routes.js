import { Router } from 'express';
import {login,register,logout,profile,verifyToken} from '../controllers/auth.controller.js'
import {abogadologin,abogadoregister,abogadologout,abogadoprofile,getAbogados} from '../controllers/aboga.controller.js'
import {authRequired} from '../middlewares/validateToken.js'
import {validateSchema} from '../middlewares/validator.js'
import {abogadoregisterSchema,registerSchema,loginSchema} from '../schemas/auth.schema.js'
const router =Router()

//Enrutamiento Usuarios
router.post('/register',validateSchema(registerSchema),register)
router.post('/login',validateSchema(loginSchema),login)
router.post('/logout',logout)

router.get('/profile',authRequired,profile)


//Enrutamiento Abogados
router.post('/abogadoregister',validateSchema(abogadoregisterSchema),abogadoregister)
router.post('/abogadologin',validateSchema(loginSchema),abogadologin)
router.post('/abogadologout',abogadologout)

router.get('/abogadoprofile',authRequired,abogadoprofile)
router.get('/allabogados',authRequired,getAbogados)


router.get("/verify", verifyToken);
export default router