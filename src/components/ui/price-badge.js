import Image from 'next/image';

export function PriceBadge({ price, period, icon, width = 32, height = 32 }) {
    return (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 flex items-center justify-center w-20 h-20 rounded-full border-[0.2px] border-[#7D40FF] bg-[#070707] backdrop-blur-sm">
            <Image
                src={icon}
                alt="Price"
                width={width}
                height={height}
                className="text-purple-400"
            />
        </div>
    );
}
