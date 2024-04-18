import React, { useState } from 'react';

import "../global.css"

const BlogSection = () => {
    const [blogs] = useState([
        {
            id: 1,
            date: "New!",
            title: "The Rise of Deepfakes: Friend or Foe",
            description: "Deepfakes are no longer science fiction. Check out our latest blog to gain a deeper understanding of this powerful technology and its far-reaching implications....",
            color: "#F86360",
            backgroundColor: "#FFF6CD",
            link: "https://lenscorp.ai/blogs/The%20Rise%20of%20Deepfakes:%20Friend%20or%20Foe",
            hoveBackgroundColor: "rgb(255, 251, 234)"
        },
        {
            id: 2,
            date: "April 8, 2024",
            title: "The AI Revolution in Supply Chain Management",
            description: "The rise of Artificial Intelligence (AI) is transforming entire industries, and supply chain management is no exception. Read our latest blog to delve into the exciting world of AI-powered supply chains and explore the role of AI in optimising inventory levels and ensuring on-time deliveries...",
            color: "#656565",
            backgroundColor: "#E2F2FF",
            link: "https://lenscorp.ai/blogs/The%20AI%20Revolution%20in%20Supply%20Chain%20Management",
            hoveBackgroundColor: "rgb(242, 249, 255)"
        },
        {
            id: 3,
            date: "March 28, 2024",
            title: "How AI is Transforming Video Surveillance",
            description: "AI is revolutionizing security, offering real-time threat detection, proactive prevention, and more! Read our latest blog to explore how AI is transforming video surveillance and how VIEW, a next-gen video management software, can help you upgrade your security...",
            color: "#656565",
            backgroundColor: "#FFECEB",
            link: "https://lenscorp.ai/blogs/How%20AI%20is%20Transforming%20Video%20Surveillance",
            hoveBackgroundColor: "rgb(255, 248, 248)"
        }
    ]);

    const [hoveredBlogId, setHoveredBlogId] = useState(null);

    const handleMouseEnter = (id) => setHoveredBlogId(id);
    const handleMouseLeave = () => setHoveredBlogId(null);

    return (
        <div className="NewBlog_Container__TDE_m" id="blogs">
            <div className="NewBlog_headingCont__SQ_P9">
                <h2 className="NewBlog_heading__ZIOBD">OUR BLOGS</h2>
                <div className="NewBlog_underline__Mywh_"></div>
            </div>
            <p className="NewBlog_subHead__VqRmF">Inhouse Mindscape</p>
            <div className="NewBlog_main_container___nQla">
                {blogs.map((blog) => (
                    <div
                        className="NewBlog_sub_container__1gftM"
                        key={blog.id}
                        onMouseEnter={() => handleMouseEnter(blog.id)}
                        onMouseLeave={handleMouseLeave}
                        style={{
                            backgroundColor: hoveredBlogId === blog.id ? blog.hoveBackgroundColor : '#fff'
                        }}
                    >
                        <div className={`NewBlog_indicator__${blog.color}`}></div>
                        <div className="NewBlogCard_card__Elobm">
                            <div className="NewBlogCard_container__fdu5h">
                                <div style={{ textAlign: "left" }}>
                                    <span className="NewBlogCard_date__DE1td" style={{ color: blog.color }}>
                                        {blog.date}
                                    </span>
                                    <h2 className="NewBlogCard_title__16ac3">{blog.title}</h2>
                                </div>
                                <div className="NewBlogCard_box__wxNla" style={{ backgroundColor: blog.backgroundColor }}>
                                    <p className="NewBlogCard_para__OCasQ">{blog.description}</p>
                                </div>
                            </div>
                            <div className="NewBlogCard_btn__aHb0S">
                                <a href={blog.link}>
                                    <button className="Buttons_readButtonBlog__yJfUQ">
                                        Read More<span></span>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="https://lenscorp.ai/blogs">
                <button className="NewBlog_aboutBtn__JdaGk">
                    Explore More
                    <span></span>
                </button>
            </a>
        </div>
    );
}

export default BlogSection;