'use client'

import { useState } from 'react';
import { initialPlaces } from '@/data/places';
import { PlaceCard } from '@/components/PlaceCard';

const CATEFORIES = ['ธรรมชาติ', 'ร้านอาหาร', 'คาเฟ่', 'วัด'] as const;

export default function Home() {
  const [searchQuery , setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('ทั้งหมด');

  //ฟังก์ชันกรองข้อมูลตามคำค้นหาและหมวดหมู่
  const filteredPlaces = initialPlaces.filter((place) =>)

}