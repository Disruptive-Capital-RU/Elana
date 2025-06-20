"use client";

import Link from "next/link";
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
  Brain,
  FileText,
  TrendingUp,
  Shield,
  ArrowRight,
  CheckCircle,
  Lock,
  Microscope,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { useState } from "react";

export default function HowItWorksPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const steps = [
    {
      number: "01",
      title: "Upload Your DNA",
      description:
        "Start by uploading your raw DNA file from 23andMe, MyHeritage, AncestryDNA, or other providers.",
      icon: Upload,
      details: [
        "✅ Accepted file formats: .txt, .csv, .zip",
        "🔒 Privacy note: Your data is stored securely and never shared.",
      ],
    },
    {
      number: "02",
      title: "AI Analysis of Key Genetic Markers",
      description:
        "Our engine analyzes 10,000+ SNPs related to nutrition, metabolism, vitamin absorption, and food sensitivities.",
      icon: Brain,
      details: [
        "rs662799 → Fat metabolism",
        "rs1801133 → Folate (Vitamin B9) processing",
        "rs4988235 → Lactose tolerance",
        "🔬 Backed by peer-reviewed scientific research",
      ],
    },
    {
      number: "03",
      title: "Personalized Nutrition Plan",
      description:
        "We generate evidence-based, AI-curated recommendations for your diet, supplements, and daily habits.",
      icon: FileText,
      details: [
        "Dietary style (e.g., Mediterranean, Low-carb, High-protein)",
        "Specific food recommendations",
        "Supplement suggestions (with dosages)",
        "Lifestyle tips (e.g., caffeine sensitivity, satiety cues)",
      ],
    },
    {
      number: "04",
      title: "Visual Report + Meal Plan",
      description:
        "Receive a full visual report with color-coded gene insights, and a weekly meal plan tailored to your DNA and preferences.",
      icon: TrendingUp,
      details: [
        "Traffic-light style gene dashboard",
        "Easy explanations of each gene's impact",
        "Recipes linked to your nutrient needs",
      ],
    },
    {
      number: "05",
      title: "Track Progress & Get Updates",
      description:
        "Use your dashboard to monitor progress, tweak your plan, and get updated advice as we learn more about your genes.",
      icon: Shield,
      details: [
        "Apple Health / Google Fit (future feature)",
        "Self-reported metrics: energy, sleep, digestion",
      ],
    },
  ];

  const faqs = [
    {
      question: "What Genes Do You Analyze?",
      answer:
        "We focus on SNPs with strong scientific backing from GWAS studies and clinical literature — including FTO, MTHFR, CYP1A2, TCF7L2, and more.",
    },
    {
      question: "How Accurate Is the Analysis?",
      answer:
        "Our SNP-parsing engine has 99.9% accuracy based on benchmarked datasets. Recommendations are based on meta-analyses and reviewed literature.",
    },
    {
      question: "Do I Need to Know Genetics to Use Elana?",
      answer:
        "No. We translate complex results into actionable insights — no jargon, just food and health guidance.",
    },
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
              🧬 Science-Based Genetic Analysis
            </Badge>
            <h1 className="ubs-heading-1 mb-8">
              How It Works: From Your{" "}
              <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">
                Genes to Your Plate
              </span>
            </h1>
            <p className="ubs-body text-xl mb-10 max-w-3xl mx-auto leading-relaxed">
              Discover the science behind personalized nutrition and how your
              unique genetic profile shapes your optimal diet and lifestyle
              choices.
            </p>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="ubs-section">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl">
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-center gap-12 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                        <span className="text-green-700 font-bold text-lg">
                          {step.number}
                        </span>
                      </div>
                      <h2 className="ubs-heading-3 text-2xl">{step.title}</h2>
                    </div>
                    <p className="ubs-body text-lg leading-relaxed">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          className="flex items-start space-x-3"
                        >
                          <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Visual */}
                  <div className="flex-1 flex justify-center">
                    <div className="w-80 h-80 bg-green-50 rounded-2xl flex items-center justify-center border border-green-100">
                      <step.icon className="h-24 w-24 text-green-600" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scientific Transparency Section */}
      <section className="ubs-section bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="ubs-heading-2 mb-6">Scientific Transparency</h2>
              <p className="ubs-body text-lg leading-relaxed">
                We believe in complete transparency about our methodology and
                the science behind our recommendations.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <Card key={index} className="ubs-card">
                  <CardHeader>
                    <button
                      className="flex items-center justify-between w-full text-left"
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                    >
                      <CardTitle className="text-lg font-semibold">
                        {faq.question}
                      </CardTitle>
                      {openFaq === index ? (
                        <ChevronUp className="h-5 w-5 text-green-600" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-green-600" />
                      )}
                    </button>
                  </CardHeader>
                  {openFaq === index && (
                    <CardContent>
                      <p className="ubs-body leading-relaxed text-gray-700">
                        {faq.answer}
                      </p>
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>

            {/* Additional Scientific Info */}
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <Card className="ubs-card text-center">
                <CardContent className="pt-8">
                  <Microscope className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">99.9% Accuracy</h3>
                  <p className="text-gray-600 text-sm">
                    SNP-parsing engine benchmarked against validated datasets
                  </p>
                </CardContent>
              </Card>

              <Card className="ubs-card text-center">
                <CardContent className="pt-8">
                  <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Evidence-Based</h3>
                  <p className="text-gray-600 text-sm">
                    All recommendations backed by peer-reviewed research
                  </p>
                </CardContent>
              </Card>

              <Card className="ubs-card text-center">
                <CardContent className="pt-8">
                  <Lock className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Privacy First</h3>
                  <p className="text-gray-600 text-sm">
                    Your genetic data is encrypted and never shared
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="ubs-section bg-gradient-to-r from-green-600 to-green-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container relative mx-auto px-4 text-center">
          <h2 className="ubs-heading-2 mb-6 text-white">
            Ready to Discover What Your DNA Says About Your Nutrition?
          </h2>
          <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join thousands of people who have transformed their health with
            precision genetic insights and personalized nutrition plans.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/upload">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-gray-50 text-lg px-10 py-4 rounded-md shadow-sm font-medium"
              >
                <Upload className="mr-2 h-5 w-5" />
                Upload Your DNA
              </Button>
            </Link>
            <Link href="/demo">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-10 py-4 border-white/30 text-white hover:bg-white/10 rounded-md font-medium"
              >
                <FileText className="mr-2 h-5 w-5" />
                See a Sample Report
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
