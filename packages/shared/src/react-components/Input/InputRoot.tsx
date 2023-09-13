import { View } from "../../lib/nativewind";
import {ReactNode} from 'react'

interface RootProps {
    children: ReactNode
}

export function InputRoot({children}: RootProps) {
    return (
        <View className={`flex-row justify-evenly items-center bg-midnight`}>
            {children}
        </View>
    )
}