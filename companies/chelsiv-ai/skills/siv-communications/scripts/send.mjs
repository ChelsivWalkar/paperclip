#!/usr/bin/env node
// Send one approved WhatsApp message, email or call through the Chelsiv.AI outreach API.
// Usage: node send.mjs --channel email|whatsapp|call --contact founder --message "..." [--subject "..."] --confirmed
const args = process.argv.slice(2);
const get = (k) => { const i = args.indexOf("--" + k); return i >= 0 ? args[i + 1] : undefined; };
const channel = get("channel"), contact = get("contact"), message = get("message"), subject = get("subject");
const confirmed = args.includes("--confirmed");
const url = process.env.SIV_OUTREACH_URL, token = process.env.SIV_OUTREACH_TOKEN;

function fail(msg) { console.error(msg); process.exit(1); }
if (!url || !token) fail("Set SIV_OUTREACH_URL and SIV_OUTREACH_TOKEN.");
if (!/^https:\/\//.test(url)) fail("SIV_OUTREACH_URL must use https.");
if (!["email", "whatsapp", "call"].includes(channel)) fail("--channel must be email, whatsapp or call.");
if (!contact || !/^[a-z0-9-]{2,32}$/.test(contact)) fail("--contact must be an approved short name, not a number or email.");
if (!message) fail("--message is required.");
if (!confirmed) fail("Add --confirmed only after the founder approved this exact message.");

const res = await fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json", "X-SIV-Outreach-Token": token },
  body: JSON.stringify({ channel, contact, message, subject, founder_confirmed: true }),
  signal: AbortSignal.timeout(30000),
});
let data = {};
try { data = await res.json(); } catch {}
if (!res.ok) fail(`Not sent (${res.status}): ${data.error || "unknown error"}`);
console.log(`Sent by ${data.channel} to ${data.contact}. Reference: ${data.reference ?? "none"}`);
