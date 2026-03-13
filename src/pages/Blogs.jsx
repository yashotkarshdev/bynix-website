import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function Blog() {

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const fetchBlogs = async () => {

            try {

                const res = await api.get("/blogs");

                setBlogs(res.data.data);

            } catch (error) {

                console.error("Failed to fetch blogs", error);

            }

            setLoading(false);

        }

        fetchBlogs();

    }, [])

    if (loading) {
        return (
            <div className="text-center py-20">
                Loading blogs...
            </div>
        )
    }

    if (!blogs.length) {
        return (
            <div className="text-center py-20">
                No blogs found
            </div>
        )
    }

    const featured = blogs[0];
    const others = blogs.slice(1);

    return (

        <div className="bg-gray-50">

            <section className="py-20 text-center px-4">

                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                    Bynix Blog
                </h1>

                <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
                    Insights about SEO, development, and marketing to help businesses grow online.
                </p>

            </section>


            {/* FEATURED BLOG */}

            <section className="max-w-7xl mx-auto px-4 mb-20">

                <Link to={`/blogs/${featured.slug}`}
                    className="grid md:grid-cols-2 gap-10 items-center group">

                    <img
                        src={featured.imageUrl}
                        alt={featured.title}
                        className="rounded-xl w-full h-[320px] object-cover"
                    />

                    <div>

                        <span className="text-sm text-custom-orenge font-semibold">
                            {featured.category}
                        </span>

                        <h2 className="text-3xl font-bold text-gray-900 mt-3">
                            {featured.title}
                        </h2>

                        <p className="text-gray-600 mt-4">
                            {featured.excerpt}
                        </p>

                        <p className="text-sm text-gray-400 mt-3">
                            Created : {new Date(featured.createdAt).toLocaleString([], {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                            })}
                        </p>
                        <p className="text-sm text-gray-400 mt-3">
                            Last Updated : {new Date(featured.updatedAt).toLocaleString([], {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                            })}
                        </p>

                        <Link
                            to={`/blogs/${featured.slug}`}
                            className="inline-block mt-6 bg-custom-orenge text-white px-6 py-3 rounded-md"
                        >
                            Read Article
                        </Link>

                    </div>

                </Link>

            </section>


            {/* BLOG GRID */}

            <section className="max-w-7xl mx-auto px-4 pb-20">

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

                    {others.map((blog) => (
                        <Link
                            to={`/blogs/${blog.slug}`}
                            key={blog._id}
                            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden block"
                        >

                            <img
                                src={blog.imageUrl}
                                alt={blog.title}
                                className="w-full h-52 object-cover"
                            />

                            <div className="p-6">

                                <span className="text-sm text-custom-orenge font-semibold">
                                    {blog.category}
                                </span>

                                <h3 className="text-xl font-semibold text-gray-900 mt-2 line-clamp-2">
                                    {blog.title}
                                </h3>

                                <p className="text-gray-600 text-sm mt-3 line-clamp-3">
                                    {blog.excerpt}
                                </p>

                                    <p className="text-xs text-gray-400 mt-3">
                                        Created : {new Date(blog.createdAt).toLocaleString([], {
                                            dateStyle: 'medium',
                                            timeStyle: 'short'
                                        })}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-3">
                                        Last Updated : {new Date(blog.updatedAt).toLocaleString([], {
                                            dateStyle: 'medium',
                                            timeStyle: 'short'
                                        })}
                                    </p>

                                <Link
                                    to={`/blogs/${blog.slug}`}
                                    className="inline-block mt-5 text-custom-orenge font-medium"
                                >
                                    Read More →
                                </Link>

                            </div>

                        </Link>
                    ))}

                </div>

            </section>

        </div >

    );
}

export default Blog;