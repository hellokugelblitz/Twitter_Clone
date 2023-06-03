import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from '../components/Header'
import Form from '@/components/Form'
import PostFeed from '@/components/posts/PostFeed'



export default function Home() {
  return (
    <> 
      <Header label="Home" />
      <Form placeholder="Whats happening??" />
      <PostFeed />
    </>
  )
}
