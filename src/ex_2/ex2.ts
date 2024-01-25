

enum StatusString {
    PUBLISHED = 'published',
    DRAFT = 'draft',
    DELETED = 'deleted'
}
// Функция
async function getFaqs(req: {topicId : number, status?: StatusString}) : Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: StatusString
}[]> {
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    const data = await res.json();
    return data;
}
