import "../../assets/styles/Blogs.css"

const Blog = ( {blog} ) =>{
    return(
        <div className="contenedor">
            <img src={blog.urlToImage} alt={blog.title} className="imagen"/>
            <div className="datos">
                <h1 className="titulo"> {blog.title} </h1>
                <div className="subtitulo">
                    <p className="autor"> {blog.author} </p>
                    <p> {new Date(blog.publishedAt).toLocaleDateString("es")} </p>
                </div>
                <p className="description"> {blog.description} </p>
            </div>
        </div>
    )
}
export default Blog;