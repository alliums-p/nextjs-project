import Head from "next/head"

const Meta = ({ title, keywords, desc }) => {
    return (
        <Head>
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1"
            />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={desc} />
            <meta charset="utf-8" />
            <link rel="icon" href="/favicon.ico" />
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: "WebDev News",
    keywords: "news, web development, blockchain, programming",
    desc: "Get the latest news on web development and blockchain.",
}

export default Meta
