import { Card, CardContent } from "@/components3/ui/card"
import { Badge } from "@/components3/ui/badge"
import { Star } from "lucide-react"

export default function TouristDashboard() {
  // Combined establishment data with images, locations, and ratings
  const establishments = [
    { 
      id: 1, 
      name: "Big 8 Corporate Hotel", 
      location: "National Highway, Tagum, 8100 Davao del Norte",
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center",
      rating: "4.8",
      type: "Hotel",
      status: "Open"
    },
    { 
      id: 2, 
      name: "Marco Polo Hotel", 
      location: "C.M. Recto Street, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center",
      rating: "4.7",
      type: "Hotel",
      status: "Open"
    },
    { 
      id: 3, 
      name: "Waterfront Insular Hotel", 
      location: "Lanang, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center",
      rating: "4.6",
      type: "Hotel",
      status: "Open"
    },
    { 
      id: 4, 
      name: "Seda Abreeza Hotel", 
      location: "J.P. Laurel Avenue, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop&crop=center",
      rating: "4.5",
      type: "Hotel",
      status: "Open"
    },
    { 
      id: 5, 
      name: "Park Inn by Radisson", 
      location: "J.P. Laurel Avenue, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=300&fit=crop&crop=center",
      rating: "4.4",
      type: "Hotel",
      status: "Open"
    },
    { 
      id: 6, 
      name: "Apo View Hotel", 
      location: "J.P. Laurel Avenue, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop&crop=center",
      rating: "4.3",
      type: "Hotel",
      status: "Open"
    },
    { 
      id: 7, 
      name: "Royal Mandaya Hotel", 
      location: "Palma Gil Street, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center",
      rating: "4.2",
      type: "Hotel",
      status: "Open"
    },
    { 
      id: 8, 
      name: "The Pinnacle Hotel", 
      location: "Sta. Ana Avenue, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop&crop=center",
      rating: "4.1",
      type: "Hotel",
      status: "Open"
    },
    { 
      id: 9, 
      name: "Davao City Restaurant", 
      location: "Roxas Avenue, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=400&h=300&fit=crop&crop=center",
      rating: "4.0",
      type: "Restaurant",
      status: "Open"
    },
    { 
      id: 10, 
      name: "SM City Davao Mall", 
      location: "Quimpo Boulevard, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop&crop=center",
      rating: "3.9",
      type: "Shopping Mall",
      status: "Open"
    },
    // Additional establishments to fill the 4x4 grid
    { 
      id: 11, 
      name: "Eden Nature Park", 
      location: "Bayabas, Toril, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center",
      rating: "4.6",
      type: "Nature Park",
      status: "Open"
    },
    { 
      id: 12, 
      name: "Philippine Eagle Center", 
      location: "Malagos, Baguio District, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&h=300&fit=crop&crop=center",
      rating: "4.7",
      type: "Wildlife Center",
      status: "Open"
    },
    { 
      id: 13, 
      name: "Crocodile Park", 
      location: "Riverfront Corporate City, Diversion Road, Davao City",
      image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=300&fit=crop&crop=center",
      rating: "4.2",
      type: "Theme Park",
      status: "Open"
    },
    { 
      id: 14, 
      name: "Jack's Ridge Resort", 
      location: "Shrine Hills, Matina, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center",
      rating: "4.4",
      type: "Resort",
      status: "Open"
    },
    { 
      id: 15, 
      name: "Davao Museum", 
      location: "Insular Village, Lanang, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1554907984-15263bfd63bd?w=400&h=300&fit=crop&crop=center",
      rating: "4.1",
      type: "Museum",
      status: "Open"
    },
    { 
      id: 16, 
      name: "People's Park", 
      location: "Palma Gil Street, Davao City, 8000 Davao del Sur",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center",
      rating: "4.0",
      type: "Public Park",
      status: "Open"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Discover Davao
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Explore the best hotels, restaurants, and attractions in Davao City
          </p>
        </div>

        {/* Scrollable Grid Container */}
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {establishments.map((establishment) => (
              <Card key={establishment.id} className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden">
                <div className="relative h-48 w-full overflow-hidden">
                  <img 
                    src={establishment.image} 
                    alt={establishment.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-2 right-2">
                    <Badge variant={establishment.status === "Open" ? "default" : "secondary"} className="bg-white/90 text-gray-900">
                      {establishment.status}
                    </Badge>
                  </div>
                  <div className="absolute top-2 left-2">
                    <Badge variant="outline" className="bg-white/90 text-gray-900 border-gray-300">
                      {establishment.type}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {establishment.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {establishment.location}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {establishment.rating}
                      </span>
                    </div>
                    <button className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
