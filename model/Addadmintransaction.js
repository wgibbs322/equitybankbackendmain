import mongoose from 'mongoose';

const transactionSchema = new mongoose.Schema({
  description: String,
  amount: Number,
  status: { type: String, enum: ['Completed', 'Pending'], default: 'Pending' },
  balance: String,
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Transaction', transactionSchema);
