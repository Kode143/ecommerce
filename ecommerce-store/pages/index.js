import { useSession, signIn, signOut } from "next-auth/react"
export default function HomePage() {
const { data: session } = useSession ();

function onSignInHandler(event){
  event.preventDefault();
  signIn;
}
  return (
    <>
      <button onClick={(event)=> onSignInHandler(event)}>SignIn with Google</button>
    </>
  );
}
