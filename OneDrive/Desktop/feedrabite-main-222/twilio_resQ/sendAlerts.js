require('dotenv').config();
const twilio = require('twilio');

// Twilio credentials from your dashboard
const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Add your 8 verified numbers here
const phoneNumbers = [
  '+918977244226',
  '+919989997751',
  '+916301541855',
  '+916303224250',
  '+918885628836',
  '+919030973978',
  '+918341362967',
  '+9176739 60499'
];

//const alertMessage = '⚠️ ALERT: Heavy rainfall warning in your area. Please stay safe and indoors.';
const alertMessage = '⚠️ ALERT:move to the nearest shelter immediately location is ANITS CAMPUS'
async function sendAlerts() {
  for (const number of phoneNumbers) {
    try {
      const message = await client.messages.create({
        body: alertMessage,
        from: '+19895828969', // your Twilio number here
        to: number
      });
      console.log(`✅ Message sent to ${number}`);
    } catch (error) {
      console.error(`❌ Could not send to ${number}: ${error.message}`);
    }
  }
}

sendAlerts();
