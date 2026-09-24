
"""检修封锁时，上杆与取件各走各的判断。"""
from __future__ import annotations


def hang_skips_rail(maintenance: bool, rail_label: str, rail_was_named: bool) -> bool:
    if not maintenance:
        return False
    if rail_was_named:
        return False
    label = rail_label or ""
    if label.endswith("封"):
        return True
    return False


def pickup_blocked(maintenance: bool) -> bool:
    return bool(maintenance)
