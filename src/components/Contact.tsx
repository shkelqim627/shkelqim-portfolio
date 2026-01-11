import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const SERVICE_ID = 'service_34ew2qs';
  const TEMPLATE_ID = 'template_ue523ps';
  const AUTO_REPLY_TEMPLATE_ID = 'template_kxg07gl';
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
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        formData,
        PUBLIC_KEY
      );

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
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 font-sora text-white"> Contact </h2>
        <p className="text-lg text-center mb-12 text-gray-300 font-inter">
          Let's work together! Feel free to reach out through the form below or connect on social media.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gray-900 p-8 rounded-2xl shadow-xl border border-gray-700">
            <h3 className="text-2xl font-bold mb-6 font-sora text-white">Send me a message</h3>
            
            {submitStatus === 'success' && (
              <div className="mb-6 p-4 bg-green-900/50 text-green-300 rounded-lg border border-green-700">
                ✓ Message sent successfully!
              </div>
            )}
            
            {submitStatus === 'error' && (
              <div className="mb-6 p-4 bg-red-900/50 text-red-300 rounded-lg border border-red-700">
                ✗ Failed to send message. Please try again or email me directly.
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-sm font-medium mb-2 text-gray-300 font-inter">
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-gray-600 text-white border focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all font-inter"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="from_email" className="block text-sm font-medium mb-2 text-gray-300 font-inter">
                  Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-gray-600 text-white border focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all font-inter"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2 text-gray-300 font-inter">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-gray-600 text-white border focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all font-inter"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-300 font-inter">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-gray-800 border-gray-600 text-white border focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all resize-none font-inter"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-purple-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-purple-700 transition-all duration-300 hover:scale-105 font-inter ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 font-sora text-white">Connect with me</h3>
              <div className="space-y-4">
                <a
                  href="https://github.com/shkelqim627"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group border border-gray-700"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold font-sora text-white">GitHub</p>
                    <p className="text-sm text-gray-400 font-inter">@shkelqim627</p>
                  </div>
                </a>
                <a
                  href="https://www.linkedin.com/in/shkelqim-osmani-8206b5227"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group border border-gray-700"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold font-sora text-white">LinkedIn</p>
                    <p className="text-sm text-gray-400 font-inter">Shkelqim Osmani</p>
                  </div>
                </a>

                <a
                  href="mailto:qimiosmani3@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors group border border-gray-700"
                >
                  <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold font-sora text-white">Email</p>
                    <p className="text-sm text-gray-400 font-inter">qimiosmani3@gmail.com</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border-l-4 border-purple-600">
              <h4 className="font-bold mb-2 font-sora text-white"> Location</h4>
              <p className="text-sm text-gray-300 font-inter">
                Tetovo, North Macedonia
              </p>
              <h4 className="font-bold mt-4 mb-2 font-sora text-white">Availability</h4>
                <p className="text-sm text-gray-300 font-inter">
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
