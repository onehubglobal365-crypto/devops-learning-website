const { MongoClient } = require('mongodb');
const dns = require('dns');
require('dotenv').config();

if (dns.setDefaultResultOrder) {
    dns.setDefaultResultOrder('ipv4first');
}
dns.setServers(['8.8.8.8', '8.8.4.4']);

async function inspectSchema() {
    const client = new MongoClient(process.env.MONGO_URI, { family: 4 });
    try {
        await client.connect();
        const db = client.db('jobcy-data');
        const user = await db.collection('users').findOne({});
        console.log('User Schema Example:', JSON.stringify(user, null, 2));
    } catch (err) {
        console.error('Inspection failed:', err);
    } finally {
        await client.close();
    }
}

inspectSchema();
