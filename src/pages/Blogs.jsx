// import { Link } from "react-router-dom";
// import { useEffect, useState } from "react";
// import api from "../services/api";

// function Blog() {

//     const [blogs, setBlogs] = useState([]);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {

//         const fetchBlogs = async () => {

//             try {

//                 const res = await api.get("/blogs");

//                 setBlogs(res.data.data);

//             } catch (error) {

//                 console.error("Failed to fetch blogs", error);

//             }

//             setLoading(false);

//         }

//         fetchBlogs();

//     }, [])

//     if (loading) {
//         return (
//             <div className="text-center py-20">
//                 Loading blogs...
//             </div>
//         )
//     }

//     if (!blogs.length) {
//         return (
//             <div className="text-center py-20">
//                 No blogs found
//             </div>
//         )
//     }

//     const featured = blogs[0];
//     const others = blogs.slice(1);

//     return (

//         <div className="bg-gray-50">

//             <section className="py-20 text-center px-4">

//                 <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
//                     Bynix Blog
//                 </h1>

//                 <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
//                     Insights about SEO, development, and marketing to help businesses grow online.
//                 </p>

//             </section>


//             {/* FEATURED BLOG */}

//             <section className="max-w-7xl mx-auto px-4 mb-20">

//                 <Link to={`/blogs/${featured.slug}`}
//                     className="grid md:grid-cols-2 gap-10 items-center group">

//                     <img
//                         src={featured.imageUrl}
//                         alt={featured.title}
//                         className="rounded-xl w-full h-[320px] object-cover"
//                     />

//                     <div>

//                         <span className="text-sm text-custom-orenge font-semibold">
//                             {featured.category}
//                         </span>

//                         <h2 className="text-3xl font-bold text-gray-900 mt-3">
//                             {featured.title}
//                         </h2>

//                         <p className="text-gray-600 mt-4">
//                             {featured.excerpt}
//                         </p>

//                         <p className="text-sm text-gray-400 mt-3">
//                             Created : {new Date(featured.createdAt).toLocaleString([], {
//                                 dateStyle: 'medium',
//                                 timeStyle: 'short'
//                             })}
//                         </p>
//                         <p className="text-sm text-gray-400 mt-3">
//                             Last Updated : {new Date(featured.updatedAt).toLocaleString([], {
//                                 dateStyle: 'medium',
//                                 timeStyle: 'short'
//                             })}
//                         </p>

//                         <Link
//                             to={`/blogs/${featured.slug}`}
//                             className="inline-block mt-6 bg-custom-orenge text-white px-6 py-3 rounded-md"
//                         >
//                             Read Article
//                         </Link>

//                     </div>

//                 </Link>

//             </section>


//             {/* BLOG GRID */}

//             <section className="max-w-7xl mx-auto px-4 pb-20">

//                 <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

//                     {others.map((blog) => (
//                         <Link
//                             to={`/blogs/${blog.slug}`}
//                             key={blog._id}
//                             className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden block"
//                         >

//                             <img
//                                 src={blog.imageUrl}
//                                 alt={blog.title}
//                                 className="w-full h-52 object-cover"
//                             />

//                             <div className="p-6">

//                                 <span className="text-sm text-custom-orenge font-semibold">
//                                     {blog.category}
//                                 </span>

//                                 <h3 className="text-xl font-semibold text-gray-900 mt-2 line-clamp-2">
//                                     {blog.title}
//                                 </h3>

//                                 <p className="text-gray-600 text-sm mt-3 line-clamp-3">
//                                     {blog.excerpt}
//                                 </p>

//                                     <p className="text-xs text-gray-400 mt-3">
//                                         Created : {new Date(blog.createdAt).toLocaleString([], {
//                                             dateStyle: 'medium',
//                                             timeStyle: 'short'
//                                         })}
//                                     </p>
//                                     <p className="text-xs text-gray-400 mt-3">
//                                         Last Updated : {new Date(blog.updatedAt).toLocaleString([], {
//                                             dateStyle: 'medium',
//                                             timeStyle: 'short'
//                                         })}
//                                     </p>

//                                 <Link
//                                     to={`/blogs/${blog.slug}`}
//                                     className="inline-block mt-5 text-custom-orenge font-medium"
//                                 >
//                                     Read More →
//                                 </Link>

//                             </div>

//                         </Link>
//                     ))}

//                 </div>

//             </section>

//         </div >

//     );
// }

// export default Blog;

import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import SEO from "../components/SEO";
import { Helmet } from "react-helmet-async";

const BASE_URL = import.meta.env.VITE_SITE_URL;

