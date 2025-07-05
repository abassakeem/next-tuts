


export default async function Blog() {

  await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay



  return (
    <div className='flex flex-col items-center justify-center min-h-screen p-8'>
      <h1>Blog</h1>
      <p>Welcome to the blog Blog!</p>
    </div>
  )
}
