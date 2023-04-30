import chimerapy as cp

from chimerapy_orchestrator.registry.utils import sink_node, source_node

print("here")


@source_node(name="ANode", add_to_registry=True)
class ANode(cp.Node):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def step(self):
        return 5


@sink_node(name="BNode", add_to_registry=True)
class BNode(cp.Node):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    def step(self, data_chunk):
        for name, data in data_chunk.items():
            print(f"{name}: {data}")
