import PageContainer from "@/components/formatting/PageContainer";
import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";

const IMG1_URL = "/variety-show.JPG";
const IMG2_URL = "/palengke/2.JPG";
const IMG3_URL = "/variety-show/8.JPG";

const IMG_HEIGHT = 5184;
const IMG_WIDTH = 3456;

const PLACEHOLDER_URL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU9vG2BwACbwEDalojHwAAAABJRU5ErkJggg==";
const PDF_URL =
  "https://drive.google.com/file/d/1DYkEqr0mfdsLnzYbCdy_xSr2JNiPvgcZ/view";

export default function About() {
    const nums = ["600", "25", "3", "18", "12", "14", "19"];
    const caps = ["Delegates", "Schools", "Days", "Workshops", "Variety Show Performers", "Palengke Vendors", "FACT Pack Members"];
  return (
    <PageContainer
      title="About"
    >
        
      <div className="flex flex-col sm:flex-row relative text-center items-center sm:-mt-6 lg:-mt-10">
        <div className="sm:w-1/2 xl:w-1/3 grow flex items-center justify-center text-5xl sm:text-4xl lg:text-5xl">
          <h1 className="absolute text-white z-10 px-4">WHAT IS FACT?</h1>

          <div className="flex relative">
            <div className="grow absolute inset-0 bg-gray-600 opacity-30"></div>
            <Image
              src={IMG1_URL}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              alt=""
              placeholder={PLACEHOLDER_URL}
              className="-z-10 aspect-3/2"
            />
          </div>
        </div>
        <div className="flex items-center justify-center sm:ml-6 sm:-mr-6 sm:w-1/2 xl:w-2/3 sm:text-xs xl:text-sm my-6">
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

      
      <div className="flex flex-col-reverse sm:flex-row relative text-center items-center sm:border-y-2">
        <div className="flex items-center justify-center sm:mr-6 sm:-ml-6 sm:w-1/2 xl:w-2/3 sm:text-xs xl:text-sm my-6">
          The Filipinx Americans Coming Together (FACT)
                            Conference at the University of Illinois at
                            Urbana-Champaign is committed to honoring,
                            educating, and celebrating Philippine culture and
                            identity. FACT strives to create a space for
                            everyone to feel welcome and appreciate all unique
                            identities. Through this conference, FACT hopes to
                            inspire delegates to embrace their cultural heritage
                            and promote personal growth and connections.
        </div>
        <div className="sm:w-1/2 xl:w-1/3 flex items-center justify-center text-5xl sm:text-4xl lg:text-5xl">
          <h1 className="absolute text-white z-10 px-4">MISSION STATEMENT</h1>
          <div className="flex relative">
            <div className="grow absolute inset-0 bg-gray-600 opacity-30"></div>
            <Image
              src={IMG2_URL}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              alt=""
              placeholder={PLACEHOLDER_URL}
              className="-z-10 aspect-3/2"
            />
          </div>
        </div>
      </div>
        <div className="flex flex-col sm:flex-row relative text-center items-center border-b-2">
        <div className="sm:w-1/2 xl:w-1/3 flex items-center justify-center text-5xl sm:text-4xl lg:text-5xl">
          <h1 className="absolute text-white z-10 px-4">FACT 2025</h1>

          <div className="flex relative">
            <div className="grow absolute inset-0 bg-gray-600 opacity-30"></div>
            <Image
              src={IMG3_URL}
              width={IMG_WIDTH}
              height={IMG_HEIGHT}
              alt=""
              placeholder={PLACEHOLDER_URL}
              className="-z-10 aspect-3/2"
            />
          </div>
        </div>
        <div className="flex items-center justify-center sm:ml-6 sm:-mr-6 sm:w-1/2 xl:w-2/3 sm:text-xs xl:text-sm my-6">
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
      </div>
      <div className="mt-6 lg:mt-10 bg-highlight-primary p-4 sm:p-6 flex flex-col justify-around rounded-4xl text-center gap-4 sm:gap-6">
        <div className="font-semibold text-4xl justify-around hidden sm:flex">
            {nums.map((num, index)=>(
                <div key={index} className="flex-1">{num}</div>
            ))}
        </div>
        <div className="text-xs/3 md:text-sm/5 xl:text-lg/5 justify-around items-center hidden sm:flex">
            {caps.map((cap, index)=>(
                <div key={index} className="flex-1">{cap}</div>
            ))}
        </div>
        <div className="flex font-semibold text-4xl justify-around sm:hidden">
            {nums.slice(0,4).map((num, index)=>(
                <div key={index} className="flex-1">{num}</div>
            ))}
        </div>
        <div className="flex text-xs/3 md:text-sm/5 xl:text-lg/5 justify-around items-center mb-4 sm:hidden">
            {caps.slice(0,4).map((cap, index)=>(
                <div key={index} className="flex-1">{cap}</div>
            ))}
        </div>
         <div className="flex font-semibold text-4xl justify-around sm:hidden">
            {nums.slice(4).map((num, index)=>(
                <div key={index} className="flex-1">{num}</div>
            ))}
        </div>
        <div className="flex text-xs/3 md:text-sm/5 xl:text-lg/5 justify-around items-center sm:hidden">
            {caps.slice(4).map((cap, index)=>(
                <div key={index} className="flex-1">{cap}</div>
            ))}
        </div>
      </div>
    </PageContainer>
  );
}
