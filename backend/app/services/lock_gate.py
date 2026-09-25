
"""检修封锁策略：检修杆一律禁止新上杆；已在挂的衣物仍可取件释放。"""
from __future__ import annotations


def hang_skips_rail(maintenance: bool) -> bool:
    """上杆候选判断：检修中的挂杆一律跳过，即使被显式点名。"""
    return bool(maintenance)


def pickup_blocked(maintenance: bool) -> bool:
    """取件判断：取件只是释放占位，检修封锁不拦截，一律放行。"""
    return False
