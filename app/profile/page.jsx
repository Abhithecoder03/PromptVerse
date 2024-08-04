'use client'
import React from 'react'
import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import MyProfile from "@components/MyProfile";
const Profile = () => {
  
    const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const [errorMessage, seterrorMessage] = useState("")
  const [success, setSuccess] = useState();

  const fetchPosts = async () => {
    if (session?.user?.id) {
      try {
        const response = await fetch(`/api/prompt/${session?.user.id}/posts`);
        const data = await response.json();
    
        setPosts(JSON.parse(JSON.stringify(data)));
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
      
      };
    
  useEffect(() => {
          
    if (session?.user?.id) fetchPosts();
      }, [session,success]);
  
    const handleEdit = async(params) => {
      t
    }
  const handleDelete = async (params) => {
      
      try {
        const response = await fetch(`/api/prompt/${params}/delete`, {
          method: 'DELETE',
        });
        if (response.ok) {
          setSuccess("Deleted successfully")
        }
      } catch (error) {
        
      }
    }
    
  setTimeout(() => {
      setSuccess("")
      
    },5000)
  return (
    <div className='text-white pt-32'>
      {success && <p className='fixed bottom-0 right-4 w-60 h-20 rounded-lg   shadow-lg bg-green-500 text-center text-xl shadow-black '>{success}</p>}
          <MyProfile 
              data={posts}
              handleEdit={handleEdit }
              handleDelete={ handleDelete} />
    </div>
  )
}

export default Profile
