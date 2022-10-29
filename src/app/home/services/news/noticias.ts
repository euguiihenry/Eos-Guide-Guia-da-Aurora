export interface NewsInterface {
    totalArticles: number,
    articles: [
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

export interface FinalNewsInterface {
    articles: [
        {
            title?: string,
            description?: string,
            content?: string,
            url?: string,
            image?: string,
            publishedAt?: string,
            source?: {
                name: string,
                url: string
            }
        }
    ]
}