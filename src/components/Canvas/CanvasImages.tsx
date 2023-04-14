import { FC } from "react";
import { Canvas } from "@/components/Canvas/Canvas";

enum CanvasDimension {
    WIDTH = 640,
    HEIGHT = 400
}

interface Props {
    images: string[];
}

export const CanvasImages: FC<Props> = ({ images }) => {
    const canvasWidth = images.length * CanvasDimension.WIDTH + (images.length * 20);

    const drawImage = (canvasContext?: CanvasRenderingContext2D | null) => {
        images.forEach((src, index) => {
            const image = new Image();
            image.src = src;
            image.onload = () => {
                canvasContext?.drawImage(image, (index * CanvasDimension.WIDTH) + 20, 0);
            }
        })

    }

    return <Canvas draw={drawImage} height={CanvasDimension.HEIGHT} width={canvasWidth} />
}