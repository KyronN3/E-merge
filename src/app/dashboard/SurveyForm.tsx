import { useState } from "react"

import { Input } from "@/components3/ui/input"
import { Label } from "@/components3/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components3/ui/select"
import { Button } from "@/components3/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components3/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components3/ui/radio-group"

export default function SurveyForm() {
  const [country, setCountry] = useState("")
  const [city, setCity] = useState("")
  const [age, setAge] = useState("")
  const [gender, setGender] = useState("")
  const [satisfaction, setSatisfaction] = useState("")
  const [feedback, setFeedback] = useState("")

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    // In a real app, send this to an API endpoint
    // Keeping a simple log for now
    const payload = { country, city, age, gender, satisfaction, feedback }
    // eslint-disable-next-line no-console
    console.log("Survey submitted:", payload)
    alert("Thank you for your feedback!")
    setCountry("")
    setCity("")
    setAge("")
    setGender("")
    setSatisfaction("")
    setFeedback("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 relative">
      {/* subtle background decorations to match Tourist page */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl dark:bg-blue-900/20" />
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-indigo-200/30 blur-3xl dark:bg-indigo-900/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.3),transparent_40%)] dark:bg-[radial-gradient(circle_at_top_left,rgba(0,0,0,0.3),transparent_40%)]" />
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-2">
            Customer Survey
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            We appreciate your visit! Please take a moment to fill out the survey to help with future development
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="mx-auto max-w-2xl">
          <Card className="bg-white/80 dark:bg-white/10">
            <CardHeader className="border-b">
              <CardTitle className="text-xl">Visitor Feedback</CardTitle>
              <CardDescription>Share quick thoughts to help us improve.</CardDescription>
            </CardHeader>
            <CardContent className="py-6 space-y-6">
          {/* Top fields */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="country" className="text-base font-medium">Country <span className="text-red-500">*</span></Label>
              <Input
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                placeholder="Enter country"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="city" className="text-base font-medium">City <span className="text-red-500">*</span></Label>
              <Input
                id="city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                placeholder="Enter city"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="age" className="text-base font-medium">Age <span className="text-red-500">*</span></Label>
              <Input
                id="age"
                type="number"
                min={0}
                value={age}
                onChange={(e) => setAge(e.target.value)}
                placeholder="Enter age"
                required
              />
            </div>
            <div className="space-y-2">
              <Label className="text-base font-medium">Gender <span className="text-red-500">*</span></Label>
              <Select value={gender} onValueChange={setGender}>
                <SelectTrigger>
                  <SelectValue placeholder="Select gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Female">Female</SelectItem>
                  <SelectItem value="Male">Male</SelectItem>
                  <SelectItem value="Non-binary">Non-binary</SelectItem>
                  <SelectItem value="Prefer not to say">Prefer not to say</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Satisfaction */}
          <div className="space-y-3">
            <Label className="text-base font-medium">Satisfaction Level (1 = worst, 5 = excellent) <span className="text-red-500">*</span></Label>
            <div className="inline-grid grid-cols-5 gap-6">
              <RadioGroup
                orientation="horizontal"
                value={satisfaction}
                onValueChange={(v: string) => setSatisfaction(v)}
                className="col-span-5 grid grid-cols-5 gap-6 items-center"
              >
                {["1","2","3","4","5"].map((n) => (
                  <label key={n} className="flex items-center gap-2 text-sm justify-self-start">
                    <RadioGroupItem value={n} />
                    <span>{n}</span>
                  </label>
                ))}
              </RadioGroup>
              <span className="col-start-1 mt-1 text-xs text-muted-foreground justify-self-start">Worst</span>
              <span className="col-start-5 mt-1 text-xs text-muted-foreground justify-self-end">Excellent</span>
            </div>
          </div>
          {/* Feedback */}
          <div className="space-y-2">
            <Label htmlFor="feedback" className="text-base font-medium">Feedback</Label>
            <textarea
              id="feedback"
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Share your experience or suggestions"
              className="min-h-[120px] w-full resize-y rounded-md border bg-background p-3 text-sm focus-visible:ring-ring/50 focus-visible:ring-[3px]"
            />
          </div>

          <div className="pt-2">
            <Button type="submit" className="rounded-full px-6">Submit</Button>
          </div>
            </CardContent>
          </Card>
        </form>
      </div>
    </div>
  )
}


