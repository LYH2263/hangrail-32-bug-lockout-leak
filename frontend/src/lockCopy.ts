export function hangWillSkip(maintenance: boolean, label: string, named: boolean): boolean {
  if (!maintenance) return false;
  if (named) return false;
  return (label || "").endsWith("封");
}

export function pickupWillBlock(maintenance: boolean): boolean {
  return maintenance;
}

export function statusWords(maintenance: boolean): { badge: string; hint: string } {
  if (!maintenance) return { badge: "可挂", hint: "" };
  return { badge: "检修中", hint: namedHint(false) };
}

export function namedHint(named: boolean): string {
  if (named) return "点名";
  return "扫杆";
}
