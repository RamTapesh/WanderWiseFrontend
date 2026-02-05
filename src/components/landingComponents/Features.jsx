  import React from "react";
  import FeaturesCard from "../common/FeaturesCard";
  import { BanknoteArrowUp, Notebook, NotebookPen, UserPen } from "lucide-react";

  const featuresData = [
    {
      title: "User Authentication & Profiles",
      description:
        "Secure user registration and login system allowing travelers to manage personal details, preferences, and travel history.",   
      icon : UserPen

    },
    {
      title: "Trip Planning & Itinerary Management",
      description:
        "Create, update, and organize travel itineraries including destinations, dates, activities, and notes.",
        icon : Notebook

    },
    {
      title: "Booking Management",
      description:
        "Manage bookings for flights, hotels, and transportation with real-time status updates and confirmations.",
      icon : NotebookPen

    },
    {
      title: "Budget & Expense Tracking",
      description:
        "Track travel budgets, expenses, and payments to help users stay within planned spending limits.",
      icon : BanknoteArrowUp

    },
  ];

  const Features = () => {
    return (
      <section className="px-20 py-20">
        {/* heading */}
        <div>
          <h2 className="text-4xl font-bold text-center mb-4">Features</h2>
          <p className="text-center text-gray-600">
            Discover the power of going to manage Mustang of dirt bike.
          </p>
        </div>

        {/* features  */}
        <div className="grid grid-cols-4 gap-6 mt-10">
          
          {featuresData.map((feature, index) => (
            <FeaturesCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
            />
          ))}
        </div>
      </section>
    );
  };
  export default Features;