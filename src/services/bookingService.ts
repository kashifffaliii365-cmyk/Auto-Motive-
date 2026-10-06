export interface BookingPayload {
  fullName: string;
  phone: string;
  email: string;
  vehicleMake: string;
  vehicleModel: string;
  vehicleYear: string;
  serviceNeeded: string;
  preferredDate: string;
  preferredTime: string;
  additionalDetails?: string;
}

export interface BookingResponse {
  success: boolean;
  confirmationId: string;
  message: string;
  timestamp: string;
  details: BookingPayload;
}

export interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
  referenceId: string;
}

// Clean service abstraction ready for backend integration
export const submitBookingRequest = async (payload: BookingPayload): Promise<BookingResponse> => {
  // Simulate network roundtrip latency for realistic UI state handling
  await new Promise((resolve) => setTimeout(resolve, 800));

  const confirmationId = `STX-${Date.now().toString().slice(-6)}-${Math.floor(100 + Math.random() * 900)}`;

  // Here a real API endpoint (e.g. POST /api/bookings or email webhook) would be invoked.
  return {
    success: true,
    confirmationId,
    message: "Your service request has been received. Our shop will call or message to confirm your appointment time.",
    timestamp: new Date().toISOString(),
    details: payload,
  };
};

export const submitContactInquiry = async (payload: ContactPayload): Promise<ContactResponse> => {
  await new Promise((resolve) => setTimeout(resolve, 600));

  const referenceId = `INQ-${Date.now().toString().slice(-5)}`;

  return {
    success: true,
    message: "Thank you for reaching out. We have received your inquiry and will contact you promptly.",
    referenceId,
  };
};
