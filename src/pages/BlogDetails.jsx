import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import { Helmet } from "react-helmet-async";

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

            }

            setLoading(false);

        }

        fetchBlog();

    }, [slug])

    if (loading) {
        return <div className="text-center py-20">Loading blog...</div>
    }

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                Blog not found
            </div>
        )
    }

    return (
        <>
            <Helmet>

                <title>{blog.metaTitle}</title>

                <meta
                    name="description"
                    content={blog.metaDescription}
                />

            </Helmet>
            <div className="bg-gray-50 min-h-screen">

                <div className="max-w-3xl mx-auto px-6 pt-12">

                    <Link
                        to="/blogs"
                        className="text-custom-orenge font-medium hover:underline text-sm"
                    >
                        ← Back to Blogs
                    </Link>

                </div>

                <article className="max-w-3xl mx-auto px-6 py-10">

                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
                        {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 mt-5 text-sm text-gray-500">

                        <span className="bg-custom-orenge/10 text-custom-orenge px-3 py-1 rounded-full">
                            {blog.category}
                        </span>

                        <span>
                            Created : {new Date(blog.createdAt).toLocaleString([], {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                            })}
                        </span>
                        <span>
                            Last Updated : {new Date(blog.updatedAt).toLocaleString([], {
                                dateStyle: 'medium',
                                timeStyle: 'short'
                            })}
                        </span>

                    </div>

                    <div className="mt-10">

                        <img
                            src={blog.imageUrl}
                            alt={blog.title}
                            className="w-full rounded-xl shadow-lg object-cover"
                        />

                    </div>

                    <div
                        className="mt-12 prose lg:prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700"
                        dangerouslySetInnerHTML={{ __html: blog.content }}
                    />

                </article>

            </div>
        </>

    );
}

export default BlogDetails;