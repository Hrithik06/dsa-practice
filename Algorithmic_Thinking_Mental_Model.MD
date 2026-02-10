# Algorithmic Thinking — Mental Models & Brain Retraining Guide

This document summarizes the core insights about **how my brain naturally thinks**,  
**why that conflicts with algorithmic problems**, and **how to retrain it**.

---

## 1. How My Brain Naturally Works

### 1.1 I Think in Stories First

- I look for a narrative:
  - First do X
  - Then do Y
  - Then conclude
- I prefer solutions that feel “human logical”.

**Problem:**  
Algorithms do not reward good stories — they reward guarantees.

---

### 1.2 I Form Global Rules from Local Examples

- Clean examples → I invent clean rules
- Messy examples → I become flexible

Example mental compression:

> “Always buy at the lowest price.”

**Problem:**  
Examples are illustrations, not proofs.

---

### 1.3 I Want Certainty Early

- I feel relief when:
  - A decision is locked in
  - The plan feels decided
- I dislike unresolved ambiguity.

**Problem:**  
Many algorithms require deferred commitment.

---

### 1.4 I Prefer Explicit Structure

I feel comfortable with:

- Multiple loops
- Index tracking
- Clear stages
- Explicit decisions

I feel uneasy when:

- Meaning is stored implicitly (e.g., in a variable invariant)
- Code works but isn’t narratable as a story

---

## 2. The Core Mental Model Shift

### ❌ Old Model (Human Planning)

> Decide the best action, then execute it.

### ✅ Algorithmic Model

> Maintain guarantees while scanning information.

Algorithms:

- Do not decide early
- Keep promises (invariants)
- Let the answer emerge

---

## 3. The Stock Problem — The Brain Trap Examples

### Problem

Given daily stock prices, find the maximum profit from **one buy and one sell**  
(Buy must happen before sell).

---

### The Intuitive but Wrong Mental Model

> “The best profit must involve buying at the lowest price.”

This feels correct.  
It is clean.  
It matches many examples.

That is exactly why it is dangerous.

---

## Example A — The _Deceptive_ Clean Example

```js
prices = [7, 1, 5, 3, 6, 4];
```

## Understanding the Mental Model Trap in Stock Profit Problems

## Example A — The Friendly Case

**What the brain learns from this:**

- Global lowest = `1`
- Buy at `1`, sell at `6`
- **Profit = 5**

This example reinforces the **wrong rule**:

> “Always buy at the lowest price.”

The rule _appears_ correct — but only because the data is friendly.

---

## Example B — The Trap Example (Breaks the Rule)

```js
prices = [3, 2, 100, 1, 5];
```

## What the Brain Wants to Do

- Global lowest = `1`
- Buy at `1`, sell at `5`
- **Profit = 4**

## What Actually Gives Maximum Profit

- Buy at `2`
- Sell at `100`
- **Profit = 98**

The best trade does **not** use the global minimum.

This example destroys the **“always buy at lowest”** mental model.

---

## Why the Brain Gets Tricked

The brain:

- Ignores time
- Treats the array as a **set**, not a **sequence**
- Assumes perfect future knowledge

But algorithms must respect:

- Information arrives **in order**
- You **cannot buy in the future** to sell in the past

---

## The Correct Mental Model

### ❌ Wrong

> Buy at the lowest price.

### ✅ Correct

> Track the lowest price **so far**, and at each step evaluate selling **now**.

### Key Invariant

> After day `i`, `min` is the lowest price from day `0` to day `i`.

- `min` is **not** “the buy day”
- It is a **running summary of past opportunity**

---

## Why the One-Pass Solution Works

It does **not**:

- Choose a buy day
- Lock in a plan

It **does**:

- Maintain a guarantee
- Delay commitment
- Let the answer emerge naturally

---

## What an Invariant Really Is

An invariant is:

> A condition that must always remain true after each step.

**Example:**

> “After each iteration, `min` is the lowest price seen so far.”

Variables are **not decisions**.  
They are **summaries of the past**.

---

## Rules to Retrain My Thinking

### Rule 1 — One Invariant Before Coding

Before writing code, I must be able to say:

> “After each iteration, X is always true.”

If I can’t say it, I’m **not allowed to code yet**.

---

### Rule 2 — Never Trust Examples Alone

Always ask:

> “What single counterexample would destroy this idea?”

If I can’t find one, I don’t understand it yet.

---

### Rule 3 — Replace “Best” with “Best So Far”

Never ask:

> “What is the best?”

Always ask:

> “What is the best **up to this point**?”

This aligns thinking with **time-ordered data**.

---

### Rule 4 — Code to Verify, Not Discover

I should not code to find understanding.

Instead:

> “I believe this invariant is true — let me code to verify it.”

---

### Rule 5 — Discomfort Is a Signal

- Comfortable solutions often **overfit examples**
- Slightly uncomfortable solutions are often **correct**

**Discomfort ≠ wrong**  
**Discomfort = new mental model forming**

---

## Algorithmic Thinking (Simply Defined)

Algorithmic thinking is:

- Choosing what must **never break**
- Protecting it at **every step**
- Letting the solution **fall out naturally**

It is **not**:

- Clever tricks
- Memorization
- Pattern spotting alone

---

## Final Reflection

I am **not** bad at algorithms.

I was trained to:

- Think in narratives
- Decide early
- Seek certainty

Algorithms require:

- Guarantees
- Deferred commitment
- Trust in invariants

This is a **retraining problem**, not a **talent problem**.
