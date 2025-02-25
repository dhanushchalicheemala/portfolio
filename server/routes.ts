
import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  const apiRouter = app.Router();
  
  // User routes
  apiRouter.get('/users/:id', async (req, res) => {
    const user = await storage.getUser(parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  });

  // Mount API routes
  app.use('/api', apiRouter);

  return createServer(app);
}
