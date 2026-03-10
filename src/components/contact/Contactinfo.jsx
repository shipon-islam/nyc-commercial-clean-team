import { contactInfoCards } from "@/constant/contact";
import { Icon } from "@iconify/react";

export default function ContactInfo() {
  return (
    <div>
      <h2 className="heading-4 mb-4">Get in touch with us</h2>
      <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-8">
        Lorem Ipsum is simply free text available. Dolor sit amet consectetur
        adipisicing elit sed do eiusmod tempor incididunt ut labore dolore
        magna.
      </p>

      <div className="space-y-6">
        {contactInfoCards.map((card) => (
          <div key={card.id} className="flex items-center gap-4">
            {/* Icon circle */}
            <div className="w-12 h-12 md:w-14 md:h-14 bg-red hover:bg-[#1D2F64] rounded-md flex items-center justify-center flex-shrink-0">
              <Icon
                icon={card.icon}
                width="24"
                height="24"
                className="text-white"
              />
            </div>

            {/* Text */}
            <div>
              <p className="text-sm md:text-base font-semibold text-dark-slate">
                {card.label}
              </p>
              {card.isLink ? (
                <a
                  href={card.href}
                  className="text-red text-sm md:text-base hover:underline transition-colors"
                >
                  {card.value}
                </a>
              ) : (
                <p className="text-gray-600 text-sm md:text-base">
                  {card.value}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}