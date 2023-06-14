import React from "react";
import Services from "../components/home/Services";
import Hero from "../components/home/Hero";
import Benifits from "../components/home/Benifits";
import Join from "../components/home/Join";
import Regestration from "../components/home/Regestration";
import Details from "../components/home/Details";
import PostIdeas from "../components/home/PostIdeas";
import Faq from "../components/home/Faq";
import QuickSignUp from "../components/home/QuickSignUp";

export default function Home() {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <Benifits />
      <Join />
      <Regestration/>
      <Details />
      <PostIdeas />
      <Faq/>
      <QuickSignUp />
    </div>
  );
}
