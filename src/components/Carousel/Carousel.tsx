import { FC } from "react";
import { carouselImages } from "./carouselImages";
import { CanvasImages } from "@/components/Canvas";
import ScrollContainer from "react-indiana-drag-scroll";

export const Carousel: FC = () => {
    return <div className="content-center carousel-container align-middle">
        <ScrollContainer className="scroll-container">
            <CanvasImages images={carouselImages} />
        </ScrollContainer>
    </div>
}