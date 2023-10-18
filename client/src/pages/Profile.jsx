import {useSelector} from 'react-redux'
import { useEffect, useRef, useState } from 'react'
import {getDownloadURL, getStorage, ref, uploadBytesResumable} from 'firebase/storage'
import { app } from '../firebase'

export default function Profile() {
  const {currentUser} = useSelector((state)=> state.user);
  const fileRef = useRef(null);
  const [file, setFile] = useState(undefined);
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setUploadError] = useState(false);
  const [formData, setFormData] = useState({});


  // firebase storage
  // allow read;
  // allow write: if 
  // request.resource.size <2 *1024 *1024 &&
  // request.resource.contentType.matches('image/.*')

  useEffect(()=> {
    if(file){
      handleFileUpload(file);
    }
  },[file])

  const handleFileUpload = (file) =>{
    setUploadError(false);
    const storage = getStorage(app);
    const fileName = new Date().getTime() + file.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on('state_changed', (snapshot)=> {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setFilePerc(Math.round(progress))

    },
    // eslint-disable-next-line no-unused-vars
    (error)=>{
      setUploadError(true);
    },
    ()=>{
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL)=> {
        setFormData({...formData, avatar: downloadURL})
      })
    }
    )
  }


  

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input onChange={(e)=> setFile(e.target.files[0])} type='file' ref={fileRef} hidden accept='image/*'/>
        <img 
          onClick={()=> fileRef.current.click()}
          src={formData.avatar ?? currentUser.avatar} alt={`${currentUser.username}'s photo`}
          className='rounded-full h-24 w-24 object-cover cursos-pointer self-center my-2 cursor-pointer'
        />
        <p className='text-sm self-center'>{fileUploadError 
        ? <span className='text-red-700'>Error Image upload (image must be less than 2mb)</span>
        : filePerc > 0 && filePerc < 100 ? (
          <span className='text-slate-700'>
            {`Uploading ${filePerc}%`}
          </span>
        ) : filePerc === 100 ? (
          <span className='text-green-700'>
            Image successfully uploaded!
          </span>
        ) : "" }</p>
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
