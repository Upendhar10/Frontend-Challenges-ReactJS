import Header from "../Components/00-Home/Header";
import Projects from "../Components/00-Home/Projects";
import Footer from "../Components/00-Home/Footer";

function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-12 text-white Home-bg">
      <Header />
      <Projects />
      <Footer />
    </div>
  );
}

export default Home;
