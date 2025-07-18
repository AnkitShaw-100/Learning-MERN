import {cn} from "@/lib/utils"
import { Divide } from "lucide-react";
import {HTMLAttributes} from "react";

interface PhoneProps extends HTMLAttributes<HTMLDivElement>{
    imgSrc:string;
    dark?:boolean
}

const Phone = ({imgSrc, className, dark = false, ...props} : PhoneProps) =>{
    return (<div className={cn("relative pointer-events-none z-50 overflow-hidden", className)} {...props} >

        {/* Phone frame */}

      <img
        src={dark ? "/phone-template-dark-edges.png" : "/phone-template-white-edges.png"}
        className="pointer-events-none z-50 select-none"
        alt="phone frame"
      />

        <div className="absolute -z-10 inset-0">
            <img 
            className="object-cover"
            src={imgSrc} 
            alt="overlaying phone iamge" />
        </div>
    </div>)
}

export default Phone