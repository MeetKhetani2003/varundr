import mongoose, { Schema, Document } from 'mongoose';

// --- TestCategory ---
export interface ITestCategory extends Document {
  name: string;
  sortOrder: number;
}
const TestCategorySchema = new Schema({
  name: { type: String, required: true, unique: true },
  sortOrder: { type: Number, default: 0 },
}, { timestamps: true });

export const TestCategory = mongoose.models.TestCategory || mongoose.model<ITestCategory>('TestCategory', TestCategorySchema);


// --- Test ---
export interface ITest extends Document {
  name: string;
  rate: number;
  tubeColor: string;
  categoryId: mongoose.Types.ObjectId;
}
const TestSchema = new Schema({
  name: { type: String, required: true },
  rate: { type: Number, required: true },
  tubeColor: { type: String, default: 'None' },
  categoryId: { type: Schema.Types.ObjectId, ref: 'TestCategory', required: true },
}, { timestamps: true });

export const Test = mongoose.models.Test || mongoose.model<ITest>('Test', TestSchema);


// --- Package ---
export interface IPackage extends Document {
  name: string;
  price: number;
  parametersCount: number;
  testsIncluded: string;
  purpose: string;
}
const PackageSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  parametersCount: { type: Number, required: true },
  testsIncluded: { type: String, required: true },
  purpose: { type: String, required: true },
}, { timestamps: true });

export const Package = mongoose.models.Package || mongoose.model<IPackage>('Package', PackageSchema);


// --- Inquiry ---
export interface IInquiry extends Document {
  patientName: string;
  phone: string;
  email?: string;
  date?: Date;
  timeSlot?: string;
  type: string;
  status: string;
  message?: string;
  selectedTests: mongoose.Types.ObjectId[];
  selectedPackage?: mongoose.Types.ObjectId;
}
const InquirySchema = new Schema({
  patientName: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String },
  date: { type: Date },
  timeSlot: { type: String },
  type: { type: String, required: true },
  status: { type: String, default: 'Pending' },
  message: { type: String },
  selectedTests: [{ type: Schema.Types.ObjectId, ref: 'Test' }],
  selectedPackage: { type: Schema.Types.ObjectId, ref: 'Package' },
}, { timestamps: true });

export const Inquiry = mongoose.models.Inquiry || mongoose.model<IInquiry>('Inquiry', InquirySchema);
