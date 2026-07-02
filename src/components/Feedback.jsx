import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Github, MapPin, Send, Star, Trash2, Check, Copy } from 'lucide-react';

export default function Feedback({ theme }) {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formMessage, setFormMessage] = useState('');
  const [formRating, setFormRating] = useState(5);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formName.trim() || !formMessage.trim()) return;

    const newFeedback = {
      id: Date.now().toString(),
      name: formName,
      email: formEmail || 'anonymous@visitor.com',
      message: formMessage,
      rating: formRating,
      date: new Date().toLocaleDateString(undefined, { month: 'short', day: 'numeric', year: 'numeric' }),
    };

    onAddFeedback(newFeedback);
    setIsSubmitted(true);
    setFormName('');
    setFormEmail('');
    setFormMessage('');
    setFormRating(5);

    setTimeout(() => setIsSubmitted(false), 3000);
  };

  // Theme-specific styles
  const cardBg = theme === 'light' ? 'bg-white/80 border-rose-100/60' : 'bg-[#16141D]/90 border-purple-950/40';
  const textPrimary = theme === 'light' ? 'text-[#33303C]' : 'text-[#E7E5EC]';
  const textSecondary = theme === 'light' ? 'text-[#615C70]' : 'text-[#B2ADB8]';
  const inputBg = theme === 'light' ? 'bg-rose-50/50 border-rose-100 text-[#33303C]' : 'bg-[#1C1A24] border-purple-900/40 text-[#E7E5EC]';
  const badgeColor = theme === 'light' ? 'bg-rose-50 border-rose-100 text-rose-700' : 'bg-purple-950/40 border-purple-900/30 text-purple-300';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4 }}
      className="space-y-6"
      id="feedback-container"
    >

      <div className="flex items-center justify-between">
        <div>
          <h2 className={`text-xl font-bold font-sans ${textPrimary}`}>Feedback Form</h2>
          <p className={`text-xs ${textSecondary}`}>Leave a message or review if you visited my portfolio!</p>
        </div>
      </div>

        <div className={`p-6 rounded-2xl border ${cardBg} space-y-4`}>
          <form className="space-y-4" id="feedback-form" action="https://formspree.io/f/xykqbnqj" method="POST">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={`block text-xs font-semibold mb-1 ${textSecondary}`}>Your Name</label>
                <input
                  type="text"
                  required
                  id='name'
                  name='name'
                  placeholder=""
                  className={`w-full p-2.5 rounded-xl border text-xs outline-none transition-all ${inputBg}`}
                />
              </div>
              <div>
                <label className={`block text-xs font-semibold mb-1 ${textSecondary}`}>Your Email (Optional)</label>
                <input
                  type="email"
                  id='email'
                  name='_replyto'
                  className={`w-full p-2.5 rounded-xl border text-xs outline-none transition-all ${inputBg}`}
                />
              </div>
            </div>

            <div>
              <label className={`block text-xs font-semibold mb-1 ${textSecondary}`}>Feedback Message</label>
              <textarea
                required
                rows={3}
                name='message'
                placeholder="What did you think of the design, usability, or content? Any tips?"
                className={`w-full p-2.5 rounded-xl border text-xs outline-none transition-all resize-none ${inputBg}`}
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              {isSubmitted && (
                <motion.span
                  initial={{ opacity: 0, x: -5 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xs text-emerald-500 font-bold flex items-center gap-1"
                >
                  <Check className="w-4 h-4" /> Thank you for your feedback!
                </motion.span>
              )}
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-bold shadow-sm transition-all ml-auto"
                id="submit-feedback-btn"
              >
                <Send className="w-3.5 h-3.5" />
                Submit Review
              </button>
            </div>
          </form>
        </div>
    </motion.div>
  );
}
