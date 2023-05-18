export default function optimizeImage (url:string, size:string) {
    if (url) {
        const optimizedUrl = url
            .replace('upload', `upload/${size},f_auto`)
            .replace(/\.\w+$/, ".webp");

        return optimizedUrl;
    }

    return url;
}