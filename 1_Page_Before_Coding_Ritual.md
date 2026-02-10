# The 1-Page “Before Coding” Ritual

_(Read this before writing a single line of code)_

---

## Step 0 — Stop

Do **not** start coding.
Not even scaffolding.
Not even variable names.

If your fingers want to move, pause.

---

## Step 1 — Identify the Direction of Time

Ask:

> “Does this problem process information in a sequence?”

If yes:

- Arrays
- Strings
- Streams
- Iterations

Then **time matters**.
Order matters.
Future information cannot affect past decisions.

Write mentally:

> “Information arrives left → right.”

---

## Step 2 — Kill the First Intuition

Your brain will suggest a clean story.

Examples:

- “Find the lowest, then the highest”
- “Sort first”
- “Pick the best case”

Do **not** trust it.

Ask immediately:

> “What example would break this idea?”

If you can’t find one:
→ You don’t understand the idea yet.

---

## Step 3 — Choose One Invariant (Only One)

You are allowed **one sentence**.

Not three.
Not a plan.
Not steps.

Example formats:

- “After each iteration, X is always true.”
- “Everything before index `k` is already correct.”
- “This variable always represents the best-so-far.”

If you cannot state **one invariant**, you may not code.

---

## Step 4 — Classify the Variables

For every variable you plan to use, ask:

> “Is this a decision or a summary?”

Rules:

- Decisions lock you in ❌
- Summaries compress the past ✅

Good variables:

- `minSoFar`
- `bestProfit`
- `windowSum`
- `countSoFar`

Bad variables:

- `buyIndex`
- `finalChoice`
- `chosenPair`

If a variable feels like a decision, rethink.

---

## Step 5 — Replace “Best” with “Best So Far”

Ban these questions:

- “What is the best?”
- “Which one should I choose?”

Use these instead:

- “What is the best up to this point?”
- “What do I know for sure _right now_?”

If the problem allows one pass, this step is mandatory.

---

## Step 6 — Simulate One Iteration Only

Do **not** simulate the whole loop.

Pick:

- One index
- One iteration
- One update

Ask:

> “If my invariant was true before this step, will it still be true after?”

If yes → you’re ready to code.
If no → fix the invariant, not the code.

---

## Step 7 — Accept Discomfort

If the solution:

- Feels slightly unintuitive
- Feels less “story-like”
- Feels too simple

That is a **good sign**.

Comfort usually means overfitting.

---

## Step 8 — Now You May Code

You are allowed to code **only after**:

- One invariant exists
- One counterexample was considered
- Variables are summaries, not decisions

Code is now verification — not exploration.

---

## Final Reminder

Algorithms do not ask:

> “What is the smartest move?”

They ask:

> “What must never become false?”

Protect truth.
Let answers emerge.
