import React, { useState } from "react";

const businesses = [
  {
    id: 1,
    name: "Aloha Eats",
    category: "Restaurants",
    rating: 4.5,
    premium: true,
    image: "https://source.unsplash.com/400x300/?restaurant,food",
  },
  {
    id: 2,
    name: "Island Gym",
    category: "Fitness",
    rating: 4.2,
    premium: false,
    image: "https://source.unsplash.com/400x300/?gym,fitness",
  },
  {
    id: 3,
    name: "Beach Boutique",
    category: "Shopping",
    rating: 4.8,
    premium: true,
    image: "https://source.unsplash.com/400x300/?clothing,store",
  },
  {
    id: 4,
    name: "Ocean Spa",
    category: "Beauty",
    rating: 4.6
