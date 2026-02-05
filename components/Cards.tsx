"use client";
import Image from "next/image";
import { ImageTemplates } from "@/public/js/ImageTemplates";
interface ImageProps { image: string; name: string; href: string; }

function Images({image, name, href}: ImageProps) {
    const handleClick = (type: "preview"| "pesan") => {
        if(type === "preview") {
            window.open(`/${href}`, '_blank');
        } else if(type === "pesan") {
            const phoneNumber = "6285156246765";
            const text = encodeURIComponent(`Halo, saya ingin pesan ${name}`);
            window.open(`https://wa.me/${phoneNumber}?text=${text}`, "_blank");
        }
    };
    return (
        <figure className="flex-1 text-center bg-foreground p-5 rounded-2xl shadow-md flex flex-col justify-between gap-5">
            <Image src={image} alt={name} width={949} height={949} priority className="rounded-2xl shadow w-full h-auto"/>
            <figcaption className="text-base font-semibold italic"> {name} </figcaption>
            <div className="flex gap-2 items-center justify-center">
                <button type="button" className="bg-accent p-2 font-semibold text-base rounded-2xl shadow cursor-pointer flex-1" onClick={() => handleClick('preview')}> Preview </button>
                <button type="button" className="bg-accent p-2 font-semibold text-base rounded-2xl shadow cursor-pointer flex-1" onClick={() => handleClick('pesan')}> Pesan </button>
            </div>
        </figure>
    )
}

export default function Cards() {
    return (
        <section className="p-5">
            <h2 className="font-heading mb-2 font-semibold text-lg"> Pilih Template yang Anda mau. </h2>
            <div className="flex flex-wrap items-center justify-center gap-5">
                {ImageTemplates.map((ImageTemplate, index) => (
                    <Images key={index} {...ImageTemplate} />
                ))}
            </div>
        </section>
    )
}