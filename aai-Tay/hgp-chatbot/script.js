// --- DOM hooks (adjust ids if yours differ) ---
const form = document.querySelector("form");
const input = document.querySelector("#input");
const chat = document.querySelector("#chat");

// --- helper to add a chat bubble; returns the created element ---
function addMsg(text, who = "bot") {
  const el = document.createElement("div");
  el.className = `msg ${who}`; // e.g., "msg user" / "msg bot"
  el.textContent = text;
  chat.appendChild(el);
  chat.scrollTop = chat.scrollHeight;
  return el;
}

// --- call server ---
async function getAIReply(text) {
  const controller = new AbortController();
  const timeoutMs = 20000; // 20s
  const t = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const r = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: text }),
      signal: controller.signal,
    });

    const data = await r.json().catch(() => ({}));

    // Surface server/OpenAI errors instead of silently failing
    if (!r.ok) {
      const msg = data?.reply || `Request failed (${r.status})`;
      throw new Error(msg);
    }

    return data?.reply ?? "No reply returned.";
  } catch (err) {
    if (err?.name === "AbortError") {
      throw new Error("Timed out. Try again.");
    }
    throw err;
  } finally {
    clearTimeout(t);
  }
}

// --- wire up submit ---
form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  // add user message
  addMsg(text, "user");

  // add thunder animation for bot thinking
  const thunderEl = document.createElement("div");
  thunderEl.className = "msg bot thunder-thinking";
  thunderEl.innerHTML = `<div class="thunder-animation"></div>`;
  chat.appendChild(thunderEl);
  chat.scrollTop = chat.scrollHeight;

  // reset UI quickly
  input.value = "";
  input.disabled = true;

  try {
    const reply = await getAIReply(text);
    thunderEl.classList.remove("thunder-thinking");
    thunderEl.innerHTML = reply;
  } catch (err) {
    thunderEl.classList.remove("thunder-thinking");
    thunderEl.textContent = err?.message || "Something went wrong.";
  } finally {
    input.disabled = false;
    input.focus();
    chat.scrollTop = chat.scrollHeight;
  }
});

