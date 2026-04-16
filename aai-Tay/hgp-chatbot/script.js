const chat = document.getElementById("chat");
const form = document.getElementById("form");
const input = document.getElementById("input");


function addMsg(text, who) {
  const div = document.createElement("div");
  div.className = `msg ${who}`;
  // Render bot messages as HTML so links work; keep user messages as text to avoid injection
  if (who === "bot") {
    div.innerHTML = text;
  } else {
    div.textContent = text;
  }
  chat.appendChild(div);
  chat.scrollTop = chat.scrollHeight;
}


const rules = [
  { match: ["hello", "hi", "hey"], reply: "Hey! I'm the HGP Help Bot. Ask me about hours, location, or programs." },
  { match: ["hours", "open"], reply: "We're open Mon--Fri, 9am--5pm." },
  { match: ["location", "where"], reply: "We're located at our community site (ask your facilitator for the address)." },
  { match: ["program", "classes"], reply: "We teach leadership + tech skills. Ask: 'What do we learn in BI?'" },
  { match: ["office hours"], reply: "Office Hours are Mondays, Tuesdays, Thursdays, and Fridays." },
  // Websites rule includes an HTML link; bot messages render as HTML so this will be clickable
  { match: ["website", "websites"], reply: 'Here is some website help with coding: <a href="https://www.w3schools.com/" target="_blank" rel="noopener">Codecademy</a>' },
  { match: ["Landon", "name"], reply: "You mean wannabe Ja Morant acting like a thug trying to be the next 310baby." },
];


function getReply(text) {
  const t = text.toLowerCase();
  for (const r of rules) {
    if (r.match.some(word => t.includes(word))) return r.reply;
  }
  return "I'm not sure yet --- teach me a new rule!";
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;


  addMsg(text, "user");
  addMsg(getReply(text), "bot");
  input.value = "";
});
