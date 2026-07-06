import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Mail, MapPin, Send, PhoneCall } from 'lucide-react';
import { PERSONAL_INFO } from '../constants';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export const Contact: React.FC = () => {
  const [isSending, setIsSending] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setIsSending(true);

    try {
      // EmailJS configuration variables
      // These can be overridden in production (.env or global settings)
      const serviceId = 'service_default';
      const templateId = 'template_portfolio';
      const publicKey = 'placeholder_key';

      // For safety, since it's a template code, we try to send. If key is placeholder,
      // we log it and show a success simulation so the app is fully functional and doesn't crash!
      if (publicKey === 'placeholder_key') {
        // Simulate API call for local preview testing
        await new Promise((resolve) => setTimeout(resolve, 1500));
        console.log('Form data submitted via EmailJS placeholder:', data);
        toast.success('Message sent successfully! (Local simulation)');
      } else {
        await emailjs.send(
          serviceId,
          templateId,
          {
            from_name: data.name,
            reply_to: data.email,
            message: data.message,
            to_name: PERSONAL_INFO.name,
          },
          publicKey
        );
        toast.success('Your message has been sent successfully!');
      }
      reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again later.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 relative bg-bg-sec/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge="Get in Touch"
          title="Contact Me"
          description="Have an opportunity or project you would like to discuss? Drop me a message below."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Column: Info Card & Styled Map */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-effect p-8 rounded-2xl border border-border-theme bg-card-theme/20 flex flex-col gap-6">
              <h3 className="text-xl font-bold text-text-theme">Contact Information</h3>
              <p className="text-sm text-muted-theme leading-relaxed">
                Feel free to reach out. I typically reply to all messages within 24 hours.
              </p>

              {/* Detail Items */}
              <div className="flex flex-col gap-4.5 mt-2">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-muted-theme uppercase">Email Me</span>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="text-sm font-semibold hover:text-primary transition-colors">
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary-accent/10 text-secondary-accent flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-muted-theme uppercase">Location</span>
                    <span className="text-sm font-semibold text-text-theme">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-success/10 text-success flex items-center justify-center shrink-0">
                    <PhoneCall className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-[11px] font-semibold text-muted-theme uppercase">Availability</span>
                    <span className="text-sm font-semibold text-success">
                      Open to new projects & roles
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Mockup Frame */}
            <div className="glass-effect rounded-2xl border border-border-theme overflow-hidden h-[240px] relative bg-card-theme/10">
              <iframe
                title="Google Map Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101374.88796856525!2d-122.1557788!3d37.4027725!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad4335459%3A0x11632a3afaf401a2!2sPalo%20Alto%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
                className="w-full h-full border-none opacity-80 dark:invert dark:grayscale dark:contrast-125"
                allowFullScreen={false}
                loading="lazy"
              />
            </div>
          </div>

          {/* Right Column: Glassmorphic Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass-effect p-8 rounded-2xl border border-border-theme bg-card-theme/20 flex flex-col gap-6 h-full justify-between"
            >
              <h3 className="text-xl font-bold text-text-theme mb-2">Send a Message</h3>

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-xs font-semibold text-muted-theme uppercase tracking-wider">
                  Full Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  className="px-4 py-3 rounded-xl border border-border-theme bg-bg-theme/40 text-sm focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/40 transition-all duration-300"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && (
                  <span className="text-xs text-rose-500 font-medium">{errors.name.message}</span>
                )}
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-xs font-semibold text-muted-theme uppercase tracking-wider">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="john@example.com"
                  className="px-4 py-3 rounded-xl border border-border-theme bg-bg-theme/40 text-sm focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/40 transition-all duration-300"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address',
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-xs text-rose-500 font-medium">{errors.email.message}</span>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-semibold text-muted-theme uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Describe your project, timeline, or request..."
                  className="px-4 py-3 rounded-xl border border-border-theme bg-bg-theme/40 text-sm focus:outline-none focus:border-primary/80 focus:ring-1 focus:ring-primary/40 transition-all duration-300 resize-none"
                  {...register('message', { required: 'Message is required' })}
                />
                {errors.message && (
                  <span className="text-xs text-rose-500 font-medium">{errors.message.message}</span>
                )}
              </div>

              {/* Submit Button */}
              <Button
                variant="primary"
                type="submit"
                disabled={isSending}
                className="w-full gap-2.5 mt-4"
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 rounded-full border-2 border-white border-t-transparent animate-spin" />
                    Sending Message...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Contact;
