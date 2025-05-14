import {
  forwardRef,
  useRef,
  type ForwardedRef,
  type PropsWithChildren,
} from "react";
import { Box } from "../../Core/components";
import { useLayerSet } from "../../Layer/hooks";
import { Layer, LayerSet } from "../../Layer/components";

function WorkspaceComponent(
  {}: PropsWithChildren,
  ref?: ForwardedRef<HTMLDivElement>
) {
  const parent = useRef<HTMLDivElement>(null);
  const imageLayerSet = useLayerSet({ parent });
  const textLayerSet = useLayerSet({ parent });

  return (
    <Box className="workspace" ref={ref}>
      <div className="workspace-inner" ref={parent}>
        <LayerSet namespace="image" ref={imageLayerSet.refs.rootRef}>
          <Layer
            ref={imageLayerSet.refs.backgroundRef}
            z={0}
            width={imageLayerSet.width ?? 100}
            height={imageLayerSet.height ?? 100}
          />
          <Layer
            ref={imageLayerSet.refs.foregroundRef}
            z={1}
            width={imageLayerSet.width ?? 100}
            height={imageLayerSet.height ?? 100}
          />
        </LayerSet>
        <LayerSet namespace="text" ref={textLayerSet.refs.rootRef}>
          <Layer
            ref={textLayerSet.refs.backgroundRef}
            z={0}
            width={textLayerSet.width ?? 100}
            height={textLayerSet.height ?? 100}
          />
          <Layer
            ref={textLayerSet.refs.foregroundRef}
            z={1}
            width={textLayerSet.width ?? 100}
            height={textLayerSet.height ?? 100}
          />
        </LayerSet>
      </div>
    </Box>
  );
}

export const Workspace = forwardRef(WorkspaceComponent);
