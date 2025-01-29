// services/paymentService.js
const Razorpay = require('razorpay');
const crypto = require('crypto');

// Razorpay instance with your API key and secret
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID, // Set your Razorpay Key ID from Razorpay Dashboard
  key_secret: process.env.RAZORPAY_KEY_SECRET, // Set your Razorpay Key Secret from Razorpay Dashboard
});

// Function to create a payment order
const createOrder = async (amount, currency = 'INR') => {
  try {
    // Amount needs to be in paise (1 INR = 100 paise)
    const options = {
      amount: amount * 100, // Convert to paise
      currency,
      receipt: `order_${new Date().getTime()}`,
      payment_capture: 1, // Auto capture payment after success
    };

    // Create order with Razorpay
    const order = await razorpay.orders.create(options);

    return order; // Return the created order details
  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    throw new Error('Failed to create order with Razorpay');
  }
};

// Function to verify payment signature (for security)
const verifyPayment = (paymentId, orderId, signature) => {
  const body = orderId + "|" + paymentId;
  const expectedSignature = crypto.createHmac('sha256', process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest('hex');
  
  return expectedSignature === signature;
};

module.exports = {
  createOrder,
  verifyPayment,
};
