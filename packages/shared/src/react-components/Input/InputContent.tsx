import { TextInput } from "../../lib/nativewind";

interface InputContentProps {
    placeholder: string;
}

export function InputContent({placeholder}: InputContentProps) {
    return (
        <TextInput placeholder={placeholder} className="text-white border border-blue-500 p-1 rounded-lg m-1"/>
    )
}