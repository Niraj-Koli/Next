import { notFound } from "next/navigation";

import { getNewsItem } from "@/lib/news";

import Modal from "@/components/Modal";

export default async function InterceptedImagePage({ params }) {
    const newsItemSlug = params.slug;
    const newsItem = await getNewsItem(newsItemSlug);

    if (!newsItem) {
        return notFound();
    }

    return (
        <>
            <Modal />
            <dialog className="modal" open>
                <div className="fullscreen-image">
                    <img
                        src={`/images/news/${newsItem.image}`}
                        alt={newsItem.title}
                    />
                </div>
            </dialog>
        </>
    );
}
