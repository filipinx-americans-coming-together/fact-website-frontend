import PageContainer from "@/components/formatting/PageContainer";
import LinkButton from "@/components/ui/LinkButton";
import Image from "next/image";

const IMG1_URL = "/variety-show.JPG";
const IMG2_URL = "/workshop.JPG";

const IMG_HEIGHT = 5184;
const IMG_WIDTH = 3456;

const PLACEHOLDER_URL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPU9vG2BwACbwEDalojHwAAAABJRU5ErkJggg==";
const PDF_URL =
    "https://drive.google.com/file/d/1DYkEqr0mfdsLnzYbCdy_xSr2JNiPvgcZ/view";

export default function About() {
    return (
        <PageContainer title="About">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly">
                <div className="flex flex-col lg:w-2/5 xl:w-2/6 items-center justify-between">
                    <div className="text-center lg:text-left">
                        FACT stands for Filipinx Americans Coming Together and
                        is a conference hosted annually by the Philippine
                        Student Association at the University of Illinois at
                        Urbana-Champaign. It is the largest Filipinx-interest
                        conference in the Midwest, bringing in over 1,000
                        delegates yearly. The conference works to empower young,
                        rising professionals while simultaneously educating the
                        delegates about Filipinx culture, identity and issues.
                        Despite the conference’s title, the conference is not
                        limited to delegates of Filipinx descent. The
                        facilitators and delegates come from different
                        backgrounds and ethnicities, and the workshops cover a
                        wide array of topics. FACT’s mission is to build a
                        community of leaders by uniting, enlightening and
                        empowering the Filipinx/Fil-Am/Non-Filipinx youth
                        nationwide. By exploring our interests, culture and
                        identity as a rising generation, we hope that our
                        delegates can take with them knowledge that they can
                        apply beyond their college career as leaders in the
                        professional world ready to give back to their
                        community.
                    </div>
                    <div className="h-6"></div>
                    <Image
                        src={IMG1_URL}
                        width={IMG_WIDTH}
                        height={IMG_HEIGHT}
                        alt=""
                        placeholder={PLACEHOLDER_URL}
                    />
                </div>
                <div className="flex flex-row lg:flex-col flex-wrap-reverse lg:w-2/5 xl:w-2/6 items-center justify-center lg:justify-between">
                    <div className="justify-self-center">
                        <Image
                            src={IMG2_URL}
                            width={IMG_WIDTH}
                            height={IMG_HEIGHT}
                            alt=""
                            placeholder={PLACEHOLDER_URL}
                        />
                    </div>
                    <div className="my-6">
                        <LinkButton text="Official Statement Regarding FACT’s Name Change" url={PDF_URL} new_tab={true} />
                    </div>
                    <div className="text-center lg:text-right mt-6 lg:mt-0">
                        This year’s Filipinx Americans Coming Together (FACT)
                        Conference proudly presents the theme for its 32nd year:
                        “Magbubunga: Planting Prosperity”! FACT strives to
                        encourage conference attendees to leverage their
                        strengths to achieve fruitful outcomes and nurture a
                        culture of productivity within our community. We hope to
                        maximize connections between all conference attendees
                        and enrich each delegate’s personal and professional
                        growth.
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}
