import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

interface ContactProps {
  darkMode: boolean;
}

const Contact = ({ darkMode }: ContactProps) => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Replace these with your EmailJS credentials
  const SERVICE_ID = 'service_34ew2qs';
  const TEMPLATE_ID = 'template_ue523ps'; // Template for notification to you
  const AUTO_REPLY_TEMPLATE_ID = 'template_kxg07gl'; // Optional: Template for auto-reply to sender
  const PUBLIC_KEY = 'jNlyL9liP6dwiUwX3';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Send notification to you
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );

      // Send auto-reply to sender
      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );
      
      setSubmitStatus('success');
      setFormData({
        from_name: '',
        from_email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">[ Contact ]</h2>
        <p className={`text-lg text-center mb-12 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          Let's work together! Feel free to reach out through the form below or connect on social media.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} p-8 rounded-2xl shadow-xl`}>
            <h3 className="text-2xl font-bold mb-6">Send me a message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg">
                ✓ Message sent successfully!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-lg">
                ✗ Failed to send message. Please try again or email me directly.
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="from_email" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all`}
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all`}
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg ${darkMode ? 'bg-gray-900 border-gray-700 text-white' : 'bg-gray-50 border-gray-300 text-gray-900'} border focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all resize-none`}
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Connect with me</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/shkelqim627"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-colors group`}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">GitHub</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>@shkelqim627</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/shkelqim-osmani-8206b5227"
                  target="_blank"
                  rel="noreferrer"
                  className={`flex items-center gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-colors group`}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">LinkedIn</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Shkelqim Osmani</p>
                  </div>
                </a>

                <a
                  href="mailto:qimiosmani3@gmail.com"
                  className={`flex items-center gap-4 p-4 rounded-lg ${darkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-50 hover:bg-gray-100'} transition-colors group`}
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">Email</p>
                    <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>qimiosmani3@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className={`${darkMode ? 'bg-gray-800' : 'bg-yellow-50'} p-6 rounded-lg border-l-4 border-yellow-500`}>
              <h4 className="font-bold mb-2">📍 Location</h4>
              <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                Tetovo, North Macedonia
              </p>
              <h4 className="font-bold mt-4 mb-2">💼 Availability</h4>
                <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                    Open to any type of work opportunities.
                </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
