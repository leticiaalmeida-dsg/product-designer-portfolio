'use client';

import { useState } from 'react';
import { HamburgerMenu } from '../components/Navigation';
import ProjectFooter from '../components/ProjectFooter';

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      // Submit to our API route (which handles Web3Forms securely)
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (response.ok && result.message === 'Form submitted successfully') {
        setSubmitStatus('success');
        form.reset();
      } else {
        throw new Error(result.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <HamburgerMenu />
      <main className="bg-[#080808] min-h-screen text-white px-[10%] pt-32 pb-24">
          <div className="container max-w-3xl">
          <div className="mb-16">
            <h1 className="text-[5rem] font-normal mb-8">GET IN TOUCH</h1>
            <p className="text-2xl text-gray-400 max-w-xl">
              Have a project in mind? Let's create something amazing together.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">

            <div className="grid grid-cols-2 gap-8 mb-8">
              <div className="space-y-4">
                <label htmlFor="name" className="block text-sm text-[var(--pink-dark-bg)] uppercase tracking-wide">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-[var(--pink-dark-bg)] transition-colors placeholder-gray-500"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-4">
                <label htmlFor="email" className="block text-sm text-[var(--pink-dark-bg)] uppercase tracking-wide">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-[var(--pink-dark-bg)] transition-colors placeholder-gray-500"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <label htmlFor="company" className="block text-sm text-[var(--pink-dark-bg)] uppercase tracking-wide">
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-[var(--pink-dark-bg)] transition-colors placeholder-gray-500"
                placeholder="Your company (optional)"
              />
            </div>

            <div className="space-y-4 mb-12">
              <label htmlFor="message" className="block text-sm text-[var(--pink-dark-bg)] uppercase tracking-wide">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full bg-transparent border-b border-gray-700 py-2 text-white focus:outline-none focus:border-[var(--pink-dark-bg)] transition-colors resize-none placeholder-gray-500"
                placeholder="Tell me about your project..."
              />
            </div>

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[var(--pink-dark-bg)] text-black px-12 py-4 rounded-full text-lg font-medium hover:bg-[#FF5A94] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>

            {submitStatus === 'success' && (
              <p className="mt-8 text-green-500">Message sent successfully! I'll get back to you soon.</p>
            )}
            {submitStatus === 'error' && (
              <p className="mt-8 text-red-500">There was an error sending your message. Please try again.</p>
            )}
          </form>
        </div>
      </main>
      <ProjectFooter />
    </>
  );
}