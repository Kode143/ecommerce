import Layout from '@/components/layout';
import { useSession, signIn, signOut } from "next-auth/react"
export default function Component() {
const { data: session } = useSession ();

// if (session) {
//   return (
//     <>signIn as {session.user.email} <br />
//     <button onClick={() => signOut()}>signOut</button>
//     </>
//   )
// }
// return (
//   <>Not Signed In <br/> 
//   <button onClick={() => signIn('google')}>signIn</button>
//   </>
// )
  
return (
  <Layout>
  <div className="text-blue-900 flex justify-between">
    <h2>Hello, <br>{session?.user?.name}</br></h2>
    <div className="bg-gray-300 rounded-lg gap-1"> 
    <ing src={session?.user?.image} className="w-6 h-6" />
    <span className="px-2">
      {session?.user?.email}
    </span>
    </div>
  </div>
  </Layout>
)
  }
