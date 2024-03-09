import { useForm } from 'react-hook-form';
import { date } from 'zod';
import { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import {useNavigate} from 'react-router-dom'

function LoginPage() {
  const { register, handleSubmit,formState:{errors}, } = useForm();

  const {signin,errors: signinErrors,isAuthenticated} = useAuth();
  const navigate = useNavigate();
 



    const onSubmit=handleSubmit((data)=>{
        signin(data)
    })

    useEffect(() => {
      if (isAuthenticated) {
        navigate("/abogadoslist");
      }
    }, [isAuthenticated]);
  


  return (
    <div className="flex items-center justify-center h-screen">
      <div className="bg-blue-200 border border-blue-300 p-8 rounded-md shadow-md w-full sm:w-96">
      {
        signinErrors.map((error,i)=>(
          <div className='bg-red-500 p-2 text-white' key={i}>
            {error}
          </div>
        ))
      }
        <h2 className="text-2xl font-bold mb-4">Inicio de Sesión Usuario</h2>
        <form
          className="flex flex-col gap-4"
          onSubmit={onSubmit}
        >
         <div className="mb-4">
            <label className="block text-gray-600 text-sm">Correo Electrónico</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="form-input w-full"
            />
              {
            errors.email && (
              <p className='text-red-500'>
              Email is required
              </p>
            )   
            }
          </div>

          <div className="mb-4">
            <label className="block text-gray-600 text-sm">Contraseña</label>
            <input
              type="password"
              {...register('password', { required: true })}
              className="form-input w-full"
            />
             {
            errors.password && (
              <p className='text-red-500'>
              password is required
              </p>
            )   
            }
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
