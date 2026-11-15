
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

interface NewInvitationLayoutProps {
    dearName?: string;
}

function CalendarIcon() {
    return (
        <svg viewBox="0 0 24 24" className="event-svg">
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M7 2v4M17 2v4M3 9h18" />
            <path d="M7 13h3M14 13h3M7 17h3M14 17h3" />
        </svg>
    );
}

function ClockIcon() {
    return (
        <svg viewBox="0 0 24 24" className="event-svg">
            <circle cx="12" cy="12" r="9" />
            <path d="M12 7v5l3 2" />
        </svg>
    );
}

function LocationIcon() {
    return (
        <svg viewBox="0 0 24 24" className="event-svg">
            <path d="M19 10c0 5.5-7 11-7 11S5 15.5 5 10a7 7 0 1 1 14 0Z" />
            <circle cx="12" cy="10" r="2.2" />
        </svg>
    );
}

function PhoneIcon() {
    return (
        <svg viewBox="0 0 24 24" className="event-svg">
            <path d="M6.6 3.8 9 3.2c.6-.2 1.2.1 1.5.7l1.1 2.7c.2.5.1 1-.3 1.4L9.8 9.5c1 2 2.7 3.7 4.7 4.7l1.5-1.5c.4-.4.9-.5 1.4-.3l2.7 1.1c.6.3.9.9.7 1.5l-.6 2.4c-.2.7-.8 1.2-1.5 1.2C10.6 18.6 5.4 13.4 5.4 6.6c0-.7.5-1.3 1.2-1.5Z" />
        </svg>
    );
}

/* HEART INTRO */

function HeartIntro() {
    return (
        <motion.div
            className="smoke-intro"
            aria-hidden="true"
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{
                delay: 1.8,
                duration: 0.8,
                ease: "easeInOut",
            }}
        >
            <motion.div
                className="smoke-welcome"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                <span>CHÀO MỪNG ĐẾN</span>
                <strong>LỄ TỐT NGHIỆP</strong>
                <strong>KIỀU OANH</strong>
            </motion.div>

            <div className="smoke-cloud smoke-left" />
            <div className="smoke-cloud smoke-right" />
            <div className="smoke-cloud smoke-bottom" />
            <div className="smoke-cloud smoke-top" />
            <div className="smoke-center" />
        </motion.div>
    );
}


/* FIREWORKS */
function Fireworks() {
    return (
        <div className="fireworks-container" aria-hidden="true">
            {Array.from({ length: 4 }).map((_, index) => (
                <div
                    key={index}
                    className={`firework firework-${index + 1}`}
                >
                    {Array.from({ length: 12 }).map((_, particle) => (
                        <span key={particle} />
                    ))}
                </div>
            ))}
        </div>
    );
}

/* FLOATING TEXT */
function QHyFloating() {
    return (
        <div className="qhy-floating-container" aria-hidden="true">
            {Array.from({ length: 8 }).map((_, index) => (
                <span className={`qhy qhy-${index + 1}`} key={index}>
                    Oanh
                </span>
            ))}
        </div>
    );
}

