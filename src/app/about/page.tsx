import PageContainer from "@/components/formatting/PageContainer";
import Image from 'next/image';

const IMG1_URL = "/variety-show.JPG";
const IMG2_URL = "/workshop.JPG";

export default function About() {
    return (
        <PageContainer title="About">
            <div className="flex flex-col lg:flex-row justify-center lg:justify-evenly">
                <div className="flex flex-col lg:w-2/6 items-center justify-between">
                    <div className="text-center lg:text-left mb-6">
                        FACT stands for Filipino Americans Coming Together and
                        is a conference hosted annually by the Philippine
                        Student Association at the University of Illinois at
                        Urbana-Champaign. It is the largest Filipino-interest
                        conference in the Midwest, bringing in over 1,000
                        delegates yearly. The conference works to empower young,
                        rising professionals while simultaneously educating the
                        delegates about Filipino culture, identity and issues.
                        Despite the conference’s title, the conference is not
                        limited to delegates of Filipino descent. The
                        facilitators and delegates come from different
                        backgrounds and ethnicities, and the workshops cover a
                        wide array of topics. FACT’s mission is to build a
                        community of leaders by uniting, enlightening and
                        empowering the Filipino/Fil-Am/Non-Filipino youth
                        nationwide. By exploring our interests, culture and
                        identity as a rising generation, we hope that our
                        delegates can take with them knowledge that they can
                        apply beyond their college career as leaders in the
                        professional world ready to give back to their
                        community.
                    </div>
                        <Image src={IMG1_URL} width={5184} height={3456} alt=""/>
                </div>
                <div className="flex flex-row lg:flex-col flex-wrap-reverse lg:w-2/6 items-center justify-evenly">
                    <Image src={IMG2_URL} width={5184} height={3456} alt=""/>
                    <div className="text-center lg:text-right my-6">
                        The theme for the 32nd annual Filipino Americans Coming
                        Together Conference is “Magbubunga: Planting
                        Prosperity”. As our organizations reconnect with their
                        cultural identities and grasp an understanding of their
                        future aspirations, we strive to help delegates set a
                        strong foundation for a lifetime of growth and fruitful
                        results. We hope to maximize connection between all
                        conference attendees and seek to enrich each delegate’s
                        personal and professional growth in order to nurture a
                        culture of productivity within our community.
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}
