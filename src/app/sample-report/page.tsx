"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Upload,
  Download,
  ChevronDown,
  ChevronUp,
  Activity,
  FileText,
  Dna,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Microscope,
  Clock,
  AlertCircle,
} from "lucide-react";

export default function SampleReportPage() {
  const [openGene, setOpenGene] = useState<number | null>(null);

  const geneticFindings = [
    {
      gene: "FTO (rs9939609)",
      impact: "Increased risk of weight gain from high saturated fat intake",
      meaning:
        "You may process fat less efficiently, especially from red meat or processed foods.",
      recommendation:
        "Prioritize monounsaturated fats (avocado, olive oil); limit fatty meats.",
      color: "orange",
    },
    {
      gene: "MTHFR (rs1801133)",
      impact: "Reduced folate conversion (TT genotype)",
      meaning: "Your body may need more bioavailable folate (L-methylfolate)",
      recommendation:
        "Take folate-rich foods (leafy greens), consider a methylfolate supplement.",
      color: "blue",
    },
    {
      gene: "LCT (rs4988235)",
      impact: "Likely lactose intolerant",
      meaning: "You may have trouble digesting dairy",
      recommendation:
        "Avoid milk, choose lactose-free or plant-based alternatives",
      color: "red",
    },
    {
      gene: "CYP1A2 (rs762551)",
      impact: "Slow caffeine metabolizer",
      meaning: "Caffeine stays in your system longer, may affect sleep quality",
      recommendation:
        "Limit caffeine after 2pm; consider green tea over coffee",
      color: "purple",
    },
  ];

  const mealPlan = [
    {
      day: "Monday",
      breakfast: "Avocado toast + greens",
      lunch: "Lentil salad + olive oil",
      dinner: "Grilled salmon + quinoa",
    },
    {
      day: "Tuesday",
      breakfast: "Smoothie (spinach + banana)",
      lunch: "Chickpea bowl",
      dinner: "Zucchini pasta + seeds",
    },
    {
      day: "Wednesday",
      breakfast: "Oatmeal + berries",
      lunch: "Brown rice + tofu",
      dinner: "Baked cod + steamed veggies",
    },
  ];

  const topFoods = [
    { name: "Spinach", emoji: "🥬" },
    { name: "Salmon", emoji: "🐟" },
    { name: "Olive oil", emoji: "🫒" },
    { name: "Lentils", emoji: "🫘" },
    { name: "Avocado", emoji: "🥑" },
  ];

  const limitFoods = [
    { name: "Cheese", emoji: "🧀" },
    { name: "Fatty red meats", emoji: "🥩" },
    { name: "White bread", emoji: "🥖" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="ubs-hero ubs-section relative">
        <div className="container relative mx-auto px-4 py-24">
          <div className="mx-auto max-w-4xl text-center">
            <Badge
              className="mb-6 bg-green-50 text-green-700 border-green-200"
              variant="secondary"
            >
              📄 Sample Genetic Report
            </Badge>
            <h1 className="ubs-heading-1 mb-8">
              Your Personalized Nutrition Report —{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Sample
              </span>
            </h1>
            <p className="ubs-body text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Explore a real example of what you'll receive after uploading your
              DNA. This report includes gene analysis, personalized nutrition
              advice, and a weekly meal plan — all based on your unique genetic
              profile.
            </p>
          </div>
        </div>
      </section>

      {/* DNA Summary Dashboard */}
      <section className="ubs-section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="ubs-heading-2 text-center mb-12">
              🧬 Genetic Highlights
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="ubs-card text-center">
                <CardContent className="pt-8">
                  <Microscope className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-2xl text-green-600 mb-2">
                    10,282
                  </h3>
                  <p className="text-gray-600">Analyzed Variants (SNPs)</p>
                </CardContent>
              </Card>

              <Card className="ubs-card text-center">
                <CardContent className="pt-8">
                  <Activity className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Key Areas</h3>
                  <p className="text-sm text-gray-600">
                    Fat metabolism, vitamin absorption, gluten/lactose
                    intolerance, caffeine sensitivity
                  </p>
                </CardContent>
              </Card>

              <Card className="ubs-card text-center">
                <CardContent className="pt-8">
                  <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-bold text-2xl text-green-600 mb-2">
                    99.9%
                  </h3>
                  <p className="text-gray-600">Report Accuracy</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Genetic Insights */}
      <section className="ubs-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="ubs-heading-2 text-center mb-12">
              Your Key Genetic Findings
            </h2>
            <p className="text-center text-gray-600 mb-8">
              For each gene, we show: ID, impact, what it means, and
              personalized recommendation
            </p>

            <div className="space-y-4">
              {geneticFindings.map((gene, index) => (
                <Card key={index} className="ubs-card">
                  <CardHeader>
                    <button
                      className="flex items-center justify-between w-full text-left"
                      onClick={() =>
                        setOpenGene(openGene === index ? null : index)
                      }
                    >
                      <div className="flex items-center space-x-3">
                        <div
                          className={`w-3 h-3 rounded-full ${
                            gene.color === "orange"
                              ? "bg-orange-500"
                              : gene.color === "blue"
                              ? "bg-blue-500"
                              : gene.color === "red"
                              ? "bg-red-500"
                              : "bg-purple-500"
                          }`}
                        ></div>
                        <CardTitle className="text-lg font-semibold">
                          Gene: {gene.gene}
                        </CardTitle>
                      </div>
                      {openGene === index ? (
                        <ChevronUp className="h-5 w-5 text-green-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-green-600" />
                      )}
                    </button>
                  </CardHeader>
                  {openGene === index && (
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Impact:
                        </h4>
                        <p className="text-gray-700">{gene.impact}</p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          What It Means:
                        </h4>
                        <p className="text-gray-700">{gene.meaning}</p>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <h4 className="font-semibold text-green-800 mb-2">
                          Recommendation:
                        </h4>
                        <p className="text-green-700">{gene.recommendation}</p>
                      </div>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-600 mb-4">
                🧠 All genetic insights in this sample are based on
                peer-reviewed literature and referenced GWAS studies.
              </p>
              <Button variant="outline" className="ubs-button-outline">
                <FileText className="mr-2 h-4 w-4" />
                View Scientific Sources
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Personalized Nutrition Recommendations */}
      <section className="ubs-section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="ubs-heading-2 text-center mb-12">
              Personalized Nutrition Recommendations
            </h2>

            <Card className="ubs-card mb-8">
              <CardContent className="pt-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    Your Recommended Dietary Style:
                  </h3>
                  <Badge className="bg-green-100 text-green-800 text-lg px-4 py-2">
                    🥗 Modified Mediterranean (Low-Saturated-Fat)
                  </Badge>
                </div>

                <div className="grid gap-8 md:grid-cols-2 mt-8">
                  <div>
                    <h4 className="font-semibold text-lg mb-4">
                      Nutrient Focus:
                    </h4>
                    <div className="space-y-2">
                      <p>
                        <span className="text-green-600 font-medium">
                          More:
                        </span>{" "}
                        Folate (B9), Vitamin D, Omega-3s
                      </p>
                      <p>
                        <span className="text-red-600 font-medium">Less:</span>{" "}
                        Saturated fat, dairy, high-glycemic carbs
                      </p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg mb-4">
                      Top Foods for You:
                    </h4>
                    <div className="space-y-2">
                      {topFoods.map((food, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2"
                        >
                          <span className="text-xl">{food.emoji}</span>
                          <span>{food.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold text-lg mb-4">
                    Foods to Limit:
                  </h4>
                  <div className="flex flex-wrap gap-4">
                    {limitFoods.map((food, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-2 bg-red-50 px-3 py-2 rounded-lg"
                      >
                        <span className="text-xl">{food.emoji}</span>
                        <span className="text-red-700">{food.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Weekly Meal Plan Preview */}
      <section className="ubs-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="ubs-heading-2 text-center mb-12">
              Your Sample 3-Day Meal Snapshot
            </h2>

            <Card className="ubs-card">
              <CardContent className="pt-6">
                <div className="overflow-x-auto">
                  <table className="w-full table-auto">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 font-semibold">
                          Day
                        </th>
                        <th className="text-left py-3 px-4 font-semibold">
                          Breakfast
                        </th>
                        <th className="text-left py-3 px-4 font-semibold">
                          Lunch
                        </th>
                        <th className="text-left py-3 px-4 font-semibold">
                          Dinner
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {mealPlan.map((day, index) => (
                        <tr
                          key={index}
                          className="border-b border-gray-100 hover:bg-green-50"
                        >
                          <td className="py-4 px-4 font-medium">{day.day}</td>
                          <td className="py-4 px-4">{day.breakfast}</td>
                          <td className="py-4 px-4">{day.lunch}</td>
                          <td className="py-4 px-4">{day.dinner}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 text-center">
                  <Button className="ubs-button-primary">
                    <Download className="mr-2 h-5 w-5" />
                    Download Full PDF Sample Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Supplement & Lifestyle Recommendations */}
      <section className="ubs-section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="ubs-heading-2 text-center mb-12">
              Supplement & Lifestyle Recommendations
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <Card className="ubs-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <AlertCircle className="h-5 w-5 text-green-600" />
                    <span>Supplement Suggestions</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span>Methylfolate</span>
                    <Badge variant="secondary">400mcg daily</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <span>Omega-3</span>
                    <Badge variant="secondary">1000mg EPA/DHA</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="ubs-card">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Clock className="h-5 w-5 text-green-600" />
                    <span>Lifestyle Tips</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm">
                      Limit caffeine after 2pm (CYP1A2 gene suggests slow
                      metabolizer)
                    </p>
                  </div>
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <p className="text-sm">
                      Walk 30 mins daily for optimal fat metabolism response
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Report Visual Previews */}
      <section className="ubs-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="ubs-heading-2 text-center mb-12">
              Report Visual Previews
            </h2>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                "Gene Dashboard",
                "Meal Plan Pages",
                "Supplement Card",
                "Progress Tracking",
              ].map((preview, index) => (
                <Card key={index} className="ubs-card text-center">
                  <CardContent className="pt-6">
                    <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg flex items-center justify-center mb-4">
                      <TrendingUp className="h-12 w-12 text-green-600" />
                    </div>
                    <h3 className="font-semibold">{preview}</h3>
                    <p className="text-sm text-gray-600 mt-2">
                      Visual report preview
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="ubs-section bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="ubs-heading-2 mb-6 text-white">
            Ready to Get Your Own Report?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Your body is unique — your diet should be too. Upload your DNA today
            and get a fully personalized report like the one above.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/upload">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-50 text-lg px-10 py-4 rounded-md shadow-sm font-medium"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload DNA Now
              </Button>
            </Link>
            <Link href="/pricing">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-4 border-white/30 text-white hover:bg-white/10 rounded-md font-medium"
              >
                See Pricing Options
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
