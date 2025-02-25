
import { users, type User, type InsertUser } from "@shared/schema";

export interface IStorage {
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class MemStorage implements IStorage {
  private userStore: Map<number, User>;
  private nextId: number;

  constructor() {
    this.userStore = new Map();
    this.nextId = 1;
  }

  async getUser(id: number): Promise<User | undefined> {
    return this.userStore.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.userStore.values())
      .find(user => user.username === username);
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.nextId++;
    const user: User = { ...insertUser, id };
    this.userStore.set(id, user);
    return user;
  }
}

// Single instance for the application
export const storage = new MemStorage();
