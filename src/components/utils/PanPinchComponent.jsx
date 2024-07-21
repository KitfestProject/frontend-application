import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const PanPinchComponent = ({ children, initialScale = 1, zoomStep = 0.5 }) => {
  return (
    <TransformWrapper initialScale={initialScale} wheel={{ step: zoomStep }}>
      {({ zoomIn, zoomOut, resetTransform }) => (
        <div className="pan-pinch-container">
          <div className="tools text-center pb-5">
            <button
              onClick={() => zoomIn()}
              className="px-4 py-2 mr-2 rounded border border-gray bg-transparent text-gray text-lg"
            >
              Zoom In
            </button>
            <button
              onClick={() => zoomOut()}
              className="px-4 py-2 mr-2 rounded border border-gray bg-transparent text-gray text-lg"
            >
              Zoom Out
            </button>
            <button
              onClick={() => resetTransform()}
              className="px-4 py-2 rounded border border-gray bg-transparent text-gray text-lg"
            >
              Reset
            </button>
          </div>
          <TransformComponent>
            <div className="zoomable-content">{children}</div>
          </TransformComponent>
        </div>
      )}
    </TransformWrapper>
  );
};

export default PanPinchComponent;
