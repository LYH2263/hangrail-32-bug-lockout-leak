"""检修封锁策略：检修中的挂杆拒绝一切新上杆，但不阻拦取件释放。"""
from __future__ import annotations


def rail_blocked_for_hang(maintenance: bool) -> bool:
    """检修封锁中的杆不得接受新上杆（无论自动扫杆还是点名扫杆）。"""
    return bool(maintenance)
