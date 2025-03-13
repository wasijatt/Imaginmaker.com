// pages/admin/contacts.js
import { useState, useEffect } from 'react';
import Head from 'next/head';

export default function AdminContacts() {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authPassword, setAuthPassword] = useState('');

  // Simple admin auth check
  const authenticateAdmin = (password) => {
    // This is a simple example - in production, use proper auth
    const adminPassword = process.env.NEXT_PUBLIC_ADMIN_PASSWORD || 'admin123';
    if (password === adminPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('admin_authenticated', 'true');
      fetchContacts();
    } else {
      setError('Invalid password');
    }
  };

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/admin/contacts');

      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }

      const data = await response.json();
      setContacts(data.contacts);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching contacts:', err);
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check if already authenticated
    if (typeof window !== 'undefined') {
      const isAuth = localStorage.getItem('admin_authenticated') === 'true';
      if (isAuth) {
        setIsAuthenticated(true);
        fetchContacts();
      }
    }
  }, []);

  // Format date to readable format
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
        <Head>
          <title>Admin Login - Imaginmaker</title>
        </Head>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}
          
          <form 
            onSubmit={(e) => {
              e.preventDefault();
              authenticateAdmin(authPassword);
            }}
            className="space-y-4"
          >
            <div>
              <label className="block text-gray-700 mb-2">Admin Password</label>
              <input 
                type="password" 
                value={authPassword}
                onChange={(e) => setAuthPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
            </div>
            <button 
              type="submit" 
              className="w-full bg-[#7D40FF] text-white py-2 px-4 rounded-lg hover:bg-[#6930D9] transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Head>
        <title>Contact Submissions - Imaginmaker Admin</title>
      </Head>
      
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-gray-900">Contact Submissions</h1>
          <button 
            onClick={() => {
              localStorage.removeItem('admin_authenticated');
              setIsAuthenticated(false);
            }}
            className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300 transition"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {loading ? (
          <div className="flex justify-center my-8">
            <p className="text-lg">Loading contact submissions...</p>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            Error: {error}
          </div>
        ) : contacts.length === 0 ? (
          <div className="bg-blue-100 border border-blue-400 text-blue-700 px-4 py-3 rounded">
            No contact submissions yet.
          </div>
        ) : (
          <div className="bg-white shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200">
              {contacts.map((contact) => (
                <li key={contact._id} className="px-6 py-4 hover:bg-gray-50">
                  <div className="flex flex-col md:flex-row md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h2 className="text-xl font-medium text-gray-900">{contact.fullName}</h2>
                      <p className="text-gray-500">{contact.email}</p>
                      <p className="text-gray-500">{contact.phone}</p>
                      {contact.interestedIn && (
                        <p className="text-gray-700 mt-2">
                          <span className="font-medium">Interested in:</span> {contact.interestedIn}
                        </p>
                      )}
                      {contact.message && (
                        <p className="text-gray-700 mt-2">
                          <span className="font-medium">Message:</span> {contact.message}
                        </p>
                      )}
                    </div>
                    <div className="text-gray-500 text-sm">
                      <p>Submitted on: {formatDate(contact.createdAt)}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </main>
    </div>
  );
}