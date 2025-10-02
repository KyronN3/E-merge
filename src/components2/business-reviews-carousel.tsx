import { Card, CardContent } from "@/components2/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components2/ui/avatar"

const reviewsData = [
  {
    id: 1,
    name: "John Doe",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face",
    rating: 4.0,
    review: "The Seaside Grand Resort had stunning beachfront views, spacious clean rooms, and friendly staff that made my stay relaxing and enjoyable. The only drawbacks were spotty Wi-Fi and slightly overpriced food, but overall it's a great choice for a beach getaway."
  },
  {
    id: 2,
    name: "Jane Smith",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face",
    rating: 4.5,
    review: "Amazing experience at this hotel! The service was exceptional and the rooms were immaculate. The breakfast buffet had great variety and the location was perfect for exploring the city. Highly recommend!"
  },
  {
    id: 3,
    name: "Mike Johnson",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face",
    rating: 3.8,
    review: "Good value for money. The hotel is well-maintained and the staff is helpful. The pool area is nice and clean. Only complaint is that the air conditioning could be better in the rooms."
  },
  {
    id: 4,
    name: "Sarah Wilson",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face",
    rating: 4.2,
    review: "Lovely stay with beautiful ocean views from our balcony. The spa services were relaxing and the restaurant had delicious local cuisine. Would definitely return for another vacation."
  },
  {
    id: 5,
    name: "David Brown",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face",
    rating: 4.7,
    review: "Outstanding hotel with top-notch amenities. The concierge was incredibly helpful with recommendations. The fitness center is well-equipped and the business center met all my needs."
  }
]

export function BusinessReviewsCarousel() {
  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`text-sm ${
              star <= rating ? "text-yellow-400" : "text-gray-600"
            }`}
          >
            ★
          </span>
        ))}
      </div>
    )
  }

  return (
    <Card className="@container/card">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Reviews</h3>
        </div>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {reviewsData.map((review) => (
            <Card key={review.id} className="border">
              <CardContent className="p-4">
                <div className="flex items-start gap-3 mb-3">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={review.avatar} alt={review.name} />
                    <AvatarFallback className="text-xs">
                      {review.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium truncate">
                        {review.name}
                      </p>
                      <div className="flex items-center gap-2 ml-2">
                        <span className="text-sm font-medium">
                          {review.rating}
                        </span>
                        {renderStars(review.rating)}
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {review.review}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
