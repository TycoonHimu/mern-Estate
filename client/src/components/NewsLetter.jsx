import { useState } from 'react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend API URL
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setSuccessMessage('Thank you for subscribing!');
        setEmail(''); // Clear the input field
      } else {
        throw new Error('Failed to subscribe.');
      }
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className='max-w-6xl mx-auto p-3 my-10 bg-gray-100 rounded-lg'>
      <h2 className='text-2xl font-semibold text-slate-600 mb-4'>Stay Updated</h2>
      <p className='text-gray-600 mb-4'>
        Subscribe to our newsletter to receive the latest updates and offers.
      </p>
      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
        <input
          type='email'
          placeholder='Your email address'
          className='border p-2 rounded w-full sm:w-64'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type='submit'
          className='bg-blue-800 text-white p-2 rounded w-full sm:w-auto'
        >
          Subscribe
        </button>
      </form>
      {successMessage && <p className='text-green-600 mt-4'>{successMessage}</p>}
      {errorMessage && <p className='text-red-600 mt-4'>{errorMessage}</p>}
    </div>
  );
};

export default NewsletterSignup;
