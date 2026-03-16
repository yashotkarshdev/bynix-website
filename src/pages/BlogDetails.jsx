// import { useParams, Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import api from "../services/api";
// import { Helmet } from "react-helmet-async";

// function BlogDetails() {

//     const { slug } = useParams();

//     const [blog, setBlog] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {

//         const fetchBlog = async () => {

//             try {

//                 const res = await api.get(`/blogs/${slug}`);
//                 setBlog(res.data.data);

//             } catch (error) {

//                 console.error("Blog not found");

//             }

//             setLoading(false);

//         }

//         fetchBlog();

//     }, [slug])

//     if (loading) {
//         return <div className="text-center py-20">Loading blog...</div>
//     }

//     if (!blog) {
//         return (
//             <div className="min-h-screen flex items-center justify-center">
//                 Blog not found
//             </div>
//         )
//     }

//     return (
//         <>
//             <Helmet>

//                 <title>{blog.metaTitle}</title>

//                 <meta
//                     name="description"
//                     content={blog.metaDescription}
//                 />

//             </Helmet>
//             <div className="bg-gray-50 min-h-screen">

//                 <div className="max-w-3xl mx-auto px-6 pt-12">

//                     <Link
//                         to="/blogs"
//                         className="text-custom-orenge font-medium hover:underline text-sm"
//                     >
//                         ← Back to Blogs
//                     </Link>

//                 </div>

//                 <article className="max-w-3xl mx-auto px-6 py-10">

//                     <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
//                         {blog.title}
//                     </h1>

//                     <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-gray-500">

//                         <span className="bg-custom-orenge/10 text-custom-orenge px-3 py-1 rounded-full">
//                             {blog.category}
//                         </span>

//                         <span>
//                             Created : {new Date(blog.createdAt).toLocaleString([], {
//                                 dateStyle: 'medium',
//                                 timeStyle: 'short'
//                             })}
//                         </span>
//                         <span>
//                             Last Updated : {new Date(blog.updatedAt).toLocaleString([], {
//                                 dateStyle: 'medium',
//                                 timeStyle: 'short'
//                             })}
//                         </span>

//                     </div>

//                     <div className="mt-10">

//                         <img
//                             src={blog.imageUrl}
//                             alt={blog.title}
//                             className="w-full rounded-xl shadow-lg object-cover"
//                         />

//                     </div>

//                     <div
//                         className="mt-12 prose lg:prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700"
//                         dangerouslySetInnerHTML={{ __html: blog.content }}
//                     />

//                 </article>

//             </div>
//         </>

//     );
// }

// export default BlogDetails;

import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Helmet } from "react-helmet-async";
import SEO from "../components/SEO";

function BlogDetails() {
    const { slug } = useParams();
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const res = await api.get(`/blogs/${slug}`);
                setBlog(res.data.data);
            } catch (error) {
                console.error("Blog not found");
            } finally {
                setLoading(false);
            }
        };
        fetchBlog();
        window.scrollTo(0, 0);
    }, [slug]);

    if (loading) {
        return <div className="text-center py-20 text-gray-400 font-bold uppercase tracking-widest">Loading blog...</div>;
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-white">
                <h2 className="text-2xl font-bold">Blog not found</h2>
                <Link to="/blogs" className="mt-4 text-[#F27115] font-bold underline">Return to Feed</Link>
            </div>
        );
    }

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.metaDescription || blog.excerpt,
        "image": blog.imageUrl,
        "author": {
            "@type": "Organization",
            "name": "Bynix Technology"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Bynix Technology",
            "logo": {
                "@type": "ImageObject",
                "url": "https://bynixtechnology.com/logo.png"
            }
        },
        "articleSection": blog.category,
        "datePublished": blog.createdAt,
        "dateModified": blog.updatedAt,
        "wordCount": blog.content?.replace(/<[^>]+>/g, "").split(/\s+/).length,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `https://bynixtechnology.com/blogs/${slug}`
        }
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://bynixtechnology.com"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blogs",
                "item": "https://bynixtechnology.com/blogs"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "name": blog.title,
                "item": `https://bynixtechnology.com/blogs/${slug}`
            }
        ]
    };

    return (
        <>
            <SEO
                title={blog.metaTitle || blog.title}
                description={blog.metaDescription || blog.excerpt}
                keywords={`${blog.category}, ${blog.title}, Bynix Technology blog`}
                image={blog.imageUrl}
            />
            <Helmet>

                <title>{blog.metaTitle || blog.title}</title>

                <meta
                    name="description"
                    content={blog.metaDescription || blog.excerpt}
                />

                <meta
                    name="keywords"
                    content={`${blog.title}, ${blog.category}, Bynix Technology blog, SEO tips, digital marketing insights`}
                />

                <link
                    rel="canonical"
                    href={`https://bynixtechnology.com/blogs/${slug}`}
                />

                <script type="application/ld+json">
                    {JSON.stringify(articleSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>

            </Helmet>

            <div className="bg-white min-h-screen">
                {/* NAVIGATION */}
                <div className="max-w-4xl mx-auto px-6 pt-12">
                    <Link
                        to="/blogs"
                        className="text-[#F27115] font-bold hover:opacity-80 text-sm transition-all inline-flex items-center gap-2"
                    >
                        ← BACK TO BLOGS
                    </Link>
                </div>

                <article className="max-w-4xl mx-auto px-6 py-10">
                    {/* HEADER */}
                    <header className="mb-10">
                        <span className="bg-[#F27115]/10 text-[#F27115] px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                            {blog.category}
                        </span>

                        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mt-6 leading-tight">
                            {blog.title}
                        </h1>

                        <div className="flex flex-wrap items-center gap-6 mt-6 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
                            <div className="flex items-center gap-1">
                                <span className="text-[#F27115]">Posted:</span>
                                <span>{new Date(blog.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <span className="text-[#F27115]">Updated:</span>
                                <span>{new Date(blog.updatedAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })}</span>
                            </div>
                        </div>
                    </header>

                    {/* HERO IMAGE */}
                    <div className="mb-12">
                        <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full rounded-[2rem] shadow-xl border border-gray-50 object-cover max-h-[500px]"
                        />
                    </div>

                    {/* CONTENT AREA */}
                    <div
                        className="prose prose-lg max-w-none 
                        prose-headings:text-gray-900 prose-headings:font-bold
                        prose-p:text-gray-600 prose-p:leading-relaxed
                        prose-strong:text-gray-900
                        prose-a:text-[#F27115] prose-a:font-bold
                        prose-img:rounded-2xl
                        prose-blockquote:border-l-[#F27115] prose-blockquote:bg-gray-50 prose-blockquote:py-1 prose-blockquote:rounded-r-xl"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                    {/* FOOTER CONTACT */}
                    <div className="mt-20 pt-10 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-6">
                        <p className="text-gray-400 font-bold text-xs uppercase tracking-widest">© 2026 Bynix Technology</p>
                        <div className="flex gap-6">
                            <a href="mailto:info@bynixtechnology.com" className="text-gray-900 font-bold hover:text-[#F27115] transition-colors">Email Us</a>
                            <a href="tel:+916376925384" className="text-gray-900 font-bold hover:text-[#F27115] transition-colors">Call Support</a>
                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}

export default BlogDetails;