---
name: siv-communications
description: Send a WhatsApp message, an email or start a phone call to one of the founder's approved contacts through the Chelsiv.AI outreach API. Use only after the founder has approved the exact message and recipient.
---

# SIV Communications

SIV can reach people by **WhatsApp**, **email** or **phone call**. Every send goes through the Chelsiv.AI outreach API (`/api/siv-outreach`), which only accepts approved contact names and checks a secret token.

## Before sending (always)

1. Decide the contact (short name such as `founder`), the channel and the exact text.
2. Post the draft on the issue and ask Walkar to approve it, or wait for an approval already given for this exact message.
3. Never send to a raw phone number or email address; never invent facts or promises.

## Send

```bash
node skills/siv-communications/scripts/send.mjs \
  --channel whatsapp --contact founder \
  --message "Good morning Walkar. Today's CEO brief is ready on the board." \
  --confirmed
```

Email also takes `--subject "..."`. A call makes the SIV Caller agent phone the contact and say the message.

Needs env: `SIV_OUTREACH_URL` (e.g. `https://chelsiv-ai.vercel.app/api/siv-outreach`) and `SIV_OUTREACH_TOKEN` (secret).

## After sending

Comment on the issue with the channel, contact name and reference ID returned. Do not copy phone numbers or email addresses into comments.

## Errors

| Status | Meaning | What to do |
|---|---|---|
| 401 | Token wrong or missing | Ask the founder to check `SIV_OUTREACH_TOKEN` |
| 404 | Contact not approved | Ask the founder to add them to the approved contacts list |
| 428 | Not confirmed | Get the founder's approval first |
| 503 | Channel not set up or outreach off | Offer another channel; tell SIV's daily brief |
