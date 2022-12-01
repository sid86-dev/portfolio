export const MeetingConfirmationEmail = (
	agenda: string,
	start_time: string,
	start_url: string
) => {
	return `
<p style="padding-bottom: 65px">Your meeting is confirmed.</p>
<p style="padding-bottom: 10px"> Topic : ${agenda}<p>
<p style="padding-bottom: 10px"> Start Time : ${new Date(
		start_time
	).toUTCString()}<p>
<p style="padding-bottom: 100px">Join Url : ${start_url}</p>
<p>sid86.me<p>
`;
};
