# 💸 GCP Cost Circuit Breaker

> An automated infrastructure emergency circuit breaker engineered for the Google Cloud Platform (GCP) ecosystem to prevent runaway billing disasters caused by loop-trapped Cloud Functions, Vertex AI/Gemini API exhaustion, or multi-tenant DDoS spikes.

<img width="1999" height="595" alt="image" src="https://github.com/user-attachments/assets/4f03d697-0854-4f21-923e-899ac0c94807" />

## 💡 The Real-World Utility
In the **Google Developer Program**, developers leverage serverless runtimes (`Cloud Run`, `Cloud Functions`) and high-cost generative AI models (`Vertex AI`). If an LLM agent gets caught in a recursive loop, or an endpoint experiences a billing attack, Google Cloud will auto-scale indefinitely, producing **thousands of dollars in overnight debt**. 

`gcp-cost-circuit-breaker` integrates into your deployment monitoring stack. The moment consumption vectors breach custom thresholds, it programmatically manipulates the **GCP IAM API** to strip execution service accounts of compute roles, freezing costs instantly.

## 🚀 Local Initialization & Testing
```bash
npm install
npm start
```
