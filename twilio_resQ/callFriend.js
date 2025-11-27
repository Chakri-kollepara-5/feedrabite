require('dotenv').config();
const twilio = require('twilio');

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// Array of verified numbers
const phoneNumbers = [
  "+918885628836",//"7673960499"
];

// Your Twilio number
const twilioNumber = "+19895828969";

// Loop through each number and initiate a call
for (const number of phoneNumbers) {
  client.calls
    .create({
      to: number,
      from: twilioNumber,
      twiml: `
        <Response>
          <Say voice="alice">⚠ Disaster Alert. Please move to the nearest shelter.</Say>
          <Pause length="2"/>
          <Say voice="alice">Stay safe. Repeat, move to the nearest shelter now.</Say>
        </Response>
      `,
    })
    .then((call) =>
      console.log(`✅ Call initiated to ${number}, SID: ${call.sid}`)
    )
    .catch((err) =>
      console.error(`❌ Failed to call ${number}: ${err.message}`)
    );
}
