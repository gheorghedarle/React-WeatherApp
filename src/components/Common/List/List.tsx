import React, { createRef, MutableRefObject, useRef, useState } from "react";
import "./List.scss";

interface Scroll {
  isScrolling: boolean;
  clientX: number;
  scrollX: number;
}

export const ListComponent = (props: any) => {
  const ref = useRef<HTMLDivElement>(null);
  const [state, setState] = useState<Scroll>({
    isScrolling: false,
    clientX: 0,
    scrollX: 0,
  });

  const onMouseDown = (event: any) => {
    console.log("onMouseDown", state);
    setState({ ...state, isScrolling: true, clientX: event.clientX });
  };

  const onMouseUp = (event: any) => {
    console.log("onMouseUp", state);
    setState({ ...state, isScrolling: false });
  };

  const onMouseMove = (event: any) => {
    console.log("onMouseMove", state);
    const { clientX, scrollX } = state;
    if (state.isScrolling && ref.current) {
      ref.current.scrollLeft = scrollX + event.clientX - clientX;
      setState({
        ...state,
        scrollX: scrollX + event.clientX - clientX,
        clientX: event.clientX,
      });
    }
  };

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      className="list"
      style={{ cursor: "grab" }}
    >
      {props.children}
    </div>
  );
};

export default ListComponent;
