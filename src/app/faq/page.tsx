import FAQSection from "@/components/formatting/FAQSection";
import PageContainer from "@/components/formatting/PageContainer";
import LinkButton from "@/components/ui/LinkButton";

const FAQ_DOC_URL = "https://docs.google.com/document/d/1uCf3ccNpHQaDivkNXzSFPhFeI_9A8emW0L8SgSsS0II/edit?usp=sharing"

export default function FAQ() {
    return(
        <PageContainer title="FAQ">
            <div>
                <div className="w-fit mx-auto">
                    <LinkButton text="View this page as a Google Doc" url={FAQ_DOC_URL} newTab={true}/>
                </div>  
                <div className="text-5xl font-bold">General</div>
                <FAQSection question="What is FACT?">
                    <div>
                        FACT stands for Filipinx Americans Coming Together and is a conference hosted annually by the Philippine Student Association at the University of Illinois at Urbana-Champaign. It is the largest Filipinx-interest conference in the Midwest, bringing in over 1,000 delegates yearly. The conference works to empower young, rising professionals while simultaneously educating the delegates about Filipinx culture, identity and issues. Despite the conference’s title, the conference is not limited to delegates of Filipinx descent. The facilitators and delegates come from different backgrounds and ethnicities, and the workshops cover a wide array of topics. FACT’s mission is to build a community of leaders by uniting, enlightening and empowering the Filipinx/Fil-Am/Non-Filipinx youth nationwide. By exploring our interests, culture and identity as a rising generation, we hope that our delegates can take with them knowledge that they can apply beyond their college career as leaders in the professional world ready to give back to their community.
                    </div>
                </FAQSection>
                <FAQSection question="I am a minor, can I go to FACT?">Due to university policies and safety reasons, minors who are unattended by their guardians are not permitted to attend FACT affiliated events</FAQSection>
                <FAQSection question="What are COVID/illness restrictions?">PSA is currently not requiring any masking or vaccination for this year’s FACT. If you are feeling sick or unwell, please refrain from attending or use a mask to protect the health and safety of others who may be prone or sensitive to sickness.</FAQSection>
                <FAQSection question="Is there accessibility for workshops or variety shows?">All FACT venue entrances are accessible via ramps on either the front or sides of buildings.</FAQSection>
                <FAQSection question="Is there a dress code?">As long as apparel is not offensive, there is no specific dress code for FACT. Since this is a winter event, please dress for the weather. Most delegates wear their organization’s merchandise to conference.</FAQSection>
                <FAQSection question="Will any part of the conference be on Zoom/virtual?">This year, FACT will be a purely in-person conference. However, we will be providing informational materials on our Instagram, newsletter, and website after the conference for anyone hoping to stay connected to the speakers, guests, and performers post-FACT.</FAQSection>
            </div>
        </PageContainer>
    );
}