import { Component } from '@angular/core';

@Component({
  selector: 'app-order-now',
  templateUrl: './order-now.component.html',
  styleUrls: ['./order-now.component.css']
})
export class OrderNowComponent {

  totalAmount = 0;
  quantity:any;
  state = 0;

  min = -Infinity;
  max = Infinity;
  categoryList = [
    {categoryName:"SINGLE SOUND CRACKERS", productsList : [
      {id:"001",categoryName:"SINGLE SOUND CRACKERS",SLNo: "1",name:'4 " LAKSHMI',strikedAmout: "₹ 42", price: "21", total: "0", image: "../../assets/images/ordersnow/01_SINGLE SOUND CRACKERS/img-01.jpg"},
      {id:"002",categoryName:"SINGLE SOUND CRACKERS",SLNo: "2",name:'6 " NARAGASURAN (16 PLY)',strikedAmout: "₹ 146", price: "73", total: "0",  image: "../../assets/images/ordersnow/01_SINGLE SOUND CRACKERS/img-02.jpg"},
      {id:"003",categoryName:"SINGLE SOUND CRACKERS",SLNo: "3",name:'5" KAMSAN (16 PLY)',strikedAmout: "₹ 126", price: "63", total: "0", image: "../../assets/images/ordersnow/01_SINGLE SOUND CRACKERS/img-03.jpg"},
      {id:"004",categoryName:"SINGLE SOUND CRACKERS",SLNo: "4",name:'4" RAVANA (16 PLY)',strikedAmout: "₹ 112", price: "56", total: "0",  image: "../../assets/images/ordersnow/01_SINGLE SOUND CRACKERS/img-04.jpg"},
      {id:"005",categoryName:"SINGLE SOUND CRACKERS",SLNo: "5",name:'4 "PANDA/ PARROT',strikedAmout: "₹ 44", price: "22", total: "0",  image: "../../assets/images/ordersnow/01_SINGLE SOUND CRACKERS/img-05.jpg"},
      {id:"006",categoryName:"SINGLE SOUND CRACKERS",SLNo: "6",name:'GOLD LAKSHMI',strikedAmout: "₹ 76", price: "38", total: "0",  image: "../../assets/images/ordersnow/01_SINGLE SOUND CRACKERS/img-06.jpg"},
      {id:"007",categoryName:"SINGLE SOUND CRACKERS",SLNo: "7",name:'3 1/2" BUTTERFLY / JOKER',strikedAmout: "₹ 32", price: "16", total: "0",  image: "../../assets/images/ordersnow/01_SINGLE SOUND CRACKERS/img-07.jpg"},
      {id:"008",categoryName:"SINGLE SOUND CRACKERS",SLNo: "8",name:'3 1/2" PILLAYAR',strikedAmout: "₹ 32", price: "16", total: "0",  image: "../../assets/images/ordersnow/01_SINGLE SOUND CRACKERS/img-08.jpg"},
      {id:"009",categoryName:"SINGLE SOUND CRACKERS",SLNo: "9",name:'2 3/4" KURUVI',strikedAmout: "₹ 20", price: "10", total: "0",  image: "../../assets/images/ordersnow/01_SINGLE SOUND CRACKERS/img-09.jpg"}
    ]},
    {categoryName:"TWO  SOUND CRACKERS",productsList : [
      {id:"001",categoryName:"SINGLE SOUND CRACKERS",SLNo: "10",name:'4" TWO SOUND',strikedAmout: "₹ 70", price: "35", total: "0", image: "../../assets/images/ordersnow/02_TWO  SOUND CRACKERS/img-10.jpg"},
    ]},
    {categoryName:"GROUND CHAKKARS",productsList : [
      {id:"001",categoryName:"SINGLE SOUND CRACKERS",SLNo: "11",name:'WIRE CHAKKAR',strikedAmout: "₹ 786", price: "393", total: "0", image: "../../assets/images/ordersnow/03_GROUND CHAKKARS/img-11.jpg"},
      {id:"001",categoryName:"SINGLE SOUND CRACKERS",SLNo: "12",name:'GROUND CHAKKAR BIG',strikedAmout: "₹ 92", price: "46", total: "0", image: "../../assets/images/ordersnow/03_GROUND CHAKKARS/img-12.jpg"},
      {id:"001",categoryName:"SINGLE SOUND CRACKERS",SLNo: "13",name:'GROUND CHAKKAR SPECIAL',strikedAmout: "₹ 172", price: "86", total: "0", image: "../../assets/images/ordersnow/03_GROUND CHAKKARS/img-13.png"},
      {id:"001",categoryName:"SINGLE SOUND CRACKERS",SLNo: "14",name:'GROUND CHAKKAR DELUXE',strikedAmout: "₹ 332", price: "166", total: "0", image: "../../assets/images/ordersnow/03_GROUND CHAKKARS/img-14.png"},
      {id:"001",categoryName:"SINGLE SOUND CRACKERS",SLNo: "15",name:'WIN WHEEL MAX(Super DLX)',strikedAmout: "₹ 366", price: "183", total: "0", image: "../../assets/images/ordersnow/03_GROUND CHAKKARS/img-15.jpg"},
    ]},
    {categoryName:"FLOWER POTS",productsList : [
      {SLNo: "16",name:'FLOWER POT SMALL',strikedAmout: "₹ 126", price: "63", total: "0", image: "../../assets/images/ordersnow/04_FLOWER POTS/img-16.png"},
      {SLNo: "17",name:'FLOWER POT BIG',strikedAmout: "₹ 154", price: "77", total: "0", image: "../../assets/images/ordersnow/04_FLOWER POTS/img-17.jpg"},
      {SLNo: "18",name:'FLOWER POT SPECIAL',strikedAmout: "₹ 182", price: "91", total: "0", image: "../../assets/images/ordersnow/04_FLOWER POTS/img-18.jpg"},
      {SLNo: "19",name:'FLOWER POT ASHOKA',strikedAmout: "₹ 218", price: "109", total: "0", image: "../../assets/images/ordersnow/04_FLOWER POTS/img-19.jpg"},
      {SLNo: "20",name:'FLOWER POT COLOUR KOTTI',strikedAmout: "₹ 454", price: "227", total: "0", image: "../../assets/images/ordersnow/04_FLOWER POTS/img-20.jpg"},
    ]},
    {categoryName:"ROCKET - SKY JET",productsList : [
      {SLNo: "21",name:'BABY ROCKET',strikedAmout: "₹ 82", price: "41", total: "0", image: "../../assets/images/ordersnow/05_ROCKET - SKY JET/img-21.jpg"},
      {SLNo: "22",name:'ROCKET BOMB',strikedAmout: "₹ 134", price: "67", total: "0", image: "../../assets/images/ordersnow/05_ROCKET - SKY JET/img-21.jpg"},
      {SLNo: "23",name:'LUNIC ROCKET',strikedAmout: "₹ 258", price: "129", total: "0", image: "../../assets/images/ordersnow/05_ROCKET - SKY JET/img-21.jpg"},
      {SLNo: "24",name:'WHISTLING ROCKET',strikedAmout: "₹ 354", price: "177", total: "0", image: "../../assets/images/ordersnow/05_ROCKET - SKY JET/img-24.png"},
    ]},
    {categoryName:"THUNDER SOUND BOMB",productsList : [
      {SLNo: "25",name:'ADAVADI AYYAPANDI',strikedAmout: "₹ 798", price: "399", total: "0", image: "../../assets/images/ordersnow/06_THUNDER SOUND BOMB/img-25.jpg"},
      {SLNo: "26",name:'QUALIS BOMB',strikedAmout: "₹ 246", price: "123", total: "0", image: "../../assets/images/ordersnow/06_THUNDER SOUND BOMB/img-26.jpg"},
      {SLNo: "27",name:'KING OF KING',strikedAmout: "₹ 202", price: "101", total: "0", image: "../../assets/images/ordersnow/06_THUNDER SOUND BOMB/img-27.webp"},
      {SLNo: "28",name:'HYDRO BOMB GREEN',strikedAmout: "₹ 142", price: "71", total: "0", image: "../../assets/images/ordersnow/06_THUNDER SOUND BOMB/img-28.jpg"},
    ]},
    {categoryName:"THUNDER -PAPER BOMB",productsList : [
      {SLNo: "29",name:'PAPER BOMB DLX',strikedAmout: "₹ 100", price: "55", total: "0", image: "../../assets/images/ordersnow/07_THUNDER -PAPER BOMB/img-29.jpg"},
      {SLNo: "30",name:'PAPER BOMB ULTRA DLX',strikedAmout: "₹ 218", price: "109", total: "0", image: "../../assets/images/ordersnow/07_THUNDER -PAPER BOMB/img-30.jpg"},
      {SLNo: "31",name:'PAPER BOMB - SMOKE',strikedAmout: "₹ 154", price: "77", total: "0", image: "../../assets/images/ordersnow/07_THUNDER -PAPER BOMB/img-31.jpg"},
    ]},
    {categoryName:"SUPER SONIC- PENCIL FUNCTION",productsList : [
      {SLNo: "32",name:'NAYAGARA FALLS',strikedAmout: "₹ 260", price: "130", total: "0", image: "../../assets/images/ordersnow/08_SUPER SONIC- PENCIL FUNCTION/img-32.jpg"},
      {SLNo: "33",name:'STAR RAIN',strikedAmout: "₹ 358", price: "179", total: "0", image: "../../assets/images/ordersnow/08_SUPER SONIC- PENCIL FUNCTION/img-32.jpg"},
      {SLNo: "34",name:'POP CORN',strikedAmout: "₹ 320", price: "160", total: "0", image: "../../assets/images/ordersnow/08_SUPER SONIC- PENCIL FUNCTION/img-32.jpg"},
    ]},
    {categoryName:"TWINKLING STAR",productsList : [
      {SLNo: "35",name:'1 1/2" TWINKLING STAR SMALL',strikedAmout: "₹ 54", price: "27", total: "0", image: "../../assets/images/ordersnow/09_TWINKLING STAR/img-35.jpg"},
      {SLNo: "36",name:"4' TWINKLING STAR DLX",strikedAmout: "₹ 162", price: "81", total: "0", image: "../../assets/images/ordersnow/09_TWINKLING STAR/img-36.jpg"},
    ]},
    {categoryName:"BIJILI CRACKERS",productsList : [
      {SLNo: "37",name:'RED BIJILI 50 PCS',strikedAmout: "₹ 42", price: "21", total: "0", image: "../../assets/images/ordersnow/10_BIJILI CRACKERS/img-37.jpg"},
      {SLNo: "38",name:"RED BIJILI 100 PCS",strikedAmout: "₹ 82", price: "41", total: "0", image: "../../assets/images/ordersnow/10_BIJILI CRACKERS/img-38.png"},
      {SLNo: "39",name:"STRIPED BIJILI 100 PCS",strikedAmout: "₹ 86", price: "43", total: "0", image: "../../assets/images/ordersnow/10_BIJILI CRACKERS/img-39.jpg"},
    ]},
    {categoryName:"RED CHAIN CRACKERS",productsList : [
      {SLNo: "40",name:'100 WALA',strikedAmout: "₹ 98", price: "49", total: "0", image: "../../assets/images/ordersnow/11_RED CHAIN CRACKERS/img-40.jpg"},
      {SLNo: "41",name:"300 WALA",strikedAmout: "₹ 206", price: "103", total: "0", image: "../../assets/images/ordersnow/11_RED CHAIN CRACKERS/img-41.jpg"},
      {SLNo: "42",name:"600 WALA",strikedAmout: "₹ 266", price: "133", total: "0", image: "../../assets/images/ordersnow/11_RED CHAIN CRACKERS/img-42.jpg"},
      {SLNo: "43",name:"1000 WALA",strikedAmout: "₹ 346", price: "173", total: "0", image: "../../assets/images/ordersnow/11_RED CHAIN CRACKERS/img-43.jpg"},
      {SLNo: "44",name:"2000 WALA",strikedAmout: "₹ 638", price: "319", total: "0", image: "../../assets/images/ordersnow/11_RED CHAIN CRACKERS/img-44.jpg"},
      {SLNo: "45",name:"5000 WALA",strikedAmout: "₹ 1498", price: "749", total: "0", image: "../../assets/images/ordersnow/11_RED CHAIN CRACKERS/img-45.jpg"},
      {SLNo: "46",name:"10000 WALA",strikedAmout: "₹ 2998", price: "149", total: "0", image: "../../assets/images/ordersnow/11_RED CHAIN CRACKERS/img-46.jpg"},
    ]},
    {categoryName:"MEGA FOUNTAINS",productsList : [
      {SLNo: "47",name:'TRI COLOUR',strikedAmout: "₹ 578", price: "289", total: "0", image: "../../assets/images/ordersnow/12_MEGA FOUNTAINS/img-47.jpg"},
      {SLNo: "48",name:"WONDER LA POTS",strikedAmout: "₹ 638", price: "319", total: "0", image: "../../assets/images/ordersnow/12_MEGA FOUNTAINS/img-48.jpg"},
      {SLNo: "49",name:"TIN BEER",strikedAmout: "₹ 294", price: "147", total: "0", image: "../../assets/images/ordersnow/12_MEGA FOUNTAINS/img-49.webp"},
      {SLNo: "50",name:"TWIX",strikedAmout: "₹ 318", price: "159", total: "0", image: "../../assets/images/ordersnow/12_MEGA FOUNTAINS/img-50.jpg"},
      {SLNo: "51",name:"SING POP",strikedAmout: "₹ 334", price: "167", total: "0", image: "../../assets/images/ordersnow/12_MEGA FOUNTAINS/img-51.png"},
      {SLNo: "52",name:"FOX STAR",strikedAmout: "₹ 258", price: "129", total: "0", image: "../../assets/images/ordersnow/12_MEGA FOUNTAINS/img-52.jpg"},
      {SLNo: "53",name:"O YOLO SUPER DLX (2 Pcs)",strikedAmout: "₹ 318", price: "159", total: "0", image: "../../assets/images/ordersnow/12_MEGA FOUNTAINS/img-53.jpg"},
      {SLNo: "54",name:"MONEY BANK",strikedAmout: "₹ 438", price: "219", total: "0", image: "../../assets/images/ordersnow/12_MEGA FOUNTAINS/img-54.jpg"},
      {SLNo: "55",name:"4 X 4 WHEEL (WELL LOTUS)",strikedAmout: "₹ 358", price: "179", total: "0", image: "../../assets/images/ordersnow/12_MEGA FOUNTAINS/img-54.jpg"},
    ]},
    {categoryName:"NANO FOUNTAINS",productsList : [
      {SLNo: "56",name:'POGO RED',strikedAmout: "₹ 70", price: "35", total: "0", image: "../../assets/images/ordersnow/13_NANO FOUNTAINS/img-56.jpg"},
      {SLNo: "57",name:"POGO GREEN",strikedAmout: "₹ 70", price: "35", total: "0", image: "../../assets/images/ordersnow/13_NANO FOUNTAINS/img-56.jpg"},
      {SLNo: "58",name:"POGO WHITE",strikedAmout: "₹ 70", price: "35", total: "0", image: "../../assets/images/ordersnow/13_NANO FOUNTAINS/img-56.jpg"},
      {SLNo: "59",name:"POGO YELLOW",strikedAmout: "₹ 70", price: "35", total: "0", image: "../../assets/images/ordersnow/13_NANO FOUNTAINS/img-56.jpg"},
      {SLNo: "60",name:"POGO SILVER",strikedAmout: "₹ 70", price: "35", total: "0", image: "../../assets/images/ordersnow/13_NANO FOUNTAINS/img-56.jpg"}
    ]	},
    {categoryName:"WONDER SPECIAL NOVELTIES",productsList : [
      {SLNo: "61",name:'GOLDEN GLOBE',strikedAmout: "₹ 206", price: "103", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-61.webp"},
      {SLNo: "62",name:"COLOUR RAIN",strikedAmout: "₹ 206", price: "103", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-62.webp"},
      {SLNo: "63",name:"PEACOCK FEATHER",strikedAmout: "₹ 218", price: "109", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-63.jpg"},
      {SLNo: "64",name:"LOTUS",strikedAmout: "₹ 258", price: "129", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-64.png"},
      {SLNo: "65",name:"H2O FALLS",strikedAmout: "₹ 318", price: "159", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-65.jpg"},
	    {SLNo: "66",name:'MANCHATTI (Flower Pot Function)',strikedAmout: "₹ 362", price: "181", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-66.jpg"},
      {SLNo: "67",name:"MAGIC PEACOCK",strikedAmout: "₹ 361", price: "181", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-67.webp"},
      {SLNo: "68",name:"FOG/SMOKE",strikedAmout: "₹ 382", price: "191", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-68.png"},
      {SLNo: "69",name:"SIREN",strikedAmout: "₹ 326", price: "163", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-69.jpg"},
      {SLNo: "70",name:"TOM & JERRY",strikedAmout: "₹ 118", price: "59", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-70.webp"},
	    {SLNo: "71",name:'BUTTERFLY',strikedAmout: "₹ 166", price: "83", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-71.jpg"},
      {SLNo: "72",name:"PHOTO FLASH",strikedAmout: "₹ 198", price: "99", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-72.webp"},
      {SLNo: "73",name:"BAMBARA",strikedAmout: "₹ 198", price: "99", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-73.jpg"},
      {SLNo: "74",name:"HELICOPTER",strikedAmout: "₹ 202", price: "101", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-74.jpg"},
      {SLNo: "75",name:"DRONE",strikedAmout: "₹ 334", price: "167", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-75.jpg"},
	    {SLNo: "76",name:'ELECTRIC STONE',strikedAmout: "₹ 38", price: "19", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-76.jpg"},
      {SLNo: "77",name:"JEE BOOMBAA",strikedAmout: "₹ 34", price: "17", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-76.jpg"},
      {SLNo: "78",name:"MAGIC POPs",strikedAmout: "₹ 38", price: "19", total: "0", image: "../../assets/images/ordersnow/14_WONDER SPECIAL NOVELTIES/img-76.jpg"},
    ]},
    {categoryName:"FANCY NOVELTIES",productsList: [
      {SLNo: "79",name:'1" CHOTTA FANCY',strikedAmout: "₹ 70", price: "35", total: "0", image: "../../assets/images/ordersnow/15_FANCY NOVELTIES/img-79.webp"},
      {SLNo: "80",name:'1 1/2" G3 -3 Pcs',strikedAmout: "₹ 438", price: "219", total: "0", image: "../../assets/images/ordersnow/15_FANCY NOVELTIES/img-80.webp"},
      {SLNo: "81",name:'2" ULTRA HEIGHT',strikedAmout: "₹ 238", price: "119", total: "0", image: "../../assets/images/ordersnow/15_FANCY NOVELTIES/img-81.webp"},
      {SLNo: "82",name:'2" SUPER HEIGHT',strikedAmout: "₹ 206", price: "103", total: "0", image: "../../assets/images/ordersnow/15_FANCY NOVELTIES/img-82.webp"},
      {SLNo: "83",name:'2" PIPE -3 Pcs',strikedAmout: "₹ 498", price: "249", total: "0", image: "../../assets/images/ordersnow/15_FANCY NOVELTIES/img-83.webp"},
	    {SLNo: "84",name:'2" ROCK STAR -3 Pcs (Flower Pot Function)',strikedAmout: "₹ 558", price: "279", total: "0", image: "../../assets/images/ordersnow/15_FANCY NOVELTIES/img-84.webp"},
      {SLNo: "85",name:'3" PIPE',strikedAmout: "₹ 638", price: "319", total: "0", image: "../../assets/images/ordersnow/15_FANCY NOVELTIES/img-85.webp"},
      {SLNo: "86",name:'3 1/2" PIPE',strikedAmout: "₹ 678", price: "339", total: "0", image: "../../assets/images/ordersnow/15_FANCY NOVELTIES/img-86.webp"},
      {SLNo: "87",name:'3 1/2" NAYAGARA FALLS',strikedAmout: "₹ 722", price: "361", total: "0", image: "../../assets/images/ordersnow/15_FANCY NOVELTIES/img-87.webp"},
      {SLNo: "88",name:'3 1/2" DOUBLE BALL',strikedAmout: "₹ 798", price: "399", total: "0", image: "../../assets/images/ordersnow/15_FANCY NOVELTIES/img-88.webp"},
	    {SLNo: "89",name:'3 1/2" 7 STEPS',strikedAmout: "₹ 738", price: "369", total: "0", image: "../../assets/images/ordersnow/15_FANCY NOVELTIES/img-89.webp"},
      {SLNo: "90",name:'4" PIPE',strikedAmout: "₹ 806", price: "403", total: "0", image: "../../assets/images/ordersnow/15_FANCY NOVELTIES/img-90.jpg"}
    ]},
    {categoryName:"FABULOUS MULTI SHOTS",productsList: [
      {SLNo: "91",name:'7 SHOTS',strikedAmout: "₹ 158", price: "79", total: "0", image: "../../assets/images/ordersnow/16_FABULOUS MULTI SHOTS/img-91.jpg"},
      {SLNo: "92",name:'12 SHOTS CRACKLING',strikedAmout: "₹ 338", price: "169", total: "0", image: "../../assets/images/ordersnow/16_FABULOUS MULTI SHOTS/img-92.jpg"},
      {SLNo: "93",name:'15 SHOTS',strikedAmout: "₹ 558", price: "279", total: "0", image: "../../assets/images/ordersnow/16_FABULOUS MULTI SHOTS/img-93.webp"},
	    {SLNo: "94",name:'30 SHOTS',strikedAmout: "₹ 838", price: "419", total: "0", image: "../../assets/images/ordersnow/16_FABULOUS MULTI SHOTS/img-94.jpg"},
      {SLNo: "95",name:'60 SHOTS',strikedAmout: "₹ 1498", price: "749", total: "0", image: "../../assets/images/ordersnow/16_FABULOUS MULTI SHOTS/img-95.jpg"},
      {SLNo: "96",name:'120 SHOTS',strikedAmout: "₹ 3398", price: "1699", total: "0", image: "../../assets/images/ordersnow/16_FABULOUS MULTI SHOTS/img-96.jpg"},
      {SLNo: "97",name:'240 SHOTS',strikedAmout: "₹ 6798", price: "3399", total: "0", image: "../../assets/images/ordersnow/16_FABULOUS MULTI SHOTS/img-97.jpg"},
      {SLNo: "98",name:'30 SHOTS PEACOCK',strikedAmout: "₹ 838", price: "419", total: "0", image: "../../assets/images/ordersnow/16_FABULOUS MULTI SHOTS/img-98.jpg"},
    ]},
    {categoryName:"WONDERFUL SPARKLERS",productsList: [
      {SLNo: "99",name:'7 Cm Electric Sparkler',strikedAmout: "₹ 26", price: "13", total: "0", image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-99.webp"},
      {SLNo: "100",name:'7 Cm Color Sparkler',strikedAmout: "₹ 34", price: "17", total: "0", image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-100.webp"},
	    {SLNo: "101",name:'7 Cm Green Sparkler',strikedAmout: "₹ 38", price: "19", total: "0", image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-101.webp"},
      {SLNo: "102",name:'7 Cm Red Sparkler',strikedAmout: "₹ 46", price: "23", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-102.webp"},
      {SLNo: "103",name:'10 Cm Electric Sparkler',strikedAmout: "₹ 50", price: "25", total: "0", image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-103.webp"},
      {SLNo: "104",name:'10 Cm Color Sparkler',strikedAmout: "₹ 58", price: "29", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-104.webp"},
      {SLNo: "105",name:'10 Cm Green Sparkler',strikedAmout: "₹ 66", price: "33", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-105.webp"},
	    {SLNo: "106",name:'10 Cm Red Sparkler',strikedAmout: "₹ 74", price: "37", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-106.webp"},
      {SLNo: "107",name:'12 Cm Electric Sparkler',strikedAmout: "₹ 66", price: "33", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-107.webp"},
      {SLNo: "108",name:'12 Cm Color Sparkler',strikedAmout: "₹ 74", price: "37", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-108.webp"},
      {SLNo: "109",name:'12 Cm Green Sparkler',strikedAmout: "₹ 86", price: "43", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-109.webp"},
	    {SLNo: "110",name:'12 Cm Red Sparkler',strikedAmout: "₹ 94", price: "47", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-110.webp"},
	    {SLNo: "111",name:'15 Cm Electric Sparkler',strikedAmout: "₹ 106", price: "53", total: "0", image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-111.webp"},
      {SLNo: "112",name:'15 Cm Colour Sparkler',strikedAmout: "₹ 114", price: "57", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-112.webp"},
      {SLNo: "113",name:'15 Cm Green Sparkler',strikedAmout: "₹ 122", price: "61", total: "0", image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-113.webp"},
      {SLNo: "114",name:'15 Cm Red Sparkler',strikedAmout: "₹ 126", price: "63", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-114.webp"},
      {SLNo: "115",name:'30 Cm Electric Sparkler',strikedAmout: "₹ 106", price: "53", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-115.webp"},
	    {SLNo: "116",name:'30 Cm Colour Sparkler',strikedAmout: "₹ 114", price: "57", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-116.webp"},
      {SLNo: "117",name:'30 Cm Green Sparkler',strikedAmout: "₹ 122", price: "61", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-117.webp"},
      {SLNo: "118",name:'30 Cm Red Sparkler',strikedAmout: "₹ 126", price: "63", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-118.webp"},
      {SLNo: "119",name:'50 Cm Electric Sparkler',strikedAmout: "₹ 414", price: "207", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-119.webp"},
	    {SLNo: "120",name:'50 Cm Colour Sparkler',strikedAmout: "₹ 434", price: "217", total: "0",  image: "../../assets/images/ordersnow/17_WONDERFUL SPARKLERS/img-120.webp"}
    ]},
    {categoryName:"MATCHES",productsList: [
      {SLNo: "121",name:'POKE MON',strikedAmout: "₹ 318", price: "159", total: "0",  image: "../../assets/images/ordersnow/18_MATCHES/img-121.jpg"},
      {SLNo: "122",name:'SUPER DELUXE',strikedAmout: "₹ 158", price: "79", total: "0",  image: "../../assets/images/ordersnow/18_MATCHES/img-122.jpg"}
    ]},
    {categoryName:"ROLL CAP",productsList: [
      {SLNo: "123",name:'ROLL CAP',strikedAmout: "₹ 174", price: "87", total: "0",  image: "../../assets/images/ordersnow/19_ROLL CAP/img-123.png"},
    ]},
    {categoryName:"GIFT BOXES  ",productsList: [
      {SLNo: "124",name:'20 ITEMS',strikedAmout: "₹ 500", price: "250", total: "0",  image: "../../assets/images/ordersnow/20_GIFT BOXES/img-124.jpg"},
      {SLNo: "125",name:'25 ITEMS',strikedAmout: "₹ 640", price: "320", total: "0",  image: "../../assets/images/ordersnow/20_GIFT BOXES/img-124.jpg"},
	    {SLNo: "126",name:'30 ITEMS',strikedAmout: "₹ 860", price: "430", total: "0",  image: "../../assets/images/ordersnow/20_GIFT BOXES/img-124.jpg"},
      {SLNo: "127",name:'35 ITEMS',strikedAmout: "₹ 960", price: "480", total: "0",  image: "../../assets/images/ordersnow/20_GIFT BOXES/img-124.jpg"},
      {SLNo: "128",name:'40 ITEMS',strikedAmout: "₹ 1160", price: "580", total: "0",  image: "../../assets/images/ordersnow/20_GIFT BOXES/img-124.jpg"},
      {SLNo: "129",name:'45 ITEMS',strikedAmout: "₹ 1280", price: "640", total: "0",  image: "../../assets/images/ordersnow/20_GIFT BOXES/img-124.jpg"},
	    {SLNo: "130",name:'50 ITEMS',strikedAmout: "₹ 1700", price: "850", total: "0",  image: "../../assets/images/ordersnow/20_GIFT BOXES/img-124.jpg"},
	    {SLNo: "131",name:'VVIP GIFT BOX -40 ITEMS',strikedAmout: "₹ 1600", price: "800", total: "0", image: "../../assets/images/ordersnow/20_GIFT BOXES/img-124.jpg"},
      
    ]},
    {categoryName:"SPECIAL PACKAGE IN BROWN BOX - NO DISCOUNT ", productsList:[
      {SLNo: "132",name:'FAMILY PACKAGE - 41 ITEMS      ',strikedAmout: "₹ 1000", price: "5000", total: "0", image: "../../assets/images/ordersnow/21_SPECIAL PACKAGE IN BROWN BOX - NO DISCOUNT/img-132.jpg"},
      {SLNo: "133",name:'PULLINKO / YOUNGSTER PACKAGE -21 ITEMS',strikedAmout: "₹ 10000", price: "5000", total: "0", image: "../../assets/images/ordersnow/21_SPECIAL PACKAGE IN BROWN BOX - NO DISCOUNT/img-133.jpg"},
    ]},
  ]

  


  constructor() {}

  ngOnInit() {
    // console.log(this.categoryList);
    this.quantity = 'Qty';
  }

  increment(selectedItem:any, count = 1) {
    console.log('Selected Item',selectedItem);
    this.state += count;
    if(this.state > this.max) this.state = this.max;
    console.log('Increment Value is', this.state);
    this.quantity = this.state;
    // selectedItem.total = this.state * selectedItem.price;
    console.log('Selected Item Id', selectedItem.id);
    console.log('Selected Item Category', selectedItem.categoryName);
    console.log('Total is',selectedItem.total);
    console.log('Price is',selectedItem.price);
    selectedItem.total = this.state * selectedItem.price;
    console.log(selectedItem.total);
    let obj = {
      "id": "001",
      "categoryName": "SINGLE SOUND CRACKERS",
      "SLNo": "1",
      "name": "4 \" LAKSHMI",
      "strikedAmout": "₹ 42",
      "price": "21",
      "total": selectedItem.total,
      "image": "../../assets/images/ordersnow/01_SINGLE SOUND CRACKERS/img-01.jpg"
    }

    console.log('Updated Object', obj)
    let findObj = this.categoryList.find(o => o.categoryName === selectedItem.categoryName);
    console.log('Find Object',findObj);
 
    //categoryName:"SINGLE SOUND CRACKERS",
    return this.state;
  }

  decremnt(selectedItem:any,  count = 1) {
    this.min = 0;
    this.state -= count;
    if(this.state < this.min) this.state = this.min;
    console.log('Decrement Value is', this.state);
    if(this.state == 0) {
      this.quantity = 'Qty';
    }
    else {
        this.quantity = this.state;
    }    
    return this.state;
  }



  
}
