import { notFound } from "next/navigation";
import guests from "../../../data/guests.json";
import NewInvitationLayout from "@/components/NewInvitationLayout";

interface PageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function InvitationPage({
    params,
}: PageProps) {

    const { id } = await params;

    const guest = guests.find(
        (g) => g.id === id
    );

    if (!guest) {
        notFound();
    }

    return (
        <NewInvitationLayout
            dearName={guest.name}
        />
    );
}