function Blog() {
    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "Bynix Technology Blog",
        "description": "Latest insights on SEO, digital marketing, web development and business growth strategies.",
        "url": `${BASE_URL}/blogs`,
        "publisher": {
            "@type": "Organization",
            "name": "Bynix Technology",
            "logo": {
                "@type": "ImageObject",
                "url": `${BASE_URL}/logo.png`
            }
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
                "item": `${BASE_URL}`
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Blogs",
                "item": `${BASE_URL}/blogs`
            }
        ]
    };
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                const res = await api.get("/blogs");
                setBlogs(res.data.data || []);
            } catch (error) {
                console.error("Failed to fetch blogs", error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogs();
    }, []);

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-GB', {
            day: '2-digit',
            month: 'short',
            year: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
                <div className="w-12 h-12 border-4 border-[#F27115]/20 border-t-[#F27115] rounded-full animate-spin"></div>
                <p className="text-gray-400 font-bold tracking-widest uppercase text-xs">Fetching Stories...</p>
            </div>
        );
    }

    if (!blogs.length) {
        return (
            <div className="text-center py-40 bg-white">
                <h2 className="text-2xl font-black text-gray-900">No blogs found</h2>
                <p className="text-gray-500 mt-2">Check back later for fresh insights.</p>
            </div>
        );
    }

    const featured = blogs[0];
    const others = blogs.slice(1);

    const articlesSchema = blogs.map(blog => ({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": blog.title,
        "description": blog.excerpt,
        "image": blog.imageUrl,
        "datePublished": blog.createdAt,
        "dateModified": blog.updatedAt,
        "author": {
            "@type": "Organization",
            "name": "Bynix Technology"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Bynix Technology",
            "logo": {
                "@type": "ImageObject",
                "url": `${BASE_URL}/logo.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${BASE_URL}/blogs/${blog.slug}`
        }
    }));
    return (
        <>
            <SEO
                title="Bynix Blog | SEO, Development & Marketing Insights"
                description="Explore expert insights from Bynix Technology on SEO, digital marketing, web development and online business growth."
                keywords="Bynix Technology blog, SEO tips blog, digital marketing blog, web development blog, business growth strategies"
                image="/blog-og.jpg"
            />

            <Helmet>

                <script type="application/ld+json">
                    {JSON.stringify(blogSchema)}
                </script>

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>

                {articlesSchema.map((schema, index) => (
                    <script
                        key={index}
                        type="application/ld+json"
                        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                    />
                ))}

            </Helmet>
            <div className="bg-white min-h-screen">
                {/* --- HERO SECTION --- */}
                <section className="bg-[#F27115] pt-24 pb-32 px-4 text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter">
                        Bynix Stories
                    </h1>
                    <p className="mt-6 text-orange-50 max-w-2xl mx-auto text-lg font-medium opacity-90">
                        Mastering SEO, Development, and Digital Strategy to scale your business.
                    </p>
                </section>

                {/* --- FEATURED ARTICLE --- */}
                <section className="max-w-7xl mx-auto px-6 -mt-16 mb-24">
                    <Link to={`/blogs/${featured.slug}`} className="group block">
                        <div className="bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 grid md:grid-cols-2 gap-0 items-center transition-transform duration-500 hover:-translate-y-2">
                            <div className="h-[300px] md:h-[500px] overflow-hidden">
                                <img
                                    src={featured.imageUrl || "/fallback.jpg"}
                                    alt={featured.title || "Featured Blog Image"}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = "/fallback.jpg";
                                    }}
                                />
                            </div>
                            <div className="p-8 md:p-14">
                                <span className="bg-[#F27115]/10 text-[#F27115] px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
                                    Featured • {featured.category}
                                </span>
                                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mt-6 leading-tight group-hover:text-[#F27115] transition-colors">
                                    {featured.title}
                                </h2>
                                <p className="text-gray-600 mt-6 text-lg leading-relaxed line-clamp-3">
                                    {featured.excerpt}
                                </p>
                                <div className="mt-8 flex items-center gap-4 text-sm font-bold text-gray-400">
                                    <span>{formatDate(featured.createdAt)}</span>
                                    <span className="w-1.5 h-1.5 bg-gray-200 rounded-full"></span>
                                    <span className="text-[#F27115]">Read Article →</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                </section>

                {/* --- BLOG GRID --- */}
                <section className="max-w-7xl mx-auto px-6 pb-32">
                    <div className="flex items-center justify-between mb-12 border-b border-gray-100 pb-6">
                        <h3 className="text-2xl font-black text-gray-900 tracking-tight text-center md:text-left uppercase">Recent Stories</h3>
                        <div className="hidden md:block h-1 flex-1 bg-gray-50 ml-8 rounded-full"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {others.map((blog) => (
                            <Link
                                to={`/blogs/${blog.slug}`}
                                key={blog._id}
                                className="group flex flex-col"
                            >
                                <div className="relative h-64 rounded-[2rem] overflow-hidden shadow-sm mb-6 border border-gray-100">
                                    <img
                                        src={blog.imageUrl || "/fallback.jpg"}
                                        alt={blog.title || "Blog Image"}
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = "/fallback.jpg";
                                        }}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-gray-900 px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-tighter shadow-sm">
                                            {blog.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="px-2">
                                    <p className="text-[10px] font-bold text-[#F27115] uppercase tracking-[0.2em] mb-2">
                                        {formatDate(blog.createdAt)}
                                    </p>
                                    <h3 className="text-xl font-black text-gray-900 leading-snug group-hover:text-[#F27115] transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm mt-3 line-clamp-2 leading-relaxed font-medium">
                                        {blog.excerpt}
                                    </p>
                                    <div className="mt-4 pt-4 border-t border-gray-50">
                                        <span className="text-xs font-bold text-gray-900 group-hover:translate-x-2 transition-transform inline-block">
                                            View Post +
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </section>
            </div>
        </>
    );
}

export default Blog;