import React from "react";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const BlogCard = ({ blog }: any) => {
    const { title, coverImage, excerpt, date, slug } = blog;

    return (
        <div className="group relative">
            {/* Blog Image */}
            <div className="mb-8 overflow-hidden rounded">
                <Link href={`/blog/${slug}`} aria-label="blog cover" className="block">
                    <Image
                        src={coverImage}
                        alt={title}
                        className="w-full transition group-hover:scale-125"
                        width={408}
                        height={272}
                        style={{ width: "100%", height: "auto" }}
                        quality={100}
                    />
                </Link>
            </div>

            {/* Tag */}
            <div className="absolute top-0 bg-primary py-2 ml-4 mt-4 px-5 rounded">
                <span className="text-white font-medium text-sm">Blog</span>
            </div>

            {/* Title & Date */}
            <div>
                <h3>
                    <Link
                        href={`/blog/${slug}`}
                        className="mb-4 inline-block font-semibold text-black dark:text-white hover:text-primary text-[22px] leading-[2rem]"
                    >
                        {title}
                    </Link>
                </h3>

                <span className="text-sm font-semibold leading-loose text-gray-500">
                    {format(new Date(date), "dd MMM yyyy")}
                </span>

                <p className="text-gray-700 dark:text-gray-400 mt-3 text-sm leading-relaxed">
                    {excerpt}
                </p>
            </div>
        </div>
    );
};

export default BlogCard;
