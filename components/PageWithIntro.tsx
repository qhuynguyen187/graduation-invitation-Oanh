"use client";

import { useEffect, useState } from "react";
import NewInvitationLayout from "./NewInvitationLayout";

interface Guest {
    id: string;
    name: string;
}

export default function PageWithIntro() {
    const [guestName, setGuestName] = useState<string | undefined>(
        undefined
    );

    useEffect(() => {
        const loadGuest = async () => {
            try {
                // Lấy ID người được mời từ URL
                const params = new URLSearchParams(
                    window.location.search
                );

                const guestId = params.get("guest");

                // Không có ?guest=...
                if (!guestId) {
                    return;
                }

                // Đọc danh sách khách
                const response = await fetch("/guests.json");

                if (!response.ok) {
                    throw new Error(
                        "Không thể tải guests.json"
                    );
                }

                const guests: Guest[] =
                    await response.json();

                // Tìm người có ID tương ứng
                const guest = guests.find(
                    (item) => item.id === guestId
                );

                if (guest) {
                    setGuestName(guest.name);
                }
            } catch (error) {
                console.error(
                    "Lỗi khi lấy tên khách:",
                    error
                );
            }
        };

        loadGuest();
    }, []);

    return (
        <div className="relative min-h-[100dvh] overflow-hidden w-full">
            <NewInvitationLayout
                dearName={guestName}
            />
        </div>
    );
}