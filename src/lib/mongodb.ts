import { MongoClient, Db, ObjectId } from 'mongodb';
import dns from 'dns';

let client: MongoClient;
let db: Db;

export async function connectDB(): Promise<Db> {
  // Force DNS to resolve IPv4 first (fixes querySrv ECONNREFUSED on some networks)
  try {
    console.log('🌐 Setting up DNS overrides...');
    if (dns.setDefaultResultOrder) {
      dns.setDefaultResultOrder('ipv4first');
    }
    dns.setServers(['8.8.8.8', '8.8.4.4']);
  } catch (dnsError) {
    console.error('⚠️ DNS override failed in connectDB:', dnsError);
  }

  if (db) {
    return db;
  }

  const uri = process.env.MONGO_URI || process.env.DATABASE_URL;
  if (!uri) {
    throw new Error('MONGO_URI or DATABASE_URL environment variable is not set');
  }

  // Create new client for each connection in serverless environment
  const maskedUri = uri.replace(/\/\/.*@/, '//****:****@');
  console.log(`📡 Connecting to MongoDB: ${maskedUri}`);

  client = new MongoClient(uri, {
    maxPoolSize: 1,
    serverSelectionTimeoutMS: 15000,
    socketTimeoutMS: 45000,
    connectTimeoutMS: 15000,
    family: 4, // Force IPv4 to bypass DNS/Network issues
  });

  let retries = 3;
  while (retries > 0) {
    try {
      await client.connect();
      // Use 'jobcy-data' or the db name from URI if preferred
      db = client.db('jobcy-data');
      console.log('✅ MongoDB connected successfully to jobcy-data');
      return db;
    } catch (error) {
      retries--;
      const isDnsError = error instanceof Error && (error.message.includes('ECONNREFUSED') || error.message.includes('querySrv'));
      
      if (isDnsError && retries > 0) {
        console.warn(`⚠️ MongoDB connection attempt failed (DNS error). Retrying in 2s... (${retries} retries left)`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        continue;
      }

      if (isDnsError) {
        console.error('❌ MONGODB DNS ERROR: This is likely a local network/DNS issue.');
        console.error('👉 TIP: Check your Internet connection or try a different network.');
      }
      
      console.error('MongoDB connection error details:', error);
      if (retries === 0) throw error;
    }
  }
  throw new Error('Failed to connect to MongoDB after multiple retries');
}

export async function closeDB() {
  if (client) {
    await client.close();
  }
}

// Helper function to convert string ID to ObjectId
export function toObjectId(id: string) {
  try {
    return new ObjectId(id);
  } catch {
    throw new Error('Invalid ObjectId format');
  }
}
