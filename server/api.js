//auth token we will use to generate a meeting and connect to it
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlrZXkiOiI3MTE2MzY4ZS01ZDU1LTRjYjYtYmYzZC0yNTk0YmU3OTFlMDgiLCJwZXJtaXNzaW9ucyI6WyJhbGxvd19qb2luIl0sImlhdCI6MTcxMzA5OTI3MCwiZXhwIjoxNzEzMTg1NjcwfQ.u28Y3iSj9P0V6yQJRHRN4J9Bue_WU3nApsh4MtrJZJc";

// API call to create meeting
const createMeeting = async () => {
  try {
    const res = await fetch(`https://api.videosdk.live/v2/rooms`, {
      method: "POST",
      headers: {
        authorization: `${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({}),
    });
    if (!res.ok) {
      throw new Error("Failed to create meeting");
    }
    const { roomId } = await res.json();
    return roomId;
  } catch (error) {
    console.error("Error creating meeting:", error);
    throw error;
  }
};

module.exports = {
  createMeeting,
};
