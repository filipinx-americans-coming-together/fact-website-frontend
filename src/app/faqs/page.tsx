import FAQSection from "@/components/formatting/FAQSection";
import PageContainer from "@/components/formatting/PageContainer";

const FAQs_data = [
    {
        question: "What is FACT?",
        answer: "FACT stands for Filipinx Americans Coming Together and is a conference hosted annually by the Philippine Student Association at the University of Illinois at Urbana-Champaign. It is the largest Filipinx-interest conference in the Midwest, bringing in over 1,000 delegates yearly. The conference works to empower young, rising professionals while simultaneously educating the delegates about Filipinx culture, identity and issues. Despite the conference’s title, the conference is not limited to delegates of Filipinx descent. The facilitators and delegates come from different backgrounds and ethnicities, and the workshops cover a wide array of topics. FACT’s mission is to build a community of leaders by uniting, enlightening and empowering the Filipinx/Fil-Am/Non-Filipinx youth nationwide. By exploring our interests, culture and identity as a rising generation, we hope that our delegates can take with them knowledge that they can apply beyond their college career as leaders in the professional world ready to give back to their community.",
    },
    {
        question: "How do I register?",
        answer: "",
    },
    {
        question: "Where can I eat?",
        answer: "During your free time during the FACT Conference, you have the freedom to choose between the variety of food options available on and near the UIUC campus. We encourage you to support our day-of food and drink fundraisers, which will be announced via our Instagram (@psa_fact) and our newsletter at a later date.",
    },
    {
        question: "How do I book a hotel using the hotel block booking system?",
        answer: "FACT has coordinated a selection of hotel blocks specifically for conference guests. Details and instructions are outlined on our Instagram (@psa_fact) and our newsletter, but rooms are only available for booking for a limited time.",
    },
    {
        question: "I am a minor, can I go to FACT?",
        answer: "Due to university policies and safety reasons, minors who are unattended by their guardians are not permitted to attend FACT affiliated events.",
    },
    {
        question: "How can I get around campus?",
        answer: "All MTD bus stops within campus borders will be marked by an orange bus stop sign and are free of charge. Arrival and departure times are most accurate via the Illini Bus app and Google Maps. You may also use other transportation or rideshares at your own expense.",
    },
    {
        question:
            "Do you guys have ways for accessibility for workshops or variety shows?",
        answer: "All FACT venue entrances are accessible via ramps on either the front or sides of buildings.",
    },
    {
        question: "What wifi services are available?",
        answer: "Campus Wi-Fi is free for guests by connecting to “IllinoisNet_Guest.” See instructions for connecting on this page here.",
    },
    {
        question: "What can I bring into Variety Show?",
        answer: "Food and drinks are NOT allowed into Foellinger Auditorium. Backpacks and large bags are subject for search by Facilities Staff.",
    },
    {
        question: "Will the conference be live streamed?",
        answer: "Yes the conference will be livestreamed and so will the variety show! Please check out our YouTube: https://www.youtube.com/@factmedia92 Subscribe, Like, and Comment!",
    },
    {
        question: "What do I do if I lose anything during the conference?",
        answer: "As outlined in the Terms and Conditions that all registered participants have affirmed to, all FACT attendees are responsible for “loss of items or damage to FACT Conference facilities” and are “liable for any costs incurred to repair any inflicted damage.”",
    },
    {
        question: "Is there a dress code?",
        answer: "As long as apparel is not offensive, there is no specific dress code for FACT. Since this is a winter event, please dress for the weather. Most delegates wear their organization’s merchandise to conference.",
    },
    {
        question: "Will any part of the conference be on Zoom/virtual?",
        answer: "This year, FACT will be a purely in-person conference. However, we will be providing informational materials on our Instagram, newsletter, and website after the conference for anyone hoping to stay connected to the speakers, guests, and performers post-FACT.",
    },
    {
        question: "What are COVID/illness restrictions?",
        answer: "PSA is currently not requiring any masking or vaccination for this year’s FACT. If you are feeling sick or unwell, please refrain from attending or use a mask to protect the health and safety of others who may be prone or sensitive to sickness.",
    },
    {
        question: "Parking Policies",
        answer: "Parking for non-UIUC faculty and staff is metered and/or limited to the spaces outlined on this website. Meter payments may be processed by coin, Pay by Phone, or CashKey depending on the outlined instructions. Free weekend and overnight parking lots are listed on this website. Parking is strictly monitored by campus officials and those not adhering to the policies may be subject to ticketing or towing. FACT is not responsible for any parking charges made towards all attendees.",
    },
];

export default function Faqs() {
    return (
        <PageContainer title="Faqs">
            <div>
                {FAQs_data.map((qna, index) => (
                    <div key={index} className="mb-10">
                        <FAQSection question={qna.question} answer={qna.answer} />
                    </div>
                ))}
            </div>
        </PageContainer>
    );
}
