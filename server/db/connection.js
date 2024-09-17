// import dotenv from 'dotenv';
import { MongoClient, ServerApiVersion } from 'mongodb';

// Charger les variables d'environnement depuis le fichier .env
// dotenv.config();

// Vérifier si ATLAS_URI est chargé correctement
console.log("ATLAS_URI:", process.env.ATLAS_URI);

const uri = process.env.ATLAS_URI || "";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

try {
  // Connecter le client au serveur
  await client.connect();
  // Envoyer un ping pour confirmer la connexion
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");
} catch (err) {
  console.error("MongoDB connection error: ", err);
}

const db = client.db("db_portfolio");

export default db;
