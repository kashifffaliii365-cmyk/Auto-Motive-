import React, { useState, useEffect } from 'react';
import { Phone, MapPin, Navigation, Send, Clock, CheckCircle2, AlertCircle, ExternalLink } from 'lucide-react';
import { submitContactInquiry, ContactPayload, ContactResponse } from '../services/bookingService.ts';
import { BUSINESS_INFO } from '../data/business.ts';

const SERVICE_OPTIONS = [
  'Diesel Diagnostics',
  'Diesel Repair',
  'Engine Diagnostics',
  'Engine Repair',
  'Brake Repair',
  'Transmission',
  'Electrical',
  'A/C',
  'Oil Change',
  'Maintenance',
  'Fleet Service',
  'General Question / Other',
];

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<ContactPayload>({
    name: '',
    email: '',
    phone: '',
    service: SERVICE_OPTIONS[0],
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<ContactResponse | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact & Facility | South Texas Diesel And Automotive Services LLC";
  }, []);

  const validate = (): boolean => {
    const err: Record<string, string> = {};
    if (!formData.name.trim()) err.name = 'Name is required.';
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      err.email = 'Valid email is required.';
    }
    const cleanPhone = formData.phone.replace(/[\s\(\)\-\.]/g, '');
    if (!formData.phone.trim() || cleanPhone.length < 10) {
      err.phone = 'Valid 10-digit phone number is required.';
    }
    if (!formData.message.trim()) {
      err.message = 'Please provide details or questions regarding your vehicle.';
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    try {
      const res = await submitContactInquiry(formData);
      setResult(res);
    } catch {
      setErrors({ form: 'An unexpected issue occurred. Please call the shop directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen pt-28 sm:pt-36 bg-neutral-950 text-neutral-100">
      {/* Header */}
      <section className="py-14 sm:py-20 border-b border-neutral-800 bg-neutral-900/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-widest text-blue-500">
            <Phone className="w-4 h-4" />
            <span>COMMUNICATION &amp; FACILITY COORDINATES</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
            CONTACT THE SHOP
          </h1>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-mono max-w-2xl leading-relaxed">
            Direct shop contact, physical facility address on Apollo Rd, driving directions, and service request form.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Form + Business Information & Hours */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Service Request Form */}
          <div className="lg:col-span-7 bg-neutral-900 border border-neutral-800 rounded p-6 sm:p-10 shadow-xl font-mono text-xs">
            <div className="mb-6 pb-4 border-b border-neutral-800">
              <span className="text-[10px] uppercase font-bold tracking-widest text-blue-500 block">
                MESSAGE DISPATCH
              </span>
              <h2 className="font-display font-black text-2xl uppercase tracking-wide text-white mt-0.5">
                SUBMIT A SERVICE INQUIRY
              </h2>
            </div>

            {result ? (
              <div className="p-8 rounded bg-neutral-950 border border-neutral-700 text-center space-y-4 animate-fade-in">
                <CheckCircle2 className="w-10 h-10 text-blue-500 mx-auto" />
                <h3 className="font-display font-bold text-2xl uppercase text-white">
                  INQUIRY TRANSMITTED
                </h3>
                <p className="text-sm text-neutral-300">
                  {result.message}
                </p>
                <div className="text-[11px] text-neutral-500">
                  Reference: {result.referenceId}
                </div>
                <button
                  type="button"
                  onClick={() => setResult(null)}
                  className="px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-200 bg-neutral-900 border border-neutral-700 hover:text-white rounded"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                {errors.form && (
                  <div className="p-4 rounded bg-red-950/80 border border-red-700 text-red-200 flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{errors.form}</span>
                  </div>
                )}

                <div>
                  <label htmlFor="name" className="block uppercase text-neutral-300 font-bold mb-1.5">
                    Name <span className="text-blue-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={`w-full px-4 py-3 bg-neutral-950 border rounded text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 ${
                      errors.name ? 'border-red-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.name && <p className="mt-1 text-red-400">{errors.name}</p>}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block uppercase text-neutral-300 font-bold mb-1.5">
                      Email <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="email@example.com"
                      className={`w-full px-4 py-3 bg-neutral-950 border rounded text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 ${
                        errors.email ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.email && <p className="mt-1 text-red-400">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block uppercase text-neutral-300 font-bold mb-1.5">
                      Phone <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(361) 444-6820"
                      className={`w-full px-4 py-3 bg-neutral-950 border rounded text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 ${
                        errors.phone ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.phone && <p className="mt-1 text-red-400">{errors.phone}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block uppercase text-neutral-300 font-bold mb-1.5">
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded text-sm text-white focus:outline-none focus:border-blue-500"
                  >
                    {SERVICE_OPTIONS.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block uppercase text-neutral-300 font-bold mb-1.5">
                    Message / Problem Description <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Explain the vehicle symptoms, warning codes, or service questions..."
                    className={`w-full px-4 py-3 bg-neutral-950 border rounded text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 ${
                      errors.message ? 'border-red-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.message && <p className="mt-1 text-red-400">{errors.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-800 rounded transition-all cursor-pointer shadow-md shadow-blue-950/40 active:scale-98"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>SUBMIT INQUIRY</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Business Information & Hours Section */}
          <div className="lg:col-span-5 space-y-6">
            {/* Business Info Card */}
            <div className="bg-neutral-900 border border-neutral-800 rounded p-6 sm:p-8 space-y-6 font-mono text-xs">
              <div className="pb-4 border-b border-neutral-800">
                <span className="text-[10px] uppercase font-bold tracking-widest text-blue-500 block">
                  BUSINESS INFORMATION
                </span>
                <h3 className="font-display font-black text-2xl uppercase tracking-wide text-white mt-0.5">
                  FACILITY PROFILE
                </h3>
              </div>

              <div>
                <span className="text-neutral-500 uppercase tracking-widest text-[10px] block mb-1">
                  OFFICIAL NAME
                </span>
                <p className="text-sm font-bold text-white">
                  {BUSINESS_INFO.name}
                </p>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <span className="text-neutral-500 uppercase tracking-widest text-[10px] block mb-1">
                  DIRECT PHONE
                </span>
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="text-base font-bold text-white hover:text-blue-400 flex items-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4 text-blue-500" />
                  <span>{BUSINESS_INFO.phone}</span>
                </a>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <span className="text-neutral-500 uppercase tracking-widest text-[10px] block mb-1">
                  PHYSICAL ADDRESS
                </span>
                <div className="text-sm text-neutral-200 flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-white">{BUSINESS_INFO.address.street}</div>
                    <div>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.state} {BUSINESS_INFO.address.zip}</div>
                    <div className="text-neutral-500">{BUSINESS_INFO.address.country}</div>
                  </div>
                </div>
              </div>

              {/* Exact Hours Requirement */}
              <div className="pt-4 border-t border-neutral-800">
                <span className="text-neutral-500 uppercase tracking-widest text-[10px] block mb-1">
                  OPERATING HOURS
                </span>
                <div className="flex items-start gap-2 text-sm text-neutral-300">
                  <Clock className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">
                       {BUSINESS_INFO.hoursNotice}
                    </p>
                    <p className="text-xs text-neutral-500 mt-1">
                      Call our team at {BUSINESS_INFO.phone} for technician bay availability and current appointment times.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-800">
                <a
                  href={BUSINESS_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-mono font-bold uppercase tracking-widest text-neutral-200 hover:text-white bg-neutral-950 border border-neutral-700 hover:border-blue-500 rounded transition-all"
                >
                  <Navigation className="w-3.5 h-3.5 text-blue-500" />
                  <span>GET DRIVING DIRECTIONS</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-neutral-900 border border-neutral-800 rounded overflow-hidden shadow-2xl">
          <div className="p-4 bg-neutral-950 border-b border-neutral-800 flex items-center justify-between font-mono text-xs">
            <div className="flex items-center gap-2 text-neutral-300">
              <MapPin className="w-4 h-4 text-blue-500" />
              <span>3917 Apollo Rd, Corpus Christi, TX 78413</span>
            </div>
            <a
              href={BUSINESS_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 font-bold"
            >
              <span>OPEN FULL MAP</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          <div className="h-[360px] sm:h-[420px] w-full">
            <iframe
              title="South Texas Diesel And Automotive Services LLC Map"
              src={BUSINESS_INFO.googleMapsEmbed}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(105%)' }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
};
