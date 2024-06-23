import { Document, Model, Query } from 'mongoose';
import { connectToDatabase } from '../mongoose';
import { handleError } from '@/tools/utils';

interface ICrudService<T extends Document> {
  create(data: Partial<T>): Promise<T>;
  findById(id: string): Query<T | null, T>;
  findAll(): Query<T[], T>;
  update(id: string, data: Partial<T>): Query<T | null, T>;
  delete(id: string): Query<T | null, T>;
}

export class GenericMongoDbService<T extends Document> implements ICrudService<T> {
  private readonly model: Model<T>;

  constructor(model: Model<T>) {
    this.model = model;
  }

  async create(data: Partial<T>): Promise<T> {
    try {
        await connectToDatabase();
    
        const newModel = this.model.create(data);
    
        return newModel;
      } catch (error) {
       return handleError(error);
      }
  }

  findById(id: string): Query<T | null, T> {
    return this.model.findById(id);
  }

  findAll(): Query<T[], T> {
    return this.model.find();
  }

  update(id: string, data: Partial<T>): Query<T | null, T> {
    return this.model.findByIdAndUpdate(id, data, { new: true });
  }

  delete(id: string): Query<T | null, T> {
    return this.model.findByIdAndDelete(id);
  }
}