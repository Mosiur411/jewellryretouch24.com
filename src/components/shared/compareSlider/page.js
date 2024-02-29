'use client'
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
export default function CompareSlider({ before, after, retundata }) {
    return (
        <div className="h-full w-full" >
            <ReactCompareSlider
                className={`bg-red-500 h-full md:rounded-t-none rounded-t-xl  ${retundata ? ' md:rounded-r-xl' : 'md:rounded-l-xl md:rounded-tl-xl'} `}
                itemOne={<ReactCompareSliderImage src={before} srcSet={before} alt="Image one" />}
                itemTwo={<ReactCompareSliderImage src={after} srcSet={after} alt="Image two" />}
            />
        </div>
    );
}