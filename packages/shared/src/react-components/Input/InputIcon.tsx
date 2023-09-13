import {Icons} from '../../lib/nativewindStyledComponents'

interface IconProps {
    name: string;
    color: string;
    size: number;
}

export function InputIcon({name, color, size}: IconProps) {
    return (
        <Icons name={name} color={color} size={size}/>
    )
}