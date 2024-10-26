"use client";

import PageContainer from "@/components/formatting/PageContainer";
import Footer from "@/components/formatting/PageFooter";
import LoadingCircle from "@/components/icons/LoadingCircle";

export default function Workshops() {
    const { workshops, isLoading, error } = useWorkshops();

    console.log(workshops);

    if (!workshops) {
        return <LoadingCircle />
    }

    return (
        <PageContainer title="workshop">
            <Footer />
        </PageContainer>
    );
}