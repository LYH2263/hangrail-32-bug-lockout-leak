// 与后端 app/services/lock_gate.py 同一策略：检修只拦新上杆，在挂衣物取件放行。
export function hangWillSkip(maintenance: boolean): boolean {
  return maintenance;
}

export function pickupWillBlock(_maintenance: boolean): boolean {
  return false;
}

export function statusWords(maintenance: boolean): { badge: string; hint: string } {
  if (!maintenance) return { badge: "可挂", hint: "" };
  return { badge: "检修中", hint: "新上杆已拦截 · 在挂衣物可取件" };
}
