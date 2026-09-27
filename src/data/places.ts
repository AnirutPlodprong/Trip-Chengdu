import { Place } from '@/types/place';

export const initialPlaces: Place[] = [
  {
    id: "P001",
    name: "สี่ดรุณี (Siguniangshan)",
    province: "Sichuan",
    category: "ธรรมชาติ",
    description: "อุทยานเขาสี่ดรุณี ขนานนามว่าแอลป์แห่งดินแดนตะวันออก ยอดเขาสูงตระหง่านปกคลุมด้วยหิมะตลอดปี",
    imageUrls: "https://images.unsplash.com/photo-siguniang-1.jpg",
    image: [
      "https://images.unsplash.com/photo-siguniang-1.jpg",
      "https://images.unsplash.com/photo-siguniang-2.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Siguniangshan+Sichuan",
    charges: 150
  },
  {
    id: "P002",
    name: "ปี้เผิงโกว (Bipenggou)",
    province: "Sichuan",
    category: "ธรรมชาติ",
    description: "อุทยานธรรมชาติปี้เผิงโกว โดดเด่นด้วยวิวภูเขาหิมะ ทะเลสาบสีฟ้า และใบไม้เปลี่ยนสีในช่วงฤดูใบไม้ร่วง",
    imageUrls: "https://images.unsplash.com/photo-bipenggou-1.jpg",
    image: [
      "https://images.unsplash.com/photo-bipenggou-1.jpg",
      "https://images.unsplash.com/photo-bipenggou-2.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Bipenggou+Sichuan",
    charges: 120
  },
  {
    id: "P003",
    name: "เสฉวนตะวันตก (Western Sichuan)",
    province: "Sichuan",
    category: "ธรรมชาติ",
    description: "เส้นทางท่องเที่ยวทางธรรมชาติสายวัฒนธรรมทิเบต โอบล้อมด้วยเทือกเขาสูง ทุ่งหญ้า และวัฒนธรรมท้องถิ่น",
    imageUrls: "https://images.unsplash.com/photo-west-sichuan-1.jpg",
    image: [
      "https://images.unsplash.com/photo-west-sichuan-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Western+Sichuan",
    charges: 0
  },
  {
    id: "P004",
    name: "ศูนย์อนุรักษ์หมีแพนด้า (Chengdu Panda Base)",
    province: "Sichuan",
    category: "ธรรมชาติ",
    description: "ศูนย์วิจัยและขยายพันธุ์หมีแพนด้าแดงและแพนด้า ยักษ์ใหญ่ที่สุดในเมืองเฉิงตู",
    imageUrls: "https://images.unsplash.com/photo-panda-1.jpg",
    image: [
      "https://images.unsplash.com/photo-panda-1.jpg",
      "https://images.unsplash.com/photo-panda-2.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Chengdu+Research+Base+of+Giant+Panda+Breeding",
    charges: 55
  },
  {
    id: "P005",
    name: "Snowmobile Park",
    province: "Sichuan",
    category: "คาเฟ่",
    description: "กิจกรรมขับรถสโนว์โมบิลลุยตะลุยหิมะสำหรับนักท่องเที่ยวสายลุยกลางลานสกี",
    imageUrls: "https://images.unsplash.com/photo-snowmobile-1.jpg",
    image: [
      "https://images.unsplash.com/photo-snowmobile-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Xiling+Snow+Mountain+Ski+Resort",
    charges: 300
  },
  {
    id: "P006",
    name: "ภูเขาหิมะซีหลิง (Xiling Snow Mountain)",
    province: "Sichuan",
    category: "ธรรมชาติ",
    description: "ลานสกีและยอดเขาหิมะที่ยอดนิยมใกล้เมืองเฉิงตู เหมาะสำหรับการเล่นสกีและนั่งกระเช้าชมวิว",
    imageUrls: "https://images.unsplash.com/photo-xiling-1.jpg",
    image: [
      "https://images.unsplash.com/photo-xiling-1.jpg",
      "https://images.unsplash.com/photo-xiling-2.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Xiling+Snow+Mountain",
    charges: 240
  },
  {
    id: "P007",
    name: "ไหหลัวโกว (Hailuogou)",
    province: "Sichuan",
    category: "ธรรมชาติ",
    description: "อุทยานธารน้ำแข็งและบ่อน้ำร้อนธรรมชาติ ตั้งอยู่บริเวณเชิงเขา貢嘎山 (Gongga Mountain)",
    imageUrls: "https://images.unsplash.com/photo-hailuogou-1.jpg",
    image: [
      "https://images.unsplash.com/photo-hailuogou-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Hailuogou+Glacier+Park",
    charges: 100
  },
  {
    id: "P008",
    name: "ต๋ากู่กลาเซีย (Dagu Glacier)",
    province: "Sichuan",
    category: "ธรรมชาติ",
    description: "อุทยานธารน้ำแข็งต๋ากู่ นั่งกระเช้าไฟฟ้าที่สูงที่สุดในโลกขึ้นไปชมความงามหิมะขาวโพลนบนยอดเขา",
    imageUrls: "https://images.unsplash.com/photo-dagu-1.jpg",
    image: [
      "https://images.unsplash.com/photo-dagu-1.jpg",
      "https://images.unsplash.com/photo-dagu-2.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Dagu+Glacier+National+Park",
    charges: 310
  },
  {
    id: "P009",
    name: "เขาวาวู (Wawu Mountain)",
    province: "Sichuan",
    category: "ธรรมชาติ",
    description: "ภูเขาโต๊ะขนาดใหญ่และผืนป่าโบราณ ตื่นตาตื่นใจกับทัศนียภาพสายหมอกและวิวหิมะในฤดูหนาว",
    imageUrls: "https://images.unsplash.com/photo-wawu-1.jpg",
    image: [
      "https://images.unsplash.com/photo-wawu-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Wawu+Mountain+National+Forest+Park",
    charges: 100
  },
  {
    id: "P010",
    name: "หมู่บ้านกูหนง (Gunong Village)",
    province: "Sichuan",
    category: "คาเฟ่",
    description: "หมู่บ้านสไตล์ทิเบตดั้งเดิม บรรยากาศเงียบสงบ เหมาะสำหรับแวะจิบชาชมวิวภูเขาหิมะ",
    imageUrls: "https://images.unsplash.com/photo-gunong-1.jpg",
    image: [
      "https://images.unsplash.com/photo-gunong-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Gunong+Village+Kangding",
    charges: 0
  },
  {
    id: "P012",
    name: "จิ้วจ้ายโกว (Jiuzhaigou)",
    province: "Sichuan",
    category: "ธรรมชาติ",
    description: "หุบเขาธารน้ำห้าสี มรดกโลกทางธรรมชาติ โดดเด่นด้วยทะเลสาบสีมรกตและน้ำตกหลากชั้น",
    imageUrls: "https://images.unsplash.com/photo-jiuzhaigou-1.jpg",
    image: [
      "https://images.unsplash.com/photo-jiuzhaigou-1.jpg",
      "https://images.unsplash.com/photo-jiuzhaigou-2.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Jiuzhaigou+Valley",
    charges: 280
  },
  {
    id: "P013",
    name: "ลู่เจิ้น (Lu Zhen)",
    province: "Sichuan",
    category: "ร้านอาหาร",
    description: "ย่านเมืองเก่าโบราณและถนนคนเดิน เต็มไปด้วยร้านอาหารท้องถิ่นเสฉวน สถาปัตยกรรมคลาสสิก",
    imageUrls: "https://images.unsplash.com/photo-luzhen-1.jpg",
    image: [
      "https://images.unsplash.com/photo-luzhen-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Lu+Zhen+Chengdu",
    charges: 0
  },
  {
    id: "P014",
    name: "สวนเจียวจึ (Jiaozi Park)",
    province: "Sichuan",
    category: "ธรรมชาติ",
    description: "สวนสาธารณะทันสมัยกลางเมืองเฉิงตู มองเห็นตึกแฝด และเป็นจุดพักผ่อนเดินเล่นยอดนิยม",
    imageUrls: "https://images.unsplash.com/photo-jiaozi-1.jpg",
    image: [
      "https://images.unsplash.com/photo-jiaozi-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Jiaozi+Park+Chengdu",
    charges: 0
  },
  {
    id: "P015",
    name: "พิพิธภัณฑ์ศิลปะเฉิงตู (Chengdu Art Museum)",
    province: "Sichuan",
    category: "วัด",
    description: "อาคารสถาปัตยกรรมล้ำสมัย รวบรวมผลงานศิลปะร่วมสมัยและนิทรรศการระดับโลก",
    imageUrls: "https://images.unsplash.com/photo-chengdu-art-1.jpg",
    image: [
      "https://images.unsplash.com/photo-chengdu-art-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Chengdu+Art+Museum",
    charges: 0
  },
  {
    id: "P016",
    name: "ฉางไป๋ซาน (Changbaishan)",
    province: "Jilin",
    category: "ธรรมชาติ",
    description: "อุทยานแห่งชาติภูเขาฉางไป๋ซาน ชมความงามของทะเลสาบสวรรค์ (Tianchi) บนยอดเขาไฟเก่า",
    imageUrls: "https://images.unsplash.com/photo-changbai-1.jpg",
    image: [
      "https://images.unsplash.com/photo-changbai-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Changbaishan+National+Park",
    charges: 225
  },
  {
    id: "P017",
    name: "Changbaishan Ski Resort",
    province: "Jilin",
    category: "ธรรมชาติ",
    description: "สกีรีสอร์ตระดับพรีเมียมเชิงเขาฉางไป๋ซาน รองรับกิจกรรมฤดูหนาวและสปาน้ำแร่ร้อน",
    imageUrls: "https://images.unsplash.com/photo-changbai-ski-1.jpg",
    image: [
      "https://images.unsplash.com/photo-changbai-ski-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Changbaishan+Ski+Resort",
    charges: 350
  },
  {
    id: "P018",
    name: "Sanji Temple",
    province: "Sichuan",
    category: "วัด",
    description: "อารามโบราณอันเงียบสงบตั้งอยู่บนเนินเขา เหมาะแก่การศึกษาวัฒนธรรมและไหว้พระขอพร",
    imageUrls: "https://images.unsplash.com/photo-sanji-1.jpg",
    image: [
      "https://images.unsplash.com/photo-sanji-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Sanji+Temple",
    charges: 0
  },
  {
    id: "P019",
    name: "วัดอู่โหว (Wuhou Temple)",
    province: "Sichuan",
    category: "วัด",
    description: "ศาลเจ้าสามก๊กขงเบ้ง สร้างขึ้นเพื่อรำลึกถึงจูกัดเหลียงและเล่าปี่ แหล่งเรียนรู้ประวัติศาสตร์สำคัญ",
    imageUrls: "https://images.unsplash.com/photo-wuhou-1.jpg",
    image: [
      "https://images.unsplash.com/photo-wuhou-1.jpg",
      "https://images.unsplash.com/photo-wuhou-2.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Wuhou+Shrine+Chengdu",
    charges: 50
  },
  {
    id: "P020",
    name: "สะพานหนานเฉียว (Nanqiao Bridge)",
    province: "Sichuan",
    category: "ร้านอาหาร",
    description: "สะพานโบราณริมแม่น้ำหมินเจียง ตูเจียงเยี่ยน ยามค่ำคืนประดับไฟสวยงาม รายล้อมด้วยร้านอาหารสตรีทฟู้ด",
    imageUrls: "https://images.unsplash.com/photo-nanqiao-1.jpg",
    image: [
      "https://images.unsplash.com/photo-nanqiao-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Nanqiao+Bridge+Dujiangyan",
    charges: 0
  },
  {
    id: "P021",
    name: "ต๋ากู่ปิงชวน (Dagu Glacier Scenic Spot)",
    province: "Sichuan",
    category: "ธรรมชาติ",
    description: "จุดชมวิวธารน้ำแข็งต๋ากู่ สัมผัสความมหัศจรรย์ของหิมะขาวและคาเฟ่ที่สูงที่สุดในโลก",
    imageUrls: "https://images.unsplash.com/photo-dagubingchuan-1.jpg",
    image: [
      "https://images.unsplash.com/photo-dagubingchuan-1.jpg"
    ],
    mapUrl: "https://maps.google.com/?q=Dagu+Glacier+Scenic+Spot",
    charges: 310
  }
];