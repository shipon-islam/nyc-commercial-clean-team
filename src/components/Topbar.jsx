"use client";
import { trackPhoneClick } from "@/lib/gtm";
export default function Topbar() {
  return (
    <div className="bg-black text-white text-center h-8 sticky top-0 z-50 flex items-center justify-center">
        <p className="text-sm">Call Now <a onClick={()=>trackPhoneClick("topbar_phone")} className="hover:underline" href="tel:+1 (631) 381-7252">(631) 381-7252</a></p> 
    </div>
  )
}
