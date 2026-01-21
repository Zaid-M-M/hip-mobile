import TransitionLink from "@/src/app/TransitionLink";
import { ArrowUpRight } from "lucide-react";

export default function RegionCard({ park }) {
  console.log(
    "parkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkparkpark",
    park
  );
  return (
    <div className="min-w-[300px] flex flex-col min-h-[350px] bg-[#1A1A1A] rounded-none shadow-lg">
      <img
        src={park.image}
        alt={park.label}
        className="w-full h-[180px] object-cover rounded-none"
      />
      <div className="p-3 flex flex-col h-full justify- min-h-[195px]">
        <div className="flex flex-col">
          <h3 className="text-[20px] bw-r text-[#F47920]">
            {park.incityname ? (
              <span dangerouslySetInnerHTML={{ __html: park.title }} />
            ) : (
              <span dangerouslySetInnerHTML={{ __html: park.label }} />
            )}
            {park.city && (
              <span
                className="text-[18px] bw-r text-[#F47920]"
                dangerouslySetInnerHTML={{ __html: `, ${park.city}` }}
              />
            )}
          </h3>

          {/* {park.purpose && (
            <p
              className="mb-1 text-[15px] text-gray-400"
              dangerouslySetInnerHTML={{ __html: park.purpose }}
            />
          )} */}
        </div>

        <div className="w-full text-white/80 bg-[#3C3C3C] flex flex-col justify-center leading-[26px] mt-2.5 px-[7px] min-h-[94px] text-sm rounded-[4px] py-[8px]">
          {park.area && (
            <div className="flex justify-between">
              <p className="bw-r text-[14px]">Total Area:</p>
              <span
                className="bw-r text-[15px]"
                dangerouslySetInnerHTML={{ __html: park.area }}
              />
            </div>
          )}

          {park.potential && (
            <div className="flex justify-between">
              <p className="bw-r text-[14px]">Potential:</p>
              <span
                className="bw-r text-[15px]"
                dangerouslySetInnerHTML={{ __html: park.potential }}
              />
            </div>
          )}

          {park.certification && (
            <div className="flex justify-between">
              <p className="bw-r text-[14px]">Certification:</p>
              <span
                className="bw-r text-[14px] text-right leading-[20px]"
                dangerouslySetInnerHTML={{ __html: park.certification }}
              />
            </div>
          )}
        </div>

        {park.slug === "warehousing-park-narasapura" ? null : (
          <TransitionLink
            href={`${
              park.incityname ? `/incity-centers/${park.slug}` : `/${park.slug}`
            }`}
            className="text-[16px] pt-3 bw-r text-[#F47920] flex items-center"
          >
            View Park <ArrowUpRight size={20} color="#F47920" />
          </TransitionLink>
        )}
      </div>
    </div>
  );
}
