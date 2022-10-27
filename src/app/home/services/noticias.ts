export interface NewsInterface {
    totalArticles: number,
    article: [
        {
            title: string,
            description: string,
            content: string,
            url: string,
            image: string,
            publishedAt: string,
            source: {
                name: string,
                url: string
            }
        }
    ]
}            