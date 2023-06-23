// SharesType Rehber ise Rehber Blogları Veritabanından Alınacak Ve Sayfa Rehberler Sayfası Olarak Çalışacak
// SharesType Blog ise Bloglar Veritabanından Çekilecek.

interface SharesData {
    id:number,
    category: string,
    date: string,
    title: string,
    description: string,
    image: string
}


interface SharesProperties {
    title: string,
    sharesType: string
}