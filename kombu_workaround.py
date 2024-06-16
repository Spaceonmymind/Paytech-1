try:
    from importlib.metadata import entry_points
except ImportError:
    from importlib_metadata import entry_points

def kombu_entrypoints(namespace):
    eps = entry_points()
    if hasattr(eps, 'select'):
        return eps.select(group=namespace)
    return eps.get(namespace, [])

# Замена оригинальной функции в kombu
import kombu.utils.compat
kombu.utils.compat.entrypoints = kombu_entrypoints
