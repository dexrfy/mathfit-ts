import mongoose, { Schema } from 'mongoose';

export const NewsPageSchema = new mongoose.Schema(
  {
    title: String,
    telegraphURL: String,
    photo: String
  },
  { versionKey: false }
);

NewsPageSchema.set('toJSON', {
  transform: function(doc: any, ret: any, options: any) {
    ret.id = ret._id;
    delete ret._id;
  }
});

export const NewsPage = mongoose.model('NewsPage', NewsPageSchema);
