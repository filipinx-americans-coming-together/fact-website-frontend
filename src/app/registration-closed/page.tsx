import PageFooter from "@/components/formatting/PageFooter";
import LinkButton from "@/components/ui/LinkButton";


export default function RegistrationClosed() {
    return (
        <div className="h-screen flex flex-col justify-between">
        <div className="my-8 w-3/5 mx-auto text-center">
            <div className="p-8 font-bold text-3xl rounded-3xl bg-highlight-secondary"> Online registration for FACT 2024 is closed.</div>
            <div className="my-8 text-xl">You can still register in person:
                <ul className="list-disc text-left">
                    <li>Friday, December 6th from 4-7pm at the Asian American Cultural Center</li>
                    <li>Friday, December 6th from 7-9pm at the Activities and Recreation Center</li>
                    <li>Saturday, December 7th from 8:30-9:30am at the Asian American Cultural Center</li>
                </ul></div>
                <LinkButton text="BACK TO HOME" url="/"/>
        </div>
        <PageFooter/>
        </div>
    );
}