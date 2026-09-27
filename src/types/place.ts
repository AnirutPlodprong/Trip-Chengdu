export interface Place {
    id: string;
    name: string;
    province: string;
    category: 'ธรรมชาติ' | 'ร้านอาหาร' | 'คาเฟ่' | 'วัด';
    description: string;
    imageUrls: string;
    image: string[];
    mapUrl: string;
    charges: number;
}