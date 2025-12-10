import BlogCard from "@/components/SharedComponent/Blog/blogCard";
import React from "react";

const BlogList: React.FC = () => {

    // ✅ MANUALLY ENTER YOUR BLOG DATA HERE
    const posts = [
        {
            title: "Best Printing Shop in Anna Nagar, Chennai – Why KP Square Publication Stands Out",
            date: "2025-01-12",
            excerpt: "Finding a reliable printing shop in Chennai can be challenging, especially when you need quick, high-quality prints without any delay. ",
            coverImage: "/blog/printer.jpg",
        },
        {
            title: "Top 7 Reasons Why Anna Nagar Residents Prefer KP Square Publication for Xerox Services",
            date: "2025-02-05",
            excerpt: "Residents of Anna Nagar and surrounding areas often need fast and clear photocopy services, whether for school, office, legal work, or bulk duplication. ",
            coverImage: "/blog/printer.jpg",
        },
        {
            title: "Why Scanning Services Are in High Demand in Chennai & How We Help Digitize Your Documents",
            date: "2025-02-15",
            excerpt: "Digital documentation has become essential for Chennai residents, especially for government submissions, job applications, and corporate record-keeping.",
            coverImage: "/blog/printer.jpg",
        },
         {
            title: "Best Binding Shop in Anna Nagar – Perfect for College Projects, Office Reports & More",
            date: "2025-01-12",
            excerpt: "Every well-prepared document needs professional binding. Students and working professionals around Chennai trust KP Square Publication for clean, durable, and premium binding services.",
            coverImage: "/blog/printer.jpg",
        },
        {
            title: "How to Choose the Best Printing & Xerox Shop in Chennai – A Local Consumer Guide",
            date: "2025-02-05",
            excerpt: "Chennai has thousands of printing shops, but not all deliver professional-grade results. Before choosing a printing or Xerox center",
            coverImage: "/blog/printer.jpg",
        },
        {
            title: "Why Chennaixerox.com Is the Most Searched Printing Website in Anna Nagar",
            date: "2025-02-15",
            excerpt: "Chennaixerox.com has become a preferred online destination for customers looking for fast, professional document services in Chennai.",
            coverImage: "/blog/printer.jpg",
        }
    ];

    return (
        <section className="flex flex-wrap justify-center pt-8 dark:bg-darkmode pb-0" id="blog">
            <div className="container mx-auto">
                <div className="grid grid-cols-12 gap-7">

                    {posts.map((blog, i) => (
                        <div
                            key={i}
                            className="w-full lg:col-span-4 md:col-span-6 col-span-12"
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <BlogCard blog={blog} />
                        </div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default BlogList;
