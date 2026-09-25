/** 检修封锁策略，与后端 app/services/lock_gate.py 保持一致。 */

export function railBlockedForHang(maintenance: boolean): boolean {
  // 检修中的杆不得接受任何新上杆（自动扫杆与点名扫杆一致）
  return maintenance;
}

export function pickupBlocked(_maintenance: boolean): boolean {
  // 检修不阻拦已在挂衣物取件释放
  return false;
}

export function statusWords(maintenance: boolean): { badge: string; hint: string } {
  if (!maintenance) return { badge: "可挂", hint: "" };
  return { badge: "检修中", hint: "暂停新上杆，已在挂衣物仍可取件" };
}
