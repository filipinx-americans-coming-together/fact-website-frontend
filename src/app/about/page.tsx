import PageContainer from "@/components/formatting/PageContainer";
import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";
import SVGUndulate from "@/components/icons/SVGUndulate";

const IMG1_URL = "/variety-show.JPG";
const IMG2_URL = "/workshop.JPG";

const IMG_HEIGHT = 5184;
const IMG_WIDTH = 3456;

const PLACEHOLDER_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU9vG2BwACbwEDalojHwAAAABJRU5ErkJggg==";
const PDF_URL =
  "https://drive.google.com/file/d/1DYkEqr0mfdsLnzYbCdy_xSr2JNiPvgcZ/view";

function InfoBlock({ key, number, caption }: { key: number, number: string; caption: string }) {
  return (
    <div key={key} className="flex flex-col justify-between gap-6">
      <div className="font-semibold text-4xl">{number}</div>
      <div className="text-lg/5">{caption}</div>
    </div>
  );
}

export default function About() {
  const stats = [
    { number: "600", caption: "Delegates" },
    { number: "25", caption: "Schools" },
    { number: "3", caption: "Days" },
    { number: "18", caption: "Workshops" },
    { number: "12", caption: "Variety Show Performers" },
    { number: "14", caption: "Palengke Vendors" },
    { number: "19", caption: "FACT Pack Members" },
  ];
  return (
    <PageContainer
      title="About"
      background="bg-gradient saturate-200 mask-[var(--background-image-blurry)] mask-position-[50%_150%]"
    //   background="bg-rose-300"
    >
      <div className="flex relative text-center items-center border-y">
        <div className="w-1/3 flex items-center justify-center text-5xl">
          <h1 className="absolute text-white z-10">WHAT IS FACT?</h1>

          <div className="flex relative">
            <div className="grow absolute inset-0 bg-gray-600 opacity-30"></div>
            <Image
              src={IMG1_URL}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              alt=""
              placeholder={PLACEHOLDER_URL}
              className="-z-10"
            />
          </div>
        </div>
        <div className="flex pl-[2vw]  w-2/3 items-center justify-center">
          FACT stands for Filipinx Americans Coming Together and is a conference
          hosted annually by the Philippine Student Association at the
          University of Illinois at Urbana-Champaign. It is the largest
          Filipinx-interest conference in the Midwest, bringing in over 1,000
          delegates yearly. The conference works to empower young, rising
          professionals while simultaneously educating the delegates about
          Filipinx culture, identity and issues. Despite the conference’s title,
          the conference is not limited to delegates of Filipinx descent. The
          facilitators and delegates come from different backgrounds and
          ethnicities, and the workshops cover a wide array of topics. FACT’s
          mission is to build a community of leaders by uniting, enlightening
          and empowering the Filipinx/Fil-Am/Non-Filipinx youth nationwide. By
          exploring our interests, culture and identity as a rising generation,
          we hope that our delegates can take with them knowledge that they can
          apply beyond their college career as leaders in the professional world
          ready to give back to their community.
        </div>
      </div>

      <div className="my-[2vw] bg-highlight-secondary p-[2vw] flex justify-around rounded-4xl text-center gap-2">
        {stats.map((item, index) => (
          <InfoBlock key={index} number={item.number} caption={item.caption}></InfoBlock>
        ))}
      </div>

      <div className="flex relative text-center items-center border-y">
        <div className="flex pr-[2vw] w-2/3 items-center justify-center">
          Our theme for this year is “Ipahayag nang Malakas,” which translates
          to “Proclaim Loudly.” Our theme is rooted in the belief that everyone
          carries a collection of beautiful and complex identities, and those
          identities deserve to be seen, heard, and celebrated. We want to
          encourage attendees to embrace all parts of who they are and step
          confidently into the person they aspire to become. It’s not just about
          self-expression. It is about empowerment, finding your voice, and
          using it to speak up for yourself, for your communities, and for the
          values and ideas that matter to you. Whether that means reconnecting
          with your heritage, stepping into leadership, or advocating for
          change, this theme is a call to own your narrative and proclaim it
          boldly, unapologetically, and with purpose.
        </div>
        <div className="w-1/3 flex items-center justify-center text-5xl">
          <h1 className="absolute text-white z-10">FACT 2025</h1>
          <div className="flex relative">
            <div className="grow absolute inset-0 bg-gray-600 opacity-30"></div>
            <Image
              src={IMG2_URL}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              alt=""
              placeholder={PLACEHOLDER_URL}
              className="-z-10"
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
