import Link from "next/Link"
import articleStyes from "../styles/Article.module.css"

const ArticleItem = ({ article }) => {
    return (
        <Link href="/article/[id]" as={`/article/${article.id}`}>
            <a className={articleStyes.card}>
                <h3>{article.title} &rarr;</h3>
                <p>{article.excerpt}</p>
            </a>
        </Link>
    )
}

export default ArticleItem
