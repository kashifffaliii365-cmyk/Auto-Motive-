import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Calendar, Phone, MapPin, CheckCircle, AlertCircle, ArrowRight, RotateCcw } from 'lucide-react';
import { submitBookingRequest, BookingPayload, BookingResponse } from '../services/bookingService.ts';
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
  'Other',
];

const TIME_OPTIONS = [
  'Morning (8:00 AM – 11:00 AM)',
  'Mid-Day (11:00 AM – 2:00 PM)',
  'Afternoon (2:00 PM – 5:00 PM)',
  'First Available Window',
];

export const BookServicePage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const preselectedService = searchParams.get('service') || '';

  const [formData, setFormData] = useState<BookingPayload>({
    fullName: '',
    phone: '',
    email: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    serviceNeeded: '',
    preferredDate: '',
    preferredTime: TIME_OPTIONS[0],
    additionalDetails: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<BookingResponse | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Book a Service | South Texas Diesel And Automotive Services LLC";

    if (preselectedService) {
      const match = SERVICE_OPTIONS.find(
        (s) => s.toLowerCase() === preselectedService.toLowerCase() ||
               preselectedService.toLowerCase().includes(s.toLowerCase())
      );
      if (match) {
        setFormData((prev) => ({ ...prev, serviceNeeded: match }));
      }
    }
  }, [preselectedService]);

  const todayStr = new Date().toISOString().split('T')[0];

  const validate = (): boolean => {
    const errs: Record<string, string> = {};

    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      errs.fullName = 'Full name is required.';
    }

    const cleanPhone = formData.phone.replace(/[\s\(\)\-\.]/g, '');
    if (!formData.phone.trim() || cleanPhone.length < 10) {
      errs.phone = 'Valid 10-digit phone number is required.';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailPattern.test(formData.email.trim())) {
      errs.email = 'Valid email address is required.';
    }

    const yearNum = parseInt(formData.vehicleYear, 10);
    const maxYear = new Date().getFullYear() + 1;
    if (!formData.vehicleYear.trim() || isNaN(yearNum) || yearNum < 1970 || yearNum > maxYear) {
      errs.vehicleYear = `Enter year between 1970 and ${maxYear}.`;
    }

    if (!formData.vehicleMake.trim()) {
      errs.vehicleMake = 'Vehicle make is required (e.g., Ford, Chevrolet, RAM).';
    }

    if (!formData.vehicleModel.trim()) {
      errs.vehicleModel = 'Vehicle model is required (e.g., F-250, 2500, Silverado).';
    }

    if (!formData.serviceNeeded) {
      errs.serviceNeeded = 'Please select the service required.';
    }

    if (!formData.preferredDate) {
      errs.preferredDate = 'Please select a preferred date.';
    } else if (formData.preferredDate < todayStr) {
      errs.preferredDate = 'Date cannot be in the past.';
    }

    if (!formData.additionalDetails?.trim()) {
      errs.additionalDetails = 'Please briefly describe the problem or symptoms.';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
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
      const res = await submitBookingRequest(formData);
      setSubmissionResult(res);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    } catch {
      setErrors({ form: 'An unexpected issue occurred. Please call the shop directly.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      vehicleYear: '',
      vehicleMake: '',
      vehicleModel: '',
      serviceNeeded: '',
      preferredDate: '',
      preferredTime: TIME_OPTIONS[0],
      additionalDetails: '',
    });
    setErrors({});
    setSubmissionResult(null);
  };

  return (
    <main className="min-h-screen pt-28 sm:pt-36 bg-neutral-950 text-neutral-100">
      {/* Header */}
      <section className="py-14 sm:py-20 border-b border-neutral-800 bg-neutral-900/60">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-widest text-blue-500">
            <Calendar className="w-4 h-4" />
            <span>APPOINTMENT REQUEST</span>
          </div>

          <h1 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-white leading-tight">
            BOOK A SERVICE
          </h1>

          <p className="mt-4 text-sm sm:text-base text-neutral-300 font-mono max-w-2xl leading-relaxed">
            Submit your vehicle information and preferred schedule below. Our Corpus Christi shop will contact you to verify bay availability and confirm your drop-off time.
          </p>

          <div className="mt-6 flex items-center gap-4 text-xs font-mono text-neutral-400">
            <a href={`tel:${BUSINESS_INFO.phoneRaw}`} className="hover:text-white flex items-center gap-1.5 font-bold">
              <Phone className="w-3.5 h-3.5 text-blue-500" />
              <span>Direct Phone: {BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-neutral-700">·</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-blue-500" />
              <span>3917 Apollo Rd</span>
            </span>
          </div>
        </div>
      </section>

      {/* Main Form or Confirmation State */}
      <section className="py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {submissionResult ? (
          /* POLISHED CONFIRMATION STATE - EXACT COPY SPECIFIED */
          <div className="bg-neutral-900 border border-neutral-700 rounded p-8 sm:p-12 shadow-2xl relative overflow-hidden animate-fade-in">
            <div className="text-left max-w-2xl">
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-neutral-800">
                <div className="w-10 h-10 rounded bg-neutral-950 border border-neutral-800 text-blue-500 flex items-center justify-center shrink-0">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-500 font-bold block">
                    STATUS CONFIRMATION
                  </span>
                  <h2 className="font-display font-black text-3xl uppercase tracking-wide text-white">
                    SERVICE REQUEST RECEIVED
                  </h2>
                </div>
              </div>

              <div className="space-y-4 text-sm font-mono text-neutral-300 leading-relaxed mb-8">
                <p className="text-base text-white font-bold">
                  Thank you, {submissionResult.details.fullName}.
                </p>
                <p>
                  Our shop has received your service request for:
                </p>
                <div className="bg-neutral-950 p-4 border border-neutral-800 rounded space-y-1.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Service:</span>
                    <span className="text-blue-400 font-bold">{submissionResult.details.serviceNeeded}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Vehicle:</span>
                    <span className="text-white">
                      {submissionResult.details.vehicleYear} {submissionResult.details.vehicleMake} {submissionResult.details.vehicleModel}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Requested Window:</span>
                    <span className="text-neutral-300">
                      {submissionResult.details.preferredDate} ({submissionResult.details.preferredTime})
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-500">Contact Phone:</span>
                    <span className="text-neutral-300">{submissionResult.details.phone}</span>
                  </div>
                  <div className="flex justify-between pt-1 border-t border-neutral-900">
                    <span className="text-neutral-500">Request Reference:</span>
                    <span className="text-neutral-400">{submissionResult.confirmationId}</span>
                  </div>
                </div>

                <p className="text-neutral-400 text-xs">
                  <strong>Please note:</strong> This is a request submission, not an instant booking confirmation. A technician or service advisor from South Texas Diesel And Automotive Services LLC will contact you at {submissionResult.details.phone} to confirm technician bay availability and answer any preliminary diagnostic questions.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-neutral-800">
                <a
                  href={`tel:${BUSINESS_INFO.phoneRaw}`}
                  className="px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 rounded transition-all shadow-md shadow-blue-950/40"
                >
                  CALL SHOP ({BUSINESS_INFO.phone})
                </a>
                <button
                  type="button"
                  onClick={resetForm}
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-xs font-mono font-bold tracking-widest uppercase text-neutral-300 hover:text-white bg-neutral-950 border border-neutral-800 hover:border-blue-500 rounded cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>SUBMIT ANOTHER REQUEST</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          /* REAL SERVICE REQUEST FORM */
          <div className="bg-neutral-900 border border-neutral-800 rounded p-6 sm:p-10 shadow-2xl">
            {errors.form && (
              <div className="mb-6 p-4 rounded bg-red-950/80 border border-red-700 text-red-200 text-xs font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{errors.form}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="space-y-8 font-mono text-xs">
              {/* CONTACT DETAILS */}
              <div>
                <div className="text-xs uppercase font-bold tracking-widest text-blue-500 mb-3 pb-2 border-b border-neutral-800">
                  01 // CUSTOMER CONTACT
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="sm:col-span-2">
                    <label htmlFor="fullName" className="block uppercase text-neutral-300 font-bold mb-1.5">
                      Name <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Full Name"
                      className={`w-full px-4 py-3 bg-neutral-950 border rounded text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 ${
                        errors.fullName ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.fullName && <p className="mt-1 text-red-400">{errors.fullName}</p>}
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
                </div>
              </div>

              {/* VEHICLE DETAILS */}
              <div>
                <div className="text-xs uppercase font-bold tracking-widest text-blue-500 mb-3 pb-2 border-b border-neutral-800">
                  02 // VEHICLE DETAILS
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div>
                    <label htmlFor="vehicleYear" className="block uppercase text-neutral-300 font-bold mb-1.5">
                      Vehicle Year <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="number"
                      id="vehicleYear"
                      name="vehicleYear"
                      min="1970"
                      max={new Date().getFullYear() + 1}
                      value={formData.vehicleYear}
                      onChange={handleChange}
                      placeholder="e.g. 2019"
                      className={`w-full px-4 py-3 bg-neutral-950 border rounded text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 ${
                        errors.vehicleYear ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.vehicleYear && <p className="mt-1 text-red-400">{errors.vehicleYear}</p>}
                  </div>

                  <div>
                    <label htmlFor="vehicleMake" className="block uppercase text-neutral-300 font-bold mb-1.5">
                      Vehicle Make <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="vehicleMake"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleChange}
                      placeholder="e.g. Ford / RAM / Chevrolet"
                      className={`w-full px-4 py-3 bg-neutral-950 border rounded text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 ${
                        errors.vehicleMake ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.vehicleMake && <p className="mt-1 text-red-400">{errors.vehicleMake}</p>}
                  </div>

                  <div>
                    <label htmlFor="vehicleModel" className="block uppercase text-neutral-300 font-bold mb-1.5">
                      Vehicle Model <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="vehicleModel"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      placeholder="e.g. F-250 6.7L"
                      className={`w-full px-4 py-3 bg-neutral-950 border rounded text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 ${
                        errors.vehicleModel ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.vehicleModel && <p className="mt-1 text-red-400">{errors.vehicleModel}</p>}
                  </div>
                </div>
              </div>

              {/* SERVICE & APPOINTMENT PREFERENCE */}
              <div>
                <div className="text-xs uppercase font-bold tracking-widest text-blue-500 mb-3 pb-2 border-b border-neutral-800">
                  03 // SERVICE NEEDED &amp; TIMING
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  <div className="sm:col-span-1">
                    <label htmlFor="serviceNeeded" className="block uppercase text-neutral-300 font-bold mb-1.5">
                      Service Needed <span className="text-blue-500">*</span>
                    </label>
                    <select
                      id="serviceNeeded"
                      name="serviceNeeded"
                      value={formData.serviceNeeded}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-neutral-950 border rounded text-sm text-white focus:outline-none focus:border-blue-500 ${
                        errors.serviceNeeded ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    >
                      <option value="">Select Service...</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    {errors.serviceNeeded && <p className="mt-1 text-red-400">{errors.serviceNeeded}</p>}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="preferredDate" className="block uppercase text-neutral-300 font-bold mb-1.5">
                      Preferred Date <span className="text-blue-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      min={todayStr}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-neutral-950 border rounded text-sm text-white focus:outline-none focus:border-blue-500 ${
                        errors.preferredDate ? 'border-red-500' : 'border-neutral-800'
                      }`}
                    />
                    {errors.preferredDate && <p className="mt-1 text-red-400">{errors.preferredDate}</p>}
                  </div>

                  <div className="sm:col-span-1">
                    <label htmlFor="preferredTime" className="block uppercase text-neutral-300 font-bold mb-1.5">
                      Preferred Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-neutral-950 border border-neutral-800 rounded text-sm text-white focus:outline-none focus:border-blue-500"
                    >
                      {TIME_OPTIONS.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label htmlFor="additionalDetails" className="block uppercase text-neutral-300 font-bold mb-1.5">
                    Describe the Problem <span className="text-blue-500">*</span>
                  </label>
                  <textarea
                    id="additionalDetails"
                    name="additionalDetails"
                    rows={4}
                    value={formData.additionalDetails}
                    onChange={handleChange}
                    placeholder="Describe specific symptoms, dashboard warnings, sounds, leaks, operating conditions, or work required..."
                    className={`w-full px-4 py-3 bg-neutral-950 border rounded text-sm text-white placeholder-neutral-600 focus:outline-none focus:border-blue-500 ${
                      errors.additionalDetails ? 'border-red-500' : 'border-neutral-800'
                    }`}
                  />
                  {errors.additionalDetails && <p className="mt-1 text-red-400">{errors.additionalDetails}</p>}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-4 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-neutral-500 text-[11px]">
                  * Required fields. All service requests are confirmed directly by shop personnel.
                </span>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-xs font-mono font-bold tracking-widest uppercase text-white bg-blue-600 hover:bg-blue-700 disabled:bg-neutral-800 disabled:text-neutral-500 rounded transition-all cursor-pointer shadow-lg shadow-blue-950/50 active:scale-98"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING REQUEST...</span>
                  ) : (
                    <>
                      <span>REQUEST SERVICE</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        )}
      </section>
    </main>
  );
};
