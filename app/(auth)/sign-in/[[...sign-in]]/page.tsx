import { SignIn } from '@clerk/nextjs';
import { useAuth } from '@clerk/nextjs';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

const SignInPage = () => {
  const { isLoaded, isSignedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      // Redirect to home page if already signed in
      router.push('/');
    }
  }, [isLoaded, isSignedIn, router]);

  // Show loading state until authentication status is determined
  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  // Render sign-in form if not signed in
  return <SignIn />;
};

export default SignInPage;