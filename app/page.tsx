import Banner from "@/components/Homepage/Banner";
import GoogleReviews from "@/components/Homepage/GoogleReview";
import Premises from "@/components/Homepage/Premises";
import TheTeam from "@/components/Homepage/TheTeam";
import TradeIn from "@/components/Homepage/TradeIn";
import Vacancies from "@/components/Homepage/Vacancies";
import VisitUs from "@/components/Homepage/VisitUs";
import WhyUs from "@/components/Homepage/WhyUs";

export default function Home() {

  return (
    <main>
      <Banner />
      <Vacancies products={[]}/>
      <WhyUs />
      <TheTeam />
      <GoogleReviews />
      <Premises />
      <TradeIn />
      <VisitUs />
    </main>
  );
}
