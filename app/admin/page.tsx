export default function Admin() {
  return <main style={{padding:'8vw',minHeight:'100vh'}}>
    <p style={{letterSpacing:'.25em',color:'#c6a779'}}>KINGSLEY NJ · SEINT MUSIC</p>
    <h1 style={{fontSize:'clamp(42px,8vw,80px)'}}>Admin dashboard</h1>
    <p style={{maxWidth:650,lineHeight:1.8,color:'#bcb6ad'}}>This is the starting point for the private management area. Before using it for real, connect Supabase authentication, database tables and access policies using the README instructions. Do not publish private keys in client-side code.</p>
    <p><a href="/" style={{color:'#e8d8bf'}}>← View public website</a></p>
  </main>;
}