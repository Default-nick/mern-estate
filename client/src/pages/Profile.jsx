import {useSelector} from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector((state)=> state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img 
          src={currentUser.avatar} alt={`${currentUser.username}'s photo`}
          className='rounded-full h-24 w-24 object-cover cursos-pointer self-center my-2'
        />
        <input 
          type="text" 
          placeholder='Username'
          className='border p-3 rounded-lg'
          id="username"
        />
        <input 
          type="text" 
          placeholder='Email'
          className='border p-3 rounded-lg'
          id="email"
        />
        <input 
          type="password" 
          placeholder='Password'
          className='border p-3 rounded-lg'
          id="password"
        />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80'>Update</button>
      </form>

      <div className='flex justify-between my-5'>
        <span className='text-red-700 font-semibold cursor-pointer '>
          Delete Account
        </span>
        <span className='text-red-700 font-semibold cursor-pointer '>
          Sign Out
        </span>
      </div>
    </div>
  )
}
