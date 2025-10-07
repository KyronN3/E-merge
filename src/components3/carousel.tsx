import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  // Define carousel items with places, locations, and images
  const carouselItems = [
    { 
      id: 1, 
      name: "Big 8 Corporate Hotel", 
      location: "National Highway, Tagum, 8100 Davao del Norte",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center"
    },
    { 
      id: 2, 
      name: "Marco Polo Hotel", 
      location: "C.M. Recto Street, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center"
    },
    { 
      id: 3, 
      name: "Waterfront Insular Hotel", 
      location: "Lanang, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center"
    },
    { 
      id: 4, 
      name: "Seda Abreeza Hotel", 
      location: "J.P. Laurel Avenue, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop&crop=center"
    },
    { 
      id: 5, 
      name: "Park Inn by Radisson", 
      location: "J.P. Laurel Avenue, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center"
    },
    { 
      id: 6, 
      name: "Apo View Hotel", 
      location: "J.P. Laurel Avenue, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop&crop=center"
    },
    { 
      id: 7, 
      name: "Royal Mandaya Hotel", 
      location: "Palma Gil Street, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center"
    },
    { 
      id: 8, 
      name: "The Pinnacle Hotel", 
      location: "Sta. Ana Avenue, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop&crop=center"
    },
    { 
      id: 9, 
      name: "Davao City Restaurant", 
      location: "Roxas Avenue, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center"
    },
    { 
      id: 10, 
      name: "SM City Davao Mall", 
      location: "Quimpo Boulevard, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center"
    }
  ]

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <Carousel 
        className="w-full col-span-full"
        opts={{
          align: "start",
          loop: false,
          skipSnaps: false,
          dragFree: true,
          containScroll: "trimSnaps",
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {carouselItems.map((item) => (
            <CarouselItem key={item.id} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <div className="p-1">
                <Card className="@container/card h-auto min-h-[300px] overflow-hidden">
                  <div className="relative h-48 w-full">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardContent className="p-4 bg-white dark:bg-gray-900">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.location}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}
