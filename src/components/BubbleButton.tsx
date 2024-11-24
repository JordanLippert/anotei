import { ComponentProps, ReactNode } from "react";

export interface BubbleButtonProps extends ComponentProps<'button'> {
    children: ReactNode;
}

export function BubbleButton(props : BubbleButtonProps) {
    return (
        <button 
            className="p-2 text-zinc-500 text-sm flex items-center gap-1.5 font-medium leading-none hover:text-zinc-300 hover:text-zinc-800 data-[active=true]:text-red-600" 
            {...props} 
        />
    )
}