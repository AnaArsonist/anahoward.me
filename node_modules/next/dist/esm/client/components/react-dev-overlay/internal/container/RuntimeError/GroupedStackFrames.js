import React from 'react';
import { CallStackFrame } from './CallStackFrame';
import { FrameworkIcon } from './FrameworkIcon';
function FrameworkGroup({ framework , stackFrames , all  }) {
    const [open, setOpen] = React.useState(false);
    const toggleOpen = React.useCallback(()=>setOpen((v)=>!v), []);
    return /*#__PURE__*/ React.createElement(React.Fragment, null, /*#__PURE__*/ React.createElement("button", {
        "data-nextjs-call-stack-framework-button": true,
        "data-state": open ? 'open' : 'closed',
        onClick: toggleOpen,
        tabIndex: 10
    }, /*#__PURE__*/ React.createElement("svg", {
        "data-nextjs-call-stack-chevron-icon": true,
        fill: "none",
        height: "20",
        width: "20",
        shapeRendering: "geometricPrecision",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        viewBox: "0 0 24 24"
    }, /*#__PURE__*/ React.createElement("path", {
        d: "M9 18l6-6-6-6"
    })), /*#__PURE__*/ React.createElement(FrameworkIcon, {
        framework: framework
    }), framework === 'react' ? 'React' : 'Next.js'), open ? stackFrames.map((frame, index)=>/*#__PURE__*/ React.createElement(CallStackFrame, {
            key: `call-stack-${index}-${all}`,
            frame: frame
        })) : null);
}
export function GroupedStackFrames({ groupedStackFrames , all  }) {
    return /*#__PURE__*/ React.createElement(React.Fragment, null, groupedStackFrames.map((stackFramesGroup, groupIndex)=>{
        // Collapse React and Next.js frames
        if (stackFramesGroup.framework) {
            return /*#__PURE__*/ React.createElement(FrameworkGroup, {
                key: `call-stack-framework-group-${groupIndex}-${all}`,
                framework: stackFramesGroup.framework,
                stackFrames: stackFramesGroup.stackFrames,
                all: all
            });
        }
        return(// Don't group non React and Next.js frames
        stackFramesGroup.stackFrames.map((frame, frameIndex)=>/*#__PURE__*/ React.createElement(CallStackFrame, {
                key: `call-stack-${groupIndex}-${frameIndex}-${all}`,
                frame: frame
            })));
    }));
}

//# sourceMappingURL=GroupedStackFrames.js.map