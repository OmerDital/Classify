import mongoose from 'mongoose';

export default () => {
  const databaseUrl = process.env.DATABASE_URL || 'mongodb://localhost:27017/classify';

  return new Promise<void>((resolve, reject) => {
    mongoose.connect(databaseUrl, error => {
      if (error) {
        return reject(error);
      }

      return resolve();
    });
  });
};