/* MAIN COMPONENT */
export default function NewInvitationLayout({
    dearName,
}: NewInvitationLayoutProps) {
    const [guestName, setGuestName] = useState(
        dearName || "NGƯỜI THƯƠNG"
    );

    useEffect(() => {
        const guests: Record<string, string> = {
            "anh-iu-hoang-khanh": "Anh iu Hoàng Khanh",
            "hoan-vu": "Hoàn Vũ",
            "quang-huy": "Quang Huy",
            "ngoc-uyen": "Ngọc Uyên",
            "anh-thu": "Anh Thư",
            "gia-han": "Gia Hân",
            "hoang-hoa": "Hoàng Hoa",
            "phan-phan": "Phấn Phấn",
            "nguyen-thuy": "Nguyễn Thùy",
            "chi-my": "Chị My",
            "anh-cuong": "Anh Cường",
            "chi-thanh-nga": "Chị Thanh Nga",
        };

        const params = new URLSearchParams(window.location.search);
        const guestId = params.get("guest");

        if (guestId && guests[guestId]) {
            setGuestName(guests[guestId]);
        }
    }, [dearName]);

    /* BACKGROUND MUSIC */
    useEffect(() => {
        const music = document.getElementById(
            "bgMusic"
        ) as HTMLAudioElement | null;

        if (!music) return;

        music.volume = 0.6;
        music.loop = true;

        const playMusic = async () => {
            try {
                if (music.paused) await music.play();
            } catch {
                console.log("Trình duyệt đang chặn tự động phát nhạc.");
            }
        };

        playMusic();

        const handleInteraction = () => {
            playMusic();
        };

        document.addEventListener("click", handleInteraction);
        document.addEventListener("touchstart", handleInteraction);

        return () => {
            document.removeEventListener("click", handleInteraction);
            document.removeEventListener("touchstart", handleInteraction);
        };
    }, []);

    const mapUrl =
        "https://www.google.com/maps/search/?api=1&query=Truong+Dai+hoc+Cong+nghiep+TPHCM,+12+Nguyen+Van+Bao,+Phuong+Hanh+Thong,+TP+Ho+Chi+Minh";

    return (
        <main className="premium-invitation-page">
            <HeartIntro />
            <Fireworks />
            <QHyFloating />

            <audio
                id="bgMusic"
                src="/music.mp4"
                autoPlay
                loop
                preload="auto"
                playsInline
            />

            <div className="premium-bg">
                <div className="premium-bg-photo" />
                <div className="premium-bg-light" />
            </div>

            <motion.section
                className="premium-card"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0,
                    duration: 1.2,
                    ease: [0.16, 1, 0.3, 1],
                }}
            >
                {/* MAIN PHOTO */}
                <img
                    src="/Oanh.jpg"
                    alt="Kiều Oanh"
                    className="premium-main-photo"
                />

                <div className="premium-photo-tone" />
                <div className="premium-top-shade" />
                <div className="premium-bottom-fade" />
                <div className="premium-border" />

                {/* HEADER */}
                <motion.div
                    className="premium-header"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    <span>INVITATION</span>
                    <span className="header-year">2026</span>
                </motion.div>

                {/* TITLE */}
                <motion.div
                    className="premium-title"
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.65, duration: 1 }}
                >
                    <div className="title-overline">
                        YOU ARE CORDIALLY INVITED
                    </div>

                    <div className="title-line">
                        <span />
                        <b>✦</b>
                        <span />
                    </div>

                    <div className="graduation-heading">
                        <img
                            src="/graduation-cap.png"
                            alt=""
                            className="cap-decoration"
                        />
                        <h1>Graduation</h1>
                    </div>

                    <div className="ceremony-heading">CEREMONY</div>
                </motion.div>

                {/* GHOST PHOTO */}
                <div className="ghost-photo">
                    <img src="/Oanh.jpg" alt="Oanh" />
                </div>

                {/* CONTENT */}
                <section className="premium-content premium-content-scroll">
                    <div className="content-glass" />

                    <div className="premium-content-inner">
                        {/* GUEST */}
                        <motion.div
                            className="guest-section"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                        >
                            <div className="dear-script">Dear</div>

                            <div className="guest-name-premium">
                                <Typewriter
                                    text={guestName}
                                    delay={1200}
                                    speed={65}
                                    deleteSpeed={40}
                                    pauseDelay={2800}
                                    deleteDelay={700}
                                    loop={true}
                                    showCursor={false}
                                />
                            </div>

                            <div className="guest-separator">
                                <span />
                                <b>✦</b>
                                <span />
                            </div>
                        </motion.div>

                        {/* INTRODUCTION */}
                        <motion.p
                            className="premium-message"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                        >
                            Oanh trân trọng kính mời "Người thương" đến chung vui trong ngày tốt nghiệp và cùng Oanh lưu giữ một khoảnh khắc thật đẹp, thật đáng nhớ.
                        </motion.p>

                        {/* EVENT INFORMATION */}
                        <div className="event-grid">
                            {/* DATE */}
                            <motion.div
                                className="event-card-premium"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.35 }}
                            >
                                <div className="event-circle">
                                    <CalendarIcon />
                                </div>

                                <div className="event-copy">
                                    <span className="event-title">NGÀY</span>
                                    <strong>21 THÁNG 11</strong>
                                    <small>THỨ BẢY · 2026</small>
                                </div>
                            </motion.div>

                            {/* TIME */}
                            <motion.div
                                className="event-card-premium"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 1.45 }}
                            >
                                <div className="event-circle">
                                    <ClockIcon />
                                </div>

                                <div className="event-copy">
                                    <span className="event-title">
                                        THỜI GIAN
                                    </span>
                                    <strong>10:30 – 12:00</strong>
                                    <small>BUỔI LỄ TỐT NGHIỆP</small>
                                </div>
                            </motion.div>

                            {/* LOCATION */}
                            <motion.div
                                className="event-card-premium event-location"
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.55 }}
                            >
                                <div className="event-circle">
                                    <LocationIcon />
                                </div>

                                <div className="event-copy">
                                    <span className="event-title">
                                        ĐỊA ĐIỂM
                                    </span>
                                    <strong>IUH</strong>
                                    <small>
                                        ĐẠI HỌC CÔNG NGHIỆP TP. HCM
                                    </small>
                                </div>
                            </motion.div>
                        </div>

                        {/* ADDRESS */}
                        <div className="iuh-address">
                            Số 12 Nguyễn Văn Bảo, Phường Hạnh Thông,
                            TP. Hồ Chí Minh
                        </div>

                        {/* PARKING INFORMATION */}
                        <motion.section
                            className="parking-section"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.7 }}
                        >
                            <div className="parking-heading">
                                ✧ PARKING INFORMATION ✧
                            </div>

                            <div className="parking-subtitle">
                                THÔNG TIN GỬI XE
                            </div>

                            <div className="parking-item">
                                <span>01</span>
                                <p>
                                    Bãi giữ xe trung tâm tại{" "}
                                    <strong>Cổng 1 hoặc Cổng 2</strong>
                                    <small>12 Nguyễn Văn Bảo</small>
                                </p>
                            </div>

                            <div className="parking-item">
                                <span>02</span>
                                <p>
                                    Bãi giữ xe <strong>Cổng 4</strong>
                                    <small>Mặt tiền Nguyễn Văn Nghi</small>
                                </p>
                            </div>

                            <div className="parking-item">
                                <span>03</span>
                                <p>
                                    Một số điểm giữ xe tại các khu vực gần IUH
                                </p>
                            </div>
                        </motion.section>

                        {/* THANK YOU MESSAGE */}
                        <motion.div
                            className="thank-you-section"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.85 }}
                        >
                            <div className="thank-you-flower">❀</div>

                            <p>
                                Cảm ơn “Người thương” đã dành thời gian đến
                                chung vui, chia sẻ niềm hạnh phúc và lưu lại
                                cùng Oanh khoảnh khắc đáng nhớ này. Sự hiện
                                diện, sự quan tâm và từng lời chúc tốt đẹp
                                của “Người thương” khiến ngày tốt nghiệp của
                                Oanh trở nên trọn vẹn và ý nghĩa hơn rất nhiều.
                                Cảm ơn “Người thương” đã góp mặt trong một
                                dấu mốc mà Oanh sẽ luôn trân quý!
                            </p>

                            <div className="thank-you-signature">
                                With love, Kiều Oanh
                            </div>
                        </motion.div>

                        {/* PHONE */}
                        <motion.a
                            href="tel:0565931540"
                            className="bottom-phone"
                            initial={{ opacity: 0, x: 15 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 2.1, duration: 0.8 }}
                        >

                            <PhoneIcon />
                            <span>0565 931 540</span>
                        </motion.a>

                        {/* MAP BUTTON */}
                        <motion.a
                            href={mapUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="premium-map-button"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.9 }}
                            whileHover={{ scale: 1.04 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            <span>XEM VỊ TRÍ</span>
                            <b>↗</b>
                        </motion.a>

                        {/* FOOTER */}
                        <motion.footer
                            className="premium-footer"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2 }}
                        >
                            <div className="footer-heart">♥</div>
                            <div className="footer-love">WITH LOVE,</div>

                            <div className="footer-signature">
                                Kiều Oanh
                            </div>

                            <div className="footer-rule">
                                <span />
                                <b>✦</b>
                                <span />
                            </div>

                            <div className="footer-caption">
                                A DAY TO REMEMBER
                            </div>

                            <div className="footer-university">
                                IUH · 2026
                            </div>
                        </motion.footer>
                    </div>
                </section>
            </motion.section>
        </main>
    );
}
