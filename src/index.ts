import { GCPCostCircuitBreaker } from './breaker_core.js';

const safetyEngine = new GCPCostCircuitBreaker({
  projectId: "enterprise-google-ai-production",
  targetServiceAccount: "llm-agent-runner@://gserviceaccount.com",
  vertexQuotaLimit: 500 // Trigger emergency shutdown if more than 500 rapid iterations hit the system
});

(async () => {
  // Test A: Normal baseline traffic flow behavior
  await safetyEngine.monitorApiUsageMetrics(120);

  // Test B: Malicious recursive loop or prompt injection billing attack spike simulation
  console.log("\n⚠️ Simulating massive automated token exhaustion spike thread activity...");
  await safetyEngine.monitorApiUsageMetrics(501);
})();
