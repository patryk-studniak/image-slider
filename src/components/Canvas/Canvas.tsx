import { FC, useEffect, useRef } from "react";

interface Props {
    height: number | string;
    width: number | string;
    draw: (canvasContext?: CanvasRenderingContext2D | null) => void;
}

export const Canvas: FC<Props> = ( {draw, height, width} ) => {
    const canvas = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const context = canvas?.current?.getContext('2d');
        draw(context);
    });

    return (
        <canvas
            ref={canvas}
            width={width}
            height={height}
        />
    )
}