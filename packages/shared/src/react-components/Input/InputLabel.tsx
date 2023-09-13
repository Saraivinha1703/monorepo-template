import { Text } from "../../lib/nativewind";

interface InputLabelProps {
    text: string;
}

export function InputLabel({ text }: InputLabelProps) {
    return (
        <Text className="text-red-500">{text}</Text>
    )
}