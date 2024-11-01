import FAQSection from "@/components/formatting/FAQSection";
import PageContainer from "@/components/formatting/PageContainer";

import LinkButton from "@/components/ui/LinkButton";
import Link from "next/link";

const FAQ_DOC_URL =
    "https://docs.google.com/document/d/1uCf3ccNpHQaDivkNXzSFPhFeI_9A8emW0L8SgSsS0II/edit?usp=sharing";

function FAQLink({href, text, newTab = false}: {href: string, text: string, newTab?: boolean}) {
	return(<Link href={href} target={newTab ? "_blank" : "_self"} className="underline font-semibold">{text}</Link>)
}

export default function FAQ() {
    return (
        <PageContainer title="FAQ">
            <div className="w-fit mx-auto">
                <LinkButton
                    text="View this page as a Google Doc"
                    url={FAQ_DOC_URL}
                    newTab={true}
                />
            </div>

            <div className="flex flex-row justify-evenly flex-wrap items-start">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold w-full text-center my-8">General</div>
					<div className="flex flex-col w-11/12 lg:w-2/5">
					<FAQSection question="What is FACT?">
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
                    </FAQSection>
                    <FAQSection question="I am a minor, can I go to FACT?">
                        Due to university policies and safety reasons, minors
                        who are unattended by their guardians are not permitted
                        to attend FACT affiliated events.
                    </FAQSection>
					
                    <FAQSection question="What are COVID/illness restrictions?">
                        PSA is currently not requiring any masking or
                        vaccination for this year’s FACT. If you are feeling
                        sick or unwell, please refrain from attending or use a
                        mask to protect the health and safety of others who may
                        be prone or sensitive to sickness.
                    </FAQSection>
					</div>
                    <div className="flex flex-col w-11/12 lg:w-2/5">
                    <FAQSection question="Is there accessibility for workshops or variety shows?">
                        All FACT venue entrances are accessible via ramps on
                        either the front or sides of buildings.
                    </FAQSection>
					
                    <FAQSection question="Is there a dress code?">
                        As long as apparel is not offensive, there is no
                        specific dress code for FACT. Since this is a winter
                        event, please dress for the weather. Most delegates wear
                        their organization’s merchandise to conference.
                    </FAQSection>
                    <FAQSection question="Will any part of the conference be on Zoom/virtual?">
                        This year, FACT will be a purely in-person conference.
                        However, we will be providing informational materials on
                        our Instagram, newsletter, and website after the
                        conference for anyone hoping to stay connected to the
                        speakers, guests, and performers post-FACT.
                    </FAQSection>
                    <FAQSection question="Will the conference be live streamed?">
                        Yes the conference will be livestreamed and so will the
                        variety show! Please check out our{" "}
                        <FAQLink
                            href="https://www.youtube.com/@factmedia92"
                            newTab={true}
							text="YouTube"
                        />
                        : Subscribe, Like, and Comment!
                    </FAQSection>
                    <FAQSection question="What can I bring into Variety Show?">
                        Food and drinks are NOT allowed into Foellinger
                        Auditorium. Backpacks and large bags are subject for
                        search by Facilities Staff.
                    </FAQSection>
					</div>
					<div className="flex flex-row justify-evenly gap-x-20 flex-wrap bg-highlight-secondary lg:w-11/12 rounded-3xl px-8 lg:px-4">
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center my-8 w-full">At UIUC</div>
					<div className="flex flex-col lg:w-2/5">
                    <FAQSection question="How do I book a hotel using the hotel block booking system?">
                        FACT has coordinated a selection of hotel blocks
                        specifically for conference guests. Details and
                        instructions are outlined on our Instagram (
                        <FAQLink href="http://instagram.com/psa_fact" text="@psa_fact" newTab={true}/>
                            
                        ) and our newsletter, but rooms are only available for
                        booking for a limited time.
                    </FAQSection>
                    <FAQSection question="Where can I eat?">
                        During your free time during the FACT Conference, you
                        have the freedom to choose between the variety of food
                        options available on and near the UIUC campus. We
                        encourage you to support our day-of food and drink
                        fundraisers, which will be announced via our Instagram (
							<FAQLink href="http://instagram.com/psa_fact" text="@psa_fact" newTab={true}/>
                        ) and our newsletter at a later date.
                    </FAQSection>
                    <FAQSection question="How can I get around campus?">
                        All MTD bus stops within campus borders will be marked
                        by an orange bus stop sign and are free of charge.
                        Arrival and departure times are most accurate via the
                        Illini Bus app and Google Maps. You may also use other
                        transportation or rideshares at your own expense.
                    </FAQSection>
					</div>
					<div className="flex flex-col lg:w-2/5">
                    <FAQSection question="What wifi services are available?">
                        Campus Wi-Fi is free for guests by connecting to
                        “IllinoisNet_Guest.” See instructions for connecting on{" "}
                        <FAQLink
                            href="https://answers.uillinois.edu/illinois/page.php?id=90280"
							text="this page here"
                            newTab={true}
                        />
                        .
                    </FAQSection>
                    <FAQSection question="What do I do if I lose anything during the conference?">
                        As outlined in the Terms and Conditions that all
                        registered participants have affirmed to, all FACT
                        attendees are responsible for “loss of items or damage
                        to FACT Conference facilities” and are “liable for any
                        costs incurred to repair any inflicted damage.”
                    </FAQSection>
                    <FAQSection question="Parking Policies">
                        Parking for non-UIUC faculty and staff is metered and/or
                        limited to the spaces outlined{" "}
                        <FAQLink
                            href="https://parking.web.illinois.edu/maps/campus-parking-map"
							text="on this website"
                            newTab={true}
                        />
                        . Meter payments may be processed by coin, Pay by Phone,
                        or CashKey depending on the outlined instructions. Free
                        weekend and overnight parking lots are listed{" "}
                        <FAQLink
                            href="https://parking.web.illinois.edu/campus-parking/weekday-and-overnight"
							text="on this website"
                            newTab={true}
                        />
                        . Parking is strictly monitored by campus officials and
                        those not adhering to the policies may be subject to
                        ticketing or towing. FACT is not responsible for any
                        parking charges made towards all attendees.
                    </FAQSection>
					</div>
					</div>
                    <div className="text-3xl sm:text-4xl lg:text-5xl font-bold w-full text-center my-8">Registration</div>
					<div className="flex flex-col w-11/12 lg:w-2/5">
                    <FAQSection question="How do I register?">
                        Use the “<FAQLink href="/my-fact/register" text="Register"/>”
                        tab on our website and fill out your information in the
                        boxes Continue to the next page and you can view the
                        sessions you signed up for and the details for those
                        workshops!
                    </FAQSection>
                    <FAQSection question="Where can we find information regarding workshop information?">
                        Workshop and facilitator biographies are available via
                        our Instagram (
                        <FAQLink href="http://instagram.com/psa_fact" text="@psa_fact" newTab={true}/>
                        ) or via the “<FAQLink href="/workshops" text="Workshops"/>”
                        tab on our website. After registering, you can find
                        information about those specific workshops via your
                        Dashboard.
                    </FAQSection>
					
                    <FAQSection question="How can I change my workshop choice that I have made?">
                        If other workshops have not reached capacity, you may
                        log into your dashboard, click on “Update Workshops,”
                        then click on confirm and you will see that your choice
                        has changed.
                    </FAQSection>
					</div>
					<div className="flex flex-col w-11/12 lg:w-2/5">
                    <FAQSection question="Are there refunds?">
                        Refunds can be requested via{" "}
                        <FAQLink href="/refund" text="this form"/> up until the end
                        of the Early Registration dates. Please secure your
                        availability and ensure that you will attend the events
                        paid for prior to providing payment during registration.
                    </FAQSection>
                    <FAQSection question="I wasn’t able to register early, can I still attend the conference?">
                        Yes! If you were unable to register early, you can still
                        register for FACT online with the Late Registration
                        price until the week prior to the conference. You may
                        additionally register in-person at the conference with
                        the Late Registration price at the Asian American
                        Cultural Center (
                        <FAQLink
                            href="https://maps.app.goo.gl/7A1cjxTF4R3pBPHr5"
							text="1210 W Nevada St, Urbana, IL 61801"
                            newTab={true}
                        />
                        ) from 4:00-10:00 PM on Friday, December 6th, or from
                        8:30-9:30 AM on Saturday, December 7th.
                    </FAQSection>
                    <FAQSection question="Can I upgrade to the bundle?">
                        After completing your purchases, upgrading to the bundle
                        is not allowed. You may purchase an additional session
                        or Variety Show ticket separately.
                    </FAQSection>
					</div>
                </div>
        </PageContainer>
    );
}
