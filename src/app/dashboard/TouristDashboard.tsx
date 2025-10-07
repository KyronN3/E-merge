import { Card, CardContent } from "@/components3/ui/card"
import { Badge } from "@/components3/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components3/ui/select"
import { Star } from "lucide-react"
import { useEffect, useMemo, useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components3/ui/carousel"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components3/ui/sheet"

type Place = {
  id: number
  city: string
  category: "Hotels" | "Coffee Shops" | "Parks"
  name: string
  description: string
  image: string
  rating: string
  status: string
}

export default function TouristDashboard() {
  // Places data: 2 cities × 3 categories × 3 items = 18 cards
  const places: Place[] = useMemo(() => ([
    // Tagum City - Hotels
    { id: 1, city: "Tagum City", category: "Hotels", name: "Big 8 Corporate Hotel", description: "Business-friendly hotel with modern amenities.", image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=400&h=300&fit=crop&crop=center", rating: "4.8", status: "Open" },
    { id: 2, city: "Tagum City", category: "Hotels", name: "Banana Beach Resort", description: "Relaxed beachfront stay near plantations.", image: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=400&h=300&fit=crop&crop=center", rating: "4.6", status: "Open" },
    { id: 3, city: "Tagum City", category: "Hotels", name: "Molave Hotel", description: "Cozy hotel close to city center.", image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=400&h=300&fit=crop&crop=center", rating: "4.4", status: "Open" },
    // Tagum City - Coffee Shops
    { id: 4, city: "Tagum City", category: "Coffee Shops", name: "Bean & Branch", description: "Specialty brews and quiet corners.", image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?w=400&h=300&fit=crop&crop=center", rating: "4.7", status: "Open" },
    { id: 5, city: "Tagum City", category: "Coffee Shops", name: "Tagum Roasters", description: "Locally roasted beans and pastries.", image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop&crop=center", rating: "4.5", status: "Open" },
    { id: 6, city: "Tagum City", category: "Coffee Shops", name: "Corner Cup Café", description: "Cozy nook for coffee and chats.", image: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=400&h=300&fit=crop&crop=center", rating: "4.3", status: "Open" },
    // Tagum City - Parks
    { id: 7, city: "Tagum City", category: "Parks", name: "Energy Park", description: "Green spaces with biking trails.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop&crop=center", rating: "4.6", status: "Open" },
    { id: 8, city: "Tagum City", category: "Parks", name: "Freedom Park", description: "City park for walks and picnics.", image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=400&h=300&fit=crop&crop=center", rating: "4.2", status: "Open" },
    { id: 9, city: "Tagum City", category: "Parks", name: "Christ the King Grounds", description: "Scenic grounds with landmark statue.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop&crop=center", rating: "4.4", status: "Open" },
    
    // Davao City - Hotels
    { id: 10, city: "Davao City", category: "Hotels", name: "Marco Polo Davao", description: "Iconic hotel in downtown Davao.", image: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=300&fit=crop&crop=center", rating: "4.7", status: "Open" },
    { id: 11, city: "Davao City", category: "Hotels", name: "Waterfront Insular", description: "Seaside hotel with sunset views.", image: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop&crop=center", rating: "4.6", status: "Open" },
    { id: 12, city: "Davao City", category: "Hotels", name: "Seda Abreeza", description: "Modern hotel beside the mall.", image: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=400&h=300&fit=crop&crop=center", rating: "4.5", status: "Open" },
    // Davao City - Coffee Shops
    { id: 13, city: "Davao City", category: "Coffee Shops", name: "Blue Bean", description: "Minimalist café with pour-overs.", image: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop&crop=center", rating: "4.6", status: "Open" },
    { id: 14, city: "Davao City", category: "Coffee Shops", name: "Matina Grounds", description: "Neighborhood café and bakes.", image: "https://images.unsplash.com/photo-1453614512568-c4024d13c247?w=400&h=300&fit=crop&crop=center", rating: "4.4", status: "Open" },
    { id: 15, city: "Davao City", category: "Coffee Shops", name: "Roxas Nightcup", description: "Late-night coffee and bites.", image: "https://images.unsplash.com/photo-1511920170033-f8396924c348?w=400&h=300&fit=crop&crop=center", rating: "4.3", status: "Open" },
    // Davao City - Parks
    { id: 16, city: "Davao City", category: "Parks", name: "People's Park", description: "Public art, fountains, and paths.", image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&crop=center", rating: "4.5", status: "Open" },
    { id: 17, city: "Davao City", category: "Parks", name: "Eden Nature Park", description: "Mountain resort with nature trails.", image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&h=300&fit=crop&crop=center", rating: "4.6", status: "Open" },
    { id: 18, city: "Davao City", category: "Parks", name: "Crocodile Park Grounds", description: "Family park with attractions.", image: "https://images.unsplash.com/photo-1546026423-cc4642628d2b?w=400&h=300&fit=crop&crop=center", rating: "4.2", status: "Open" },
  ]), [])

  const [selectedCity, setSelectedCity] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [openDetailsId, setOpenDetailsId] = useState<number | null>(null)
  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null)
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [slideshowItems, setSlideshowItems] = useState<Place[]>([])

  const cityPlaces = useMemo(() => {
    if (!selectedCity) return places
    return places.filter((p) => p.city === selectedCity)
  }, [places, selectedCity])

  const filteredPlaces = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    return places.filter((p) => {
      const cityOk = selectedCity ? p.city === selectedCity : true
      const categoryOk = selectedCategory && selectedCategory !== "ALL" ? p.category === selectedCategory : true
      const textOk = q ? (p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) : true
      return cityOk && categoryOk && textOk
    })
  }, [places, selectedCity, selectedCategory, searchQuery])

  // Initialize slideshow items only when city changes (not on search/category)
  useEffect(() => {
    const list = cityPlaces
    const shuffled = [...list].sort(() => Math.random() - 0.5)
    setSlideshowItems(shuffled.slice(0, 5))
  }, [cityPlaces])

  // Update current slide when carousel changes
  useEffect(() => {
    if (!carouselApi) return
    const onSelect = () => setCurrentSlide(carouselApi.selectedScrollSnap())
    onSelect()
    carouselApi.on("select", onSelect)
    return () => {
      carouselApi.off("select", onSelect)
    }
  }, [carouselApi])

  // Autoplay every 3s (always scrollNext to keep consistent animation with loop)
  useEffect(() => {
    if (!carouselApi) return
    const id = setInterval(() => {
      if (!carouselApi) return
      carouselApi.scrollNext()
    }, 3000)
    return () => clearInterval(id)
  }, [carouselApi])

  const highestReviews: Record<number, { title: string; body: string; rating: number; author: string }> = useMemo(() => {
    const map: Record<number, { title: string; body: string; rating: number; author: string }> = {}
    for (const p of places) {
      map[p.id] = {
        title: "Amazing Experience!",
        body: "Loved the ambiance and service. Will definitely come back.",
        rating: 5,
        author: "Verified Visitor",
      }
    }
    return map
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative">
      {/* subtle background decorations */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.3),transparent_40%)]" />
      </div>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-4">
          <div className="flex items-center justify-center text-center">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
                Tour GO
              </h1>
              <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
                Your quick gateway to discovering both popular and hidden gems loved by tourists and locals alike!
              </p>
            </div>
          </div>
        </div>

        {/* Slideshow */}
        <div className="mb-6 relative mx-auto max-w-5xl">
          <Carousel setApi={setCarouselApi} opts={{ loop: true, align: "start" }}>
            <CarouselContent className="ml-0">
              {slideshowItems.map((item) => (
                <CarouselItem key={item.id} className="pl-0 basis-full">
                  <div className="relative h-56 sm:h-64 md:h-72 lg:h-80 w-full overflow-hidden rounded-md border shadow-sm bg-white/40 ring-1 ring-black/5 dark:bg-white/10">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    <div className="absolute top-2 left-2">
                      <Badge variant="outline" className="bg-white/90 text-gray-900 border-gray-300 shadow-xs">
                        {item.category}
                      </Badge>
                    </div>
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/60 to-transparent">
                      <div className="text-white">
                        <h3 className="text-base font-semibold line-clamp-1">{item.name}</h3>
                        <p className="text-xs sm:text-sm opacity-90 line-clamp-2">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-10" />
            <CarouselNext className="-right-10" />
          </Carousel>
          {/* Pagination dots */}
          <div className="absolute inset-x-0 -bottom-2 flex items-center justify-center gap-2">
            {slideshowItems.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => carouselApi?.scrollTo(i)}
                className={`h-2 w-2 rounded-full transition-all ${currentSlide === i ? 'bg-white w-4' : 'bg-white/60'}`}
              />
            ))}
          </div>
        </div>

        {/* Filters + Search */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700 dark:text-gray-300">Select City</span>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger className="min-w-[160px]"><SelectValue placeholder="Choose city" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="Tagum City">Tagum City</SelectItem>
                <SelectItem value="Davao City">Davao City</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700 dark:text-gray-300">Select Category</span>
            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="min-w-[180px]"><SelectValue placeholder="Choose category" /></SelectTrigger>
                <SelectContent>
                  <SelectItem value="ALL">ALL</SelectItem>
                  <SelectItem value="Coffee Shops">Coffee Shops</SelectItem>
                  <SelectItem value="Hotels">Hotels</SelectItem>
                  <SelectItem value="Parks">Parks</SelectItem>
                </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-700 dark:text-gray-300">Search</span>
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="What are you looking for?"
              className="h-9 w-[220px] rounded-md border bg-white/70 px-3 text-sm shadow-xs outline-none focus:ring-[3px] focus:ring-ring/50 focus:border-ring dark:bg-input/30"
            />
          </div>
        </div>

        {/* Scrollable Grid Container */}
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPlaces.map((establishment) => (
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
                      {establishment.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 line-clamp-1">
                    {establishment.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                    {establishment.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-semibold text-gray-900 dark:text-white">
                        {establishment.rating}
                      </span>
                    </div>
                    <button onClick={() => setOpenDetailsId(establishment.id)} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 text-sm font-medium transition-colors">
                      View Details
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Details Modal */}
        <Sheet open={openDetailsId !== null} onOpenChange={(open) => !open && setOpenDetailsId(null)}>
          <SheetContent side="right">
            {openDetailsId && (
              <div className="space-y-4">
                <SheetHeader>
                  <SheetTitle>Highest Review</SheetTitle>
                  <SheetDescription>What visitors loved most about this place</SheetDescription>
                </SheetHeader>
                {(() => {
                  const place = places.find(p => p.id === openDetailsId)
                  if (!place) return null
                  const review = highestReviews[place.id]
                  return (
                    <div className="p-4">
                      <div className="mb-3">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{place.name}</h3>
                        <div className="mt-1 inline-flex items-center gap-1 text-yellow-500">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <div className="rounded-md border bg-background p-3">
                        <p className="text-sm font-medium text-gray-900 dark:text-white">{review.title}</p>
                        <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">{review.body}</p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">— {review.author}</p>
                      </div>
                    </div>
                  )
                })()}
              </div>
            )}
          </SheetContent>
        </Sheet>
      </div>
    </div>
  )
}
