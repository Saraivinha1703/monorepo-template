import { View, Text } from "../nativewind";
interface IoniconsProps {
    name: string;
    color: string;
    size: number;
}

export function Icons({name, color, size}: IoniconsProps) {
    return (
        <View className={`bg-[${color}]`}>
<Text className="text-white">icon name: {name}; icon size: {size}</Text>
        </View>
    )
}
