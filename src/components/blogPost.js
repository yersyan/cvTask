import React from "react";
import blogPostImg from "../img/blog/blog_post_1_full.jpg"

export const BlogPost = () => {
    return <div className="content-area single-page-area">
        <div className="single-page-content">

            <article className="post">

                <div className="post-thumbnail">
                    <img src={blogPostImg} alt="image"/>
                </div>

                <div className="post-content">
                    <header className="entry-header">

                        <div className="entry-meta entry-meta-top">
                            <span><a href="#" rel="category tag">UI</a></span>
                        </div>


                        <h2 className="entry-title">Best Practices for Animated Progress Indicators</h2>
                    </header>



                    <div className="entry-content">
                        <div className="row">
                            <div className=" col-xs-12 col-sm-12 ">
                                <div className="col-inner">
                                    <p>Nulla nulla nisl, sodales ac nulla ac, consequat vulputate purus. Curabitur
                                        tincidunt ipsum vel nibh rutrum accumsan. Nunc ullamcorper posuere leo, vitae
                                        aliquet risus pharetra in. Integer turpis eros, iaculis et mi non, pulvinar
                                        egestas leo. Etiam sagittis ex turpis, vitae cursus tortor interdum eu. Quisque
                                        ultrices nunc eget erat vestibulum euismod. Ut mauris nisi, facilisis at arcu
                                        nec, facilisis porttitor lorem.</p><p>Vivamus vitae neque molestie, porta libero
                                    sed, tincidunt leo. In nec posuere odio, id rhoncus lorem. Proin id erat ut dolor
                                    condimentum viverra. Praesent viverra sed dolor ac luctus. Praesent placerat id
                                    lorem quis lacinia.</p>

                                    <blockquote className="quote">Maecenas id finibus felis. Etiam vitae nibh et felis
                                        efficitur pellentesque. Mauris suscipit sapien nunc, a lacinia nibh feugiat ut.
                                        In hac habitasse platea dictumst.
                                        <footer className="quote-author">
                                            <span>Larry L. Johnson</span>
                                        </footer>
                                    </blockquote>

                                    <p>Etiam interdum vulputate risus, vitae elementum neque consectetur sed. Donec at
                                        risus dui. Ut in suscipit neque. Vestibulum sit amet lobortis magna, commodo
                                        venenatis ante. Cras molestie, ex a auctor lacinia, risus est aliquam risus, sit
                                        amet semper purus tortor id ante. Donec lacus ipsum, porttitor et libero a,
                                        fringilla auctor quam. Sed in nisl id libero tincidunt aliquet. Aenean dui
                                        ipsum, auctor ut leo ut, semper dignissim lacus. Suspendisse faucibus viverra
                                        consequat. Maecenas efficitur massa vel eros sagittis dapibus. Nam lobortis mi
                                        in turpis hendrerit eleifend. Nulla non massa felis.</p>

                                    <p>Donec sit amet dolor ante. Vivamus vel massa accumsan, faucibus quam quis,
                                        convallis velit. Aliquam erat volutpat. Integer imperdiet diam quis arcu
                                        venenatis, quis sagittis nibh rhoncus. Donec non nisi scelerisque, sodales metus
                                        quis, accumsan mauris. Curabitur volutpat risus rutrum erat condimentum
                                        tristique. Nullam at felis diam. Quisque dictum felis non ante pretium mollis.
                                        Aliquam turpis neque, varius nec diam a, aliquam pulvinar diam. Interdum et
                                        malesuada fames ac ante ipsum primis in faucibus. Sed ipsum libero, aliquet sed
                                        bibendum faucibus, semper a dui.</p>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="entry-meta entry-meta-bottom">
                        <div className="date-author">
                      <span className="entry-date">
                        <a href="#" rel="bookmark">
                          <i className="far fa-clock"></i> <span className="entry-date"> March 16, 2020</span>
                        </a>
                      </span>
                            <span className="author vcard">
                        <a className="url fn n" href="#" rel="author"> <i className="fas fa-user"></i> LMPixels</a>
                      </span>
                        </div>


                        <div className="entry-share btn-group share-buttons">
                            <a href="#"
                               onClick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                               className="btn" target="_blank" title="Share on Facebook">
                                <i className="fab fa-facebook-f"></i>
                            </a>

                            <a href="#"
                               onClick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');return false;"
                               className="btn" target="_blank" title="Share on Twitter">
                                <i className="fab fa-twitter"></i>
                            </a>

                            <a href="#"
                               onClick="javascript:window.open(this.href,'', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
                               className="btn" title="Share on LinkedIn">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>

                    </div>

                    <div className="post-tags">
                        <div className="tags">
                            <a href="#" rel="tag">animate</a>
                            <a href="#" rel="tag">bar</a>
                            <a href="#" rel="tag">design</a>
                            <a href="#" rel="tag">progress</a>
                            <a href="#" rel="tag">ui</a>
                        </div>
                    </div>
                </div>
            </article>

        </div>
    </div>
}