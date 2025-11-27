require('dotenv').config();
const twilio = require('twilio');

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Array of verified numbers
const phoneNumbers = [
  "+918885628836",//me
  "+919866711917",//chaithu
  "+919989997751",//vijay
  "+919030973978"//vadan
];

// Your Twilio number
const twilioNumber = "+19895828969";

// Loop through each number and initiate a call
for (const number of phoneNumbers) {
  client.calls
    .create({
      to: number,
      from: twilioNumber,
      twiml:
        '<Response><Say voice="alice">⚠ Disaster Alert! Please move to a safe place immediately.</Say></Response>',
    })
    .then((call) =>
      console.log(`✅ Call initiated to ${number}, SID: ${call.sid}`)
    )
    .catch((err) =>
      console.error(`❌ Failed to call ${number}: ${err.message}`)
    );
}
