

import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Navbar from "./shared/Navbar";
import HeroSection from "./HeroSection";
import CategoryCarousel from "./CategoryCarousel";
import LatestJobs from "./LatestJobs";
import Footer from "./shared/Footer";

import useGetAllJobs from "@/hooks/useGetAllJobs";

const Home = () => {
  useGetAllJobs();

  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies", { replace: true });
    }
  }, [user, navigate]);

  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <HeroSection />
        <CategoryCarousel />
        <LatestJobs />
      </main>

      <Footer />
    </>
  );
};

export default Home;