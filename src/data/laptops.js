const laptops = [

    { id:1, name:"Dell Latitude 3550 Core i5", price:17490000, image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id:2, name:"Dell Latitude 5340 Core i5", price:18490000, image:"https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf" },
    { id:3, name:"Dell Latitude 7440 Core i7", price:25890000, image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },
    { id:4, name:"Dell Latitude 3440 Core i7", price:19490000, image:"https://images.unsplash.com/photo-1587202372775-98986b5c0d70" },

    { id:5, name:"Dell XPS 13 OLED", price:32990000, image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89" },
    { id:6, name:"Dell XPS 15 OLED", price:42990000, image:"https://images.unsplash.com/photo-1593642634367-d91a135587b5" },
    { id:7, name:"Dell Inspiron 15", price:18990000, image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id:8, name:"Dell Precision 5570", price:36490000, image:"https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf" },

    { id:9, name:"Macbook Air M1", price:19990000, image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },
    { id:10, name:"Macbook Air M2", price:26990000, image:"https://images.unsplash.com/photo-1587202372775-98986b5c0d70" },
    { id:11, name:"Macbook Pro M2", price:38990000, image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89" },
    { id:12, name:"Macbook Pro M3", price:45990000, image:"https://images.unsplash.com/photo-1593642634367-d91a135587b5" },

    { id:13, name:"Asus ROG Strix G15", price:27990000, image:"https://images.unsplash.com/photo-1587202372775-98986b5c0d70" },
    { id:14, name:"Asus TUF Gaming F15", price:23990000, image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id:15, name:"Asus Zenbook 14 OLED", price:24990000, image:"https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf" },
    { id:16, name:"Asus Vivobook 15", price:18990000, image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },

    { id:17, name:"HP Pavilion 15", price:18990000, image:"https://images.unsplash.com/photo-1587202372775-98986b5c0d70" },
    { id:18, name:"HP Envy x360", price:24990000, image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89" },
    { id:19, name:"HP Victus Gaming", price:22990000, image:"https://images.unsplash.com/photo-1593642634367-d91a135587b5" },
    { id:20, name:"HP Spectre x360", price:35990000, image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },

    { id:21, name:"Lenovo ThinkPad X1", price:35990000, image:"https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf" },
    { id:22, name:"Lenovo ThinkBook 14", price:19990000, image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },
    { id:23, name:"Lenovo Legion 5 Gaming", price:29990000, image:"https://images.unsplash.com/photo-1587202372775-98986b5c0d70" },
    { id:24, name:"Lenovo Yoga Slim 7", price:21990000, image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89" },

    { id:25, name:"Acer Nitro 5 Gaming", price:22990000, image:"https://images.unsplash.com/photo-1593642634367-d91a135587b5" },
    { id:26, name:"Acer Aspire 7", price:19990000, image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },
    { id:27, name:"Acer Swift 3", price:17990000, image:"https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf" },
    { id:28, name:"Acer Predator Helios", price:38990000, image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },

    { id:29, name:"MSI Katana Gaming", price:28990000, image:"https://images.unsplash.com/photo-1587202372775-98986b5c0d70" },
    { id:30, name:"MSI Raider Gaming", price:48990000, image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89" },
    { id:31, name:"MSI Prestige 14", price:26990000, image:"https://images.unsplash.com/photo-1593642634367-d91a135587b5" },
    { id:32, name:"MSI Modern 14", price:15990000, image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },

    { id:33, name:"Dell Alienware Gaming", price:55990000, image:"https://images.unsplash.com/photo-1587202372775-98986b5c0d70" },
    { id:34, name:"Dell Precision 7770", price:54990000, image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89" },

    { id:35, name:"Lenovo IdeaPad Slim 5", price:16990000, image:"https://images.unsplash.com/photo-1593642634367-d91a135587b5" },
    { id:36, name:"HP EliteBook 840", price:34990000, image:"https://images.unsplash.com/photo-1517336714731-489689fd1ca8" },

    { id:37, name:"Asus ProArt StudioBook", price:45990000, image:"https://images.unsplash.com/photo-1593642702749-b7d2a804fbcf" },
    { id:38, name:"Acer Swift Go OLED", price:21990000, image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853" },

    { id:39, name:"MSI Stealth Studio", price:42990000, image:"https://images.unsplash.com/photo-1587202372775-98986b5c0d70" },
    { id:40, name:"Dell XPS 17", price:48990000, image:"https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89" }

]

export default laptops